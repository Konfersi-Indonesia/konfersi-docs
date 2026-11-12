---
title: Payments
description: How paying for Konfersi courses works through Midtrans, which currency and tax apply, which methods are supported, and what each payment status means.
tags: [billing, payments, midtrans, qris, virtual-account, card, currency, tax, ppn]
related: [billing/order-cart-and-transactions, using-konfersi/courses, support/contact-support]
status: published
updated: 2026-11-12
---

Konfersi takes payments through **Midtrans**, an Indonesian payment gateway. You pay in a Midtrans payment window, and Konfersi is told the result directly by Midtrans. This page explains the steps, the currency and tax, the payment methods and what each status means.

## Paying for a course

1. In the Console, open **Courses → Marketplace**, open a course, choose a ticket and select **Enroll**. See [Courses](../using-konfersi/courses.md).
2. Fill in the attendee details and any documents the course asks for.
3. Choose a payment method under **Select Payment Method**.
4. Check the **Summary**: the ticket price, tax (PPN) and **Grand Total**. Then select **Continue to payment**.
5. Konfersi creates your order and opens it under **Payment & Billing → Transactions**. The Midtrans payment window opens there. Finish the payment, for example by scanning the QR code or paying the virtual account number from your bank.
6. When Midtrans confirms the payment, your order is marked **Completed**, your enrolment in **Courses → My Courses** shows **Enrolled**, and you get a confirmation email.

If you close the payment window before paying, the order stays **Awaiting Payment**. You can pay it later from the order page, from **Transactions** with **Continue Payment**, or with **Complete payment** on the course.

To pay for several course tickets in one payment, save them to the Order Cart and check out from there. See [Order cart & transactions](order-cart-and-transactions.md).

## Currency, tax and current prices

**Current prices are shown in the Console**, on the course page, the enrol page and at checkout. This documentation deliberately doesn't list numbers, because they can change.

### Your billing currency

- **Every account has one billing currency**, set automatically when you create your account, from the country you give. For example, Indonesia, Malaysia and Singapore are billed in **Indonesian Rupiah (IDR)**. You see every price in the Console in that currency, with no conversion and no currency switch.
- Your profile shows it as **Billing currency**. Changing the country in your profile later **doesn't** change it. To change it, [contact support](../support/contact-support.md); every change is recorded.
- If you signed up with Google, Microsoft, GitHub or your organisation's sign-in and haven't given a country yet, the Console asks you to **Set your country** before you pay. You can't pay without one.
- Accounts created before per-account currencies were introduced keep **IDR**, which is what they were charged before.
- When an **organisation** buys course seats, the price is in the billing currency of the organisation's billing manager. See [Shared courses](../using-konfersi/organizations/shared-projects-and-courses.md).

### Prices in each currency

- Konfersi sets each course ticket's price **separately for each currency**. Prices are not converted from IDR at an exchange rate, so the amount you see is the amount you are charged.
- If a ticket has no price in your currency, you see its price in Konfersi's default currency instead. If it has neither, the course page or the cart shows **Not available in your billing currency. Contact support if you need it.** You can [contact support](../support/contact-support.md) to buy it.
- An order keeps the currency and amounts it was created with, even if prices change later. One order or checkout is always in a single currency.

### Paying and tax

- Payments in **IDR** are processed through our payment partner, Midtrans.
- **Payment in other currencies, such as USD, isn't available yet.** If your billing currency is one of them, the payment step shows **Payment in USD is not available yet. Contact support to complete this order.**, and nothing is charged. Contact us and we'll arrange your purchase.
- Value-added tax (PPN) is added on top of the price. The enrol page and checkout show the price, tax and grand total before you pay. These are an estimate: the final amount is set when your order is created and is shown on the order page.

## Supported payment methods

| Method | How you pay |
|---|---|
| **Credit/debit card** | Visa, Mastercard, JCB or American Express, entered on the Midtrans card form |
| **ATM / bank transfer (Virtual Account)** | Pay a virtual account number from your bank's ATM, mobile or internet banking |
| **QRIS / e-wallet** | Scan a QRIS code with GoPay or another QRIS-compatible e-wallet or banking app |

A few things to know:

- Each method has its own minimum and maximum transaction amount. Methods that don't accept your order's amount show their **Minimum** or **Maximum**; choose a different one.
- **Choose in the payment window** lets you pick from every method available for the amount once the Midtrans window opens.
- Card details are entered with Midtrans, not with Konfersi. If you save a card for later, Konfersi keeps only a Midtrans card token and a masked card number, never your full card number.
- Pending payments expire if they aren't completed in time. The **Transactions** page shows a countdown for pending orders.

## Payment and order statuses

Track your orders in **Payment & Billing → Transactions**. You'll see these statuses:

| Status in the Console | What it means | What to do |
|---|---|---|
| **Awaiting Payment** | The order exists and is waiting for your payment | Finish paying with **Continue Payment**. On the order page you can also **Change Payment Method** or **Cancel Order** |
| **Completed** | Midtrans confirmed the payment and your purchase is active | Nothing, you're all set |
| **Failed** | The payment was declined or failed | Place a new order, if needed with a different method |
| **Expired** | The payment window closed before you paid | Place a new order |
| **Canceled** | The order was canceled before payment | Place a new order if you still want it |

An order that failed, expired or was canceled can't be resumed. Create a new order instead. You are not charged for it.

## How payment results reach Konfersi

- Midtrans sends Konfersi a payment notification for every status change. Konfersi checks the notification's cryptographic signature before acting on it, so a forged "paid" message is rejected.
- An order is only marked **Completed** once Midtrans reports the payment as settled or captured.
- If you closed the payment window, your order may still show **Awaiting Payment** until Midtrans sends a final result. Select **Refresh status** on the order, or check **Transactions** again after a few minutes.

## Invoices and receipts

The **Transactions** page is your record of each order, showing its order ID, items, amounts and status. A completed order has **Print receipt**. If your organisation needs a formal invoice or tax document, email [support@konfersi.com](mailto:support@konfersi.com) with your order ID.

## Something went wrong?

If you were charged but your order doesn't show **Completed**, or you see a duplicate charge, contact [support@konfersi.com](mailto:support@konfersi.com). Include:

- your order ID (it starts with `ord_` and is shown on the order page and in **Transactions**)
- the email address of your Konfersi account
- the payment method and the date and time you paid
- a screenshot of your bank or e-wallet confirmation, if you have one

For refund questions, [contact support](../support/contact-support.md) with the same details.
