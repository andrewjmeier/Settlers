var inherits = require('util').inherits;
var TableTop = require('../lib/TableTop/bundle');


function SettlementToken(player) {
  TableTop.Token.call(this, player);
};

inherits(SettlementToken, TableTop.Token);

module.exports = SettlementToken;