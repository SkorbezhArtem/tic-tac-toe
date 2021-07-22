class TicTacToe {
    constructor() {
      this.currentSymbol = 'x';
      this.field = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];
      this.winComb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    }
  
    getCurrentPlayerSymbol() {
      return this.currentSymbol;
    }
  
    nextTurn(rowIndex, columnIndex) {
      if (this.field[rowIndex][columnIndex] === null) {
          this.field[rowIndex][columnIndex] = this.currentSymbol;
          this.currentSymbol = (this.currentSymbol === 'x' ? 'o' : 'x');
      }
    }
  
    isFinished() {
      return Boolean(this.getWinner()) || this.isDraw();
    }
  
    getWinner() {
        const flatArr = this.field.flat();
        for (let i = 0; i < this.winComb.length; i++) {
            const [a, b, c] = this.winComb[i];
            if (flatArr[a] === flatArr[b] && flatArr[a] === flatArr[c]) {
                return flatArr[a];
            }
        }
        return null;
    }
  
    noMoreTurns() {
        return Boolean(this.field.flat().indexOf(null) === -1);
    }
  
    isDraw() {
        return Boolean(this.noMoreTurns() && !this.getWinner())
    }
  
    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
  }
  
  module.exports = TicTacToe;