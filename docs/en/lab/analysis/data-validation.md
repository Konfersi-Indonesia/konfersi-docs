---
title: Data validation
description: Run automated quality control on a point's acquired data — physical range, spikes, flat lines, gaps and completeness — and read the results.
tags: [lab, validation, qc, quality control, spikes, gaps, completeness]
related: [lab/analysis, lab/data/variables-and-sources]
status: published
updated: 2026-10-02
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
| **Gradient & spike filter** | Jumps between consecutive values far larger than usual for the series |
| **Signal flatline test** | The same value repeated for 24 hours or more, a sign of a stuck sensor or filled data |
| **Completeness & gaps** | The share of expected time steps that have data, and missing periods longer than three times the normal time step |
| **Satellite altimetry collocation** | Comparison with satellite measurements along their tracks |

Satellite altimetry collocation needs along-track data that Lab doesn't acquire yet, so it's shown as **not available**, never as a pass. A check is also **not available** when a series is too short to test.

## What to do with warnings and failures

- A few spikes or short gaps are normal in long records and rarely change statistics or extremes much.
- Many failures, low completeness or long flat lines mean the nearest grid cell may not represent the site well. Try a point slightly further offshore, compare with another variable, or validate against local measurements.
- Reprocessing helps only if a download was interrupted. It doesn't change the provider's data.

<scalar-callout type="info">QC flags possible problems; it doesn't correct the data. Analyses always use the data as provided.</scalar-callout>
