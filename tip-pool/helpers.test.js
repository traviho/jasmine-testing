describe("Helpers test (with setup and tear-down)", function() {
    it('should calculate sum of payment for a particular type (bill, tip, tip %) in sumPaymentTotal()', function () {
        // Setup
        billAmtInput.value = 100.00;
        tipAmtInput.value = 20.00;
        submitPaymentInfo();

        billAmtInput.value = 40.00;
        tipAmtInput.value = 10.00;
        submitPaymentInfo();
        
        // test logic
        expect(sumPaymentTotal('billAmt')).toEqual(140.00);
        expect(sumPaymentTotal('tipAmt')).toEqual(30.00);
        expect(sumPaymentTotal('tipPercent')).toEqual(45.00);

        // Tear-down
        billAmtInput.value = "";
        tipAmtInput.value = "";
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        for (td of summaryTds) {
            td.innerHTML = "";
        }
    });

    it('should calculate a tip percentage proportional to the bill in calculateTipPercent()', function () {
        const billAmt = 125.00;
        const tipAmt = 20.00;
        const tipPercent = 16.00;
        expect(calculateTipPercent(billAmt, tipAmt)).toEqual(tipPercent)
    });

    it('should append a new td to a tr in appendTd()', function () {
        const value = "hello world";
        const tr = document.createElement("tr");
        appendTd(tr, value);

        const td = tr.getElementsByTagName('td')[0];
        expect(td.innerText).toEqual(value);
    });
  });
  