var inherits = require('util').inherits;
var TableTop = require('tabletop-boardgames');


function CityToken(player) {
  TableTop.Token.call(this, player);
};

inherits(CityToken, TableTop.Token);

module.exports = CityToken;