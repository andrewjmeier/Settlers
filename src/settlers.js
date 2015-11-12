var SettlersView = require("./view/settlers_view.js");
var Board = require("./settlers_board");
var Game = require("./settlers_game");
var Player = require("./settlers_player");
var Settlement = require("./settlement_token");
var Road = require("./road_token");
var Turn = require("./settlers_turn");

var board = new Board();

var andrew = new Player("Andrew", 0);
var garrett = new Player("Garrett", 1);
var jimmy = new Player("Shane", 2);

var settlers = new Game([andrew, garrett, jimmy], board);

var turn = new Turn(settlers);

settlers.turnMap = turn;

var view = new SettlersView(settlers, turn);

view.drawBoard();