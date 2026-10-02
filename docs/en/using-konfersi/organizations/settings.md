---
title: Organization settings
description: For owners — edit the organization's profile, verify email domains, choose how people join, approve requests, set up single sign-on and review activity.
tags: [organization, owner, settings, domain, dns, sso, openid connect, join request, audit]
related: [using-konfersi/organizations, using-konfersi/organizations/members-and-invitations, account/profile]
status: published
updated: 2026-10-01
---

Only owners see **Settings** and **Activity** in an [organization](index.md).

## Organization profile

Under **Settings → Profile**, owners edit the organization's **Name**, **Website**, **Type**, **Sector**, **Size**, **Location** and **Description**, then select **Save**. On the organization's page header, owners can also add or change the logo and header image.

These details are shown to members and on invitations. Name, website, type, sector, size and location also appear on the profile of every member who uses the organization's details, and update there when you save. See [Your profile](../../account/profile.md#organization-information).

## Email domains and joining rules

Verifying your work email domain, such as `example.com`, lets you decide how people with that email join, and is required before you can turn on single sign-on.

### Verify a domain

1. Under **Email domains**, select **Add domain** and enter the domain.
2. Add the TXT record shown (its **Name** and **Value**) at your DNS provider. If your DNS is on Cloudflare, the Console offers a shortcut to add the record there.
3. Select **Verify now**. DNS changes can take a few minutes to appear; select **Check again** if the first check doesn't find the record.

A domain shows one of these states:

| State | Meaning |
|---|---|
| **Not verified** | The TXT record hasn't been found yet |
| **Verified** | The record was found, or Konfersi verified the domain for you |
| **Lapsed** | The record went missing. Konfersi re-checks verified domains daily and marks one as lapsed after three failed checks. Restore the record and verify again |

A domain can be verified by only one organization. Public email domains, such as gmail.com or outlook.com, can't be added.

### Choose how people join

Each verified domain has its own joining rule:

| Rule | What happens |
|---|---|
| **Invitation only** | Only people an owner invites can join |
| **Ask an owner to approve** | Anyone with a verified email on the domain can ask to join; owners approve or reject each request |
| **Join automatically** | Anyone with a verified email on the domain joins as a contributor as soon as they sign in |

Someone an owner removed doesn't rejoin automatically or by request; an owner has to invite them again.

Removing a domain stops new people joining through it and stops single sign-on accepting it. Current members stay members.

## Requests to join

When a domain uses **Ask an owner to approve**, requests appear under **Requests to join**, showing how the person signed in (single sign-on, verified email or social sign-in).

- **Approve** adds them as a contributor.
- **Reject** tells them the request wasn't approved, with an optional reason. They can't ask again for 30 days, but you can still invite them.

People can cancel their own pending request from **Organization → Your invitations and requests**.

## Single sign-on

Single sign-on lets people on your verified domains sign in to Konfersi with your company's OpenID Connect provider.

1. Verify at least one email domain first.
2. Under **Single sign-on**, select **Copy redirect URI** and register it with your identity provider.
3. Enter your provider's **Issuer URL** and select **Fetch configuration** to fill in the endpoints automatically, or enter the **Authorization endpoint**, **Token endpoint** and **Userinfo endpoint** yourself.
4. Enter the **Client ID** and **Client secret** from your provider. Adjust **Scopes** if needed.
5. Tick **Offer single sign-on at the Konfersi login**, then save.

People who enter an email on a verified domain at the Konfersi sign-in page are then offered your organization's sign-in. Who may use it follows the domain's joining rule: with **Invitation only**, just members and invited people can sign in.

The saved client secret is never shown again. Leave the field unchanged to keep it. Selecting **Remove** turns single sign-on off: members sign in with their usual Konfersi method again.

## Activity

**Activity** is a permanent record of changes to the organization: members invited, joining, leaving or changing roles; domains added, verified or lapsed; single sign-on changes and sign-ins; projects shared or unshared; and profile edits. Filter it by **Members**, **Domains**, **Sign-in**, **Projects** or **Organization**, and select **Load more** to go further back. Automatic changes are shown as made by Konfersi.
