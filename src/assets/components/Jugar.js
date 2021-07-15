import React, { Component } from 'react';
import nave2 from '../images/nave2.png';
import nave from '../images/nave.png';
import fondoImagen from '../images/Captura2.PNG';

import '../css/App.css';

var rightPressed = false;
var leftPressed = false;


var rightPressedPlayer2 = false;
var leftPressedPlayer2 = false;

var posx = 120;
var posx2 = 120;

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

        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);

        document.addEventListener("keydown", keyDownHandlerPlayer2, false);
        document.addEventListener("keyup", keyUpHandlerPlayer2, false);



        function keyDownHandler(e) {
            if(e.keyCode == 68 && posx2 < 700) {
                rightPressed = true;
                posx = posx + 10;
                wsreference.send(10,1);
                drawNave();
            }
            else if(e.keyCode == 65 && posx2 > 0) {
                leftPressed = true;
                posx = posx - 10;
                wsreference.send(-10,1);
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
        }

        function keyDownHandlerPlayer2(e) {
            if(e.keyCode == 39 && posx < 700) {
                rightPressedPlayer2 = true;
                posx2 = posx2 + 10;
                wsreference.send(10,2);
                drawNave();
            }
            else if(e.keyCode == 37 && posx > 0) {
                leftPressedPlayer2 = true;
                posx2 = posx2 - 10;
                wsreference.send(-10,2);
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

        function GalaxyServiceURL() {
            return 'ws:http://back-proyecto.herokuapp.com/galaxyGame';
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
            send(x,y) {
                let msg = '{ "x": ' + (x) + ', "y": ' + (y) + "}";
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
            posx += obj.x;

        }
        else if(obj.y==2){
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