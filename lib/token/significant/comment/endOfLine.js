"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLineCommentSignificantToken;
    }
});
var _significant = /*#__PURE__*/ _interop_require_default(require("../../../token/significant"));
var _types = require("../../../types");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var EndOfLineCommentSignificantToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(EndOfLineCommentSignificantToken, SignificantToken);
    function EndOfLineCommentSignificantToken() {
        _class_call_check(this, EndOfLineCommentSignificantToken);
        return _call_super(this, EndOfLineCommentSignificantToken, arguments);
    }
    _create_class(EndOfLineCommentSignificantToken, [
        {
            key: "isInCommentPreserving",
            value: function isInCommentPreserving() {
                var inCommentPreserving = true;
                return inCommentPreserving;
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _significant.default.match(EndOfLineCommentSignificantToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _significant.default.fromContent(EndOfLineCommentSignificantToken, content);
            }
        }
    ]);
    return EndOfLineCommentSignificantToken;
}(_significant.default);
_define_property(EndOfLineCommentSignificantToken, "type", _types.endOfLineCommentType);
_define_property(EndOfLineCommentSignificantToken, "regularExpression", /^(?:\r\n|\r|\n)/);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9jb21tZW50L2VuZE9mTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uLy4uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IGVuZE9mTGluZUNvbW1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGlzSW5Db21tZW50UHJlc2VydmluZygpIHtcbiAgICBjb25zdCBpbkNvbW1lbnRQcmVzZXJ2aW5nID0gdHJ1ZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnRQcmVzZXJ2aW5nO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBlbmRPZkxpbmVDb21tZW50VHlwZTtcblxuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXig/OlxcclxcbnxcXHJ8XFxuKS87XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4ubWF0Y2goRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW4iLCJpc0luQ29tbWVudFByZXNlcnZpbmciLCJpbkNvbW1lbnRQcmVzZXJ2aW5nIiwibWF0Y2giLCJjb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsImZyb21Db250ZW50IiwidHlwZSIsImVuZE9mTGluZUNvbW1lbnRUeXBlIiwicmVndWxhckV4cHJlc3Npb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpRO3FCQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFBLEFBQU1BLGlEQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxzQkFBc0I7Z0JBRTVCLE9BQU9BO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0EsTUFBTUMsT0FBTztnQkFBSSxPQUFPQyxvQkFBZ0IsQ0FBQ0YsS0FBSyxDQVhsQ0gsa0NBV3FFSTtZQUFVOzs7WUFFM0ZFLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlGLE9BQU87Z0JBQUksT0FBT0Msb0JBQWdCLENBQUNDLFdBQVcsQ0FiOUNOLGtDQWFpRkk7WUFBVTs7O1dBYjNGSjtFQUF5Q0ssb0JBQWdCO0FBTzVFLGlCQVBtQkwsa0NBT1pPLFFBQU9DLDJCQUFvQjtBQUVsQyxpQkFUbUJSLGtDQVNaUyxxQkFBb0IifQ==