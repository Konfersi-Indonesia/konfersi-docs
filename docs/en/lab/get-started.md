---
title: Get started with Lab
description: What Konfersi Lab is, what you need to use it, how to open a project, and a tour of the workspace.
tags: [lab, get started, workspace, browser, vs code, antigravity, quotas]
related: [using-konfersi/lab-workspace, lab/desktop, lab/points, lab/troubleshooting]
status: published
updated: 2026-10-09
---

Konfersi Lab is the metocean workbench for one project at a time. In Lab you place observation points on a map, process them to download and analyse metocean data, read the results as charts, check data quality, plan operations and produce reports.

Lab runs in two places, with the same features:

- **In your browser** at [lab.konfersi.com](https://lab.konfersi.com). Nothing to install.
- **In a desktop editor**, VS Code or Antigravity, through the Konfersi Lab extension. See [Desktop editors](desktop/index.md).

## What you need

- A Konfersi account. See [Create an account](../getting-started/create-account.md).
- A project on a paid plan. Projects on the Free plan show **Upgrade plan to access Lab** in the Console. See [Plans & pricing](../billing/plans-and-pricing.md).
- To be the project's owner, an invited assistant, or a member of an organization the project is shared with. See [Shared projects](../using-konfersi/organizations/shared-projects-and-courses.md).

## Open a project

1. In the [Console](../using-konfersi/console-projects.md), go to **Lab Project → My Projects**.
2. Open the project, then under **Open this project** choose:
   - **Konfersi Lab** to open it in the browser, in this tab or a new one, or
   - **VSCode** or **Antigravity** to open it in your desktop editor (the extension must be installed first).

You can also double-click a project in the list to open it in Lab. Lab uses the same sign-in as the Console.

## Find your way around

Lab looks like a code editor. Its parts are:

| Where | What's there |
|---|---|
| Activity bar → **Konfersi Lab** | **Project** (who you are, the plan and quota usage), **Points**, **Data**, **Analysis**, **Validation**, **Planning & Risk**, **Reports** and **Documentation** |
| Activity bar → **Map Explorer** | **Observation Points**, **Project Boundaries**, and **Analysis & Validations** for the selected point. Opens the **Project Map** |
| Activity bar → **Mission Planning** | Operations, weather-window runs and results. See [Mission Planning](../using-konfersi/mission-planning.md) |
| Panel → **Data Analytics** | The **Chart** of the analysis you opened |
| Panel → **Processes** | Every processing run, with its live progress |
| Panel → **Logs** | Detailed log lines from processing, which you can filter |
| Secondary side bar → **Control** | Map controls: basemap, overlays and their order, while the map is open |
| Status bar | The current project (select it for a menu) and the map pointer's coordinates |

Every action is also a command. Open the Command Palette (**Ctrl+Shift+P**, or **Cmd+Shift+P** on Mac) and type **Konfersi** to see them all.

Each section has a **?** (**Help**) button that opens the matching page of these docs inside Lab.

![Konfersi Lab with a project open: the project card, tools and recent activity](../../../assets/screenshots/en/lab-home.png)

## Your first analysis, step by step

1. [Add an observation point](points/index.md): click the map, type coordinates, or import a file.
2. [Process the point](points/process-points.md) to download and analyse its metocean data.
3. When it's processed, open an analysis from **Analysis & Validations** or **Analysis**. The chart appears in **Data Analytics**. See [Analyses & charts](analysis/index.md).
4. [Run data validation](analysis/data-validation.md) to check the data's quality.
5. Use the results in [Mission Planning](../using-konfersi/mission-planning.md) and [reports](reports-and-documents.md).

## Quotas

Your project's plan and add-ons set quotas. Lab shows usage under **Konfersi Lab → Project**:

| Quota | What uses it |
|---|---|
| Points | Each observation point in the project. Adding points past the limit fails |
| Compute | Time spent processing points and running planning |
| Storage | Data downloaded for the project's points |
| AI | AI features: **Explain** on a chart, synthesizing report sections and AI-written report text |

When a quota is used up, the action that needs it stops with a message. Buy an add-on or upgrade the plan in the Console. See [Plans & pricing](../billing/plans-and-pricing.md).

<scalar-callout type="warning">Lab results support engineering and planning decisions. They are not a certified, site-specific study. Read the [AI & metocean disclaimer](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>
