describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100.00;
      tipAmtInput.value = 20.00;
    });
  
    it('should add payment info to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(Number(allPayments['payment' + paymentId].billAmt)).toEqual(100.00);
      expect(Number(allPayments['payment' + paymentId].tipAmt)).toEqual(20.00);
      expect(Number(allPayments['payment' + paymentId].tipPercent)).toEqual(20);
    });

    it('should return a new payment object on createCurPayment()', function () {
      const curPayment = createCurPayment();
      expect(Number(curPayment.billAmt)).toEqual(100.00);
      expect(Number(curPayment.tipAmt)).toEqual(20.00);
      expect(Number(curPayment.tipPercent)).toEqual(20);
    });

    it('should append a new payment (bill, tip, and tip %) to table on appendPaymentTable()', function () {
      submitPaymentInfo();

      const firstTr = paymentTbody.getElementsByTagName('tr')[0];
      const billAmtTd = firstTr.getElementsByTagName('td')[0];
      const tipAmtTd = firstTr.getElementsByTagName('td')[1];
      const tipPercentTd = firstTr.getElementsByTagName('td')[2];
      expect(billAmtTd.textContent).toEqual("$100");
      expect(tipAmtTd.textContent).toEqual("$20");
      expect(tipPercentTd.textContent).toEqual("20%");
    });

    it('should update the shift summary table in updateSummary()', function () {
      submitPaymentInfo();
      
      const billAmtTd = summaryTds[0];
      const tipAmtTd = summaryTds[1];
      const tipPercentTd = summaryTds[2];
      expect(billAmtTd.textContent).toEqual("$100");
      expect(tipAmtTd.textContent).toEqual("$20");
      expect(tipPercentTd.textContent).toEqual("20%");
    });
  
    afterEach(function() {
      billAmtInput.value = "";
      tipAmtInput.value = "";
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = '';
      for (td of summaryTds) {
        td.innerHTML = "";
      }
    });
  });
  