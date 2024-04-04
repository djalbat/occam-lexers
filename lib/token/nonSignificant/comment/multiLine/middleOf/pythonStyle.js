"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PythonStyleMiddleOfMultiLineCommentToken;
    }
});
var _middleOf = /*#__PURE__*/ _interop_require_default(require("../../../../../token/nonSignificant/comment/multiLine/middleOf"));
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
var PythonStyleMiddleOfMultiLineCommentToken = /*#__PURE__*/ function(MiddleOfMultiLineCommentToken) {
    _inherits(PythonStyleMiddleOfMultiLineCommentToken, MiddleOfMultiLineCommentToken);
    var _super = _create_super(PythonStyleMiddleOfMultiLineCommentToken);
    function PythonStyleMiddleOfMultiLineCommentToken() {
        _class_call_check(this, PythonStyleMiddleOfMultiLineCommentToken);
        return _super.apply(this, arguments);
    }
    _create_class(PythonStyleMiddleOfMultiLineCommentToken, null, [
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _middleOf.default.fromContent(PythonStyleMiddleOfMultiLineCommentToken, content);
            }
        }
    ]);
    return PythonStyleMiddleOfMultiLineCommentToken;
}(_middleOf.default);
_define_property(PythonStyleMiddleOfMultiLineCommentToken, "regularExpression", /^(?:[^\r\n]+?(?=###)|[^\r\n]+)/);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZi9weXRob25TdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi8uLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ge1xuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXig/OlteXFxyXFxuXSs/KD89IyMjKXxbXlxcclxcbl0rKS87XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21Db250ZW50KFB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiUHl0aG9uU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImZyb21Db250ZW50IiwiY29udGVudCIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwicmVndWxhckV4cHJlc3Npb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBQSxBQUFNQSx5REFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBR1pDLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLE9BQU87Z0JBQUksT0FBT0MsaUJBQTZCLENBQUNGLFdBQVcsQ0FIM0RELDBDQUdzR0U7WUFBVTs7O1dBSGhIRjtFQUFpREcsaUJBQTZCO0FBQ2pHLGlCQURtQkgsMENBQ1pJLHFCQUFvQiJ9