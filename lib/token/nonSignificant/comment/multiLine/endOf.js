"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfMultiLineCommentToken;
    }
});
var _nonSignificant = /*#__PURE__*/ _interop_require_default(require("../../../../token/nonSignificant"));
var _types = require("../../../../types");
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
var EndOfMultiLineCommentToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(EndOfMultiLineCommentToken, NonSignificantToken);
    var _super = _create_super(EndOfMultiLineCommentToken);
    function EndOfMultiLineCommentToken() {
        _class_call_check(this, EndOfMultiLineCommentToken);
        return _super.apply(this, arguments);
    }
    _create_class(EndOfMultiLineCommentToken, [
        {
            key: "isInCommentPreserving",
            value: function isInCommentPreserving() {
                var inCommentPreserving = false;
                return inCommentPreserving;
            }
        }
    ], [
        {
            key: "match",
            value: function match(Class, content) {
                return _nonSignificant.default.match(Class, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(Class, content) {
                return _nonSignificant.default.fromContent(Class, content);
            }
        }
    ]);
    return EndOfMultiLineCommentToken;
}(_nonSignificant.default);
_define_property(EndOfMultiLineCommentToken, "type", _types.endOfMultiLineCommentType);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uLy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IGVuZE9mTXVsdGlMaW5lQ29tbWVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgaXNJbkNvbW1lbnRQcmVzZXJ2aW5nKCkge1xuICAgIGNvbnN0IGluQ29tbWVudFByZXNlcnZpbmcgPSBmYWxzZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnRQcmVzZXJ2aW5nO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlO1xuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChDbGFzcywgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJpc0luQ29tbWVudFByZXNlcnZpbmciLCJpbkNvbW1lbnRQcmVzZXJ2aW5nIiwibWF0Y2giLCJDbGFzcyIsImNvbnRlbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwiZW5kT2ZNdWx0aUxpbmVDb21tZW50VHlwZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7cUVBSlc7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUEsQUFBTUEsMkNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHNCQUFzQjtnQkFFNUIsT0FBT0E7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxNQUFNQyxLQUFLLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsdUJBQW1CLENBQUNILEtBQUssQ0FBQ0MsT0FBT0M7WUFBVTs7O1lBRTFFRSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZSCxLQUFLLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsdUJBQW1CLENBQUNDLFdBQVcsQ0FBQ0gsT0FBT0M7WUFBVTs7O1dBWDFFTDtFQUFtQ00sdUJBQW1CO0FBT3pFLGlCQVBtQk4sNEJBT1pRLFFBQU9DLGdDQUF5QiJ9