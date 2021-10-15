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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWQuanMiXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlbiIsImJyb2tlblN0cmluZ0xpdGVyYWxUeXBlIiwiRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIiwiY2xvbmUiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImNvbnRlbnQiLCJmcm9tQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFaUIsR0FBbUIsQ0FBbkIsWUFBbUI7QUFFUixHQUFnQixDQUFoQixNQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRW5DLG9DQUFvQyxpQkFBMUMsUUFBUTtjQUFGLG9DQUFvQzthQUFwQyxvQ0FBb0M7OEJBQXBDLG9DQUFvQztnRUFBcEMsb0NBQW9DOztpQkFBcEMsb0NBQW9DOztZQUN2RCxHQUFLLEVBQUwsQ0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQztnQkFBQyxNQUFNLHNCQUR2QixvQ0FBb0MsYUFDTixDQUFLLFFBQVgsSUFBSyxhQUFPLG9DQUFvQyxFQUFFLGFBQWEsRUFBRSxXQUFXO1lBQUcsQ0FBQzs7OztZQU1wSCxHQUFLLEVBQUwsQ0FBSzttQkFBWixRQUFRLENBQUQsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FYSCxZQUFtQixTQVdFLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1lBRWhHLEdBQVcsRUFBWCxDQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FiVCxZQUFtQixTQWFRLFdBQVcsQ0FBQyxvQ0FBb0MsRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1dBVGhHLG9DQUFvQztFQUo1QixZQUFtQjtnQkFJM0Isb0NBQW9DLEVBR2hELENBQUksT0FMMkIsTUFBZ0I7Z0JBRW5DLG9DQUFvQyxFQUtoRCxDQUFpQjtrQkFMTCxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uL3NpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IGJyb2tlblN0cmluZ0xpdGVyYWxUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgdHlwZSA9IGJyb2tlblN0cmluZ0xpdGVyYWxUeXBlO1xuXG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXCIvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLm1hdGNoKERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXX0=