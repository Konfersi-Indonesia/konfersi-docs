---
title: Reports & project documents
description: Fill in the project details, briefing, operations and risk assessment in Konfersi Lab, and generate the Metocean Design Basis report as a Word document.
tags: [lab, report, docx, word, metocean design basis, briefing, risk assessment, planning, project details, ai]
related: [lab/analysis, using-konfersi/mission-planning, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-10-02
---

## Project Details

**Project Details** holds the project's identity and the settings analyses use. Open it from the **Project** view, the status bar menu, or **Konfersi: Open Project Details**.

| Tab | What you set |
|---|---|
| **Overview** | Plan, quotas, your role, collaborators and the points in Lab |
| **Identity** | Company or entity name, address, project type, location, description and tags. Only the project owner can edit the identity |
| **Stakeholders** | **Contacts (PIC)**: the people to reach on the client side, in order of priority |
| **Thresholds** | Extreme value methods (**Block Maxima (GEV)** and/or **Peaks Over Threshold (GPD)**) and the POT threshold for each parameter. **Fill Suggested Thresholds** gives starting values; they're only used once saved |

Select **Save** (or **Ctrl+S**/**Cmd+S**). **Discard** reloads the saved version. Lab shows who last updated the details and when.

## Planning & Risk documents

In **Konfersi Lab → Planning & Risk**:

| Document | Contents |
|---|---|
| **Project briefing** | Project identity, stakeholders and design thresholds |
| **Operations & environments** | The sequence of marine operations and their operability limits, used by planning runs |
| **Risk assessment** | Hazards, controls and residual risk |

Each opens as a document in the editor. The documents are checked against a schema as you type, so mistakes are underlined. Save with **Ctrl+S** (**Cmd+S** on Mac) to store it in Konfersi; a document that isn't valid JSON isn't saved, and Lab says why.

**Run operability planning** simulates weather windows for the saved operations at the selected point. You need at least one environment and one operation first. For the full workflow, see [Mission Planning](../using-konfersi/mission-planning.md).

## Generate the report

Lab produces a **Metocean Design Basis** report as a Word document (`.docx`) for a point.

1. Select the point to report on and make sure it's processed.
2. In **Konfersi Lab → Reports**, review the **Sections**. Each is either **charts from analyses** or **standard text**.
3. Optional: choose **Synthesize Section** on a section to have AI write its text from the analyses.
4. Choose **Generate Report (DOCX)**. When **Report … is ready**, select **Download**.

Earlier reports stay under **Documents**; choose **Download Report** on one to get it again.

The report contains the project profile, the analyses' charts and tables, and standard sections such as limitations, reliance and units. Edit it in Word before you share it.

Generating a report and synthesizing sections use your project's AI quota.

<scalar-callout type="warning">AI-written text must be checked by a qualified person before it's relied on or shared. See the [AI & metocean disclaimer](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>

The separate **Report Generation** workspace in the activity bar is still being built; use **Konfersi Lab → Reports** for now.
