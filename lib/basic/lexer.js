"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BasicLexer;
    }
});
var _entries = /*#__PURE__*/ _interop_require_default(require("./entries"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("../common/lexer"));
var _whitespace = /*#__PURE__*/ _interop_require_default(require("../token/nonSignificant/whitespace"));
var _regularExpression = /*#__PURE__*/ _interop_require_default(require("../token/significant/regularExpression"));
var _endOfLine = /*#__PURE__*/ _interop_require_default(require("../token/nonSignificant/endOfLine"));
var _singlyQuoted = /*#__PURE__*/ _interop_require_default(require("../token/significant/stringLiteral/singlyQuoted"));
var _doublyQuoted = /*#__PURE__*/ _interop_require_default(require("../token/significant/stringLiteral/doublyQuoted"));
var _pythonStyle = /*#__PURE__*/ _interop_require_default(require("../token/nonSignificant/comment/singleLine/pythonStyle"));
var _endOfLine1 = /*#__PURE__*/ _interop_require_default(require("../token/nonSignificant/comment/endOfLine"));
var _pythonStyle1 = /*#__PURE__*/ _interop_require_default(require("../token/nonSignificant/comment/multiLine/endOf/pythonStyle"));
var _pythonStyle2 = /*#__PURE__*/ _interop_require_default(require("../token/nonSignificant/comment/multiLine/startOf/pythonStyle"));
var _pythonStyle3 = /*#__PURE__*/ _interop_require_default(require("../token/nonSignificant/comment/multiLine/middleOf/pythonStyle"));
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
var BasicLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(BasicLexer, CommonLexer);
    var _super = _create_super(BasicLexer);
    function BasicLexer() {
        _class_call_check(this, BasicLexer);
        return _super.apply(this, arguments);
    }
    _create_class(BasicLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _lexer.default.fromNothing(BasicLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _lexer.default.fromRules(BasicLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _lexer.default.fromEntries(BasicLexer, entries);
            }
        }
    ]);
    return BasicLexer;
}(_lexer.default);
_define_property(BasicLexer, "entries", _entries.default);
_define_property(BasicLexer, "EndOfLineToken", _endOfLine.default) ///
;
_define_property(BasicLexer, "WhitespaceToken", _whitespace.default);
_define_property(BasicLexer, "EndOfLineCommentToken", _endOfLine1.default) ///
;
_define_property(BasicLexer, "RegularExpressionToken", _regularExpression.default);
_define_property(BasicLexer, "SingleLineCommentToken", _pythonStyle.default) ///
;
_define_property(BasicLexer, "EndOfMultiLineCommentToken", _pythonStyle1.default) ///
;
_define_property(BasicLexer, "StartOfMultiLineCommentToken", _pythonStyle2.default) ///
;
_define_property(BasicLexer, "MiddleOfMultiLineCommentToken", _pythonStyle3.default) ///
;
_define_property(BasicLexer, "SinglyQuotedStringLiteralToken", _singlyQuoted.default);
_define_property(BasicLexer, "DoublyQuotedStringLiteralToken", _doublyQuoted.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBlbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcclxuaW1wb3J0IENvbW1vbkxleGVyIGZyb20gXCIuLi9jb21tb24vbGV4ZXJcIjtcclxuaW1wb3J0IFdoaXRlc3BhY2VUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvd2hpdGVzcGFjZVwiO1xyXG5pbXBvcnQgUmVndWxhckV4cHJlc3Npb25Ub2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvcmVndWxhckV4cHJlc3Npb25cIjtcclxuaW1wb3J0IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZVwiO1xyXG5pbXBvcnQgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL3NpbmdseVF1b3RlZFwiO1xyXG5pbXBvcnQgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xyXG5pbXBvcnQgUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUvcHl0aG9uU3R5bGVcIjtcclxuaW1wb3J0IEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L2VuZE9mTGluZVwiO1xyXG5pbXBvcnQgUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YvcHl0aG9uU3R5bGVcIjtcclxuaW1wb3J0IFB5dGhvblN0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZi9weXRob25TdHlsZVwiO1xyXG5pbXBvcnQgUHl0aG9uU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2YvcHl0aG9uU3R5bGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBSZWd1bGFyRXhwcmVzc2lvblRva2VuO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IFB5dGhvblN0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IFB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IFB5dGhvblN0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IFB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhCYXNpY0xleGVyKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tUnVsZXMoQmFzaWNMZXhlciwgcnVsZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhCYXNpY0xleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJCYXNpY0xleGVyIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7OzhEQWJEOzREQUNJO2lFQUNJO3dFQUNPO2dFQUNNO21FQUNFO21FQUNBO2tFQUNHO2lFQUNFO21FQUNFO21FQUNFO21FQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFBLEFBQU1BLDJCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUF1QlpDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxjQUFXLENBQUNELFdBQVcsQ0F2QmxDRDtZQXVCZ0Q7OztZQUU1REcsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUMsS0FBSztnQkFBSSxPQUFPRixjQUFXLENBQUNDLFNBQVMsQ0F6Qm5DSCxZQXlCZ0RJO1lBQVE7OztZQUVwRUMsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUMsT0FBTztnQkFBSSxPQUFPSixjQUFXLENBQUNHLFdBQVcsQ0EzQnpDTCxZQTJCc0RNO1lBQVU7OztXQTNCaEVOO0VBQW1CRSxjQUFXO0FBQ2pELGlCQURtQkYsWUFDWk0sV0FBVUEsZ0JBQU87QUFFeEIsaUJBSG1CTixZQUdaTyxrQkFBaUJDLGtCQUE0QixFQUFFLEdBQUc7O0FBRXpELGlCQUxtQlIsWUFLWlMsbUJBQWtCQSxtQkFBZTtBQUV4QyxpQkFQbUJULFlBT1pVLHlCQUF3QkMsbUJBQW1DLEVBQUUsR0FBRzs7QUFFdkUsaUJBVG1CWCxZQVNaWSwwQkFBeUJBLDBCQUFzQjtBQUV0RCxpQkFYbUJaLFlBV1phLDBCQUF5QkMsb0JBQWlDLEVBQUUsR0FBRzs7QUFFdEUsaUJBYm1CZCxZQWFaZSw4QkFBNkJDLHFCQUFxQyxFQUFFLEdBQUc7O0FBRTlFLGlCQWZtQmhCLFlBZVppQixnQ0FBK0JDLHFCQUF1QyxFQUFFLEdBQUc7O0FBRWxGLGlCQWpCbUJsQixZQWlCWm1CLGlDQUFnQ0MscUJBQXdDLEVBQUUsR0FBRzs7QUFFcEYsaUJBbkJtQnBCLFlBbUJacUIsa0NBQWlDQSxxQkFBOEI7QUFFdEUsaUJBckJtQnJCLFlBcUJac0Isa0NBQWlDQSxxQkFBOEIifQ==