const fs = require("fs");
const path = require("path");

const outRoot = path.join(process.cwd(), "generated-local-sites");
const phone = "(215) 791-4043";
const phoneHref = "+12157914043";
const email = "heritagehousepainting@gmail.com";
const address = "4001 1st Ave, Lafayette Hill, PA 19444";
const heritageUrl = "https://heritagehousepainting.com";
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

const heritageProjectPhotos = {
  diningRoom: {
    src: images.heroInterior,
    caption: "Professional Dining Room Interior Painting",
    alt: "Heritage House Painting dining room interior painting project",
    services: ["interior-painting", "cabinet-trim-painting"],
  },
  amblerInterior: {
    src: images.interior,
    caption: "Ambler Interior Painting",
    alt: "Heritage House Painting Ambler interior painting project",
    services: ["interior-painting", "cabinet-trim-painting"],
  },
  montgomeryExterior: {
    src: images.exterior,
    caption: "Montgomery County Exterior Painting",
    alt: "Heritage House Painting Montgomery County exterior painting project",
    services: ["exterior-painting"],
  },
  restaurantInterior: {
    src: images.contact,
    caption: "Restaurant Interior Painting",
    alt: "Heritage House Painting restaurant interior painting project",
    services: ["interior-painting", "cabinet-trim-painting"],
  },
  ardmoreDining: {
    src: images.exterior2,
    caption: "Ardmore Dining Room Painting",
    alt: "Heritage House Painting Ardmore dining room painting project",
    services: ["interior-painting", "cabinet-trim-painting"],
  },
  wayneBathroom: {
    src: images.bath,
    caption: "Wayne Bathroom Wallpaper & Painting",
    alt: "Heritage House Painting Wayne bathroom wallpaper and painting project",
    services: ["interior-painting", "cabinet-trim-painting"],
  },
  blueBellBedroom: {
    src: images.bedroom,
    caption: "Blue Bell Bedroom Transformation",
    alt: "Heritage House Painting Blue Bell bedroom painting project",
    services: ["interior-painting", "cabinet-trim-painting"],
  },
  blueBellDrywall: {
    src: images.drywall,
    caption: "Blue Bell Drywall Installation",
    alt: "Heritage House Painting Blue Bell drywall installation project",
    services: ["drywall-repair", "interior-painting"],
  },
  lowerGwyneddDrywall: {
    src: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/1665ad3c-de70-49ef-c518-baddb10b7800/publicContain",
    caption: "Lower Gwynedd Drywall Installation",
    alt: "Heritage House Painting Lower Gwynedd drywall installation project",
    services: ["drywall-repair"],
  },
  wayneDrywall: {
    src: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/b8ce02f0-bd5b-43ef-ed95-bd677194ca00/public",
    caption: "Wayne Drywall Installation",
    alt: "Heritage House Painting Wayne drywall installation project",
    services: ["drywall-repair"],
  },
  blueBellExterior: {
    src: images.blueBellExterior,
    caption: "Blue Bell Exterior Painting",
    alt: "Heritage House Painting Blue Bell exterior painting project",
    services: ["exterior-painting"],
  },
  commercialRestaurant: {
    src: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/5a3bdb8c-b797-48c5-8a79-454270e3c800/public",
    caption: "Commercial Restaurant Painting",
    alt: "Heritage House Painting commercial restaurant painting project",
    services: ["exterior-painting", "interior-painting"],
  },
};

const heritageTestimonials = {
  blueBellHome: {
    quote: "From the initial consultation to project completion, Heritage House Painting delivered exceptional service. Their team painted our entire Blue Bell home - both interior and exterior - with remarkable skill and efficiency.",
    name: "Jennifer L.",
    context: "Blue Bell, PA / Complete Home Painting",
    services: ["exterior-painting", "interior-painting"],
  },
  blueBellCraft: {
    quote: "Heritage House Painting transformed our home beyond our wildest dreams. The attention to detail and craftsmanship is absolutely exceptional. Every room feels like a work of art.",
    name: "Sarah & Michael",
    context: "Blue Bell, PA",
    services: ["interior-painting", "cabinet-trim-painting"],
  },
  wayneInterior: {
    quote: "Heritage House Painting transformed our Wayne home with exceptional interior painting. Their attention to detail and use of premium materials exceeded our expectations. The team was professional, clean, and completed the project on time.",
    name: "Sarah M.",
    context: "Wayne, PA / Interior Painting",
    services: ["interior-painting"],
  },
  waynePalette: {
    quote: "Professional, reliable, and incredibly talented. The color consultation process helped us find the perfect palette. Our Wayne home now feels like a luxury retreat.",
    name: "Jennifer",
    context: "Wayne, PA",
    services: ["interior-painting", "cabinet-trim-painting"],
  },
  ardmoreExterior: {
    quote: "Outstanding exterior house painting service in Ardmore! The Heritage team gave our historic home a beautiful makeover while respecting its architectural character. Highly recommend their expertise for Main Line properties.",
    name: "Michael R.",
    context: "Ardmore, PA / Exterior Painting",
    services: ["exterior-painting"],
  },
  ardmoreWalkthrough: {
    quote: "From initial consultation to final walkthrough, everything was handled with utmost professionalism. The exterior transformation of our Ardmore home is stunning.",
    name: "David & Lisa",
    context: "Ardmore, PA",
    services: ["exterior-painting"],
  },
  lowerGwyneddCabinet: {
    quote: "Excellent kitchen cabinet painting in Lower Gwynedd! Heritage House Painting transformed our dated cabinets into a modern masterpiece. The color consultation service was invaluable in achieving the perfect look.",
    name: "David K.",
    context: "Lower Gwynedd, PA / Cabinet Painting",
    services: ["cabinet-trim-painting"],
  },
  amblerCommercial: {
    quote: "Outstanding commercial painting project in Ambler! Heritage House Painting handled our office renovation with professionalism and minimal disruption to our business operations. Highly recommend for commercial properties.",
    name: "Robert T.",
    context: "Ambler, PA / Commercial Painting",
    services: ["interior-painting", "exterior-painting"],
  },
  lafayetteDrywall: {
    quote: "The team at Heritage House Painting did an outstanding job repairing and finishing our drywall after water damage. Their attention to detail was impressive, and they matched our existing texture perfectly. The crew was professional, clean, and completed the work on schedule.",
    name: "Michael Thompson",
    context: "Lafayette Hill, PA / Drywall",
    services: ["drywall-repair"],
  },
};

const siteProof = {
  horshampainters: {
    photos: ["montgomeryExterior", "blueBellDrywall", "blueBellExterior", "diningRoom"],
    testimonials: ["blueBellHome", "lafayetteDrywall", "wayneInterior"],
    note: "Heritage House Painting project proof from nearby Montgomery County homes, exterior work, drywall finishing, and interiors that match common Horsham-area painting requests.",
  },
  lowergwyneddpainters: {
    photos: ["lowerGwyneddDrywall", "diningRoom", "blueBellBedroom", "montgomeryExterior"],
    testimonials: ["lowerGwyneddCabinet", "blueBellCraft", "blueBellHome"],
    note: "Lower Gwynedd homeowners can compare drywall, cabinet, interior, and exterior proof from Heritage House Painting work in and around the same Montgomery County service area.",
  },
  amblerpainters: {
    photos: ["amblerInterior", "restaurantInterior", "diningRoom", "commercialRestaurant"],
    testimonials: ["amblerCommercial", "blueBellCraft", "lowerGwyneddCabinet"],
    note: "The Ambler proof mix highlights Heritage House Painting interior and commercial work suited to borough homes, Main Street properties, and nearby office spaces.",
  },
  bluebellpainters: {
    photos: ["blueBellBedroom", "blueBellDrywall", "blueBellExterior", "diningRoom"],
    testimonials: ["blueBellHome", "blueBellCraft", "lowerGwyneddCabinet"],
    note: "Blue Bell pages use the strongest local Heritage proof first: Blue Bell bedroom, drywall, exterior, and whole-home customer feedback.",
  },
  lafayettehillpainters: {
    photos: ["diningRoom", "lowerGwyneddDrywall", "restaurantInterior", "montgomeryExterior"],
    testimonials: ["lafayetteDrywall", "blueBellHome", "ardmoreExterior"],
    note: "Lafayette Hill proof emphasizes drywall finishing, careful interior prep, and exterior painting from Heritage House Painting projects near Whitemarsh and Montgomery County homes.",
  },
  plymouthmeetingpainters: {
    photos: ["montgomeryExterior", "restaurantInterior", "blueBellDrywall", "diningRoom"],
    testimonials: ["blueBellHome", "lafayetteDrywall", "amblerCommercial"],
    note: "Plymouth Meeting proof uses nearby Montgomery County Heritage projects without overstating project locations that are not specifically sourced to Plymouth Meeting.",
  },
  gladwynepainters: {
    photos: ["diningRoom", "ardmoreDining", "wayneBathroom", "montgomeryExterior"],
    testimonials: ["ardmoreExterior", "waynePalette", "blueBellCraft"],
    note: "Gladwyne proof focuses on Main Line finish quality, detailed interiors, exterior transformations, and nearby Heritage House Painting customer feedback.",
  },
  waynepainters: {
    photos: ["wayneBathroom", "wayneDrywall", "diningRoom", "blueBellBedroom"],
    testimonials: ["wayneInterior", "waynePalette", "ardmoreExterior"],
    note: "Wayne pages lead with Wayne-specific bathroom and drywall project photography plus customer feedback from Wayne and nearby Main Line homes.",
  },
  ardmorepainters: {
    photos: ["ardmoreDining", "diningRoom", "montgomeryExterior", "wayneBathroom"],
    testimonials: ["ardmoreExterior", "ardmoreWalkthrough", "wayneInterior"],
    note: "Ardmore proof prioritizes Main Line dining room, interior, and historic-home exterior work from Heritage House Painting.",
  },
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

function footer(site, resourceTitle = "Local resources", resourceLinks = `<a href="/project-proof">Project proof</a><br><a href="/blog">Painting blog</a><br>${serviceLinks(site)}`) {
  return `<footer class="site-footer">
      <div><strong>${esc(site.brand)}</strong><p>${esc(site.brand)} is a local marketing website operated by <a href="${heritageUrl}">Heritage House Painting</a>. All contact requests, estimates, painting services, and customer communication are handled by Heritage House Painting.</p></div>
      <div><strong>Heritage House Painting</strong><p>${esc(address)}<br><a href="tel:${phoneHref}">${phone}</a><br><a href="mailto:${email}">${email}</a><br><a href="${heritageUrl}">Main company website</a></p></div>
      <div><strong>${esc(resourceTitle)}</strong><p>${resourceLinks}</p></div>
      <p class="copyright">&copy; 2026 ${esc(site.brand)}, a marketing site by Heritage House Painting. Heritage House Painting remains the service provider of record.</p>
    </footer>`;
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
        <a href="/project-proof">Portfolio</a>
        <a href="/blog">Blog</a>
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

function estimateFormScript() {
  return `<script>
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
    </script>`;
}

function proofFor(site) {
  const proof = siteProof[site.folder] || siteProof.horshampainters;
  return {
    ...proof,
    photos: proof.photos.map((key) => heritageProjectPhotos[key]),
    testimonials: proof.testimonials.map((key) => heritageTestimonials[key]),
  };
}

function serviceProofFor(site, service) {
  const proof = proofFor(site);
  const photos = proof.photos
    .filter((photo) => photo.services.includes(service.slug))
    .concat(Object.values(heritageProjectPhotos).filter((photo) => photo.services.includes(service.slug)))
    .filter((photo, index, list) => list.findIndex((item) => item.src === photo.src) === index)
    .slice(0, 3);
  const testimonials = proof.testimonials
    .filter((testimonial) => testimonial.services.includes(service.slug))
    .concat(Object.values(heritageTestimonials).filter((testimonial) => testimonial.services.includes(service.slug)))
    .filter((testimonial, index, list) => list.findIndex((item) => item.quote === testimonial.quote) === index)
    .slice(0, 2);

  return { photos, testimonials };
}

function uniquePhotos(photos, usedSrcs = new Set(), count = photos.length) {
  const picked = [];
  for (const photo of photos) {
    if (!photo || usedSrcs.has(photo.src)) continue;
    picked.push(photo);
    usedSrcs.add(photo.src);
    if (picked.length >= count) break;
  }
  return picked;
}

function proofPhotoGrid(photos, site, usedSrcs = new Set(), count = photos.length) {
  return uniquePhotos(photos, usedSrcs, count)
    .map((photo) => `<figure>${img(photo.src, `${photo.alt} shown for ${site.shortPlace}-area homeowners`)}<figcaption>${esc(photo.caption)}</figcaption></figure>`)
    .join("\n          ");
}

function testimonialCards(testimonials) {
  return testimonials.map((testimonial) => `<article>
            <p>&ldquo;${esc(testimonial.quote)}&rdquo;</p>
            <strong>${esc(testimonial.name)}</strong>
            <span>${esc(testimonial.context)}</span>
          </article>`).join("\n          ");
}

function blogPosts(site) {
  const firstNearby = site.nearby[0];
  const secondNearby = site.nearby[1];
  return [
    {
      slug: `${site.folder}-exterior-painting-season-guide`,
      title: `When ${site.shortPlace} Homeowners Should Schedule Exterior Painting`,
      description: `A local guide to exterior painting timing, prep, surfaces, and estimate planning for ${site.place}, PA homeowners.`,
      date: "2026-05-19",
      category: "Exterior painting",
      image: images.exterior,
      sections: [
        {
          heading: `Why exterior painting timing matters in ${site.place}`,
          body: `${site.shortPlace}-area homes deal with seasonal moisture, direct sun, mature landscaping, and older exterior trim. Planning exterior painting before peeling or exposed wood spreads helps protect siding, shutters, doors, porch rails, and trim while keeping curb appeal strong.`,
        },
        {
          heading: "What to look at before requesting an estimate",
          body: `Walk the property and note peeling paint, soft wood, cracked caulk, faded shutters, mildew, failing porch railings, and areas that take the most weather. Photos of the front, sides, trim details, and any problem spots help the estimate conversation move faster.`,
        },
        {
          heading: `Local surfaces common near ${site.shortPlace}`,
          body: `Homes around ${site.roads} often need a mix of siding painting, trim prep, door painting, shutters, railings, and porch details. The best scope depends on exposure, existing coating condition, landscaping clearance, and whether repairs are needed before paint.`,
        },
        {
          heading: "Interior and drywall projects can pair well",
          body: `If weather delays exterior work, homeowners can often use the same estimate conversation for interior painting, drywall repair, cabinet painting, or trim finishing. That helps coordinate color planning and schedule windows across the home.`,
        },
        {
          heading: "How to get the cleanest quote",
          body: `Include your project address, the surfaces you want painted, preferred timing, whether the home is occupied, and any color direction. Homeowners near ${firstNearby}, ${secondNearby}, and surrounding ${site.county} communities can use the estimate form or call ${phone}.`,
        },
      ],
      faqs: [
        {
          question: `What is the best season for exterior painting in ${site.shortPlace}, PA?`,
          answer: `Spring through fall is usually the main exterior painting window, as long as temperatures, moisture, and surface conditions are suitable. The exact schedule depends on weather, prep needs, and the surfaces being painted.`,
        },
        {
          question: "Can exterior painting include shutters, doors, and porch railings?",
          answer: "Yes. Exterior painting estimates can include siding, trim, shutters, doors, porch railings, and other curb appeal details when those surfaces are part of the requested scope.",
        },
        {
          question: `Do you serve areas outside ${site.place}?`,
          answer: `Yes. Common nearby service areas include ${site.place}, ${site.nearby.slice(0, 6).join(", ")}, and nearby ${site.county} communities.`,
        },
      ],
    },
    {
      slug: `${site.folder}-exterior-paint-home-value-protection`,
      title: `How Exterior Paint Protects ${site.shortPlace} Homes and Supports Home Value`,
      description: `Why exterior painting can protect siding, trim, brick details, and curb appeal for ${site.place}, PA homeowners.`,
      date: "2026-05-20",
      category: "Exterior value",
      image: images.blueBellExterior,
      sections: [
        {
          heading: "Exterior paint is more than a color change",
          body: `A fresh exterior paint job can make a ${site.shortPlace} home feel cleaner, newer, and better cared for from the street. That curb appeal matters when neighbors, visitors, appraisers, and future buyers form a first impression before they ever step inside.`,
        },
        {
          heading: "Paint helps protect siding, trim, and exterior details",
          body: `Good exterior paint creates a protective coating over wood trim, siding, doors, shutters, porch railings, and other painted surfaces. When the coating fails, moisture and sun exposure can speed up peeling, cracking, swelling, mildew, and wood deterioration.`,
        },
        {
          heading: "Brick and masonry need the right plan",
          body: `Brick, stucco, and masonry surfaces should never be treated like ordinary wood trim. Some brick should be left natural, and some masonry projects need breathable coating systems so trapped moisture does not create bigger problems later.`,
        },
        {
          heading: `Why this matters around ${site.place}`,
          body: `Homes near ${site.roads} often combine older trim, shaded sides, sun-exposed elevations, porches, railings, and detailed entries. A professional exterior estimate should identify which surfaces need cleaning, scraping, sanding, priming, caulking, repair, or a specialized coating before finish paint.`,
        },
        {
          heading: "How exterior paint can support resale confidence",
          body: `Fresh paint cannot guarantee a specific sale price, but it can remove buyer hesitation. A maintained exterior tells buyers that the home has been cared for, reduces obvious repair objections, and helps photography, showings, and curb appeal work harder.`,
        },
      ],
      faqs: [
        {
          question: `Can exterior painting increase home value in ${site.shortPlace}?`,
          answer: `It can support perceived value by improving curb appeal and reducing visible maintenance concerns, but the exact impact depends on the home, market, paint condition, color choices, and quality of prep.`,
        },
        {
          question: "Does exterior paint protect siding?",
          answer: "Yes. On paintable siding and trim, exterior paint helps shield surfaces from sun, moisture, and wear when the surface is properly prepared and the right coating is used.",
        },
        {
          question: "Should brick always be painted?",
          answer: "No. Brick requires careful evaluation. Some masonry should stay unpainted, and painted masonry often needs breathable products and excellent moisture planning.",
        },
      ],
    },
    {
      slug: `${site.folder}-sherwin-williams-paint-types-sheens-quality`,
      title: `Sherwin-Williams Paint Types, Sheens, and Quality Levels Explained`,
      description: `A homeowner-friendly guide to Sherwin-Williams sheens, acrylic latex paint, and common lines like Emerald, SuperPaint, and ProMar.`,
      date: "2026-05-20",
      category: "Paint selection",
      image: images.interior,
      sections: [
        {
          heading: "Paint selection starts with the surface",
          body: `The right Sherwin-Williams paint choice depends on where the paint is going: interior walls, ceilings, trim, cabinets, doors, exterior siding, shutters, masonry, or commercial spaces. A professional painter should match the coating to the surface, traffic level, moisture exposure, and desired finish.`,
        },
        {
          heading: "Sheen changes both look and performance",
          body: `Flat and matte finishes reduce shine and hide minor wall imperfections. Satin and low-luster finishes add more washability and a soft glow. Semi-gloss and gloss are commonly considered for trim, doors, cabinets, and areas where durability and wipeability matter more than hiding surface flaws.`,
        },
        {
          heading: "Latex, acrylic, and specialty coatings",
          body: `Many modern residential paints are water-based latex or acrylic latex coatings. Exterior projects, masonry, cabinets, and high-moisture rooms may require more specialized products, bonding primers, urethane-modified coatings, or breathable masonry systems instead of a generic wall paint.`,
        },
        {
          heading: "Emerald, SuperPaint, and ProMar are not the same job answer",
          body: `Sherwin-Williams product lines serve different needs. Emerald is often positioned as a premium option, SuperPaint is a common residential workhorse, and ProMar lines are frequently used in professional interior repaint settings. The best choice depends on budget, substrate, room use, color change, durability needs, and whether the project is residential or commercial.`,
        },
        {
          heading: `How a ${site.shortPlace} painter should guide the decision`,
          body: `A strong estimate should explain the recommended product, sheen, primer, number of coats, and why that combination fits the home. For projects near ${firstNearby}, ${secondNearby}, and ${site.place}, the answer may differ between exterior trim, a bathroom ceiling, kitchen cabinets, and a whole-home interior repaint.`,
        },
      ],
      faqs: [
        {
          question: "What sheen should I use for interior walls?",
          answer: "Many homeowners choose matte, eggshell, or satin depending on room traffic, lighting, wall condition, and washability needs. A painter should help balance appearance and durability.",
        },
        {
          question: "Is Emerald always better than SuperPaint?",
          answer: "Not always. Emerald may be a premium fit for some projects, while SuperPaint or another line may be appropriate for others. Surface, prep, budget, and performance goals should drive the decision.",
        },
        {
          question: "Can one paint be used everywhere?",
          answer: "Usually no. Walls, trim, cabinets, masonry, bathrooms, ceilings, and exteriors can require different coatings, primers, and sheens.",
        },
      ],
    },
    {
      slug: `${site.folder}-how-to-find-trusted-professional-painter`,
      title: `How to Find a Trusted Professional Painter Near ${site.shortPlace}`,
      description: `What separates a professional painter from a risky low-detail paint job: prep, communication, materials, protection, and finish quality.`,
      date: "2026-05-20",
      category: "Hiring a painter",
      image: images.contact,
      sections: [
        {
          heading: "A trusted painter starts with a clear scope",
          body: `A professional painter should explain what is included before the job starts: surfaces, prep steps, primer, paint product, sheen, number of coats, repairs, protection, cleanup, timing, and what happens if hidden damage is found.`,
        },
        {
          heading: "Prep is where quality is won or lost",
          body: `Good painting is not just rolling color onto a wall. Prep can include washing, scraping, sanding, patching, caulking, masking, priming stains, repairing drywall, filling nail holes, protecting floors, and correcting surface problems before finish paint is applied.`,
        },
        {
          heading: "Details show up in the finished room",
          body: `Professional detail work shows in straight cut lines, smooth drywall patches, clean trim edges, even sheen, consistent coverage, neat caulk lines, protected hardware, and rooms that are left clean at the end of each workday.`,
        },
        {
          heading: "Communication matters as much as coating",
          body: `Homeowners should know who is coming, when work starts, how long the project should take, which rooms or exterior areas are active, and how questions will be handled. Clear communication reduces surprises and keeps the project from feeling chaotic.`,
        },
        {
          heading: `What to ask before hiring a painter in ${site.place}`,
          body: `Ask about insurance, prep process, paint products, warranty expectations, project protection, schedule, payment timing, and similar work near ${site.nearby.slice(0, 4).join(", ")}. The answers should feel specific, not vague or rushed.`,
        },
      ],
      faqs: [
        {
          question: "What makes a painter professional?",
          answer: "Clear scope, careful prep, appropriate materials, surface protection, consistent communication, clean work habits, and attention to finish details are strong professional signals.",
        },
        {
          question: "Should the cheapest painting quote win?",
          answer: "Not automatically. A low quote may leave out prep, primer, repairs, protection, coats, or quality materials. Compare scope and process, not price alone.",
        },
        {
          question: `How do I request a painting estimate near ${site.shortPlace}?`,
          answer: `Share the project address, surfaces, timing, repair needs, and rooms or exterior areas involved. Homeowners near ${site.place} and nearby ${site.county} communities can call ${phone} or use the estimate form.`,
        },
      ],
    },
    {
      slug: `${site.folder}-exterior-paint-prep-checklist`,
      title: `Exterior Paint Prep Checklist for ${site.shortPlace} Homes`,
      description: `A step-by-step exterior painting prep checklist for ${site.place}, PA: washing, scraping, sanding, caulk, priming, and protecting landscaping before paint.`,
      date: "2026-05-20",
      category: "Exterior painting",
      image: images.exterior2,
      sections: [
        {
          heading: `Start with a walk-around in ${site.place}`,
          body: `Before any scraping or sanding starts, walk the property and take notes on what is actually failing. Look for peeling paint at trim edges, open joints, popped caulk lines, soft wood, water staining under gutters, and any spots where sprinklers or shade keep surfaces damp. A short list of priorities helps keep the prep plan focused instead of “do everything.”`,
        },
        {
          heading: "Wash, treat mildew, and let the surfaces dry",
          body: `Exterior paint bonds best to clean, dry surfaces. Washing removes dirt, chalky residue, and spring pollen that can interfere with adhesion. If there are mildew-like dark areas, the prep plan should include appropriate cleaning and enough drying time so primer and paint are not trapped over moisture.`,
        },
        {
          heading: "Scrape, sand, and feather peeling edges",
          body: `Peeling paint needs to be scraped back to a sound edge, then sanded so the transition doesn’t telegraph through the finish. For older trim and porch details common around ${site.roads}, careful sanding and dust control matter as much as the new coating choice.`,
        },
        {
          heading: "Caulk gaps and plan minor repairs before priming",
          body: `Caulk works best after loose paint is removed and surfaces are clean. A painter should identify where flexible exterior caulk makes sense (small trim joints and gaps) versus where a repair or replacement is needed (soft wood or failing boards). Doing repairs before primer helps keep the final paint film continuous.`,
        },
        {
          heading: "Prime bare spots and problem areas the right way",
          body: `Primer is not one-size-fits-all. Bare wood, stained areas, patched repairs, and glossy surfaces can require different primers or bonding strategies. A solid estimate should specify where spot-priming is planned, when full priming is warranted, and how the primer choice supports the topcoat.`,
        },
        {
          heading: "Protect landscaping and plan safe access",
          body: `Prep and painting can impact plants, mulched beds, patios, and walkways. A good plan includes protecting shrubs and flowers near the work area, keeping windows and hardware clean, and confirming ladder placement or staging so crews can work safely around porches, railings, and entryways.`,
        },
        {
          heading: `What to send with your ${site.shortPlace} estimate request`,
          body: `For the fastest quote, share the address, the surfaces you want painted (siding, trim, shutters, doors, railings), and any known problem spots. Photos help. Homeowners near ${firstNearby}, ${secondNearby}, and surrounding ${site.county} communities can call ${phone} or use the estimate form to start the conversation.`,
        },
      ],
      faqs: [
        {
          question: "Do I need to pressure wash before exterior painting?",
          answer: "Most exteriors benefit from some form of washing to remove dirt and chalking so primer and paint can bond well. The method depends on the surface and condition; some projects use pressure washing carefully, while others use gentler washing approaches to avoid damage.",
        },
        {
          question: "How long should siding dry before painting?",
          answer: "It depends on the surface, weather, shade, and how wet the washing process was. The goal is fully dry, paintable surfaces before primer or paint goes on, so moisture isn’t trapped under the coating.",
        },
        {
          question: "What if you find rotted wood during prep?",
          answer: "Hidden damage sometimes shows up after scraping or probing soft spots. A professional should flag it, explain repair options, and confirm the scope change before moving forward so the finished work is stable under the paint.",
        },
        {
          question: "Can you paint shutters, doors, and porch railings at the same time?",
          answer: "Yes. Many exterior projects include multiple curb-appeal surfaces as one coordinated scope, as long as the prep plan matches the material and the condition of each surface.",
        },
        {
          question: `Do you serve ${site.shortPlace} and nearby towns like ${firstNearby} and ${secondNearby}?`,
          answer: `Yes. Estimate requests can cover ${site.place}, ${firstNearby}, ${secondNearby}, and nearby areas throughout ${site.county}. Share the project address and surfaces so the estimate scope matches your home.`,
        },
      ],
    },
    {
      slug: `${site.folder}-room-painting-timeline`,
      title: `How Long Does It Take to Paint a Room in ${site.shortPlace}?`,
      description: `A practical room painting timeline for ${site.place}, PA homeowners: prep, patching, primer, coats, drying time, and how to plan around pets and furniture.`,
      date: "2026-05-21",
      category: "Interior painting",
      image: images.interior,
      sections: [
        {
          heading: `A realistic room painting timeline for ${site.place} homes`,
          body: `Most room painting projects follow the same phases: protection and setup, surface prep, repairs, priming (when needed), finish coats, then cleanup and reinstalling hardware. The calendar time depends on what’s underneath the existing paint and how much prep the room needs, not just the room size.`,
        },
        {
          heading: "Prep and repairs usually determine the schedule",
          body: `Painting goes faster when walls are in good condition. If the room needs drywall patching, stain sealing, nail hole filling, caulk work, sanding, or fixing cracked corners, those steps can add time because repairs often need to dry before they can be sanded and coated. Homes around ${site.roads} sometimes have trim profiles, older doors, and high-traffic scuff patterns that require extra prep to look clean.`,
        },
        {
          heading: "Primer and color changes can add steps",
          body: "Not every room needs primer, but some do. Dark-to-light color changes, heavy stains, glossy surfaces, repaired areas, and certain high-wear rooms benefit from priming or spot-priming so the finish coats look even and hold up to cleaning.",
        },
        {
          heading: "Ceilings, trim, and doors change the scope",
          body: `“Paint a room” can mean walls only, or it can include the ceiling, baseboards, window trim, crown molding, and doors. Trim-heavy rooms and stairwell-adjacent areas common in ${site.county} homes take longer because cutting clean lines and achieving smooth enamel finishes is detail work.`,
        },
        {
          heading: `How to plan for furniture, pets, and daily life in ${site.shortPlace}`,
          body: `A smooth schedule starts with a quick plan: clear breakables, remove wall decor, and decide what furniture can shift to the center of the room. If you have pets or small children, ask how crews will manage doorways, drying walls, and daily cleanup. Homeowners near ${firstNearby}, ${secondNearby}, and surrounding ${site.place} neighborhoods can share a few photos and the scope (walls only vs. walls + trim + ceiling) to get a timeline that matches the room.`,
        },
        {
          heading: "What to send with your estimate request",
          body: `Include the room type (bedroom, living room, kitchen, bath), whether you want trim/doors/ceilings included, any known repair issues, and your color direction. Photos of problem areas help. A clear scope conversation leads to a more accurate schedule and fewer surprises once prep starts.`,
        },
      ],
      faqs: [
        {
          question: `How long does it take to paint a bedroom in ${site.shortPlace}?`,
          answer:
            "It depends on prep, repairs, and whether trim and ceilings are included. Bedrooms in good condition can move quickly, while rooms that need patching, priming, or detailed trim work take longer. The best estimate includes your exact scope and photos.",
        },
        {
          question: "Can you paint multiple rooms in one visit?",
          answer:
            "Often, yes. Grouping rooms can be efficient because prep materials, protection, and paint setup are already on site. A painter can recommend a sequence that keeps the home usable while work progresses.",
        },
        {
          question: "Do I need to leave the house while a room is painted?",
          answer:
            "Not usually. Many projects can be completed while homeowners are home, especially when the scope is planned room-by-room. Let your painter know about pets, allergies, and any rooms that must stay accessible.",
        },
        {
          question: "When can furniture go back after painting?",
          answer:
            "Light use is often possible after the room is dry to the touch, but full cure can take longer depending on the coating. Your painter should give practical guidance for moving furniture back and cleaning newly painted walls or trim.",
        },
        {
          question: `Do you serve ${site.shortPlace} and nearby towns like ${firstNearby} and ${secondNearby}?`,
          answer: `Yes. Estimate requests can cover ${site.place}, ${firstNearby}, ${secondNearby}, and nearby areas throughout ${site.county}. Share the project address and scope so the timeline matches your home.`,
        },
      ],
    },
    {
      slug: `${site.folder}-wall-prep-before-painting`,
      title: `Wall Prep Before Painting in ${site.shortPlace}: Patching, Sanding, and Priming`,
      description: `A homeowner checklist for smoother walls in ${site.place}, PA: patching, sanding, caulk lines, stain-blocking primer, and what to photograph for an accurate estimate.`,
      date: "2026-05-22",
      category: "Prep & repair",
      image: images.drywall,
      sections: [
        {
          heading: "Start by identifying what the paint is trying to hide",
          body: `Before you buy paint, walk the room in daylight and at night with a lamp held low to the wall. Look for nail holes, picture hook damage, dents, stress cracks, peeling spots, glossy patches, water stains, and uneven texture. Many ${site.shortPlace} homes have hallways and stairwells where scuffs and handprints build up, and those areas usually need more prep than a quiet guest room.`,
        },
        {
          heading: "Patching is usually a multi-step process",
          body: `Small nail holes can often be filled and sanded quickly, but larger repairs take a few steps: fill, dry, sand, then repeat until the patch is flat. If the wall has deep dents, loose tape, or crumbling areas, a painter may use setting-type compounds and reinforcement techniques so the repair stays stable under paint.`,
        },
        {
          heading: "Sanding and dust control keep the finish from looking gritty",
          body: "Even a great patch can look rough if it is not sanded smooth and the dust is not removed. A professional prep plan includes sanding, vacuuming or wiping down, protecting floors and furniture, and keeping dust out of HVAC returns so the final finish dries clean.",
        },
        {
          heading: "Primer is how you prevent flashing and stain bleed-through",
          body: `Patched areas and repaired corners often need spot-priming so the finish coat looks even. Water stains, marker, nicotine, and other discoloration can require stain-blocking primers so the spot does not reappear. A good painting estimate should specify when primer is planned and why.`,
        },
        {
          heading: "Caulk and edge prep are what make trim lines look crisp",
          body: `If you are painting walls next to baseboards, window trim, crown molding, or door casings, caulk gaps and loose joints before finish paint. Clean edges and smooth caulk lines are what make a room look “finished,” especially in trim-heavy ${site.county} homes.`,
        },
        {
          heading: `How to request a prep-aware estimate near ${site.shortPlace}`,
          body: `For the most accurate quote, send photos of the walls, trim, ceilings, and any problem areas from a few angles. Note whether the room needs patching, stain sealing, or wallpaper removal. Homeowners near ${firstNearby}, ${secondNearby}, and surrounding ${site.place} neighborhoods can share the address and scope so the prep plan matches the home.`,
        },
      ],
      faqs: [
        {
          question: "Do I need to sand walls before repainting?",
          answer:
            "Often, yes. Sanding helps smooth patch work, knock down rough texture, and improve adhesion on glossy or uneven areas. The amount of sanding depends on wall condition and the finish you want.",
        },
        {
          question: "Should patched areas be primed?",
          answer:
            "Usually, yes. Spot-priming patched drywall helps prevent flashing, where repaired areas look different from the surrounding wall after the finish coat dries.",
        },
        {
          question: "Can you paint over water stains?",
          answer:
            "Not reliably without the right prep. Many stains need stain-blocking primer and the underlying moisture issue should be addressed first so the stain does not return through the new paint.",
        },
        {
          question: "How do I know if cracks are a bigger drywall issue?",
          answer:
            "Hairline cracks can be cosmetic, but recurring cracks, loose tape, soft drywall, or visible movement can indicate a repair that needs reinforcement or more than simple spackle. A painter can evaluate the cause during an estimate.",
        },
        {
          question: `Do you serve ${site.shortPlace} and nearby towns like ${firstNearby} and ${secondNearby}?`,
          answer: `Yes. Estimate requests can cover ${site.place}, ${firstNearby}, ${secondNearby}, and nearby areas throughout ${site.county}. Share the project address and the condition notes so the prep plan matches your home.`,
        },
      ],
    },
  ];
}

function blogCard(post) {
  return `<article>
            ${img(post.image, post.title)}
            <div>
              <p class="blog-meta">${esc(post.category)} &middot; ${esc(post.date)}</p>
              <h3><a href="/blog/${post.slug}">${esc(post.title)}</a></h3>
              <p>${esc(post.description)}</p>
            </div>
          </article>`;
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
.text-link { color: var(--blue); font-weight: 800; text-underline-offset: 0.18em; }
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
.heritage-proof { background: #fff; }
.heritage-proof .section-heading { margin-bottom: 34px; }
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
.testimonial-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 28px;
}
.testimonial-grid article {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 14px 34px rgba(10, 22, 40, 0.08);
  display: grid;
  gap: 14px;
  padding: 24px;
}
.testimonial-grid p { color: var(--ink); font-size: 1.02rem; line-height: 1.55; }
.testimonial-grid strong { color: var(--navy); display: block; font-size: 0.98rem; line-height: 1.25; }
.testimonial-grid span { color: var(--muted); display: block; font-size: 0.9rem; font-weight: 700; line-height: 1.35; margin-top: -8px; }
.service-proof { background: var(--paper); }
.service-proof .photo-grid { margin-bottom: 28px; }
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
  background: linear-gradient(135deg, rgba(10, 22, 40, 0.98), rgba(22, 58, 99, 0.94));
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
.blog-preview, .blog-index, .blog-post { background: #fff; }
.blog-grid {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.blog-grid article {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 14px 34px rgba(10, 22, 40, 0.08);
  overflow: hidden;
}
.blog-grid img { aspect-ratio: 4 / 3; object-fit: cover; width: 100%; }
.blog-grid article > div { display: grid; gap: 10px; padding: 20px; }
.blog-grid h3 { margin: 0; }
.blog-grid h3 a { color: var(--navy); text-decoration: none; }
.blog-grid p:not(.blog-meta), .article-body p, .article-body li { color: var(--muted); }
.blog-meta {
  color: var(--blue);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.article-shell {
  display: grid;
  gap: 38px;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
  margin: 0 auto;
  max-width: 1160px;
}
.article-body {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 14px 34px rgba(10, 22, 40, 0.08);
  padding: clamp(24px, 4vw, 44px);
}
.article-body h2 { color: var(--navy); font-size: clamp(1.55rem, 3vw, 2.35rem); margin-top: 32px; }
.article-body h2:first-child { margin-top: 0; }
.article-body p { font-size: 1.04rem; margin-top: 12px; }
.article-sidebar {
  align-self: start;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 8px;
  display: grid;
  gap: 14px;
  padding: 22px;
  position: sticky;
  top: 112px;
}
.article-sidebar h3 { color: var(--navy); }
.article-sidebar a { color: var(--blue); font-weight: 800; text-underline-offset: 0.18em; }
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
  .service-grid, .answer-grid, .proof-notes, .why-grid, .photo-grid, .testimonial-grid, .township-grid, .blog-grid, .article-shell { grid-template-columns: 1fr; }
  .article-sidebar { position: static; }
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
  const proof = proofFor(site);
  const homepageImagePool = proof.photos.concat(Object.values(heritageProjectPhotos));
  const homepageUsedImages = new Set([images.heroInterior, images.exterior, images.interior, images.drywall]);
  const heritageProofPhotos = proofPhotoGrid(homepageImagePool, site, homepageUsedImages, 4);
  const galleryPhotos = proofPhotoGrid(homepageImagePool.slice().reverse(), site, homepageUsedImages, 4);
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
          url: heritageUrl,
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
        sameAs: [`https://${site.domain}/`, heritageUrl],
        subjectOf: proof.photos.map((photo) => ({
          "@type": "ImageObject",
          url: photo.src,
          caption: photo.caption,
        })),
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
      <section class="section heritage-proof" aria-labelledby="heritage-proof-title">
        <div class="section-heading">
          <p class="eyebrow">Recent Heritage project work</p>
          <h2 id="heritage-proof-title">Local painting proof behind ${esc(site.brand)}</h2>
          <p>These examples come from Heritage House Painting project photography and customer feedback. They help ${esc(site.shortPlace)} homeowners compare real interior painting, exterior painting, drywall repair, and finish work before requesting an estimate.</p>
          <p><a class="text-link" href="/project-proof">View the full project proof and customer feedback page</a></p>
        </div>
        <div class="photo-grid">
          ${heritageProofPhotos}
        </div>
        <div class="testimonial-grid" aria-label="Feedback from Heritage House Painting customers">
          ${testimonialCards(proof.testimonials)}
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
      <section class="section blog-preview" aria-labelledby="blog-preview-title">
        <div class="section-heading">
          <p class="eyebrow">Local painting blog</p>
          <h2 id="blog-preview-title">${esc(site.shortPlace)} painting advice for homeowners and answer engines</h2>
          <p>Local blog posts give homeowners, Google, and AI answer engines clearer context about exterior painting timing, interior repainting, drywall repair, surfaces, neighborhoods, and estimate planning near ${esc(site.place)}.</p>
        </div>
        <div class="blog-grid">
          ${blogPosts(site).map(blogCard).join("\n          ")}
        </div>
      </section>
      <section class="section project-photos" aria-labelledby="project-photos-title">
        <div class="section-heading">
          <p class="eyebrow">Project photos</p>
          <h2 id="project-photos-title">Project photos from Heritage House Painting</h2>
          <p>These images use project photography from the Heritage House Painting portfolio, not stock photo libraries.</p>
        </div>
        <div class="photo-grid">
          ${galleryPhotos}
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
    ${footer(site, "Local painting searches", `Exterior painter ${esc(site.shortPlace)} PA, ${esc(site.shortPlace)} painters, house painter ${esc(site.place)} PA, interior painting ${esc(nearby[0])}, exterior painting ${esc(nearby[1])}, painters ${esc(nearby[2])} PA, ${esc(site.county)} painting contractor.`)}
    ${estimateFormScript()}
  </body>
</html>
`;
}

function projectProofPage(site) {
  const proof = proofFor(site);
  const title = `${site.shortPlace} Painting Project Proof | ${site.brand}`;
  const description = `Project photos, customer feedback, business disclosure, and local service proof for ${site.brand} estimate requests near ${site.place}, PA.`;
  const proofPhotos = proofPhotoGrid(proof.photos.concat(Object.values(heritageProjectPhotos)), site, new Set(), 8);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://${site.domain}/project-proof#webpage`,
        url: `https://${site.domain}/project-proof`,
        name: title,
        description,
        isPartOf: { "@id": `https://${site.domain}/#website` },
        about: { "@id": `https://${site.domain}/#localbusiness` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: proof.photos[0].src,
          caption: proof.photos[0].caption,
        },
        breadcrumb: { "@id": `https://${site.domain}/project-proof#breadcrumb` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://${site.domain}/project-proof#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.brand, item: `https://${site.domain}/` },
          { "@type": "ListItem", position: 2, name: "Project proof", item: `https://${site.domain}/project-proof` },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `https://${site.domain}/project-proof#photos`,
        name: `${site.shortPlace} painting project proof photos`,
        itemListElement: proof.photos.map((photo, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "ImageObject",
            url: photo.src,
            caption: photo.caption,
          },
        })),
      },
      {
        "@type": "Organization",
        "@id": `${heritageUrl}/#organization`,
        name: "Heritage House Painting",
        url: heritageUrl,
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
    <link rel="canonical" href="https://${site.domain}/project-proof">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${esc(site.brand)}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:url" content="https://${site.domain}/project-proof">
    <meta property="og:image" content="${proof.photos[0].src}">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="preconnect" href="https://imagedelivery.net">
    <link rel="preload" as="image" href="${proof.photos[0].src}" fetchpriority="high">
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
      <section class="hero" aria-labelledby="proof-title">
        <div class="hero-media" style="background-image:url('${proof.photos[0].src}')" role="img" aria-label="${esc(proof.photos[0].alt)}"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-copy-block">
            <p class="eyebrow">Project photos and customer feedback</p>
            <h1 id="proof-title">${esc(site.shortPlace)} painting proof from Heritage House Painting</h1>
            <p class="hero-copy">${esc(proof.note)} This page gives homeowners and search engines a clearer connection between ${esc(site.brand)}, Heritage House Painting, real project photography, customer feedback, and the local service area.</p>
            <div class="hero-actions">
              <a class="button primary" href="tel:${phoneHref}">Call ${phone}</a>
              <a class="button secondary" href="/#contact">Request Estimate</a>
            </div>
          </div>
          <div class="estimate-form">
            <p class="form-kicker">Business disclosure</p>
            <h2>Operated by Heritage House Painting</h2>
            <p class="form-note">${esc(site.brand)} is a local marketing site. Estimate requests, customer communication, and painting services are handled by <a href="${heritageUrl}">Heritage House Painting</a> at ${esc(address)}.</p>
          </div>
        </div>
      </section>
      <section class="section heritage-proof" aria-labelledby="photo-proof-title">
        <div class="section-heading">
          <p class="eyebrow">Portfolio photos</p>
          <h2 id="photo-proof-title">Painting, drywall, exterior, and finish work examples</h2>
          <p>These are Heritage House Painting portfolio images used to support local estimate pages. They are not stock photos.</p>
        </div>
        <div class="photo-grid">
          ${proofPhotos}
        </div>
      </section>
      <section class="section answer-section" aria-labelledby="feedback-title">
        <div class="section-heading">
          <p class="eyebrow">Customer feedback</p>
          <h2 id="feedback-title">Feedback used as local service proof</h2>
          <p>Customer comments shown here are included to help homeowners compare experience, communication, cleanliness, and finish quality before requesting a local estimate.</p>
        </div>
        <div class="testimonial-grid" aria-label="Feedback from Heritage House Painting customers">
          ${testimonialCards(proof.testimonials)}
        </div>
      </section>
      <section class="section local-proof" aria-labelledby="authority-title">
        <div class="section-heading">
          <p class="eyebrow">Trust and local relevance</p>
          <h2 id="authority-title">Why this proof matters for ${esc(site.shortPlace)} homeowners</h2>
          <p>Search engines and homeowners both need more than repeated town names. This page ties the local site to a real painting company, real project assets, service-area context, and clear contact information.</p>
        </div>
        <div class="proof-notes">
          <article><h3>Company of record</h3><p>Heritage House Painting handles estimate requests and painting services from this local site. The main company site is <a href="${heritageUrl}">heritagehousepainting.com</a>.</p></article>
          <article><h3>Local context</h3><p>${esc(site.localProof)}. Nearby context includes ${esc(site.landmarks.join(", "))}.</p></article>
          <article><h3>Services supported</h3><p>${serviceLinks(site)}</p></article>
        </div>
      </section>
      <section class="contact" id="contact">
        <div class="contact-panel">
          <div><p class="eyebrow">Free local estimate</p><h2>Use this proof to plan your ${esc(site.shortPlace)} painting estimate</h2><p>Share the project address, surfaces, timing, and any repair or color notes. Mention the 10% exterior painting offer for qualifying exterior projects.</p></div>
          ${estimateForm(site)}
        </div>
      </section>
    </main>
    ${footer(site)}
    ${estimateFormScript()}
  </body>
</html>
`;
}

function servicePage(site, service) {
  const title = `${service.title} in ${site.shortPlace}, PA | ${site.brand}`;
  const description = `${service.title} in ${site.shortPlace}, PA. ${service.summary} Local estimates near ${site.nearby.slice(0, 3).join(", ")}.`;
  const proof = serviceProofFor(site, service);
  const serviceUsedImages = new Set([service.image]);
  const serviceProofPhotos = proofPhotoGrid(proof.photos.concat(Object.values(heritageProjectPhotos)), site, serviceUsedImages, 3);
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
        subjectOf: proof.photos.map((photo) => ({
          "@type": "ImageObject",
          url: photo.src,
          caption: photo.caption,
        })),
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
      <section class="section service-proof" aria-labelledby="service-proof-title">
        <div class="section-heading">
          <p class="eyebrow">Painting &amp; drywall work near ${esc(site.shortPlace)}</p>
          <h2 id="service-proof-title">${esc(service.title)} proof from Heritage House Painting</h2>
          <p>Project photography and customer feedback from Heritage House Painting gives this ${esc(site.shortPlace)} service page real-world context beyond generic service descriptions.</p>
        </div>
        <div class="photo-grid">
          ${serviceProofPhotos}
        </div>
        <div class="testimonial-grid" aria-label="Feedback from Heritage House Painting customers">
          ${testimonialCards(proof.testimonials)}
        </div>
      </section>
      <section class="contact" id="contact">
        <div class="contact-panel">
          <div><p class="eyebrow">Free local estimate</p><h2>Request ${esc(service.title.toLowerCase())} pricing near ${esc(site.shortPlace)}</h2><p>Call or send a request with your project address, scope, surface conditions, and timing.</p></div>
          ${estimateForm(site)}
        </div>
      </section>
    </main>
    ${footer(site, "Service areas", `${esc(site.place)}, ${esc(site.nearby.join(", "))}, and nearby ${esc(site.county)} communities.`)}
    ${estimateFormScript()}
  </body>
</html>
`;
}

function blogIndexPage(site) {
  const posts = blogPosts(site);
  const title = `${site.shortPlace} Painting Blog | ${site.brand}`;
  const description = `Local painting advice for ${site.place}, PA homeowners, including exterior painting, interior painting, drywall repair, prep, timing, and estimate planning.`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `https://${site.domain}/blog#blog`,
    url: `https://${site.domain}/blog`,
    name: title,
    description,
    publisher: { "@id": `https://${site.domain}/#localbusiness` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      url: `https://${site.domain}/blog/${post.slug}`,
      image: post.image,
    })),
    inLanguage: "en-US",
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <link rel="canonical" href="https://${site.domain}/blog">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${esc(site.brand)}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:url" content="https://${site.domain}/blog">
    <meta property="og:image" content="${posts[0].image}">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="preconnect" href="https://imagedelivery.net">
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
      <section class="section blog-index" aria-labelledby="blog-title">
        <div class="section-heading">
          <p class="eyebrow">Local painting blog</p>
          <h1 id="blog-title">${esc(site.shortPlace)} painting guides and estimate advice</h1>
          <p>Helpful, locally specific articles for homeowners comparing painters, planning exterior painting, preparing rooms, reviewing drywall repairs, and understanding service coverage near ${esc(site.place)}.</p>
        </div>
        <div class="blog-grid">
          ${posts.map(blogCard).join("\n          ")}
        </div>
      </section>
      <section class="contact" id="contact">
        <div class="contact-panel">
          <div><p class="eyebrow">Free local estimate</p><h2>Have a ${esc(site.shortPlace)} painting project in mind?</h2><p>Use the estimate form with your project address, surfaces, timing, and any repair or color notes.</p></div>
          ${estimateForm(site)}
        </div>
      </section>
    </main>
    ${footer(site)}
    ${estimateFormScript()}
  </body>
</html>
`;
}

function blogPostPage(site, post) {
  const title = `${post.title} | ${site.brand}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://${site.domain}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.description,
        image: post.image,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: "Heritage House Painting" },
        publisher: { "@id": `https://${site.domain}/#localbusiness` },
        mainEntityOfPage: `https://${site.domain}/blog/${post.slug}`,
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": `https://${site.domain}/blog/${post.slug}#faq`,
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://${site.domain}/blog/${post.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.brand, item: `https://${site.domain}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `https://${site.domain}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://${site.domain}/blog/${post.slug}` },
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
    <meta name="description" content="${esc(post.description)}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <link rel="canonical" href="https://${site.domain}/blog/${post.slug}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="${esc(site.brand)}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(post.description)}">
    <meta property="og:url" content="https://${site.domain}/blog/${post.slug}">
    <meta property="og:image" content="${post.image}">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="preconnect" href="https://imagedelivery.net">
    <link rel="preload" as="image" href="${post.image}" fetchpriority="high">
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
      <section class="hero" aria-labelledby="article-title">
        <div class="hero-media" style="background-image:url('${post.image}')" role="img" aria-label="${esc(post.title)}"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-copy-block">
            <p class="eyebrow">${esc(post.category)} near ${esc(site.shortPlace)}, PA</p>
            <h1 id="article-title">${esc(post.title)}</h1>
            <p class="hero-copy">${esc(post.description)}</p>
            <div class="hero-actions">
              <a class="button primary" href="tel:${phoneHref}">Call ${phone}</a>
              <a class="button secondary" href="/blog">All Blog Posts</a>
            </div>
          </div>
          ${estimateForm(site)}
        </div>
      </section>
      <section class="section blog-post">
        <div class="article-shell">
          <article class="article-body">
            ${post.sections.map((section) => `<h2>${esc(section.heading)}</h2><p>${esc(section.body)}</p>`).join("\n            ")}
            <h2>Common questions</h2>
            ${post.faqs.map((faq) => `<h3>${esc(faq.question)}</h3><p>${esc(faq.answer)}</p>`).join("\n            ")}
          </article>
          <aside class="article-sidebar" aria-label="Related painting resources">
            <p class="blog-meta">${esc(post.date)}</p>
            <h3>Plan a local estimate</h3>
            <p>Share the project address, surfaces, timing, and repair notes for a faster ${esc(site.shortPlace)} painting estimate.</p>
            <a href="/#contact">Request estimate</a>
            <a href="/exterior-painting">Exterior painting</a>
            <a href="/interior-painting">Interior painting</a>
            <a href="/drywall-repair">Drywall repair</a>
          </aside>
        </div>
      </section>
    </main>
    ${footer(site, "More local pages")}
    ${estimateFormScript()}
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
  const proof = proofFor(site);
  const posts = blogPosts(site);
  const proofImages = proof.photos.map((photo) => `    <image:image><image:loc>${photo.src}</image:loc><image:title>${esc(photo.caption)}</image:title></image:image>`).join("\n");
  const serviceUrls = servicePages.map((service) => `  <url>
    <loc>https://${site.domain}/${service.slug}</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image><image:loc>${service.image}</image:loc><image:title>${service.title} in ${site.shortPlace}, PA</image:title></image:image>
  </url>`).join("\n");
  const proofUrl = `  <url>
    <loc>https://${site.domain}/project-proof</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
${proofImages}
  </url>`;
  const blogUrls = `  <url>
    <loc>https://${site.domain}/blog</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
${posts.map((post) => `  <url>
    <loc>https://${site.domain}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.65</priority>
    <image:image><image:loc>${post.image}</image:loc><image:title>${esc(post.title)}</image:title></image:image>
  </url>`).join("\n")}`;
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
${proofImages}
  </url>
${proofUrl}
${serviceUrls}
${blogUrls}
</urlset>
`;
}

function llms(site) {
  const proof = proofFor(site);
  const posts = blogPosts(site);
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

Project proof:
- Project proof and customer feedback page: https://${site.domain}/project-proof
- The local marketing site is operated by Heritage House Painting: ${heritageUrl}

Local blog:
- Blog index: https://${site.domain}/blog
${posts.map((post) => `- ${post.title}: https://${site.domain}/blog/${post.slug}`).join("\n")}

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

Heritage House Painting proof assets:
${proof.photos.map((photo) => `- ${photo.caption}`).join("\n")}

Customer feedback shown visually:
${proof.testimonials.map((testimonial) => `- ${testimonial.name}, ${testimonial.context}`).join("\n")}

Contact:
- Phone: +1-215-791-4043
- Email: ${email}
- Estimate form: https://${site.domain}/#contact
- Main company website: ${heritageUrl}

Summary:
${site.brand} helps local homeowners request estimates for exterior painting, interior painting, drywall repair, trim finishing, cabinet painting, and commercial painting near ${site.place}, PA. The current seasonal focus is exterior painting, with a 10% offer for qualifying exterior projects.
`;
}

function vercel(site) {
  const serviceRewrites = servicePages.map((service) => `    {
      "source": "/${service.slug}",
      "destination": "/${service.slug}.html"
    }`).join(",\n");
  const blogRewrites = blogPosts(site).map((post) => `    {
      "source": "/blog/${post.slug}",
      "destination": "/blog/${post.slug}.html"
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
      "source": "/project-proof",
      "destination": "/project-proof.html"
    },
    {
      "source": "/blog",
      "destination": "/blog/index.html"
    },
${blogRewrites},
    {
      "source": "/((?!api/|styles.css|analytics.js|robots.txt|sitemap.xml|llms.txt).*)",
      "destination": "/index.html"
    }
  ]
}
`;
}

function rootVercel() {
  const rootSite = sites.find((site) => site.folder === "horshampainters");
  const routedSites = sites.filter((site) => site.folder !== "horshampainters");
  const hostRewrites = [];

  for (const site of routedSites) {
    for (const host of [site.domain, `www.${site.domain}`]) {
      for (const file of ["styles.css", "robots.txt", "sitemap.xml", "llms.txt"]) {
        hostRewrites.push({
          source: `/${file}`,
          has: [{ type: "host", value: host }],
          destination: `/sites/${site.folder}/${file}`,
        });
      }

      for (const rewrite of JSON.parse(vercel(site)).rewrites) {
        hostRewrites.push({
          source: rewrite.source,
          has: [{ type: "host", value: host }],
          destination: rewrite.destination === "/index.html" ? `/sites/${site.folder}/index.html` : `/sites/${site.folder}${rewrite.destination}`,
        });
      }
    }
  }

  return `${JSON.stringify({
    cleanUrls: true,
    trailingSlash: false,
    headers: [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ],
    rewrites: hostRewrites.concat(JSON.parse(vercel(rootSite)).rewrites),
  }, null, 2)}
`;
}

fs.rmSync(outRoot, { recursive: true, force: true });
fs.mkdirSync(outRoot, { recursive: true });

for (const site of sites) {
  const dir = path.join(outRoot, site.folder);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page(site));
  fs.writeFileSync(path.join(dir, "project-proof.html"), projectProofPage(site));
  for (const service of servicePages) {
    fs.writeFileSync(path.join(dir, `${service.slug}.html`), servicePage(site, service));
  }
  const blogDir = path.join(dir, "blog");
  fs.mkdirSync(blogDir, { recursive: true });
  fs.writeFileSync(path.join(blogDir, "index.html"), blogIndexPage(site));
  for (const post of blogPosts(site)) {
    fs.writeFileSync(path.join(blogDir, `${post.slug}.html`), blogPostPage(site, post));
  }
  fs.writeFileSync(path.join(dir, "styles.css"), css(site));
  fs.copyFileSync(path.join(process.cwd(), "analytics.js"), path.join(dir, "analytics.js"));
  fs.copyFileSync(path.join(process.cwd(), logoFile), path.join(dir, logoFile));
  fs.writeFileSync(path.join(dir, "robots.txt"), robots(site));
  fs.writeFileSync(path.join(dir, "sitemap.xml"), sitemap(site));
  fs.writeFileSync(path.join(dir, "llms.txt"), llms(site));
  fs.writeFileSync(path.join(dir, "vercel.json"), vercel(site));
  fs.mkdirSync(path.join(dir, "api"), { recursive: true });
  if (site.folder === "horshampainters") {
    fs.copyFileSync(path.join(process.cwd(), "api", "estimate.js"), path.join(dir, "api", "estimate.js"));
  } else {
    fs.writeFileSync(path.join(dir, "api", "estimate.js"), 'process.env.LEAD_FROM_EMAIL =\n  process.env.LEAD_FROM_EMAIL || "Heritage House Painting <estimates@send.heritagehousepainting.com>";\n\nmodule.exports = require("../../../api/estimate");\n');
  }
}

fs.writeFileSync(path.join(outRoot, "horshampainters", "vercel.json"), rootVercel());

console.log(`Generated ${sites.length} sites in ${outRoot}`);
