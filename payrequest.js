const methodData = [
  {
    supportedMethods: ["basic-card"],
  },
];

const details = {
  total: {
    label: "Total due",
    amount: { currency: "USD", value: "1000.00" },
  }
}

// const creditCardFee = {
//   label: "Credit card processing fee",
//   amount: { currency: "USD", value: "3.00" },
// };

// const debitCardFee = {
//   label: "Debit card processing fee",
//   amount: { currency: "USD", value: "6.00" },
// };

// // Modifiers apply when the user chooses to pay with
// // a credit card.
// const modifiers = [
//   {
//     additionalDisplayItems: [creditCardFee],
//     supportedMethods: ["basic-card"],
//     total: {
//       label: "Total due",
//       amount: { currency: "USD", value: "500.00" },
//     },
//     data: {
//       supportedTypes: ["credit"],
//     },
//   },
//   {
//     additionalDisplayItems: [debitCardFee],
//     supportedMethods: ["basic-card"],
//     total: {
//       label: "Total due",
//       amount: { currency: "USD", value: "2000.00" },
//     },
//     data: {
//       supportedTypes: ["debit"],
//     },
//   }
// ];
// Object.assign(details, { modifiers });

async function doPaymentRequest() {
  try {
    const request = new PaymentRequest(methodData, details);
    // See below for a detailed example of handling these events
    const response = await request.show();
    await response.complete("unknown");
  } catch (err) {
    console.error("from catch", err);
  }
}
