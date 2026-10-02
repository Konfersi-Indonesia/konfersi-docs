---
title: Mission Planning
description: Estimate weather-related downtime for an offshore or coastal operation at a location and period, inside Konfersi Lab.
tags: [mission-planning, downtime, operations, metocean]
related: [using-konfersi/console-projects, using-konfersi/lab-workspace, using-konfersi/metocean-data-sources, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-10-01
---

Mission Planning helps you understand how often metocean conditions are likely to stop an operation. You work in **Konfersi Lab** (Mission Planning activity): set environments and the operations sequence, run a weather-window simulation at a selected point, then review downtime heatmaps and an enriched markdown report.

<scalar-callout type="info">Mission Planning runs in Konfersi Lab on the product backend (`/v1/metocean/planning/*`). Open the project in Lab, then choose the Mission Planning activity.</scalar-callout>

## How it works

1. Open the project in Konfersi Lab.
2. Select an observation point that already has acquired wind / wave / current data.
3. In Mission Planning **Config**, set condition, return period, environments (limits), and operations (Advanced JSON for the full hierarchy). Save.
4. **Run planning**. Results show environmental downtime heatmaps plus trip / task / overall tables.
5. Open the **Report** tab for customizable enriched markdown (copy or download). Optional AI refinement of the report is later — the core simulation is not AI.

## Plans and exports

What you can export may depend on your project's plan. Check the plan in the Console.

## Methods and data

The approach is informed by industry practice, such as DNV-GL RP C205 and guidance from bodies like ISO, WMO and IMO. The underlying metocean data are described in [Metocean data sources](metocean-data-sources.md).

<scalar-callout type="warning">Mission Planning results support planning. They are not a certified, site-specific study and do not replace professional judgement or your own safety procedures. Read the [AI & metocean disclaimer](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>

## Get help

- Questions about access: [contact support](../support/contact-support.md).
- Lab orientation: [Lab workspace](lab-workspace.md).
