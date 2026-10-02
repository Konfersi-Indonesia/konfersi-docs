---
title: Variables & sources
description: Every metocean variable Konfersi Lab acquires for a point — provider, dataset, resolution and period — and how to download it as NetCDF.
tags: [lab, variables, sources, cmems, era5, copernicus, wind, waves, currents, sst, salinity, netcdf, resolution]
related: [lab/data, using-konfersi/metocean-data-sources, lab/points/process-points]
status: published
updated: 2026-10-02
---

Processing a point acquires up to eight variables. Select a point and open **Konfersi Lab → Data** to see which are acquired, in progress or not acquired, and when each was last updated.

## The variables

| Variable | Provider | Dataset | Grid · time step | Period |
|---|---|---|---|---|
| **Wind** (10 m, eastward and northward) | Copernicus Marine | Global ocean hourly wind, L4 reprocessed (`cmems_obs-wind_glo_phy_my_l4_0.125deg_PT1H`) | 0.125° · hourly | Jan 2007 – Nov 2025 |
| **Waves**: total sea, wind sea and two swell systems (height, period, direction) | Copernicus Marine | Global ocean waves reanalysis (`cmems_mod_glo_wav_my_0.2deg_PT3H-i`) | 0.2° · 3-hourly | Jan 1980 – Jan 2026 |
| **Current** (eastward and northward, surface to 15 m) | Copernicus Marine | Multi-observation global currents (`cmems_obs-mob_glo_phy-cur_my_0.25deg_PT1H-i`) | 0.25° · hourly | Jan 1993 – Jul 2025 |
| **Sea surface temperature** | Copernicus Marine | OSTIA reprocessed SST (`METOFFICE-GLO-SST-L4-REP-OBS-SST`) | 0.05° · daily | Oct 1981 – Dec 2025 |
| **Salinity** (sea surface) | Copernicus Marine | Multi-observation sea surface salinity (`cmems_obs-mob_glo_phy-sss_my_multi_P1D`) | daily | Jan 1993 – Dec 2024 |
| **Precipitation** | Copernicus CDS | ERA5 hourly point time series | 0.25° · hourly | 2015 – 2025 |
| **Air temperature** (2 m) | Copernicus CDS | ERA5 hourly point time series | 0.25° · hourly | 2015 – 2025 |
| **Air pressure** (surface) | Copernicus CDS | ERA5 hourly point time series | 0.25° · hourly | 2015 – 2025 |

Each period is the window Lab requests; what you get depends on what the provider has for that location. The ERA5 variables use a ten-year window to keep requests within the provider's limits.

**Water level** comes from tide predictions (FES2022) rather than from processing. See [How data is processed](index.md#site-analyses).

<scalar-callout type="info">Reanalysis and satellite products describe conditions over a grid cell, not at a precise spot. Close to the coast, in harbours or in complex seabed areas, conditions can differ from the nearest cell. For engineering design, validate against local measurements.</scalar-callout>

## Process only some variables

Use **Process Selected Variables…** on a point and tick the ones you need, for example only waves and wind for a quick look. You can process the rest later; nothing is downloaded twice.

## Download the data

1. Select a processed point.
2. Choose **Download Data (NetCDF)…** (or, in **Data**, **Download Data** on a variable).
3. Tick the variables. Lab downloads one NetCDF file per variable.

In the browser the files go to your downloads folder; on desktop you choose where to save them. Open them with tools such as Python (`xarray`), MATLAB, Panoply or QGIS.

If a point has nothing downloaded yet, Lab tells you to process it first.

## Credit the data

When you publish results, credit the providers. See [Attribution and licences](../../using-konfersi/metocean-data-sources.md#attribution-and-licences).
