"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonSignificant = _interopRequireDefault(require("../../token/nonSignificant"));
var _types = require("../../types");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var WhitespaceToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(WhitespaceToken, NonSignificantToken);
    var _super = _createSuper(WhitespaceToken);
    function WhitespaceToken() {
        _classCallCheck(this, WhitespaceToken);
        return _super.apply(this, arguments);
    }
    _createClass(WhitespaceToken, [
        {
            key: "asHTML",
            value: function asHTML() {
                var html = this.innerHTML; ///
                return html;
            }
        },
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(WhitespaceToken.prototype), "clone", this).call(this, WhitespaceToken, startPosition, endPosition);
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _nonSignificant.default.match(WhitespaceToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _nonSignificant.default.fromContent(WhitespaceToken, content);
            }
        }
    ]);
    return WhitespaceToken;
}(_nonSignificant.default);
exports.default = WhitespaceToken;
_defineProperty(WhitespaceToken, "type", _types.whitespaceType);
_defineProperty(WhitespaceToken, "regularExpression", /^[\t ]+/);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC93aGl0ZXNwYWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgd2hpdGVzcGFjZVR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2hpdGVzcGFjZVRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5pbm5lckhUTUw7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKFdoaXRlc3BhY2VUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIHR5cGUgPSB3aGl0ZXNwYWNlVHlwZTtcblxuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXltcXHQgXSsvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKFdoaXRlc3BhY2VUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChXaGl0ZXNwYWNlVG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiV2hpdGVzcGFjZVRva2VuIiwiYXNIVE1MIiwiaHRtbCIsImlubmVySFRNTCIsImNsb25lIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwibWF0Y2giLCJjb250ZW50IiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsImZyb21Db250ZW50IiwidHlwZSIsIndoaXRlc3BhY2VUeXBlIiwicmVndWxhckV4cHJlc3Npb24iXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RTt3QjtBQUVtQixHQUE0QixDQUE1QixlQUE0QjtBQUU3QixHQUFhLENBQWIsTUFBYTs7Ozs7Ozs7Ozs7Ozs7OzhEO3NDOzZEO2lFOzs7O3dFO2dFOzs7Ozs7Ozs7O1U7O3dCOzs7Ozs7MEI7Ozs7Ozs7Ozs7Uzs7Ozs7OztLOzs7Ozs7Ozs7Ozs7O007eUQ7Ozs7Ozs7Ozs7Ozs7Ozt1Qjs7Szs7Ozs7d0M7Ozs7OzsyQjs7Ozs7Ozs7cUY7Ozs7Ozs7Ozs7OzttRTs7aUQ7Ozs7O0lBRXZCQSxlQUFlLGlCQUFyQixRQUFRO21EOzthQUFGQSxlQUFlOzhDOzs7OztZQUNsQ0MsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFHLEVBQUcsQUFBSCxDQUFHO2dCQUVqQyxNQUFNLENBQUNELElBQUk7WUFDYixDQUFDOzs7WUFFREUsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsYUFBYSxFQUFFQyxXQUFXLEVBQUUsQ0FBQztnQkFBQyxNQUFNLHNCQVB2Qk4sZUFBZSxhQU9lSSxDQUFLLFFBQVgsSUFBSyxhQUFPSixlQUFlLEVBQUVLLGFBQWEsRUFBRUMsV0FBVztZQUFHLENBQUM7Ozs7WUFNL0ZDLEdBQUssRUFBTEEsQ0FBSzttQkFBWixRQUFRLENBQURBLEtBQUssQ0FBQ0MsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDQyxlQUFtQixTQUFDRixLQUFLLENBQUNQLGVBQWUsRUFBRVEsT0FBTztZQUFHLENBQUM7OztZQUU5RUUsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsQ0FBQ0YsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDQyxlQUFtQixTQUFDQyxXQUFXLENBQUNWLGVBQWUsRUFBRVEsT0FBTztZQUFHLENBQUM7O007O0VBZnREQyxlQUFtQjtrQkFBM0NULGVBQWUsQTtnQkFBZkEsZUFBZSxFQVMzQlcsQ0FBSSxPQUFHQyxNQUFjLGdCO2dCQVRUWixlQUFlLEVBVzNCYSxDQUFpQiw4QiJ9