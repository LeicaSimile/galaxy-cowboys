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
    var Projectile = /** @class */ (function (_super) {
        __extends(Projectile, _super);
        function Projectile(imageName, origin, destination, mvspd) {
            if (mvspd === void 0) { mvspd = 2; }
            var _this = _super.call(this, imageName, origin.x, origin.y) || this;
            _this._origin = origin;
            _this._destination = destination;
            _this.mvspd = mvspd;
            createjs.Sound.play("shot");
            return _this;
        }
        Projectile.prototype.update = function () {
            this.move();
        };
        Projectile.prototype.getNextPosition = function () {
            var newX;
            var newY;
            var run = math.Vec2.run(this._origin, this._destination);
            var rise = math.Vec2.rise(this._origin, this._destination);
            var c;
            var divisor;
            c = Math.sqrt(Math.pow(run, 2) + Math.pow(rise, 2));
            divisor = c / this.movementAmount;
            run = Math.abs(run / divisor);
            rise = Math.abs(rise / divisor);
            if (this._destination.x < this._origin.x) {
                run *= -1; // move left
            }
            if (this._destination.y < this._origin.y) {
                rise *= -1; // move down
            }
            newX = Math.round(this.x + run);
            newY = Math.round(this.y + rise);
            return new math.Vec2(newX, newY);
        };
        Projectile.prototype.move = function () {
            var newPosition = this.getNextPosition();
            this.x = newPosition.x;
            this.y = newPosition.y;
        };
        Projectile.prototype.collide = function (other) {
            if (other instanceof animate.Animate) {
                other.hp -= 1; // TODO: Decrease according to damage
            }
        };
        return Projectile;
    }(objects.GameObject));
    objects.Projectile = Projectile;
})(objects || (objects = {}));
//# sourceMappingURL=projectile.js.map