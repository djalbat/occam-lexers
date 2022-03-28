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
var _doublyQuoted = _interopRequireDefault(require("../token/significant/stringLiteral/doublyQuoted"));
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
var BNFLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(BNFLexer, CommonLexer);
    var _super = _createSuper(BNFLexer);
    function BNFLexer() {
        _classCallCheck(this, BNFLexer);
        return _super.apply(this, arguments);
    }
    _createClass(BNFLexer, [
        {
            key: "tokensFromBNF",
            value: function tokensFromBNF(bnf) {
                var content = bnf, tokens = _get(_getPrototypeOf(BNFLexer.prototype), "tokenise", this).call(this, content);
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
exports.default = BNFLexer;
_defineProperty(BNFLexer, "entries", _entries.default);
_defineProperty(BNFLexer, "EndOfLineToken", _endOfLine.default) ///
;
_defineProperty(BNFLexer, "WhitespaceToken", _whitespace.default);
_defineProperty(BNFLexer, "EndOfLineCommentToken", null);
_defineProperty(BNFLexer, "RegularExpressionToken", _regularExpression.default);
_defineProperty(BNFLexer, "SingleLineCommentToken", null);
_defineProperty(BNFLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(BNFLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(BNFLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(BNFLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(BNFLexer, "DoublyQuotedStringLiteralToken", _doublyQuoted.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvbGV4ZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5pbXBvcnQgQ29tbW9uTGV4ZXIgZnJvbSBcIi4uL2NvbW1vbi9sZXhlclwiO1xyXG5pbXBvcnQgV2hpdGVzcGFjZVRva2VuIGZyb20gXCIuLi90b2tlbi9ub25TaWduaWZpY2FudC93aGl0ZXNwYWNlXCI7XHJcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lXCI7XHJcbmltcG9ydCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICB0b2tlbnNGcm9tQk5GKGJuZikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGJuZiwgIC8vL1xyXG4gICAgICAgICAgdG9rZW5zID0gc3VwZXIudG9rZW5pc2UoY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBXaGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW47XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW47XHJcblxyXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoQk5GTGV4ZXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21SdWxlcyhCTkZMZXhlciwgcnVsZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhCTkZMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVID0gXCJ1XCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJCTkZMZXhlciIsInRva2Vuc0Zyb21CTkYiLCJibmYiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJmcm9tTm90aGluZyIsIkNvbW1vbkxleGVyIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRW9CLElBQUEsUUFBVyxrQ0FBWCxXQUFXLEVBQUE7QUFDUCxJQUFBLE1BQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUNiLElBQUEsV0FBb0Msa0NBQXBDLG9DQUFvQyxFQUFBO0FBQzdCLElBQUEsa0JBQXdDLGtDQUF4Qyx3Q0FBd0MsRUFBQTtBQUNsQyxJQUFBLFVBQW1DLGtDQUFuQyxtQ0FBbUMsRUFBQTtBQUNqQyxJQUFBLGFBQWlELGtDQUFqRCxpREFBaUQsRUFBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQVA1RjtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OzBCQUFBOzs7Ozs7Ozs7O1NBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7O3dDQUFBOzs7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQVNlLElBQUEsQUFBTUEsUUFBUSxpQkNUM0IsQURTYTtvQ0FUZjs7YUFTcUJBLFFBQVE7dUNBVDdCOzs7OztZQVVFQyxHQUFhLEVBQWJBLGVBQWE7WUVWZixPRlVFQSxTQUFBQSxhQUFhLENBQUNDLEdBQUcsRUFBRTtnQkFDakIsSUFBTUMsT0FBTyxHQUFHRCxHQUFHLEVBQ2JFLE1BQU0sR0FBRyxxQkFIRUosUUFBUSxhQUdKSyxVQUFRLEVBQWQsSUFBSyxDQUFBLFlBQVVGLE9BQU8sQ0FBQyxBQUFDO2dCQUV2QyxPQUFPQyxNQUFNLENBQUM7YUFDZjs7OztZQXdCTUUsR0FBVyxFQUFYQSxhQUFXO1lFdkNwQixPRnVDRSxTQUFPQSxXQUFXLEdBQUc7Z0JBQUUsT0FBT0MsTUFBVyxTQUFDRCxXQUFXLENBQUNOLFFBQVEsQ0FBQyxDQUFDO2FBQUU7OztZQUUzRFEsR0FBUyxFQUFUQSxXQUFTO1lFekNsQixPRnlDRSxTQUFPQSxTQUFTLENBQUNDLEtBQUssRUFBRTtnQkFBRSxPQUFPRixNQUFXLFNBQUNDLFNBQVMsQ0FBQ1IsUUFBUSxFQUFFUyxLQUFLLENBQUMsQ0FBQzthQUFFOzs7WUFFbkVDLEdBQVcsRUFBWEEsYUFBVztZRTNDcEIsT0YyQ0UsU0FBT0EsV0FBVyxDQUFDQyxPQUFPLEVBQUU7Z0JBQUUsT0FBT0osTUFBVyxTQUFDRyxXQUFXLENBQUNWLFFBQVEsRUFBRVcsT0FBTyxDQUFDLENBQUM7YUFBRTs7TUEzQ3BGOztDQTRDQyxDQW5DcUNKLE1BQVcsU0FtQ2hEO2tCQW5Db0JQLFFBQVEsQUFUN0I7QUFpQkUsZ0JBUm1CQSxRQUFRLEVBUXBCVyxTQUFPLEVBQUdBLFFBQU8sU0FBQyxBQWpCM0I7QUFtQkUsZ0JBVm1CWCxRQUFRLEVBVXBCWSxnQkFBYyxFQUFHQyxVQUE0QixTQUFDLENBQUMsR0FBRztBQW5CM0Q7QUFxQkUsZ0JBWm1CYixRQUFRLEVBWXBCYyxpQkFBZSxFQUFHQSxXQUFlLFNBQUMsQUFyQjNDO0FBdUJFLGdCQWRtQmQsUUFBUSxFQWNwQmUsdUJBQXFCLEVBQUcsSUFBSSxDQUFDLEFBdkJ0QztBQXlCRSxnQkFoQm1CZixRQUFRLEVBZ0JwQmdCLHdCQUFzQixFQUFHQSxrQkFBc0IsU0FBQyxBQXpCekQ7QUEyQkUsZ0JBbEJtQmhCLFFBQVEsRUFrQnBCaUIsd0JBQXNCLEVBQUcsSUFBSSxDQUFDLEFBM0J2QztBQTZCRSxnQkFwQm1CakIsUUFBUSxFQW9CcEJrQiw0QkFBMEIsRUFBRyxJQUFJLENBQUMsQUE3QjNDO0FBK0JFLGdCQXRCbUJsQixRQUFRLEVBc0JwQm1CLDhCQUE0QixFQUFHLElBQUksQ0FBQyxBQS9CN0M7QUFpQ0UsZ0JBeEJtQm5CLFFBQVEsRUF3QnBCb0IsK0JBQTZCLEVBQUcsSUFBSSxDQUFDLEFBakM5QztBQW1DRSxnQkExQm1CcEIsUUFBUSxFQTBCcEJxQixnQ0FBOEIsRUFBRyxJQUFJLENBQUMsQUFuQy9DO0FBcUNFLGdCQTVCbUJyQixRQUFRLEVBNEJwQnNCLGdDQUE4QixFQUFHQSxhQUE4QixTQUFDLEFBckN6RSJ9