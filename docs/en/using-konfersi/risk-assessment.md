---
title: Risk Assessment
description: Build a hazard register for your marine operations in Konfersi Lab — score risk, select and reject controls, and demonstrate ALARP.
tags: [risk-assessment, hazid, alarp, mae, controls]
related: [using-konfersi/mission-planning, using-konfersi/lab-workspace, legal/ai-and-metocean-disclaimer]
status: published
updated: 2026-10-02
---

Risk Assessment is the **risk register** of your project. For each hazard you record what can go wrong, how likely and how severe it is, which controls you select (and which you reject, and why), and whether the remaining risk is as low as reasonably practicable (ALARP). It follows the structure of NOPSEMA's guidance notes on hazard identification, risk assessment, ALARP and control measures.

<scalar-callout type="info">Risk Assessment is an activity in **Konfersi Lab**. Open your project from the Console, then pick **Risk Assessment** in the activity bar. It works best after you have set up [Mission Planning](mission-planning.md): its operations, trips, tasks and activities become the checklist of what to assess.</scalar-callout>

## Where things are

| Place | What it holds |
|---|---|
| **Activity bar › Risk Assessment** | Status, **Coverage** of your Mission Planning sequence (select an activity to assess it), the **Register** grouped by rating, the **Controls** library, and removed hazards |
| **Risk Assessment tab** | **Overview** · **Register** (with the hazard editor) · **Controls** · **Evidence** · **ALARP board** · **Report** |
| **Control › Risk Assessment** | The Phase 1 checklist, the hazard you selected, and quick actions |

## 1. Identify hazards

Add a hazard from the Register, from an activity under Coverage, or from **Library suggestions** (matches from Konfersi's hazard library — not AI; you confirm and complete each one). For each hazard record:

- **Where it applies** — the project, or an operation, trip, task or activity of your plan.
- **Hazard, cause and hazardous event**, then the **consequence**.
- **Major accident event?** — Yes, Potential or No. For Yes or Potential, add the screening rationale and escalation notes.

## 2. Score the risk

Risk is **Probability × Frequency × Severity**, each from 1 to 5 (score up to 125): up to 15 Low, up to 40 Moderate, up to 75 High, above that Critical.

- **Inherent risk** is judged on the hazard itself. Existing or planned controls only change the **residual** risk.
- Record the **basis, assumptions, uncertainty and confidence** behind your scores. When uncertainty is High, add a justification before claiming ALARP.

## 3. Controls

For each hazard, **select** the controls you rely on and keep the **rejected options** with a reason. Each control has a place in the hierarchy — **elimination, substitution, engineering, administrative, PPE**. Konfersi warns you when a more effective option was rejected while only less effective ones were selected.

Mark a control **critical** to give it a performance standard (aim, functionality, availability, reliability, survivability, dependency, compatibility) in the **Controls** tab. A **planned** control needs an implementation commitment before you can claim the residual risk.

## 4. Residual risk and ALARP

Score the residual risk, then set the ALARP status: **Open**, **ALARP claimed** or **Not ALARP**, with the options considered and your ALARP statement. Konfersi refuses a claim that skips a required step, and tells you which:

- an MAE needs a rationale, escalation notes, and a rejected option or an explicit "no further practicable option";
- High uncertainty needs a justification;
- planned controls need an implementation commitment.

Hazards are never deleted silently: removing one asks for a reason and keeps it in the removed log.

## 5. Evidence from Mission Planning

The **Evidence** tab shows metocean screening from your latest Mission Planning run (how often the weather stops the work at your site) and lets you attach it to a hazard. **Weather hazard screening** scores weather hazards per environment and suggests risk control options (it uses CPU hours). This is **evidence** for the register — not a full FSA or NOPSEMA demonstration on its own.

## 6. Checklist and review

The **Overview** shows coverage of your plan and the Phase 1 checklist (every activity assessed, complete hazard chains, scores, controls, MAE screening, confirmed suggestions, no rule problems). When every check is green, a person records a **review** (their role and a note). Any later change clears the review, so the reviewed status always matches what was reviewed.

## 7. Report

**Report** shows the register, the ALARP board, rejected options and the checklist. Copy it, download it as Markdown, or **Export register CSV** for a spreadsheet. Teammates in the project work on the same register; if two of you change the document settings at once, you are asked to reload or overwrite.

<scalar-callout type="warning">Risk Assessment supports your safety process; it does not replace professional judgement, a certified site-specific study or regulatory review. NOPSEMA's guidance notes are authoritative. Read the [AI & metocean disclaimer](../legal/ai-and-metocean-disclaimer.md).</scalar-callout>
