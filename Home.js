


//  ======================================== BOUNCING BALL ====================================================





        var canvas = document.getElementById('canvas-ball');
        var ctx = canvas.getContext('2d');

      
        var p = { x: 25, y: 25 };
        var velo = 3,
            corner = 50,
            rad = 4;
        var ball = { x: p.x, y: p.y };
        var moveX = Math.cos(Math.PI / 180 * corner) * velo;
        var moveY = Math.sin(Math.PI / 180 * corner) * velo;


        function DrawMe() {


            
            ctx.clearRect(0, 0, 400, 300);

           
            if (ball.x > canvas.width - rad || ball.x < rad) moveX = -moveX;
            if (ball.y > canvas.height - rad || ball.y < rad) moveY = -moveY;

            ball.x += moveX;
            ball.y += moveY;

            ctx.beginPath();
            ctx.fillStyle = 'blue';
            ctx.arc(ball.x, ball.y, rad, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.closePath();

            // ctx.textAlign="center"
            // ctx.strokeText("Bringing You the Best of Smiles" ,150 ,70)
            // ctx.font="10px TimeNewRoman"
            

        
        }
        setInterval(DrawMe, 12);




// =======================================================================================================================
 

// Feedback JS

function IsValidEmail(email) {

    // Only 1 dot is permitted
    if (email.indexOf(".") == 1) {
        return false;
    }
    //If whether email has @ character.
    if (email.indexOf("@") == 1) {
        return false;

    } else if (email.indexOf("@") > 1){

        return true;
    } 

    var parts = email.split("@");
    var dot = parts[1].indexOf(".");
    var len = parts[1].length;
    var dotSplits = parts[1].split(".");
    var dotCount = dotSplits.length - 1;


    //Check whether Dot is present, and that too minimum 1 character after @.
    if (dot == -1 || dot < 2 || dotCount > 2) {
        return false;
    }

    //Check whether Dot is not the last character and dots are not repeated.
    for (var i = 0; i < dotSplits.length; i++) {
        if (dotSplits[i].length == 0) {
            return false;
        }
    }

    return true;
};
function ValidateEmail() {
    var email = document.getElementById("txtEmail").value;
    var lblError = document.getElementById("lblError");
    lblError.innerHTML = "";
    if (!IsValidEmail(email)) {
        lblError.innerHTML = "Invalid email address.";
    }

}