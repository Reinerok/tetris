export default class Grid {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;

        for(let i = 0; i < rows; i++) {
            this[i] = new Array(columns).fill(0);
        }
    }

    hasCollision(piece) {
        for (let block of piece) {

            if (block && this._isOutOfBounds(block.x, block.y)) {     
                return true;
            }
        }

        return false;
    }

    refresh(){
        for(let i = 0; i < this.rows; i++) {
            this[i].fill(0);
        } 
    }

    lockPiece(piece) {

        for(let block of piece) {
        
            if (block) {
                
                this[block.y][block.x] = block;
            }
        }
    }

    _isOutOfBounds(x,y) {
        return this[y] === undefined || this[y][x] === undefined;
    }

    _isOuccpied(x,y) {  
        return this[y][x];
    }
}