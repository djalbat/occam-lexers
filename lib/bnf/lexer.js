"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _entries = _interopRequireDefault(require("./entries"));
var _lexer = _interopRequireDefault(require("../common/lexer"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var BNFLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(BNFLexer, CommonLexer);
    function BNFLexer() {
        _classCallCheck(this, BNFLexer);
        return _possibleConstructorReturn(this, _getPrototypeOf(BNFLexer).apply(this, arguments));
    }
    _createClass(BNFLexer, [
        {
            key: "matchBrokenComment",
            value: function matchBrokenComment(content, inComment) {
                return null;
            }
        },
        {
            key: "matchSingleLineComment",
            value: function matchSingleLineComment(content, inComment) {
                return null;
            }
        },
        {
            key: "matchMultiLineCommentInComment",
            value: function matchMultiLineCommentInComment(content, inComment) {
                return null;
            }
        },
        {
            key: "matchMultiLineCommentNotInComment",
            value: function matchMultiLineCommentNotInComment(content, inComment) {
                return null;
            }
        },
        {
            key: "matchSinglyQuotedStringLiteral",
            value: function matchSinglyQuotedStringLiteral(content) {
                return null;
            }
        },
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
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _lexer.default.fromEntries(BNFLexer, entries);
            }
        }
    ]);
    return BNFLexer;
}(_lexer.default);
_defineProperty(BNFLexer, "entries", _entries.default);
exports.default = BNFLexer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsIkNvbW1vbkxleGVyIiwiQk5GTGV4ZXIiLCJtYXRjaEJyb2tlbkNvbW1lbnQiLCJjb250ZW50IiwiaW5Db21tZW50IiwibWF0Y2hTaW5nbGVMaW5lQ29tbWVudCIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudCIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudCIsIm1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbCIsInRva2Vuc0Zyb21CTkYiLCJibmYiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsImZyb21Ob3RoaW5nIiwiZnJvbUVudHJpZXMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVEsR0FBVyxDQUFYLFFBQVc7QUFDUCxHQUFpQixDQUFqQixNQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBCLFFBQVEsaUJBQWQsUUFBUTtjQUFGLFFBQVE7YUFBUixRQUFROzhCQUFSLFFBQVE7Z0VBQVIsUUFBUTs7aUJBQVIsUUFBUTs7WUFDM0IsR0FBa0IsR0FBbEIsa0JBQWtCO21CQUFsQixRQUFRLENBQVIsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQUUsQ0FBQzs7O1lBRXZELEdBQXNCLEdBQXRCLHNCQUFzQjttQkFBdEIsUUFBUSxDQUFSLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSTtZQUFFLENBQUM7OztZQUUzRCxHQUE4QixHQUE5Qiw4QkFBOEI7bUJBQTlCLFFBQVEsQ0FBUiw4QkFBOEIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUk7WUFBRSxDQUFDOzs7WUFFbkUsR0FBaUMsR0FBakMsaUNBQWlDO21CQUFqQyxRQUFRLENBQVIsaUNBQWlDLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQUUsQ0FBQzs7O1lBRXRFLEdBQThCLEdBQTlCLDhCQUE4QjttQkFBOUIsUUFBUSxDQUFSLDhCQUE4QixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQUUsQ0FBQzs7O1lBRXhELEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLEdBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUNiLE1BQU0sd0JBYkssUUFBUSxjQWFKLFFBQVEsR0FBZCxJQUFLLGFBQVUsT0FBTztnQkFFckMsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7O1lBSU0sR0FBVyxHQUFYLFdBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBdEJQLE1BQWlCLFNBc0JHLFdBQVcsQ0FBQyxRQUFRO1lBQUcsQ0FBQzs7O1lBRTNELEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0F4QmQsTUFBaUIsU0F3QlUsV0FBVyxDQUFDLFFBQVEsRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1dBdEIvRCxRQUFRO0VBRkwsTUFBaUI7Z0JBRXBCLFFBQVEsR0FrQnBCLE9BQU8sR0FyQkksUUFBVztrQkFHVixRQUFRIn0=