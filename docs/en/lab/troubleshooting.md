---
title: Troubleshooting
description: What Konfersi Lab's error messages mean and how to fix them — sign-in, access, quotas, processing failures, imports, map layers, analyses and updates.
tags: [lab, troubleshooting, errors, failed, quota, processing, sign in, not responding]
related: [lab/faq, lab/points/process-points, support/support-tickets]
status: published
updated: 2026-10-02
---

Most problems show a message in a notification. For details, open the **Logs** panel or **Konfersi: Show Acquisition Log**. If you need help, [open a support ticket](../support/support-tickets.md) with the project, the point and the message.

## Sign-in and access

| Message | What to do |
|---|---|
| **No project is open. Open Lab from a project in Console.** | Open the project from the Console, or run **Konfersi: Switch Project…** on desktop |
| **"…" is on the Free plan. Upgrade the plan to use Lab.** | Upgrade the project in the Console under **Lab Project → Project Plans & Add-ons** |
| **Project … was not found or you do not have access.** | Check you're signed in with the right account and that you own the project, were invited, or belong to an organization it's shared with |
| **Your Konfersi session expired. Sign in again to continue.** | Select **Sign In** |
| **This editor was disconnected from your Konfersi account.** | Someone disconnected it under [Connected devices](../account/security/connected-devices.md). Sign in again if it was you |
| **Login link expired or already used** · **Login timed out** · **Sign-in was denied in the browser** | Run **Konfersi: Sign In** again and approve the new request. See [Sign in & updates](desktop/sign-in-and-updates.md) |
| **Failed to load Konfersi Lab** (browser) | Select **Retry**. If it continues, check your connection |

## Quotas

| Message | What to do |
|---|---|
| A quota **is used up**, or **No … quota on this project** | Buy an add-on or upgrade the plan in the Console. See [Quotas](get-started.md#quotas) |
| Adding points fails with the points quota | Delete points you don't need, or raise the points quota |

## Processing

| Status or message | Cause | What to do |
|---|---|---|
| **Failed · could not reach the data provider** | Copernicus didn't respond | Wait a few minutes, then **Run Again** |
| **Failed · the data provider refused the credentials** | A problem with Konfersi's provider account | Try again later; if it repeats, contact support |
| **Failed · source data missing** | The provider has no data in the area around the point, for example on land or outside a dataset's coverage | Check the point is at sea. Move it slightly offshore and process again. Other variables may still work |
| **Interrupted · process it again** | The process stopped unexpectedly | **Process Again**. Downloaded data is reused |
| **Not responding · no update for … min** | No progress report for a while, often while waiting for Copernicus | Wait, or **Restart**. After 10 minutes it's marked failed |
| **Waiting for Copernicus CDS** for a long time | The ERA5 queue is busy | Nothing; it continues when the file is ready, even if you close Lab |
| **… is already being processed** | A process is already running for it | Follow it in **Processes** |
| **… is being processed. Cancel its process before deleting it.** / **before moving it** | You can't delete or move a point mid-process | **Cancel Process** first |
| **Partly processed** | Some variables failed or haven't run | **Process Point** acquires only the missing ones |

## Points and boundaries

| Message | What to do |
|---|---|
| **Enter "lat, lon" with lat in [-90, 90] and lon in [-180, 180]** | Type decimal degrees with a comma between, e.g. `-6.1, 106.8` |
| **Required columns 'Lat' and 'Lon' not found.** | Name the columns `Lat` and `Lon` (or `Latitude`, `Longitude`). See [Import points](points/index.md#import-points-from-a-file) |
| **No point features found in the file.** | The file has only lines or polygons. Upload it as a [boundary](map/project-boundaries.md) instead, or add points |
| **Could not upload …** (boundary) | Check the file is GeoJSON, KML, KMZ or a zipped Shapefile under 10 MB |
| **Depth lookup failed** | The seabed sources didn't answer. Try again later |

## Map

| Message | What to do |
|---|---|
| **The … overlay is not available yet.** | Konfersi hasn't built that climatology overlay yet. Choose another |
| **Saved snapshot: live data is over its request limit or unreachable** | Open-Meteo's free limit was reached. The snapshot shows the last data; try later. On desktop, see the **Live Forecast: Direct** setting |
| **Zoom in to see live data here** | Zoom in further |
| **Shipping traffic is unavailable right now.** · **Reference layers are not available yet.** | Try again later |

## Analyses and charts

| Message | What to do |
|---|---|
| **Process this point first** · **not acquired** | [Process the point](points/process-points.md) |
| **Not available at this point** | The variable has no data there, e.g. currents too close to the coast |
| **The extreme value analysis did not converge for this data.** | Try the other method or adjust the POT threshold in **Project Details → Thresholds** |
| **Tide predictions are not available yet** | The tide model isn't installed on the server yet; try later |
| **This result has no chart or table.** | Select **Open as JSON** to see the result |
| **Explanations are available for point analyses.** | **Explain** works on point analyses, not site analyses |

## Documents and reports

| Message | What to do |
|---|---|
| **Not saved — the document is not valid JSON** | Fix the underlined error, then save again |
| **Define at least one environment and one operation before running planning.** | Fill in **Operations & environments** and save |
| **Report generation failed** | Check the point is processed and you have AI quota, then try again |

## Desktop updates

| Message | What to do |
|---|---|
| **Konfersi Lab … is installed. Reload to use it.** | Select **Reload** |
| **The downloaded package does not match the release** | The download was damaged. Run **Konfersi: Check for Konfersi Lab Updates** again |
| **Could not check for Konfersi Lab updates** | Check your connection, or reinstall from the Console. See [Install the extension](desktop/install-the-extension.md) |
