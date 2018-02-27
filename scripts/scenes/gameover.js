var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        GameOverScene.prototype.Start = function () {
            _super.prototype.Start.call(this);
            this._background = new ui.Background(this.assetManager, "gameover");
            this._startButton2 = new ui.Button(this.assetManager, "startButton2", objects.Game.WIDTH / 2, 320, 1, true);
            this._startButton = new ui.Button(this.assetManager, "startButton", objects.Game.WIDTH / 2, 320, 0.1, true);
            this.Main();
        };
        GameOverScene.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return GameOverScene;
    }(scenes.StartScene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map