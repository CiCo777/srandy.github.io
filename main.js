let x = 0;
let y = 0;


document.onkeydown = function funkcia(event){
    let e = event.keyCode;
    console.log(e);
    sipky(e)
}


function sipky(e){
    
    switch(e){
        case 38:
            y -= 10;
            document.getElementById("kocka").style.top = y + "px";
            check();
        break;

        case 40: 
            y += 10;
            document.getElementById("kocka").style.top = y + "px";
            check();
        break;

        case 37:
            x -= 10;
            document.getElementById("kocka").style.left = x + "px";
            check();
        break;

        case 39: 
            x += 10;
            document.getElementById("kocka").style.left = x + "px";
            check()
        break;
    }
}



function check(){ 
    if(y > -50 && y < 150 && x > 100 && x < 200){
        alert("Smola, skapal si!");
        x = 0;
        y = 0;
        document.getElementById("kocka").style.left = x + "px";   
        document.getElementById("kocka").style.top = y + "px";
        }
    

    
    if(y > 0 && y < 250 && x > 200 && x < 300){
        alert("Smola, skapal si!");
        x = 0;
        y = 0;
        document.getElementById("kocka").style.left = x + "px";   
        document.getElementById("kocka").style.top = y + "px";
        }

    if(y > -50 && y < 350 && x > 300 && x < 400){
        alert("Smola, skapal si!");
        x = 0;
        y = 0;
        document.getElementById("kocka").style.left = x + "px";   
        document.getElementById("kocka").style.top = y + "px";
        }
    
    if(y > 100 && y < 200 && x > -50 && x < 100){
        alert("Smola, skapal si!");
        x = 0;
        y = 0;
        document.getElementById("kocka").style.left = x + "px";   
        document.getElementById("kocka").style.top = y + "px";
        }

    if(y > 200 && y < 300 && x > -50 && x < 250){
        alert("Smola, skapal si!");
        x = 0;
        y = 0;
        document.getElementById("kocka").style.left = x + "px";   
        document.getElementById("kocka").style.top = y + "px";
        }

    if(y > 300 && y < 400 && x > -50 && x < 100){
        alert("Smola, skapal si!");
        x = 0;
        y = 0;
        document.getElementById("kocka").style.left = x + "px";   
        document.getElementById("kocka").style.top = y + "px";
        }

    if(y > 300 && y < 400 && x > 100 && x < 350){
        alert("Smola, skapal si!");
        x = 0;
        y = 0;
        document.getElementById("kocka").style.left = x + "px";   
        document.getElementById("kocka").style.top = y + "px";
        }

    if(y < 0 || y > 400 || x < 0 || x > 400){
        alert("Smola, skapal si!");
        x = 0;
        y = 0;
        document.getElementById("kocka").style.left = x + "px";   
        document.getElementById("kocka").style.top = y + "px";
        }

    if(y == 400 && x == 400){
        alert("Gratulujem, vyhral si!");
        x = 0;
        y = 0;
        document.getElementById("kocka").style.left = x + "px";   
        document.getElementById("kocka").style.top = y + "px";
        }
        




    }
