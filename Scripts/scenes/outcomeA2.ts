module scenes {
    export class outcomeA2 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _GameLabel: createjs.Text;
        private _backButton: objects.Button;
        private _mainBG: createjs.Bitmap;
        private _outcomeA2Sound: HTMLAudioElement;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add background picture
            this._mainBG = new createjs.Bitmap(assets.getResult("outcomeA2"));
            this._mainBG.x = 0;
            this._mainBG.y = 50;

            this.addChild(this._mainBG);


            //add bmg to the scene
            this._outcomeA2Sound = new Audio('../../Assets/Sound/A2Sound.mp3');
            this._outcomeA2Sound.play();
            // add the label to the scene
            this._GameLabel = new createjs.Text("Leon ran away for help...But when he gets back..."
                + "\nThe woman ends up getting kidnapped and has never been found again."
                + "\nTragedy...", "20px Arial", "#e6e6e6");
            
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


        }

        // Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}