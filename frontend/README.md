# MaoTek QR order system

Packages:
- next-themes for light/dark mode management
- shadcn for components
- next-intl for i18n
- tailwind for styling
- nextjs for routing


Issues:
- Websockets connections are sent with URL token with the JWT. Future versions should rely on session cookies. (Put JWT in cookies).
- Websockets are immediately opened after JWT validation / refresh. It relies on this; it does not refresh token.