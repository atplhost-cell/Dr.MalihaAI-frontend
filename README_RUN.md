# DR. MALIHA AI — Web Dashboard

This folder is the actual Vite project. `package.json` is in this same folder.

## Run

```powershell
npm install
npm run dev
```

## Backend API

The UI is frontend/API-ready. Backend endpoints can be connected through the existing service files under `src/services/` and environment variables in `.env`.

For therapist booking, set:

```env
VITE_THERAPIST_BOOKING_URL=https://YOUR-BACKEND-BOOKING-PAGE
```

Do not put secrets/API keys in frontend `.env` variables.

## Current web scope

- Login
- Register
- Forgot Password / OTP / Reset Password
- Limited Dashboard
- Journal
- Mood Tracking
- Therapist Booking handoff
- Admin Dashboard
- Logout/session

The dashboard is designed to closely match the supplied DR. MALIHA AI reference image: same pink/purple/cream visual language, sidebar structure, hero area, mood card, action cards, journey, insights, quick reset, SOS and bottom wellness banner.
