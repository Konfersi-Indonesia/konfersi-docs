---
title: Sign in & updates
description: Sign the desktop extension in to your Konfersi account, switch projects, keep the extension up to date and adjust its settings.
tags: [lab, sign in, device, update, settings, vs code, antigravity]
related: [lab/desktop, lab/desktop/install-the-extension, account/security/connected-devices]
status: published
updated: 2026-10-02
---

## Sign in

The extension signs in through your browser, so your password never goes into the editor.

1. Select **Sign In** in the **Konfersi Lab** view, or run **Konfersi: Sign In** from the Command Palette. Opening a project from the Console starts this for you.
2. Your browser opens Konfersi Accounts. Sign in if you're asked to.
3. On **Sign in to Konfersi Lab**, check the email address and select **Approve device**.
4. When you see **Device signed in**, go back to the editor. Sign-in finishes on its own.

<scalar-callout type="warning">Only approve a device sign-in that you started yourself. If you didn't start it, close the tab without approving.</scalar-callout>

The editor now appears under [Connected devices](../../account/security/connected-devices.md). If you disconnect it there, the editor shows **This editor was disconnected from your Konfersi account. Sign in again to continue.**

To sign out, open the account menu in the **Project** view (**Konfersi: Account Actions…**) and choose **Sign Out**.

## Open and switch projects

- From the Console: open the project and select **VSCode** or **Antigravity**. If the project is already open, Lab shows its **Project Details**.
- In the editor: run **Konfersi: Switch Project…** (or select the project in the status bar) and pick one. Projects on the Free plan are listed as **Free plan — no Lab**; upgrade them in the Console first.

Lab works on one project at a time per editor window.

## Updates

The extension checks for a new release when the editor starts and every few hours. When one is installed you see **Konfersi Lab … is installed. Reload to use it.** Select **Reload**.

To check now, run **Konfersi: Check for Konfersi Lab Updates**. Each download is checked against the release's size and checksum before it's installed.

## Settings

Open **Settings** and search for **Konfersi**:

| Setting | What it does |
|---|---|
| **Konfersi › Lab: Auto Update** | Keep the extension up to date automatically. Turn it off to update only when you run the update command |
| **Konfersi › Live Forecast: Direct** | Fetch live forecast map overlays from Open-Meteo directly from your computer, on its own free allowance, using the Konfersi server only when that runs out. See [Map & layers](../map/index.md#live-forecast) |

The other Konfersi settings (server addresses and basemaps) are set by Konfersi; you don't need to change them.

## Problems signing in

- **"Login link expired or already used"** or **"Login timed out"**: run **Konfersi: Sign In** again and approve the new request promptly.
- **"Your Konfersi session expired. Sign in again to continue."**: select **Sign In**.
- The browser didn't open: cancel the **Sign in to Konfersi** notification, check that your computer has a default browser set, and run **Konfersi: Sign In** again.

More in [Troubleshooting](../troubleshooting.md).
