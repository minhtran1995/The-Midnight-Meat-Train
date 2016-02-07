module scenes {
    export class outcomeB4 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _GameLabel: createjs.Text;
        private _backButton: objects.Button;

        private _mainBG: createjs.Bitmap;
        private _outcomeB4Sound: HTMLAudioElement;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add background picture
            this._mainBG = new createjs.Bitmap(assets.getResult("outcomeB4"));
            this._mainBG.x = 0;
            this._mainBG.y = 100;

            this.addChild(this._mainBG);

            // add the label to the scene
            this._GameLabel = new createjs.Text("Leon convinces the girl to take the cab with him...."
                + "\n...He doesn't feel safe when let the girl be alone on the way home"
                + "\nHe calls the cab..."
                + "\nBoth of Them are alive - Good Ending ~~~", "20px Arial", "#e6e6e6");

            this._GameLabel.x = 100;
            this._GameLabel.y = 0;
            this.addChild(this._GameLabel);

            // add the BACK button to the  scene
            this._backButton = new objects.Button(
                "playAgain",
                97,
                560);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);           
           

            // add this scene to the global stage container
            stage.addChild(this);
            
            //BMG
            this._outcomeB4Sound = new Audio('../../Assets/Sound/B4Sound.mp3');
            this._outcomeB4Sound.loop = true;
            this._outcomeB4Sound.volume = 0.7;
            this._outcomeB4Sound.play();

        }

        // Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            this._outcomeB4Sound.pause();
            this._outcomeB4Sound.currentTime = 0;;
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}