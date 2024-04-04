"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TokensTextarea;
    }
});
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
var _constants = require("../../../constants");
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
function _define_property(obj, key, value) {
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var TokensTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(TokensTextarea, Textarea);
    var _super = _create_super(TokensTextarea);
    function TokensTextarea() {
        _class_call_check(this, TokensTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(TokensTextarea, [
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                var lineNumber = 1, previousToken = null;
                var html = tokens.reduce(function(html, token) {
                    var tokenHTML = token.asHTML();
                    if (previousToken === null) {
                        html += "".concat(lineNumber++, ": ");
                    } else {
                        var previousTokenEndOfLineToken = previousToken.isEndOfLineToken();
                        if (previousTokenEndOfLineToken) {
                            html += "".concat(lineNumber++, ": ");
                        }
                    }
                    html += tokenHTML;
                    previousToken = token;
                    return html;
                }, _constants.EMPTY_STRING);
                this.html(html);
            }
        },
        {
            key: "clearTokens",
            value: function clearTokens() {
                var html = _constants.EMPTY_STRING;
                this.html(html);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setTokens = this.setTokens.bind(this), clearTokens = this.clearTokens.bind(this);
                return {
                    setTokens: setTokens,
                    clearTokens: clearTokens
                };
            }
        }
    ]);
    return TokensTextarea;
}(_textarea.default);
_define_property(TokensTextarea, "defaultProperties", {
    className: "tokens",
    spellCheck: "false",
    readOnly: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW5zVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICBsZXQgbGluZU51bWJlciA9IDEsXG4gICAgICAgIHByZXZpb3VzVG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoKGh0bWwsIHRva2VuKSA9PiB7XG4gICAgICBjb25zdCB0b2tlbkhUTUwgPSB0b2tlbi5hc0hUTUwoKTtcblxuICAgICAgaWYgKHByZXZpb3VzVG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcblxuICAgICAgcHJldmlvdXNUb2tlbiA9IHRva2VuO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgaHRtbCA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0VG9rZW5zID0gdGhpcy5zZXRUb2tlbnMuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclRva2VucyA9IHRoaXMuY2xlYXJUb2tlbnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0VG9rZW5zLFxuICAgICAgY2xlYXJUb2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9rZW5zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG4iXSwibmFtZXMiOlsiVG9rZW5zVGV4dGFyZWEiLCJzZXRUb2tlbnMiLCJ0b2tlbnMiLCJsaW5lTnVtYmVyIiwicHJldmlvdXNUb2tlbiIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuSFRNTCIsImFzSFRNTCIsInByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJFTVBUWV9TVFJJTkciLCJjbGVhclRva2VucyIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpBO3lCQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsK0JBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE1BQU07Z0JBQ2QsSUFBSUMsYUFBYSxHQUNiQyxnQkFBZ0I7Z0JBRXBCLElBQU1DLE9BQU9ILE9BQU9JLE1BQU0sQ0FBQyxTQUFDRCxNQUFNRTtvQkFDaEMsSUFBTUMsWUFBWUQsTUFBTUUsTUFBTTtvQkFFOUIsSUFBSUwsa0JBQWtCLE1BQU07d0JBQzFCQyxRQUFRLEFBQUMsR0FBZSxPQUFiRixjQUFhO29CQUMxQixPQUFPO3dCQUNMLElBQU1PLDhCQUE4Qk4sY0FBY08sZ0JBQWdCO3dCQUVsRSxJQUFJRCw2QkFBNkI7NEJBQy9CTCxRQUFRLEFBQUMsR0FBZSxPQUFiRixjQUFhO3dCQUMxQjtvQkFDRjtvQkFFQUUsUUFBUUc7b0JBRVJKLGdCQUFnQkc7b0JBRWhCLE9BQU9GO2dCQUNULEdBQUdPLHVCQUFZO2dCQUVmLElBQUksQ0FBQ1AsSUFBSSxDQUFDQTtZQUNaOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1SLE9BQU9PLHVCQUFZO2dCQUV6QixJQUFJLENBQUNQLElBQUksQ0FBQ0E7WUFDWjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNYixZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDYyxJQUFJLENBQUMsSUFBSSxHQUNwQ0YsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0UsSUFBSSxDQUFDLElBQUk7Z0JBRTlDLE9BQVE7b0JBQ05kLFdBQUFBO29CQUNBWSxhQUFBQTtnQkFDRjtZQUNGOzs7V0ExQ21CYjtFQUF1QmdCLGlCQUFRO0FBNENsRCxpQkE1Q21CaEIsZ0JBNENaaUIscUJBQW9CO0lBQ3pCQyxXQUFXO0lBQ1hDLFlBQVk7SUFDWkMsVUFBVTtBQUNaIn0=