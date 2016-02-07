var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// OVER SCENE
var scenes;
(function (scenes) {
    var gameScene1 = (function (_super) {
        __extends(gameScene1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function gameScene1() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        gameScene1.prototype.start = function () {
            //Add background picture
            this._mainBG = new createjs.Bitmap(assets.getResult("GameScene1"));
            this._mainBG.x = config.Screen.WIDTH - 850;
            this._mainBG.y = config.Screen.HEIGHT - 564;
            this.addChild(this._mainBG);
            // add the label to the scene
            this._GameLabel = new createjs.Text("A photographer, Leon is obsessed with dark subject matter"
                + "\nHe's loitering at night time, trying to capture images of the dark Urban Life", "20px Arial", "#e6e6e6");
            this._GameLabel.x = 100;
            this._GameLabel.y = 100;
            this.addChild(this._GameLabel);
            // add the BACK button to the OVER scene
            this._backButton = new objects.Button("BackButton", 800, 560);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add the NEXT button to the OVER scene
            this._nextButton = new objects.Button("NextButton", 950, 560);
            this.addChild(this._nextButton);
            // BACK Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        gameScene1.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        gameScene1.prototype._backButtonClick = function (event) {
            scene = config.Scene.TUTORIAL;
            changeScene();
        };
        // Switch to the next Scene
        gameScene1.prototype._nextButtonClick = function (event) {
            scene = config.Scene.decisionA;
            changeScene();
        };
        return gameScene1;
    })(objects.Scene);
    scenes.gameScene1 = gameScene1;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameScene1.js.map