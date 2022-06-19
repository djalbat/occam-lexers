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
exports.default = BNFLexer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvbGV4ZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgZW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XHJcbmltcG9ydCBDb21tb25MZXhlciBmcm9tIFwiLi4vY29tbW9uL2xleGVyXCI7XHJcbmltcG9ydCBXaGl0ZXNwYWNlVG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcclxuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3JlZ3VsYXJFeHByZXNzaW9uXCI7XHJcbmltcG9ydCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi90b2tlbi9ub25TaWduaWZpY2FudC9lbmRPZkxpbmVcIjtcclxuaW1wb3J0IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHRva2Vuc0Zyb21CTkYoYm5mKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYm5mLCAgLy8vXHJcbiAgICAgICAgICB0b2tlbnMgPSBzdXBlci50b2tlbmlzZShjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gUmVndWxhckV4cHJlc3Npb25Ub2tlbjtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhCTkZMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKEJORkxleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKEJORkxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQk5GTGV4ZXIiLCJ0b2tlbnNGcm9tQk5GIiwiYm5mIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVPLElBQUEsUUFBVyxrQ0FBWCxXQUFXLEVBQUE7QUFDUCxJQUFBLE1BQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUNiLElBQUEsV0FBb0Msa0NBQXBDLG9DQUFvQyxFQUFBO0FBQzdCLElBQUEsa0JBQXdDLGtDQUF4Qyx3Q0FBd0MsRUFBQTtBQUNsQyxJQUFBLFVBQW1DLGtDQUFuQyxtQ0FBbUMsRUFBQTtBQUNqQyxJQUFBLGFBQWlELGtDQUFqRCxpREFBaUQsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RSxJQUFBLEFBQU1BLFFBQVEsaUJBQWQ7OzthQUFNQSxRQUFROzs7Ozs7WUFDM0JDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxDQUFDQyxHQUFHLEVBQUU7Z0JBQ2pCLElBQU1DLE9BQU8sR0FBR0QsR0FBRyxFQUNiRSxNQUFNLEdBQUcscUJBSEVKLFFBQVEsYUFHSkssVUFBUSxFQUFkLElBQUssQ0FBQSxZQUFVRixPQUFPLENBQUMsQUFBQztnQkFFdkMsT0FBT0MsTUFBTSxDQUFDO2FBQ2Y7Ozs7WUF3Qk1FLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxHQUFHO2dCQUFFLE9BQU9DLE1BQVcsUUFBQSxDQUFDRCxXQUFXLENBQUNOLFFBQVEsQ0FBQyxDQUFDO2FBQUU7OztZQUUzRFEsR0FBUyxFQUFUQSxXQUFTO21CQUFoQixTQUFPQSxTQUFTLENBQUNDLEtBQUssRUFBRTtnQkFBRSxPQUFPRixNQUFXLFFBQUEsQ0FBQ0MsU0FBUyxDQUFDUixRQUFRLEVBQUVTLEtBQUssQ0FBQyxDQUFDO2FBQUU7OztZQUVuRUMsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLENBQUNDLE9BQU8sRUFBRTtnQkFBRSxPQUFPSixNQUFXLFFBQUEsQ0FBQ0csV0FBVyxDQUFDVixRQUFRLEVBQUVXLE9BQU8sQ0FBQyxDQUFDO2FBQUU7Ozs7Q0FDbkYsQ0FuQ3FDSixNQUFXLFFBQUEsQ0FtQ2hEO0FBM0JDLGdCQVJtQlAsUUFBUSxFQVFwQlcsU0FBTyxFQUFHQSxRQUFPLFFBQUEsQ0FBQztBQUV6QixnQkFWbUJYLFFBQVEsRUFVcEJZLGdCQUFjLEVBQUdDLFVBQTRCLFFBQUEsQ0FBQyxDQUFDLEdBQUc7O0FBRXpELGdCQVptQmIsUUFBUSxFQVlwQmMsaUJBQWUsRUFBR0EsV0FBZSxRQUFBLENBQUM7QUFFekMsZ0JBZG1CZCxRQUFRLEVBY3BCZSx1QkFBcUIsRUFBRyxJQUFJLENBQUM7QUFFcEMsZ0JBaEJtQmYsUUFBUSxFQWdCcEJnQix3QkFBc0IsRUFBR0Esa0JBQXNCLFFBQUEsQ0FBQztBQUV2RCxnQkFsQm1CaEIsUUFBUSxFQWtCcEJpQix3QkFBc0IsRUFBRyxJQUFJLENBQUM7QUFFckMsZ0JBcEJtQmpCLFFBQVEsRUFvQnBCa0IsNEJBQTBCLEVBQUcsSUFBSSxDQUFDO0FBRXpDLGdCQXRCbUJsQixRQUFRLEVBc0JwQm1CLDhCQUE0QixFQUFHLElBQUksQ0FBQztBQUUzQyxnQkF4Qm1CbkIsUUFBUSxFQXdCcEJvQiwrQkFBNkIsRUFBRyxJQUFJLENBQUM7QUFFNUMsZ0JBMUJtQnBCLFFBQVEsRUEwQnBCcUIsZ0NBQThCLEVBQUcsSUFBSSxDQUFDO0FBRTdDLGdCQTVCbUJyQixRQUFRLEVBNEJwQnNCLGdDQUE4QixFQUFHQSxhQUE4QixRQUFBLENBQUM7a0JBNUJwRHRCLFFBQVEifQ==