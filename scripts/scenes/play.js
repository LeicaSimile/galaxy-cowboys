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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        function PlayScene(mapString) {
            var _this = _super.call(this) || this;
            _this._projectiles = [];
            _this._map = new objects.Map(mapString);
            managers.Game.isPlaying = true;
            _this.on("click", _this.onClick);
            return _this;
        }
        PlayScene.prototype.start = function () {
        };
        PlayScene.prototype.update = function () {
            var _this = this;
            if (managers.Game.keyboardManager.paused) {
                return managers.Game.currentScene;
            }
            // TODO: centralize collision check
            this._player.isColliding = false;
            this._map.update();
            this._player.update();
            if (this._projectiles.length) {
                var keepers_1 = [];
                this._projectiles.forEach(function (projectile, index) {
                    projectile.update();
                    // If off-screen, remove projectile
                    if (projectile.y >= managers.Game.BOTTOM_BOUNDARY + projectile.halfHeight ||
                        projectile.y <= managers.Game.TOP_BOUNDARY - projectile.halfHeight ||
                        projectile.x >= managers.Game.RIGHT_BOUNDARY + projectile.halfWidth ||
                        projectile.x <= managers.Game.LEFT_BOUNDARY - projectile.halfWidth) {
                        _this.removeChild(projectile);
                    }
                    else {
                        keepers_1.push(projectile);
                    }
                });
                this._projectiles = keepers_1;
            }
            // Check for collisions
            this._enemies.forEach(function (enemy) {
                enemy.update();
                if (managers.Collision.check(_this._player, enemy)) {
                    _this._player.isColliding = true;
                }
            });
            if (!this._player.isColliding) {
                this._player.lastValidPosition.x = this._player.x;
                this._player.lastValidPosition.y = this._player.y;
            }
            return managers.Game.currentScene;
        };
        PlayScene.prototype.main = function () {
            var _this = this;
            this.addChild(this._map);
            this._enemies.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this._player);
        };
        PlayScene.prototype.onClick = function () {
            var playerPos = new math.Vec2(this._player.x, this._player.y);
            var targetPos = new math.Vec2(managers.Game.stage.mouseX, managers.Game.stage.mouseY);
            var newProjectile = new objects.Projectile("bullet", playerPos, targetPos);
            this._projectiles.push(newProjectile);
            this.addChild(newProjectile);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map