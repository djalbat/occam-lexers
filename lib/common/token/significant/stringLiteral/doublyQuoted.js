"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _stringLiteral = _interopRequireDefault(require("../../significant/stringLiteral"));
var _types = require("../../../types");
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var DoublyQuotedStringLiteralToken = /*#__PURE__*/ function(StringLiteralToken) {
    _inherits(DoublyQuotedStringLiteralToken, StringLiteralToken);
    function DoublyQuotedStringLiteralToken() {
        _classCallCheck(this, DoublyQuotedStringLiteralToken);
        return _possibleConstructorReturn(this, _getPrototypeOf(DoublyQuotedStringLiteralToken).apply(this, arguments));
    }
    _createClass(DoublyQuotedStringLiteralToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(DoublyQuotedStringLiteralToken.prototype), "clone", this).call(this, DoublyQuotedStringLiteralToken, startPosition, endPosition);
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _stringLiteral.default.match(DoublyQuotedStringLiteralToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _stringLiteral.default.fromContent(DoublyQuotedStringLiteralToken, content);
            }
        }
    ]);
    return DoublyQuotedStringLiteralToken;
}(_stringLiteral.default);
_defineProperty(DoublyQuotedStringLiteralToken, "type", _types.stringLiteralType);
_defineProperty(DoublyQuotedStringLiteralToken, "regularExpression", /^"(?:\\.|[^"\\])*"/);
exports.default = DoublyQuotedStringLiteralToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWQuanMiXSwibmFtZXMiOlsiU3RyaW5nTGl0ZXJhbFRva2VuIiwic3RyaW5nTGl0ZXJhbFR5cGUiLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJjbG9uZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUFpQyxDQUFqQyxjQUFpQztBQUUvQixHQUFnQixDQUFoQixNQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVCLDhCQUE4QixpQkFBcEMsUUFBUTtjQUFGLDhCQUE4QjthQUE5Qiw4QkFBOEI7OEJBQTlCLDhCQUE4QjtnRUFBOUIsOEJBQThCOztpQkFBOUIsOEJBQThCOztZQUNqRCxHQUFLLEVBQUwsQ0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQztnQkFBQyxNQUFNLHNCQUR2Qiw4QkFBOEIsYUFDQSxDQUFLLFFBQVgsSUFBSyxhQUFPLDhCQUE4QixFQUFFLGFBQWEsRUFBRSxXQUFXO1lBQUcsQ0FBQzs7OztZQU05RyxHQUFLLEVBQUwsQ0FBSzttQkFBWixRQUFRLENBQUQsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FYRCxjQUFpQyxTQVdaLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1lBRTVGLEdBQVcsRUFBWCxDQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FiUCxjQUFpQyxTQWFOLFdBQVcsQ0FBQyw4QkFBOEIsRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1dBVDVGLDhCQUE4QjtFQUpwQixjQUFpQztnQkFJM0MsOEJBQThCLEVBRzFDLENBQUksT0FMb0IsTUFBZ0I7Z0JBRTVCLDhCQUE4QixFQUsxQyxDQUFpQjtrQkFMTCw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vLi4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdMaXRlcmFsVHlwZSB9IGZyb21cIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBleHRlbmRzIFN0cmluZ0xpdGVyYWxUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyB0eXBlID0gc3RyaW5nTGl0ZXJhbFR5cGU7XG5cbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cIig/OlxcXFwufFteXCJcXFxcXSkqXCIvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTdHJpbmdMaXRlcmFsVG9rZW4uZnJvbUNvbnRlbnQoRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLCBjb250ZW50KTsgfVxufVxuIl19