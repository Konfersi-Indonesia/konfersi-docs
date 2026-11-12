---
title: Project boundaries
description: Upload a GeoJSON, KML, KMZ or zipped Shapefile to show your project area on the Lab map, and manage its colour and visibility.
tags: [lab, boundary, geojson, kml, kmz, shapefile, map, area]
related: [lab/map, lab/points]
status: published
updated: 2026-10-02
---

A project boundary is an area, such as a concession, lease block or study area, drawn on the [project map](index.md). Boundaries are shared with everyone working on the project and are listed in **Map Explorer → Project Boundaries**.

## Upload a boundary

1. Select **Upload Boundary** (or run **Konfersi: Upload Boundary…**) and choose a file.
2. Lab shows the steps: **Receiving the file**, **Reading and converting to WGS 84**, **Saving the boundary**.
3. The boundary appears in the list with its number of features, and on the map.

Supported files, up to **10 MB** each:

- GeoJSON (`.geojson`, `.json`)
- KML (`.kml`) and KMZ (`.kmz`)
- Zipped Shapefile (`.zip` containing at least the `.shp`, `.shx` and `.dbf`, and preferably the `.prj`)

Lab converts the coordinates to WGS 84. Keep boundaries simple: a handful of polygons or lines, not a full dataset.

## Manage boundaries

Right-click a boundary, or use its buttons:

| Action | What it does |
|---|---|
| **Rename Boundary…** | Changes the name shown in the list and legend |
| **Change Colour…** | Blue, Orange, Green, Pink, Violet, Red, Cyan or Yellow |
| **Show on Map** / **Hide from Map** | Toggles it on the map without deleting it |
| **Zoom to Boundary** | Fits the map to it |
| **Delete Boundary** | Removes it. The uploaded file is deleted for everyone in the project |

Boundaries don't affect processing; they're for orientation. To analyse a location inside the area, add [observation points](../points/index.md) there.
