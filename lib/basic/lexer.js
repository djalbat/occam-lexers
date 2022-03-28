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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
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
exports.default = BasicLexer;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9sZXhlci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgZW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XHJcbmltcG9ydCBDb21tb25MZXhlciBmcm9tIFwiLi4vY29tbW9uL2xleGVyXCI7XHJcbmltcG9ydCBXaGl0ZXNwYWNlVG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcclxuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3JlZ3VsYXJFeHByZXNzaW9uXCI7XHJcbmltcG9ydCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi90b2tlbi9ub25TaWduaWZpY2FudC9lbmRPZkxpbmVcIjtcclxuaW1wb3J0IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWRcIjtcclxuaW1wb3J0IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWRcIjtcclxuaW1wb3J0IFB5dGhvblN0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lL3B5dGhvblN0eWxlXCI7XHJcbmltcG9ydCBFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZkxpbmVcIjtcclxuaW1wb3J0IFB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VuZE9mL3B5dGhvblN0eWxlXCI7XHJcbmltcG9ydCBQeXRob25TdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2YvcHl0aG9uU3R5bGVcIjtcclxuaW1wb3J0IFB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mL3B5dGhvblN0eWxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY0xleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBXaGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW47XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gUmVndWxhckV4cHJlc3Npb25Ub2tlbjtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBQeXRob25TdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBQeXRob25TdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBQeXRob25TdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoQmFzaWNMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKEJhc2ljTGV4ZXIsIHJ1bGVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQmFzaWNMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVID0gXCJ1XCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJCYXNpY0xleGVyIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFb0IsSUFBQSxRQUFXLGtDQUFYLFdBQVcsRUFBQTtBQUNQLElBQUEsTUFBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBQ2IsSUFBQSxXQUFvQyxrQ0FBcEMsb0NBQW9DLEVBQUE7QUFDN0IsSUFBQSxrQkFBd0Msa0NBQXhDLHdDQUF3QyxFQUFBO0FBQ2xDLElBQUEsVUFBbUMsa0NBQW5DLG1DQUFtQyxFQUFBO0FBQ2pDLElBQUEsYUFBaUQsa0NBQWpELGlEQUFpRCxFQUFBO0FBQ2pELElBQUEsYUFBaUQsa0NBQWpELGlEQUFpRCxFQUFBO0FBQzlDLElBQUEsWUFBd0Qsa0NBQXhELHdEQUF3RCxFQUFBO0FBQ3RELElBQUEsV0FBMkMsa0NBQTNDLDJDQUEyQyxFQUFBO0FBQ3pDLElBQUEsYUFBNkQsa0NBQTdELDZEQUE2RCxFQUFBO0FBQzNELElBQUEsYUFBK0Qsa0NBQS9ELCtEQUErRCxFQUFBO0FBQzlELElBQUEsYUFBZ0Usa0NBQWhFLGdFQUFnRSxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7OERBYnJIO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFlZSxJQUFBLEFBQU1BLFVBQVUsaUJDZjdCLEFEZWE7c0NBZmY7O2FBZXFCQSxVQUFVO3lDQWYvQjs7Ozs7WUFzQ1NDLEdBQVcsRUFBWEEsYUFBVztZRXRDcEIsT0ZzQ0UsU0FBT0EsV0FBVyxHQUFHO2dCQUFFLE9BQU9DLE1BQVcsU0FBQ0QsV0FBVyxDQUFDRCxVQUFVLENBQUMsQ0FBQzthQUFFOzs7WUFFN0RHLEdBQVMsRUFBVEEsV0FBUztZRXhDbEIsT0Z3Q0UsU0FBT0EsU0FBUyxDQUFDQyxLQUFLLEVBQUU7Z0JBQUUsT0FBT0YsTUFBVyxTQUFDQyxTQUFTLENBQUNILFVBQVUsRUFBRUksS0FBSyxDQUFDLENBQUM7YUFBRTs7O1lBRXJFQyxHQUFXLEVBQVhBLGFBQVc7WUUxQ3BCLE9GMENFLFNBQU9BLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFO2dCQUFFLE9BQU9KLE1BQVcsU0FBQ0csV0FBVyxDQUFDTCxVQUFVLEVBQUVNLE9BQU8sQ0FBQyxDQUFDO2FBQUU7O01BMUN0Rjs7Q0EyQ0MsQ0E1QnVDSixNQUFXLFNBNEJsRDtrQkE1Qm9CRixVQUFVLEFBZi9CO0FBZ0JFLGdCQURtQkEsVUFBVSxFQUN0Qk0sU0FBTyxFQUFHQSxRQUFPLFNBQUMsQUFoQjNCO0FBa0JFLGdCQUhtQk4sVUFBVSxFQUd0Qk8sZ0JBQWMsRUFBR0MsVUFBNEIsU0FBQyxDQUFDLEdBQUc7QUFsQjNEO0FBb0JFLGdCQUxtQlIsVUFBVSxFQUt0QlMsaUJBQWUsRUFBR0EsV0FBZSxTQUFDLEFBcEIzQztBQXNCRSxnQkFQbUJULFVBQVUsRUFPdEJVLHVCQUFxQixFQUFHQyxXQUFtQyxTQUFDLENBQUMsR0FBRztBQXRCekU7QUF3QkUsZ0JBVG1CWCxVQUFVLEVBU3RCWSx3QkFBc0IsRUFBR0Esa0JBQXNCLFNBQUMsQUF4QnpEO0FBMEJFLGdCQVhtQlosVUFBVSxFQVd0QmEsd0JBQXNCLEVBQUdDLFlBQWlDLFNBQUMsQ0FBQyxHQUFHO0FBMUJ4RTtBQTRCRSxnQkFibUJkLFVBQVUsRUFhdEJlLDRCQUEwQixFQUFHQyxhQUFxQyxTQUFDLENBQUMsR0FBRztBQTVCaEY7QUE4QkUsZ0JBZm1CaEIsVUFBVSxFQWV0QmlCLDhCQUE0QixFQUFHQyxhQUF1QyxTQUFDLENBQUMsR0FBRztBQTlCcEY7QUFnQ0UsZ0JBakJtQmxCLFVBQVUsRUFpQnRCbUIsK0JBQTZCLEVBQUdDLGFBQXdDLFNBQUMsQ0FBQyxHQUFHO0FBaEN0RjtBQWtDRSxnQkFuQm1CcEIsVUFBVSxFQW1CdEJxQixnQ0FBOEIsRUFBR0EsYUFBOEIsU0FBQyxBQWxDekU7QUFvQ0UsZ0JBckJtQnJCLFVBQVUsRUFxQnRCc0IsZ0NBQThCLEVBQUdBLGFBQThCLFNBQUMsQUFwQ3pFIn0=