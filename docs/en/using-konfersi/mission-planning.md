---
title: Mission Planning
description: Estimate how long a sequence of marine operations takes once weather is counted, and when to start it, inside Konfersi Lab.
tags: [mission-planning, downtime, operations, metocean, weather-window]
related: [using-konfersi/console-projects, using-konfersi/lab-workspace, using-konfersi/metocean-data-sources, using-konfersi/risk-assessment, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-10-02
---

Mission Planning estimates how weather stretches a marine operation. You describe **where** the work happens and **what limits** the vessel and crew can work in, then the **sequence** of work. Konfersi replays that sequence against decades of hourly metocean data from every possible start date. It then shows how long the operation is likely to take, which months are best, and which limit causes the waiting.

<scalar-callout type="info">Mission Planning is an activity in **Konfersi Lab**. Open your project from the Console, then pick **Mission Planning** in the activity bar on the left.</scalar-callout>

## Where things are

| Place | What it holds |
|---|---|
| **Activity bar › Mission Planning** (left) | The plan as a tree: environments, operations › trips › tasks › activities with their hours, problems, and past **runs** |
| **Mission Planning tab** (main area) | **Setup** (environments and run settings) · **Sequence** (operations, timeline, tasks table) · **Results** · **Report** |
| **Control › Mission Planning** (right side bar) | Plan status, the **Run** button and why it may be disabled, data readiness, CPU hours left, and an inspector for the tree item you selected |
| **Project Map** | Environments that have a location appear as purple site badges |

Everything saves automatically. If a teammate saves the same plan while you edit it, you are asked to **Reload theirs**, **Compare**, or **Overwrite with mine**, so nobody's work disappears.

## 1. Set up environments

An **environment** is a set of operability limits at a location, for example *Port*, *Transit* or *Field*. Activities are only worked while every limit that is switched on holds.

1. In **Setup**, add environments one by one, or use **Create from observation points** to get one per point in your project. You can also **Start from a template** or **Import from CSV**.
2. For each environment choose a **location**: an observation point, custom coordinates, or none. With none, the selected map point is used when you run.
3. Switch on the limits that matter and set their values:

| Limit | Meaning |
|---|---|
| Wave height (Hs), Wave period (Tp) | Upper limits, in m and s |
| Wind speed, Current speed | Upper limits, in m/s |
| Wave / wind / current direction | The sector that is workable, clockwise from north (for example 300°–60°). A small compass shows the sector. |
| Wind height | The height the wind limit applies at (for example a crane tip at 100 m). The 10 m wind is scaled with the 1/7 power law. |
| Working hours | Hours per day work is allowed, centred on local noon (24 = round the clock). |

The **Data** column shows whether wind, wave and current data are acquired at each environment's location. If something is missing, select **Acquire** to start it from the matching observation point.

## 2. Build the sequence

In **Sequence** (or directly in the tree), build **operations › trips › tasks › activities**:

- **Trip repetition**: how many times a trip is done. Turn on *Repeat as one continuous campaign* when all repetitions must happen back to back.
- **Activity**: its environment, duration (hours) and contingency (% added to the duration). Turn on *Must run without interruption* when the activity needs one unbroken weather window.
- In the tree you can **drag** items to reorder them or move them to another parent, **duplicate** them, and **add inside**.

Below the editor, the **baseline timeline** shows the whole sequence end to end in perfect weather, coloured by environment. The **tasks table** shows each activity's full calculation, for example `3x [12 + (1.2)] = 39.6H`.

## 3. Run

Select **Run planning** in the tab or in Control. Run is disabled, with the reason shown, when:

- the plan has errors (listed under **Plan problems**; select one to jump to it),
- an environment has no data at its location yet,
- the project has no CPU hours left, or is on the Free plan.

Runs use the project's CPU hours, charged for the time each run takes; the hours left update when a run finishes. Running a plan again with nothing changed (same plan, same data, same planning version) shows the earlier result straight away at no cost; choose **Run again anyway** to compute it once more. Editing the plan, viewing results, exporting and the report are always available.

**Run settings**:

- **Weather-window persistence**: how many hours of continuous workable weather an activity needs before it can start (default 24).
- **Advanced › Weather condition**: all weather (default), cyclone periods only, or outside cyclone periods.
- **Advanced › Downtime estimate**: *Mean (expected)* by default. *Conservative, 1-in-N* raises each downtime value to its upper confidence bound at 1 − 1/N. Use it for cautious planning; it is labelled on every result.

## 4. Read the results

- **Data basis**: the hourly period every environment has data for (for example 2007–2025, 18.5 years). With fewer than 10 years, a warning says the between-years spread and best start dates are uncertain.
- **Whole mission**: P10, P50, P80 and P90 duration in days (for example, P50 means half of all start dates finish within it), plus the minimum duration in perfect weather.
- **Best start dates** and the best and worst months to start.
- **Heatmaps** for the whole mission, each trip, each task, and each environment's downtime. Choose the statistic (mean, P50, P80), the variability (*within months* or *between years*) and the period (daily, weekly, half-monthly). *Within months* pools every start on that calendar day across all years; *between years* first averages each year's starts, then shows how those yearly figures spread, so it tells you how much one year can differ from another. Weekly (days 1–7, 8–14, 15–21, 22–28, 29–31) and half-monthly (1–15, 16–31) values are the average of the daily values in those days. **Show as table** gives the same numbers as a table.
- **What causes the downtime**: per environment, the share of blocked hours in which each limit was exceeded.
- **Compare with** another run to see a difference heatmap. Blue means this run is better, red means worse.
- **Export CSV** or **Export PNG** for any heatmap.

Results stay available after you close Lab. Past runs, yours and your teammates', are under **Runs** in the tree. Each project keeps the full results (heatmaps) of its newest 50 runs; older runs keep their summary, and you can run the plan again to see their heatmaps. A banner tells you when the plan has changed since the results were computed.

## 5. Report

**Report** shows a summary of the run you are viewing, rendered on screen. You can view the Markdown source, **Copy** it, or **Download .md**. An option to explain results with AI is planned; the planning itself does not use AI.

## Templates and CSV

- **New Plan from Template…** starts from a worked example: an offshore wind turbine installation by jack-up vessel (2 turbines), with port, transit, loading, installation and jacking environments.
- **Export Plan as CSV** saves two files: `environments.csv` (one row per environment) and `sequence.csv` (one row per activity). Edit them in a spreadsheet, then **Import Plan from CSV…**. Comma or semicolon separators and decimal commas are both accepted. You see a summary and any problems before anything changes, and an import can be undone.

## Methods and data

The approach follows industry practice such as DNV-GL RP C205, with guidance from bodies like ISO, WMO and IMO. The metocean data are described in [Metocean data sources](metocean-data-sources.md).

<scalar-callout type="warning">Mission Planning results support planning. They are not a certified, site-specific study and do not replace professional judgement or your own safety procedures. Read the [AI & metocean disclaimer](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>

## Get help

- Questions about access or CPU hours: [contact support](../support/contact-support.md).
- Lab orientation: [Lab workspace](lab-workspace.md).
