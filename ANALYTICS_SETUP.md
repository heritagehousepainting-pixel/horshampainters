# Analytics setup

PostHog is wired into the sites through `analytics.js`.

## Tracking status

PostHog tracking is active with the configured project API key.

The current integration uses one PostHog project for all domains and sends `site_domain`, `marketing_site`, `page_path`, and `page_title` with each event so dashboards can be filtered by website.

## Events captured

- `site_loaded`
- `phone_click`
- `email_click`
- `nav_click`
- `cta_click`
- `outbound_link_click`
- `estimate_form_start`
- `estimate_submit_attempt`
- `estimate_submit_success`
- `estimate_submit_error`
- `faq_open`
- `scroll_depth`

The tracker does not send form names, phone numbers, email addresses, project addresses, or project details to PostHog.
