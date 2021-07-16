import React, { Component } from 'react';
import nave2 from '../images/nave2.png';
import nave from '../images/nave.png';
import fondoImagen from '../images/Captura2.PNG';
import disparoImagen from '../images/shooRed.png';
import disparoGreenImagen from '../images/shootGreen.png';

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


class Jugar extends Component {
    constructor(props) {

        
        super(props)
        this.state = {

        }

        
        

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

        







        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);

        document.addEventListener("keydown", keyDownHandlerPlayer2, false);
        document.addEventListener("keyup", keyUpHandlerPlayer2, false);



        function keyDownHandler(e) {
            if(e.keyCode == 83 && sPressed==false){
                disPlayer1= posx;
                sPressed = true;
                if(existShoot==false ){
                    console.log('entra a player 1 send');
                    drawDisparoPlayer1(disPlayer1);
                    existShoot = true;
                    wsreference.send(10,1,posx,1);
                    

                }         

             }
            if(e.keyCode == 68 && posx < 820) {
                console.log('oprimió la tecla d');
                rightPressed = true;
                posx = posx + 10;
                console.log('posx '+ posx);
                wsreference.send(10,1,posx,0);
                drawNave();
                
            }
            
            else if(e.keyCode == 65 && posx > 0) {
                
                console.log('oprimió la tecla a');
                leftPressed = true;
                posx = posx - 10;
                console.log('posx '+ posx);
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
                console.log('entra a flecha');
                disPlayer2= posx2;
                flechaPressed = true;
                if(existShootPlayer2==false ){
                    console.log('entra a player 2 send');
                    drawDisparoPlayer2(disPlayer2);
                    existShootPlayer2 = true;
                    wsreference.send(10,2,posx2,1);
                    

                }         

             }
            if(e.keyCode == 39 && posx2 < 820) {
                rightPressedPlayer2 = true;
                posx2 = posx2 + 10;
                console.log('posx2 '+ posx2);
                wsreference.send(10,2,posx2,0);
                drawNave();
            }
            else if(e.keyCode == 37 && posx2 > 0) {
                leftPressedPlayer2 = true;
                posx2 = posx2 - 10;
                console.log('posx2 '+ posx2);
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



            

            if(dy<540){
                var a = setTimeout(drawDisparoPlayer1,200,x);

            }else{
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

            disparoJugador2.onload = function(){
                ctx3.drawImage( disparoJugador2,x+10, temp,35,35 );
    
            }
    
            dy2 = dy2 -40;


           if(dy2>-10){
                var a = setTimeout(drawDisparoPlayer2,200,x);

            }else{
                clearInterval(a);
                ctx3.clearRect(0, 0, 900, 540);
                dy2 = 500;
                existShootPlayer2 = false;
                temp2 =0;

            }
            
    
            
        }
        

        function GalaxyServiceURL() {
            return 'wss://back-proyecto.herokuapp.com/galaxyGame';
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