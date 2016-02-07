var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var outcomeB2 = (function (_super) {
        __extends(outcomeB2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function outcomeB2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        outcomeB2.prototype.start = function () {
            //Add background picture
            this._mainBG = new createjs.Bitmap(assets.getResult("outcomeB2"));
            this._mainBG.x = 0;
            this._mainBG.y = 100;
            this.addChild(this._mainBG);
            // add the label to the scene
            this._GameLabel = new createjs.Text("...Leon hears an annoying sound... It sound like bone-cracking"
                + "\n...He walks to the car window... The unknown man is hitting the poor girl with his hammer"
                + "\nThere is no way Leon can get to her...he witnesses that horrible moment"
                + "\nHe will never forget those images till the end of his life !", "20px Arial", "#e6e6e6");
            this._GameLabel.x = 100;
            this._GameLabel.y = 0;
            this.addChild(this._GameLabel);
            // add the BACK button to the  scene
            this._backButton = new objects.Button("playAgain", 97, 560);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
            this._outcomeB2Sound = new Audio('../../Assets/Sound/B2Sound.mp3');
            this._outcomeB2Sound.loop = true;
            this._outcomeB2Sound.play();
        };
        // Scene updates here
        outcomeB2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        outcomeB2.prototype._backButtonClick = function (event) {
            this._outcomeB2Sound.pause();
            this._outcomeB2Sound.currentTime = 0;
            ;
            scene = config.Scene.MENU;
            changeScene();
        };
        return outcomeB2;
    })(objects.Scene);
    scenes.outcomeB2 = outcomeB2;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcomeB2.js.map