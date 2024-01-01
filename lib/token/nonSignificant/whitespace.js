"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return WhitespaceToken;
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
var WhitespaceToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(WhitespaceToken, NonSignificantToken);
    var _super = _create_super(WhitespaceToken);
    function WhitespaceToken() {
        _class_call_check(this, WhitespaceToken);
        return _super.apply(this, arguments);
    }
    _create_class(WhitespaceToken, null, [
        {
            key: "match",
            value: function match(content) {
                return _nonSignificant.default.match(WhitespaceToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _nonSignificant.default.fromContent(WhitespaceToken, content);
            }
        }
    ]);
    return WhitespaceToken;
}(_nonSignificant.default);
_define_property(WhitespaceToken, "type", _types.whitespaceType);
_define_property(WhitespaceToken, "regularExpression", /^[\t ]+/);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC93aGl0ZXNwYWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgd2hpdGVzcGFjZVR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2hpdGVzcGFjZVRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIHN0YXRpYyB0eXBlID0gd2hpdGVzcGFjZVR5cGU7XG5cbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL15bXFx0IF0rLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChXaGl0ZXNwYWNlVG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoV2hpdGVzcGFjZVRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIldoaXRlc3BhY2VUb2tlbiIsIm1hdGNoIiwiY29udGVudCIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudCIsInR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxRUFKVztxQkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsSUFBQSxBQUFNQSxnQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBS1pDLEtBQUFBO21CQUFQLFNBQU9BLE1BQU1DLE9BQU87Z0JBQUksT0FBT0MsdUJBQW1CLENBQUNGLEtBQUssQ0FMckNELGlCQUt1REU7WUFBVTs7O1lBRTdFRSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZRixPQUFPO2dCQUFJLE9BQU9DLHVCQUFtQixDQUFDQyxXQUFXLENBUGpESixpQkFPbUVFO1lBQVU7OztXQVA3RUY7RUFBd0JHLHVCQUFtQjtBQUM5RCxpQkFEbUJILGlCQUNaSyxRQUFPQyxxQkFBYztBQUU1QixpQkFIbUJOLGlCQUdaTyxxQkFBb0IifQ==