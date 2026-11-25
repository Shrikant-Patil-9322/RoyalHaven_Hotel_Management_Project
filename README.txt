
ROYALHAVEN HOTEL MANAGEMENT / BOOKING FRONTEND
================================================

Technology:
- HTML5
- CSS3
- Internal CSS on every page
- CSS animations and hover effects
- Responsive design
- No backend/database required for this demo

Pages:
1. index.html       - Home page
2. rooms.html       - Room listing
3. services.html    - Hotel services
4. gallery.html     - Image gallery
5. about.html       - About hotel
6. booking.html     - Booking form
7. contact.html     - Contact form
8. login.html       - Guest login
9. register.html    - Guest registration

How to run:
1. Extract the ZIP.
2. Open index.html in Chrome/Edge.
3. Navigate using the menu.

NEW FEATURES (frontend only, data kept in browser localStorage)
- Swiper hero slider on the home page
- Guest register/login and Admin login (admin@royalhaven.com / admin123)
- Admin dashboard (admin.html): stats, booking status, delete, WhatsApp guest
- Booking with live price + GST, pickup option with mobile OTP (demo OTP shown on screen)
- Payment modal: Razorpay (TEST mode, real checkout) + UPI / Card / Pay at Hotel (simulated)
- WhatsApp: floating chat button on every page + booking confirmation message
- Change the hotel WhatsApp number in js/app.js (RH.WA)

Important:
The forms are frontend demo forms. They do not save data.
For a real Hotel Management System, connect these pages to PHP/MySQL,
Node/Express/MongoDB, or another backend.

UPDATE (latest)
- 3-night offer: exactly 3 nights = 15% off room charge (GST on discounted amount). Edit OFFER_NIGHTS / OFFER_PCT in booking.html.
- Pickup charge is Rs 200 (PICK in booking.html).
- Pickup map (Leaflet + OpenStreetMap) with 20 km zone around Rambaug Colony, Kothrud. Live GPS option asks permission and shows help if blocked / GPS off.
  Live GPS only works on https:// or http://localhost (run e.g. 'python3 -m http.server' in this folder).
- Booking PDF (jsPDF): guest mobile number is printed in the top header. Download button + WhatsApp button.
  WhatsApp: on phones the PDF is shared directly; on desktop the PDF downloads and WhatsApp opens (attach manually).
  Fully automatic sending needs a backend + WhatsApp Business Cloud API.
- Razorpay key id is in booking.html (RZP_KEY). The SECRET key must never be placed in frontend files.

RUN: in VS Code install 'Live Server', right-click booking.html > Open with Live Server (http://127.0.0.1:5500). GPS works there.
Google Maps links: hotel + route from pickup; admin page has 'Open in Google Maps' per pickup.
