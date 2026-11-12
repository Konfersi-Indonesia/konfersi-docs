---
title: Install the extension
description: Download the Konfersi Lab extension from the Console and install it in VS Code or Antigravity.
tags: [lab, install, vsix, vs code, antigravity, extension]
related: [lab/desktop, lab/desktop/sign-in-and-updates, lab/troubleshooting]
status: published
updated: 2026-10-02
---

The Konfersi Lab extension isn't on an extension marketplace. You download it once from the Console and install it from the file. After that it keeps itself up to date.

## 1. Download the extension file

1. In the Console, go to **Lab Project → My Projects** and open a project.
2. Select **Lab extension**.
3. The dialog shows the latest version, its size and release date. Select **Download extension**.

You get a file named like `konfersi-lab-plugin-<version>.vsix`.

## 2. Install it

### VS Code

1. Open the **Extensions** view (**Ctrl+Shift+X**, or **Cmd+Shift+X** on Mac).
2. Open the **⋯** menu at the top of the view and choose **Install from VSIX…**.
3. Pick the file you downloaded.

Or, in a terminal:

```bash
code --install-extension konfersi-lab-plugin-<version>.vsix
```

### Antigravity

1. Open the **Extensions** view.
2. Open the **⋯** menu and choose **Install from VSIX…**.
3. Pick the file you downloaded.

Once installed, a **Konfersi Lab** icon appears in the activity bar, with **Map Explorer** and **Mission Planning** next to it.

## 3. Open your project

Go back to the project in the Console and select **VSCode** or **Antigravity** under **Open this project**. Your browser asks to open the editor; allow it. The editor signs you in if needed and opens the project. See [Sign in & updates](sign-in-and-updates.md).

## Requirements

- VS Code 1.90 or later, or a current Antigravity.
- An internet connection: all data and processing live on Konfersi's servers. The extension doesn't need Python, a GPU or any local data.

## Uninstall

In the **Extensions** view, find **Konfersi Lab**, open its menu and choose **Uninstall**. Your projects, points and results stay in your Konfersi account. To also revoke the editor's access, disconnect it under [Connected devices](../../account/security/connected-devices.md).
