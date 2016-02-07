module scenes {
    export class outcomeC1Ending extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _GameLabel: createjs.Text;
        private _nextButton: objects.Button;

        private _mainBG: createjs.Bitmap;
        private _outcomeC1EndingSound: HTMLAudioElement;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add background picture
            this._mainBG = new createjs.Bitmap(assets.getResult("EndingC1"));
            this._mainBG.x = 300;
            this._mainBG.y = 100;

            this.addChild(this._mainBG);

            // add the label to the scene
            this._GameLabel = new createjs.Text("Leon later.."
                + "\nGot arrested by the police !"
                + "\nHe was sentences with First-degree murder"
                + "\nPeople say he turns psycho later in jail....", "20px Arial", "#e6e6e6");

            this._GameLabel.x = 100;
            this._GameLabel.y = 0;
            this.addChild(this._GameLabel);

            // add the BACK button to the  scene
            this._nextButton = new objects.Button(
                "playAgain",
                97,
                560);
            this.addChild(this._nextButton);
           
            // BACK Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);           
           

            // add this scene to the global stage container
            stage.addChild(this);
            
            //BMG
            this._outcomeC1EndingSound = new Audio('../../Assets/Sound/B3Sound.mp3');
            this._outcomeC1EndingSound.loop = true;
            this._outcomeC1EndingSound.volume = 0.7;
            this._outcomeC1EndingSound.play();

        }

        // Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            // stop bmg before go back to menu
            this._outcomeC1EndingSound.pause();
            this._outcomeC1EndingSound.currentTime = 0;;
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}