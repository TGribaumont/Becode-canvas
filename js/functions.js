function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var forms = [];
const square = new Object();
square.color = "#7fb023";
square.pos1 = [
    [180, 0],
    [220, 0],
    [180, 40],
    [220, 40]
];
square.pos2 = [
    [180, 0],
    [220, 0],
    [180, 40],
    [220, 40]
];
square.pos3 = [
    [180, 0],
    [220, 0],
    [180, 40],
    [220, 40]
];
square.pos4 = [
    [180, 0],
    [220, 0],
    [180, 40],
    [220, 40]
];
forms.push(square);
const line = new Object();
line.color = "#8b4b9d";
line.pos1 = [
    [180, 0],
    [180, 40],
    [180, 80],
    [180, 120]
];
line.pos2 = [
    [260, 80],
    [220, 80],
    [180, 80],
    [140, 80]
];
line.pos3 = [
    [180, 0],
    [180, 40],
    [180, 80],
    [180, 120]
];
line.pos4 = [
    [260, 80],
    [220, 80],
    [180, 80],
    [140, 80]
];
forms.push(line);
const zed = new Object();
zed.color = "#2099fc";
zed.pos1 = [
    [180, 0],
    [220, 0],
    [220, 40],
    [260, 40]
];
zed.pos2 = [
    [260, 0],
    [260, 40],
    [220, 40],
    [220, 80]
];
zed.pos3 = [
    [180, 0],
    [220, 0],
    [220, 40],
    [260, 40]
];
zed.pos4 = [
    [260, 0],
    [260, 40],
    [220, 40],
    [220, 80]
];
forms.push(zed);
const invZed = new Object();
invZed.color = "#7bc5fb";
invZed.pos1 = [
    [220, 0],
    [260, 0],
    [180, 40],
    [220, 40]
];
invZed.pos2 = [
    [220, 40],
    [220, 80],
    [180, 0],
    [180, 40]
];
invZed.pos3 = [
    [220, 0],
    [260, 0],
    [180, 40],
    [220, 40]
];
invZed.pos4 = [
    [220, 40],
    [220, 80],
    [180, 0],
    [180, 40]
];
forms.push(invZed);
const el = new Object();
el.color = "#a11a1e";
el.pos1 = [
    [180, 0],
    [180, 40],
    [180, 80],
    [220, 80]
];
el.pos2 = [
    [260, 40],
    [220, 40],
    [180, 40],
    [180, 80]
];
el.pos3 = [
    [220, 120],
    [220, 80],
    [220, 40],
    [180, 40]
];
el.pos4 = [
    [180, 80],
    [220, 80],
    [260, 80],
    [260, 40]
];
forms.push(el);
const invEl = new Object();
invEl.color = "#ec7374";
invEl.pos1 = [
    [220, 0],
    [220, 40],
    [220, 80],
    [180, 80]
];
invEl.pos2 = [
    [260, 40],
    [220, 40],
    [180, 40],
    [180, 0]
];
invEl.pos3 = [
    [180, 80],
    [180, 40],
    [180, 0],
    [220, 0]
];
invEl.pos4 = [
    [180, 40],
    [220, 40],
    [260, 40],
    [260, 80]
]
forms.push(invEl);
console.log(forms[0]);

function tetris() {
    // Tetris
    var c = document.getElementById("tetris");
    var ctx = c.getContext("2d");

    // BG
    ctx.fillStyle = "#333333";
    ctx.beginPath();
    ctx.fillRect(0, 0, 20, 820);
    ctx.fillRect(420, 0, 20, 820);
    ctx.fillRect(0, 800, 440, 20);
    ctx.closePath();
    ctx.fill();

    let fallen = [];
    let lost = false;
    let formChoice = getRandomInt(6);
    // var formsTable = getForms()
    // console.log(formsTable);
    nextForm(forms, formChoice);
    // let test = 0;
    // while (!lost) {
    // alert('test');
    fallingForm(forms, formChoice);
    let fallingId = formChoice;
    formChoice = getRandomInt(6);
    nextForm(forms, formChoice);
    console.log('move');
    moveForm(forms, fallingId);
    console.log('add to fallen');
    // fallen.push(test);
    // test++;
    window.addEventListener("keydown", doKeyDown, false);
    window.setInterval(function() { moveDown(forms, fallingId); }, 500);
    // window.setTimeout(moveDown(forms, fallingId), 5000);
    // document.onkeydown = doKeyDown;
    // moveDown(forms, fallingId);

    function doKeyDown(e) {
        if (e.keyCode == 40) {
            moveDown(forms, fallingId);
        } else if (e.keyCode == 39) {
            moveRight(forms, fallingId);
        } else if (e.keyCode == 37) {
            moveLeft(forms, fallingId);
        }
    } // if (fallen.length > 0) { break; }
    // }



    // Falling form
    // let formChoice = getRandomInt(6);
    // let fallingForm = forms[formChoice];
    // ctx.fillStyle = fallingForm.color;
    // ctx.beginPath();
    // fallingForm.positions.forEach(function(pos) {
    //     ctx.fillRect(pos[0], pos[1], 40, 40);
    // });
    // ctx.closePath();
    // ctx.fill();

    // nextForm(forms);
}
tetris();

function fallingForm(formsTable, index) {
    var c = document.getElementById("tetris");
    var ctx = c.getContext("2d");
    // let formChoice = getRandomInt(6);
    // let fallingForm = forms[formChoice];
    ctx.clearRect(20, 0, 400, 800);
    let fallingForm = formsTable[index];
    ctx.fillStyle = fallingForm.color;
    ctx.beginPath();
    fallingForm.positions.forEach(function(pos) {
        ctx.fillRect(pos[0], pos[1], 40, 40);
    });
    ctx.closePath();
    ctx.fill();
}

function nextForm(formsTable, index) {
    console.log(formsTable[0]);
    var nc = document.getElementById("nextFormCanvas");
    var nctx = nc.getContext("2d");
    // let formChoice = getRandomInt(6);
    // let fallingForm = formsTable[formChoice];
    nctx.clearRect(0, 0, 120, 160);
    // console.log(index.color);
    // console.log(formsTable[index.color]);
    let fallingForm = formsTable[index];
    nctx.fillStyle = fallingForm.color;
    nctx.beginPath();
    fallingForm.positions.forEach(function(pos) {
        nctx.fillRect((pos[0] - 180), pos[1], 40, 40);
    });
    nctx.closePath();
    nctx.fill();
}

function moveForm(formsTable, index) {
    // var c = document.getElementById("tetris");
    // var ctx = c.getContext("2d");
    // let fallingPositions = [];
    // let fallingForm = formsTable[index];
    // ctx.fillStyle = fallingForm.color;
    // fallingForm.positions.forEach(function(pos) {
    //     ctx.fillRect(pos[0], pos[1], 40, 40);
    //     fallingPositions.push([pos[0], pos[1]]);
    // });
    // let itTouches = 0;
    // let safety = 0;
    // while (itTouches === 0) {
    //     fallingPositions.forEach(function(fp) {
    //         if (fp[1] === 760) {
    //             itTouches++;
    //         }
    //     })
    //     if (itTouches === 0) {
    //         setTimeout(function() {
    //             fallingPositions.forEach(function(fp) {
    //                 ctx.clearRect(fp[0], fp[1], 40, 40);
    //                 fp[1] += 40;
    //                 console.log(fp[1]);
    //                 ctx.fillRect(fp[0], fp[1], 40, 40);
    //             })
    //         }, 500);
    //     }
    //     safety++;
    //     if (safety === 30) {
    //         break;
    //     }
    // }

}

function moveDown(formsTable, formId) {
    // alert('test');
    // alert('Go Down !');
    var c = document.getElementById("tetris");
    var ctx = c.getContext("2d");
    // ctx.clearRect(20, 0, 400, 800);
    let fallingForm = formsTable[formId];
    if (fallingForm.positions[0][1] < 740 && fallingForm.positions[1][1] < 740 && fallingForm.positions[2][1] < 740 && fallingForm.positions[3][1] < 740) {
        fallingForm.positions.forEach(function(pos) {
            ctx.clearRect(pos[0], pos[1], 40, 40);
        });
        fallingForm.positions.forEach(function(pos) {
            pos[1] += 40;
        });
        ctx.fillStyle = fallingForm.color;
        ctx.beginPath();
        fallingForm.positions.forEach(function(pos) {
            ctx.fillRect(pos[0], pos[1], 40, 40);
        });
        ctx.closePath();
        ctx.fill();
    }
}

function moveLeft(formsTable, formId) {
    // alert('Go Down !');
    var c = document.getElementById("tetris");
    var ctx = c.getContext("2d");
    // ctx.clearRect(20, 0, 400, 800);
    let fallingForm = formsTable[formId];
    if (fallingForm.positions[0][0] > 20 && fallingForm.positions[1][0] > 20 && fallingForm.positions[2][0] > 20 && fallingForm.positions[3][0] > 20 && fallingForm.positions[3][1] < 740) {
        fallingForm.positions.forEach(function(pos) {
            ctx.clearRect(pos[0], pos[1], 40, 40);
        });
        fallingForm.positions.forEach(function(pos) {
            pos[0] -= 40;
        });
        ctx.fillStyle = fallingForm.color;
        ctx.beginPath();
        fallingForm.positions.forEach(function(pos) {
            ctx.fillRect(pos[0], pos[1], 40, 40);
        });
        ctx.closePath();
        ctx.fill();
    }
}

function moveRight(formsTable, formId) {
    // alert('Go Down !');
    var c = document.getElementById("tetris");
    var ctx = c.getContext("2d");
    // ctx.clearRect(20, 0, 400, 800);
    let fallingForm = formsTable[formId];
    if (fallingForm.positions[0][0] < 380 && fallingForm.positions[1][0] < 380 && fallingForm.positions[2][0] < 380 && fallingForm.positions[3][0] < 380 && fallingForm.positions[3][1] < 740) {
        fallingForm.positions.forEach(function(pos) {
            ctx.clearRect(pos[0], pos[1], 40, 40);
        });
        fallingForm.positions.forEach(function(pos) {
            pos[0] += 40;
        });
        ctx.fillStyle = fallingForm.color;
        ctx.beginPath();
        fallingForm.positions.forEach(function(pos) {
            ctx.fillRect(pos[0], pos[1], 40, 40);
        });
        ctx.closePath();
        ctx.fill();
    }
}

function rotate(formsTable, formId) {
    var c = document.getElementById("tetris");
    var ctx = c.getContext("2d");
}

// window.addEventListener("keydown", doKeyDown, false);

// function doKeyDown(e) {
//     if (e.keyCode == 40) {
//         moveDown();
//     }
// }