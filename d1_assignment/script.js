var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //line
    ctx.strokeStyle = "rgb(255, 0, 0)";
    ctx.beginPath();
    ctx.moveTo(85, 682);
    ctx.lineTo(278, 549);
    ctx.lineWidth = "5";
    ctx.stroke();

    //circle
    ctx.fillStyle = "#ffff00";
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(385, 441, 66, 0,2*Math.PI, true);
    ctx.lineWidth = "5";
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //square
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "black";
    ctx.fillRect(85, 302, 99, 99);
    ctx.lineWidth = "5";
    ctx.strokeRect(85, 302, 99, 99);


    //pentagon
    ctx.fillStyle = "ff00ff";
    ctx.strokeStyle = "00ffff";
    ctx.beginPath();
    ctx.moveTo(556, 312);
    ctx.lineTo(666, 285);
    ctx.lineTo(724, 385);
    ctx.lineTo(649, 469);
    ctx.lineTo(547, 425);
    ctx.lineTo(556, 312);
    ctx.lineWidth = "5";
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //star
    ctx.fillStyle = "ffff00";
    ctx.strokeStyle = "32, 32, 32";
    ctx.beginPath();
    ctx.moveTo(636, 501);
    ctx.lineTo(667, 558);
    ctx.lineTo(732, 569);
    ctx.lineTo(687, 620);
    ctx.lineTo(695, 686);
    ctx.lineTo(635, 658);
    ctx.lineTo(574, 686);
    ctx.lineTo(582, 620);
    ctx.lineTo(537, 569);
    ctx.lineTo(602, 558);
    ctx.lineTo(636, 501);
    ctx.lineWidth = "5"
    ctx.closePath();
    ctx.fill();
    ctx.stroke();