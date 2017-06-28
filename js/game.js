var defaultTiles = 10; // default number of tiles for each player

function DominosGame(_selectedPlayers, _numberHands){
  this.selectedPlayers = _selectedPlayers;
  this.numberHands = _numberHands;
  this._generateBoard();
  this.tiles = this._generateTiles();
  this.deckOfTiles = this._shuffleTiles();
  this.playersData = this._assignTiles(defaultTiles, this.selectedPlayers);
  this._loadTable('scoresTable', ['name', 'wonHands', 'points'], this.playersData);

}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  BoardGeneration
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
DominosGame.prototype._generateBoard = function() {
  for (var i = 1; i <= this.selectedPlayers; i++){
    var html = '';
    var html2 = '';
    html += '<div class="spinner-path-left"></div>';
    html += '<div class="spinner-path-center"></div>';
    html += '<div class="spinner-path-right"></div>';
    html += '<div class="main-path-left">';
    html += '<span class="player-name-' + i + '">Player ' + i + '</span>';
    html += '<br>';
    html += '<span class="player-tiles>">Tiles:</span>';
    html += '</div>';
    html += '<div class="main-path-center"></div>';
    html += '<div class="main-path-right"></div>';

    html2 += '<div class="main-path-left">';
    html2 += '<span class="player-name-' + i + '">Player ' + i + '</span>';
    html2 += '<br>';
    html2 += '<span class="player-tiles>">Tiles:</span>';
    html2 += '</div>';
    html2 += '<div class="main-path-center"></div>';
    html2 += '<div class="main-path-right"></div>';
    html2 += '<div class="spinner-path-left"></div>';
    html2 += '<div class="spinner-path-center"></div>';
    html2 += '<div class="spinner-path-right"></div>';

    if (i === 1) {
      $('#top > .player-left').html(html);
    } else if (i === 2) {
      $('#top > .player-mid-left').html(html);
    } else if (i === 3) {
      $('#top > .player-mid-right').html(html);
    } else if (i === 4) {
      $('#top > .player-right').html(html);
    } else if (i === 5) {
      $('#bottom > .player-left').html(html2);
    } else if (i === 6) {
      $('#bottom > .player-mid-left').html(html2);
    } else if (i === 7) {
      $('#bottom > .player-mid-right').html(html2);
    } else if (i === 8) {
      $('#bottom > .player-right').html(html2);
    }

    html = '';
    html2 = '';
  }
};

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  Tiles generation
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
DominosGame.prototype._generateTiles = function() {
  var tiles = [];
  for (var x = 0; x <= this.numberHands; x++){
    for (var y = 0; y <= x; y++){
      tiles.push('('+ x + ',' + y + ')');
    }
  }
  return tiles;
};

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  Shuffle tiles
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
DominosGame.prototype._shuffleTiles = function (){
  deckOfTiles = this.tiles;
  var remainingTiles = deckOfTiles.length;
  var reducedDeck;
  var pickTile;

  while (remainingTiles){
    pickTile =  Math.floor(Math.random()*remainingTiles--);
    reducedDeck = deckOfTiles[remainingTiles];
    deckOfTiles[remainingTiles] = deckOfTiles[pickTile];
    deckOfTiles[pickTile]=reducedDeck;
  }
  return deckOfTiles;
};

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  Assigning tiles to players
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
DominosGame.prototype._assignTiles = function (defaultTiles, selectedPlayers){
  extraTiles = this.deckOfTiles;
  var playerTiles=[];
  var playersData = [];
  console.log(selectedPlayers);
  for (var i=1; i<= selectedPlayers; i++){
    playerTiles = extraTiles.splice(0, defaultTiles);
    playersData.push({ name:'player '+ i, wonHands: '0', points: '0' });
  }
  return playersData;
};

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  Table of results
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// ********* Creation *********
DominosGame.prototype._loadTable = function (tableId, fields, data) {
  console.log("tableId",tableId);
  console.log("fields",fields);
  console.log("data",data);
    var rows = '';
    $.each(data, function(index, item) {
        var row = '<tr>';
        $.each(fields, function(index, field) {
            row += '<td>' + item[field+''] + '</td>';
        });
        rows += row + '<tr>';
    });
    $('#' + tableId).html(rows);
};
 // ********* Updating *********



// //****************************************************************** // //
// //****************************************************************** // //
// //**************   HTML/CSS Interactions   ************************* // //
// //****************************************************************** // //
// //****************************************************************** // //

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  Generation of the layout according to the number of players
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


$(document).ready(function(){

  var dominosGame = null;
  document.getElementById("newGame").addEventListener("click", function(){
    var selectedPlayers = parseInt($("#numberPlayers").val());
    var numberHands = parseInt($("#sizeGame").val());
    dominosGame = new DominosGame(selectedPlayers, numberHands);




    // dominosGame = null;
    // remove listener
    // disable button
    });
  });
