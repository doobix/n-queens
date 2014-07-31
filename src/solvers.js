/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  var board = new Board({n: n});

  for (var i = 0; i < n; i++) {
    var tempArr = [];
    var index = (Math.floor(Math.random()*n));
    // if (hasColConflictAt(index))
    for (var j = 0; j < n; j++) {
      if (j === index) {
        tempArr.push(1);
      } else {
        tempArr.push(0);
      }
    }

  }

  // for (var i = 0; i < n; i++) {
  //   var tempArr = [];
  //   for (var j = 0; j < n; j++) {
  //     if (i === j) {
  //       tempArr.push(1);
  //     } else {
  //       tempArr.push(0);
  //     }
  //   }
  //   solution.push(tempArr)
  // }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var tempBoard = [];

  var generator = function(rowsToGo) {
    debugger;
    for (var tempPosition = 0; tempPosition < n; tempPosition++) {
      var tempRow = [];
      for (var i = 0; i < n; i++) {
        if (tempPosition === i) {
          tempRow.push(1);
        } else {
          tempRow.push(0);
        }
      }
      tempBoard.push(tempRow);
      rowsToGo--;

      if (rowsToGo > 0) {
        generator(rowsToGo);
      } else {
        var board = new window.Board(tempBoard);
        if (!board.hasAnyColConflicts() && !board.hasAnyRowConflicts()) {
          solutionCount++;
        }
        tempBoard.pop();
      }
    }
  };

  generator(n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
