/// <reference path = "_reference.ts" />


/*
 *******************************************************************************
 * Source file name : game.ts                                                  *
 * Author's name : Duc Minh Tran (300771859)                                   *
 * Last Modified by : Duc Minh Tran (300771859)                                *
 * Last Modified date : Feb 2016                                               *
 * Program description : This web game, by using create js, is kind of         *
 *                     simulation game to survive on the last train. User can  *
 *                     choose options per each page, and user will be          *
 *                     faced different result by their choices.                *
 * Revision History : 1.1                                                      *
 *******************************************************************************
*/

// global variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes

var menu: scenes.Menu;
var tut: scenes.TUTORIAL;
var gameScene1: scenes.gameScene1;
var decisionA: scenes.decisionA;
var outcomeA1: scenes.outcomeA1;
var outcomeA2: scenes.outcomeA2;
var outcomeA3: scenes.outcomeA3;
var decisionB: scenes.decisionB;
var outcomeB1: scenes.outcomeB1;
var outcomeB2: scenes.outcomeB2;
var outcomeB3: scenes.outcomeB3;
var outcomeB4: scenes.outcomeB4;
var decisionC: scenes.decisionC;
var outcomeC1: scenes.outcomeC1;
var outcomeC2: scenes.outcomeC2;
var outcomeC3: scenes.outcomeC3;
var outcomeC1Ending: scenes.outcomeC1Ending;
var outcomeC2Ending: scenes.outcomeC2Ending;
var bmg: HTMLAudioElement;
var sound: HTMLAudioElement;
var assets: createjs.LoadQueue;

var assetData: objects.Asset[] = [
    { id: "A1", src: "../../Assets/images/A1.png" },
    { id: "A2", src: "../../Assets/images/A2.png" },
    { id: "A3", src: "../../Assets/images/A3.png" },
    { id: "B1", src: "../../Assets/images/B1.png" },
    { id: "B2", src: "../../Assets/images/B2.png" },
    { id: "B3", src: "../../Assets/images/B3.png" },
    { id: "B4", src: "../../Assets/images/B4.png" },
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "C1", src: "../../Assets/images/C1.png" },
    { id: "C2", src: "../../Assets/images/C2.png" },
    { id: "C3", src: "../../Assets/images/C3.png" },
    { id: "decisionA", src: "../../Assets/images/decisionA.png" },
    { id: "decisionB", src: "../../Assets/images/decisionB.jpg" },
    { id: "decisionC", src: "../../Assets/images/decisionC.jpg" },
    { id: "endingC1", src: "../../Assets/images/endingC1.jpg" },
    { id: "endingC2", src: "../../Assets/images/endingC2.jpg" },
    { id: "GameScene1", src: "../../Assets/images/GameScene1.jpg" },
    { id: "MainMenu", src: "../../Assets/images/MainMenu.jpg" },
    { id: "NextButton", src: "../../Assets/images/NextButton.png" },
    { id: "outcomeA1", src: "../../Assets/images/outcomeA1.jpg" },
    { id: "outcomeA2", src: "../../Assets/images/outcomeA2.png" },
    { id: "outcomeA3", src: "../../Assets/images/outcomeA3.png" },
    { id: "outcomeB1", src: "../../Assets/images/outcomeB1.jpg" },
    { id: "outcomeB2", src: "../../Assets/images/outcomeB2.jpg" },
    { id: "outcomeB3", src: "../../Assets/images/outcomeB3.png" },
    { id: "outcomeB4", src: "../../Assets/images/outcomeB4.jpg" },
    { id: "outcomeC1", src: "../../Assets/images/outcomeC1.jpg" },
    { id: "outcomeC2", src: "../../Assets/images/outcomeC2.jpg" },
    { id: "outcomeC3", src: "../../Assets/images/outcomeC3.png" },
    { id: "playAgain", src: "../../Assets/images/playAgain.png" },
    { id: "PlayButton", src: "../../Assets/images/PlayButton.png" },
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "TutBG", src: "../../Assets/images/TutBG.jpg" },
    
    //Sound
    { id: "A1Sound", src: "../../Assets/Sound/A1Sound.mp3" },
    { id: "A2Sound", src: "../../Assets/Sound/A2Sound.mp3" },
    { id: "B2Sound", src: "../../Assets/Sound/B2Sound.mp3" },
    { id: "B3Sound", src: "../../Assets/Sound/B3Sound.mp3" },
    { id: "B4Sound", src: "../../Assets/Sound/B4Sound.mp3" },
    { id: "BMG", src: "../../Assets/Sound/BMG.mp3" },
    { id: "C1Sound", src: "../../Assets/Sound/C1Sound.mp3" },
    { id: "C3Sound", src: "../../Assets/Sound/C3Sound.mp3" },
    { id: "trainBell", src: "../../Assets/Sound/trainBell.mp3" }
]



function preLoad(): void {


    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);



}






function init(): void {
    //Set up BMG
    /*bmg = new Audio('../../Assets/Sound/bmg.mp3');
    bmg.loop = true;
    bmg.volume = 0.7;
    bmg.play();

    sound = new Audio('../../Assets/Sound/trainBell.wma')
    sound.loop = true;
    sound.volume = 0.1;
    sound.play();*/
    
    
    //Sound Preloaded    
    createjs.Sound.play("BMG");
    createjs.Sound.play("trainBell", 0, 0, 0, -1, 0.1, 0);
    
    
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();



}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    stage.removeAllChildren();
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene            
            menu = new scenes.Menu();
            currentScene = menu;
            //Play BMG on menu
            createjs.Sound.play("BMG");
            createjs.Sound.play("trainBell", 0, 0, 0, -1, 0.1, 0);
            break;
        case config.Scene.TUTORIAL:
            // show the Tutorial scene            
            tut = new scenes.TUTORIAL();
            currentScene = tut;
            console.log("Starting Tutorial Scene");
            break;
        case config.Scene.gameScene1:
            // show the game first scene            
            gameScene1 = new scenes.gameScene1();
            currentScene = gameScene1;
            break;
        case config.Scene.decisionA:
            // show the first Decision scene            
            decisionA = new scenes.decisionA();
            currentScene = decisionA;
            break;
        // show different outcome from the first decision
        case config.Scene.outcomeA1:
            outcomeA1 = new scenes.outcomeA1();
            currentScene = outcomeA1;
            break;
        case config.Scene.outcomeA2:
            outcomeA2 = new scenes.outcomeA2();
            currentScene = outcomeA2;
            break;
        case config.Scene.outcomeA3:
            outcomeA3 = new scenes.outcomeA3();
            currentScene = outcomeA3;
            break;
        case config.Scene.decisionB:
            // show the second Decision scene            
            decisionB = new scenes.decisionB();
            currentScene = decisionB;
            break;
        // show different outcome from the second decision
        case config.Scene.outcomeB1:
            outcomeB1 = new scenes.outcomeB1();
            currentScene = outcomeB1;
            break;
        case config.Scene.outcomeB2:
            outcomeB2 = new scenes.outcomeB2();
            currentScene = outcomeB2;
            break;
        case config.Scene.outcomeB3:
            outcomeB3 = new scenes.outcomeB3();
            currentScene = outcomeB3;
            break;
        case config.Scene.outcomeB4:
            outcomeB4 = new scenes.outcomeB4();
            currentScene = outcomeB4;            
            //This is happy ending scene
            //There is no Horror anymore
            bmg.pause();
            bmg.currentTime = 0;
            sound.pause();
            sound.currentTime = 0;
            break;
        case config.Scene.decisionC:
            // show the third decision scene            
            decisionC = new scenes.decisionC();
            currentScene = decisionC;
            break;
        // show the different outcomes scene from third decision
        case config.Scene.outcomeC1:
            outcomeC1 = new scenes.outcomeC1();
            currentScene = outcomeC1;
            break;
        case config.Scene.outcomeC2:
            outcomeC2 = new scenes.outcomeC2();
            currentScene = outcomeC2;
            break;
        // show ending scene base on user decision 
        case config.Scene.outcomeC1Ending:
            outcomeC1Ending = new scenes.outcomeC1Ending();
            currentScene = outcomeC1Ending;
            break;
        case config.Scene.outcomeC2Ending:
            outcomeC2Ending = new scenes.outcomeC2Ending();
            currentScene = outcomeC2Ending;
            break;
        case config.Scene.outcomeC3:
            outcomeC3 = new scenes.outcomeC3();
            currentScene = outcomeC3;
            break;
    }

    //get curernt scene code
    console.log(currentScene.numChildren);
}