---
title: Variables & sources
description: Every metocean variable Konfersi Lab acquires for a point — provider, dataset, resolution and period — and how to download it as NetCDF.
tags: [lab, variables, sources, cmems, era5, copernicus, fes2022, wind, waves, wind sea, swell, currents, sea surface height, sst, salinity, water level, total water level, netcdf, resolution, caveats]
related: [lab/data, lab/analysis/reading-results, using-konfersi/metocean-data-sources, lab/points/process-points]
status: published
updated: 2026-10-13
---

Processing a point acquires up to ten variables. Select a point and open **Konfersi Lab → Data** to see which are acquired, in progress or not acquired, and when each was last updated.

## The variables

| Variable | Provider | Dataset | Grid · time step | Period |
|---|---|---|---|---|
| **Wind** (10 m, eastward and northward) | Copernicus Marine | Global ocean hourly wind, L4 reprocessed (`cmems_obs-wind_glo_phy_my_l4_0.125deg_PT1H`) | 0.125° · hourly | Jan 2007 – Nov 2025 |
| **Waves**: total sea, wind sea and two swell systems (height, period, direction) | Copernicus Marine | Global ocean waves reanalysis (`cmems_mod_glo_wav_my_0.2deg_PT3H-i`) | 0.2° · 3-hourly | Jan 1980 – Jan 2026 |
| **Current** (eastward and northward, surface, residual) | Copernicus Marine | GLORYS12 ocean reanalysis, daily mean (`cmems_mod_glo_phy_my_0.083deg_P1D-m`) | 1/12° (0.083°) · daily | Jan 1993 – Dec 2025 |
| **Sea surface height** (non-tidal, above the geoid) | Copernicus Marine | GLORYS12 ocean reanalysis, daily mean (`cmems_mod_glo_phy_my_0.083deg_P1D-m`) | 1/12° (0.083°) · daily | Jan 1993 – Dec 2025 |
| **Sea surface temperature** | Copernicus Marine | OSTIA reprocessed SST (`METOFFICE-GLO-SST-L4-REP-OBS-SST`) | daily | Oct 1981 – Dec 2025 |
| **Salinity** (sea surface) | Copernicus Marine | Multi-observation sea surface salinity (`cmems_obs-mob_glo_phy-sss_my_multi_P1D`) | daily | Jan 1993 – Dec 2024 |
| **Precipitation** | Copernicus CDS | ERA5 hourly point time series | 0.25° · hourly | 2015 – 2025 |
| **Air temperature** (2 m) | Copernicus CDS | ERA5 hourly point time series | 0.25° · hourly | 2015 – 2025 |
| **Air pressure** (surface) | Copernicus CDS | ERA5 hourly point time series | 0.25° · hourly | 2015 – 2025 |
| **Water level** (astronomical tide) | AVISO | FES2022b tide model, 34 constituents | hourly prediction | Jan 1993 – Dec 2025 |
| **Total water level** (tide plus non-tidal sea level, computed) | AVISO + Copernicus Marine | FES2022b tide plus the GLORYS12 sea surface height (`cmems_mod_glo_phy_my_0.083deg_P1D-m`) | hourly | Jan 1993 – Dec 2025 |

Each period is the window Lab requests; what you get depends on what the provider has for that location. The ERA5 variables use a ten-year window to keep requests within the provider's limits.

**Water level** is the tide predicted at the point from the FES2022b constituents, not a measurement. Its point analysis is the [tidal datums](../analysis/reading-results.md#tidal-datums), and the hourly tide for a period you choose is generated when you ask for it. The site analysis **Tides** compares the model with the nearest tide gauge; see [How data is processed](index.md#site-analyses).

**Total water level** is computed, not downloaded: the hourly FES2022b tide plus that day's non-tidal sea level, which is the GLORYS12 sea surface height minus its 1993–2025 mean. It's analysed from the sea surface height download, so processing sea surface height gives you total water level too. It has the same analyses as the other single-value variables: timeseries, statistics, climatology and [extreme values](../analysis/reading-results.md#total-water-level). It has no NetCDF file of its own: download sea surface height instead.

**Wave (wind sea)** and **Wave (swell)** are analysed from the waves download, so they come with it. Wind sea uses the wind-sea partition (`VHM0_WW`, `VMDR_WW`, `VTM01_WW`) and swell the primary swell system (`VHM0_SW1`, `VMDR_SW1`, `VTM01_SW1`); the second swell system isn't analysed on its own. Each has the same analyses as total sea, including its own rose. Each result names the dataset, its version and these variables.

## Read the caveats

Some variables carry a caveat that Lab shows with every one of their results:

| Variable | Caveat |
|---|---|
| **Current** | Residual (non-tidal) current: daily-mean surface velocity from the GLORYS12 reanalysis. **Tidal currents are not included**, so peak currents on tidal shelves are higher than these values. Not for design on its own. |
| **Sea surface height** | Height above the geoid (non-tidal daily mean), not an anomaly about mean sea level. Don't add it to the astronomical tide as it is: remove its long-term mean first. |
| **Water level** | Astronomical tide only: excludes the seasonal mean-sea-level cycle and storm surge. Observed total water level can be about 0.25 m higher. Don't use it as a design water level on its own. |
| **Total water level** | Astronomical tide plus the daily-mean non-tidal sea level from an ocean reanalysis (the seasonal mean-sea-level cycle and slow wind set-up). Short storm surge (hours) and wave set-up are not included, so peaks are lower than an observed storm tide: not a design storm-tide level on its own. |
| **Precipitation, air temperature, air pressure** | The 2015–2025 window is shorter than the 20 years extreme-value methods ask for, so their extreme values are flagged as low confidence. |

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
