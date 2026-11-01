VILLA ISTANA DAMAR — ADMIN DESIGN CONCEPT
==========================================
Pages:
- admin-login.html       Administrator sign-in visual
- admin-dashboard.html   Analytics dashboard: traffic, booking, occupancy, revenue
- admin-bookings.html    Booking list, calendar view, manual booking form
- admin-customers.html   Customer directory with live text search
- admin-invoices.html    Invoice list and printable invoice preview
- admin.css              Shared dark/light theme and responsive styling
- admin.js               Theme toggle and prototype interactions
- assets/                Brand logo and selected villa photographs

RUN:
Extract the ZIP and keep all files/folders together. Open admin-login.html,
or run `python3 -m http.server 8000` in this directory and visit
http://localhost:8000/admin-login.html.

DESIGN / PROTOTYPE NOTES:
This is a front-end visual prototype. All names, bookings, amounts, customer
records, chart metrics, and calendar entries are illustrative dummy data.
Login currently demonstrates navigation only; it is NOT authentication.
Booking availability is not connected to a live room inventory.
Invoice preview/print is a visual concept, not an issued tax/accounting document.
No customer data is transmitted or stored.
