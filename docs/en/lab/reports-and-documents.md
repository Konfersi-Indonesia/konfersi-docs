---
title: Reports & project documents
description: Fill in the project details, briefing, operations and risk assessment in Konfersi Lab, and generate the Metocean Design Basis report as a Word document.
tags: [lab, report, docx, word, metocean design basis, briefing, risk assessment, planning, project details, ai]
related: [lab/analysis, using-konfersi/mission-planning, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-10-09
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

Lab produces a **Metocean Design Basis** report as a Word document (`.docx`) for one observation point. Open **Report Generation** from the activity bar, the Lab menu's tools, or **Open Report Generation** in the Command Palette. It opens as an editor tab.

1. Choose the **Observation point**. If the project has no points yet, add one on the map first.
2. Under **Sections**, choose what goes in the report. **All**, **Ready only** and **None** select quickly. Lab remembers your choice for the project.
   Each section shows its state:
   - **Data ready**, or **No analysed data at this point**. Process the point first.
   - **AI text ready**, or **AI text not synthesized yet**.
   - **Standard text** (fixed wording) or **Charts from analyses**.
3. Optional: pick a section and select **Synthesize with AI** to have AI write its text from the point's analyses. Read the result under **Section text**, or select **Open as Markdown**. **Synthesize again** rewrites it. A section that isn't synthesized appears in the report as "Section Not Yet Ready".
4. Select **Generate Word report**. Progress is shown and you can **Cancel**. If some included sections have no data or AI text, Lab tells you how many before it marks them as not ready in the report.
5. When **Report … is ready**, select **Download** and save the `.docx`.

Earlier reports are listed under **Generated reports**; select **Download .docx** to get one again.

The report contains the project profile, the analyses' charts and tables, and standard sections such as limitations, reliance and units. Edit it in Word before you share it.

<scalar-callout type="warning">AI-written text must be checked by a qualified person before it's relied on or shared. See the [AI & metocean disclaimer](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>
