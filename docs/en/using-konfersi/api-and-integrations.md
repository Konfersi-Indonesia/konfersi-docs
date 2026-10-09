---
title: API and integrations
description: What you can connect to Konfersi today, and what the public API and MCP server will offer when they launch.
tags: [api, mcp, integrations, agents, vscode]
related: [getting-started/products-and-surfaces, lab/desktop, account/security/connected-devices, trust/security]
status: published
updated: 2026-10-09
---

## What you can connect today

| Integration | Status | How |
|---|---|---|
| **Konfersi Lab extension** (VS Code, Cursor and other editors) | Available | Install the extension and sign in with your Konfersi account. See [Desktop editors](../lab/desktop/index.md) |
| **Public API** (API keys for your own scripts) | Not available yet | |
| **MCP server** (connect your own AI agent) | Not available yet | |

## Public API

Konfersi's sites (Console, Lab, Accounts) talk to the Konfersi API on your behalf, using your signed-in session. There are no API keys for customers yet, so you can't call the API from your own scripts or servers. Don't copy session tokens out of your browser to do this: they expire quickly, they give full access to your account, and sharing them breaks our [security guidance](../trust/security.md).

If you need data out of Konfersi now, use the export options in the Lab, or [contact support](../support/contact-support.md) to tell us what you'd like to automate.

## MCP server

The Konfersi MCP server will let an AI agent on your own machine work with your Lab projects and Konfersi's datasets. It is not available yet. Before launch we still need to decide:

- which tools your agent may use
- how it signs in
- how its usage counts against your plan

This page will be updated when it launches.

## Your data and connected tools

Any editor you sign in to Konfersi from appears under [Connected devices](../account/security/connected-devices.md), where you can disconnect it at any time.
