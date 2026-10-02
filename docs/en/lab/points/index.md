---
title: Observation points
description: Add observation points to a project in Konfersi Lab — on the map, by coordinates, or from a CSV, Excel, KML, KMZ, GeoJSON or Shapefile.
tags: [lab, points, observation points, coordinates, import, csv, excel, kml, geojson, shapefile]
related: [lab/points/manage-points, lab/points/process-points, lab/map]
status: published
updated: 2026-10-02
---

An observation point is a location, in latitude and longitude, where Lab downloads and analyses metocean data. Every analysis, validation, planning run and report is for one point, or for several points along a route.

Points belong to the project, so everyone working on it sees the same points. You find them in **Map Explorer → Observation Points** (and **Konfersi Lab → Points**).

Adding a point doesn't download anything yet. Points are only processed when you run **Process** on them. See [Process points](process-points.md).

<scalar-callout type="info">Each point counts toward your project's points quota. If adding points would go past it, they aren't added. Remove points you no longer need, or raise the quota in the Console.</scalar-callout>

## Add points on the map

1. Open **Map Explorer** and select **Add Points on the Map** (or run **Konfersi: Add Points on Map**).
2. Click the map where you want each point. Points are named for you; you can rename them later.
3. Press **Enter** or **Esc** to finish. **Ctrl+Z** (**Cmd+Z** on Mac) removes the last point you added.

Points you add one after another are kept in that order, which matters for [route analyses](../analysis/index.md#extremes-along-a-route).

## Add a point by coordinates

1. Select **Add by Coordinates** (or run **Konfersi: Add Point by Coordinates…**).
2. Type the latitude and longitude in decimal degrees, separated by a comma, for example `-6.1, 106.8`. Latitude must be between −90 and 90, longitude between −180 and 180.
3. Give the point a name.

## Import points from a file

1. Select **Import from File** (or run **Konfersi: Import Points from File…**) and choose the file.
2. Lab reads it and lists the points it found, all ticked. Untick any you don't want.
3. Confirm. Lab tells you how many points were imported.

Supported files:

| File | What Lab reads |
|---|---|
| CSV (`.csv`), Excel (`.xlsx`, `.xls`) | One point per row. Needs a latitude column and a longitude column; a name column is optional |
| KML, KMZ (`.kml`, `.kmz`) | Placemark points, named from the placemark |
| GeoJSON (`.geojson`, `.json`) | Point features, named from a `name` property |
| Zipped Shapefile (`.zip`) | Point features |

For CSV and Excel, column headers are matched loosely and without regard to case:

- **Latitude**: any header containing `lat`, such as `Lat` or `Latitude`.
- **Longitude**: any header containing `lon` or `lng`, such as `Lon`, `Long` or `Longitude`.
- **Name** (optional): any header containing `name` or `label`. Rows without a name are called **Point 1**, **Point 2** and so on.

Coordinates must be decimal degrees in WGS 84. An example CSV:

```csv
Name,Lat,Lon
Jetty A,-6.105,106.812
Buoy 2,-5.980,106.700
```

If Lab can't find the columns it shows **Required columns 'Lat' and 'Lon' not found.** For map files without point features it shows **No point features found in the file.**

## Next

- [Manage points](manage-points.md): rename, move, reorder, look up water depth, delete.
- [Process points](process-points.md): download and analyse their data.
