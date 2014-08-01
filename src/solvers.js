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

  for (var i = 0; i < n; i++) {
    var tempArr = [];
    for (var j = 0; j < n; j++) {
      if (i === j) {
        tempArr.push(1);
      } else {
        tempArr.push(0);
      }
    }
    solution.push(tempArr);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  var generator = function(x , y, total) {
    if (total < n) {
      board.togglePiece(x, y);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(x, y);
      } else {
        total++;
        generator(x + 1, 0, total);
        board.togglePiece(x,y);
        total--;
      }
      if (y + 1 < n) {
        generator(x, y + 1, total);
      }
    } else {
      solutionCount++;
    }
  };
  generator(0,0,0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solution = board.rows();

  var generator = function(x , y, total) {
    if (total < n) {
      board.togglePiece(x, y);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(x, y);
      } else {
        total++;
        generator(x + 1, 0, total);
        board.togglePiece(x,y);
        total--;
      }
      if (y + 1 < n) {
        generator(x, y + 1, total);
      }
    } else {
      solution = board.rows();
    }
  };
  generator(0,0,0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  var generator = function(x , y, total) {
    if (total < n) {
      board.togglePiece(x, y);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(x, y);
      } else {
        total++;
        generator(x + 1, 0, total);
        board.togglePiece(x,y);
        total--;
      }
      if (y + 1 < n) {
        generator(x, y + 1, total);
      }
    } else {
      solutionCount++;
    }
  };
  generator(0,0,0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
