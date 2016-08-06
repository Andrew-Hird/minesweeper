document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!


var boardSize = 4

var board = {
  cells: []
}
  for (var row = 0; row < boardSize; row++) {
      for (var col = 0; col < boardSize; col++) {
      var obj = {}
      obj.row = row
          obj.col = col
          obj.isMine = Math.random() < 0.3 ? true : false
          obj.hidden = true
      board.cells.push(obj)
      }
    }


function startGame () {

for (var i = 0; board.cells[i]; i++) {
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
}

  // Don't remove this function call: it makes the game work!
  lib.initBoard()

  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {
    for (var i = 0; i < board.cells.length; i++) {
      if (!board.cells[i].isMine && board.cells[i].hidden) {
        return
      }
      if (!board.cells[i].isMarked && board.cells[i].hidden) {
        return
      }
    }
      lib.displayMessage('You win! <br> <button onClick="history.go(0)">Play Again?</button>')
  }



  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')



// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)

  var count = 0
for (var i = 0; i < surrounding.length; i++) {
  if (surrounding[i].isMine === true) {
    count += 1
  }
}
return count
}
