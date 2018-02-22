const methodData = [
  {
    supportedMethods: ["visa"],
  },
];

const details = {
  total: {
    label: "Total due",
    amount: { currency: "USD", value: "1000.00" },
  }
}

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
