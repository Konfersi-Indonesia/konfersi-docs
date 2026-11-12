---
title: Shared courses
description: Find your courses in an organization, and how an organization's billing manager buys course seats and gives them to members.
tags: [organization, courses, seats, billing manager, enrol]
related: [using-konfersi/organizations, using-konfersi/courses, billing/payments]
status: published
updated: 2026-11-12
---

Open **Organization → Shared Courses** in the Console side menu. The section has two parts: your own courses, and the organization's course seats.

## Your courses

**Shared courses** lists the courses you are enrolled in, with their status (**Awaiting payment** or **Enrolled**). Select **Browse marketplace** to find more. See [Courses](../courses.md).

## Course seat pools

An organization can buy seats on a course for its members. Members who get a seat join the course without paying.

Only the organization's **billing manager** can buy and manage seats. Everyone else sees who the billing manager is, and the controls are turned off.

### Buy seats (billing manager)

1. Under **Buy seats**, choose the **Course**, the **Ticket** and the number of **Seats**. The **Price per seat** is shown; the total with tax is shown when you pay.
2. Select **Buy seats**. Konfersi creates the order and opens it in **Payment & Billing → Transactions**, where the payment window opens. See [Payments](../../billing/payments.md).

The seats are priced in the billing manager's billing currency. Once the order is paid, a pool for those seats appears under **Course seat pools**, showing the course, how many seats were bought and when, and how many are in use.

### Give and free seats (billing manager)

- To give a seat, choose a member and select **Assign seat**. The member is enrolled in the course. When every seat is in use, the pool shows **All seats are taken.**
- To take a seat back, select **Free seat** next to the member and confirm. Their enrolment in the course is cancelled, and the seat can go to someone else. A seat whose holder has already attended can't be freed.

### Change the billing manager (owners)

By default, the billing manager is the organization's earliest owner. If the billing manager leaves, the role passes to the earliest remaining owner. Owners can choose another billing manager under **Settings → Billing manager**. See [Organization settings](settings.md).
