---
title: Console & projects
description: Create, open, share and manage projects in the Konfersi Console, and open them in Lab.
tags: [console, projects, plans, collaboration]
related: [using-konfersi/project-sharing, using-konfersi/lab-workspace, billing/plans-and-pricing, using-konfersi/mission-planning]
status: published
updated: 2026-10-09
---

The Console at [app.konfersi.com](https://app.konfersi.com) is where you organise your work. Everything you do in Konfersi happens inside a **project**. Each project has its own plan, its own quotas and its own people. This page shows you how to create a project, find your way around it and share it.

## Find your way around

The side menu has these areas:

- **Dashboard**: your recent projects, recent activity, usage at a glance, what **Needs your attention**, and our newest articles.
- **Lab Project**: **My Projects** (every project you own or have been invited to) and **Project Plans & Add-ons**.
- **Courses**: the course **Marketplace** and **My Courses**. See [Courses](courses.md).
- **Community**: **Article Discussions** and **Member Q&A**. See [Community](community.md).
- **Organization**: your team's members, shared projects and settings, if you belong to one. See [Organizations](organizations/index.md).
- **Payment & Billing**: your **Order Cart** and **Transactions**. See [Order cart & transactions](../billing/order-cart-and-transactions.md).
- **Profile & Settings**: **My Profile** and **Security**. See [Your profile](../account/profile.md) and [Security](../account/security/index.md).
- **Console Guides** and **Support**. See [Support tickets](../support/support-tickets.md).

The first time you open the Console, a [welcome guide](console-guides.md) offers a tour (**Take a Tour**), profile settings (**Settings**) and a shortcut to create your first project (**Create**).

## Create a project

1. Go to **Lab Project → My Projects** and select **Create New Project**.
2. **Project Information**: enter a **Project Title**. This is required. Adding a **Description** is optional. Select **Continue**.
3. **Tags**: search for existing tags, or type a new one and select **Create New**. You can add up to 5 new tags. Select **Continue**, or select **Skip for Now** to add tags later.
4. **Finish Setup**: choose a plan card. Select **See Detail Benefits** to see what each plan includes. Prices are shown excluding VAT.
5. Select **Preview Setup** and check the **Preview Project Setup** summary.
6. Finish:
   - For the free trial plan, select **Finish Setup**. The project is created straight away.
   - For a paid plan, select **Proceed Payment** to configure and pay now, or **Add to Cart** to pay later from **Order Cart**.

<scalar-callout type="info">You can create only one free trial project per account. After you've used it, including if you later upgrade that project, the free trial card shows **Already Used**. Pick another plan instead.</scalar-callout>

Plan names, what each plan includes, and current prices come from the live catalogue and are shown in the Console at checkout. For an overview, see [Plans & pricing](../billing/plans-and-pricing.md). For checkout, see [Payments](../billing/payments.md).

![The Create New Project form in the Console](../../../assets/screenshots/en/console-create-project.png)

## Find and open projects

On **My Projects** you can:

- Search with **Search your Projects...**.
- Sort by **Last Viewed**, **Last Updated**, **Created** or **Name A-Z**.
- Switch between the grid view and the list view.

To open a project's details, use the project's menu and choose **Detail**. To go straight to Lab, choose **Lab Platform**, or double-click the project.

![The Projects Management list in the Console](../../../assets/screenshots/en/console-projects.png)

## Inside a project

A project's detail page shows:

- **Project Overview**: the **Project Slug**, creation date, **Current Plan**, description and tags.
- **Quick Access Lab Platform**: the button that opens this project in Lab.
- **Documents** and **Project Activity**: the files in the project and a log of recent actions.
- **Quota Monitoring**: how much of the plan's allowances you've used, such as storage, compute hours and AI requests.
- **Upgrade Plan** and **Buy Add-Ons**: ways to get more capacity for this project.

### Quota warnings

When a project has used **80%** of a quota, a warning appears at the top of **Quota Monitoring**, for example *Storage is at 85% of its limit.* When a quota runs out, it reads *… is used up. Add more or upgrade the plan to keep working.* Use **Upgrade Plan** or **Buy Add-Ons** to get more before work stops. Lab access time, the owner seat, assistant seats and the project-creation slot don't get warnings: the plan's end date and **Manage Project Access** cover those.

The **Dashboard** also lists the quota closest to its limit across all your projects under **Needs your attention**, for example *Demo: Jakarta Bay: Storage at 85%* with **Add an add-on or upgrade the plan before work stops.** Select it to open the project. When nothing needs you, it shows **You are all caught up**.

<scalar-callout type="neutral">Lab needs a paid plan. On the free trial plan, the Lab button reads **Upgrade plan to access Lab**. When a project's plan expires, the button is disabled and shows that the plan has expired.</scalar-callout>

### Edit a project

If you own the project, open the **⋯** menu on the detail page and choose **Edit Project**. You can change the title and description, and add or remove tags with **+ Add Tag**. Select **Save** to keep your changes, or **Discard** to cancel them.

## Share a project

Projects are private. Only the owner and invited people can open them. If the project's plan or add-ons include assistant seats, the owner can invite assistants from the **⋯** menu with **Manage Project Access**, cancel pending invitations and remove assistants. Assistants can leave a project with **Leave project**.

See [Share a project](project-sharing.md) for seats, invitations, accepting an invitation (also when you're signed in with another email) and leaving.

## Delete a project

1. On **My Projects**, open the project's menu and choose **Delete**.
2. Type `DELETE THIS PROJECT` to confirm, then select **Delete**.

<scalar-callout type="danger">Deleting a project is irreversible. All files, commits and data in the project are permanently removed.</scalar-callout>

## Troubleshooting

**"You already have a Free Trial project. Please select another plan."**
Your account has already used its free trial. Choose a paid plan.

**"Failed to load project"**
Select **Try Again**. If the project was deleted, or your access was removed, it won't open.

**The Lab button is disabled.**
The project is on the free trial plan, or its plan has expired. Use **Upgrade Plan**.

## Next steps

- [Work in Lab](lab-workspace.md)
- [Plan an offshore operation with Mission Planning](mission-planning.md)
- [Understand the data behind the analyses](metocean-data-sources.md)
