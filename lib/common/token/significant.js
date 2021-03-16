"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _token = _interopRequireDefault(require("../token"));
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
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
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var _instance, _Token, _Token1, _Token2;
var significant = true;
var SignificantToken = function(Token) {
    _inherits(SignificantToken, _token.default);
    function SignificantToken() {
        _classCallCheck(this, SignificantToken);
        return _possibleConstructorReturn(this, _getPrototypeOf(SignificantToken).apply(this, arguments));
    }
    _createClass(SignificantToken, [
        {
            key: "clone",
            value: function clone(Class, startPosition, endPosition) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                if (endPosition === undefined) {
                    endPosition = startPosition;
                    startPosition = Class;
                    Class = SignificantToken;
                }
                var significantToken = (_instance = _get(_getPrototypeOf(SignificantToken.prototype), "clone", this)).call.apply(_instance, [
                    this,
                    Class,
                    startPosition,
                    endPosition,
                    significant
                ].concat(_toConsumableArray(remainingArguments)));
                return significantToken;
            }
        }
    ], [
        {
            key: "match",
            value: function match(Class, content) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                if (content === undefined) {
                    content = Class;
                    Class = SignificantToken;
                }
                var significantToken = (_Token = _token.default).match.apply(_Token, [
                    Class,
                    content,
                    significant
                ].concat(_toConsumableArray(remainingArguments)));
                return significantToken;
            }
        },
        {
            key: "fromContent",
            value: function fromContent(Class, content) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                if (content === undefined) {
                    content = Class;
                    Class = SignificantToken;
                }
                var significantToken = (_Token1 = _token.default).fromContent.apply(_Token1, [
                    Class,
                    content,
                    significant
                ].concat(_toConsumableArray(remainingArguments)));
                return significantToken;
            }
        },
        {
            key: "fromContentAndType",
            value: function fromContentAndType(Class, content, type) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                if (type === undefined) {
                    type = content;
                    content = Class;
                    Class = SignificantToken;
                }
                var significantToken = (_Token2 = _token.default).fromContentAndType.apply(_Token2, [
                    Class,
                    content,
                    type,
                    significant
                ].concat(_toConsumableArray(remainingArguments)));
                return significantToken;
            }
        }
    ]);
    return SignificantToken;
}(_token.default);
exports.default = SignificantToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb2tlbiBmcm9tIFwiLi4vdG9rZW5cIjtcblxuY29uc3Qgc2lnbmlmaWNhbnQgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG4gICAgICBzdGFydFBvc2l0aW9uID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHN1cGVyLmNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5tYXRjaChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHR5cGUgPSBjb250ZW50O1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZQSxTQUFBLEVBV0EsTUFBQSxFQVdBLE9BQUEsRUFZQSxPQUFBO0lBNUNBLFdBQUEsR0FBQSxJQUFBO0lBRUEsZ0JBQUEsWUFBQSxLQUFBO2NBQUEsZ0JBQUEsRUFKQSxNQUFBO2FBSUEsZ0JBQUE7OEJBQUEsZ0JBQUE7Z0VBQUEsZ0JBQUE7O2lCQUFBLGdCQUFBOztBQUNBLGVBQUEsR0FBQSxLQUFBOzRCQUFBLEtBQUEsQ0FBQSxLQUFBLEVBQUEsYUFBQSxFQUFBLFdBQUE7d0JBQUEsSUFBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsa0JBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxHQUFBLElBQUEsRUFBQSxJQUFBO0FBQUEsc0NBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxJQUFBOztvQkFDQSxXQUFBLEtBQUEsU0FBQTtBQUNBLCtCQUFBLEdBQUEsYUFBQTtBQUNBLGlDQUFBLEdBQUEsS0FBQTtBQUNBLHlCQUFBLEdBQUEsZ0JBQUE7O29CQUdBLGdCQUFBLElBQUEsU0FBQSx3QkFSQSxnQkFBQSxjQVFBLEtBQUEscUJBQUEsU0FBQTs7QUFBQSx5QkFBQTtBQUFBLGlDQUFBO0FBQUEsK0JBQUE7QUFBQSwrQkFBQTs0Q0FBQSxrQkFBQTt1QkFFQSxnQkFBQTs7Ozs7QUFHQSxlQUFBLEdBQUEsS0FBQTs0QkFBQSxLQUFBLENBQUEsS0FBQSxFQUFBLE9BQUE7d0JBQUEsSUFBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsa0JBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxHQUFBLElBQUEsRUFBQSxJQUFBO0FBQUEsc0NBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxJQUFBOztvQkFDQSxPQUFBLEtBQUEsU0FBQTtBQUNBLDJCQUFBLEdBQUEsS0FBQTtBQUNBLHlCQUFBLEdBQUEsZ0JBQUE7O29CQUdBLGdCQUFBLElBQUEsTUFBQSxHQXZCQSxNQUFBLFVBdUJBLEtBQUEsQ0FBQSxLQUFBLENBQUEsTUFBQTtBQUFBLHlCQUFBO0FBQUEsMkJBQUE7QUFBQSwrQkFBQTtrQkFBQSxNQUFBLG9CQUFBLGtCQUFBO3VCQUVBLGdCQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFdBQUE7NEJBQUEsV0FBQSxDQUFBLEtBQUEsRUFBQSxPQUFBO3dCQUFBLElBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLGtCQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLElBQUEsR0FBQSxJQUFBLEVBQUEsSUFBQTtBQUFBLHNDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsSUFBQTs7b0JBQ0EsT0FBQSxLQUFBLFNBQUE7QUFDQSwyQkFBQSxHQUFBLEtBQUE7QUFDQSx5QkFBQSxHQUFBLGdCQUFBOztvQkFHQSxnQkFBQSxJQUFBLE9BQUEsR0FsQ0EsTUFBQSxVQWtDQSxXQUFBLENBQUEsS0FBQSxDQUFBLE9BQUE7QUFBQSx5QkFBQTtBQUFBLDJCQUFBO0FBQUEsK0JBQUE7a0JBQUEsTUFBQSxvQkFBQSxrQkFBQTt1QkFFQSxnQkFBQTs7OztBQUdBLGVBQUEsR0FBQSxrQkFBQTs0QkFBQSxrQkFBQSxDQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQTt3QkFBQSxJQUFBLEdBQUEsU0FBQSxDQUFBLE1BQUEsRUFBQSxrQkFBQSxhQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxJQUFBLEdBQUEsSUFBQSxFQUFBLElBQUE7QUFBQSxzQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLElBQUE7O29CQUNBLElBQUEsS0FBQSxTQUFBO0FBQ0Esd0JBQUEsR0FBQSxPQUFBO0FBQ0EsMkJBQUEsR0FBQSxLQUFBO0FBQ0EseUJBQUEsR0FBQSxnQkFBQTs7b0JBR0EsZ0JBQUEsSUFBQSxPQUFBLEdBOUNBLE1BQUEsVUE4Q0Esa0JBQUEsQ0FBQSxLQUFBLENBQUEsT0FBQTtBQUFBLHlCQUFBO0FBQUEsMkJBQUE7QUFBQSx3QkFBQTtBQUFBLCtCQUFBO2tCQUFBLE1BQUEsb0JBQUEsa0JBQUE7dUJBRUEsZ0JBQUE7Ozs7V0E1Q0EsZ0JBQUE7RUFKQSxNQUFBO2tCQUlBLGdCQUFBIn0=