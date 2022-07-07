"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CStyleMiddleOfMultiLineCommentToken;
    }
});
var _middleOf = /*#__PURE__*/ _interopRequireDefault(require("../../../../../token/nonSignificant/comment/multiLine/middleOf"));
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
var CStyleMiddleOfMultiLineCommentToken = /*#__PURE__*/ function(MiddleOfMultiLineCommentToken) {
    _inherits(CStyleMiddleOfMultiLineCommentToken, MiddleOfMultiLineCommentToken);
    var _super = _createSuper(CStyleMiddleOfMultiLineCommentToken);
    function CStyleMiddleOfMultiLineCommentToken() {
        _classCallCheck(this, CStyleMiddleOfMultiLineCommentToken);
        return _super.apply(this, arguments);
    }
    _createClass(CStyleMiddleOfMultiLineCommentToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(CStyleMiddleOfMultiLineCommentToken.prototype), "clone", this).call(this, CStyleMiddleOfMultiLineCommentToken, startPosition, endPosition);
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _middleOf.default.match(CStyleMiddleOfMultiLineCommentToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _middleOf.default.fromContent(CStyleMiddleOfMultiLineCommentToken, content);
            }
        }
    ]);
    return CStyleMiddleOfMultiLineCommentToken;
}(_middleOf.default);
_defineProperty(CStyleMiddleOfMultiLineCommentToken, "regularExpression", /^(?:[^\r\n]+?(?=\*\/)|[^\r\n]+)/);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZi9jU3R5bGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2ZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL14oPzpbXlxcclxcbl0rPyg/PVxcKlxcLyl8W15cXHJcXG5dKykvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiY2xvbmUiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJtYXRjaCIsImNvbnRlbnQiLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImZyb21Db250ZW50IiwicmVndWxhckV4cHJlc3Npb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQUlRQSxtQ0FBbUM7Ozs2REFGZCxnRUFBZ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0YsSUFBQSxBQUFNQSxtQ0FBbUMsaUJBQXpDOzs7YUFBTUEsbUNBQW1DOzs7Ozs7WUFDdERDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxhQUFhLEVBQUVDLFdBQVcsRUFBRTtnQkFBRSxPQUFPLHFCQUR4QkgsbUNBQW1DLGFBQ0xDLE9BQUssRUFBWCxJQUFLLENBQUEsWUFBT0QsbUNBQW1DLEVBQUVFLGFBQWEsRUFBRUMsV0FBVyxFQUFFO2FBQUU7Ozs7WUFJbkhDLEdBQUssRUFBTEEsT0FBSzttQkFBWixTQUFPQSxLQUFLLENBQUNDLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxTQUE2QixRQUFBLENBQUNGLEtBQUssQ0FBQ0osbUNBQW1DLEVBQUVLLE9BQU8sQ0FBQyxDQUFDO2FBQUU7OztZQUU1R0UsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLENBQUNGLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxTQUE2QixRQUFBLENBQUNDLFdBQVcsQ0FBQ1AsbUNBQW1DLEVBQUVLLE9BQU8sQ0FBQyxDQUFDO2FBQUU7Ozs7Q0FDaEksQ0FSZ0VDLFNBQTZCLFFBQUEsQ0FRN0Y7QUFMQyxnQkFIbUJOLG1DQUFtQyxFQUcvQ1EsbUJBQWlCLG9DQUFxQyJ9