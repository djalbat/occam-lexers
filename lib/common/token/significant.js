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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJzaWduaWZpY2FudCIsIlNpZ25pZmljYW50VG9rZW4iLCJjbG9uZSIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5kZWZpbmVkIiwic2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoIiwiY29udGVudCIsImZyb21Db250ZW50IiwiZnJvbUNvbnRlbnRBbmRUeXBlIiwidHlwZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFTSxHQUFVLENBQVYsTUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlDLFNBQUssRUFXTCxNQUFLLEVBV0wsT0FBSyxFQVlMLE9BQUs7QUE1Q2xDLEdBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSTtJQUVILGdCQUFnQixpQkFBdEIsUUFBUTtjQUFGLGdCQUFnQjthQUFoQixnQkFBZ0I7OEJBQWhCLGdCQUFnQjtnRUFBaEIsZ0JBQWdCOztpQkFBaEIsZ0JBQWdCOztZQUNuQyxHQUFLLEdBQUwsS0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUF5QixDQUFDO2dCQUF4QixHQUFHLENBQUgsR0FBcUIsQ0FBckIsSUFBcUIsR0FBckIsU0FBcUIsQ0FBckIsTUFBcUIsRUFBbEIsa0JBQWtCLEdBQXJCLEdBQXFCLE9BQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEVBQXJCLElBQXFCLEdBQXJCLElBQXFCLEVBQXJCLElBQXFCLEdBQXJCLENBQUM7b0JBQUUsa0JBQWtCLENBQXJCLElBQXFCLEdBQXJCLENBQXFCLElBQXJCLFNBQXFCLENBQXJCLElBQXFCO2dCQUFELENBQUM7Z0JBQzVELEVBQUUsRUFBRSxXQUFXLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQzlCLFdBQVcsR0FBRyxhQUFhLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUNqQyxhQUFhLEdBQUcsS0FBSyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFDM0IsS0FBSyxHQUFHLGdCQUFnQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFDL0IsQ0FBQztnQkFFRCxHQUFLLENBQUMsZ0JBQWdCLElBQUcsU0FBSyx3QkFSYixnQkFBZ0IsY0FRRixLQUFLLEdBQVgsSUFBSyxjQUFMLFNBQUs7O29CQUFPLEtBQUs7b0JBQUUsYUFBYTtvQkFBRSxXQUFXO29CQUFFLFdBQVc7NENBQUssa0JBQWtCO2dCQUUxRyxNQUFNLENBQUMsZ0JBQWdCO1lBQ3pCLENBQUM7Ozs7WUFFTSxHQUFLLEdBQUwsS0FBSzttQkFBWixRQUFRLENBQUQsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQXlCLENBQUM7Z0JBQXhCLEdBQUcsQ0FBSCxHQUFxQixDQUFyQixJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQixrQkFBa0IsR0FBckIsR0FBcUIsT0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsRUFBckIsSUFBcUIsR0FBckIsSUFBcUIsRUFBckIsSUFBcUIsR0FBckIsQ0FBQztvQkFBRSxrQkFBa0IsQ0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQ0FBckIsSUFBcUI7Z0JBQUQsQ0FBQztnQkFDaEQsRUFBRSxFQUFFLE9BQU8sS0FBSyxTQUFTLEVBQUUsQ0FBQztvQkFDMUIsT0FBTyxHQUFHLEtBQUssQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBQ3JCLEtBQUssR0FBRyxnQkFBZ0IsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBQy9CLENBQUM7Z0JBRUQsR0FBSyxDQUFDLGdCQUFnQixJQUFHLE1BQUssR0F2QmhCLE1BQVUsVUF1Qk8sS0FBSyxDQUFYLEtBQStELENBQS9ELE1BQUssRUFBTCxDQUFDO29CQUFXLEtBQUs7b0JBQUUsT0FBTztvQkFBRSxXQUFXO2dCQUF1QixDQUFDLENBQS9ELE1BQStELG9CQUFuQixrQkFBa0I7Z0JBRXZGLE1BQU0sQ0FBQyxnQkFBZ0I7WUFDekIsQ0FBQzs7O1lBRU0sR0FBVyxHQUFYLFdBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBeUIsQ0FBQztnQkFBeEIsR0FBRyxDQUFILEdBQXFCLENBQXJCLElBQXFCLEdBQXJCLFNBQXFCLENBQXJCLE1BQXFCLEVBQWxCLGtCQUFrQixHQUFyQixHQUFxQixPQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixFQUFyQixJQUFxQixHQUFyQixJQUFxQixFQUFyQixJQUFxQixHQUFyQixDQUFDO29CQUFFLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFyQixJQUFxQjtnQkFBRCxDQUFDO2dCQUN0RCxFQUFFLEVBQUUsT0FBTyxLQUFLLFNBQVMsRUFBRSxDQUFDO29CQUMxQixPQUFPLEdBQUcsS0FBSyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFDckIsS0FBSyxHQUFHLGdCQUFnQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFDL0IsQ0FBQztnQkFFRCxHQUFLLENBQUMsZ0JBQWdCLElBQUcsT0FBSyxHQWxDaEIsTUFBVSxVQWtDTyxXQUFXLENBQWpCLEtBQXFFLENBQXJFLE9BQUssRUFBTCxDQUFDO29CQUFpQixLQUFLO29CQUFFLE9BQU87b0JBQUUsV0FBVztnQkFBdUIsQ0FBQyxDQUFyRSxNQUFxRSxvQkFBbkIsa0JBQWtCO2dCQUU3RixNQUFNLENBQUMsZ0JBQWdCO1lBQ3pCLENBQUM7OztZQUVNLEdBQWtCLEdBQWxCLGtCQUFrQjttQkFBekIsUUFBUSxDQUFELGtCQUFrQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUF5QixDQUFDO2dCQUF4QixHQUFHLENBQUgsR0FBcUIsQ0FBckIsSUFBcUIsR0FBckIsU0FBcUIsQ0FBckIsTUFBcUIsRUFBbEIsa0JBQWtCLEdBQXJCLEdBQXFCLE9BQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEVBQXJCLElBQXFCLEdBQXJCLElBQXFCLEVBQXJCLElBQXFCLEdBQXJCLENBQUM7b0JBQUUsa0JBQWtCLENBQXJCLElBQXFCLEdBQXJCLENBQXFCLElBQXJCLFNBQXFCLENBQXJCLElBQXFCO2dCQUFELENBQUM7Z0JBQ25FLEVBQUUsRUFBRSxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksR0FBRyxPQUFPLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUNuQixPQUFPLEdBQUcsS0FBSyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFDckIsS0FBSyxHQUFHLGdCQUFnQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFDL0IsQ0FBQztnQkFFRCxHQUFLLENBQUMsZ0JBQWdCLElBQUcsT0FBSyxHQTlDaEIsTUFBVSxVQThDTyxrQkFBa0IsQ0FBeEIsS0FBa0YsQ0FBbEYsT0FBSyxFQUFMLENBQUM7b0JBQXdCLEtBQUs7b0JBQUUsT0FBTztvQkFBRSxJQUFJO29CQUFFLFdBQVc7Z0JBQXVCLENBQUMsQ0FBbEYsTUFBa0Ysb0JBQW5CLGtCQUFrQjtnQkFFMUcsTUFBTSxDQUFDLGdCQUFnQjtZQUN6QixDQUFDOzs7V0E3Q2tCLGdCQUFnQjtFQUpuQixNQUFVO2tCQUlQLGdCQUFnQiJ9