"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _significant = _interopRequireDefault(require("../../token/significant"));
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
var StringLiteralToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(StringLiteralToken, SignificantToken);
    var _super = _createSuper(StringLiteralToken);
    function StringLiteralToken() {
        _classCallCheck(this, StringLiteralToken);
        return _super.apply(this, arguments);
    }
    _createClass(StringLiteralToken, [
        {
            key: "clone",
            value: function clone(Class, startPosition, endPosition) {
                return _get(_getPrototypeOf(StringLiteralToken.prototype), "clone", this).call(this, Class, startPosition, endPosition);
            }
        },
        {
            key: "getString",
            value: function getString() {
                var content = this.getContent(), contentLength = content.length, start = 1, end = contentLength - 1, string = content.substring(start, end);
                return string;
            }
        }
    ], [
        {
            key: "match",
            value: function match(Class, content) {
                return _significant.default.match(Class, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(Class, content) {
                return _significant.default.fromContent(Class, content);
            }
        }
    ]);
    return StringLiteralToken;
}(_significant.default);
exports.default = StringLiteralToken;
_defineProperty(StringLiteralToken, "type", _types.stringLiteralType);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgc3RyaW5nTGl0ZXJhbFR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nTGl0ZXJhbFRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoLFxuICAgICAgICAgIHN0YXJ0ID0gMSxcbiAgICAgICAgICBlbmQgPSBjb250ZW50TGVuZ3RoIC0gMSxcbiAgICAgICAgICBzdHJpbmcgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydCwgZW5kKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IHN0cmluZ0xpdGVyYWxUeXBlO1xuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChDbGFzcywgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiU3RyaW5nTGl0ZXJhbFRva2VuIiwiY2xvbmUiLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImdldFN0cmluZyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZW5kIiwic3RyaW5nIiwic3Vic3RyaW5nIiwibWF0Y2giLCJTaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwic3RyaW5nTGl0ZXJhbFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWlCLEdBQXlCLENBQXpCLFlBQXlCO0FBRXBCLEdBQWEsQ0FBYixNQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTFCQSxrQkFBa0IsaUJBQXhCLFFBQVE7OzthQUFGQSxrQkFBa0I7Ozs7OztZQUNyQ0MsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRSxDQUFDO2dCQUFDLE1BQU0sc0JBRDlCSixrQkFBa0IsYUFDbUJDLENBQUssUUFBWCxJQUFLLGFBQU9DLEtBQUssRUFBRUMsYUFBYSxFQUFFQyxXQUFXO1lBQUcsQ0FBQzs7O1lBRW5HQyxHQUFTLEVBQVRBLENBQVM7bUJBQVRBLFFBQVEsQ0FBUkEsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsR0FBSyxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxhQUFhLEdBQUdGLE9BQU8sQ0FBQ0csTUFBTSxFQUM5QkMsS0FBSyxHQUFHLENBQUMsRUFDVEMsR0FBRyxHQUFHSCxhQUFhLEdBQUcsQ0FBQyxFQUN2QkksTUFBTSxHQUFHTixPQUFPLENBQUNPLFNBQVMsQ0FBQ0gsS0FBSyxFQUFFQyxHQUFHO2dCQUUzQyxNQUFNLENBQUNDLE1BQU07WUFDZixDQUFDOzs7O1lBSU1FLEdBQUssRUFBTEEsQ0FBSzttQkFBWixRQUFRLENBQURBLEtBQUssQ0FBQ1osS0FBSyxFQUFFSSxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUNTLFlBQWdCLFNBQUNELEtBQUssQ0FBQ1osS0FBSyxFQUFFSSxPQUFPO1lBQUcsQ0FBQzs7O1lBRXhFVSxHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxDQUFDZCxLQUFLLEVBQUVJLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQ1MsWUFBZ0IsU0FBQ0MsV0FBVyxDQUFDZCxLQUFLLEVBQUVJLE9BQU87WUFBRyxDQUFDOzs7O0VBakI3Q1MsWUFBZ0I7a0JBQTNDZixrQkFBa0I7Z0JBQWxCQSxrQkFBa0IsRUFhOUJpQixDQUFJLE9BQUdDLE1BQWlCIn0=