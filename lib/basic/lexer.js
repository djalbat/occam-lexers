"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _entries = _interopRequireDefault(require("./entries"));
var _lexer = _interopRequireDefault(require("../common/lexer"));
var _whitespace = _interopRequireDefault(require("../token/nonSignificant/whitespace"));
var _regularExpression = _interopRequireDefault(require("../token/significant/regularExpression"));
var _endOfLine = _interopRequireDefault(require("../token/nonSignificant/endOfLine"));
var _singlyQuoted = _interopRequireDefault(require("../token/significant/stringLiteral/singlyQuoted"));
var _doublyQuoted = _interopRequireDefault(require("../token/significant/stringLiteral/doublyQuoted"));
var _pythonStyle = _interopRequireDefault(require("../token/nonSignificant/comment/singleLine/pythonStyle"));
var _endOfLine1 = _interopRequireDefault(require("../token/nonSignificant/comment/endOfLine"));
var _pythonStyle1 = _interopRequireDefault(require("../token/nonSignificant/comment/multiLine/endOf/pythonStyle"));
var _pythonStyle2 = _interopRequireDefault(require("../token/nonSignificant/comment/multiLine/startOf/pythonStyle"));
var _pythonStyle3 = _interopRequireDefault(require("../token/nonSignificant/comment/multiLine/middleOf/pythonStyle"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var BasicLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(BasicLexer, CommonLexer);
    var _super = _createSuper(BasicLexer);
    function BasicLexer() {
        _classCallCheck(this, BasicLexer);
        return _super.apply(this, arguments);
    }
    _createClass(BasicLexer, null, [
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
_defineProperty(BasicLexer, "entries", _entries.default);
_defineProperty(BasicLexer, "EndOfLineToken", _endOfLine.default) ///
;
_defineProperty(BasicLexer, "WhitespaceToken", _whitespace.default);
_defineProperty(BasicLexer, "EndOfLineCommentToken", _endOfLine1.default) ///
;
_defineProperty(BasicLexer, "RegularExpressionToken", _regularExpression.default);
_defineProperty(BasicLexer, "SingleLineCommentToken", _pythonStyle.default) ///
;
_defineProperty(BasicLexer, "EndOfMultiLineCommentToken", _pythonStyle1.default) ///
;
_defineProperty(BasicLexer, "StartOfMultiLineCommentToken", _pythonStyle2.default) ///
;
_defineProperty(BasicLexer, "MiddleOfMultiLineCommentToken", _pythonStyle3.default) ///
;
_defineProperty(BasicLexer, "SinglyQuotedStringLiteralToken", _singlyQuoted.default);
_defineProperty(BasicLexer, "DoublyQuotedStringLiteralToken", _doublyQuoted.default);
exports.default = BasicLexer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9sZXhlci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBlbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcclxuaW1wb3J0IENvbW1vbkxleGVyIGZyb20gXCIuLi9jb21tb24vbGV4ZXJcIjtcclxuaW1wb3J0IFdoaXRlc3BhY2VUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvd2hpdGVzcGFjZVwiO1xyXG5pbXBvcnQgUmVndWxhckV4cHJlc3Npb25Ub2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvcmVndWxhckV4cHJlc3Npb25cIjtcclxuaW1wb3J0IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZVwiO1xyXG5pbXBvcnQgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL3NpbmdseVF1b3RlZFwiO1xyXG5pbXBvcnQgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xyXG5pbXBvcnQgUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUvcHl0aG9uU3R5bGVcIjtcclxuaW1wb3J0IEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L2VuZE9mTGluZVwiO1xyXG5pbXBvcnQgUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YvcHl0aG9uU3R5bGVcIjtcclxuaW1wb3J0IFB5dGhvblN0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZi9weXRob25TdHlsZVwiO1xyXG5pbXBvcnQgUHl0aG9uU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2YvcHl0aG9uU3R5bGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBSZWd1bGFyRXhwcmVzc2lvblRva2VuO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IFB5dGhvblN0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IFB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IFB5dGhvblN0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IFB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhCYXNpY0xleGVyKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tUnVsZXMoQmFzaWNMZXhlciwgcnVsZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhCYXNpY0xleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQmFzaWNMZXhlciIsImZyb21Ob3RoaW5nIiwiQ29tbW9uTGV4ZXIiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRU8sSUFBQSxRQUFXLGtDQUFYLFdBQVcsRUFBQTtBQUNQLElBQUEsTUFBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBQ2IsSUFBQSxXQUFvQyxrQ0FBcEMsb0NBQW9DLEVBQUE7QUFDN0IsSUFBQSxrQkFBd0Msa0NBQXhDLHdDQUF3QyxFQUFBO0FBQ2xDLElBQUEsVUFBbUMsa0NBQW5DLG1DQUFtQyxFQUFBO0FBQ2pDLElBQUEsYUFBaUQsa0NBQWpELGlEQUFpRCxFQUFBO0FBQ2pELElBQUEsYUFBaUQsa0NBQWpELGlEQUFpRCxFQUFBO0FBQzlDLElBQUEsWUFBd0Qsa0NBQXhELHdEQUF3RCxFQUFBO0FBQ3RELElBQUEsV0FBMkMsa0NBQTNDLDJDQUEyQyxFQUFBO0FBQ3pDLElBQUEsYUFBNkQsa0NBQTdELDZEQUE2RCxFQUFBO0FBQzNELElBQUEsYUFBK0Qsa0NBQS9ELCtEQUErRCxFQUFBO0FBQzlELElBQUEsYUFBZ0Usa0NBQWhFLGdFQUFnRSxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RyxJQUFBLEFBQU1BLFVBQVUsaUJDZjdCLEFEZWE7OzthQUFNQSxVQUFVOzs7Ozs7WUF1QnRCQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFBRSxPQUFPQyxNQUFXLFFBQUEsQ0FBQ0QsV0FBVyxDQUFDRCxVQUFVLENBQUMsQ0FBQzthQUFFOzs7WUFFN0RHLEdBQVMsRUFBVEEsV0FBUzttQkFBaEIsU0FBT0EsU0FBUyxDQUFDQyxLQUFLLEVBQUU7Z0JBQUUsT0FBT0YsTUFBVyxRQUFBLENBQUNDLFNBQVMsQ0FBQ0gsVUFBVSxFQUFFSSxLQUFLLENBQUMsQ0FBQzthQUFFOzs7WUFFckVDLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxDQUFDQyxPQUFPLEVBQUU7Z0JBQUUsT0FBT0osTUFBVyxRQUFBLENBQUNHLFdBQVcsQ0FBQ0wsVUFBVSxFQUFFTSxPQUFPLENBQUMsQ0FBQzthQUFFOzs7O0NBQ3JGLENBNUJ1Q0osTUFBVyxRQUFBLENBNEJsRDtBQTNCQyxnQkFEbUJGLFVBQVUsRUFDdEJNLFNBQU8sRUFBR0EsUUFBTyxRQUFBLENBQUM7QUFFekIsZ0JBSG1CTixVQUFVLEVBR3RCTyxnQkFBYyxFQUFHQyxVQUE0QixRQUFBLENBQUMsQ0FBQyxHQUFHOztBQUV6RCxnQkFMbUJSLFVBQVUsRUFLdEJTLGlCQUFlLEVBQUdBLFdBQWUsUUFBQSxDQUFDO0FBRXpDLGdCQVBtQlQsVUFBVSxFQU90QlUsdUJBQXFCLEVBQUdDLFdBQW1DLFFBQUEsQ0FBQyxDQUFDLEdBQUc7O0FBRXZFLGdCQVRtQlgsVUFBVSxFQVN0Qlksd0JBQXNCLEVBQUdBLGtCQUFzQixRQUFBLENBQUM7QUFFdkQsZ0JBWG1CWixVQUFVLEVBV3RCYSx3QkFBc0IsRUFBR0MsWUFBaUMsUUFBQSxDQUFDLENBQUMsR0FBRzs7QUFFdEUsZ0JBYm1CZCxVQUFVLEVBYXRCZSw0QkFBMEIsRUFBR0MsYUFBcUMsUUFBQSxDQUFDLENBQUMsR0FBRzs7QUFFOUUsZ0JBZm1CaEIsVUFBVSxFQWV0QmlCLDhCQUE0QixFQUFHQyxhQUF1QyxRQUFBLENBQUMsQ0FBQyxHQUFHOztBQUVsRixnQkFqQm1CbEIsVUFBVSxFQWlCdEJtQiwrQkFBNkIsRUFBR0MsYUFBd0MsUUFBQSxDQUFDLENBQUMsR0FBRzs7QUFFcEYsZ0JBbkJtQnBCLFVBQVUsRUFtQnRCcUIsZ0NBQThCLEVBQUdBLGFBQThCLFFBQUEsQ0FBQztBQUV2RSxnQkFyQm1CckIsVUFBVSxFQXFCdEJzQixnQ0FBOEIsRUFBR0EsYUFBOEIsUUFBQSxDQUFDO2tCQXJCcER0QixVQUFVIn0=