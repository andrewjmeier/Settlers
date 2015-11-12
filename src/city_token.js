var inherits = require('util').inherits;
var TableTop = require('../lib/TableTop/bundle');


function CityToken(player) {
  TableTop.Token.call(this, player);
};

inherits(CityToken, TableTop.Token);

module.exports = CityToken;