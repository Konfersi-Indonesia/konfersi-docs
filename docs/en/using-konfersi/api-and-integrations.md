---
title: API and integrations
description: What you can connect to Konfersi today, including AI assistants over MCP, and what the public API will offer when it launches.
tags: [api, mcp, integrations, agents, vscode]
related: [using-konfersi/ai-assistants-mcp, getting-started/products-and-surfaces, lab/desktop, account/security/connected-devices, trust/security]
status: published
updated: 2026-10-10
---

## What you can connect today

| Integration | Status | How |
|---|---|---|
| **Konfersi Lab extension** (VS Code, Cursor and other editors) | Available | Install the extension and sign in with your Konfersi account. See [Desktop editors](../lab/desktop/index.md) |
| **Public API** (API keys for your own scripts) | Not available yet | |
| **MCP servers** (connect your own AI assistant) | Available | Create a token in the Console and add Konfersi to your assistant. See [Use Konfersi with AI assistants (MCP)](ai-assistants-mcp.md) |

## Public API

Konfersi's sites (Console, Lab, Accounts) talk to the Konfersi API on your behalf, using your signed-in session. There are no API keys for customers yet, so you can't call the API from your own scripts or servers. Don't copy session tokens out of your browser to do this: they expire quickly, they give full access to your account, and sharing them breaks our [security guidance](../trust/security.md).

If you need data out of Konfersi now, use the export options in the Lab, or [contact support](../support/contact-support.md) to tell us what you'd like to automate.

## MCP servers

AI assistants such as Claude Code, Claude Desktop and Cursor can search these docs and work with your metocean projects through Konfersi's MCP servers. You create a personal token in the Console, choose what it may do and which projects it covers, and revoke it at any time. Runs your assistant starts use your plan's quota, the same as in the Lab. See [Use Konfersi with AI assistants (MCP)](ai-assistants-mcp.md).

## Your data and connected tools

Any editor you sign in to Konfersi from appears under [Connected devices](../account/security/connected-devices.md), where you can disconnect it at any time.
