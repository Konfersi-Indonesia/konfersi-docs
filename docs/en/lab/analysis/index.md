---
title: Analyses & charts
description: Every analysis Konfersi Lab produces for a point — time series, statistics, roses, joint distributions, extreme values, tides and cyclones — and how to read, customise, export and explain the charts.
tags: [lab, analysis, chart, statistics, rose, extreme value, return period, gev, pot, tides, cyclones, export]
related: [lab/analysis/data-validation, lab/data, lab/reports-and-documents, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-10-02
---

Once a point is [processed](../points/process-points.md), its analyses are ready to open.

## Open an analysis

- In **Map Explorer → Analysis & Validations**, select **Select Point** (or **Change Point**) and pick a point. Its analyses are listed by variable.
- Or in **Konfersi Lab → Analysis**, which lists **Point analyses** and **Site analyses** for the selected point.

Select an analysis and its chart opens in the **Data Analytics** panel. Use **Previous analysis** and **Next analysis** to step through them. **Konfersi: Open Analysis for Condition…** opens one for **All conditions**, **Cyclonic only** or **Non-cyclonic only**.

An analysis marked **Ready · older analysis** was made by an earlier version of the analysis; process the point again to update it. **Not available at this point** means the variable has no data there.

## Point analyses

For each processed variable (wind, waves, currents, sea surface temperature, salinity, precipitation, air temperature, air pressure):

| Group | Analyses |
|---|---|
| **Time series** | Daily, monthly, annual and seasonal time series; monthly climatology |
| **Statistics** | Overall, monthly and seasonal statistics |
| **Roses** | Wind rose, wave rose, current rose: how often each direction and strength occur |
| **Joint distributions** | Overall and seasonal joint distributions, including wave height against period (Hs–Tm, Hs–Tp) |
| **Extreme values** | Return levels for chosen return periods, with 90% confidence bands, by **Block Maxima (GEV)** or **Peaks Over Threshold (GPD)** |
| **Monsoonal surges** | Surge events linked to the monsoon, where relevant |

Extreme value settings, such as the method and the threshold for Peaks Over Threshold, come from **Project Details → Thresholds**. Use **Fill Suggested Thresholds** for a starting point, then save. If the fit doesn't converge for the data, the chart says so.

## Site analyses

| Analysis | What it shows |
|---|---|
| **Tides** | Predicted tide for a year you choose, tidal levels (mean high and low water springs and neaps, relative to mean sea level) and constituents, from the FES2022 model, compared with the nearest UHSLC tide gauge where available |
| **Tropical cyclones by month** | Storms within a search radius you choose, by month and category, from IBTrACS |
| **Storm audit (500 km)** | Every tropical cyclone that passed within 500 km |

## Extremes along a route

For a pipeline, cable or transit route, run **Konfersi: Analyse Extremes Along the Route…**. It needs at least two observation points, in [route order](../points/manage-points.md#reorder-points). The chart shows the return levels at every point along the route, the worst case, and any points without a result.

## Work with a chart

In the **Data Analytics** panel:

- **Customize chart**: chart type, scales (linear or log), ranges, colours (including a colour-blind safe palette), line width, markers, text size and grid lines. Apply to **This chart** or **All charts**, or **Reset**.
- **Save image** (PNG) and **Save CSV** to use the data elsewhere.
- **Open as JSON** to inspect the full result.

## Explain a chart with AI

Select **Explain** to get a plain-language reading of a point analysis. It uses your project's AI quota.

<scalar-callout type="warning">Explanations are AI-generated. Check them against the data before relying on them. See the [AI & metocean disclaimer](../../legal/ai-and-metocean-disclaimer.md).</scalar-callout>

## Check the data first

Before relying on an analysis, [validate the point's data](data-validation.md).
