"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RegularExpressionToken;
    }
});
var _significant = /*#__PURE__*/ _interop_require_default(require("../../token/significant"));
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
var RegularExpressionToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(RegularExpressionToken, SignificantToken);
    var _super = _create_super(RegularExpressionToken);
    function RegularExpressionToken() {
        _class_call_check(this, RegularExpressionToken);
        return _super.apply(this, arguments);
    }
    _create_class(RegularExpressionToken, null, [
        {
            key: "match",
            value: function match(content) {
                return _significant.default.match(RegularExpressionToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _significant.default.fromContent(RegularExpressionToken, content);
            }
        }
    ]);
    return RegularExpressionToken;
}(_significant.default);
_define_property(RegularExpressionToken, "type", _types.regularExpressionType);
_define_property(RegularExpressionToken, "regularExpression", /^\/(?:\\[^\s]|[^\/\r\n])*\//);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IHJlZ3VsYXJFeHByZXNzaW9uVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWd1bGFyRXhwcmVzc2lvblRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIHN0YXRpYyB0eXBlID0gcmVndWxhckV4cHJlc3Npb25UeXBlO1xuXG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwvKD86XFxcXFteXFxzXXxbXlxcL1xcclxcbl0pKlxcLy87XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4ubWF0Y2goUmVndWxhckV4cHJlc3Npb25Ub2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChSZWd1bGFyRXhwcmVzc2lvblRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJtYXRjaCIsImNvbnRlbnQiLCJTaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb25UeXBlIiwicmVndWxhckV4cHJlc3Npb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpRO3FCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLHVDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFLWkMsS0FBQUE7bUJBQVAsU0FBT0EsTUFBTUMsT0FBTztnQkFBSSxPQUFPQyxvQkFBZ0IsQ0FBQ0YsS0FBSyxDQUxsQ0Qsd0JBSzJERTtZQUFVOzs7WUFFakZFLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlGLE9BQU87Z0JBQUksT0FBT0Msb0JBQWdCLENBQUNDLFdBQVcsQ0FQOUNKLHdCQU91RUU7WUFBVTs7O1dBUGpGRjtFQUErQkcsb0JBQWdCO0FBQ2xFLGlCQURtQkgsd0JBQ1pLLFFBQU9DLDRCQUFxQjtBQUVuQyxpQkFIbUJOLHdCQUdaTyxxQkFBb0IifQ==