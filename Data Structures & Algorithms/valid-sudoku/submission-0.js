class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const boxes = {
            '1_1': new Set(),
            '1_2': new Set(),
            '1_3': new Set(),
            '2_1': new Set(),
            '2_2': new Set(),
            '2_3': new Set(),
            '3_1': new Set(),
            '3_2': new Set(),
            '3_3': new Set(),
        }
        for(let i=0;i<board.length;i++) {
            const setI = new Set();
            const setJ = new Set();
            for(let j=0;j<board[i].length; j++) {
                const currentChJ = board[i][j];
                const currentChI = board[j][i];

                const boxKey = `${Math.ceil((i+1)/3)}_${Math.ceil((j+1)/3)}`;
                

                if(currentChI !== '.') {
                    if(setI.has(currentChI)) {
                        return false;
                    }
                    setI.add(currentChI);
                }

                if(currentChJ !== '.') {
                    if(boxes[boxKey].has(currentChJ)) {
                        return false;

                    }
                    if(setJ.has(currentChJ)) {
                        return false;
                    }
                    setJ.add(currentChJ);
                    boxes[boxKey].add(currentChJ)
                }

            }
        }
        return true;
    }
}