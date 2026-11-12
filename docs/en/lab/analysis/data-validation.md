---
title: Data validation
description: Run automated quality control on a point's acquired data — physical range, spikes, flat lines, gaps and completeness — and read the results.
tags: [lab, validation, qc, quality control, spikes, gaps, completeness, data availability]
related: [lab/analysis, lab/data/variables-and-sources]
status: published
updated: 2026-10-23
---

Validation runs automated quality control (QC) on the data acquired for a point, so you know how far you can trust it before using the analyses.

## Run validation

1. Select a processed point.
2. In **Map Explorer → Analysis & Validations**, choose **Run QC on this point**, or in **Konfersi Lab → Validation**, select **Run Data Validation**.
3. Results appear below, per variable, with when they were checked and how many samples were tested.

If nothing is acquired yet, Lab shows **No acquired data to validate**. Process the point first.

## The checks

Each check reports **pass**, **warn** or **fail**, with the value it measured:

| Check | What it looks for |
|---|---|
| **Physical range limits** | Values outside physical limits, for example wind 0–75 m/s, wave height 0–30 m, current 0–5 m/s, sea surface temperature −2.5–40 °C, salinity 0–42 PSU |
| **Isolated spikes** | One-step excursions that stand out from both neighbours by at least a size limit for the variable. Not checked where single-step peaks are real |
| **Signal flatline test** | The same value repeated for 24 hours or more, a sign of a stuck sensor or filled data |
| **Completeness & gaps** | The share of expected time steps that have data, and missing periods longer than three times the normal time step |
| **Satellite altimetry collocation** (waves) | Comparison of the wave height with satellite altimeter passes near the point (SARAL and Sentinel-3A/B, from the ESA Sea State CCI) |

The altimetry check pairs each pass with the model in time and reports the bias (model minus altimeter) and the root-mean-square error (RMSE), with the number of passes and the passes per mission. It **warns** when the bias is beyond 0.15 m or the RMSE beyond 0.30 m, and **fails** beyond 0.30 m or 0.50 m. With fewer than 20 usable passes, or when the passes can't be read, it is shown as **not available**, never as a pass. A check is also **not available** when a series is too short to test.

## Quality checks after processing

Every variable is also checked when a point is processed. Open **Data Analytics → Data Availability**, then **Quality checks** under a variable. Each check has a status and a sentence with the numbers it found:

| Check | What the sentence tells you |
|---|---|
| **Physical range limits** | How many samples fall outside the variable's physical limits, out of how many |
| **Isolated spikes** | One-step excursions above a size limit, with the first few dates and values. Not checked where single-step peaks are real |
| **Isolated spikes removed** (waves) | How many isolated one-step spikes were removed before analysis, with examples, for example "15 isolated one-step spikes removed before analysis: 2017-02-15 15:00 (2.91 m), … and 10 more" |
| **Signal flatline test** | Runs of identical values lasting a set number of hours or more. Not checked where long flat runs are normal |
| **Completeness & gaps** | Samples received against expected, the time step and window, and gaps longer than three times the step |
| **Grid cell at the point** | The nearest grid cell with data, its distance from the point and how much of its record is present |
| **Analyses produced** | How many of the variable's analyses were produced, and which are missing |
| **Satellite altimetry collocation** (waves) | The bias and RMSE against altimeter passes, how many passes and how many came from each mission; or how many passes were found when there are too few |

The check names and sentences follow the Lab's display language (English or Indonesian), with numbers and decimals written the way that language writes them. In the desktop extension that's VS Code's display language. The web Lab shows them in English.

## What to do with warnings and failures

- A few spikes or short gaps are normal in long records and rarely change statistics or extremes much.
- Many failures, low completeness or long flat lines mean the nearest grid cell may not represent the site well. Try a point slightly further offshore, compare with another variable, or validate against local measurements.
- Reprocessing helps only if a download was interrupted. It doesn't change the provider's data.

<scalar-callout type="info">QC flags possible problems; it doesn't correct the data. Analyses use the data as provided, except that isolated one-step wave spikes are removed first (see **Isolated spikes removed** above).</scalar-callout>
