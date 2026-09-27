---
title: Mission Planning
description: Estimate weather-related downtime for an offshore or coastal operation at a location and period, inside a Konfersi project.
tags: [mission-planning, downtime, operations, metocean]
related: [using-konfersi/console-projects, using-konfersi/metocean-data-sources, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-09-27
---

Mission Planning helps you understand how often metocean conditions are likely to stop an operation. You set a location, a period and, if you want, the trips and tasks the operation involves. Mission Planning then estimates the expected downtime and summarises it in a report.

<scalar-callout type="info">Mission Planning is rolling out from the end of October 2026, following an internal trial. It is the first Konfersi analysis module released to customers. The details on this page may change before and during the rollout.</scalar-callout>

## How it works

Mission Planning runs inside a Console project, so first you need a project. See [Console & projects](console-projects.md).

The workflow has four parts:

1. **Set the analysis context.** Choose the location and the period you want to analyse. Optionally, break the operation down into trips and tasks.
2. **Run the analysis.**
3. **Review the downtime.** Results are shown as tables and charts at several levels:
   - environmental downtime
   - downtime per trip
   - downtime per task
   - overall downtime
4. **Get the report.** Mission Planning produces a report of the analysis.

## Plans and exports

What you can export may depend on your project's plan and on whether the project is on a trial. Check the project's plan in the Console, and see [Plans & pricing](../billing/plans-and-pricing.md).

## Methods and data

The approach is informed by industry practice, such as DNV-GL RP C205 and guidance from bodies like ISO, WMO and IMO. The underlying metocean data are described in [Metocean data sources](metocean-data-sources.md).

<scalar-callout type="warning">Mission Planning results support planning. They are not a certified, site-specific study and do not replace professional judgement or your own safety procedures. Read the [AI & metocean disclaimer](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>

## Get help

- Questions about the rollout or access: [contact support](../support/contact-support.md).
- Need a full site-specific study? Konfersi's consulting team can help. See [What is Konfersi?](../getting-started/what-is-konfersi.md).
