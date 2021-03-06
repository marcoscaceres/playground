const methodData = [
  {
    supportedMethods: ["basic-card"],
  },
];
// test 
const details = {
  total: {
    label: "Total due",
    amount: { currency: "USD", value: "1000.00" },
  }
}

const allCardsFee = {
  label: "ALL CARDS FEE",
  amount: { currency: "USD", value: "5.00" },
};

const creditCardFee = {
  label: "Credit card processing fee",
  amount: { currency: "USD", value: "3.00" },
};

const debitCardFee = {
  label: "Debit card processing fee",
  amount: { currency: "USD", value: "6.00" },
};

// Modifiers apply when the user chooses to pay with
// a credit card.
const modifiers = [
  {
    additionalDisplayItems: [allCardsFee],
    supportedMethods: ["basic-card"],
    total: {
      label: "ALL CARD TOTAL",
      amount: { currency: "USD", value: "3333.00" },
    },
  },
  {
    additionalDisplayItems: [debitCardFee],
    supportedMethods: ["basic-card"],
    data: {
      supportedTypes: ["debit"],
      supportedNetworks: ["mastercard"],
    },
    total: {
      label: "DEBIT CARD FEE",
      amount: { currency: "USD", value: "1111.00" },
    },
  },
  {
    additionalDisplayItems: [creditCardFee],
    supportedMethods: ["basic-card"],
    data: {
      supportedTypes: ["credit"],
      supportedNetworks: ["visa"],
    },
    total: {
      label: "VISA 1",
      amount: { currency: "USD", value: "2222.00" },
    },
  },
];
Object.assign(details, { modifiers });

async function doPaymentRequest() {
  try {
    const request = new PaymentRequest(methodData, details);
    // See below for a detailed example of handling these events
    const response = await request.show();
    await response.complete("unknown");
  } catch (err) {
    console.error(err);
  }
}
