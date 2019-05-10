import Grid from './grid.js';
import Piece from './piece.js';
export default class Game {
    constructor() {
        this.score = 0;
        this.level = 0;
        this.lines = 0;
        this.gameOver = false;
        this.grid = new Grid(20,10);
        this.activePiece = new Piece('T', 'purple', [
            [0,1,0],
            [0,1,0],
            [0,1,0]
        ]);
        this.activePiece.x = 2;
        this.activePiece.y = 1;
        this.grid.lockPiece(this.activePiece);
    }

    movePieceLeft() {
        this.activePiece.moveLeft();   

        if (this.grid.hasCollision(this.activePiece)) {
            this.activePiece.moveRight();     
        }
        this.grid.refresh();    
        this.grid.lockPiece(this.activePiece);
        
    }
    movePieceRight() {
        this.activePiece.moveRight();

        if (this.grid.hasCollision(this.activePiece)) {
            this.activePiece.moveLeft();   
        }
        this.grid.refresh();    
        this.grid.lockPiece(this.activePiece);
    }
    movePieceDown() {
        this.activePiece.moveDown();     
        if (this.grid.hasCollision(this.activePiece)) {
            this.activePiece.moveUp();      
            this.grid.lockPiece(this.activePiece);
        }
        this.grid.refresh();    
        this.grid.lockPiece(this.activePiece);
    }
    
    rotatePice() {
        this.activePiece.rotate();
        if (this.grid.hasCollision(this.activePiece)){            
           this.activePiece.rotate(false); 
        }
        this.grid.refresh();        
        this.grid.lockPiece(this.activePiece);
    }

}
