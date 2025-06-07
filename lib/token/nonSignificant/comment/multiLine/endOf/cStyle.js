"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CStyleEndOfMultiLineCommentToken;
    }
});
var _endOf = /*#__PURE__*/ _interop_require_default(require("../../../../../token/nonSignificant/comment/multiLine/endOf"));
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
var CStyleEndOfMultiLineCommentToken = /*#__PURE__*/ function(EndOfMultiLineCommentToken) {
    _inherits(CStyleEndOfMultiLineCommentToken, EndOfMultiLineCommentToken);
    function CStyleEndOfMultiLineCommentToken() {
        _class_call_check(this, CStyleEndOfMultiLineCommentToken);
        return _call_super(this, CStyleEndOfMultiLineCommentToken, arguments);
    }
    _create_class(CStyleEndOfMultiLineCommentToken, null, [
        {
            key: "match",
            value: function match(content) {
                return _endOf.default.match(CStyleEndOfMultiLineCommentToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _endOf.default.fromContent(CStyleEndOfMultiLineCommentToken, content);
            }
        }
    ]);
    return CStyleEndOfMultiLineCommentToken;
}(_endOf.default);
_define_property(CStyleEndOfMultiLineCommentToken, "regularExpression", /^\*\//);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZi9jU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2ZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB7XG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwqXFwvLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21Db250ZW50KENTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIkNTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwibWF0Y2giLCJjb250ZW50IiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJmcm9tQ29udGVudCIsInJlZ3VsYXJFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs0REFGa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQUEsQUFBTUEsaURBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFHWkMsS0FBQUE7bUJBQVAsU0FBT0EsTUFBTUMsT0FBTztnQkFBSSxPQUFPQyxjQUEwQixDQUFDRixLQUFLLENBSDVDRCxrQ0FHK0VFO1lBQVU7OztZQUVyR0UsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUYsT0FBTztnQkFBSSxPQUFPQyxjQUEwQixDQUFDQyxXQUFXLENBTHhESixrQ0FLMkZFO1lBQVU7OztXQUxyR0Y7RUFBeUNHLGNBQTBCO0FBQ3RGLGlCQURtQkgsa0NBQ1pLLHFCQUFvQiJ9