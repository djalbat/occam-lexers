"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _token = _interopRequireDefault(require("../token"));
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
var significant = false;
var NonSignificantToken = /*#__PURE__*/ function(Token) {
    _inherits(NonSignificantToken, Token);
    var _super = _createSuper(NonSignificantToken);
    function NonSignificantToken() {
        _classCallCheck(this, NonSignificantToken);
        return _super.apply(this, arguments);
    }
    _createClass(NonSignificantToken, [
        {
            key: "clone",
            value: function clone(Class, startPosition, endPosition) {
                return _get(_getPrototypeOf(NonSignificantToken.prototype), "clone", this).call(this, Class, startPosition, endPosition, significant);
            }
        }
    ], [
        {
            key: "match",
            value: function match(Class, content) {
                return _token.default.match(Class, content, significant);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(Class, content) {
                return _token.default.fromContent(Class, content, significant);
            }
        },
        {
            key: "fromContentAndType",
            value: function fromContentAndType(Class, content, type) {
                return _token.default.fromContentAndType(Class, content, type, significant);
            }
        }
    ]);
    return NonSignificantToken;
}(_token.default);
exports.default = NonSignificantToken;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb2tlbiBmcm9tIFwiLi4vdG9rZW5cIjtcblxuY29uc3Qgc2lnbmlmaWNhbnQgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHNpZ25pZmljYW50KTsgfVxuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCkgeyByZXR1cm4gVG9rZW4ubWF0Y2goQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCkgeyByZXR1cm4gVG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUpIHsgcmV0dXJuIFRva2VuLmZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgc2lnbmlmaWNhbnQpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVID0gXCJ1XCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJzaWduaWZpY2FudCIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJjbG9uZSIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwibWF0Y2giLCJjb250ZW50IiwiVG9rZW4iLCJmcm9tQ29udGVudCIsImZyb21Db250ZW50QW5kVHlwZSIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFa0IsSUFBQSxNQUFVLGtDQUFWLFVBQVUsRUFBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUY1QjtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7MEJBQUE7Ozs7Ozs7Ozs7U0FBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7Ozs7d0NBQUE7Ozs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLEtBQUssQUFBQztBQUVYLElBQUEsQUFBTUMsbUJBQW1CLGlCQ05yQyxBRE1ZO3lDQU5mOzthQU1xQkEsbUJBQW1CO2tEQU54Qzs7Ozs7WUFPRUMsR0FBSyxFQUFMQSxPQUFLO1lFUFAsT0ZPRUEsU0FBQUEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFO2dCQUFFLE9BQU8scUJBRC9CSixtQkFBbUIsYUFDa0JDLE9BQUssRUFBWCxJQUFLLENBQUEsWUFBT0MsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRUwsV0FBVyxFQUFFO2FBQUU7Ozs7WUFFekdNLEdBQUssRUFBTEEsT0FBSztZRVRkLE9GU0UsU0FBT0EsS0FBSyxDQUFDSCxLQUFLLEVBQUVJLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxNQUFLLFNBQUNGLEtBQUssQ0FBQ0gsS0FBSyxFQUFFSSxPQUFPLEVBQUVQLFdBQVcsQ0FBQyxDQUFDO2FBQUU7OztZQUUxRVMsR0FBVyxFQUFYQSxhQUFXO1lFWHBCLE9GV0UsU0FBT0EsV0FBVyxDQUFDTixLQUFLLEVBQUVJLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxNQUFLLFNBQUNDLFdBQVcsQ0FBQ04sS0FBSyxFQUFFSSxPQUFPLEVBQUVQLFdBQVcsQ0FBQyxDQUFDO2FBQUU7OztZQUV0RlUsR0FBa0IsRUFBbEJBLG9CQUFrQjtZRWIzQixPRmFFLFNBQU9BLGtCQUFrQixDQUFDUCxLQUFLLEVBQUVJLE9BQU8sRUFBRUksSUFBSSxFQUFFO2dCQUFFLE9BQU9ILE1BQUssU0FBQ0Usa0JBQWtCLENBQUNQLEtBQUssRUFBRUksT0FBTyxFQUFFSSxJQUFJLEVBQUVYLFdBQVcsQ0FBQyxDQUFDO2FBQUU7O01BYnpIOztDQWNDLENBUmdEUSxNQUFLLFNBUXJEO2tCQVJvQlAsbUJBQW1CLEFBTnhDIn0=