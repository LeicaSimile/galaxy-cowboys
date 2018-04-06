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
var objects;
(function (objects) {
    var Powerup = /** @class */ (function (_super) {
        __extends(Powerup, _super);
        function Powerup(powerupType, scene) {
            var _this = this;
            var imageString;
            switch (powerupType) {
                case config.Powerup.SUPERSPEED:
                    break;
                case config.Powerup.SUPERARMOUR:
                    break;
                case config.Powerup.WARSHIP:
                    break;
            }
            _this = _super.call(this, managers.Game.assetManager.getResult(imageString)) || this;
            _this.powerupType = powerupType;
            _this.scene = scene;
            _this.start();
            return _this;
        }
        Powerup.getRandomType = function () {
            /* ======== Powerup chances ==========
                        Super speed chance = 47.5%
                       Super armour chance = 47.5%
               Warship fire support chance = 5%
            */
            var randomType;
            var random = Math.random();
            if (random < 0.475) {
                randomType = config.Powerup.SUPERSPEED;
            }
            else if (random < 0.95) {
                randomType = config.Powerup.SUPERARMOUR;
            }
            else {
                randomType = config.Powerup.WARSHIP;
            }
            return randomType;
        };
        Powerup.prototype.activateSuperSpeed = function () {
            this.scene.player.mvspd *= 2;
        };
        Powerup.prototype.activateSuperArmour = function () {
            this.scene.player.hp += 1;
        };
        Powerup.prototype.activateWarship = function () {
        };
        Powerup.prototype.start = function () {
            switch (this.powerupType) {
                case config.Powerup.SUPERSPEED:
                    this.activationFunction = this.activateSuperSpeed;
                    this.duration = 10;
                    break;
                case config.Powerup.SUPERARMOUR:
                    this.activationFunction = this.activateSuperArmour;
                    this.duration = -1;
                    break;
                case config.Powerup.WARSHIP:
                    this.activationFunction = this.activateWarship;
                    this.duration = -1;
                    break;
            }
            this.activate();
        };
        Powerup.prototype.update = function () {
        };
        Powerup.prototype.activate = function () {
            // Activate powerup
            this.activationTime = new Date().getMilliseconds();
            this.activationFunction();
        };
        return Powerup;
    }(createjs.Bitmap));
    objects.Powerup = Powerup;
})(objects || (objects = {}));
//# sourceMappingURL=powerup.js.map