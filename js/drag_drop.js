DominosGame.prototype._usersTilesDisplay = function() {
  // Generate the divs needed for each display
  for (var i=1; i<= this.selectedPlayers; i++){
    if (i===5){
      $('<div class="user-dominos display' + i + '"><div class="upper-row" id="upper-row-users"></div><div class="lower-row" id="lower-row-users"></div></div>)').appendTo('.displays').hide();
    } else {
        $('<div class="user-dominos display' + i + '"><div class="upper-row" id="upper-row-users"></div><div class="lower-row" id="lower-row-users"></div></div>)').appendTo('.displays');
      }
  }

  // Assign user's tiles to some of this empty divs
  var htmlTileNumber = '';
  var htmlTileNumber2 = '';
  var indexUserTileX = NaN;
  var indexUserTileY = NaN;
  for( var k = 0; k < 5; k++){
    indexUserTileX = parseInt(this.playersData[0].tiles[0][k][0]);
    indexUserTileY = parseInt(this.playersData[0].tiles[0][k][1]);
    htmlTileNumber += '<div class="tile users-display" data-left="'+ indexUserTileX + '" data-right="' + indexUserTileY + '"><img class="tile-left" src="images/' + indexUserTileX + '-bw.png"><img class="tile-right" src="images/' + indexUserTileY + '-bw.png"></div>';
    $('#upper-row-users').html(htmlTileNumber);
  }
  for (var t = 5; t < 9; t++){
    $('#upper-row-users').append('<div class="empty-tile users-display"></div>');
  }

  for( var u = 5; u < 10; u++){
    indexUserTileX = parseInt(this.playersData[0].tiles[0][u][0]);  //[0] jugador //[0] array en tiles //[1] índice del elemento (oiriginalmente 10)  // [0] - x [1] - y
    indexUserTileY = parseInt(this.playersData[0].tiles[0][u][1]);
    htmlTileNumber2 += '<div class="users-display empty-tile tile" data-left="'+ indexUserTileX +'" data-right="'+ indexUserTileY +'"><img class="tile-left" src="images/'+ indexUserTileX +'-bw.png"><img class="tile-right" src="images/'+ indexUserTileY +'-bw.png"></div>';
    $('#lower-row-users').html(htmlTileNumber2);
  }
  for (var e = 5; e < 9; e++){
    $('#lower-row-users').append('<div class="users-display empty-tile"></div>');
  }

};







var correctCards = 0;
$( init );

function init() {

  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  numbers.sort( function() {
    return Math.random() - 0.5;
  } );

  for ( var i=0; i<10; i++ ) {
    $('<div>' + numbers[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  var words = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];
  for ( i=1; i<=10; i++ ) {
    $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }

}



function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  if ( slotNumber == cardNumber ) {
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
  }

  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( correctCards == 10 ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '100px',
      opacity: 1
    } );
  }

}
