"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _significant = _interopRequireDefault(require("../../significant"));
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
var DoublyQuotedBrokenStringLiteralToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(DoublyQuotedBrokenStringLiteralToken, SignificantToken);
    function DoublyQuotedBrokenStringLiteralToken() {
        _classCallCheck(this, DoublyQuotedBrokenStringLiteralToken);
        return _possibleConstructorReturn(this, _getPrototypeOf(DoublyQuotedBrokenStringLiteralToken).apply(this, arguments));
    }
    _createClass(DoublyQuotedBrokenStringLiteralToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(DoublyQuotedBrokenStringLiteralToken.prototype), "clone", this).call(this, DoublyQuotedBrokenStringLiteralToken, startPosition, endPosition);
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _significant.default.match(DoublyQuotedBrokenStringLiteralToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _significant.default.fromContent(DoublyQuotedBrokenStringLiteralToken, content);
            }
        }
    ]);
    return DoublyQuotedBrokenStringLiteralToken;
}(_significant.default);
_defineProperty(DoublyQuotedBrokenStringLiteralToken, "type", _types.brokenStringLiteralType);
_defineProperty(DoublyQuotedBrokenStringLiteralToken, "regularExpression", /^"/);
exports.default = DoublyQuotedBrokenStringLiteralToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi9zaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBicm9rZW5TdHJpbmdMaXRlcmFsVHlwZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIHR5cGUgPSBicm9rZW5TdHJpbmdMaXRlcmFsVHlwZTtcblxuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXlwiLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWlCLEdBQW1CLENBQW5CLFlBQW1CO0FBRVIsR0FBZ0IsQ0FBaEIsTUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuQyxvQ0FBb0M7Y0FBcEMsb0NBQW9DO2FBQXBDLG9DQUFvQzs4QkFBcEMsb0NBQW9DO2dFQUFwQyxvQ0FBb0M7O2lCQUFwQyxvQ0FBb0M7O1lBQ3ZELEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLENBQUM7NENBRGhCLG9DQUFvQyxjQUNOLEtBQUssb0JBQUMsb0NBQW9DLEVBQUUsYUFBYSxFQUFFLFdBQVc7WUFBRyxDQUFDOzs7O1lBTXBILEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzt1QkFYSSxZQUFtQixTQVdFLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1lBRWhHLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt1QkFiRixZQUFtQixTQWFRLFdBQVcsQ0FBQyxvQ0FBb0MsRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1dBVGhHLG9DQUFvQztFQUo1QixZQUFtQjtnQkFJM0Isb0NBQW9DLEdBR2hELElBQUksR0FMMkIsTUFBZ0I7Z0JBRW5DLG9DQUFvQyxHQUtoRCxpQkFBaUI7a0JBTEwsb0NBQW9DIn0=