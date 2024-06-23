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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW5zVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICBsZXQgbGluZU51bWJlciA9IDEsXG4gICAgICAgIHByZXZpb3VzVG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoKGh0bWwsIHRva2VuKSA9PiB7XG4gICAgICBjb25zdCB0b2tlbkhUTUwgPSB0b2tlbi5hc0hUTUwoKTtcblxuICAgICAgaWYgKHByZXZpb3VzVG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcblxuICAgICAgcHJldmlvdXNUb2tlbiA9IHRva2VuO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgaHRtbCA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0VG9rZW5zID0gdGhpcy5zZXRUb2tlbnMuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclRva2VucyA9IHRoaXMuY2xlYXJUb2tlbnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0VG9rZW5zLFxuICAgICAgY2xlYXJUb2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9rZW5zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG4iXSwibmFtZXMiOlsiVG9rZW5zVGV4dGFyZWEiLCJzZXRUb2tlbnMiLCJ0b2tlbnMiLCJsaW5lTnVtYmVyIiwicHJldmlvdXNUb2tlbiIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuSFRNTCIsImFzSFRNTCIsInByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJFTVBUWV9TVFJJTkciLCJjbGVhclRva2VucyIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkE7eUJBRVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSwrQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsTUFBTTtnQkFDZCxJQUFJQyxhQUFhLEdBQ2JDLGdCQUFnQjtnQkFFcEIsSUFBTUMsT0FBT0gsT0FBT0ksTUFBTSxDQUFDLFNBQUNELE1BQU1FO29CQUNoQyxJQUFNQyxZQUFZRCxNQUFNRSxNQUFNO29CQUU5QixJQUFJTCxrQkFBa0IsTUFBTTt3QkFDMUJDLFFBQVEsQUFBQyxHQUFlLE9BQWJGLGNBQWE7b0JBQzFCLE9BQU87d0JBQ0wsSUFBTU8sOEJBQThCTixjQUFjTyxnQkFBZ0I7d0JBRWxFLElBQUlELDZCQUE2Qjs0QkFDL0JMLFFBQVEsQUFBQyxHQUFlLE9BQWJGLGNBQWE7d0JBQzFCO29CQUNGO29CQUVBRSxRQUFRRztvQkFFUkosZ0JBQWdCRztvQkFFaEIsT0FBT0Y7Z0JBQ1QsR0FBR08sdUJBQVk7Z0JBRWYsSUFBSSxDQUFDUCxJQUFJLENBQUNBO1lBQ1o7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsT0FBT08sdUJBQVk7Z0JBRXpCLElBQUksQ0FBQ1AsSUFBSSxDQUFDQTtZQUNaOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1iLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUNjLElBQUksQ0FBQyxJQUFJLEdBQ3BDRixjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDRSxJQUFJLENBQUMsSUFBSTtnQkFFOUMsT0FBUTtvQkFDTmQsV0FBQUE7b0JBQ0FZLGFBQUFBO2dCQUNGO1lBQ0Y7OztXQTFDbUJiO0VBQXVCZ0IsaUJBQVE7QUE0Q2xELGlCQTVDbUJoQixnQkE0Q1ppQixxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtJQUNaQyxVQUFVO0FBQ1oifQ==