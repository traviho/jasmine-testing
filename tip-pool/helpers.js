
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

// expects a table row element, appends a delete button as a td to the row
function appendDeleteBtn(tr) {
  let newTd = document.createElement('td');
  newTd.innerText = "X";

  newTd.onclick = event => {
    const id = event.target.parentElement.id;
    if (id in allServers) {
      delete allServers[id];
      updateServerTable();
    }
    if (id in allPayments) {
      delete allPayments[id];
      updateServerTable();
      updateSummary();
    }
    event.target.parentElement.remove();
  }

  tr.append(newTd);
}
