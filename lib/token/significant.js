"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SignificantToken;
    }
});
var _token = /*#__PURE__*/ _interop_require_default(require("../token"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var significant = true;
var SignificantToken = /*#__PURE__*/ function(Token) {
    _inherits(SignificantToken, Token);
    var _super = _create_super(SignificantToken);
    function SignificantToken() {
        _class_call_check(this, SignificantToken);
        return _super.apply(this, arguments);
    }
    _create_class(SignificantToken, null, [
        {
            key: "match",
            value: function match(Class, content) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Token;
                if (content === undefined) {
                    content = Class; ///
                    Class = SignificantToken; ///
                }
                var significantToken = (_Token = _token.default).match.apply(_Token, [
                    Class,
                    content,
                    significant
                ].concat(_to_consumable_array(remainingArguments)));
                return significantToken;
            }
        },
        {
            key: "fromContent",
            value: function fromContent(Class, content) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Token;
                if (content === undefined) {
                    content = Class; ///
                    Class = SignificantToken; ///
                }
                var significantToken = (_Token = _token.default).fromContent.apply(_Token, [
                    Class,
                    content,
                    significant
                ].concat(_to_consumable_array(remainingArguments)));
                return significantToken;
            }
        },
        {
            key: "fromContentAndType",
            value: function fromContentAndType(Class, content, type) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var _Token;
                if (type === undefined) {
                    type = content; ///
                    content = Class; ///
                    Class = SignificantToken; ///
                }
                var significantToken = (_Token = _token.default).fromContentAndType.apply(_Token, [
                    Class,
                    content,
                    type,
                    significant
                ].concat(_to_consumable_array(remainingArguments)));
                return significantToken;
            }
        }
    ]);
    return SignificantToken;
}(_token.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRva2VuIGZyb20gXCIuLi90b2tlblwiO1xuXG5jb25zdCBzaWduaWZpY2FudCA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGVudCA9IENsYXNzOyAgLy8vXG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5tYXRjaChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGVudCA9IENsYXNzOyAgLy8vXG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHR5cGUgPSBjb250ZW50OyAvLy9cbiAgICAgIGNvbnRlbnQgPSBDbGFzczsgIC8vL1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudCIsIm1hdGNoIiwiQ2xhc3MiLCJjb250ZW50IiwicmVtYWluaW5nQXJndW1lbnRzIiwiVG9rZW4iLCJ1bmRlZmluZWQiLCJzaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJmcm9tQ29udGVudEFuZFR5cGUiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs0REFKSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBTUMsY0FBYztBQUVMLElBQUEsQUFBTUQsaUNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkUsS0FBQUE7bUJBQVAsU0FBT0EsTUFBTUMsS0FBSyxFQUFFQyxPQUFPO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQSxPQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCO2dCQUFEO29CQU10QkM7Z0JBTHpCLElBQUlGLFlBQVlHLFdBQVc7b0JBQ3pCSCxVQUFVRCxPQUFRLEdBQUc7b0JBQ3JCQSxRQUplSCxrQkFJVyxHQUFHO2dCQUMvQjtnQkFFQSxJQUFNUSxtQkFBbUJGLENBQUFBLFNBQUFBLGdCQUFNSixNQUFOSSxNQUFBQSxRQUFBQTtvQkFBWUg7b0JBQU9DO29CQUFTSDtpQkFBbUMsQ0FBL0RLLE9BQXlDLHFCQUFHRDtnQkFFckUsT0FBT0c7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlOLEtBQUssRUFBRUMsT0FBTztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUEsT0FBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjtnQkFBRDtvQkFNNUJDO2dCQUx6QixJQUFJRixZQUFZRyxXQUFXO29CQUN6QkgsVUFBVUQsT0FBUSxHQUFHO29CQUNyQkEsUUFmZUgsa0JBZVcsR0FBRztnQkFDL0I7Z0JBRUEsSUFBTVEsbUJBQW1CRixDQUFBQSxTQUFBQSxnQkFBTUcsWUFBTkgsTUFBQUEsUUFBQUE7b0JBQWtCSDtvQkFBT0M7b0JBQVNIO2lCQUFtQyxDQUFyRUssT0FBK0MscUJBQUdEO2dCQUUzRSxPQUFPRztZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CUCxLQUFLLEVBQUVDLE9BQU8sRUFBRU8sSUFBSTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR04scUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUEsT0FBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjtnQkFBRDtvQkFPekNDO2dCQU56QixJQUFJSyxTQUFTSixXQUFXO29CQUN0QkksT0FBT1AsU0FBUyxHQUFHO29CQUNuQkEsVUFBVUQsT0FBUSxHQUFHO29CQUNyQkEsUUEzQmVILGtCQTJCVyxHQUFHO2dCQUMvQjtnQkFFQSxJQUFNUSxtQkFBbUJGLENBQUFBLFNBQUFBLGdCQUFNSSxtQkFBTkosTUFBQUEsUUFBQUE7b0JBQXlCSDtvQkFBT0M7b0JBQVNPO29CQUFNVjtpQkFBbUMsQ0FBbEZLLE9BQTRELHFCQUFHRDtnQkFFeEYsT0FBT0c7WUFDVDs7O1dBakNtQlI7RUFBeUJNIn0=