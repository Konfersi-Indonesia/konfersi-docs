---
title: Reading the results
description: How Lab processes a point and how to read each analysis, from statistics, seasonal boxes and roses to extreme values, tidal datums and the storm audit.
tags: [lab, analysis, statistics, box plot, rose, wind sea, swell, joint distribution, extreme value, eva, directional, return period, tidal datums, formzahl, total water level, storm audit, cyclones, quality control]
related: [lab/analysis, lab/data/variables-and-sources, lab/analysis/data-validation, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-10-21
---

When you [process a point](../points/process-points.md), Lab downloads each variable's record for it, checks its quality and runs a set of analyses on it. This page explains how to read each analysis. Where each variable comes from, and its record and resolution, is in [Variables & sources](../data/variables-and-sources.md); how to open and export charts is in [Analyses & charts](index.md).

## How a point is processed

- **The nearest sea cell.** Each dataset is a grid. Results are read from the grid cell nearest your point that has sea data. The distance to that cell is part of the quality check: over 30 km is a warning, over 75 km fails.
- **Quality control.** Every record is checked for values outside physical limits, values that stay flat for too long, isolated one-step spikes, gaps and completeness (a warning below 99 %, a failure below 90 %). For waves, isolated spikes are removed before analysis, because the wave reanalysis has known one-step artefacts that would otherwise become the record or the extreme tail.
- **Three conditions.** Each analysis is available for **All conditions**, **Cyclonic only** and **Non-cyclonic only**. The cyclonic periods are the dates a tropical cyclone (from the IBTrACS record) was within 500 km of the point, plus 2 days on each side. If no cyclone came that close, *Cyclonic only* is empty and *Non-cyclonic only* is the whole record. Water level has no cyclonic split.
- **Analysis version.** Results carry the version of the analysis pipeline that made them. When the methods change, the Lab processes a point again the next time you use it.

## Caveats that change how you read a result

Some variables come with a caveat, shown with every result. They're listed with each variable in [Variables & sources](../data/variables-and-sources.md#read-the-caveats). The ones that most change how you read a number:

- **Current** is the residual (non-tidal) current: tidal currents are not included.
- **Water level** is the astronomical tide only: no seasonal mean-sea-level cycle or storm surge.
- **Total water level** adds the daily non-tidal sea level to the tide, but not short storm surge or wave set-up: it isn't a design storm-tide level.
- **Precipitation, air temperature and air pressure** cover 1993 to 2025. If the provider refuses or fails that request, Lab asks one time for 2015 to 2025 instead, and the extreme values from that shorter record are flagged as low confidence.

## Timeseries and statistics

- **Daily, Monthly and Annual timeseries**: the record at those intervals.
- **Monthly climatology**: for each calendar month, the mean, the maximum and the band between the 10th and 90th percentiles (P10–P90), so you can see the typical range as well as the average.
- **Overall, Monthly and Seasonal statistics**: tables of the record's statistics for the whole record, per calendar month and per season. **Statistics (all)** shows the three tables together.

![Monthly climatology of wind at the QA Java Sea point: monthly mean, maximum and the P10–P90 band](../../../../assets/screenshots/en/lab-analysis-climatology.png)

*Monthly climatology: wind at a Java Sea point.*

## Seasonal box plot

The seasonal view shows one box per season (DJF December–February, MAM March–May, JJA June–August, SON September–November):

- the box runs from the first quartile (Q1) to the third (Q3), with a line at the median;
- ◆ is the mean;
- the whiskers reach the furthest values within 1.5 × the box height (the interquartile range, the Tukey rule);
- dots beyond the whiskers are outliers. A long record has thousands, so only the 50 most extreme on each side are drawn, and the hover gives the full count.

The statistics are exact on the whole record. Precipitation boxes use daily totals (mm/day); other variables use every sample. Hover a box for all its numbers, or read them in the table below the chart.

![Seasonal box plot of significant wave height at the QA Java Sea point, with the seasonal statistics table](../../../../assets/screenshots/en/lab-analysis-seasonal-box.png)

*Seasonal box plot: significant wave height, with the numbers in the table below.*

## Roses and joint distributions

- **Wind rose, Wave rose, Current rose**: how often the variable comes from (wind, waves) or flows towards (currents) each direction, split by speed or height class. This is the usual oceanographic convention. For wind, speeds below 0.5 m/s are calm: they have no meaningful direction and are shown as a separate share, so the sectors and calm add up to 100 %.
- **Wave (wind sea) and Wave (swell) roses**: the same rose for each wave partition, from its own height and direction. A partition below 0.05 m is calm, outside the sectors: wind sea is often absent in calm seasons, so its calm share can be large (about half the time at a Java Sea point).
- **Joint distribution (overall, seasonal)**: the frequency table of direction against speed or height class, beside its rose, with the directional statistics (mean, P50, P75, P95, P99, maximum) for each sector. The seasonal version gives one set per season.
- **Joint distribution Hs–Tm and Hs–Tp** (waves): how often each combination of significant wave height (Hs) and wave period occurs. The Hs–Tp view also draws **environmental contours** (IFORM) for return periods from 1 to 1,000 years. They are nominal (no inflation factor) and consistent with the extreme-value fit, and very steep sea states are limited to a steepness of 1/15. The contours use the hindcast wave heights before the altimetry calibration; the calibrated levels are in the extreme-value results.
- **Monsoonal surges** (wind): the days from December to March with wind of at least 8 m/s, with a rose of those hours. It shows how often and from where strong monsoon winds blow.

![Wind rose at the QA Java Sea point by speed class](../../../../assets/screenshots/en/lab-analysis-windrose.png)

*Wind rose: how often wind comes from each direction, by speed class.*

![Overall joint distribution of wind: direction against speed class, with the rose and directional statistics](../../../../assets/screenshots/en/lab-analysis-joint.png)

*Joint distribution: the frequency table beside its rose, and the statistics per direction.*

![Hs–Tp joint distribution with IFORM environmental contours from 1 to 1,000 years and the steepness limit](../../../../assets/screenshots/en/lab-analysis-hs-tp.png)

*Hs–Tp joint distribution with the environmental contours and the 1/15 steepness limit.*

## Extreme values

Extreme-value analysis (EVA) estimates the level a variable reaches once in a given return period, for example the 100-year wind speed. Konfersi follows the method standard DNV-RP-C205 / ISO 19901-1, and reports return periods up to 1,000 years with a 90 % confidence interval.

- **Block maxima (the design values).** The highest value of each full year (a year counts when it holds at least 80 % of its samples; at least 10 such years are needed) is fitted with a GEV and a Gumbel distribution. The one with the smallest Anderson–Darling statistic (A²) is reported, with the Q-Q error breaking a tie. A GEV only replaces the simpler Gumbel when its extra shape parameter is statistically significant (a likelihood-ratio test at p < 0.05), and with fewer than 20 annual maxima only when that shape stays within ±0.5.
- **Peaks over threshold (the cross-check).** Independent storm peaks above a threshold are fitted with a generalised Pareto distribution. The threshold is chosen to give about 3 peaks a year (between 1 and 6, at least 20 peaks), and peaks closer together than the variable's storm separation (for example 48 hours for wind and waves) count as one storm. Its 100-year level is compared with the block-maxima interval as a check.
- **Extreme values by direction** (wind, waves, currents): block maxima per direction sector, in 8 sectors. See [Reading the directional table](#reading-the-directional-table) below.
- **Checks shown with each fit**: the goodness of fit, whether the annual maxima change over the record (homogeneity), and whether the observed record is unusually rare under the fit. When the annual maxima change significantly (a Pettitt test), the fit uses the years after the change, and the full-record fit is shown beside it for comparison. Fewer than 20 full years of data gives a low-confidence flag, because the long return periods are then long extrapolations.
- **Waves are calibrated to satellite altimetry.** The wave reanalysis runs low in larger sea states, so each point's wave heights are compared with satellite altimeter passes nearby (SARAL and Sentinel-3A/B, from the ESA Sea State CCI). The calibrated levels are shown as a sensitivity beside the design levels, not in their place. If there are fewer than 20 usable passes, the result says it isn't calibrated.

Confidence intervals come from a fixed-seed bootstrap, so processing the same data again gives the same numbers.

![Block maxima extreme values for wind: model, 100-year level, confidence, return level plot, Q-Q and P-P plots and the checks](../../../../assets/screenshots/en/lab-analysis-eva-bm.png)

*Block maxima: the fit summary with its A², the return level plot with its 90 % band, the Q-Q and P-P plots, the checks including the peaks-over-threshold cross-check, and the model selection. Here GEV had the smaller A² but its shape wasn't significant, so Gumbel was kept.*

### Reading the directional table

**Extreme values by direction** fits block maxima separately for each of the 8 direction sectors (N, NE, E, SE, S, SW, W, NW). The **Direction** tile says which convention the sectors use: waves and wind are *coming from*. The table has the return periods down the side and the sectors across.

- **All directions (reference)** is the first column: the all-directions design fit (block maxima, before the altimetry calibration) over the same years. The note under the table names the basis and the years, for example "Reference: design block maxima (not calibrated), 1993–2025".
- **Enough samples in each sector.** A year counts for a sector only when that sector holds at least 5 % of the year's samples. A sector needs at least 10 such years. Otherwise it shows **–** instead of levels, and a note gives the reason, for example "S: insufficient samples in this direction: 0 of 31 years hold at least 5% of the year's samples; at least 10 are needed". No level is safer than a level fitted to a handful of ordinary values.
- **A bounded tail in every sector.** A sector's GEV is used only when its shape parameter stays within ±0.5. Otherwise the sector uses Gumbel, and its model selection says why.
- **⚠ marks a sector to review.** When a sector's level is above the all-directions reference at the same return period, its column header and those cells get **⚠**, and a warning names the sector: "a sector level exceeds the omnidirectional level at the same return period; do not use it as a design value without review". It is usually a small-sample effect in one sector's tail.

These rules apply from analysis version 8. A point processed earlier is processed again the next time you use it.

![Directional return levels for waves at the QA Java Sea point: an All directions (reference) column, NE, SE, S and SW shown as dashes, NW flagged with warning signs](../../../../assets/screenshots/en/lab-analysis-eva-dir.png)

*Wave extreme values by direction at a Java Sea point. The All directions (reference) column reads 2.21 m at 100 years. NE, SE, S and SW show "–", because too few years have enough samples from those directions; the note under the table gives each one's count. NW is flagged ⚠ from 25 years up (2.34 m at 100 years against the 2.21 m reference), with the review warning above the note.*

## Tidal datums

For water level, the Lab gives the standard tidal datums, following the NOAA CO-OPS definitions, over the last 19 full years of the hourly tide prediction (a 19-year epoch covers the 18.6-year nodal cycle). High and low waters are picked from the hourly samples, so a peak can read up to about 3 % of the tidal range below the true crest (the sample can be half an hour off it):

| Datum | Meaning |
|---|---|
| HAT / LAT | Highest and lowest astronomical tide |
| MHHW / MLLW | Mean higher high water and mean lower low water |
| MHW / MLW | Mean high water and mean low water |
| MTL / DTL | Mean tide level and diurnal tide level |
| MSL | Mean sea level of the series (the reference, 0) |

The **ranges** GT (great diurnal range, MHHW − MLLW) and MN (mean range, MHW − MLW) come with them. The **Formzahl** F = (K1 + O1) / (M2 + S2) classifies the tide: below 0.25 semidiurnal, up to 1.5 mixed and mainly semidiurnal, up to 3 mixed and mainly diurnal, above that diurnal.

The hourly tide for any period of up to 366 days is generated when you ask for it.

![Tidal datums at the QA Java Sea point: ranges, Formzahl tide type, epoch and the datum table](../../../../assets/screenshots/en/lab-analysis-tidal-datums.png)

*Tidal datums: at this Java Sea point the tide is diurnal (F = 3.38).*

## Total water level

**Total water level** is the hourly astronomical tide plus that day's non-tidal sea level (the GLORYS12 sea surface height minus its 1993–2025 mean). It shows how high the water gets with the seasonal mean-sea-level cycle on top of the tide, so its maximum is above HAT. At a Java Sea point it peaks at 0.84 m, against a HAT of 0.66 m.

It has timeseries, statistics, climatology and extreme values (block maxima and peaks over threshold), read like those of any other variable. Two things to keep in mind:

- **Short surges aren't in it.** The non-tidal part is a daily mean, so storm surge lasting hours and wave set-up are missing. Treat its extremes as a lower bound for a storm tide, not as a design storm-tide level.
- **Sea level rises over the record.** The homogeneity check often finds a change in the annual maxima. The fit then uses the years after it, so the return levels describe recent mean sea level. They do not include future rise. Beside them, an **Allowance for future rise (sensitivity)** block shows the projected rise per scenario and horizon, and the 100-year level with that rise added. It is a sensitivity only and is not added into the return levels. Until a source for the projections is configured, it reads **Not available**, never 0. The Lab does not show this block yet; it comes in a later release.

## Storm audit (500 km)

The storm audit lists every tropical cyclone in the IBTrACS record that passed within 500 km of the point at tropical-storm strength or more: a US 1-minute sustained wind (`usa_wind`) of at least 34 knots at a fix inside the circle.

- **Closest approach** is measured at the IBTrACS fixes, which are 3-hourly, not along an interpolated track.
- **Category** is the Saffir–Simpson category of the strongest wind inside the circle. In the chart, colours group storms into tropical storms, category 1–2 and category 3–5; dot size is the wind.
- Storms reported only with 10-minute winds (agencies outside the US) aren't listed.

The view shows the count, the closest approach, the strongest storm, a timeline of the storms by date and closest distance, and a table with both winds, the closest distance and the hours inside the circle (from the first to the last fix inside it; a storm that leaves and comes back is counted across the gap). Hover a dot for the time of the closest approach.

![Storm audit at the QA Java Sea point: four tropical storms within 500 km, their timeline and table](../../../../assets/screenshots/en/lab-analysis-storm-audit.png)

*Storm audit: four tropical storms passed within 500 km of this point.*

## Using the results

These analyses are a screening and planning aid built on global datasets, which have finite resolution and known biases near the coast. Credit the underlying datasets when you publish results, as explained in [Attribution and licences](../../using-konfersi/metocean-data-sources.md#attribution-and-licences).

<scalar-callout type="warning">Results are not a certified, site-specific study. Read the [AI & metocean disclaimer](../../legal/ai-and-metocean-disclaimer.md).</scalar-callout>

Questions about a variable or an analysis? [Contact support](../../support/contact-support.md).
