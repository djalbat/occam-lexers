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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var SignificantToken = /*#__PURE__*/ function(Token) {
    _inherits(SignificantToken, Token);
    function SignificantToken() {
        _class_call_check(this, SignificantToken);
        return _call_super(this, SignificantToken, arguments);
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
                var significant = true, significantToken = (_Token = _token.default).match.apply(_Token, [
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
                var significant = true, significantToken = (_Token = _token.default).fromContent.apply(_Token, [
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
                var significant = true, significantToken = (_Token = _token.default).fromContentAndType.apply(_Token, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRva2VuIGZyb20gXCIuLi90b2tlblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gVG9rZW4ubWF0Y2goQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0eXBlID0gY29udGVudDsgLy8vXG5cbiAgICAgIGNvbnRlbnQgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoIiwiQ2xhc3MiLCJjb250ZW50IiwicmVtYWluaW5nQXJndW1lbnRzIiwiVG9rZW4iLCJ1bmRlZmluZWQiLCJzaWduaWZpY2FudCIsInNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudCIsImZyb21Db250ZW50QW5kVHlwZSIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzREQUZIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxNQUFNQyxLQUFLLEVBQUVDLE9BQU87Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFRdkJDO2dCQVB6QixJQUFJRixZQUFZRyxXQUFXO29CQUN6QkgsVUFBVUQsT0FBUSxHQUFHO29CQUVyQkEsUUFMZUYsa0JBS1csR0FBRztnQkFDL0I7Z0JBRUEsSUFBTU8sY0FBYyxNQUNkQyxtQkFBbUJILENBQUFBLFNBQUFBLGNBQUssRUFBQ0osS0FBSyxPQUFYSSxRQUFBQTtvQkFBWUg7b0JBQU9DO29CQUFTSTtpQkFBbUMsQ0FBL0RGLE9BQXlDLHFCQUFHRDtnQkFFckUsT0FBT0k7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlQLEtBQUssRUFBRUMsT0FBTztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O29CQVE3QkM7Z0JBUHpCLElBQUlGLFlBQVlHLFdBQVc7b0JBQ3pCSCxVQUFVRCxPQUFRLEdBQUc7b0JBRXJCQSxRQWxCZUYsa0JBa0JXLEdBQUc7Z0JBQy9CO2dCQUVBLElBQU1PLGNBQWMsTUFDZEMsbUJBQW1CSCxDQUFBQSxTQUFBQSxjQUFLLEVBQUNJLFdBQVcsT0FBakJKLFFBQUFBO29CQUFrQkg7b0JBQU9DO29CQUFTSTtpQkFBbUMsQ0FBckVGLE9BQStDLHFCQUFHRDtnQkFFM0UsT0FBT0k7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQlIsS0FBSyxFQUFFQyxPQUFPLEVBQUVRLElBQUk7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdQLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFVMUNDO2dCQVR6QixJQUFJTSxTQUFTTCxXQUFXO29CQUN0QkssT0FBT1IsU0FBUyxHQUFHO29CQUVuQkEsVUFBVUQsT0FBUSxHQUFHO29CQUVyQkEsUUFqQ2VGLGtCQWlDVyxHQUFHO2dCQUMvQjtnQkFFQSxJQUFNTyxjQUFjLE1BQ2RDLG1CQUFtQkgsQ0FBQUEsU0FBQUEsY0FBSyxFQUFDSyxrQkFBa0IsT0FBeEJMLFFBQUFBO29CQUF5Qkg7b0JBQU9DO29CQUFTUTtvQkFBTUo7aUJBQW1DLENBQWxGRixPQUE0RCxxQkFBR0Q7Z0JBRXhGLE9BQU9JO1lBQ1Q7OztXQXhDbUJSO0VBQXlCSyxjQUFLIn0=