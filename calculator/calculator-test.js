
it('should calculate the monthly rate correctly', function () {
  const amount = 500000;
  const years = 10;
  const rate = 0.06;
  const values = {amount, years, rate};
  const monthlyPayment = calculateMonthlyPayment(values);
  expect(monthlyPayment).toEqual(5551.03);
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
