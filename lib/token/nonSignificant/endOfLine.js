"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLineNonSignificantToken;
    }
});
var _nonSignificant = /*#__PURE__*/ _interop_require_default(require("../../token/nonSignificant"));
var _types = require("../../types");
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
var EndOfLineNonSignificantToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(EndOfLineNonSignificantToken, NonSignificantToken);
    var _super = _create_super(EndOfLineNonSignificantToken);
    function EndOfLineNonSignificantToken() {
        _class_call_check(this, EndOfLineNonSignificantToken);
        return _super.apply(this, arguments);
    }
    _create_class(EndOfLineNonSignificantToken, [
        {
            key: "asHTML",
            value: function asHTML() {
                var html = this.innerHTML; ///
                return html;
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _nonSignificant.default.match(EndOfLineNonSignificantToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _nonSignificant.default.fromContent(EndOfLineNonSignificantToken, content);
            }
        }
    ]);
    return EndOfLineNonSignificantToken;
}(_nonSignificant.default);
_define_property(EndOfLineNonSignificantToken, "type", _types.endOfLineType);
_define_property(EndOfLineNonSignificantToken, "regularExpression", /^(?:\r\n|\r|\n)/);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9lbmRPZkxpbmUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi90b2tlbi9ub25TaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBlbmRPZkxpbmVUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmlubmVySFRNTDsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IGVuZE9mTGluZVR5cGU7XG5cbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL14oPzpcXHJcXG58XFxyfFxcbikvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiwgY29udGVudCk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsImFzSFRNTCIsImh0bWwiLCJpbm5lckhUTUwiLCJtYXRjaCIsImNvbnRlbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwiZW5kT2ZMaW5lVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxRUFKVztxQkFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLDZDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsU0FBUyxFQUFHLEdBQUc7Z0JBRWpDLE9BQU9EO1lBQ1Q7Ozs7WUFNT0UsS0FBQUE7bUJBQVAsU0FBT0EsTUFBTUMsT0FBTyxFQUFFO2dCQUFFLE9BQU9DLHVCQUFtQixDQUFDRixLQUFLLENBWHJDSiw4QkFXb0VLO1lBQVU7OztZQUUxRkUsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUYsT0FBTyxFQUFFO2dCQUFFLE9BQU9DLHVCQUFtQixDQUFDQyxXQUFXLENBYmpEUCw4QkFhZ0ZLO1lBQVU7OztXQWIxRkw7RUFBcUNNLHVCQUFtQjtBQU8zRSxpQkFQbUJOLDhCQU9aUSxRQUFPQyxvQkFBYTtBQUUzQixpQkFUbUJULDhCQVNaVSxxQkFBb0IifQ==