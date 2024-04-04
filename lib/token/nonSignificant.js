"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonSignificantToken;
    }
});
var _token = /*#__PURE__*/ _interop_require_default(require("../token"));
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
var significant = false;
var NonSignificantToken = /*#__PURE__*/ function(Token) {
    _inherits(NonSignificantToken, Token);
    var _super = _create_super(NonSignificantToken);
    function NonSignificantToken() {
        _class_call_check(this, NonSignificantToken);
        return _super.apply(this, arguments);
    }
    _create_class(NonSignificantToken, null, [
        {
            key: "match",
            value: function match(Class, content) {
                return _token.default.match(Class, content, significant);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(Class, content) {
                return _token.default.fromContent(Class, content, significant);
            }
        },
        {
            key: "fromContentAndType",
            value: function fromContentAndType(Class, content, type) {
                return _token.default.fromContentAndType(Class, content, type, significant);
            }
        }
    ]);
    return NonSignificantToken;
}(_token.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRva2VuIGZyb20gXCIuLi90b2tlblwiO1xuXG5jb25zdCBzaWduaWZpY2FudCA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25TaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIFRva2VuLm1hdGNoKENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIFRva2VuLmZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlKSB7IHJldHVybiBUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIk5vblNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudCIsIm1hdGNoIiwiQ2xhc3MiLCJjb250ZW50IiwiVG9rZW4iLCJmcm9tQ29udGVudCIsImZyb21Db250ZW50QW5kVHlwZSIsInR5cGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7NERBSkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBTUMsY0FBYztBQUVMLElBQUEsQUFBTUQsb0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaRSxLQUFBQTttQkFBUCxTQUFPQSxNQUFNQyxLQUFLLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsY0FBSyxDQUFDSCxLQUFLLENBQUNDLE9BQU9DLFNBQVNIO1lBQWM7OztZQUV6RUssS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUgsS0FBSyxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGNBQUssQ0FBQ0MsV0FBVyxDQUFDSCxPQUFPQyxTQUFTSDtZQUFjOzs7WUFFckZNLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkosS0FBSyxFQUFFQyxPQUFPLEVBQUVJLElBQUk7Z0JBQUksT0FBT0gsY0FBSyxDQUFDRSxrQkFBa0IsQ0FBQ0osT0FBT0MsU0FBU0ksTUFBTVA7WUFBYzs7O1dBTG5HRDtFQUE0QkssY0FBSyJ9