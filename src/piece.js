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
        const blocks = this.blocks;
        const length = blocks.length;
        const x = Math.floor(length / 2);
        const y = length - 1;

        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                let temp = blocks[i][j];

                if(!clockwise) {
                    blocks[i][j] = blocks[y - j][i];
                    blocks[y - j][i] = blocks[y - i][y - j];
                    blocks[y - i][y - j] = blocks[j][y - i];
                    blocks[j][y - i] = temp;
                } else {
                    blocks[i][j] = blocks[j][y - i];
                    blocks[j][y - i] = blocks[y - i][y - j];
                    blocks[y - i][y - j] = blocks[y - j][i];
                    blocks[y - j][i] = temp;
                }
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