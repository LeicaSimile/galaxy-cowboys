var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var pointA = new math.Vec2(object1.x, object1.y);
            var pointB = new math.Vec2(object2.x, object2.y);
            // Check for collision
            if (math.Vec2.distance(pointA, pointB) < (object1.halfHeight + object2.halfHeight)) {
                object1.collide(object2);
                object2.collide(object1);
                if (!object2.isColliding) {
                    console.log("Collision with " + object2.name);
                    object2.isColliding = true;
                    return true;
                }
            }
            else {
                object2.isColliding = false;
            }
            return false;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map