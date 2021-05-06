
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.translate(90, 80);


const scores = {
    piru:           [379, 278],
    franco:         [428, 318],
    fd1:            [274, 368],
    lombi:          [284, 176],
    nacho:          [324, 330],
    joaco:          [291, 286],
    fede:           [106, 253],
    sofi:           [258, 252],
    lucas:          [257, 132],
    pedrito:        [309, 150],
    firewill:       [174, 198],
    echu:           [147, 238],
    vale:           [126, 219],
    pau:            [79 , 222],
    galileo:        [49 , 309],
    berto:          [95 , 431],
    gravity:        [444, 427],
    ian:            [476, 350],
    plantita:       [400, 351],
    sponja:         [185, 317],
    martin:         [324, 300],
    facu:           [389, 269],
    fabri:          [324, 252],
    magui:          [292, 225],
    chara:          [249, 232],
    delfi:          [205, 272],
    tomi:           [235, 276],
    rami:           [236, 296],
    pablo:          [313, 289],
    tinto:          [301, 279],
    joaco:          [291, 287]
};

//colores
ctx.rect(0, 0, 250, 250); //nacho usaría variables :)
ctx.fillStyle = '#F9BABA'; 
ctx.fill();

ctx.beginPath();

ctx.rect(250, 0, 250, 250);
ctx.fillStyle = '#92D9F8';
ctx.fill();

ctx.beginPath();

ctx.rect(0, 250, 250, 250);
ctx.fillStyle = '#C8E4BC';
ctx.fill();

ctx.beginPath();

ctx.rect(250, 250, 250, 250);
ctx.fillStyle = '#F5F5A7';
ctx.fill();

ctx.beginPath();

//lineas grises
for(let i = 0; i <= 500; i+=25){
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 500);

    ctx.moveTo(0, i);
    ctx.lineTo(500, i);
}

ctx.lineWidth = 0.5;
ctx.strokeStyle = "grey";
ctx.stroke();

ctx.beginPath();

//lineas
ctx.moveTo(250, 0);
ctx.lineTo(250, 500);
ctx.moveTo(0, 250);
ctx.lineTo(500, 250);

ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();

ctx.beginPath();

//borde
ctx.moveTo(0, 0);
ctx.lineTo(500, 0);
ctx.lineTo(500, 500);
ctx.lineTo(0, 500);
ctx.lineTo(0, 0);

ctx.lineWidth = 1;
ctx.stroke();

ctx.beginPath();

//triangulos
ctx.moveTo(250 - 12.5, 0);
ctx.lineTo(250, -25);
ctx.lineTo(250 + 12.5, 0);

ctx.moveTo(0 ,250 - 12.5);
ctx.lineTo(-25, 250);
ctx.lineTo(0, 250 + 12.5);

ctx.moveTo(250 - 12.5, 500);
ctx.lineTo(250, 525);
ctx.lineTo(250 + 12.5, 500);

ctx.moveTo(500 ,250 - 12.5);
ctx.lineTo(525, 250);
ctx.lineTo(500, 250 + 12.5);

ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();

//direcciones
ctx.font = 'bold 26px Montserrat';
ctx.fillText("Authority", 250 - ctx.measureText("Authority").width/2, -30);
ctx.fillText("Liberty", 250 - ctx.measureText("Liberty").width/2, 540);
ctx.fillText("Left", -78 , 258);
ctx.fillText("Right", 524 , 258);




//circulitos
for(let nombre in scores){
    ctx.ellipse(scores[nombre][0], scores[nombre][1], 8, 8, 0, 0, 2*Math.PI);
    ctx.closePath();
}
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();

//nombres
ctx.font = 'bold 12px Montserrat'
ctx.fillStyle = "black";
for(let nombre in scores){
    ctx.fillText(nombre, scores[nombre][0] - ctx.measureText(nombre).width/2, scores[nombre][1] - 5);
}




