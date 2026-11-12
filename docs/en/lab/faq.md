---
title: Lab FAQ
description: Answers to common questions about Konfersi Lab — access, desktop editors, points, processing time, data sources, accuracy, quotas and sharing.
tags: [lab, faq, questions]
related: [lab/get-started, lab/troubleshooting, support/faq]
status: published
updated: 2026-10-02
---

## Access and setup

### Do I need to install anything?

No. Lab runs in your browser. Install the extension only if you prefer working in VS Code or Antigravity. See [Desktop editors](desktop/index.md).

### Why can't I open Lab for my project?

Lab needs a paid plan. Projects on the Free plan show **Upgrade plan to access Lab**. See [Plans & pricing](../billing/plans-and-pricing.md).

### Is the extension on the VS Code Marketplace?

No. Download it from your project in the Console (**Lab extension**) and install it from the file. It updates itself afterwards. See [Install the extension](desktop/install-the-extension.md).

### Does it work in Cursor or other editors?

The extension is made for VS Code and Antigravity. Other editors built on VS Code 1.90 or later can usually install it from the `.vsix` file too.

### Can several people work on the same project?

Yes. The owner, invited assistants and members of organizations the project is shared with all see the same points, boundaries, results and documents.

## Points and processing

### How many points can I add?

As many as your plan's points quota allows. The **Project** view shows how many you've used.

### How long does processing take?

Usually minutes per point. ERA5 variables (precipitation, air temperature, air pressure) can wait longer in the Copernicus queue. You can close Lab meanwhile; processing continues on the server.

### Why was my point processed instantly?

Data for that location had been processed before, so the stored results were reused. Nothing was downloaded again.

### Does processing again cost more?

Reprocessing downloads and analyses everything again, so it uses compute and storage quota again. **Process Point** only fills in missing variables.

### What happens to the data if I delete a point?

The point leaves the project, but the processed data for its location is kept and reused if you add a point there again.

### Can I process a point on land?

Marine variables need a sea location. On land or very close to the coast, the provider may have no data (**source data missing**). Place points at sea, slightly offshore if needed.

## Data and results

### Where does the data come from?

Copernicus Marine (wind, waves, currents, sea surface temperature, salinity) and ERA5 from the Copernicus Climate Data Store (precipitation, air temperature, air pressure). Tides come from FES2022, tropical cyclones from IBTrACS and water depth from GMRT and GEBCO. See [Variables & sources](data/variables-and-sources.md).

### What period does the data cover?

It depends on the variable, from 1980 for waves to the last ten years for ERA5 variables. See the table in [Variables & sources](data/variables-and-sources.md#the-variables).

### How accurate are the results?

They're as good as the global datasets behind them. These are well validated, but they describe a grid cell, not a precise spot. Run [data validation](analysis/data-validation.md), and for engineering design compare with local measurements.

### Can I get the raw data?

Yes. **Download Data (NetCDF)…** on a processed point gives one NetCDF file per variable. See [Download the data](data/variables-and-sources.md#download-the-data).

### Can I export charts?

Yes. In **Data Analytics**, use **Save image** (PNG), **Save CSV** or **Open as JSON**.

### Is the AI explanation reliable?

Treat it as a starting point. It's generated from the analysis results and can be wrong. Check it against the data. See the [AI & metocean disclaimer](../legal/ai-and-metocean-disclaimer.md).

### Are the map's live forecasts suitable for operations?

No. They're for orientation. Use official forecasts for operational decisions.

## Quotas and billing

### What uses my quotas?

Points (each observation point), compute (processing and planning time), storage (downloaded data) and AI (explanations, report generation and section synthesis). See [Quotas](get-started.md#quotas).

### What happens when a quota runs out?

The action that needs it stops with a message; everything else keeps working. Buy an add-on or upgrade in the Console. See [Order cart & transactions](../billing/order-cart-and-transactions.md).

## More help

- [Troubleshooting](troubleshooting.md)
- [Member Q&A](../using-konfersi/community.md#member-qa) to ask other members
- [Support tickets](../support/support-tickets.md) for private help
