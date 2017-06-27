var sizeGame = 12;  // default size of the Game

var computerTiles = [];
function generateComputerTiles(sizeGame){
  var tiles = [];
  for (var x = 0; x <= sizeGame ; x++)
    for(var y = 0; y <= x; y++)
      tiles.push(x + "_" + y);
    return tiles;
}

function numberPlayers() {
  var players = document.getElementById("selectedPlayers");
  var selectedPlayers = players.options[players.selectedIndex].value;
}

function sizeGame() {
  var hands = document.getElementById("sizeGame");
  var numberHands = hands.options[hands.selectedIndex].value;
}
/*function displayResult() {
    var x = document.getElementById("numberPlayers");
    var txt = "All options: ";
    var i;
    for (i = 0; i < x.options.length; i++) {
        txt = txt + "\n" + x.options[i].text;
    }
    alert(txt);
}*/




var playersData = [
    { name: 'player 1', wonHands: '3', points: '180' },
    { name: 'player 2', wonHands: '2', points: '320' },
    { name: 'player 3', wonHands: '1', points: '401' },
    { name: 'player 4', wonHands: '1', points: '180' },
    { name: 'player 5', wonHands: '1', points: '320' },
    { name: 'player 6', wonHands: '1', points: '401' }
];

function loadTable(tableId, fields, data) {
    var rows = '';
    $.each(data, function(index, item) {
        var row = '<tr>';
        $.each(fields, function(index, field) {
            row += '<td>' + item[field+''] + '</td>';
        });
        rows += row + '<tr>';
    });
    $('#' + tableId).html(rows);
}

loadTable('scoresTable', ['name', 'wonHands', 'points'], playersData);
