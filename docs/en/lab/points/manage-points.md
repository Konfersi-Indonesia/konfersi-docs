---
title: Manage points
description: Rename, move, reorder and delete observation points, show them on the map, and look up the water depth.
tags: [lab, points, rename, coordinates, depth, bathymetry, delete, reorder]
related: [lab/points, lab/points/process-points]
status: published
updated: 2026-10-02
---

Right-click a point in **Map Explorer → Observation Points**, or use the buttons that appear when you hover it.

## Show a point on the map

Choose **Show on Map**. The map flies to the point. Selecting a point also makes it the point that **Analysis & Validations**, **Data** and **Analysis** show.

## Rename a point

Choose **Rename Point…** and type a new name. A name is required.

## Change its coordinates

Choose **Edit Coordinates…** and type the new latitude and longitude, or drag the point on the map.

If the point was already processed, Lab asks first: its processed data belongs to the old location. At the new location the point shows as **Not processed** and has to be processed again. You can't move a point while it's being processed; cancel its process first. If the point is part of a route process, cancel that process (every point of the route) before moving it.

## Reorder points

Use **Move Up** and **Move Down**, or **Reorder Points**. The order is the route order used by [route analyses](../analysis/index.md#extremes-along-a-route).

## Look up the water depth

Run **Konfersi: Look Up Water Depth** with a point selected. Lab asks measured seabed grids for the elevation at the point: GMRT (which merges GEBCO with multibeam surveys) first, then GEBCO. The answer shows as **Depth … m**. Lab never estimates a depth: if no source answers, you see **Depth lookup failed**; try again later.

## Delete a point

Choose **Delete Point** and confirm. The point leaves the project. Processed data for its location is kept, and is reused if a point is added at the same place again, so it won't be downloaded twice.

You can't delete a point while it's being processed. Cancel its process first.
