"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RegularExpressionToken;
    }
});
var _significant = /*#__PURE__*/ _interopRequireDefault(require("../../token/significant"));
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
var RegularExpressionToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(RegularExpressionToken, SignificantToken);
    var _super = _createSuper(RegularExpressionToken);
    function RegularExpressionToken() {
        _classCallCheck(this, RegularExpressionToken);
        return _super.apply(this, arguments);
    }
    _createClass(RegularExpressionToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(RegularExpressionToken.prototype), "clone", this).call(this, RegularExpressionToken, startPosition, endPosition);
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _significant.default.match(RegularExpressionToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _significant.default.fromContent(RegularExpressionToken, content);
            }
        }
    ]);
    return RegularExpressionToken;
}(_significant.default);
_defineProperty(RegularExpressionToken, "type", _types.regularExpressionType);
_defineProperty(RegularExpressionToken, "regularExpression", /^\/(?:\\[^\s]|[^\/\r\n])*\//);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IHJlZ3VsYXJFeHByZXNzaW9uVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWd1bGFyRXhwcmVzc2lvblRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShSZWd1bGFyRXhwcmVzc2lvblRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgdHlwZSA9IHJlZ3VsYXJFeHByZXNzaW9uVHlwZTtcblxuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcLyg/OlxcXFxbXlxcc118W15cXC9cXHJcXG5dKSpcXC8vO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLm1hdGNoKFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoUmVndWxhckV4cHJlc3Npb25Ub2tlbiwgY29udGVudCk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsImNsb25lIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwibWF0Y2giLCJjb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsImZyb21Db250ZW50IiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFNUUEsc0JBQXNCOzs7Z0VBSmQseUJBQXlCO3FCQUVoQixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQUEsQUFBTUEsc0JBQXNCLGlCQUE1QjtjQUFNQSxzQkFBc0I7OEJBQXRCQSxzQkFBc0I7YUFBdEJBLHNCQUFzQjs4QkFBdEJBLHNCQUFzQjs7O2lCQUF0QkEsc0JBQXNCOztZQUN6Q0MsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLGFBQWEsRUFBRUMsV0FBVyxFQUFFO2dCQUFFLE9BQU8scUJBRHhCSCxzQkFBc0IsYUFDUUMsT0FBSyxFQUFYLElBQUssQ0FBQSxZQUQ3QkQsc0JBQXNCLEVBQ3NDRSxhQUFhLEVBQUVDLFdBQVcsRUFBRTtZQUFDLENBQUM7Ozs7WUFNdEdDLEdBQUssRUFBTEEsT0FBSzttQkFBWixTQUFPQSxLQUFLLENBQUNDLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxZQUFnQixRQUFBLENBQUNGLEtBQUssQ0FQbENKLHNCQUFzQixFQU9xQ0ssT0FBTyxDQUFDLENBQUM7WUFBQyxDQUFDOzs7WUFFbEZFLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxDQUFDRixPQUFPLEVBQUU7Z0JBQUUsT0FBT0MsWUFBZ0IsUUFBQSxDQUFDQyxXQUFXLENBVDlDUCxzQkFBc0IsRUFTaURLLE9BQU8sQ0FBQyxDQUFDO1lBQUMsQ0FBQzs7O1dBVGxGTCxzQkFBc0I7Q0FVMUMsQ0FWbURNLFlBQWdCLFFBQUEsQ0FVbkU7QUFQQyxnQkFIbUJOLHNCQUFzQixFQUdsQ1EsTUFBSSxFQUFHQyxNQUFxQixzQkFBQSxDQUFDO0FBRXBDLGdCQUxtQlQsc0JBQXNCLEVBS2xDVSxtQkFBaUIsZ0NBQWlDIn0=