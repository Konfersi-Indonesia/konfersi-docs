---
title: Metocean data sources
description: The global datasets Konfersi calibrates and validates against, ERA5, CMEMS, FES2022 and CMIP6, and how to credit them.
tags: [data, era5, cmems, fes2022, cmip6, attribution]
related: [lab/data/variables-and-sources, lab/analysis/reading-results, using-konfersi/mission-planning, legal/ai-and-metocean-disclaimer, billing/plans-and-pricing]
status: published
updated: 2026-10-21
---

Konfersi calibrates and validates its models and analyses against industry-standard global datasets. This page explains the main datasets we reference, what each one is, and what to keep in mind when you use results based on them.

## The core datasets

| Dataset | What it is | Typical use at Konfersi |
|---|---|---|
| **ERA5** | The fifth-generation atmospheric reanalysis from ECMWF (European Centre for Medium-Range Weather Forecasts), distributed through the Copernicus Climate Data Store | Hourly precipitation, air temperature and surface pressure history in Lab |
| **CMEMS** | The Copernicus Marine Service, which provides satellite- and model-derived ocean products | Wind, waves, currents, sea surface height, sea surface temperature and salinity in Lab |
| **FES2022** | A global ocean tide model | Tidal constituents, the predicted tide and tidal datums |
| **CMIP6** | The Coupled Model Intercomparison Project, Phase 6: a coordinated set of global climate model experiments | Future climate scenarios, such as SSP pathways, for climate-risk work |

### ERA5

ERA5 combines model data with observations from across the world to produce a consistent, hourly record of the atmosphere and ocean waves going back decades. In Lab it provides precipitation, air temperature and air pressure at a point, over 1993 to 2025. If Copernicus CDS refuses or fails that request, Lab asks one time for 2015 to 2025 instead; if that request fails too, the variable reports an error.

### CMEMS

The Copernicus Marine Service publishes ocean analyses, forecasts and reanalyses. In Lab, wind comes from its observation-based L4 wind product, waves from its global wave reanalysis, currents and sea surface height from the GLORYS12 reanalysis, and sea surface temperature and salinity from its observation products. The dataset for each variable is listed in [Variables & sources](../lab/data/variables-and-sources.md).

### FES2022

FES2022 is a global tide model. It is used to describe tides where long local measurements aren't available.

### CMIP6

CMIP6 brings together climate projections from many modelling centres under shared scenarios. Konfersi uses CMIP6 projections in climate analysis and climate-risk assessment. They are also a course topic.

## Other references

For validation, particularly in consulting studies, Konfersi may also compare results against other sources. These include satellite altimetry, moored wave buoys, in-situ measurements such as ADCP profiles and coastal met masts, and global models and archives such as HYCOM and NOAA data. Which sources apply depends on the study or module.

## Downloads and plans

Access to data downloads, such as ERA5 hindcast downloads, depends on your plan. See [Plans & pricing](../billing/plans-and-pricing.md).

## Attribution and licences

Each dataset is published by its own provider under its own licence and terms of use. Many of them, including the Copernicus services, require you to credit the source when you publish or share results.

When you use Konfersi outputs in a report or publication:

- Credit the underlying datasets, such as ERA5 or CMEMS, as well as Konfersi.
- Follow the current licence terms on each provider's website. Those terms take precedence over this summary.
- Respect any extra restrictions in your Konfersi plan or contract. See the [Terms of Service](../legal/terms.md) and the [Acceptable Use Policy](../legal/acceptable-use.md).

## Limitations

Global datasets have finite resolution and known biases, especially close to the coast and in complex terrain. Konfersi's calibration reduces these errors but doesn't remove them.

<scalar-callout type="warning">Results based on these datasets are not a certified, site-specific study, and are not endorsed by the data providers or by any government body. Read the [AI & metocean disclaimer](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>

Questions about a dataset or a result? [Contact support](../support/contact-support.md).
