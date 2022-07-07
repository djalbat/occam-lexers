"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SinglyQuotedStringLiteralToken;
    }
});
var _stringLiteral = /*#__PURE__*/ _interopRequireDefault(require("../../significant/stringLiteral"));
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
var SinglyQuotedStringLiteralToken = /*#__PURE__*/ function(StringLiteralToken) {
    _inherits(SinglyQuotedStringLiteralToken, StringLiteralToken);
    var _super = _createSuper(SinglyQuotedStringLiteralToken);
    function SinglyQuotedStringLiteralToken() {
        _classCallCheck(this, SinglyQuotedStringLiteralToken);
        return _super.apply(this, arguments);
    }
    _createClass(SinglyQuotedStringLiteralToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(SinglyQuotedStringLiteralToken.prototype), "clone", this).call(this, SinglyQuotedStringLiteralToken, startPosition, endPosition);
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _stringLiteral.default.match(SinglyQuotedStringLiteralToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _stringLiteral.default.fromContent(SinglyQuotedStringLiteralToken, content);
            }
        }
    ]);
    return SinglyQuotedStringLiteralToken;
}(_stringLiteral.default);
_defineProperty(SinglyQuotedStringLiteralToken, "regularExpression", /^'(?:\\[^\s]|[^'\\\r\n])*'/);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL3NpbmdseVF1b3RlZC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vLi4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZXh0ZW5kcyBTdHJpbmdMaXRlcmFsVG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXicoPzpcXFxcW15cXHNdfFteJ1xcXFxcXHJcXG5dKSonLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU3RyaW5nTGl0ZXJhbFRva2VuLmZyb21Db250ZW50KFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiY2xvbmUiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJtYXRjaCIsImNvbnRlbnQiLCJTdHJpbmdMaXRlcmFsVG9rZW4iLCJmcm9tQ29udGVudCIsInJlZ3VsYXJFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFJUUEsOEJBQThCOzs7a0VBRnBCLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFBLEFBQU1BLDhCQUE4QixpQkFBcEM7OzthQUFNQSw4QkFBOEI7Ozs7OztZQUNqREMsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLGFBQWEsRUFBRUMsV0FBVyxFQUFFO2dCQUFFLE9BQU8scUJBRHhCSCw4QkFBOEIsYUFDQUMsT0FBSyxFQUFYLElBQUssQ0FBQSxZQUFPRCw4QkFBOEIsRUFBRUUsYUFBYSxFQUFFQyxXQUFXLEVBQUU7YUFBRTs7OztZQUk5R0MsR0FBSyxFQUFMQSxPQUFLO21CQUFaLFNBQU9BLEtBQUssQ0FBQ0MsT0FBTyxFQUFFO2dCQUFFLE9BQU9DLGNBQWtCLFFBQUEsQ0FBQ0YsS0FBSyxDQUFDSiw4QkFBOEIsRUFBRUssT0FBTyxDQUFDLENBQUM7YUFBRTs7O1lBRTVGRSxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsQ0FBQ0YsT0FBTyxFQUFFO2dCQUFFLE9BQU9DLGNBQWtCLFFBQUEsQ0FBQ0MsV0FBVyxDQUFDUCw4QkFBOEIsRUFBRUssT0FBTyxDQUFDLENBQUM7YUFBRTs7OztDQUNoSCxDQVIyREMsY0FBa0IsUUFBQSxDQVE3RTtBQUxDLGdCQUhtQk4sOEJBQThCLEVBRzFDUSxtQkFBaUIsK0JBQWdDIn0=