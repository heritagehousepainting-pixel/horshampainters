const DEFAULT_TO_EMAIL = "heritagehousepainting@gmail.com";
const DEFAULT_FROM_EMAIL = "Heritage House Painting <onboarding@resend.dev>";

function readField(body, name) {
  const value = body && body[name];
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function leadEmailHtml(fields) {
  const rows = Object.entries(fields)
    .map(([label, value]) => {
      return `<tr><th align="left" style="padding:8px;border-bottom:1px solid #e5e7eb;">${escapeHtml(label)}</th><td style="padding:8px;border-bottom:1px solid #e5e7eb;">${escapeHtml(value)}</td></tr>`;
    })
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;">
      <h2 style="margin:0 0 12px;">New painting estimate request</h2>
      <table cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;max-width:720px;">${rows}</table>
    </div>
  `;
}

function leadEmailText(fields) {
  return Object.entries(fields)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

async function sendWithResend({ subject, html, text, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const payload = {
    from: process.env.LEAD_FROM_EMAIL || DEFAULT_FROM_EMAIL,
    to: [process.env.LEAD_TO_EMAIL || DEFAULT_TO_EMAIL],
    subject,
    html,
    text
  };

  if (replyTo) {
    payload.reply_to = replyTo;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend email failed: ${response.status} ${details}`);
  }

  return response.json();
}

module.exports = async function estimateHandler(req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  try {
    const body = typeof req.body === "object" && req.body ? req.body : {};

    if (readField(body, "_honey")) {
      res.status(200).json({ ok: true });
      return;
    }

    const fullName = readField(body, "Full name");
    const phone = readField(body, "Phone");
    const email = readField(body, "email");
    const projectAddress = readField(body, "Project address");
    const serviceNeeded = readField(body, "Service needed");
    const projectDetails = readField(body, "Project details");
    const marketingSite = readField(body, "Marketing site") || req.headers.host || "unknown site";
    const seasonalOffer = readField(body, "Seasonal offer");
    const subject = readField(body, "_subject") || `New painting estimate request from ${marketingSite}`;

    if (!fullName || !phone || !projectAddress || !serviceNeeded) {
      res.status(400).json({
        ok: false,
        error: "Full name, phone, project address, and service needed are required."
      });
      return;
    }

    const fields = {
      "Full name": fullName,
      Phone: phone,
      Email: email || "Not provided",
      "Project address": projectAddress,
      "Service needed": serviceNeeded,
      "Project details": projectDetails || "Not provided",
      "Marketing site": marketingSite,
      "Seasonal offer": seasonalOffer || "Not provided",
      "Submitted at": new Date().toISOString(),
      Referrer: req.headers.referer || "Not provided",
      "User agent": req.headers["user-agent"] || "Not provided"
    };

    await sendWithResend({
      subject,
      html: leadEmailHtml(fields),
      text: leadEmailText(fields),
      replyTo: email || undefined
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      error: "Estimate request could not be sent. Please call (215) 791-4043."
    });
  }
};
