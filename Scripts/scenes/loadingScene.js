var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var loadingScene = (function (_super) {
        __extends(loadingScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function loadingScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        loadingScene.prototype.start = function () {
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
        };
        // MENU Scene updates here
        loadingScene.prototype.update = function () {
            this._loader.rotation += 5;
        };
        return loadingScene;
    })(objects.Scene);
    scenes.loadingScene = loadingScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=loadingScene.js.map