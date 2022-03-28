"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _singleLine = _interopRequireDefault(require("../../../../token/nonSignificant/comment/singleLine"));
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
var CStyleSingleLineCommentToken = /*#__PURE__*/ function(SingleLineCommentToken) {
    _inherits(CStyleSingleLineCommentToken, SingleLineCommentToken);
    var _super = _createSuper(CStyleSingleLineCommentToken);
    function CStyleSingleLineCommentToken() {
        _classCallCheck(this, CStyleSingleLineCommentToken);
        return _super.apply(this, arguments);
    }
    _createClass(CStyleSingleLineCommentToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(CStyleSingleLineCommentToken.prototype), "clone", this).call(this, CStyleSingleLineCommentToken, startPosition, endPosition);
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _singleLine.default.match(CStyleSingleLineCommentToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _singleLine.default.fromContent(CStyleSingleLineCommentToken, content);
            }
        }
    ]);
    return CStyleSingleLineCommentToken;
}(_singleLine.default);
exports.default = CStyleSingleLineCommentToken;
_defineProperty(CStyleSingleLineCommentToken, "regularExpression", /^\/\/[^\r\n]*/);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUvY1N0eWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwiLi4vc3JjL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpbmdsZUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uLy4uLy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcL1xcL1teXFxyXFxuXSovO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTaW5nbGVMaW5lQ29tbWVudFRva2VuLm1hdGNoKENTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpbmdsZUxpbmVDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFUgPSBcInVcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbIkNTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJjbG9uZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsIm1hdGNoIiwiY29udGVudCIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJmcm9tQ29udGVudCIsInJlZ3VsYXJFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRW1DLElBQUEsV0FBcUQsa0NBQXJELHFEQUFxRCxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7OERBRnhGO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7MEJBQUE7Ozs7Ozs7Ozs7U0FBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7Ozs7d0NBQUE7Ozs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBSWUsSUFBQSxBQUFNQSw0QkFBNEIsaUJDSjlDLEFESVk7bUVBSmY7O2FBSXFCQSw0QkFBNEI7MkRBSmpEOzs7OztZQUtFQyxHQUFLLEVBQUxBLE9BQUs7WUVMUCxPRktFQSxTQUFBQSxLQUFLLENBQUNDLGFBQWEsRUFBRUMsV0FBVyxFQUFFO2dCQUFFLE9BQU8scUJBRHhCSCw0QkFBNEIsYUFDRUMsT0FBSyxFQUFYLElBQUssQ0FBQSxZQUFPRCw0QkFBNEIsRUFBRUUsYUFBYSxFQUFFQyxXQUFXLEVBQUU7YUFBRTs7OztZQUk1R0MsR0FBSyxFQUFMQSxPQUFLO1lFVGQsT0ZTRSxTQUFPQSxLQUFLLENBQUNDLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxXQUFzQixTQUFDRixLQUFLLENBQUNKLDRCQUE0QixFQUFFSyxPQUFPLENBQUMsQ0FBQzthQUFFOzs7WUFFOUZFLEdBQVcsRUFBWEEsYUFBVztZRVhwQixPRldFLFNBQU9BLFdBQVcsQ0FBQ0YsT0FBTyxFQUFFO2dCQUFFLE9BQU9DLFdBQXNCLFNBQUNDLFdBQVcsQ0FBQ1AsNEJBQTRCLEVBQUVLLE9BQU8sQ0FBQyxDQUFDO2FBQUU7O01BWG5IOztDQVlDLENBUnlEQyxXQUFzQixTQVEvRTtrQkFSb0JOLDRCQUE0QixBQUpqRDtBQU9FLGdCQUhtQkEsNEJBQTRCLEVBR3hDUSxtQkFBaUIsa0JBQW1CLEFBUDdDIn0=