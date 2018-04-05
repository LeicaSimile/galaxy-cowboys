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
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        function GameObject(imageName, px, py) {
            var _this = _super.call(this, managers.Game.assetManager.getResult(imageName)) || this;
            _this.name = imageName;
            _this.x = px;
            _this.y = py;
            _this._initialize();
            return _this;
        }
        Object.defineProperty(GameObject.prototype, "leftX", {
            get: function () {
                return this.x - this.halfWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "rightX", {
            get: function () {
                return this.x + this.halfWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "topY", {
            get: function () {
                return this.y - this.halfHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "bottomY", {
            get: function () {
                return this.y + this.halfHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "mvspd", {
            get: function () {
                return this._mvspd;
            },
            set: function (mvspd) {
                this._mvspd = mvspd;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "movementAmount", {
            get: function () {
                return managers.Game.BASE_MVSPD * this.mvspd;
            },
            enumerable: true,
            configurable: true
        });
        GameObject.prototype._initialize = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.isColliding = false;
        };
        GameObject.prototype.reset = function () { };
        GameObject.prototype.checkBounds = function (other) {
            if (other === void 0) { other = null; }
        };
        GameObject.prototype.move = function () { };
        GameObject.prototype.start = function () { };
        GameObject.prototype.update = function () { };
        GameObject.prototype.collide = function (other) { };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map