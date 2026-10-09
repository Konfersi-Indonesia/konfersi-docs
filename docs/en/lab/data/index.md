---
title: How data is processed
description: What happens when you process a point in Konfersi Lab — from the request to Copernicus to the analyses you open.
tags: [lab, data, processing, pipeline, copernicus, era5, cmems, netcdf]
related: [lab/data/variables-and-sources, lab/points/process-points, using-konfersi/metocean-data-sources]
status: published
updated: 2026-10-09
---

When you [process a point](../points/process-points.md), Konfersi's servers do the work. Your editor or browser only starts the process and shows its progress.

## The steps

1. **Request.** Lab sends the point's location and the variables to process to the Konfersi backend, which checks your access and quotas and queues the work.
2. **Reuse check.** If the data for that location was processed before, by you or anyone else, the stored results are used and nothing is downloaded (**Already processed · reused**). If another process is fetching the same data right now, yours shares that run.
3. **Download.** For each variable, a download worker asks the provider for the data:
   - **Copernicus Marine (CMEMS)** for wind, waves, currents, sea surface temperature and salinity. The provider extracts a small area of about ±0.5° around the point.
   - **Copernicus Climate Data Store (ERA5)** for precipitation, air temperature and air pressure, as an hourly time series at the point. ERA5 requests wait in the Copernicus queue (**Waiting for Copernicus CDS**), sometimes for a while.

   Each variable arrives as a NetCDF file and is stored securely in Konfersi's storage.
4. **Analyse.** A processing worker reads the file, takes the **nearest grid cell that has data** (so a point near the coast doesn't read a land cell), at the surface, and runs every analysis for that variable: time series, statistics, roses, joint distributions and extreme values, for all conditions and, where relevant, cyclonic and non-cyclonic conditions separately.
5. **Store the results.** Results are saved as ready-to-open artifacts. Opening an analysis afterwards is instant, because nothing is recomputed.

Variables are handled independently, so one slow or failed variable doesn't hold up the others. That's why a point can be **Partly processed**.

## Site analyses

Some analyses use extra sources and run when you open them, rather than during processing:

| Analysis | Source |
|---|---|
| **Tides** | FES2022 global tide model, validated against the nearest UHSLC tide-gauge station where there is one |
| **Tropical cyclones by month**, **Storm audit (500 km)** | IBTrACS, the international record of tropical cyclone tracks |
| **Water depth** | GMRT (merging GEBCO and multibeam surveys), else GEBCO |

## See what a point has

The **Data Availability** view in the **Data Analytics** panel lists every variable for the selected point, with its state:

| State | Meaning |
|---|---|
| **Ready** | Downloaded and analysed. Shows how many analyses are ready, and may say **older analysis** or **reused** |
| **Running** | Being fetched or analysed now |
| **Failed** | The last attempt failed |
| **On demand** | Analysed when you open it; nothing is downloaded |
| **Not acquired** | Not fetched for this point yet |

Where known, each variable also shows its source, coverage, resolution and when it was updated.

- **Retry failed** fetches the failed variables again.
- **Fetch missing** fetches the ones not acquired yet.
- **Show processes** shows the running work, and **Refresh** reloads the list.

The same actions are in the Command Palette as **Show Data Availability**, **Refresh Data Availability** and **Retry Failed Variables**. Retrying or fetching starts a new process for the point.

## Where your data lives

- Downloaded files and results are stored by Konfersi for the location, and reused across projects to avoid downloading the same data twice.
- Your points, boundaries, project documents and reports belong to your project and are only visible to people with access to it.
- [Download the NetCDF files](variables-and-sources.md#download-the-data) any time to work with the data in your own tools.

For dataset descriptions, licences and how to credit them, see [Metocean data sources](../../using-konfersi/metocean-data-sources.md).
