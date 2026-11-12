---
title: Analyses & charts
description: Every analysis Konfersi Lab produces for a point — time series, statistics, roses, joint distributions, extreme values, tides and cyclones — and how to read, customise, export and explain the charts.
tags: [lab, analysis, chart, statistics, rose, extreme value, return period, gev, pot, tides, cyclones, export]
related: [lab/analysis/reading-results, lab/analysis/data-validation, lab/data, lab/reports-and-documents, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-10-12
---

Once a point is [processed](../points/process-points.md), its analyses are ready to open. To understand what each one shows, see [Reading the results](reading-results.md).

## Open an analysis

- In **Map Explorer → Analysis & Validations**, select **Select Point** (or **Change Point**) and pick a point. Its analyses are listed by variable.
- Or in **Konfersi Lab → Analysis**, which lists **Point analyses** and **Site analyses** for the selected point.

Select an analysis and its chart opens in the **Data Analytics** panel. Use **Previous analysis** and **Next analysis** to step through them. **Konfersi: Open Analysis for Condition…** opens one for **All conditions**, **Cyclonic only** or **Non-cyclonic only**.

An analysis marked **Ready · older analysis** was made by an earlier version of the analysis; process the point again to update it. **Not available at this point** means the variable has no data there.

## Point analyses

For each processed variable (wind, waves, currents, sea surface height, sea surface temperature, salinity, precipitation, air temperature, air pressure):

| Group | Analyses |
|---|---|
| **Time series** | Daily, monthly and annual time series; monthly climatology (mean, maximum and the P10–P90 band) |
| **Seasonal** | A [box plot per season](reading-results.md#seasonal-box-plot) (DJF, MAM, JJA, SON): quartiles, whiskers, mean and outliers, with the numbers in a table |
| **Statistics** | Overall, monthly and seasonal statistics |
| **Roses** | Wind rose, wave rose, current rose: how often each direction and strength occur |
| **Joint distributions** | Overall and seasonal joint distributions, including wave height against period (Hs–Tm, Hs–Tp). Joint frequency results are shown for **All seasons** and for each season (DJF, MAM, JJA, SON): a rose, an occurrence heatmap by direction and class, a frequency table (%) and statistics by direction |
| **Extreme values** | Return levels up to 1,000 years with 90% confidence bands. **Block maxima** (GEV or Gumbel, the design values) and **Peaks over threshold** (GPD, the cross-check), with the fit's checks and diagnostic plots. **Extreme values by direction** for wind, waves and currents. See [Extreme values](reading-results.md#extreme-values) |
| **Monsoonal surges** | Wind: the December–March days with wind of at least 8 m/s, and a rose of those hours |

For **Water level**, the point analysis is the [tidal datums](reading-results.md#tidal-datums): HAT, MHHW, MHW, MSL, MLW, MLLW, LAT and the others, the tidal ranges and the Formzahl tide type.

The stored extreme values always run both methods and choose the peaks-over-threshold threshold themselves (about 3 storms a year). The thresholds in **Project Details → Thresholds** record your project's criteria for the briefing and the AI assistant; they don't change the stored results. If the fit doesn't converge for the data, the chart says so.

### Tropical cyclones on daily series

The **Daily timeseries** chart for **Wind**, **Wave (total sea)** and **Current** shades the days when a tropical cyclone was within **500 km** of the point, using the IBTrACS record. Each light red band runs from the first to the last day the storm was within that distance, so you can tell storm peaks from ordinary conditions. There's nothing to switch on, and the radius is fixed. If the cyclone record can't be reached, the chart shows without the bands.

To see the storm tracks themselves, use [Cyclone tracks near a point](../map/index.md#cyclone-tracks-near-a-point) on the map.

## Site analyses

| Analysis | What it shows |
|---|---|
| **Tides** | Predicted tide for a year you choose, tidal levels (mean high and low water springs and neaps, relative to mean sea level) and constituents, from the FES2022 model, compared with the nearest UHSLC tide gauge where available. A **Station baseline** table names the tide gauge and the FES2022 model cell, with their positions and distance. When the gauge validates the model: **Observed vs predicted**, the **Residual (observed − predicted)** and a scatter of **Observed against predicted** |
| **Tropical cyclones by month** | Storms within a search radius you choose, by month and category, from IBTrACS, with a **Monthly occurrences by category** table |
| **Storm audit (500 km)** | Every tropical cyclone that passed within 500 km at tropical-storm strength: closest approach, strongest storm, a timeline and a table. See [Storm audit](reading-results.md#storm-audit-500-km) |

## Extremes along a route

For a pipeline, cable or transit route, run **Konfersi: Analyse Extremes Along the Route…**. It needs at least two observation points, in [route order](../points/manage-points.md#reorder-points). The chart shows the return levels at every point along the route, the worst case, and any points without a result.

## Work with a chart

In the **Data Analytics** panel:

- **Customize chart**: chart type, scales (linear or log), ranges, colours (including a colour-blind safe palette), line width, markers, text size and grid lines. Apply to **This chart** or **All charts**, or **Reset**.
- **Save image** (PNG) and **Save CSV** to use the data elsewhere.
- **Export all** saves every chart in the view as a PNG and every table as a CSV, in one `.zip` named after the view.
- **Open as JSON** to inspect the full result.

## Explain a chart with AI

Select **Explain** to have Konfersi Agent read the chart's numbers and explain them in plain language. Nothing runs until you select it. **Explain again** asks for a new explanation.

- Each explanation is one Konfersi Agent turn and uses your project's AI allowance. Before you start, Lab shows how much is left. Afterwards, it shows how many tokens the explanation used. When the allowance is used up, Lab says so and no explanation is made.
- Only a short summary of the numbers is sent, not your whole dataset. The explanation follows your Lab language.
- **The numbers match the report.** Explain reads the same summary of the chart that the [report](../reports-and-documents.md) uses: how many values and over which period, the mean, the standard deviation, the 25th, 50th and 75th percentiles, and the maximum and minimum with their dates. So the figures it quotes are the ones in the report's section for that chart. If that summary can't be loaded, Explain uses the chart's own numbers instead.
- **Both ends of a season.** On a monthly climatology or a seasonal chart, the explanation names the highest **and** the lowest month, for example "Highest: 6.2 m/s (Jan), lowest: 3.48 m/s (Oct)".
- **Only what the chart shows.** The explanation talks about the chart's numbers. It doesn't comment on what the chart leaves out, such as "peak period not given".
- If Konfersi Agent is switched off for your Lab, the button explains that instead.

The same button is on Mission Planning results as **Explain results**. See [Mission Planning](../../using-konfersi/mission-planning.md).

<scalar-callout type="warning">Explanations are AI-generated. Check them against the data before relying on them. See the [AI & metocean disclaimer](../../legal/ai-and-metocean-disclaimer.md).</scalar-callout>

## Check the data first

Before relying on an analysis, [validate the point's data](data-validation.md).
