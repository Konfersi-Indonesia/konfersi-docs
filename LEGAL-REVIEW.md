# Legal review checklist: Terms, Privacy Policy, Refund Policy (version 2)

For the reviewing lawyer and the Direktur, before version 2 goes to production. Content owner: konfersi-team (business). Tracking: platform/konfersi-universe#258 (parent #9; decisions delegated in #15).

**What changed in version 2:** the refund rules in Terms §12.2–12.3 and the matching refund page (decided in #258). The Privacy Policy is unchanged apart from the version note. It is listed here because the decision on #258 asks for it to be reviewed together with the other two. Since then the Privacy Policy draft has gained the public profile clauses (`privacy-public-profile`) and, for platform/konfersi-universe#289, account deletion and purge, the account data export and AI CV import (`privacy-purge-export-cv-import`, see below).

**Pages:**

| Page | English | Indonesian (prevails) |
|---|---|---|
| Terms of Service | `docs/en/legal/terms.md` | `docs/id/legal/terms.md` |
| Privacy Policy | `docs/en/legal/privacy.md` | `docs/id/legal/privacy.md` |
| Refunds & cancellation (practical guide) | `docs/en/billing/refunds-and-cancellation.md` | `docs/id/billing/refunds-and-cancellation.md` |

Open items on each page are listed in its `review:` frontmatter. The id `lawyer-review-v2` stands for this checklist.

## Decisions to confirm (from #258)

- [ ] **Data controller:** PT Konfersi Metocean Climate Consultant (NIB 2009240105369). Confirm the company details in Privacy §1.1 and §15.
- [ ] **Processors:** Cloudflare (hosting, D1, R2, transactional email via Cloudflare Email Sending, network security), Midtrans (payments), Authentik and its host (staff sign-in), and Frappe Helpdesk (support tickets). Confirm the list is complete and that a data processing agreement or equivalent terms exist with each (UU PDP art. 51).
- [ ] **Course refunds:** a full refund until 7 days before the first live session, or before 20% of self-paced content has been consumed. Confirm that "consumed" measured by recorded lesson progress is acceptable evidence.
- [ ] **Lab plans/add-ons:** non-refundable once any quota is used, with pro-rated refunds only for service failure. Confirm this is consistent with UU 8/1999 (Consumer Protection), and confirm the effect of §12.6 (consumer rights not waivable).

## Points for the lawyer

- [ ] **Terms §12.2(b), default, confirm:** a self-paced course is refundable within **14 days of purchase**, and only while less than 20% of it has been consumed.
- [ ] **Terms §12.3, default, confirm:** a plan or add-on is refundable within **7 days of purchase** if none of its quota has been used.
- [ ] **Private Course:** follows its own written terms. Confirm that's sufficient.
- [ ] **Bilingual clause:** the Indonesian version prevails (UU 24/2009 on language). Confirm both versions say the same.
- [ ] **Changes clause:** at least 14 days' notice for material changes (Terms §20, Privacy §14). Confirm the notice method (email plus an in-app banner).
- [ ] **Cross-border transfers** (Privacy §5, UU PDP art. 56): team members in Japan and Cloudflare's global network. Confirm the safeguard or consent basis.
- [ ] **Course payment-orders database processor** (`privacy-course-orders-processor`, still open): name the provider before production.
- [ ] **Retention periods** (Privacy §6): 10 years for transaction records under UU 8/1997. Confirm the period is correct.
- [ ] **Breach notification:** 3 × 24 h to subjects and the authority (UU PDP art. 46). Confirm the operational owner.
- [ ] **Account purge, export and AI CV import** (`privacy-purge-export-cv-import`, #289; Privacy §2.9, §3, §4.2, §6, §9.1, §12.4):
  - 30-day grace after an account is deleted, then the hourly purge deletes or anonymises the data per the personal-data map (backend `src/lib/personal-data-map.ts`). Orders, payments, certificates and support requests are retained with a pseudonymous code. Confirm the retention basis for each, in particular certificates (art. 20(2)(c)/(f)), since they stay publicly verifiable.
  - The account-wide export exists in the API but has no button yet, so §9.1 offers it "on request". Confirm that's sufficient for art. 7 and 13.
  - AI CV import: the CV is processed once by Workers AI (Cloudflare) and never stored. A billing record (project, model, tokens, outcome) is kept and de-linked from the person at purge. Confirm the legal basis (contract, (b)) and that Cloudflare's processor terms cover Workers AI.
- [ ] Other open clauses still flagged on the Terms: `terms-6.3-risk-assessment-released`, `terms-scope-mcp-and-io-certificates`.

## Before publishing to production

- [ ] Set the effective date in the version callout on all six pages. Allow at least 14 days' notice for the Terms and Refund changes, then remove the "draft for legal review" callout.
- [ ] Remove `lawyer-review-v2` (and any other resolved ids) from `review:`.
- [ ] Notify existing users of the Terms and Refund change by email or in-app.
- [ ] Confirm the pages are linked from sign-up (Accounts: Terms and Privacy), checkout (Console: Terms and Refund Policy), and the site footer (Landing: Terms, Privacy, Refunds).
- [ ] Promote `stg` to `main` in konfersi-docs. Production serves docs from `main`.

Reviewed by: ____________________  Date: ____________  Approved by (Direktur): ____________________  Date: ____________
