# Admin Login Credentials

Default admin credentials for DharmaFest website:

- **Username:** `Dharmafest2026!`
- **Password:** `NHSFDharmafest2026080326!!`

To change these credentials, edit the `DEFAULT_USERNAME` and `DEFAULT_PASSWORD` constants in `src/contexts/AuthContext.tsx`.

## Features

- Login persists across browser sessions when "Remember login" is checked
- Admin pages appear in navigation after login
- Logout clears saved credentials
- Admin pages are accessible via direct URL but hidden from navigation until logged in
