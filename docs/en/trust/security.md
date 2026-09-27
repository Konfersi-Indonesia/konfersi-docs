---
title: Security
description: How Konfersi protects your account, sessions, project data and payments, and how to report a security vulnerability.
tags: [security, trust, authentication, encryption, disclosure]
related: [legal/privacy, support/contact-support, getting-started/sign-in, billing/payments]
status: published
updated: 2026-09-27
---

This page describes the security measures built into the Konfersi platform today (Accounts, Console, Lab and the API behind them) and explains how to report a vulnerability. For how we handle personal data, see the [Privacy Policy](../legal/privacy.md).

## Infrastructure and encryption

- **Cloudflare hosting.** The Konfersi API runs on Cloudflare Workers. Application data is stored in Cloudflare D1 databases, and files in Cloudflare R2 object storage.
- **Encryption in transit.** All Konfersi sites and the API are served only over HTTPS (TLS).
- **Encryption at rest.** Cloudflare encrypts data stored in D1 and R2 at rest.
- **Separate environments.** Customer data lives only in production. Our internal test environments are separate, and they aren't customer environments.

## Signing in

All Konfersi apps use one central sign-in at accounts.konfersi.com. See [Sign in](../getting-started/sign-in.md).

- **Passwords are never stored in plain text.** They are hashed with PBKDF2-SHA-256, using a unique random salt per password and 100,000 iterations.
- **Social sign-in** uses standard OAuth 2.0 / OpenID Connect with providers such as Google, GitHub and Microsoft, where enabled. Each sign-in attempt carries a one-time state value that protects against cross-site request forgery during the redirect.
- **Password reset** uses a link sent to your registered email address. Each reset link works only once and expires, and Konfersi stores only a hash of it. **Email verification** confirms that you own the address you sign up with.

## Sessions

- **Signed tokens.** Once you sign in, your session is represented by an access token signed with RS256, an asymmetric algorithm. The API verifies the signature, issuer and token type on every request.
- **Short-lived access.** Access tokens expire after 15 minutes. A separate refresh token keeps you signed in for up to 30 days.
- **Refresh token rotation.** Every refresh token can be used only once. Each refresh revokes it and issues a new one. Konfersi stores only a hash of each refresh token, never the token itself.
- **Protected cookies.** On production, the session and refresh cookies are set with `HttpOnly` (not readable by page scripts), `Secure` (sent only over HTTPS) and `SameSite=Lax`.
- **Signing out** clears your session cookies.

## Access control

- **Your projects are private by default.** Only a project's owner and the collaborators they invite can see it. Only the owner can invite or remove collaborators. See [Console & projects](../using-konfersi/console-projects.md).
- **Konfersi staff access** to internal tools requires a separate single sign-on through our identity provider (Authentik, using OpenID Connect) and a separate staff session. Staff permissions are granted through a role-based permission system with groups, page-level and workspace-level access, and create/read/update/delete rights.

## Payments

- Payments are handled by **Midtrans**, our payment gateway. You enter card details with Midtrans, not with Konfersi. Konfersi stores only a Midtrans card token and a masked card number, never your full card number.
- Every payment notification from Midtrans carries a cryptographic signature. Konfersi verifies it before updating an order, so forged payment confirmations are rejected.

See [Payments](../billing/payments.md) for more.

## Monitoring and logging

- Every API request gets a unique **request ID**, which is returned in the response headers and included in error responses. If you contact support about an error, including this ID helps us trace the exact request.
- The API writes structured logs of requests and responses, including method, path, status and duration. We use them to investigate incidents and support requests.

## Reporting a vulnerability

We welcome reports from security researchers and users. If you believe you've found a vulnerability in any Konfersi service:

1. **Email [support@konfersi.com](mailto:support@konfersi.com) with the subject line "Security".**
2. Include:
   - the affected site or API (for example app.konfersi.com)
   - a description of the issue and its potential impact
   - clear steps to reproduce it, with screenshots or a proof of concept if you can
   - how we can contact you for follow-up
3. Please give us reasonable time to investigate and fix the issue before you disclose it publicly.

While testing, please:

- only use accounts and data that belong to you
- don't access, change or delete other users' data
- don't degrade the service (no denial-of-service or high-volume automated testing)
- don't use social engineering or phishing against Konfersi staff or users
- don't share the details publicly, including on Discord, until we've confirmed a fix

We'll acknowledge your report, keep you updated as we investigate, and let you know when it's resolved. Testing must also respect our [Acceptable Use Policy](../legal/acceptable-use.md).

## Your part in keeping your account secure

- Use a strong, unique password, or sign in with a social account you protect with two-factor authentication.
- Never share your password, session tokens or API credentials, including with anyone claiming to be Konfersi staff. We will never ask for your password.
- Sign out on shared computers.
- Tell us straight away at [support@konfersi.com](mailto:support@konfersi.com) if you notice activity on your account that you don't recognise.
