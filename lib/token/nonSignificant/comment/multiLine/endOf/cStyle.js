"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _endOf = _interopRequireDefault(require("../../../../../token/nonSignificant/comment/multiLine/endOf"));
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
var CStyleEndOfMultiLineCommentToken = /*#__PURE__*/ function(EndOfMultiLineCommentToken) {
    _inherits(CStyleEndOfMultiLineCommentToken, EndOfMultiLineCommentToken);
    var _super = _createSuper(CStyleEndOfMultiLineCommentToken);
    function CStyleEndOfMultiLineCommentToken() {
        _classCallCheck(this, CStyleEndOfMultiLineCommentToken);
        return _super.apply(this, arguments);
    }
    _createClass(CStyleEndOfMultiLineCommentToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(CStyleEndOfMultiLineCommentToken.prototype), "clone", this).call(this, CStyleEndOfMultiLineCommentToken, startPosition, endPosition);
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _endOf.default.match(CStyleEndOfMultiLineCommentToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _endOf.default.fromContent(CStyleEndOfMultiLineCommentToken, content);
            }
        }
    ]);
    return CStyleEndOfMultiLineCommentToken;
}(_endOf.default);
_defineProperty(CStyleEndOfMultiLineCommentToken, "regularExpression", /^\*\//);
exports.default = CStyleEndOfMultiLineCommentToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZi9jU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2ZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShDU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cXCpcXC8vO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChDU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJjbG9uZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsIm1hdGNoIiwiY29udGVudCIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJyZWd1bGFyRXhwcmVzc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFMkIsR0FBNkQsQ0FBN0QsTUFBNkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0VBLGdDQUFnQyxpQkFBdEMsUUFBUTs7O2FBQUZBLGdDQUFnQzs7Ozs7O1lBQ25EQyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxhQUFhLEVBQUVDLFdBQVcsRUFBRSxDQUFDO2dCQUFDLE1BQU0sc0JBRHZCSCxnQ0FBZ0MsYUFDRkMsQ0FBSyxRQUFYLElBQUssYUFBT0QsZ0NBQWdDLEVBQUVFLGFBQWEsRUFBRUMsV0FBVztZQUFHLENBQUM7Ozs7WUFJaEhDLEdBQUssRUFBTEEsQ0FBSzttQkFBWixRQUFRLENBQURBLEtBQUssQ0FBQ0MsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDQyxNQUEwQixTQUFDRixLQUFLLENBQUNKLGdDQUFnQyxFQUFFSyxPQUFPO1lBQUcsQ0FBQzs7O1lBRXRHRSxHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxDQUFDRixPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUNDLE1BQTBCLFNBQUNDLFdBQVcsQ0FBQ1AsZ0NBQWdDLEVBQUVLLE9BQU87WUFBRyxDQUFDOzs7O0VBUDdEQyxNQUEwQjtnQkFBbkVOLGdDQUFnQyxFQUc1Q1EsQ0FBaUI7a0JBSExSLGdDQUFnQyJ9