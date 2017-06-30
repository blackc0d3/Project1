var defaultTiles = 10; // default number of tiles for each player
var defaultMaxTile = 12; // maximum double number of the domino set

function DominosGame(_selectedPlayers, _numberHands){
  this.selectedPlayers = _selectedPlayers;
  this.numberHands = _numberHands;
  this._generateBoard();
  this.tiles = this._generateTiles();
  this.deckOfTiles = this._shuffleTiles();
  this.assignedTiles = this._assignTiles(defaultTiles, this.selectedPlayers);  // output of _assignTiles is an array of 2 elements
  this.extraTiles = this.assignedTiles[0];   // array of the remaining tiles after assigning the other ones to each player
  this.playersData = this.assignedTiles[1];  // assigned to each player as an object (including name, points, wonHands and the array of tiles)
  this._loadTable('scoresTable', ['name', 'wonHands', 'points'], this.playersData);
  this._usersTilesDisplay();
  this._getOneTile();
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  BoardGeneration
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
DominosGame.prototype._generateBoard = function() {
  for (var i = 1; i <= this.selectedPlayers; i++){
    var html = '';
    var html2 = '';
    html += '<div class="spinner-path-left spinner" disabled="true"></div>';
    html += '<div class="spinner-path-center spinner" disabled="true"></div>';
    html += '<div class="spinner-path-right spinner" disabled="true"></div>';
    html += '<div class="main-path-left">';
    html += '<input type="text" id="placeholder' + i +'" placeholder="Player ' + i +'" />';
    //html += '<span class="player-name-' + i + '">Player ' + i + '</span>';
    html += '<br>';
    html += '<span class="player-tiles>">Tiles:</span>';
    html += '</div>';
    html += '<div class="main-path-center" disabled="true"></div>';
    html += '<div class="main-path-right"></div>';

    html2 += '<div class="main-path-left">';
    html2 += '<input type="text" id="placeholder' + i +'" placeholder="Player ' + i +'" />';
    //html2 += '<span class="player-name-' + i + '">Player ' + i + '</span>';
    html2 += '<br>';
    html2 += '<span class="player-tiles>">Tiles:</span>';
    html2 += '</div>';
    html2 += '<div class="main-path-center" disabled="true"></div>';
    html2 += '<div class="main-path-right"></div>';
    html2 += '<div class="spinner-path-left spinner" disabled="true"></div>';
    html2 += '<div class="spinner-path-center spinner" disabled="true"></div>';
    html2 += '<div class="spinner-path-right spinner" disabled="true"></div>';

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
  for (var x = 0; x <= defaultMaxTile; x++){
    for (var y = 0; y <= x; y++){
      tiles.push([x,y]);
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
  for (var i=1; i<= selectedPlayers; i++){
    playerTiles = extraTiles.splice(0, defaultTiles);
    playersData.push({ name:'player '+ i, wonHands: '0', points: '0', tiles:[playerTiles]});
  }
  return [extraTiles, playersData];
};

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  Displaying users tiles
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

DominosGame.prototype._usersTilesDisplay = function() {
  for (var i=1; i<= this.selectedPlayers; i++){
    $('<div class="user-dominos display' + i + ' hide-display"><div class="upper-row" id="upper-row-users' + i + '"></div><div class="lower-row" id="lower-row-users' + i + '"></div></div>)').appendTo('.displays');
  // Assign user's tiles to some of this empty divs
    var htmlTileNumber = '';
    var htmlTileNumber2 = '';
    var indexUserTileX = NaN;
    var indexUserTileY = NaN;
    turn = 1;
    for( var k = 0; k < 5; k++){
      indexUserTileX = parseInt(this.playersData[i-1].tiles[0][k][0]);
      indexUserTileY = parseInt(this.playersData[i-1].tiles[0][k][1]);

      if (indexUserTileX === this.numberHands && indexUserTileY === this.numberHands){
        turn = i;
      }
      htmlTileNumber += '<div class="tile users-display" data-left="'+ indexUserTileX + '" data-right="' + indexUserTileY + '"><div class="full-tile"><img class="tile-left" src="images/' + indexUserTileX + '-bw.png"><img class="tile-right" src="images/' + indexUserTileY + '-bw.png"></div></div>';
      $('#upper-row-users' + i).html(htmlTileNumber);
    }

    for (var t = 5; t < 9; t++){
      $('#upper-row-users' + i).append('<div class="empty-tile users-display"></div>');
    }

    for( var u = 5; u < 10; u++){
      indexUserTileX = parseInt(this.playersData[i-1].tiles[0][u][0]);  //[0] jugador //[0] array en tiles //[1] índice del elemento (oiriginalmente 10)  // [0] - x [1] - y
      indexUserTileY = parseInt(this.playersData[i-1].tiles[0][u][1]);

      if (indexUserTileX === this.numberHands && indexUserTileY === this.numberHands){
        turn = i;
      }

      htmlTileNumber2 += '<div class="users-display empty-tile tile" data-left="'+ indexUserTileX +'" data-right="'+ indexUserTileY +'"><div class="full-tile"><img class="tile-left" src="images/'+ indexUserTileX +'-bw.png"><img class="tile-right" src="images/'+ indexUserTileY +'-bw.png"></div></div>';
      $('#lower-row-users'+i).html(htmlTileNumber2);
    }
    for (var e = 5; e < 9; e++){
      $('#lower-row-users'+i).append('<div class="users-display empty-tile"></div>');
    }
  }
  $(".display" + turn).removeClass("hide-display");
  $("#placeholder"+turn).addClass("placeholder-turn");

   $('.full-tile').attr('draggable','true').attr('ondragstart','drag(event)')


};

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Drop and Drag
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    console.log("event", event);
}


function drag(event) {
  console.log("event in drag", event);
}





// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  Remaining extra tiles
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
DominosGame.prototype._getOneTile = function (){

var emptyCell = '';
var tileToMove = '';
var tileToMoveEdgeX = ''; // x
var tileToMoveEdgeY = ''; // y
that = this;
if (this.extraTiles.length !== 0){
  $('#remainingTiles').dblclick(function() {
    tileToMove = that.extraTiles.pop();
    tileToMoveEdgeX = tileToMove[0]; // x
    tileToMoveEdgeY = tileToMove[1]; // y
  emptyCell = $(".empty-tile:not(:has(*))")[0];  // check the names used at the end
  $(emptyCell).html("<div class='full-tile'><img class='tile-left' src='images/" + tileToMoveEdgeX + "-bw.png'><img class='tile-right' src='images/" + tileToMoveEdgeY + "-bw.png'></div>");
}.bind(this));
}
else {
  $("#remainingTiles").prop('disabled', true);
}
};

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  Table of results
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// ********* Creation *********
DominosGame.prototype._loadTable = function (tableId, fields, data) {
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

var dominosGame = null;   // needs to be moved inside
$(document).ready(function(){




  $("#newGame").on("click", function(){
    var selectedPlayers = parseInt($("#numberPlayers").val());
    var numberHands = parseInt($("#sizeGame").val());
    $("#numberPlayers").prop('disabled', true);
    $("#sizeGame").prop('disabled', true);
    $("#newGame").prop('disabled', true);
    dominosGame = new DominosGame(selectedPlayers, numberHands);
    });

  $("#resetGame").on("click", function(){
    $('.table-top').children().remove();
    $('.table-bottom').children().remove();
    $('#scoresTable tr').remove();
    $('#scoresTable').html('<tr><td>There are no players...</td></tr>');
    $("#numberPlayers").prop('disabled', false);
    $("#sizeGame").prop('disabled', false);
    $("#newGame").prop('disabled', false);
    $('#numberPlayers').val('2');
    $('#sizeGame').val('12');
    $('.tile').remove();
    $('.empty-tile').remove();
    $('#remainingTiles').unbind("dblclick");
    $('.displays').children().remove();
  });
});
