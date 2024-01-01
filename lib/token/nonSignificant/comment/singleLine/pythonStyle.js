"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PythonStyleSingleLineCommentToken;
    }
});
var _singleLine = /*#__PURE__*/ _interop_require_default(require("../../../../token/nonSignificant/comment/singleLine"));
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
var PythonStyleSingleLineCommentToken = /*#__PURE__*/ function(SingleLineCommentToken) {
    _inherits(PythonStyleSingleLineCommentToken, SingleLineCommentToken);
    var _super = _create_super(PythonStyleSingleLineCommentToken);
    function PythonStyleSingleLineCommentToken() {
        _class_call_check(this, PythonStyleSingleLineCommentToken);
        return _super.apply(this, arguments);
    }
    _create_class(PythonStyleSingleLineCommentToken, null, [
        {
            key: "match",
            value: function match(content) {
                return _singleLine.default.match(PythonStyleSingleLineCommentToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _singleLine.default.fromContent(PythonStyleSingleLineCommentToken, content);
            }
        }
    ]);
    return PythonStyleSingleLineCommentToken;
}(_singleLine.default);
_define_property(PythonStyleSingleLineCommentToken, "regularExpression", /^#[^\r\n]*/);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUvcHl0aG9uU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTaW5nbGVMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiB7XG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eI1teXFxyXFxuXSovO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTaW5nbGVMaW5lQ29tbWVudFRva2VuLm1hdGNoKFB5dGhvblN0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChQeXRob25TdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwibWF0Y2giLCJjb250ZW50IiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsImZyb21Db250ZW50IiwicmVndWxhckV4cHJlc3Npb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2lFQUZjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFBLEFBQU1BLGtEQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFHWkMsS0FBQUE7bUJBQVAsU0FBT0EsTUFBTUMsT0FBTztnQkFBSSxPQUFPQyxtQkFBc0IsQ0FBQ0YsS0FBSyxDQUh4Q0QsbUNBRzRFRTtZQUFVOzs7WUFFbEdFLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlGLE9BQU87Z0JBQUksT0FBT0MsbUJBQXNCLENBQUNDLFdBQVcsQ0FMcERKLG1DQUt3RkU7WUFBVTs7O1dBTGxHRjtFQUEwQ0csbUJBQXNCO0FBQ25GLGlCQURtQkgsbUNBQ1pLLHFCQUFvQiJ9