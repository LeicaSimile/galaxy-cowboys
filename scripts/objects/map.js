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
    var Map = /** @class */ (function (_super) {
        __extends(Map, _super);
        function Map(imageString) {
            var _this = _super.call(this, managers.Game.assetManager.getResult(imageString)) || this;
            _this.start();
            return _this;
        }
        Map.prototype._checkBounds = function () { };
        Map.prototype._reset = function () {
            // Start at the bottom left of the map
            this.x = 0;
            this.y = -this.height + managers.Game.HEIGHT;
        };
        Map.prototype._move = function () {
            this.y += this._dy;
        };
        Map.prototype.start = function () {
            this._dy = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._reset();
        };
        Map.prototype.update = function () {
        };
        return Map;
    }(createjs.Bitmap));
    objects.Map = Map;
})(objects || (objects = {}));
//# sourceMappingURL=map.js.map