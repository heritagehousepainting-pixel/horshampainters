(function () {
  var script = document.currentScript;
  var posthogKey = script && script.dataset ? script.dataset.posthogKey : "";
  var posthogHost = script && script.dataset && script.dataset.posthogHost ? script.dataset.posthogHost : "https://us.i.posthog.com";
  var placeholderKey = !posthogKey || posthogKey.indexOf("REPLACE_WITH_POSTHOG_PROJECT_KEY") !== -1;

  function textLabel(element) {
    if (!element) return "";
    var label = element.getAttribute("aria-label") || element.textContent || "";
    return label.replace(/\s+/g, " ").trim().slice(0, 120);
  }

  function marketingSite() {
    var field = document.querySelector('input[name="Marketing site"]');
    return field && field.value ? field.value : window.location.hostname;
  }

  function baseProps(extra) {
    var props = {
      site_domain: window.location.hostname,
      marketing_site: marketingSite(),
      page_path: window.location.pathname,
      page_title: document.title
    };
    return Object.assign(props, extra || {});
  }

  function posthogReady() {
    return window.posthog && typeof window.posthog.capture === "function";
  }

  function track(eventName, properties) {
    if (!posthogReady()) return;
    window.posthog.capture(eventName, baseProps(properties));
  }

  window.__siteAnalytics = { track: track };

  if (placeholderKey) {
    return;
  }

  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    return;
  }

  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

  window.posthog.init(posthogKey, {
    api_host: posthogHost,
    defaults: "2026-01-30",
    capture_pageview: true,
    autocapture: true,
    loaded: function (posthog) {
      posthog.register(baseProps());
      track("site_loaded");
    }
  });

  document.addEventListener("click", function (event) {
    var link = event.target && event.target.closest ? event.target.closest("a") : null;
    if (!link) return;

    var href = link.getAttribute("href") || "";
    var props = {
      link_text: textLabel(link),
      link_href: href,
      section_id: link.closest("section") ? link.closest("section").id || "" : "",
      is_button: link.classList.contains("button") || link.classList.contains("phone-link")
    };

    if (href.indexOf("tel:") === 0) {
      track("phone_click", props);
      return;
    }
    if (href.indexOf("mailto:") === 0) {
      track("email_click", props);
      return;
    }
    if (href.indexOf("#") === 0 || link.closest("nav")) {
      track(link.closest("nav") ? "nav_click" : "cta_click", props);
      return;
    }
    try {
      var url = new URL(href, window.location.href);
      if (url.hostname && url.hostname !== window.location.hostname) {
        track("outbound_link_click", Object.assign(props, { outbound_domain: url.hostname }));
      }
    } catch (error) {}
  }, true);

  document.querySelectorAll(".estimate-form").forEach(function (form, index) {
    var started = false;
    var formProps = function () {
      var service = form.querySelector('[name="Service needed"]');
      var location = form.querySelector('[name="Form location"]');
      return {
        form_index: index + 1,
        form_location: location && location.value ? location.value : (form.classList.contains("contact-estimate-form") ? "contact_section" : "hero"),
        service_needed: service && service.value ? service.value : ""
      };
    };

    form.addEventListener("input", function () {
      if (started) return;
      started = true;
      track("estimate_form_start", formProps());
    }, true);

    form.addEventListener("submit", function () {
      track("estimate_submit_attempt", formProps());
    }, true);

    var status = form.querySelector(".form-status");
    if (status) {
      new MutationObserver(function () {
        if (status.dataset.state === "success") {
          track("estimate_submit_success", formProps());
        }
        if (status.dataset.state === "error") {
          track("estimate_submit_error", formProps());
        }
      }).observe(status, { attributes: true, attributeFilter: ["data-state"] });
    }
  });

  document.querySelectorAll("details").forEach(function (details) {
    details.addEventListener("toggle", function () {
      if (details.open) {
        track("faq_open", { question: textLabel(details.querySelector("summary")) });
      }
    });
  });

  var scrollDepths = [25, 50, 75, 100];
  var capturedDepths = {};
  window.addEventListener("scroll", function () {
    var height = document.documentElement.scrollHeight - window.innerHeight;
    if (height <= 0) return;
    var depth = Math.min(100, Math.round((window.scrollY / height) * 100));
    scrollDepths.forEach(function (target) {
      if (depth >= target && !capturedDepths[target]) {
        capturedDepths[target] = true;
        track("scroll_depth", { percent: target });
      }
    });
  }, { passive: true });
})();
