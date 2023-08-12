"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BNFLexer;
    }
});
var _entries = /*#__PURE__*/ _interop_require_default(require("./entries"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("../common/lexer"));
var _whitespace = /*#__PURE__*/ _interop_require_default(require("../token/nonSignificant/whitespace"));
var _regularExpression = /*#__PURE__*/ _interop_require_default(require("../token/significant/regularExpression"));
var _endOfLine = /*#__PURE__*/ _interop_require_default(require("../token/nonSignificant/endOfLine"));
var _doublyQuoted = /*#__PURE__*/ _interop_require_default(require("../token/significant/stringLiteral/doublyQuoted"));
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var BNFLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(BNFLexer, CommonLexer);
    var _super = _create_super(BNFLexer);
    function BNFLexer() {
        _class_call_check(this, BNFLexer);
        return _super.apply(this, arguments);
    }
    _create_class(BNFLexer, [
        {
            key: "tokensFromBNF",
            value: function tokensFromBNF(bnf) {
                var content = bnf, tokens = _get(_get_prototype_of(BNFLexer.prototype), "tokenise", this).call(this, content);
                return tokens;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _lexer.default.fromNothing(BNFLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _lexer.default.fromRules(BNFLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _lexer.default.fromEntries(BNFLexer, entries);
            }
        }
    ]);
    return BNFLexer;
}(_lexer.default);
_define_property(BNFLexer, "entries", _entries.default);
_define_property(BNFLexer, "EndOfLineToken", _endOfLine.default) ///
;
_define_property(BNFLexer, "WhitespaceToken", _whitespace.default);
_define_property(BNFLexer, "EndOfLineCommentToken", null);
_define_property(BNFLexer, "RegularExpressionToken", _regularExpression.default);
_define_property(BNFLexer, "SingleLineCommentToken", null);
_define_property(BNFLexer, "EndOfMultiLineCommentToken", null);
_define_property(BNFLexer, "StartOfMultiLineCommentToken", null);
_define_property(BNFLexer, "MiddleOfMultiLineCommentToken", null);
_define_property(BNFLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(BNFLexer, "DoublyQuotedStringLiteralToken", _doublyQuoted.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvbGV4ZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgZW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XHJcbmltcG9ydCBDb21tb25MZXhlciBmcm9tIFwiLi4vY29tbW9uL2xleGVyXCI7XHJcbmltcG9ydCBXaGl0ZXNwYWNlVG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcclxuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3JlZ3VsYXJFeHByZXNzaW9uXCI7XHJcbmltcG9ydCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi90b2tlbi9ub25TaWduaWZpY2FudC9lbmRPZkxpbmVcIjtcclxuaW1wb3J0IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHRva2Vuc0Zyb21CTkYoYm5mKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYm5mLCAgLy8vXHJcbiAgICAgICAgICB0b2tlbnMgPSBzdXBlci50b2tlbmlzZShjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gUmVndWxhckV4cHJlc3Npb25Ub2tlbjtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhCTkZMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKEJORkxleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKEJORkxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQk5GTGV4ZXIiLCJ0b2tlbnNGcm9tQk5GIiwiYm5mIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7OERBUEQ7NERBQ0k7aUVBQ0k7d0VBQ087Z0VBQ007bUVBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLEdBQUc7Z0JBQ2YsSUFBTUMsVUFBVUQsS0FDVkUsU0FBUyx1QkFIRUoscUJBR0lLLFlBQU4sSUFBSyxhQUFVRjtnQkFFOUIsT0FBT0M7WUFDVDs7OztZQXdCT0UsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGNBQVcsQ0FBQ0QsV0FBVyxDQTlCbENOO1lBOEI4Qzs7O1lBRTFEUSxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLO2dCQUFJLE9BQU9GLGNBQVcsQ0FBQ0MsU0FBUyxDQWhDbkNSLFVBZ0M4Q1M7WUFBUTs7O1lBRWxFQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxPQUFPO2dCQUFJLE9BQU9KLGNBQVcsQ0FBQ0csV0FBVyxDQWxDekNWLFVBa0NvRFc7WUFBVTs7O1dBbEM5RFg7RUFBaUJPLGNBQVc7QUFRL0MsaUJBUm1CUCxVQVFaVyxXQUFVQSxnQkFBTztBQUV4QixpQkFWbUJYLFVBVVpZLGtCQUFpQkMsa0JBQTRCLEVBQUUsR0FBRzs7QUFFekQsaUJBWm1CYixVQVlaYyxtQkFBa0JBLG1CQUFlO0FBRXhDLGlCQWRtQmQsVUFjWmUseUJBQXdCO0FBRS9CLGlCQWhCbUJmLFVBZ0JaZ0IsMEJBQXlCQSwwQkFBc0I7QUFFdEQsaUJBbEJtQmhCLFVBa0JaaUIsMEJBQXlCO0FBRWhDLGlCQXBCbUJqQixVQW9CWmtCLDhCQUE2QjtBQUVwQyxpQkF0Qm1CbEIsVUFzQlptQixnQ0FBK0I7QUFFdEMsaUJBeEJtQm5CLFVBd0Jab0IsaUNBQWdDO0FBRXZDLGlCQTFCbUJwQixVQTBCWnFCLGtDQUFpQztBQUV4QyxpQkE1Qm1CckIsVUE0QlpzQixrQ0FBaUNBLHFCQUE4QiJ9