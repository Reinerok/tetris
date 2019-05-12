export default class Piece {
    constructor(type, color, blocks) {
        this.type = type;
        this.color = color;
        this.blocks = blocks;
        this.x = 0;
        this.y = 0;
    }

    moveLeft() {
        this.x -= 1;
    }
    moveRight() {
        this.x += 1;
    }
    moveDown() {
        this.y += 1;
    }
    moveUp() {
        this.y -= 1;
    }

    rotate(clockwise) {
        let blocks = this.blocks;      
        let res = [];
        var temp;
        
        for(let i = 0; i < blocks[0].length; i++){
          temp = [];
          for(let k = blocks.length-1; k>=0; k--){
              temp.push(blocks[k][i]);
          }
          res.push(temp);
        }

        for (let i = 0; i < blocks[0].length; i++) {
            for (let j = 0; j < blocks.length; j++) {
                blocks[i][j] = res[i][j];
            }
        }
        
    }
    *[Symbol.iterator]() {
        for (let y = 0; y < this.blocks.length; y++) {
            
            for (let x = 0; x < this.blocks[y].length; x++) {
                yield this.blocks[y][x] ? {
                    x: this.x + x,
                    y: this.y + y,
                    color:this.color  
                } : null;
            }
        }
    }
}