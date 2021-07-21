import React, { Component } from 'react';
import nave2 from '../images/nave2.png';
import nave from '../images/nave.png';
import fondoImagen from '../images/Captura2.PNG';
import disparoImagen from '../images/shooRed.png';
import disparoGreenImagen from '../images/shootGreen.png';
import tablero from '../images/score.png';

import numero1 from '../images/numero1.png';
import numero2 from '../images/numero2.png';
import numero3 from '../images/numero3.png';
import numero4 from '../images/numero4.png';
import numero5 from '../images/numero5.png';
import numero6 from '../images/numero6.png';
import numero7 from '../images/numero7.png';
import numero8 from '../images/numero8.png';
import numero9 from '../images/numero9.png';
import numero10 from '../images/numero10.png';

import alien1 from '../images/alienAmarillo.png';
import alien2 from '../images/alienAzul.png';
import alien3 from '../images/alienRojo.png';






import '../css/App.css';

var rightPressed = false;
var leftPressed = false;


var rightPressedPlayer2 = false;
var leftPressedPlayer2 = false;

var sPressed = false;
var flechaPressed = false;

var posx = 120;
var posx2 = 120;

var disPlayer1 = 0;
var disPlayer2 = 0;

var existShoot = false;
var existShootPlayer2 = false;

var dy = 100;
var dy2 = 500; 

var temp1 = 0;
var temp2 = 0;

var puntajePlayer1 = 0;
var puntajePlayer2 = 0;

var aliensArrayAmarillo = [true,true,true,true,true] ;
var aliensArrayAzul = [true,true,true,true,true] ;
var aliensArrayRojo = [true,true,true,true,true] ;


class Jugar extends Component {
    constructor(props) {

        
        super(props)
        this.state = {

        }

        const canvasNumeros = document.getElementById('numeros');
        const ctx5 = canvasNumeros.getContext('2d');
        canvasNumeros.width = 900;
        canvasNumeros.height = 540;

        const canvasNumeros2 = document.getElementById('numeros2');
        const ctx6 = canvasNumeros2.getContext('2d');
        canvasNumeros2.width = 900;
        canvasNumeros2.height = 540;
        

        const canvasMapFondo = document.getElementById('fondo');
        const ctx2 = canvasMapFondo.getContext('2d');
        canvasMapFondo.width = 900;
        canvasMapFondo.height = 540;

        var fondo = new Image();
        fondo.src = fondoImagen;

        fondo.onload = function(){
            ctx2.drawImage(
                fondo,
                0,
                0,
                900,
                540


            );

        } 
        
        const canvasMap = document.getElementById('canvasGame');
        const ctx1 = canvasMap.getContext('2d');
        canvasMap.width = 900;
        canvasMap.height = 540;

        const canvasScore = document.getElementById('score');
        const ctx4 = canvasScore.getContext('2d');
        canvasScore.width = 900;
        canvasScore.height = 540;

        var scoreBoard = new Image();
        scoreBoard.src = tablero;

        scoreBoard.onload = function(){
            ctx4.drawImage(
                scoreBoard,
                820,
                220,
                80,
                80


            );

        }


       
        var playerThree = new Image();
        var playerTwo = new Image();

        playerThree.src = nave2;
        playerTwo.src = nave;

        playerTwo.onload = function(){
            ctx1.drawImage(
                playerTwo,
                posx2,
                500,
                60,
                40


            );

        }


        
        playerThree.onload = function () {
            ctx1.drawImage(
                playerThree,
                posx,
                10,
                60,
                40
            );
        }


        const canvasDisparo = document.getElementById('disparo');
        const ctx3 = canvasDisparo.getContext('2d');
        canvasDisparo.width = 900;
        canvasDisparo.height = 540;


        const canvasAliens = document.getElementById('aliens');
        const ctx7 = canvasAliens.getContext('2d');
        canvasAliens.width = 900;
        canvasAliens.height = 540;

        

        alienDibujar(aliensArrayAmarillo,aliensArrayAzul,aliensArrayRojo);
       

        function alienDibujar(isLive,isLive2,isLive3){
            
            var alien = new Image();
            alien.src = alien1;
            let x = 110;


            var alienYellow = new Image();
            alienYellow.src = alien2;

            var alienRed = new Image();
            alienRed.src = alien3;
            


            for(let z=0; z<6 ; z++){
                
                if(isLive[z]){
                    
                        ctx7.drawImage(alien, x, 220, 50, 50);
                        
                    
                }
                if(isLive2[z]){
                    ctx7.drawImage(alienYellow,x,265,50,50);

                }

                if(isLive3[z]){
                    ctx7.drawImage(alienRed,x,180,50,50);

                }
                x = x+60;
                


            }


        }




       

        







        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);

        document.addEventListener("keydown", keyDownHandlerPlayer2, false);
        document.addEventListener("keyup", keyUpHandlerPlayer2, false);



        function keyDownHandler(e) {
            if(e.keyCode == 83 && sPressed==false){
                disPlayer1= posx;
                sPressed = true;
                if(existShoot==false ){
                    drawDisparoPlayer1(disPlayer1);
                    existShoot = true;
                    wsreference.send(10,1,posx,1);
                    

                }         

             }
            if(e.keyCode == 68 && posx < 820) {
                rightPressed = true;
                posx = posx + 10;
                wsreference.send(10,1,posx,0);
                drawNave();
                
            }
            
            else if(e.keyCode == 65 && posx > 0) {
                
                leftPressed = true;
                posx = posx - 10;
                wsreference.send(-10,1,posx,0);
                drawNave();
                
            }
            
        }
        
        function keyUpHandler(e) {
            if(e.keyCode == 68) {
                rightPressed = false;
                
            }
            else if(e.keyCode == 65) {
                leftPressed = false;

            }
            else if(e.keyCode == 83) {
                sPressed = false;

            }
        }

        function keyDownHandlerPlayer2(e) {
            if(e.keyCode == 38 && flechaPressed==false){
                disPlayer2= posx2;
                flechaPressed = true;
                if(existShootPlayer2==false ){
                    drawDisparoPlayer2(disPlayer2);
                    existShootPlayer2 = true;
                    wsreference.send(10,2,posx2,1);
                    

                }         

             }
            if(e.keyCode == 39 && posx2 < 820) {
                rightPressedPlayer2 = true;
                posx2 = posx2 + 10;
                wsreference.send(10,2,posx2,0);
                drawNave();
            }
            else if(e.keyCode == 37 && posx2 > 0) {
                leftPressedPlayer2 = true;
                posx2 = posx2 - 10;
                wsreference.send(-10,2,posx2,0);
                drawNave();
                
            }
        }
        
        function keyUpHandlerPlayer2(e) {
            if(e.keyCode == 39) {
                rightPressedPlayer2 = false;
                
            }
            else if(e.keyCode == 37) {
                leftPressedPlayer2 = false;

            }
            else if(e.keyCode == 38) {
                flechaPressed = false;

            }
        }



        function drawNave(){
            ctx1.clearRect(0, 0, 900, 540);
            
            
            var playerThree = new Image();
            var playerTwo = new Image();
    
            playerThree.src = nave2;
            playerTwo.src = nave;
    
            playerTwo.onload = function(){
                ctx1.drawImage(
                    playerTwo,
                    posx2,
                    500,
                    60,
                    40
    
    
                );
    
            }
            playerThree.onload = function () {
                ctx1.drawImage(
                    playerThree,
                    posx,
                    10,
                    60,
                    40
                );
            }
            

        }

        function drawDisparoPlayer1(x){
            ctx3.clearRect(0, 0, 900, 540);
            
            var disparoRed = new Image();
            disparoRed.src = disparoImagen;
    
            ctx3.drawImage( disparoRed, x+10, dy,35,35 );
            dy = dy +40;
        

            

            
            if(dy==500 && x >= posx2 && x<=(posx2+60) ){
                console.log('hace colisión');
                puntajePlayer1++;

                if(puntajePlayer1==1){
                    console.log('entra a pintar el numero1');
                    ctx5.clearRect(0, 0, 900, 540);
            
                    var puntaje1 = new Image();
                    puntaje1.src = numero1;

                    puntaje1.onload = function () {
                        ctx5.drawImage(
                            puntaje1,
                            815,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer1==2){
                    console.log('entra a pintar el numero1');
                    ctx5.clearRect(0, 0, 900, 540);
            
                    var puntaje1 = new Image();
                    puntaje1.src = numero2;

                    puntaje1.onload = function () {
                        ctx5.drawImage(
                            puntaje1,
                            815,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer1==3){
                    console.log('entra a pintar el numero1');
                    ctx5.clearRect(0, 0, 900, 540);
            
                    var puntaje1 = new Image();
                    puntaje1.src = numero3;

                    puntaje1.onload = function () {
                        ctx5.drawImage(
                            puntaje1,
                            815,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer1==4){
                    console.log('entra a pintar el numero1');
                    ctx5.clearRect(0, 0, 900, 540);
            
                    var puntaje1 = new Image();
                    puntaje1.src = numero4;

                    puntaje1.onload = function () {
                        ctx5.drawImage(
                            puntaje1,
                            815,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }


                if(puntajePlayer1==5){
                    console.log('entra a pintar el numero1');
                    ctx5.clearRect(0, 0, 900, 540);
            
                    var puntaje1 = new Image();
                    puntaje1.src = numero5;

                    puntaje1.onload = function () {
                        ctx5.drawImage(
                            puntaje1,
                            815,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer1==6){
                    console.log('entra a pintar el numero1');
                    ctx5.clearRect(0, 0, 900, 540);
            
                    var puntaje1 = new Image();
                    puntaje1.src = numero6;

                    puntaje1.onload = function () {
                        ctx5.drawImage(
                            puntaje1,
                            815,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer1==7){
                    console.log('entra a pintar el numero1');
                    ctx5.clearRect(0, 0, 900, 540);
            
                    var puntaje1 = new Image();
                    puntaje1.src = numero7;

                    puntaje1.onload = function () {
                        ctx5.drawImage(
                            puntaje1,
                            815,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer1==8){
                    console.log('entra a pintar el numero1');
                    ctx5.clearRect(0, 0, 900, 540);
            
                    var puntaje1 = new Image();
                    puntaje1.src = numero8;

                    puntaje1.onload = function () {
                        ctx5.drawImage(
                            puntaje1,
                            815,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer1==9){
                    console.log('entra a pintar el numero1');
                    ctx5.clearRect(0, 0, 900, 540);
            
                    var puntaje1 = new Image();
                    puntaje1.src = numero9;

                    puntaje1.onload = function () {
                        ctx5.drawImage(
                            puntaje1,
                            815,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer1==10){
                    console.log('entra a pintar el numero1');
                    ctx5.clearRect(0, 0, 900, 540);
            
                    var puntaje1 = new Image();
                    puntaje1.src = numero10;

                    puntaje1.onload = function () {
                        ctx5.drawImage(
                            puntaje1,
                            825,
                            242,
                            40,
                            40
                        );
                    }
                    
            
               


                }


            }
            if(dy<500 ){
                var a = setTimeout(drawDisparoPlayer1,200,x);

            }
            else{
                clearInterval(a);
                ctx3.clearRect(0, 0, 900, 540);
                dy = 20;
                existShoot = false;
                temp1 =0;

            }
            
            
            
    
            
        }

        function drawDisparoPlayer2(x){
            var temp = dy2;
            ctx3.clearRect(0, 0, 900, 540);
            
            var disparoJugador2 = new Image();
            disparoJugador2.src = disparoGreenImagen;

            ctx3.drawImage( disparoJugador2,x+10, temp,35,35 );
    
            
    
            dy2 = dy2 - 40;

            let as = posx+60
           
            
            
            if(dy2>=-10 && dy2<= 50 && x >= posx && x<=(posx+60) ){
                console.log('hace colisión');
                puntajePlayer2++;

                if(puntajePlayer2==1){
                    console.log('entra a pintar el numero1');
                    ctx6.clearRect(0, 0, 900, 540);
            
                    var puntaje2 = new Image();
                    puntaje2.src = numero1;

                    puntaje2.onload = function () {
                        ctx6.drawImage(
                            puntaje2,
                            845,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer2==2){
                    console.log('entra a pintar el numero1');
                    ctx6.clearRect(0, 0, 900, 540);
            
                    var puntaje2 = new Image();
                    puntaje2.src = numero2;

                    puntaje2.onload = function () {
                        ctx6.drawImage(
                            puntaje2,
                            845,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer2==3){
                    console.log('entra a pintar el numero1');
                    ctx6.clearRect(0, 0, 900, 540);
            
                    var puntaje2 = new Image();
                    puntaje2.src = numero3;

                    puntaje2.onload = function () {
                        ctx6.drawImage(
                            puntaje2,
                            845,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer2==4){
                    console.log('entra a pintar el numero1');
                    ctx6.clearRect(0, 0, 900, 540);
            
                    var puntaje2 = new Image();
                    puntaje2.src = numero4;

                    puntaje2.onload = function () {
                        ctx6.drawImage(
                            puntaje2,
                            845,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }


                if(puntajePlayer2==5){
                    console.log('entra a pintar el numero1');
                    ctx6.clearRect(0, 0, 900, 540);
            
                    var puntaje2 = new Image();
                    puntaje2.src = numero5;

                    puntaje2.onload = function () {
                        ctx6.drawImage(
                            puntaje2,
                            845,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer2==6){
                    console.log('entra a pintar el numero1');
                    ctx6.clearRect(0, 0, 900, 540);
            
                    var puntaje2 = new Image();
                    puntaje2.src = numero6;

                    puntaje2.onload = function () {
                        ctx6.drawImage(
                            puntaje2,
                            845,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer2==7){
                    console.log('entra a pintar el numero1');
                    ctx6.clearRect(0, 0, 900, 540);
            
                    var puntaje2 = new Image();
                    puntaje2.src = numero7;

                    puntaje2.onload = function () {
                        ctx6.drawImage(
                            puntaje2,
                            845,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer2==8){
                    console.log('entra a pintar el numero1');
                    ctx6.clearRect(0, 0, 900, 540);
            
                    var puntaje2 = new Image();
                    puntaje2.src = numero8;

                    puntaje2.onload = function () {
                        ctx6.drawImage(
                            puntaje2,
                            845,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer2==9){
                    console.log('entra a pintar el numero1');
                    ctx6.clearRect(0, 0, 900, 540);
            
                    var puntaje2 = new Image();
                    puntaje2.src = numero9;

                    puntaje2.onload = function () {
                        ctx6.drawImage(
                            puntaje2,
                            845,
                            242,
                            60,
                            40
                        );
                    }
                    
            
               


                }

                if(puntajePlayer2==10){
                    console.log('entra a pintar el numero1');
                    ctx6.clearRect(0, 0, 900, 540);
            
                    var puntaje2 = new Image();
                    puntaje2.src = numero10;

                    puntaje2.onload = function () {
                        ctx6.drawImage(
                            puntaje2,
                            850,
                            242,
                            50,
                            40
                        );
                    }
                    
            
               


                }
            }

           if(dy2>5){
                var a = setTimeout(drawDisparoPlayer2,200,x);

            }
            else{
                console.log('entra al else');
                clearInterval(a);
                ctx3.clearRect(0, 0, 900, 540);
                dy2 = 500;
                existShootPlayer2 = false;
                temp2 =0;

            }
            
    
            
        }
        

        function GalaxyServiceURL() {
            var host = window.location.host;
	        var url = 'wss://' + (host) + '/bomberService';
	        var url2 = 'ws://localhost:8080/galaxyGame';
            return url2;
        }

        class GalaxyGameChannel {
            constructor(URL, callback) {
                this.URL = URL;
                this.wsocket = new WebSocket(URL);
                this.wsocket.onopen = (evt) => this.onOpen(evt);
                this.wsocket.onmessage = (evt) => this.onMessage(evt);
                this.wsocket.onerror = (evt) => this.onError(evt);
                this.receivef = callback;
            }
            onOpen(evt) {
                console.log("In onOpen", evt);
            }
            onMessage(evt) {
                console.log("In onMessage", evt);
                // Este if permite que el primer mensaje del servidor no se tenga en cuenta.
                // El primer mensaje solo confirma que se estableció la conexión.
		        // De ahí en adelante intercambiaremos solo puntos(x,y) con el servidor
                if (evt.data != "Connection established.") {
                    this.receivef(evt.data);
                }
            }
            onError(evt) {
                console.error("In onError", evt);
            }
            send(x,y,posx,isShoot) {
                let msg = '{ "x": ' + (x) + ', "y": ' + (y) +', "posx": ' + (posx) + ', "isShoot": ' + (isShoot) + "}";
                //let msg = '{ "y": ' + (press) + "}";
                console.log("sending: ", msg);
                this.wsocket.send(msg);
            }
       
    }

    var comunicationWS = new GalaxyGameChannel(GalaxyServiceURL(),
    (msg) => {
        var obj = JSON.parse(msg);
        console.log("On func call back ", msg);
        if(obj.y==1){
            if(obj.isShoot == 1 && temp1==1){
                console.log('entra a real time 1');
                drawDisparoPlayer1(obj.posx);

            }
            temp1 = 1;
            posx += obj.x;

        }
        else if(obj.y==2){
            if(obj.isShoot == 1 && temp2==1){
                drawDisparoPlayer2(obj.posx);
                console.log('entra a real time 2');

            }
            temp2 = 1;
            posx2 += obj.x;

        }
        
        
        
        
        drawNave();
        
        
        

    });

    let wsreference = comunicationWS;

       
  }

    

    render() {
        return (
          <div></div>
        );
    }
}

export default Jugar;