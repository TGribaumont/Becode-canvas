function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function draw() {

    // England's flag
    var c = document.getElementById("england");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.fillRect(235, 0, 30, 300);
    ctx.fillRect(0, 135, 500, 30);
    ctx.closePath();
    ctx.fill();

    // Canadian flag
    var c = document.getElementById("canada");
    var ctx = c.getContext("2d");

    // White square
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.fillRect(150, 0, 300, 300);
    ctx.closePath();
    ctx.fill();

    // Maple leaf
    ctx.fillStyle = "#fc0d1b";
    ctx.beginPath();
    ctx.moveTo(274, 270);
    ctx.lineTo(276, 190);
    ctx.lineTo(282, 190);
    ctx.lineTo(286, 270);
    ctx.closePath();
    ctx.fill();

}
draw();

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

    let forms = [

        ]
        // Square
    let square = new Object();
    square.positions = [
        [180, 0],
        [220, 0],
        [180, 40],
        [220, 40]
    ];
    // square.posX1 = 180;
    // square.posY1 = 0;
    // square.posX2 = 220;
    // square.posY2 = 0;
    // square.posX3 = 180;
    // square.posY3 = 40;
    // square.posX4 = 220;
    // square.posY4 = 40;
    square.color = '#7fb023';
    forms.push(square);
    // Line
    let line = new Object();
    line.positions = [
        [180, 0],
        [180, 40],
        [180, 80],
        [180, 120]
    ];
    line.color = '#8b4b9d';
    forms.push(line);
    // L
    let el = new Object();
    el.positions = [
        [180, 0],
        [180, 40],
        [180, 80],
        [220, 80]
    ];
    el.color = '#a11a1e';
    forms.push(el);
    // Inverted L
    let invEl = new Object();
    invEl.positions = [
        [220, 0],
        [220, 40],
        [220, 80],
        [180, 80]
    ];
    invEl.color = '#ec7374';
    forms.push(invEl);
    // Z
    let zed = new Object();
    zed.positions = [
        [180, 0],
        [220, 0],
        [220, 40],
        [260, 40]
    ];
    zed.color = '#2099fc';
    forms.push(zed);
    // Inverted Z
    let InvZed = new Object();
    InvZed.positions = [
        [220, 0],
        [260, 0],
        [180, 40],
        [220, 40]
    ];
    InvZed.color = '#7bc5fb';
    forms.push(InvZed);

    let fallen = [];
    let lost = false;
    let formChoice = getRandomInt(6);
    nextForm(forms, formChoice);
    let test = 0;
    // while (!lost) {
    // alert('test');
    fallingForm(forms, formChoice);
    let fallingId = formChoice;
    formChoice = getRandomInt(6);
    nextForm(forms, formChoice);
    console.log('move');
    moveForm(forms, fallingId);
    console.log('add to fallen');
    fallen.push(test);
    test++;
    window.addEventListener("keydown", doKeyDown, false);
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
    var nc = document.getElementById("nextFormCanvas");
    var nctx = nc.getContext("2d");
    // let formChoice = getRandomInt(6);
    // let fallingForm = formsTable[formChoice];
    nctx.clearRect(0, 0, 120, 160);
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

// window.addEventListener("keydown", doKeyDown, false);

// function doKeyDown(e) {
//     if (e.keyCode == 40) {
//         moveDown();
//     }
// }