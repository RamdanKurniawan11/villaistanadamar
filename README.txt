VILLA ISTANA DAMAR — WEBSITE PACKAGE
===================================

FILES
- index.html: complete responsive one-page website
- assets/: supplied logo, curated villa photos, and one supplied video

RUN
1. Extract the ZIP.
2. Keep index.html and the assets folder together.
3. Open index.html in a modern browser.
   For best results, run a local server from this folder:
   python3 -m http.server 8000
   then visit http://localhost:8000

FEATURES
- Six integrated sections based on the approved design direction.
- Dark / light theme toggle in the header; preference is remembered in the browser.
- Original-template-inspired smooth scrolling, sticky editorial rhythm, scroll reveal,
  timeline progress, pointer parallax, geometric frames and responsive menu.
- Ningrum / Wulan villa selector and auto-advancing photo gallery with manual controls.
- Guest testimonial carousel (dummy content clearly labelled as illustrative).
- Video modal using a video from the supplied archive.
- WhatsApp / booking links are placeholders and must be replaced with the official details.

IMPORTANT CONFIGURATION
Open index.html and find:
const bookingConfig={whatsappNumber:'', ... bookingUrl:''};
Enter the official WhatsApp number (international digits, no +) and booking URL.
Also replace the Google Business Profile placeholder and dummy guest reviews before publishing.
The supplied media assets are kept local in the assets folder; Google Fonts and Lenis are
loaded from their public CDNs, with native browser scrolling as fallback.
