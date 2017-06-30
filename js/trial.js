// Por cambiar los otros con html y draggable -- error

DominosGame.prototype._usersTilesDisplay = function() {
  for (var i=1; i<= this.selectedPlayers; i++){
    $('<div class="user-dominos display' + i + '"><div class="upper-row" id="upper-row-users' + i + '"></div><div class="lower-row" id="lower-row-users' + i + '"></div></div>)').appendTo('.displays');

  // Assign user's tiles to some of this empty divs
  var htmlTileNumber = '';
  var htmlTileNumber2 = '';
  var indexUserTileX = NaN;
  var indexUserTileY = NaN;
  for( var k = 0; k < 5; k++){
    indexUserTileX = parseInt(this.playersData[i-1].tiles[0][k][0]);
    indexUserTileY = parseInt(this.playersData[i-1].tiles[0][k][1]);
    htmlTileNumber += '<div class="tile tile_' + indexUserTileX + '_' + indexUserTileY + ' users-display" data-left="'+ indexUserTileX + '" data-right="' + indexUserTileY + '"><img class="tile-left" src="images/' + indexUserTileX + '-bw.png"><img class="tile-right" src="images/' + indexUserTileY + '-bw.png"></div>';
    $('#upper-row-users' + i).html(htmlTileNumber).draggable({
      //stack: '#cardPile div',
      cursor: 'move',
      revert: true});
  }
  for (var t = 5; t < 9; t++){
    $('#upper-row-users' + i).append('<div class="empty-tile users-display"></div>');
  }

  for( var u = 5; u < 10; u++){
    indexUserTileX = parseInt(this.playersData[i-1].tiles[0][u][0]);  //[0] jugador //[0] array en tiles //[1] índice del elemento (oiriginalmente 10)  // [0] - x [1] - y
    indexUserTileY = parseInt(this.playersData[i-1].tiles[0][u][1]);
    htmlTileNumber2 += '<div class="users-display empty-tile tile" data-left="'+ indexUserTileX +'" data-right="'+ indexUserTileY +'"><img class="tile-left" src="images/'+ indexUserTileX +'-bw.png"><img class="tile-right" src="images/'+ indexUserTileY +'-bw.png"></div>';
    $('#lower-row-users'+i).html(htmlTileNumber2);
  }
  for (var e = 5; e < 9; e++){
    $('#lower-row-users'+i).append('<div class="users-display empty-tile"></div>');
  }
  }

};





DominosGame.prototype._usersTilesDisplay = function() {
  // Generate the empty class divs
  var htmlEmpty = '';
  for (var i = 0; i < 9; i++){
    htmlEmpty += '<div class="empty-tile"></div>';
    $('#upper-row-users').html(htmlEmpty);
    $('#lower-row-users').html(htmlEmpty);
  }
  // Assign user's tiles to some of this empty divs
  var htmlTileNumber = '';
  var indexUserTileX = NaN;
  var indexUserTileY = NaN;
  for( var k = 0; k < 5; k++){
    indexUserTileX = parseInt(his.playersData[0].tiles[0][k][1]);
    indexUserTileY = parseInt(his.playersData[0].tiles[0][k][3]);
    htmlTileNumber += '<div class="tile" data-left="'+ indexUserTileX +'" data-right="'+ indexUserTileY +'"><img src="images/'+ indexUserTileX +'-wb.png"><img src="images/'+ indexUserTileY +'-wb.png"></div>';
    $('#upper-row-users').html(htmlTileNumber);
  }

  for( var u = 5; u < 10; u++){
    indexUserTileX = parseInt(his.playersData[0].tiles[0][u][1]);
    indexUserTileY = parseInt(his.playersData[0].tiles[0][u][3]);
    htmlTileNumber += '<div class="tile" data-left="'+ indexUserTileX +'" data-right="'+ indexUserTileY +'"><img src="images/'+ indexUserTileX +'-wb.png"><img src="images/'+ indexUserTileY +'-wb.png"></div>';
    $('#upper-row-users').html(htmlTileNumber);
  }
};
