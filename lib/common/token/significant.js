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
var SignificantToken = /*#__PURE__*/ function(Token) {
    _inherits(SignificantToken, Token);
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
                    endPosition = startPosition; ///
                    startPosition = Class; ///
                    Class = SignificantToken; ///
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
                    content = Class; ///
                    Class = SignificantToken; ///
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
                    content = Class; ///
                    Class = SignificantToken; ///
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
                    type = content; ///
                    content = Class; ///
                    Class = SignificantToken; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb2tlbiBmcm9tIFwiLi4vdG9rZW5cIjtcblxuY29uc3Qgc2lnbmlmaWNhbnQgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247ICAvLy9cbiAgICAgIHN0YXJ0UG9zaXRpb24gPSBDbGFzczsgIC8vL1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gc3VwZXIuY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7ICAvLy9cbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLm1hdGNoKENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7ICAvLy9cbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLmZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdHlwZSA9IGNvbnRlbnQ7IC8vL1xuICAgICAgY29udGVudCA9IENsYXNzOyAgLy8vXG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVNLEdBQVUsQ0FBVixNQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBWUMsU0FBSyxFQVdMLE1BQUssRUFXTCxPQUFLLEVBWUwsT0FBSztBQTVDbEMsR0FBSyxD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