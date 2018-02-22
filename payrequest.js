var supportedInstruments = [{
  supportedMethods: ['basic-card'],
  data: {
    supportedNetworks: ['visa', 'mastercard', 'amex'],
    supportedTypes: ['credit']
    //for test transactions uncomment the test flag below
    //environment: 'TEST'
  }
}];
var details = {
  total: {
    label: 'Total (USD)',
    amount: { currency: 'USD', value: '193.98' }
  },
  displayItems: [{
    label: 'Subtotal',
    amount: { currency: 'USD', value: '174.99' }
  }, {
    label: 'Taxes',
    amount: { currency: "USD", value: '18.99' },
  }],
};
var options = {
  requestPayerEmail: true
};

paymentRequest.show().then(response => {
  response.complete('success');
});

