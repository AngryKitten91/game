const board = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 2]
];

const playerStartpos = {
    x: 0,
    y: 0
};


function Game() {
    this.board = board;
    this.playerStartpos = playerStartpos;
    this.init();
}


Game.prototype.init = function () {
    console.log('init');
    this.reneder();
    document.addEventListener('keydown', (event) => {

        let newPlayerPos = {}

        switch (event.keyCode) {
            case 38: //up
                newPlayerPos.x = this.playerStartpos.x;
                newPlayerPos.y = this.playerStartpos.y - 1;
                break;
            case 40: //down
                newPlayerPos.x = this.playerStartpos.x;
                newPlayerPos.y = this.playerStartpos.y + 1;
                break;
            case 37: //left
                newPlayerPos.x = this.playerStartpos.x - 1;
                newPlayerPos.y = this.playerStartpos.y;
                break;
            case 39: //right
                newPlayerPos.x = this.playerStartpos.x + 1;
                newPlayerPos.y = this.playerStartpos.y;
                break;
            default:
                return;
        }

        this.changePlayerPosition(newPlayerPos);


    });
}

Game.prototype.changePlayerPosition = function (newPlayerPos) {
    if (this.board[newPlayerPos.y][newPlayerPos.x] === 2) {
        this.playerStartpos = {
            x: 0,
            y: 0
        }
        alert('Win');
    } else if (this.board[newPlayerPos.y][newPlayerPos.x] === 1) {
        this.playerStartpos = {
            x: 0,
            y: 0
        }
        console.log('hit');

    } else if (
        newPlayerPos.x >= 0 &&
        newPlayerPos.y >= 0 &&
        newPlayerPos.x < this.board[0].length &&
        newPlayerPos.y < this.board.length
    ) {
        this.playerStartpos = newPlayerPos;
        console.log(newPlayerPos);
    }
    this.reneder();
}

Game.prototype.reneder = function () {
    console.log('render');

    let gameTable = document.getElementById('game');
    gameTable.innerHTML = '';

    this.board.forEach((row, rowI) => {
        const tr = document.createElement('tr');
        gameTable.appendChild(tr);

        row.forEach((element, elemI) => {
            const td = document.createElement('td');
            if (rowI === this.playerStartpos.y && elemI === this.playerStartpos.x) {
                td.innerHTML = 3;
            } else {
                td.innerHTML = element;
            }
            tr.appendChild(td);
        });
    });
}



new Game();