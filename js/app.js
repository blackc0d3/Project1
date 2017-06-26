var sizeGame = 12;
var computerTiles = [];
function generateComputerTiles(sizeGame){
  var tiles = [];
  for (var x = 0; x <= sizeGame ; x++)
    for(var y = 0; y <= x; y++)
      tiles.push(x + "_" + y);
    return tiles;
}
