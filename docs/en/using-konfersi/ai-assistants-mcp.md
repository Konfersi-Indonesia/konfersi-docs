---
title: Use Konfersi with AI assistants (MCP)
description: Connect Claude Code, Claude Desktop, Cursor and other AI assistants to Konfersi's MCP servers to search the docs and work with your metocean projects.
tags: [mcp, ai, agents, claude, cursor, api, integrations]
related: [using-konfersi/api-and-integrations, using-konfersi/console-projects, lab/analysis, billing/plans-and-pricing]
status: published
updated: 2026-10-10
---

AI assistants such as Claude Code, Claude Desktop and Cursor can work with Konfersi through **MCP** (Model Context Protocol). You give the assistant a Konfersi server address and, for your own data, a personal token. The assistant can then search the docs, read your projects and run metocean analyses for you, within the limits you choose.

## Konfersi's MCP servers

| Server | What the assistant can do | Token |
|---|---|---|
| **Docs** | Search these docs and read any page, in English or Indonesian | Not needed |
| **Metocean** | Read your projects, points, quotas and data availability; with write access, add points, fetch data and run analyses, risk and planning | Needed |
| **Report generation** | Draft and generate project reports | Coming soon |
| **Quota monitoring** | Check usage and remaining quota per project | Coming soon |

You'll find the exact server addresses for your account on the **AI assistants** page in the Console (**Profile & Settings → AI assistants**). Each one has a copy button.

## Create a token

1. In the Console, open **Profile & Settings → AI assistants** and choose **New token**.
2. Give the token a name you'll recognise later, such as the assistant and the computer it runs on ("Claude Code – work laptop").
3. Choose what it may do:
   - **Read metocean data**: view projects, points, quotas, data availability, jobs and results.
   - **Request metocean data**: also change points, fetch data and run analyses, risk and planning. These use your plan's quota (see below).
   - **Create reports** and **View quota**: for the report and quota servers, which are coming soon.
4. Choose **All my projects**, or **Only the projects I choose** and tick them.
5. Under **Expires after**, choose 7, 30, 90 (default) or 365 days.
6. Choose **Create token**.

The token (it starts with `kmcp_`) is shown **only once**, together with ready-to-paste setup for your assistant. Copy it before you close the window. If you lose it, revoke it and create a new one.

## Connect your assistant

### Claude Code

Paste the command shown after you create the token into a terminal. It looks like this, with your token in place of `<token>`:

```bash
claude mcp add --transport http konfersi-metocean <metocean server address> --header "Authorization: Bearer <token>"
```

Add the Docs server the same way. It works without the header, and with your token you get a higher rate limit.

### Claude Desktop, Cursor and other clients

Most clients read an `mcpServers` setting. Paste the JSON shown after you create the token into your client's MCP configuration, for example Cursor's `mcp.json`. It has one entry per server, each with its address and your token.

After connecting, ask your assistant something simple first, such as "List my Konfersi projects", to check it works.

## What it costs

The assistant uses the same quota as working in the Lab:

- Reading (projects, points, quotas, availability, job status) doesn't use quota.
- **Fetching data** and **extreme value, risk and planning runs** reserve 1 CPU hour each. **Time series statistics** and **workability** use 0.25 CPU hour.
- **AI explanations** use an AI request and AI tokens when they finish.

When a quota runs out, the assistant gets a clear refusal instead of a result, and you can top up from **Payment & Billing** as usual. See [Plans and pricing](../billing/plans-and-pricing.md).

## Rate limits

- **Docs** without a token: 30 requests per minute per address.
- **Docs** with any valid token, and **Metocean**: 120 requests per minute per token.

## Keep your tokens safe

- Treat a token like a password: anyone who has it can do what its scopes allow, on the projects it covers.
- Give each assistant and computer its own token, with only the scopes and projects it needs.
- Revoke a token from **Profile & Settings → AI assistants** as soon as you stop using it, or if it might have leaked. It stops working immediately.
- The AI assistants page shows when each token was last used, so you can spot ones you no longer need.

## Related

- [API and integrations](api-and-integrations.md)
- [Projects in the Console](console-projects.md)
- [Analysis in the Lab](../lab/analysis/index.md)
