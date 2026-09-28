# DR. MALIHA AI — Web Frontend

A calm, responsive React + TypeScript web frontend for the limited web scope.

## Web scope
Login, Register, Forgot Password / OTP / Reset Password, user dashboard, Journal, Mood Tracking, Therapist Booking handoff, Admin Dashboard, and Logout/session handling.

## API-ready architecture
UI components call feature hooks/services; HTTP requests live in `src/services` and `src/lib/axios.ts`. API URLs/paths are configurable with Vite environment variables.

API failure never falls back to fake data. Screens use Loading → Data → Empty → Error → Retry states where data is backend-driven.

## Security
No password is stored in localStorage. No OTP is embedded in the frontend. Do not place OpenAI, ElevenLabs, or other secret provider keys in this React application.

## Run
```bash
npm install
npm run dev
npm run build
```

See `.env.example` for the endpoint variables Ravi can map to the backend contract.
