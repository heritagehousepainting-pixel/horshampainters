const fs = require("fs");
const path = require("path");

const outRoot = path.join(process.cwd(), "generated-local-sites");
const phone = "(215) 791-4043";
const phoneHref = "+12157914043";
const email = "heritagehousepainting@gmail.com";
const address = "4001 1st Ave, Lafayette Hill, PA 19444";
const analyticsScript = '<script defer src="/analytics.js" data-posthog-key="phc_AnJ7YEniPw5kv7NrfxB9gQLQ4RpqLWu6vkGASD3FVejB" data-posthog-host="https://us.i.posthog.com"></script>';
const logoFile = "horsham-painters-logo-cropped.png";

const images = {
  heroInterior: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/c9aa5163-aece-42eb-ffa6-ad2e89dfce00/public",
  interior: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/444622e6-366b-4a9f-8976-ed938a216f00/public",
  exterior: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/4231e30b-749f-4db9-9b41-5dadcf7eb300/public",
  exterior2: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/bc3c2290-b882-4909-c275-9a3e59823200/public",
  drywall: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/edb494fc-58e4-484f-8ced-26035bce0000/public",
  bedroom: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/189a12c1-d346-430a-6d52-61d92630a100/public",
  bath: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/a577b56e-7ff7-4517-9904-3daf99c2a000/public",
  blueBellExterior: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/b5c76fc4-ce99-468e-159e-9e8633bf9e00/publicContain",
  blueBellHome: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/3617e33f-c95d-4b47-9fc5-ebcdbaff3d00/public",
  contact: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/2018605b-e120-4b3f-584a-94d0ec079100/public",
};

const sites = [
  {
    folder: "horshampainters",
    domain: "horshampainters.com",
    brand: "Horsham Painters",
    place: "Horsham Township",
    shortPlace: "Horsham",
    county: "Montgomery County",
    monogram: "HP",
    coords: "40.1784, -75.1285",
    colors: { ink: "#1d2227", navy: "#15283a", blue: "#315f84", gold: "#caa24e", paper: "#f2efe6" },
    nearby: ["Hatboro", "Warrington", "Warminster", "Ambler", "Upper Dublin", "Upper Moreland", "Lower Gwynedd", "Maple Glen", "Willow Grove", "Dresher"],
    related: [
      { domain: "amblerpainters.com", text: "Ambler painting services" },
      { domain: "bluebellpainters.com", text: "Blue Bell painting services" },
      { domain: "lowergwyneddpainters.com", text: "Lower Gwynedd painting estimates" },
    ],
    roads: "Horsham Road, Easton Road, Welsh Road, County Line Road, and the Horsham Township neighborhoods",
    positioning: "township homes, split-level houses, colonials, townhomes, and nearby commercial spaces",
    localProof: "Horsham Township exteriors, older trim, siding, shutters, porch railings, and interior repainting for homes near Easton Road and Horsham Road",
    landmarks: ["Horsham Township", "Horsham Road", "Easton Road", "County Line Road", "Hatboro"],
  },
  {
    folder: "lowergwyneddpainters",
    domain: "lowergwyneddpainters.com",
    brand: "Lower Gwynedd Painters",
    place: "Lower Gwynedd Township",
    shortPlace: "Lower Gwynedd",
    county: "Montgomery County",
    monogram: "LG",
    coords: "40.1887, -75.2466",
    colors: { ink: "#172126", navy: "#0f2a27", blue: "#245a50", gold: "#c7a65a", paper: "#f3efe5" },
    nearby: ["Ambler", "Gwynedd Valley", "Spring House", "Penllyn", "Blue Bell", "Whitpain Township", "Upper Dublin Township", "Montgomery Township", "Fort Washington", "North Wales"],
    related: [
      { domain: "amblerpainters.com", text: "Ambler painting services" },
      { domain: "bluebellpainters.com", text: "Blue Bell painting services" },
      { domain: "horshampainters.com", text: "Horsham-area painting estimates" },
    ],
    roads: "Bethlehem Pike, Sumneytown Pike, Welsh Road, Penllyn Blue Bell Pike, and Spring House village",
    positioning: "township homes, established neighborhoods, and premium Montgomery County properties",
    localProof: "large lots, mature landscaping, and township homes where exterior prep, clean edges, and schedule communication matter",
    landmarks: ["Spring House Village", "Gwynedd Valley", "Penllyn", "Bethlehem Pike", "Lower Gwynedd Township"],
  },
  {
    folder: "amblerpainters",
    domain: "amblerpainters.com",
    brand: "Ambler Painters",
    place: "Ambler",
    shortPlace: "Ambler",
    county: "Montgomery County",
    monogram: "AP",
    coords: "40.1546, -75.2216",
    colors: { ink: "#1d1c21", navy: "#211638", blue: "#4b3275", gold: "#d1a64d", paper: "#f5efe6" },
    nearby: ["Lower Gwynedd", "Fort Washington", "Maple Glen", "Blue Bell", "Dresher", "Whitpain Township", "Upper Dublin Township", "Spring House", "Wissahickon", "Flourtown"],
    related: [
      { domain: "lowergwyneddpainters.com", text: "Lower Gwynedd painting services" },
      { domain: "bluebellpainters.com", text: "Blue Bell painting estimates" },
      { domain: "horshampainters.com", text: "Horsham-area painting information" },
    ],
    roads: "Butler Pike, Bethlehem Pike, Limekiln Pike, Tennis Avenue, and the Wissahickon Valley area",
    positioning: "borough homes, Main Street properties, townhomes, and nearby township houses",
    localProof: "borough homes, porches, older trim, Main Street properties, and nearby Upper Dublin and Lower Gwynedd neighborhoods",
    landmarks: ["Ambler Main Street", "Butler Pike", "Wissahickon Valley", "Limekiln Pike", "Fort Washington"],
  },
  {
    folder: "bluebellpainters",
    domain: "bluebellpainters.com",
    brand: "Blue Bell Painters",
    place: "Blue Bell",
    shortPlace: "Blue Bell",
    county: "Montgomery County",
    monogram: "BB",
    coords: "40.1523, -75.2663",
    colors: { ink: "#15202d", navy: "#0b243d", blue: "#1f5b8c", gold: "#cba850", paper: "#edf3f6" },
    nearby: ["Whitpain Township", "Lower Gwynedd", "Ambler", "Plymouth Meeting", "Center Square", "Gwynedd Valley", "Worcester Township", "Lafayette Hill", "Fort Washington", "Maple Glen"],
    related: [
      { domain: "amblerpainters.com", text: "Ambler painting services" },
      { domain: "lowergwyneddpainters.com", text: "Lower Gwynedd painting estimates" },
      { domain: "plymouthmeetingpainters.com", text: "Plymouth Meeting painting services" },
    ],
    roads: "Skippack Pike, DeKalb Pike, Township Line Road, Penllyn Blue Bell Pike, and Center Square",
    positioning: "Blue Bell homes, larger residential properties, and professional spaces near Whitpain Township",
    localProof: "Whitpain-area homes, larger exterior elevations, office properties, and trim-heavy interiors near Skippack Pike",
    landmarks: ["Skippack Pike", "Center Square", "Whitpain Township", "Penllyn Blue Bell Pike", "DeKalb Pike"],
  },
  {
    folder: "lafayettehillpainters",
    domain: "lafayettehillpainters.com",
    brand: "Lafayette Hill Painters",
    place: "Lafayette Hill",
    shortPlace: "Lafayette Hill",
    county: "Montgomery County",
    monogram: "LH",
    coords: "40.0873, -75.2571",
    colors: { ink: "#1e2524", navy: "#17312d", blue: "#385d4d", gold: "#d2ad57", paper: "#f4f0e8" },
    nearby: ["Whitemarsh Township", "Plymouth Meeting", "Conshohocken", "Flourtown", "Chestnut Hill", "Blue Bell", "Fort Washington", "Springfield Township", "Wyndmoor", "Erdenheim"],
    related: [
      { domain: "plymouthmeetingpainters.com", text: "Plymouth Meeting painting services" },
      { domain: "bluebellpainters.com", text: "Blue Bell painting information" },
      { domain: "gladwynepainters.com", text: "Gladwyne painting estimates" },
    ],
    roads: "Germantown Pike, Joshua Road, Ridge Pike, Harts Lane, and Barren Hill Road",
    positioning: "Whitemarsh Township homes, stone houses, townhomes, and local commercial spaces",
    localProof: "stone homes, Whitemarsh Township interiors, porch railings, shutters, and exterior trim close to Germantown Pike",
    landmarks: ["Germantown Pike", "Barren Hill", "Whitemarsh Township", "Joshua Road", "Chestnut Hill"],
  },
  {
    folder: "plymouthmeetingpainters",
    domain: "plymouthmeetingpainters.com",
    brand: "Plymouth Meeting Painters",
    place: "Plymouth Meeting",
    shortPlace: "Plymouth Meeting",
    county: "Montgomery County",
    monogram: "PM",
    coords: "40.1023, -75.2744",
    colors: { ink: "#1c2128", navy: "#13213a", blue: "#315a83", gold: "#c7a24e", paper: "#f1f3f4" },
    nearby: ["Lafayette Hill", "Whitemarsh Township", "Conshohocken", "Blue Bell", "East Norriton", "Norristown", "Flourtown", "Chestnut Hill", "Worcester Township", "Whitpain Township"],
    related: [
      { domain: "lafayettehillpainters.com", text: "Lafayette Hill painting services" },
      { domain: "bluebellpainters.com", text: "Blue Bell painting estimates" },
      { domain: "gladwynepainters.com", text: "Gladwyne-area painting information" },
    ],
    roads: "Germantown Pike, Butler Pike, Chemical Road, Plymouth Road, and the Plymouth Meeting Mall area",
    positioning: "residential neighborhoods, townhomes, office properties, and nearby Whitemarsh Township homes",
    localProof: "townhomes, single-family houses, office suites, and exterior projects around Germantown Pike and Chemical Road",
    landmarks: ["Plymouth Meeting Mall", "Germantown Pike", "Chemical Road", "Butler Pike", "Whitemarsh Township"],
  },
  {
    folder: "gladwynepainters",
    domain: "gladwynepainters.com",
    brand: "Gladwyne Painters",
    place: "Gladwyne",
    shortPlace: "Gladwyne",
    county: "Montgomery County",
    monogram: "GP",
    coords: "40.0398, -75.2805",
    colors: { ink: "#211d1a", navy: "#2b1f18", blue: "#5a4530", gold: "#d0b56c", paper: "#f6f0e6" },
    nearby: ["Lower Merion Township", "Bryn Mawr", "Villanova", "Ardmore", "Haverford", "Wynnewood", "Bala Cynwyd", "Conshohocken", "Penn Valley", "Merion Station"],
    related: [
      { domain: "ardmorepainters.com", text: "Ardmore painting services" },
      { domain: "waynepainters.com", text: "Wayne painting information" },
      { domain: "lafayettehillpainters.com", text: "Lafayette Hill painting estimates" },
    ],
    roads: "Youngs Ford Road, Conshohocken State Road, Waverly Road, and the Lower Merion Main Line",
    positioning: "Main Line estates, historic homes, stone houses, and luxury residential properties",
    localProof: "Main Line estates, historic stone homes, detailed millwork, and exterior trim where finish quality is highly visible",
    landmarks: ["Youngs Ford Road", "Conshohocken State Road", "Lower Merion Township", "Waverly Road", "Bryn Mawr"],
  },
  {
    folder: "waynepainters",
    domain: "waynepainters.com",
    brand: "Wayne Painters",
    place: "Wayne",
    shortPlace: "Wayne",
    county: "Delaware County",
    monogram: "WP",
    coords: "40.0437, -75.3877",
    colors: { ink: "#1a2024", navy: "#102936", blue: "#2d6870", gold: "#c99b4a", paper: "#eef3f2" },
    nearby: ["Radnor Township", "St. Davids", "Villanova", "Berwyn", "Devon", "Newtown Square", "King of Prussia", "Bryn Mawr", "Ardmore", "Paoli"],
    related: [
      { domain: "ardmorepainters.com", text: "Ardmore painting services" },
      { domain: "gladwynepainters.com", text: "Gladwyne painting estimates" },
    ],
    roads: "Lancaster Avenue, Wayne Avenue, Conestoga Road, North Wayne Avenue, and Radnor Township neighborhoods",
    positioning: "Main Line homes, Radnor Township properties, historic houses, and professional spaces",
    localProof: "Radnor Township homes, Main Line interiors, exterior trim, shutters, and Lancaster Avenue-area commercial spaces",
    landmarks: ["Lancaster Avenue", "Radnor Township", "Wayne Avenue", "St. Davids", "North Wayne"],
  },
  {
    folder: "ardmorepainters",
    domain: "ardmorepainters.com",
    brand: "Ardmore Painters",
    place: "Ardmore",
    shortPlace: "Ardmore",
    county: "Montgomery County",
    monogram: "AR",
    coords: "40.0068, -75.2855",
    colors: { ink: "#221d23", navy: "#301b2d", blue: "#6a365d", gold: "#cfa75a", paper: "#f6edf0" },
    nearby: ["Lower Merion Township", "Haverford Township", "Bryn Mawr", "Wynnewood", "Narberth", "Havertown", "Gladwyne", "Merion Station", "Villanova", "Bala Cynwyd"],
    related: [
      { domain: "gladwynepainters.com", text: "Gladwyne painting services" },
      { domain: "waynepainters.com", text: "Wayne painting information" },
    ],
    roads: "Lancaster Avenue, Ardmore Avenue, Montgomery Avenue, Haverford Road, and Suburban Square",
    positioning: "Main Line homes, twin homes, stone houses, retail spaces, and Lower Merion properties",
    localProof: "Main Line twins, stone homes, retail spaces, row homes, and Lower Merion interiors close to Lancaster Avenue",
    landmarks: ["Suburban Square", "Lancaster Avenue", "Lower Merion Township", "Ardmore Avenue", "Haverford Township"],
  },
];

const servicePages = [
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    serviceType: "Exterior house painting",
    summary: "Exterior painting for siding, trim, shutters, doors, porches, railings, and curb appeal updates.",
    keywords: ["exterior painter", "exterior house painting", "siding painting", "trim painting", "shutter painting"],
    image: images.exterior,
  },
  {
    slug: "interior-painting",
    title: "Interior Painting",
    serviceType: "Interior house painting",
    summary: "Interior painting for walls, ceilings, kitchens, bedrooms, stairways, living rooms, and whole-home repaints.",
    keywords: ["interior painter", "interior house painting", "wall painting", "ceiling painting", "whole-home repainting"],
    image: images.interior,
  },
  {
    slug: "drywall-repair",
    title: "Drywall Repair & Painting",
    serviceType: "Drywall repair and painting",
    summary: "Drywall patching, sanding, priming, texture blending, and repainting for clean finished walls.",
    keywords: ["drywall repair", "drywall patching", "wall repair", "painting after drywall repair"],
    image: images.drywall,
  },
  {
    slug: "cabinet-trim-painting",
    title: "Cabinet & Trim Painting",
    serviceType: "Cabinet and trim painting",
    summary: "Cabinet painting, trim painting, doors, built-ins, finish carpentry touch-ups, and detailed coating work.",
    keywords: ["cabinet painting", "trim painting", "door painting", "built-in painting", "finish painting"],
    image: images.bedroom,
  },
];

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function linkedList(items) {
  return items.map((item, index) => {
    const link = `<a href="https://${item.domain}/">${esc(item.text)}</a>`;
    if (items.length === 1) return link;
    if (index === items.length - 1) return `and ${link}`;
    return `${link}${items.length > 2 ? "," : ""}`;
  }).join(" ");
}

function serviceLinks(site) {
  return servicePages.map((service) => `<a href="/${service.slug}">${esc(service.title)}</a>`).join(" ");
}

function serviceMenu() {
  return `<details class="service-menu">
          <summary>Services</summary>
          <div class="service-menu-panel">
            ${servicePages.map((service) => `<a href="/${service.slug}">${esc(service.title)}</a>`).join("\n            ")}
          </div>
        </details>`;
}

function topNav(isHome = true) {
  const homeLink = isHome ? "" : "\n        <a href=\"/\">Home</a>";
  return `<nav aria-label="Primary navigation">${homeLink}
        ${serviceMenu()}
        <a href="${isHome ? "#areas" : "/#areas"}">Areas</a>
        <a href="${isHome ? "#faq" : "/#faq"}">FAQ</a>
        <a class="phone-link" href="tel:${phoneHref}">${phone}</a>
      </nav>`;
}

function estimateForm(site) {
  return `<form class="estimate-form" action="/api/estimate" method="POST" aria-label="Request a painting estimate">
            <input type="hidden" name="_subject" value="New ${esc(site.brand)} Estimate Request">
            <input type="hidden" name="Marketing site" value="${esc(site.domain)}">
            <input type="hidden" name="Seasonal offer" value="10% off qualifying exterior painting projects">
            <input type="text" name="_honey" class="form-honey" tabindex="-1" autocomplete="off" aria-hidden="true">
            <p class="form-kicker">Free Estimate</p>
            <h2>Request a ${esc(site.shortPlace)} painting quote</h2>
            <p class="form-note">Tell us about your project and ask about the seasonal exterior painting discount.</p>
            <div class="form-grid">
              <label>Full Name<input type="text" name="Full name" autocomplete="name" required></label>
              <label>Phone<input type="tel" name="Phone" autocomplete="tel" required></label>
              <label>Email<input type="email" name="email" autocomplete="email"></label>
              <label>Project Address<input type="text" name="Project address" autocomplete="street-address" placeholder="${esc(site.place)}, PA" required></label>
              <label class="full">Service Needed<select name="Service needed" required>
                <option value="">Choose a service</option>
                <option>Exterior painting - 10% seasonal offer</option>
                <option>Interior painting</option>
                <option>Drywall repair</option>
                <option>Trim, carpentry, or cabinets</option>
                <option>Commercial painting</option>
              </select></label>
              <label class="full">Project Details<textarea name="Project details" rows="4" placeholder="Tell us about the exterior areas, rooms, timing, or colors you have in mind."></textarea></label>
            </div>
            <button class="button primary form-submit" type="submit">Send Estimate Request</button>
            <p class="form-disclaimer">Free local estimates for ${esc(site.shortPlace)}-area painting projects. Exterior offer applies to qualifying projects.</p>
            <p class="form-status" role="status" aria-live="polite"></p>
          </form>`;
}

function img(src, alt) {
  return `<img src="${src}" alt="${esc(alt)}" loading="lazy" decoding="async" width="1200" height="900">`;
}

function css(site) {
  return `:root {
  color-scheme: light;
  --ink: ${site.colors.ink};
  --muted: #657184;
  --paper: ${site.colors.paper};
  --surface: #ffffff;
  --line: #dbd5c9;
  --navy: ${site.colors.navy};
  --blue: ${site.colors.blue};
  --gold: ${site.colors.gold};
  --shadow: 0 24px 80px rgba(10, 22, 40, 0.18);
}
* { box-sizing: border-box; min-width: 0; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.6;
}
img { display: block; height: auto; max-width: 100%; }
a { color: inherit; }
.site-header {
  align-items: center;
  background: rgba(10, 22, 40, 0.96);
  border-bottom: 1px solid rgba(219, 213, 201, 0.2);
  display: flex;
  gap: 18px;
  justify-content: space-between;
  left: 0;
  padding: 16px clamp(20px, 5vw, 72px);
  position: sticky;
  top: 0;
  z-index: 20;
}
.brand { align-items: center; display: inline-flex; gap: 12px; min-width: 250px; text-decoration: none; }
.brand-mark {
  align-items: center;
  background: var(--gold);
  border-radius: 8px;
  color: var(--navy);
  display: inline-flex;
  flex: 0 0 58px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  height: 58px;
  justify-content: center;
}
.brand-text strong { color: #fff; display: block; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 1.04rem; line-height: 1.1; }
.brand-text span { color: rgba(255, 255, 255, 0.74); display: block; font-size: 0.82rem; margin-top: 3px; }
nav { align-items: center; display: flex; gap: 22px; font-size: 0.94rem; font-weight: 700; justify-content: flex-end; }
nav a { color: #fff; text-decoration: none; }
.service-menu { position: relative; }
.service-menu summary {
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  gap: 6px;
  list-style: none;
}
.service-menu summary::-webkit-details-marker { display: none; }
.service-menu summary::after {
  border-color: currentColor transparent transparent;
  border-style: solid;
  border-width: 5px 4px 0;
  content: "";
  display: inline-block;
  margin-top: 2px;
}
.service-menu-panel {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 18px 42px rgba(10, 22, 40, 0.2);
  display: grid;
  gap: 2px;
  min-width: 238px;
  padding: 8px;
  position: absolute;
  right: 0;
  top: calc(100% + 14px);
  z-index: 30;
}
.service-menu-panel a {
  border-radius: 6px;
  color: var(--navy);
  display: block;
  line-height: 1.25;
  padding: 10px 12px;
  white-space: nowrap;
}
.service-menu-panel a:hover,
.service-menu-panel a:focus { background: #f4efe4; outline: none; }
.phone-link { background: var(--gold); border-radius: 8px; color: var(--navy); padding: 10px 14px; white-space: nowrap; }
.promo-banner {
  align-items: center;
  background: var(--gold);
  color: var(--navy);
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  justify-content: center;
  padding: 11px clamp(20px, 6vw, 86px);
  text-align: center;
}
.promo-banner strong { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 0.94rem; line-height: 1.2; text-transform: uppercase; }
.promo-banner span { font-weight: 700; line-height: 1.25; }
.promo-banner a {
  border: 1px solid rgba(10, 22, 40, 0.34);
  border-radius: 8px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 0.86rem;
  font-weight: 800;
  line-height: 1.1;
  padding: 8px 11px;
  text-decoration: none;
}
.hero { min-height: calc(100vh - 132px); overflow: hidden; position: relative; }
.hero-media { background-image: url("${images.heroInterior}"); background-position: center; background-size: cover; inset: 0; position: absolute; }
.hero-overlay {
  background: linear-gradient(90deg, rgba(10, 22, 40, 0.95), rgba(10, 22, 40, 0.78) 46%, rgba(10, 22, 40, 0.5)), linear-gradient(0deg, rgba(10, 22, 40, 0.62), transparent 48%);
  inset: 0;
  position: absolute;
}
.hero-content {
  align-items: center;
  color: #fff;
  display: grid;
  gap: clamp(28px, 5vw, 70px);
  grid-template-columns: minmax(0, 1fr) minmax(340px, 480px);
  margin: 0 auto;
  max-width: 1240px;
  padding: clamp(48px, 8vh, 88px) clamp(20px, 6vw, 72px);
  position: relative;
  z-index: 1;
}
.eyebrow, .form-kicker {
  color: var(--gold);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  margin: 0 0 14px;
  text-transform: uppercase;
}
h1, h2 { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0; line-height: 1.12; margin: 0; }
h1 { font-size: clamp(2.35rem, 5.2vw, 4.65rem); font-weight: 800; max-width: 760px; text-wrap: balance; }
h2 { font-size: clamp(2rem, 4vw, 3.6rem); font-weight: 800; text-wrap: balance; }
h3 { font-size: 1.18rem; line-height: 1.2; margin: 0 0 10px; text-wrap: balance; }
p { margin: 0; overflow-wrap: break-word; }
.hero-copy { color: rgba(255, 255, 255, 0.88); font-size: clamp(1.06rem, 2vw, 1.3rem); margin-top: 20px; max-width: 650px; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 24px; }
.button {
  align-items: center;
  border-radius: 8px;
  display: inline-flex;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 700;
  justify-content: center;
  min-height: 48px;
  padding: 13px 18px;
  text-align: center;
  text-decoration: none;
  white-space: normal;
}
.button.primary { background: var(--gold); color: var(--navy); }
.button.secondary { border: 1px solid rgba(255, 255, 255, 0.58); color: #fff; }
.trust-list { display: flex; flex-wrap: wrap; gap: 10px; list-style: none; margin: 24px 0 0; padding: 0; }
.trust-list li {
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
  line-height: 1.25;
  padding: 10px 12px;
  text-align: center;
}
.estimate-form {
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(219, 213, 201, 0.82);
  border-radius: 8px;
  box-shadow: var(--shadow);
  color: var(--ink);
  padding: clamp(22px, 3vw, 32px);
}
.estimate-form h2 { color: var(--navy); font-size: clamp(1.5rem, 3vw, 2.15rem); line-height: 1.14; }
.form-kicker { margin-bottom: 8px; }
.form-note, .form-disclaimer { color: var(--muted); font-size: 0.95rem; }
.form-note { margin-top: 8px; }
.form-grid { display: grid; gap: 14px; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 20px; }
.form-honey { display: none; }
.estimate-form label { color: var(--navy); display: grid; font-size: 0.84rem; font-weight: 800; gap: 6px; }
.estimate-form .full { grid-column: 1 / -1; }
.estimate-form input, .estimate-form select, .estimate-form textarea {
  background: #f8f6f0;
  border: 1px solid var(--line);
  border-radius: 8px;
  color: var(--ink);
  font: inherit;
  line-height: 1.35;
  min-height: 44px;
  padding: 10px 12px;
  width: 100%;
}
.estimate-form textarea { min-height: 116px; resize: vertical; }
.estimate-form input:focus, .estimate-form select:focus, .estimate-form textarea:focus { border-color: var(--gold); outline: 3px solid rgba(201, 162, 79, 0.22); }
.form-submit { border: 0; margin-top: 18px; width: 100%; }
.form-disclaimer { margin-top: 12px; text-align: center; }
.form-submit:disabled {
  cursor: wait;
  opacity: 0.72;
}
.form-status {
  font-weight: 700;
  margin-top: 10px;
  min-height: 1.35em;
  text-align: center;
}
.form-status[data-state="success"] { color: #176b3a; }
.form-status[data-state="error"] { color: #a73535; }
.form-status[data-state="pending"] { color: var(--muted); }
.section { padding: clamp(64px, 9vw, 112px) clamp(20px, 6vw, 86px); scroll-margin-top: 92px; }
.intro, .local { align-items: start; display: grid; gap: 40px; grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr); }
.section-copy p:not(.eyebrow), .section-heading p, .why p, .faq p, .site-footer p { color: var(--muted); }
.section-copy p:not(.eyebrow), .section-heading p { font-size: 1.05rem; margin-top: 20px; max-width: 760px; }
.proof-grid {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: var(--shadow);
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
}
.proof-grid div { background: #fff; padding: 28px 20px; }
.proof-grid strong { color: var(--blue); display: block; font-size: 2rem; line-height: 1; }
.proof-grid span { color: var(--muted); display: block; font-size: 0.85rem; font-weight: 700; line-height: 1.35; margin-top: 10px; }
.answer-section, .services, .township-seo, .faq { background: #fff; }
.local-proof { background: #f8f6f0; }
.project-photos { background: var(--paper); }
.answer-grid, .proof-notes { display: grid; gap: 18px; grid-template-columns: repeat(4, minmax(0, 1fr)); }
.proof-notes { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.answer-grid article, .proof-notes article {
  background: #f8f6f0;
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 12px 28px rgba(10, 22, 40, 0.06);
  padding: 22px;
}
.proof-notes article { background: #fff; }
.answer-grid h3, .proof-notes h3, .township-grid h3 { color: var(--navy); font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 1.06rem; }
.answer-grid p, .proof-notes p, .township-grid p, .service-grid article p { color: var(--muted); }
.proof-notes a { color: var(--blue); display: inline-block; font-weight: 800; margin: 0 10px 8px 0; text-underline-offset: 0.18em; }
.section-heading { align-items: center; display: flex; flex-direction: column; margin: 0 auto 42px; max-width: 920px; text-align: center; width: 100%; }
.section-heading .eyebrow { display: block; margin-left: auto; margin-right: auto; text-align: center; width: 100%; }
.section-heading h2, .section-copy h2 { max-width: 900px; }
.service-grid, .why-grid, .photo-grid, .township-grid { display: grid; gap: 22px; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.service-grid article, .why-grid article, .township-grid article, .faq details, .contact-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
}
.service-grid article, .photo-grid figure, .why-grid article, .township-grid article, .faq details { box-shadow: 0 14px 34px rgba(10, 22, 40, 0.08); }
.service-grid img { aspect-ratio: 4 / 3; object-fit: cover; width: 100%; }
.service-grid article h3, .service-grid article p { padding-left: 20px; padding-right: 20px; }
.service-grid article h3 { margin-top: 22px; }
.service-grid article p { padding-bottom: 24px; }
.photo-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.photo-grid figure { background: #fff; border: 1px solid var(--line); border-radius: 8px; margin: 0; overflow: hidden; }
.photo-grid img { aspect-ratio: 1 / 1; object-fit: cover; width: 100%; }
.photo-grid figcaption { color: var(--ink); font-size: 0.92rem; font-weight: 800; line-height: 1.25; padding: 14px 16px; }
.township-grid article { border-top: 5px solid var(--gold); padding: 24px; }
.township-grid h3 { font-size: 1.08rem; line-height: 1.25; }
.local {
  background: linear-gradient(135deg, rgba(10, 22, 40, 0.96), rgba(22, 58, 99, 0.92)), url("${images.exterior}");
  background-position: center;
  background-size: cover;
  color: #fff;
}
.local .section-copy p:not(.eyebrow) { color: rgba(255, 255, 255, 0.78); }
.area-list { display: flex; flex-wrap: wrap; gap: 10px; }
.area-list span {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  color: #fff;
  font-weight: 800;
  line-height: 1.25;
  padding: 12px 14px;
  text-align: center;
}
.nearby-links {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  grid-column: 1 / -1;
  margin-top: 18px;
  padding: 22px;
}
.nearby-links h3 {
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 1.08rem;
  line-height: 1.25;
  margin: 0 0 8px;
}
.nearby-links p {
  color: rgba(255, 255, 255, 0.78);
  margin: 0;
  max-width: 880px;
}
.nearby-links a {
  color: #fff;
  font-weight: 800;
  text-underline-offset: 0.18em;
}
.why { background: linear-gradient(135deg, #f8f6f0, #e8dfcf); display: block; text-align: center; }
.why > div:first-child { margin: 0 auto 34px; max-width: 820px; }
.why-grid article { min-height: 210px; padding: 24px; text-align: left; }
.why-grid article h3 { font-size: 1.3rem; }
.why-grid article p { font-size: 1rem; line-height: 1.55; }
.faq details { margin: 12px auto; max-width: 900px; padding: 18px 20px; }
.faq summary { cursor: pointer; font-weight: 800; line-height: 1.3; text-wrap: balance; }
.faq details p { margin-top: 12px; }
.contact {
  background: linear-gradient(135deg, rgba(11, 31, 53, 0.98), rgba(26, 72, 112, 0.94));
  color: #fff;
  padding: clamp(64px, 9vw, 112px) clamp(20px, 6vw, 86px);
  scroll-margin-top: 92px;
}
.contact-panel { align-items: center; display: grid; gap: 36px; grid-template-columns: minmax(0, 0.95fr) minmax(340px, 480px); margin: 0 auto; max-width: 1160px; }
.contact-panel p:not(.eyebrow) { color: rgba(255, 255, 255, 0.82); margin-top: 18px; }
.contact-card { display: grid; gap: 12px; padding: 24px; }
.contact-card a, .contact-card span { color: var(--ink); font-weight: 700; }
.contact-card .button.primary { margin-top: 8px; }
.site-footer {
  background: var(--navy);
  color: #fff;
  display: grid;
  gap: 28px;
  grid-template-columns: 1.1fr 0.8fr 0.8fr;
  padding: 48px clamp(20px, 6vw, 86px) 26px;
}
.site-footer a { color: #fff; }
.site-footer p { margin-top: 12px; }
.site-footer strong { display: block; font-size: 0.98rem; letter-spacing: 0.02em; }
.copyright { border-top: 1px solid rgba(255, 255, 255, 0.16); grid-column: 1 / -1; padding-top: 22px; }
@media (max-width: 900px) {
  .site-header { align-items: flex-start; gap: 16px; flex-wrap: wrap; }
  nav { flex-wrap: wrap; justify-content: flex-end; }
  .intro, .hero-content, .local, .why, .contact-panel, .site-footer { grid-template-columns: 1fr; }
  .service-grid, .answer-grid, .proof-notes, .why-grid, .photo-grid, .township-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .site-header { align-items: center; position: static; }
  nav > a:not(.phone-link), .service-menu-panel a { display: none; }
  .service-menu { display: inline-flex; }
  .service-menu-panel { left: auto; min-width: 230px; right: 0; }
  .service-menu[open] .service-menu-panel a { display: block; }
  .hero { min-height: auto; }
  .hero-overlay { background: rgba(9, 24, 43, 0.82); }
  .hero-content { padding-top: 46px; }
  .section, .contact { padding-bottom: 56px; padding-top: 56px; scroll-margin-top: 0; }
  .brand { min-width: 0; }
  .brand-mark { flex-basis: 52px; height: 52px; }
  .brand-text strong { font-size: 0.94rem; }
  .brand-text span { font-size: 0.76rem; }
  .phone-link { padding: 10px 12px; }
  .promo-banner { align-items: stretch; flex-direction: column; padding-bottom: 14px; padding-top: 14px; }
  .promo-banner a { align-self: center; max-width: 280px; width: 100%; }
  h1 { font-size: clamp(2.25rem, 11vw, 3.55rem); }
  h2 { font-size: clamp(1.75rem, 9vw, 2.75rem); }
  .form-grid, .proof-grid { grid-template-columns: 1fr; }
  .button, .hero-actions { width: 100%; }
  .trust-list li, .area-list span { flex: 1 1 150px; }
}
`;
}

function page(site) {
  const nearby = site.nearby;
  const nearbyText = nearby.join(", ");
  const title = `${site.brand} | Painters in ${site.shortPlace}, PA`;
  const description = `Exterior and interior painting in ${site.shortPlace}, PA. Local estimates near ${nearby.slice(0, 2).join(", ")}. 10% exterior offer.`;
  const logoUrl = `https://${site.domain}/${logoFile}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `https://${site.domain}/#website`,
        url: `https://${site.domain}/`,
        name: site.brand,
        alternateName: `${site.shortPlace} PA House Painters`,
        publisher: { "@id": `https://${site.domain}/#localbusiness` },
        potentialAction: {
          "@type": "SearchAction",
          target: `https://${site.domain}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `https://${site.domain}/#webpage`,
        url: `https://${site.domain}/`,
        name: `${site.brand} for exterior and interior painting`,
        description,
        isPartOf: { "@id": `https://${site.domain}/#website` },
        about: { "@id": `https://${site.domain}/#localbusiness` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: images.heroInterior,
          caption: "Finished residential painting project",
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-title", "#local-answer-title", "#township-seo-title"],
        },
        breadcrumb: { "@id": `https://${site.domain}/#breadcrumb` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://${site.domain}/#breadcrumb`,
        itemListElement: [{ "@type": "ListItem", position: 1, name: site.brand, item: `https://${site.domain}/` }],
      },
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "PaintingContractor"],
        "@id": `https://${site.domain}/#localbusiness`,
        name: site.brand,
        description: `${site.brand} helps homeowners request exterior house painting, interior painting, drywall repair, trim finishing, cabinet painting, commercial painting, and local painting estimates in ${site.place}, Pennsylvania and nearby ${site.county} communities.`,
        url: `https://${site.domain}/`,
        telephone: "+1-215-791-4043",
        email,
        image: images.heroInterior,
        logo: logoUrl,
        parentOrganization: {
          "@type": "HomeAndConstructionBusiness",
          name: "Heritage House Painting",
          telephone: "+1-215-791-4043",
          email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "4001 1st Ave",
            addressLocality: "Lafayette Hill",
            addressRegion: "PA",
            postalCode: "19444",
            addressCountry: "US",
          },
        },
        priceRange: "$$",
        paymentAccepted: "Cash, Check, Credit Card",
        currenciesAccepted: "USD",
        slogan: `Exterior and interior painters serving ${site.place} and nearby communities.`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-215-791-4043",
          contactType: "customer service",
          email,
          areaServed: `${site.place}, PA`,
          availableLanguage: "English",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "4001 1st Ave",
          addressLocality: "Lafayette Hill",
          addressRegion: "PA",
          postalCode: "19444",
          addressCountry: "US",
        },
        areaServed: [{ "@type": "City", name: site.place, addressRegion: "PA" }, ...nearby.map((name) => ({ "@type": "City", name, addressRegion: "PA" })), { "@type": "AdministrativeArea", name: `${site.county}, PA` }],
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.coords.split(",")[0].trim(),
          longitude: site.coords.split(",")[1].trim(),
        },
        knowsAbout: [
          "Exterior house painting",
          `Exterior painter in ${site.shortPlace} PA`,
          "Seasonal exterior painting",
          "Siding painting",
          "Trim and shutter painting",
          "Interior painting",
          "Drywall repair",
          "Cabinet painting",
          "Commercial painting",
          "Color consultation",
          `House painters in ${site.place} PA`,
          ...site.landmarks,
        ],
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "19:00" },
        ],
        sameAs: [`https://${site.domain}/`],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Painting Services in ${site.shortPlace}, PA`,
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Exterior house painting in ${site.place}, PA` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Seasonal 10% off exterior painting projects near ${site.shortPlace}, PA` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Interior painting in ${site.place}, PA` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Drywall repair and painting near ${site.shortPlace}, PA` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Trim, carpentry, and finish painting in ${site.county}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Commercial painting near ${site.shortPlace}, PA` } },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": `https://${site.domain}/#paintingservice`,
        name: `Exterior and interior painting in ${site.shortPlace}, PA`,
        serviceType: "Residential and commercial painting",
        provider: { "@id": `https://${site.domain}/#localbusiness` },
        areaServed: `${site.place}, PA and nearby communities`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${site.shortPlace}-area painting services`,
          itemListElement: [
            { "@type": "Offer", name: "Exterior house painting estimate" },
            { "@type": "Offer", name: "10% off seasonal exterior painting offer", description: `Seasonal 10% off offer for qualifying exterior painting projects requested through ${site.brand}.`, category: "Exterior painting" },
            { "@type": "Offer", name: "Interior painting estimate" },
            { "@type": "Offer", name: "Drywall repair and painting estimate" },
            { "@type": "Offer", name: "Trim, cabinet, and finish painting estimate" },
            { "@type": "Offer", name: "Commercial painting estimate" },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://${site.domain}/#faq`,
        mainEntity: [
          { "@type": "Question", name: `Do you paint homes in ${site.shortPlace}, PA?`, acceptedAnswer: { "@type": "Answer", text: `Yes. ${site.brand} serves ${site.place} and nearby communities including ${nearbyText}.` } },
          { "@type": "Question", name: "Is there a seasonal exterior painting offer?", acceptedAnswer: { "@type": "Answer", text: `Yes. ${site.brand} is promoting a seasonal 10% off exterior painting offer for qualifying exterior painting projects in ${site.place} and nearby communities. Homeowners can request details through the estimate form or by calling ${phone}.` } },
          { "@type": "Question", name: "What painting services are available?", acceptedAnswer: { "@type": "Answer", text: "Services include exterior painting, interior painting, drywall repair, trim and finish carpentry painting, cabinet painting, color consultation, and commercial painting." } },
          { "@type": "Question", name: `How do I request a painting estimate in ${site.shortPlace}?`, acceptedAnswer: { "@type": "Answer", text: `Use the estimate form on ${site.domain} or call ${phone}. Include the project address, service needed, rooms or exterior areas, preferred timing, and any color or repair details.` } },
        ],
      },
      ...servicePages.map((service) => ({
        "@type": "Service",
        "@id": `https://${site.domain}/${service.slug}#service`,
        name: `${service.title} in ${site.shortPlace}, PA`,
        serviceType: service.serviceType,
        description: `${service.summary} Available in ${site.place}, ${nearby.slice(0, 5).join(", ")}, and nearby ${site.county} communities.`,
        provider: { "@id": `https://${site.domain}/#localbusiness` },
        areaServed: [{ "@type": "City", name: site.place, addressRegion: "PA" }, ...nearby.slice(0, 6).map((name) => ({ "@type": "City", name, addressRegion: "PA" }))],
        url: `https://${site.domain}/${service.slug}`,
      })),
    ],
  };
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="keywords" content="${esc(`${site.shortPlace} painters, exterior painter ${site.shortPlace} PA, exterior painting ${site.shortPlace} PA, house painters ${site.shortPlace} PA, painters ${site.shortPlace} PA, interior painting ${site.shortPlace} PA, drywall repair ${site.shortPlace} PA, cabinet painting ${site.shortPlace} PA, commercial painters ${site.shortPlace} PA, painters near ${nearby.slice(0, 4).join(" PA, painters near ")} PA`)}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="author" content="${esc(site.brand)}">
    <meta name="geo.region" content="US-PA">
    <meta name="geo.placename" content="${esc(site.place)}, Pennsylvania">
    <meta name="ICBM" content="${site.coords}">
    <meta name="theme-color" content="${site.colors.navy}">
    <link rel="canonical" href="https://${site.domain}/">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_US">
    <meta property="og:site_name" content="${esc(site.brand)}">
    <meta property="og:title" content="${esc(site.brand)} | Exterior &amp; Interior Painters in ${site.shortPlace}, PA">
    <meta property="og:description" content="${esc(`Exterior house painting, interior painting, drywall repair, and local painting estimates in ${site.place} and nearby towns. Ask about the seasonal 10% exterior painting offer.`)}">
    <meta property="og:url" content="https://${site.domain}/">
    <meta property="og:image" content="${images.heroInterior}">
    <meta property="og:image:alt" content="Finished house painting project by ${esc(site.brand)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(site.brand)} | Exterior &amp; Interior Painters in ${site.shortPlace}, PA">
    <meta name="twitter:description" content="${esc(description)}">
    <meta name="twitter:image" content="${images.heroInterior}">
    <meta name="twitter:image:alt" content="Finished house painting project by ${esc(site.brand)}">
    <link rel="sitemap" type="application/xml" href="/sitemap.xml">
    <link rel="preconnect" href="https://imagedelivery.net">
    <link rel="preload" as="image" href="${images.heroInterior}" fetchpriority="high">
    <link rel="stylesheet" href="styles.css">
    ${analyticsScript}
    <script type="application/ld+json">${JSON.stringify(schema, null, 6)}</script>
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="/" aria-label="${esc(site.brand)} home">
        <span class="brand-mark" aria-hidden="true">${site.monogram}</span>
        <span class="brand-text"><strong>${esc(site.brand)}</strong><span>${esc(site.place)}, PA</span></span>
      </a>
      ${topNav(true)}
    </header>
    <main>
      <section class="promo-banner" aria-label="Seasonal exterior painting offer">
        <strong>Seasonal exterior painting special</strong>
        <span>10% off qualifying exterior painting projects in ${esc(site.place)} and nearby communities.</span>
        <a href="#contact">Request exterior estimate</a>
      </section>
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-media" role="img" aria-label="Finished residential painting project in Pennsylvania"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-copy-block">
            <p class="eyebrow">${esc(site.place)}, PA exterior and interior painters</p>
            <h1 id="hero-title">${esc(site.brand)} for exterior and interior work</h1>
          <p class="hero-copy">Exterior house painting, interior painting, drywall repair, and trim finishing in ${esc(site.place)}, ${esc(nearby.slice(0, 5).join(", "))}, and nearby communities. Ask about 10% off qualifying exterior painting projects this season.</p>
            <div class="hero-actions">
              <a class="button primary" href="tel:${phoneHref}">Call ${phone}</a>
              <a class="button secondary" href="#services">View Services</a>
            </div>
            <ul class="trust-list" aria-label="Company highlights">
              <li>Licensed &amp; insured</li>
              <li>Free local estimates</li>
              <li>Exterior painting special</li>
            </ul>
          </div>
          ${estimateForm(site)}
        </div>
      </section>
      <section class="intro section">
        <div class="section-copy">
          <h2>Exterior and interior house painting in ${esc(site.place)} and nearby communities</h2>
          <p>${esc(site.brand)} exists to make it easier for local homeowners to find a painting estimate when searching for painters in ${esc(site.place)}, ${esc(nearby.slice(0, 5).join(", "))}, and surrounding communities. This season, exterior painting is a priority for homeowners planning siding, trim, shutters, porch, door, and curb appeal updates.</p>
          <p>${esc(site.shortPlace)} projects often involve ${esc(site.localProof)}. The page is written to answer local search questions directly, including who serves the area, which services are available, where estimates are requested, and which nearby communities are covered.</p>
        </div>
        <div class="proof-grid">
          <div><strong>PA</strong><span>licensed &amp; insured</span></div>
          <div><strong>Local</strong><span>${esc(site.shortPlace)}-area coverage</span></div>
          <div><strong>10%</strong><span>qualifying exterior projects</span></div>
        </div>
      </section>
      <section class="section answer-section" aria-labelledby="local-answer-title">
        <div class="section-heading">
          <p class="eyebrow">Local painter answers</p>
          <h2 id="local-answer-title">What ${esc(site.shortPlace)} homeowners usually want to know</h2>
          <p>For homeowners and answer engines: ${esc(site.brand)} is a local painting estimate page for exterior house painting, interior painting, drywall repair, trim painting, cabinet painting, and commercial painting near ${esc(site.place)}, Pennsylvania.</p>
        </div>
        <div class="answer-grid">
          <article><h3>Best fit</h3><p>Homeowners searching for exterior painters in ${esc(site.shortPlace)}, house painters near me, or interior painters near ${esc(nearby[0])} can request a local painting estimate here.</p></article>
          <article><h3>Main services</h3><p>Common projects include exterior siding and trim painting, shutters, doors, porches, wall and ceiling painting, kitchen and bedroom repainting, drywall patching, cabinet painting, and finish work.</p></article>
          <article><h3>Nearby coverage</h3><p>The service area includes ${esc(site.place)}, ${esc(nearbyText)}, and surrounding ${esc(site.county)} communities.</p></article>
          <article><h3>How to get quoted</h3><p>Call ${phone} or submit the estimate form with the project address, service needed, preferred timing, and notes about exterior areas, rooms, drywall, trim, or colors.</p></article>
        </div>
      </section>
      <section class="section local-proof" aria-labelledby="local-proof-title">
        <div class="section-heading">
          <p class="eyebrow">Local signals</p>
          <h2 id="local-proof-title">Why this ${esc(site.shortPlace)} painting page is locally specific</h2>
          <p>The page connects the painting services to actual ${esc(site.shortPlace)}-area roads, neighborhoods, surfaces, and estimate intent instead of relying only on generic painter keywords.</p>
        </div>
        <div class="proof-notes">
          <article><h3>Local context</h3><p>${esc(site.localProof)}.</p></article>
          <article><h3>Nearby landmarks</h3><p>${esc(site.landmarks.join(", "))} are included as practical service-area context for homeowners and search engines.</p></article>
          <article><h3>Service pages</h3><p>${serviceLinks(site)}</p></article>
        </div>
      </section>
      <section class="section services" id="services">
        <div class="section-heading">
          <p class="eyebrow">Painting services</p>
          <h2>Residential and commercial painters for ${esc(site.shortPlace)}-area properties</h2>
          <p>Each section supports high-intent local searches like exterior painter ${esc(site.shortPlace)} PA, ${esc(site.shortPlace)} painters, house painter ${esc(site.place)} PA, interior painting ${esc(nearby[0])}, and ${esc(site.county)} painting contractors. Dedicated service pages are available for ${serviceLinks(site)}.</p>
        </div>
        <div class="service-grid">
          <article>${img(images.exterior, `Exterior house painting project near ${site.shortPlace} PA`)}<h3>Exterior Painting</h3><p>Weather-aware exterior painting for siding, trim, shutters, doors, porches, railings, and curb appeal improvements across ${esc(site.place)} and nearby communities. Ask about 10% off qualifying exterior painting projects.</p></article>
          <article>${img(images.interior, `Interior house painting project near ${site.shortPlace} PA`)}<h3>Interior Painting</h3><p>Careful prep, crisp lines, smooth wall finishes, and premium coatings for bedrooms, kitchens, living rooms, stairways, and whole-home repaints in ${esc(site.shortPlace)}, ${esc(nearby.slice(0, 5).join(", "))}.</p></article>
          <article>${img(images.drywall, `Drywall finishing and painting project near ${site.shortPlace} PA`)}<h3>Drywall, Trim &amp; Finishes</h3><p>Drywall repair, patching, finish trim, carpentry touch-ups, cabinet painting, and specialty finishes for homes in ${esc(site.place)}, ${esc(nearby.slice(0, 4).join(", "))}, and nearby neighborhoods.</p></article>
        </div>
      </section>
      <section class="section project-photos" aria-labelledby="project-photos-title">
        <div class="section-heading">
          <p class="eyebrow">Project photos</p>
          <h2 id="project-photos-title">Real painting and drywall project photos</h2>
          <p>These images use real project photography from the painting portfolio, not stock photo libraries.</p>
        </div>
        <div class="photo-grid">
          <figure>${img(images.heroInterior, "Finished dining room interior painting project")}<figcaption>Dining Room Interior Painting</figcaption></figure>
          <figure>${img(images.bedroom, "Bedroom interior painting project")}<figcaption>Bedroom Painting</figcaption></figure>
          <figure>${img(images.bath, "Bathroom painting and renovation project")}<figcaption>Bathroom Painting</figcaption></figure>
          <figure>${img(images.exterior2, "Exterior residential painting project")}<figcaption>Exterior House Painting</figcaption></figure>
        </div>
      </section>
      <section class="section local" id="areas">
        <div class="section-copy">
          <p class="eyebrow">Service areas</p>
          <h2>${esc(site.place)}-first local painting coverage</h2>
          <p>Service is available throughout ${esc(site.place)} and surrounding communities. This local landing page is built around the way people search nearby: exterior painters near ${esc(site.shortPlace)} PA, house painters near ${esc(nearby[0])}, exterior painters ${esc(nearby[1])} PA, and interior painting near ${esc(nearby[2])}.</p>
        </div>
        <div class="area-list" aria-label="Nearby service areas">
          <span>${esc(site.place)}</span>${nearby.map((area) => `<span>${esc(area)}</span>`).join("")}
        </div>
        <div class="nearby-links" aria-labelledby="nearby-sites-title">
          <h3 id="nearby-sites-title">Nearby area painting pages</h3>
          <p>Homeowners comparing nearby service areas can also review ${linkedList(site.related)}. These links are included where the towns overlap naturally with ${esc(site.shortPlace)}-area painting requests.</p>
        </div>
      </section>
      <section class="section township-seo" aria-labelledby="township-seo-title">
        <div class="section-heading">
          <p class="eyebrow">Nearby local searches</p>
          <h2 id="township-seo-title">Painters near ${esc(site.shortPlace)}, PA and surrounding neighborhoods</h2>
          <p>These local service-area notes give search engines clear, readable context while helping homeowners confirm that their neighborhood is covered.</p>
        </div>
        <div class="township-grid">
          <article><h3>${esc(site.place)} Painters</h3><p>Exterior painting, interior painting, drywall repair, trim painting, and color updates for ${esc(site.positioning)} near ${esc(site.roads)}.</p></article>
          <article><h3>${esc(nearby[0])} &amp; ${esc(nearby[1])} Painting</h3><p>House painting for nearby homeowners looking for careful prep, clean work areas, durable exterior coatings, and smooth interior finishes.</p></article>
          <article><h3>${esc(nearby[2])} &amp; ${esc(nearby[3])} Painters</h3><p>Exterior siding and trim painting, door and shutter painting, drywall patching, and interior repainting for homes close to ${esc(site.shortPlace)}.</p></article>
          <article><h3>${esc(nearby[4])} Painting Services</h3><p>Premium interior painting, cabinet painting, trim finishing, and whole-home repainting for surrounding ${esc(site.county)} neighborhoods.</p></article>
          <article><h3>${esc(site.county)} Exterior Painting</h3><p>Seasonal exterior painting estimates for siding, trim, porches, shutters, railings, and other curb appeal updates.</p></article>
          <article><h3>Local House Painter Near Me</h3><p>A local service page for homeowners searching for a painter near ${esc(site.shortPlace)}, ${esc(site.county)}, and nearby communities.</p></article>
        </div>
      </section>
      <section class="section why">
        <div><p class="eyebrow">Why homeowners call</p><h2>Better prep, better communication, better-looking homes</h2></div>
        <div class="why-grid">
          <article><h3>Clear estimates</h3><p>Project scope, prep, surfaces, colors, and schedule are discussed before work begins so the process feels predictable.</p></article>
          <article><h3>Premium materials</h3><p>Paints and finishes are matched to the surface, room use, light, weather exposure, and durability needs of each home.</p></article>
          <article><h3>Local accountability</h3><p>Requests are routed through the contact information listed on this ${esc(site.shortPlace)} marketing site.</p></article>
        </div>
      </section>
      <section class="section faq" id="faq">
        <div class="section-heading"><p class="eyebrow">Questions</p><h2>${esc(site.shortPlace)} painting FAQ</h2></div>
        <details><summary>Who handles estimate requests from this site?</summary><p>Estimate requests are handled through the contact information listed on this website, with additional business disclosure provided in the footer.</p></details>
        <details><summary>What towns and neighborhoods do you serve near ${esc(site.shortPlace)}?</summary><p>Common nearby service areas include ${esc(site.place)}, ${esc(nearbyText)}, and surrounding ${esc(site.county)} communities.</p></details>
        <details><summary>Can I get interior and exterior painting from one contractor?</summary><p>Yes. Available services include interior painting, exterior painting, drywall repairs, trim, finish work, cabinet painting, commercial painting, and related prep work.</p></details>
        <details><summary>Do you have an exterior painting discount this season?</summary><p>Yes. ${esc(site.brand)} is promoting 10% off qualifying exterior painting projects. Use the estimate form or call ${phone} and mention the seasonal exterior painting offer.</p></details>
        <details><summary>How do I request a painting estimate in ${esc(site.shortPlace)}?</summary><p>Use the estimate form on this page or call ${phone}. Share the project address, the service needed, your preferred timing, and any details about rooms, exterior areas, drywall, trim, cabinets, or colors.</p></details>
      </section>
      <section class="contact" id="contact">
        <div class="contact-panel">
          <div><p class="eyebrow">Free local estimate</p><h2>Talk with a local painter about your ${esc(site.shortPlace)}-area project</h2><p>Call today or send a quick request with your project address, the town or township, the exterior areas or rooms you want painted, and your ideal timing. Mention the 10% exterior painting offer if your project is outside.</p></div>
          ${estimateForm(site)}
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div><strong>${esc(site.brand)}</strong><p>${esc(site.brand)} is a local marketing website operated by Heritage House Painting. All contact requests, estimates, painting services, and customer communication are handled by Heritage House Painting.</p></div>
      <div><strong>Heritage House Painting</strong><p>${esc(address)}<br><a href="tel:${phoneHref}">${phone}</a><br><a href="mailto:${email}">${email}</a></p></div>
      <div><strong>Local painting searches</strong><p>Exterior painter ${esc(site.shortPlace)} PA, ${esc(site.shortPlace)} painters, house painter ${esc(site.place)} PA, interior painting ${esc(nearby[0])}, exterior painting ${esc(nearby[1])}, painters ${esc(nearby[2])} PA, ${esc(site.county)} painting contractor.</p></div>
      <p class="copyright">&copy; 2026 ${esc(site.brand)}, a marketing site by Heritage House Painting. Heritage House Painting remains the service provider of record.</p>
    </footer>
    <script>
      document.querySelectorAll(".estimate-form").forEach((form) => {
        form.addEventListener("submit", async (event) => {
          event.preventDefault();
          const button = form.querySelector(".form-submit");
          const status = form.querySelector(".form-status");
          const originalText = button ? button.textContent : "Send Estimate Request";

          if (status) {
            status.textContent = "Sending your request...";
            status.dataset.state = "pending";
          }
          if (button) {
            button.disabled = true;
            button.textContent = "Sending...";
          }

          try {
            const formData = new FormData(form);
            const payload = Object.fromEntries(formData.entries());
            const response = await fetch(form.action, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload)
            });
            const result = await response.json().catch(() => ({}));

            if (!response.ok || !result.ok) {
              throw new Error(result.error || "Submission failed");
            }

            form.reset();
            if (status) {
              status.textContent = "Thanks. Your estimate request was sent.";
              status.dataset.state = "success";
            }
          } catch (error) {
            if (status) {
              status.textContent = "Sorry, the request could not be sent. Please call (215) 791-4043.";
              status.dataset.state = "error";
            }
          } finally {
            if (button) {
              button.disabled = false;
              button.textContent = originalText;
            }
          }
        });
      });
    </script>
  </body>
</html>
`;
}

function servicePage(site, service) {
  const title = `${service.title} in ${site.shortPlace}, PA | ${site.brand}`;
  const description = `${service.title} in ${site.shortPlace}, PA. ${service.summary} Local estimates near ${site.nearby.slice(0, 3).join(", ")}.`;
  const relatedServices = servicePages
    .filter((item) => item.slug !== service.slug)
    .map((item) => `<a href="/${item.slug}">${esc(item.title)}</a>`)
    .join(" ");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://${site.domain}/${service.slug}#webpage`,
        url: `https://${site.domain}/${service.slug}`,
        name: title,
        description,
        isPartOf: { "@id": `https://${site.domain}/#website` },
        about: { "@id": `https://${site.domain}/${service.slug}#service` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://${site.domain}/${service.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.brand, item: `https://${site.domain}/` },
          { "@type": "ListItem", position: 2, name: service.title, item: `https://${site.domain}/${service.slug}` },
        ],
      },
      {
        "@type": "Service",
        "@id": `https://${site.domain}/${service.slug}#service`,
        name: `${service.title} in ${site.shortPlace}, PA`,
        serviceType: service.serviceType,
        description: `${service.summary} Available around ${site.place}, ${site.nearby.slice(0, 6).join(", ")}, and ${site.county}.`,
        provider: { "@id": `https://${site.domain}/#localbusiness` },
        areaServed: [{ "@type": "City", name: site.place, addressRegion: "PA" }, ...site.nearby.map((name) => ({ "@type": "City", name, addressRegion: "PA" }))],
      },
      {
        "@type": "FAQPage",
        "@id": `https://${site.domain}/${service.slug}#faq`,
        mainEntity: [
          { "@type": "Question", name: `Do you offer ${service.title.toLowerCase()} in ${site.shortPlace}?`, acceptedAnswer: { "@type": "Answer", text: `Yes. ${site.brand} supports ${service.title.toLowerCase()} estimate requests in ${site.place}, ${site.nearby.slice(0, 5).join(", ")}, and nearby ${site.county} communities.` } },
          { "@type": "Question", name: "How do I request an estimate?", acceptedAnswer: { "@type": "Answer", text: `Call ${phone} or use the estimate form on ${site.domain}. Include the project address, timing, surfaces, and any repair or color notes.` } },
        ],
      },
    ],
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="geo.region" content="US-PA">
    <meta name="geo.placename" content="${esc(site.place)}, Pennsylvania">
    <meta name="ICBM" content="${site.coords}">
    <link rel="canonical" href="https://${site.domain}/${service.slug}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${esc(site.brand)}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:url" content="https://${site.domain}/${service.slug}">
    <meta property="og:image" content="${service.image}">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="preconnect" href="https://imagedelivery.net">
    <link rel="preload" as="image" href="${service.image}" fetchpriority="high">
    <link rel="stylesheet" href="/styles.css">
    ${analyticsScript}
    <script type="application/ld+json">${JSON.stringify(schema, null, 6)}</script>
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="/" aria-label="${esc(site.brand)} home">
        <span class="brand-mark" aria-hidden="true">${site.monogram}</span>
        <span class="brand-text"><strong>${esc(site.brand)}</strong><span>${esc(site.place)}, PA</span></span>
      </a>
      ${topNav(false)}
    </header>
    <main>
      <section class="hero" aria-labelledby="service-title">
        <div class="hero-media" style="background-image:url('${service.image}')" role="img" aria-label="${esc(service.title)} project photo"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-copy-block">
            <p class="eyebrow">${esc(site.shortPlace)}, PA ${esc(service.serviceType)}</p>
            <h1 id="service-title">${esc(service.title)} in ${esc(site.shortPlace)}, PA</h1>
            <p class="hero-copy">${esc(service.summary)} Estimate requests are available for ${esc(site.place)}, ${esc(site.nearby.slice(0, 6).join(", "))}, and nearby ${esc(site.county)} communities.</p>
            <div class="hero-actions">
              <a class="button primary" href="tel:${phoneHref}">Call ${phone}</a>
              <a class="button secondary" href="/#contact">Request Estimate</a>
            </div>
          </div>
          <div class="estimate-form">
            <p class="form-kicker">Local service page</p>
            <h2>${esc(service.title)} estimate details</h2>
            <p class="form-note">Best for ${esc(service.keywords.join(", "))} searches around ${esc(site.shortPlace)} and nearby towns.</p>
          </div>
        </div>
      </section>
      <section class="section answer-section">
        <div class="section-heading">
          <p class="eyebrow">Service details</p>
          <h2>${esc(service.serviceType)} for ${esc(site.positioning)}</h2>
          <p>${esc(site.brand)} connects local homeowners with estimate requests for ${esc(service.title.toLowerCase())}. Local context includes ${esc(site.roads)}, ${esc(site.landmarks.join(", "))}, and surrounding neighborhoods.</p>
        </div>
        <div class="answer-grid">
          <article><h3>Primary service</h3><p>${esc(service.summary)}</p></article>
          <article><h3>Local coverage</h3><p>${esc(site.place)}, ${esc(site.nearby.join(", "))}, and nearby ${esc(site.county)} communities.</p></article>
          <article><h3>Project details to include</h3><p>Share the address, surfaces, rooms or exterior areas, preferred timing, repair needs, and color notes.</p></article>
          <article><h3>Related services</h3><p>${relatedServices}</p></article>
        </div>
      </section>
      <section class="contact" id="contact">
        <div class="contact-panel">
          <div><p class="eyebrow">Free local estimate</p><h2>Request ${esc(service.title.toLowerCase())} pricing near ${esc(site.shortPlace)}</h2><p>Call or send a request with your project address, scope, surface conditions, and timing.</p></div>
          <div class="contact-card">
            <a href="tel:${phoneHref}">${phone}</a>
            <span>${esc(address)}</span>
            <a class="button primary" href="mailto:${email}?subject=${encodeURIComponent(site.shortPlace + " " + service.title + " Estimate")}">Email Estimate Request</a>
          </div>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div><strong>${esc(site.brand)}</strong><p>${esc(site.brand)} is a local marketing website operated by Heritage House Painting. All contact requests, estimates, painting services, and customer communication are handled by Heritage House Painting.</p></div>
      <div><strong>Heritage House Painting</strong><p>${esc(address)}<br><a href="tel:${phoneHref}">${phone}</a><br><a href="mailto:${email}">${email}</a></p></div>
      <div><strong>Service areas</strong><p>${esc(site.place)}, ${esc(site.nearby.join(", "))}, and nearby ${esc(site.county)} communities.</p></div>
      <p class="copyright">&copy; 2026 ${esc(site.brand)}, a marketing site by Heritage House Painting.</p>
    </footer>
  </body>
</html>
`;
}

function robots(site) {
  return `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

Sitemap: https://${site.domain}/sitemap.xml
`;
}

function sitemap(site) {
  const serviceUrls = servicePages.map((service) => `  <url>
    <loc>https://${site.domain}/${service.slug}</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image><image:loc>${service.image}</image:loc><image:title>${service.title} in ${site.shortPlace}, PA</image:title></image:image>
  </url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://${site.domain}/</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image><image:loc>${images.heroInterior}</image:loc><image:title>Dining room interior painting project</image:title></image:image>
    <image:image><image:loc>${images.exterior}</image:loc><image:title>Exterior house painting project</image:title></image:image>
    <image:image><image:loc>${images.interior}</image:loc><image:title>Interior house painting project</image:title></image:image>
    <image:image><image:loc>${images.drywall}</image:loc><image:title>Drywall finishing project</image:title></image:image>
  </url>
${serviceUrls}
</urlset>
`;
}

function llms(site) {
  return `# ${site.brand}

${site.brand} is a local painting estimate website for homeowners searching for exterior painters, interior painters, house painters, drywall repair, trim painting, cabinet painting, commercial painting, and seasonal exterior painting offers in ${site.place}, Pennsylvania and nearby communities.

Primary URL: https://${site.domain}/

Primary services:
- Exterior house painting: https://${site.domain}/exterior-painting
- Interior painting: https://${site.domain}/interior-painting
- Drywall repair and painting: https://${site.domain}/drywall-repair
- Cabinet and trim painting: https://${site.domain}/cabinet-trim-painting
- Commercial painting
- Local painting estimates

Seasonal offer:
- 10% off qualifying exterior painting projects requested through ${site.brand}.
- Best fit for siding painting, exterior trim painting, shutter painting, door painting, porch painting, railing painting, and curb appeal updates near ${site.place}, PA.

Primary service area:
- ${site.place}, PA
${site.nearby.map((area) => `- ${area}, PA`).join("\n")}
- ${site.county}, PA

Local context:
- Roads and landmarks: ${site.roads}
- Property types: ${site.positioning}
- Local proof: ${site.localProof}
- Nearby landmarks: ${site.landmarks.join(", ")}

Contact:
- Phone: +1-215-791-4043
- Email: ${email}
- Estimate form: https://${site.domain}/#contact

Summary:
${site.brand} helps local homeowners request estimates for exterior painting, interior painting, drywall repair, trim finishing, cabinet painting, and commercial painting near ${site.place}, PA. The current seasonal focus is exterior painting, with a 10% offer for qualifying exterior projects.
`;
}

function vercel() {
  const serviceRewrites = servicePages.map((service) => `    {
      "source": "/${service.slug}",
      "destination": "/${service.slug}.html"
    }`).join(",\n");
  return `{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Robots-Tag",
          "value": "index, follow"
        }
      ]
    }
  ],
  "rewrites": [
${serviceRewrites},
    {
      "source": "/((?!api/|styles.css|analytics.js|robots.txt|sitemap.xml|llms.txt).*)",
      "destination": "/index.html"
    }
  ]
}
`;
}

fs.rmSync(outRoot, { recursive: true, force: true });
fs.mkdirSync(outRoot, { recursive: true });

for (const site of sites) {
  const dir = path.join(outRoot, site.folder);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page(site));
  for (const service of servicePages) {
    fs.writeFileSync(path.join(dir, `${service.slug}.html`), servicePage(site, service));
  }
  fs.writeFileSync(path.join(dir, "styles.css"), css(site));
  fs.copyFileSync(path.join(process.cwd(), "analytics.js"), path.join(dir, "analytics.js"));
  fs.copyFileSync(path.join(process.cwd(), logoFile), path.join(dir, logoFile));
  fs.writeFileSync(path.join(dir, "robots.txt"), robots(site));
  fs.writeFileSync(path.join(dir, "sitemap.xml"), sitemap(site));
  fs.writeFileSync(path.join(dir, "llms.txt"), llms(site));
  fs.writeFileSync(path.join(dir, "vercel.json"), vercel());
  fs.mkdirSync(path.join(dir, "api"), { recursive: true });
  fs.writeFileSync(path.join(dir, "api", "estimate.js"), 'module.exports = require("../../../api/estimate");\n');
}

console.log(`Generated ${sites.length} sites in ${outRoot}`);
