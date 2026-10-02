---
title: Map & layers
description: Use the Lab project map — basemaps, ERA5 climatology overlays, live forecasts, shipping traffic and reference boundaries.
tags: [lab, map, layers, overlays, basemap, climatology, forecast, open-meteo, ais, shipping, eez, boundaries]
related: [lab/map/project-boundaries, lab/points, lab/data/variables-and-sources]
status: published
updated: 2026-10-02
---

The **Project Map** shows your observation points and project boundaries over a basemap, with optional data overlays. Open it from **Map Explorer** or with **Konfersi: Open Map**.

While the map is open, the **Control** view in the secondary side bar holds the map controls. The status bar shows the pointer's latitude and longitude; select **Copy coordinates** in the pointer box to copy them.

## Basemaps

Choose the background map under **Basemap** in **Control**, or run **Konfersi: Choose Basemap…**. Each basemap shows a preview after you first view it; use **Search basemaps** to find one. Choose **Basemap only** to hide overlays.

## Overlays

Overlays draw data on top of the basemap. Add them under **Overlays → Add overlay** in **Control**.

- The list shows what's on the map. **The top of the list draws on top.** Drag to reorder, or use **Alt+↑/↓**.
- **Show**, **Hide** or **Remove from map** each overlay, and set its **Opacity** under **Overlay settings**.
- Each overlay's legend sits at the bottom centre of the map; minimise or expand it as you like.

There are four kinds of overlay.

### Spatial overlays (climatology)

Monthly mean maps from **ERA5, 1992–2020**, for seeing typical conditions across a region:

| Overlay | Unit |
|---|---|
| 10 m wind speed | m/s |
| 2 m air temperature | °C |
| Mean sea-level pressure | hPa |
| Total precipitation | mm/day |
| Sea surface temperature | °C |
| Significant wave height | m |

Pick the month with **Previous month** and **Next month**, or run **Konfersi: Choose Overlay Month…**. These are long-term averages, not conditions on a particular day. Some overlays may show **Not available yet** while Konfersi builds them.

### Live forecast

Forecasts for the next **3 days** from [Open-Meteo](https://open-meteo.com) (free tier):

| Weather | Marine |
|---|---|
| Wind speed (m/s), wind flow (animated), wind gusts | Wave height (m), wave direction (animated), wave period (s) |
| Air temperature (°C), precipitation (mm/h) | Swell height (m) |
| Sea-level pressure (hPa) | Ocean current speed (m/s), ocean currents (animated) |
| Cloud cover, relative humidity (%) | Sea surface temperature (°C) |

- **Play forecast** steps through time; use **Previous time step**, **Next time step** and **Now**, or **Show forecast timeline**.
- In animated overlays, particles move with the flow; brighter is stronger.
- Zoom in if you see **Zoom in to see live data here**.

Open-Meteo limits how often its free tier can be used. When the limit is reached or it can't be reached, Lab shows a **Saved snapshot** instead of live data. In desktop editors, the **Konfersi › Live Forecast: Direct** setting lets your computer fetch forecasts itself on its own allowance; the legend shows whether data came from **This computer**, **Via Konfersi**, or both. See [Sign in & updates](../desktop/sign-in-and-updates.md#settings).

<scalar-callout type="warning">Live forecasts are for orientation only. Use official forecasts and your own procedures for operational decisions.</scalar-callout>

### Shipping traffic

AIS vessel positions per map cell, on a log scale, from the IMF World Seaborne Trade Monitoring System via the World Bank (CC BY 4.0), covering January 2015 to February 2021. Filter by **Vessel type**: **All vessels**, **Commercial**, **Fishing**, **Passenger**, **Oil & gas** or **Leisure**. It shows where ships typically go, not where they are now.

### Reference layers

Labels and boundaries for orientation:

| Layer | Shows | Source |
|---|---|---|
| **Labels** | Names of countries, provinces, cities, seas and EEZs | Natural Earth |
| **Country borders** | International boundaries; disputed ones dashed | Natural Earth |
| **Provinces & regencies** | Indonesian provinces and regencies/cities; first-level divisions elsewhere | Badan Informasi Geospasial; Natural Earth |
| **EEZ (200 NM)** | Exclusive economic zones; unsettled boundaries dashed | Marine Regions (CC BY 4.0) |
| **Territorial sea (12 NM)** | Territorial seas from the baseline | Marine Regions |
| **Contiguous zone (24 NM)** | Contiguous zones, 12–24 NM from the baseline | Marine Regions |
| **Archipelagic waters** | Archipelagic and internal waters | Marine Regions |

<scalar-callout type="warning">Reference layers are for reference only. They are not for legal or navigational use.</scalar-callout>

## Your settings are remembered

Your basemap, overlays, their order and opacity are saved to your account and come back the next time you open the map, in the browser or on desktop.

## Project boundaries

To show your project area, upload a boundary file. See [Project boundaries](project-boundaries.md).
