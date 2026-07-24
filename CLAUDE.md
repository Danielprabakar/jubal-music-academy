# JMA CRM Frontend Integration — Project Brief

## Business Context
Jubal Music Academy (JMA) is an online worship keyboard training platform for
church/worship musicians, run by Daniel Prabakar. This page is the landing
page for the "Worship Keys – 3 Day Challenge," a ₹249 low-ticket entry
workshop that feeds a funnel: free content → WhatsApp lead magnet → this
₹249 3-day challenge → a ₹10,000 6-month live batch.

The 3-day format: Day 1 & 2 are self-paced lessons, Day 3 (Saturday) is a
LIVE session at 10:00 AM IST. Batches run Thursday–Saturday on a recurring
weekly cycle.

Student experience required end-to-end:
Landing Page → Registration → Razorpay Payment → CRM Update → Email →
WhatsApp → Batch Onboarding — with everything after payment fully automatic,
no manual intervention.

## Non-negotiable business rule
The frontend must NEVER treat its own Razorpay Checkout success callback as
proof of payment. Only the backend's independent verification (it calls
Razorpay's own API to confirm a payment before doing anything) counts as a
real, paid registration. This exists because trusting a frontend-reported
"success" is spoofable and has caused real payment fraud in similar systems.
If asked to "simplify" or "just mark it paid on success" for speed, push
back — this violates the core trust model.

## Backend Contract
Backend: Google Apps Script Web App (deployed, single POST endpoint).
Frontend: React + Tailwind + Vite, hosted on Vercel.
Payment: Razorpay Checkout.

### Endpoint
POST to the Apps Script Web App URL (the /exec URL from deployment).
Body is JSON. Every frontend request needs an "action" field.

### Action: "register"
Request:
{
  "action": "register",
  "name": "...", "email": "...", "phone": "...",
  "country": "...", "city": "...", "instrument": "...",
  "experience": "...", "level": "...", "church": "...",
  "expectations": "...", "referral": "..."
}
Response:
{ "success": true, "message": "...", "data": { "registrationId": "...", "batchId": "..." } }

Field names above MUST match exactly (case-sensitive).

### Action: "createOrder"
Called AFTER register succeeds, using the returned registrationId.
Request:
{ "action": "createOrder", "registrationId": "JMAWKC-2026-00001" }
Response:
{ "success": true, "data": { "orderId": "...", "keyId": "...", "amount": 24900, "currency": "INR" } }

amount is in PAISE (integer). Use directly in Razorpay Checkout options.

## Required Frontend Flow (do not shortcut any step)
1. Submit registration form → action: "register" → get registrationId
2. Immediately → action: "createOrder" with that registrationId → get orderId/keyId/amount
3. Open Razorpay Checkout with { key: keyId, amount, currency, order_id: orderId }
4. On Checkout's success callback: show "Payment Received. Verifying..." ONLY.
   Do not show a final success state here.
5. Actual confirmation (email + WhatsApp automation) is triggered server-side
   by Razorpay's webhook once it independently verifies the payment — this
   already works on the backend. Frontend just needs a way to reflect
   eventual success/failure to the student (e.g., poll a status endpoint,
   or redirect to a "we'll email/WhatsApp you shortly" confirmation page —
   decide together which UX fits before building).

## Known gotchas
- Backend is Apps Script — always returns HTTP 200, even on internal errors.
  Check response.success (boolean) in the JSON body, not the HTTP status.
- CORS behavior from Apps Script Web Apps hasn't been tested from this
  frontend yet — if fetch() fails with a CORS error, check the Apps Script
  deployment settings (Execute as: Me, Who has access: Anyone) first.
- Everything downstream of payment (CRM update, payment confirmation
  WhatsApp/email, later group-invite WhatsApp) is already built and working
  on the backend — the frontend does NOT need to trigger any of that
  directly, only register + createOrder + open Checkout.