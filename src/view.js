export default class View{
    constructor(){
        this.canvas = document.getElementById('my_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 190;
        this.canvas.height = 399;
    }

    drow(grid){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for(let i = 0; i < 20; i++){
            for(let j = 0; j < grid[i].length; j++){
                if(grid[i][j]) {

                    this.ctx.fillStyle = grid[i][j].color;
                    this.ctx.fillRect(20*(grid[i][j].x), 20*(grid[i][j].y), 19, 19);
                }
            }
        }
    }
}