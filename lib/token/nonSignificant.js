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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRva2VuIGZyb20gXCIuLi90b2tlblwiO1xuXG5jb25zdCBzaWduaWZpY2FudCA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25TaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50KSB7IHJldHVybiBUb2tlbi5tYXRjaChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50KSB7IHJldHVybiBUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSkgeyByZXR1cm4gVG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJzaWduaWZpY2FudCIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJjbG9uZSIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwibWF0Y2giLCJjb250ZW50IiwiVG9rZW4iLCJmcm9tQ29udGVudCIsImZyb21Db250ZW50QW5kVHlwZSIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFa0IsSUFBQSxNQUFVLGtDQUFWLFVBQVUsRUFBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUY1QjtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7MEJBQUE7Ozs7Ozs7Ozs7U0FBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7Ozs7d0NBQUE7Ozs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLEtBQUssQUFBQztBQUVYLElBQUEsQUFBTUMsbUJBQW1CLGlCQ05yQyxBRE1ZO3lDQU5mOzthQU1xQkEsbUJBQW1CO2tEQU54Qzs7Ozs7WUFPRUMsR0FBSyxFQUFMQSxPQUFLO1lFUFAsT0ZPRUEsU0FBQUEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFO2dCQUFFLE9BQU8scUJBRC9CSixtQkFBbUIsYUFDa0JDLE9BQUssRUFBWCxJQUFLLENBQUEsWUFBT0MsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRUwsV0FBVyxFQUFFO2FBQUU7Ozs7WUFFekdNLEdBQUssRUFBTEEsT0FBSztZRVRkLE9GU0UsU0FBT0EsS0FBSyxDQUFDSCxLQUFLLEVBQUVJLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxNQUFLLFNBQUNGLEtBQUssQ0FBQ0gsS0FBSyxFQUFFSSxPQUFPLEVBQUVQLFdBQVcsQ0FBQyxDQUFDO2FBQUU7OztZQUUxRVMsR0FBVyxFQUFYQSxhQUFXO1lFWHBCLE9GV0UsU0FBT0EsV0FBVyxDQUFDTixLQUFLLEVBQUVJLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxNQUFLLFNBQUNDLFdBQVcsQ0FBQ04sS0FBSyxFQUFFSSxPQUFPLEVBQUVQLFdBQVcsQ0FBQyxDQUFDO2FBQUU7OztZQUV0RlUsR0FBa0IsRUFBbEJBLG9CQUFrQjtZRWIzQixPRmFFLFNBQU9BLGtCQUFrQixDQUFDUCxLQUFLLEVBQUVJLE9BQU8sRUFBRUksSUFBSSxFQUFFO2dCQUFFLE9BQU9ILE1BQUssU0FBQ0Usa0JBQWtCLENBQUNQLEtBQUssRUFBRUksT0FBTyxFQUFFSSxJQUFJLEVBQUVYLFdBQVcsQ0FBQyxDQUFDO2FBQUU7O01BYnpIOztDQWNDLENBUmdEUSxNQUFLLFNBUXJEO2tCQVJvQlAsbUJBQW1CLEFBTnhDIn0=