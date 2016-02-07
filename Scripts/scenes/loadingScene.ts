// MENU SCENE
module scenes {
    export class loadingScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _gameLabel: createjs.Text;

        private _loader: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            //Add background picture
            this._loader = new createjs.Bitmap("../../Assets/images/loader.gif");
            this._loader.regX = 100;
            this._loader.regY = 66.5;
            this._loader.x = config.Screen.CENTER_X;
            this._loader.y = config.Screen.CENTER_Y;
            this.addChild(this._loader);
            
            // add the MENU label to the scene
            this._gameLabel = new createjs.Text("Loading", "45px Arial", "#e6e6e6");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X;
            this._gameLabel.y = config.Screen.CENTER_Y - 200;
            this.addChild(this._gameLabel);

            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {
            this._loader.rotation += 5;
        }





    }
}