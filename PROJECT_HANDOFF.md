# DR. MALIHA AI — Web Handoff

## What has been completed in this web build

### User side
1. Landing page with consistent brand/theme.
2. Register with validation and password confirmation.
3. Login with local demo account validation.
4. Forgot password flow.
5. OTP verification (demo code: `123456`).
6. Reset password.
7. Persistent local demo session + logout.
8. Limited user dashboard.
9. Journal screen with existing journal service and local persistence.
10. Mood tracking with saved history and average score.
11. Therapist booking handoff screen / redirect support.

### Admin side
The existing admin workspace remains available and includes user, therapist, booking, wellness activity, report and settings areas. It is intentionally separated from the limited user web flow.

## Backend integration points

- Replace the local authentication block in `src/App.tsx` with the backend auth API when the API contract is available.
- `src/services/journalService.ts` already supports API mode using `VITE_JOURNAL_MODE=api` and `VITE_JOURNAL_API_PATH`.
- `VITE_THERAPIST_BOOKING_URL` redirects users to the backend-owned booking page.
- Existing API-ready service modules are preserved for future/mobile reuse.

## Important production note

The localStorage authentication is only a frontend demonstration. Do not use it as production authentication. Passwords must never be stored in localStorage in a production release; authentication must be handled by the backend with secure session/token practices.
