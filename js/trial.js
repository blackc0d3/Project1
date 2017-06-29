DominosGame.prototype._usersTilesDisplay = function() {
  // Generate the empty class divs
  var html = '';
  for (var i = 0; i < 9; i++){
    hmtl += '<div class="empty-tile"></div>';
    $('#upper-row-users').html(html);
    $('#lower-row-users').html(html);
  }
  // Assign user's tiles to some of this empty divs
  var htmlUpper = '';
  for (var j = 2; j < 7; i++){
    var indexUserTileX = NaN;
    var indexUserTileY = NaN;
    for( var k = 0; k < 5; k++){
      indexUserTileX = parseInt(his.playersData[0].tiles[0][k][1]);
      indexUserTileY = parseInt(his.playersData[0].tiles[0][k][3]);
      hmtlUpper += '<div class="tile" data-left="'+ indexUserTileX +'" data-right="'+ indexUserTileY +'"><img src="images/'+ indexUserTileX +'-wb.png"><img src="images/'+ indexUserTileY +'-wb.png"></div>';
      $('#upper-row-users').html(hmtlUpper);
    }

    for( var u = 0; u < 5; u++){
      indexUserTileX = parseInt(his.playersData[0].tiles[0][u+4][1]);
      indexUserTileY = parseInt(his.playersData[0].tiles[0][u+4][3]);
      hmtlUpper += '<div class="tile" data-left="'+ indexUserTileX +'" data-right="'+ indexUserTileY +'"><img src="images/'+ indexUserTileX +'-wb.png"><img src="images/'+ indexUserTileY +'-wb.png"></div>';
      $('#upper-row-users').html(hmtlUpper);
    }


  }
};




  for (var i = 1; i <= this.selectedPlayers; i++){
    var html = '';
    var html2 = '';
    html += '<div class="spinner-path-left spinner" disabled="true"></div>';
    html += '<div class="spinner-path-center spinner" disabled="true"></div>';
    html += '<div class="spinner-path-right spinner" disabled="true"></div>';
    html += '<div class="main-path-left">';
    html += '<input type="text" placeholder="Player ' + i +'" />';
    //html += '<span class="player-name-' + i + '">Player ' + i + '</span>';
    html += '<br>';
    html += '<span class="player-tiles>">Tiles:</span>';
    html += '</div>';
    html += '<div class="main-path-center" disabled="false"></div>';
    html += '<div class="main-path-right"></div>';

    html2 += '<div class="main-path-left">';
    html2 += '<input type="text" placeholder="Player ' + i +'" />';
    //html2 += '<span class="player-name-' + i + '">Player ' + i + '</span>';
    html2 += '<br>';
    html2 += '<span class="player-tiles>">Tiles:</span>';
    html2 += '</div>';
    html2 += '<div class="main-path-center" disabled="false"></div>';
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

<div class="user-dominos">
  <div class="upper-row" id="user-tiles">

    <div class="tile" data-left="4" data-right="3">
      <img src="images/4.jpg">
      <img src="images/3.jpg">
    </div>
    <div class="tile" data-left="4" data-right="3">
      <img src="images/4.jpg">
      <img src="images/3.jpg">
    </div>
    <div class="tile" data-left="4" data-right="3">
      <img src="images/4.jpg">
      <img src="images/3.jpg">
    </div>
    <div class="tile" data-left="4" data-right="3">
      <img src="images/4.jpg">
      <img src="images/3.jpg">
    </div>
    <div class="tile" data-left="4" data-right="3">
      <img src="images/4.jpg">
      <img src="images/3.jpg">
    </div>


    <div class="title empty">
    </div>
  </div>
</div>
