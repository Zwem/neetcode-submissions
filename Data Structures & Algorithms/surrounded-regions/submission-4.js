class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const dfs = (i, j)=> {
            if(i < 0 || i >= board.length || j < 0 || j >= board[i].length 
            || board[i][j] !== 'O') {
                return;
            }
            board[i][j] = 'T'
            dfs(i+1,j);
            dfs(i-1, j);
            dfs(i, j+1);
            dfs(i, j -1);
        }
        for(let i = 0; i < board.length; i++) {
            dfs(i, 0);
            dfs(i, board[i].length -1);

        }
        for(let j = 0; j < board[0].length; j++) {
            dfs(0, j);
            dfs(board.length -1, j);
        }
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                if(board[i][j] === 'O') {
                    board[i][j] = 'X';
                }
                if(board[i][j] === 'T') {
                    board[i][j] = 'O';
                }
            }
        }
        return board;
    }
}