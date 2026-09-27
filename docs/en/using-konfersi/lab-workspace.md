---
title: Lab workspace
description: Open a Konfersi project in Lab, the browser-based metocean workbench, or use the Konfersi Lab extension in desktop VS Code.
tags: [lab, workspace, vs-code, extension]
related: [using-konfersi/console-projects, getting-started/sign-in, billing/plans-and-pricing]
status: published
updated: 2026-09-27
---

Lab is the metocean workbench for the project you have open. It runs in your browser at [lab.konfersi.com](https://lab.konfersi.com) with a familiar code-editor interface. It also connects to desktop VS Code through the **Konfersi Lab** extension. You manage projects in the Console and do the hands-on work in Lab.

## Before you start

- You need a Konfersi account. See [Create an account](../getting-started/create-account.md).
- You need a project on a paid plan. On the free trial plan, the Console shows **Upgrade plan to access Lab** instead of opening Lab. See [Plans & pricing](../billing/plans-and-pricing.md).
- You need to be the project's owner or an invited assistant.

## Open a project in Lab

1. Sign in to the Console at [app.konfersi.com](https://app.konfersi.com).
2. Go to **Projects Management**.
3. Open Lab in one of these ways:
   - Double-click the project.
   - Open the project's menu and choose **Lab Platform**.
   - Open the project and select **Lab Platform** under **Quick Access Lab Platform**.

Lab opens in a new tab at an address ending in `/project/` followed by the project slug. You stay signed in, because Lab uses the same session as the Console. If your session has expired, you're asked to sign in and then brought back.

### Opening Lab without a project

If you go to [lab.konfersi.com](https://lab.konfersi.com) directly, you'll see **Select a project to open Lab**. Enter a **Project slug** and select **Open in Lab**, or select **Browse in Console** to pick a project from your list. You can find the slug on the project's detail page in the Console.

## Find your way around Lab

Lab opens with a dark editor theme and a side activity bar. Select the **Konfersi Lab** icon in the activity bar to open the **Workspace** panel. The panel has three sections:

- **Account**: who you're signed in as, and your role in this project.
- **Project**: the project name, slug and plan, with quota bars for AI usage, storage and compute.
- **Console**: **Browse projects in Console**, **Open Console** and **Open project in Console**.

The status bar shows the current project too. Hover over it to see quota usage and shortcuts back to the Console.

<scalar-callout type="info">Projects are created, shared and upgraded in the Console, not in Lab. Lab always works on one project at a time. To switch projects, open another one from the Console.</scalar-callout>

## Use the Konfersi Lab extension in desktop VS Code

The same **Konfersi Lab** extension that powers the browser workbench can run in desktop VS Code. Once it's installed, sign in like this:

1. Open the Command Palette and run **Konfersi Lab: Sign In**.
2. VS Code opens a browser tab at Accounts. Sign in if you're asked to.
3. On **Sign in to Konfersi Lab**, check the email address and select **Approve device**.
4. When you see **Device signed in**, return to VS Code. The sign-in completes on its own.

Other commands you can run from the Command Palette:

- **Konfersi Lab: Account**: open the Console, browse projects, or sign out.
- **Konfersi Lab: Open Console**
- **Konfersi Lab: Browse Projects in Console**
- **Konfersi Lab: Sign Out**

<scalar-callout type="warning">Only approve a device sign-in that you started yourself. If you didn't start it, close the tab and don't approve it.</scalar-callout>

## Troubleshooting

**"Project … was not found or you do not have access."**
Check the slug. Make sure you're signed in with the account that owns the project or was invited to it. Then open the project from the Console.

**"Failed to load Konfersi Lab."**
Select **Retry**. If the problem continues, check your connection and [contact support](../support/contact-support.md).

**"Login link expired or already used."** or **"Login timed out."** in VS Code
Run **Konfersi Lab: Sign In** again and approve the new request promptly.

**The Lab button in the Console is disabled.**
The project is on the free trial plan, or its plan has expired. See [Console & projects](console-projects.md).
