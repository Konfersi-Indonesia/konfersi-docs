---
title: Lab workspace
description: Open a Konfersi project in Lab, the metocean workbench, in your browser or in VS Code and Antigravity, and find the Lab guides.
tags: [lab, workspace, vs-code, antigravity, extension]
related: [lab/get-started, lab/desktop, using-konfersi/console-projects, using-konfersi/metocean-data-sources]
status: published
updated: 2026-10-02
---

Lab is the metocean workbench for the project you have open. You manage projects in the Console and do the hands-on work in Lab: place observation points, process them to download and analyse metocean data, read the charts, validate the data, plan operations and generate reports.

Lab runs in your browser at [lab.konfersi.com](https://lab.konfersi.com), and in VS Code or Antigravity through the **Konfersi Lab** extension.

## Before you start

- You need a Konfersi account. See [Create an account](../getting-started/create-account.md).
- You need a project on a paid plan. On the Free plan, the Console shows **Upgrade plan to access Lab** instead of opening Lab. See [Plans & pricing](../billing/plans-and-pricing.md).
- You need to be the project's owner, an invited assistant, or a member of an organization the project is shared with.

## Open a project in Lab

1. Sign in to the Console at [app.konfersi.com](https://app.konfersi.com).
2. Go to **Lab Project → My Projects**.
3. Double-click the project, or open it and choose under **Open this project**:
   - **Konfersi Lab**, in this tab or a new one, to use Lab in the browser.
   - **VSCode** or **Antigravity** to use it in your desktop editor. Install the extension first with **Lab extension**; see [Install the extension](../lab/desktop/install-the-extension.md).

In the browser, Lab opens at an address ending in `/project/` followed by the project slug, and uses the same sign-in as the Console. If you go to [lab.konfersi.com](https://lab.konfersi.com) without a project in the address, you're taken to **My Projects** in the Console.

<scalar-callout type="info">Projects are created, shared and upgraded in the Console, not in Lab. Lab works on one project at a time.</scalar-callout>

## Find your way around Lab

Select the **Konfersi Lab** icon in the activity bar for the **Project**, **Points**, **Data**, **Analysis**, **Validation**, **Planning & Risk**, **Reports** and **Documentation** views. **Map Explorer** holds the map, observation points and boundaries; **Mission Planning** has its own activity. Charts open in the **Data Analytics** panel, and processing shows in **Processes** and **Logs**. Every action is also a **Konfersi** command in the Command Palette. For a full tour, see [Get started with Lab](../lab/get-started.md#find-your-way-around).

## Lab guides

| Guide | Covers |
|---|---|
| [Get started with Lab](../lab/get-started.md) | The workspace layout, your first analysis and quotas |
| [Desktop editors](../lab/desktop/index.md) | Installing, signing in and updating the extension in VS Code and Antigravity |
| [Observation points](../lab/points/index.md) | Adding, importing, managing and processing points |
| [Map & layers](../lab/map/index.md) | Basemaps, climatology, live forecast, shipping and reference overlays, and project boundaries |
| [How data is processed](../lab/data/index.md) | The processing pipeline, variables and sources, and NetCDF downloads |
| [Analyses & charts](../lab/analysis/index.md) | Every analysis, charts, AI explanations and data validation |
| [Reports & project documents](../lab/reports-and-documents.md) | Project details, planning and risk documents, and the Word report |
| [Mission Planning](mission-planning.md) | Weather-window and downtime planning |
| [Troubleshooting](../lab/troubleshooting.md) and [Lab FAQ](../lab/faq.md) | Error messages and common questions |
