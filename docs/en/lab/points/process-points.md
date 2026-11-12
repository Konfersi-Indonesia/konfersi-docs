---
title: Process points
description: Download and analyse the metocean data of observation points, follow progress in Processes and Logs, and cancel, restart or reprocess.
tags: [lab, process, acquisition, download, analyse, processes, logs, reprocess, cancel]
related: [lab/data, lab/data/variables-and-sources, lab/points, lab/troubleshooting]
status: published
updated: 2026-10-02
---

Processing a point downloads its metocean data from the providers and analyses it. When it's done, every analysis for that point is ready to open. See [How data is processed](../data/index.md) for what happens behind the scenes.

## Process a point

In **Map Explorer → Observation Points**, choose one of these on a point:

| Action | What it does |
|---|---|
| **Process Point** | Acquires and analyses every variable the point is missing |
| **Process Selected Variables…** | Lets you tick which variables to acquire, for example only wind and waves |
| **Reprocess (Download and Analyse Again)…** | Downloads and analyses every variable again, replacing the current results |
| **Process All Unprocessed Points** | Processes every point that hasn't been processed yet |

Variables that are already processed are reused, not downloaded again.

Processing usually takes minutes per point, and can take longer when a provider is busy. ERA5 requests in particular wait in the Copernicus queue. You can close Lab while it runs: processing continues on Konfersi's servers, and the results are there when you come back.

## Point status

Each point shows where it stands:

| Status | Meaning |
|---|---|
| **Not processed** | Nothing downloaded yet |
| **Processing…** | A process is running for it |
| **Partly processed 3/8** | Some variables are ready, others aren't |
| **Processed** | Every variable is ready |
| **Processing failed** | The last process failed; see [Troubleshooting](../troubleshooting.md) |

## Follow progress

The **Processes** panel lists every process, with its live state for each variable:

| State | Meaning |
|---|---|
| **Queued** · **Waiting for a free worker** | Waiting for processing capacity |
| **Request sent to …** · **… at provider** | Waiting for Copernicus Marine or the Copernicus CDS to prepare the data |
| **Downloading** | Downloading the data |
| **Analysing** | Running the analyses |
| **Saving results** | Storing the results |
| **Completed** | Done |
| **Already processed · reused** | Processed earlier for this location; the stored results are used and nothing is downloaded |
| **shared** | Another process is producing the same data for the same location, so this one shares its run |
| **Failed** · **Cancelled** · **Stopped** | Ended without finishing |

Select **Show Logs** on a process, or open the **Logs** panel, for every log line. Filter by **Errors**, **Warnings** or **Info**, search the text, and turn on **Follow new lines**. The status bar also shows how many processes are running.

## Cancel, restart or run again

- **Cancel Process** stops it. Variables not started are dropped; one already downloading stops after its current step. Data already downloaded is kept.
- **Restart** cancels a running process and starts it again with the same variables, reusing downloaded data. Use it when a process shows **Not responding**.
- **Run Again** (or **Process Again**) re-runs a failed or finished process. Processing again re-runs the analysis; downloaded data is reused.
- **Clear Finished Processes** tidies up the panel.

If a process sends no update for a while, it shows **Not responding · no update for … min**. After 10 minutes without an update it's marked failed. It may still have been waiting for data, so **Restart** it.

## Results are shared by location

Processed data belongs to a location, not to a point. If any point in Konfersi has already been processed at the same location, your point reuses those results straight away. If two processes need the same data at the same time, they share one run. Reprocessing a location replaces the results for everyone using it.

## What processing uses

- **Compute** quota for the processing time.
- **Storage** quota for the downloaded data.

See [Quotas](../get-started.md#quotas).

## Download the raw data

To work with the data yourself, choose **Download Data (NetCDF)…** on a processed point and pick the variables. Each variable is one NetCDF file. In the browser the files are downloaded; on desktop you choose where to save them. See [Variables & sources](../data/variables-and-sources.md).
