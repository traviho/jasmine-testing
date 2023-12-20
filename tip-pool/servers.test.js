describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should append server name and tip to table on updateServerTable()', function () {
    submitServerInfo();

    const firstTr = serverTbody.getElementsByTagName('tr')[0];
    const serverNameTd = firstTr.getElementsByTagName('td')[0];
    const tipAmountTd = firstTr.getElementsByTagName('td')[1];
    expect(serverNameTd.textContent).toEqual("Alice");
    expect(tipAmountTd.textContent).toEqual("$0.00");
  });

  afterEach(function() {
    serverNameInput.value = "";
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
