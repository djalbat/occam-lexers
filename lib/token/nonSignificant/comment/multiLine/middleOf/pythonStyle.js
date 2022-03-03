"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _middleOf = _interopRequireDefault(require("../../../../../token/nonSignificant/comment/multiLine/middleOf"));
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
var PythonStyleMiddleOfMultiLineCommentToken = /*#__PURE__*/ function(MiddleOfMultiLineCommentToken) {
    _inherits(PythonStyleMiddleOfMultiLineCommentToken, MiddleOfMultiLineCommentToken);
    var _super = _createSuper(PythonStyleMiddleOfMultiLineCommentToken);
    function PythonStyleMiddleOfMultiLineCommentToken() {
        _classCallCheck(this, PythonStyleMiddleOfMultiLineCommentToken);
        return _super.apply(this, arguments);
    }
    _createClass(PythonStyleMiddleOfMultiLineCommentToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(PythonStyleMiddleOfMultiLineCommentToken.prototype), "clone", this).call(this, PythonStyleMiddleOfMultiLineCommentToken, startPosition, endPosition);
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _middleOf.default.match(PythonStyleMiddleOfMultiLineCommentToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _middleOf.default.fromContent(PythonStyleMiddleOfMultiLineCommentToken, content);
            }
        }
    ]);
    return PythonStyleMiddleOfMultiLineCommentToken;
}(_middleOf.default);
exports.default = PythonStyleMiddleOfMultiLineCommentToken;
_defineProperty(PythonStyleMiddleOfMultiLineCommentToken, "regularExpression", /^(?:[^\r\n]+?(?=###)|[^\r\n]+)/);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZi9weXRob25TdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi8uLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoUHl0aG9uU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL14oPzpbXlxcclxcbl0rPyg/PSMjIyl8W15cXHJcXG5dKykvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIlB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJjbG9uZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsIm1hdGNoIiwiY29udGVudCIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJyZWd1bGFyRXhwcmVzc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO3dCO0FBRTZCLEdBQWdFLENBQWhFLFNBQWdFOzs7Ozs7Ozs7Ozs7Ozs7OEQ7c0M7NkQ7aUU7Ozs7d0U7Z0U7Ozs7Ozs7Ozs7VTs7d0I7Ozs7OzswQjs7Ozs7Ozs7OztTOzs7Ozs7O0s7Ozs7Ozs7Ozs7Ozs7TTt5RDs7Ozs7Ozs7Ozs7Ozs7O3VCOztLOzs7Ozt3Qzs7Ozs7OzJCOzs7Ozs7OztxRjs7Ozs7Ozs7Ozs7O21FOztpRDs7Ozs7SUFFckZBLHdDQUF3QyxpQkFBOUMsUUFBUTtzRjs7YUFBRkEsd0NBQXdDO3VFOzs7OztZQUMzREMsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsYUFBYSxFQUFFQyxXQUFXLEVBQUUsQ0FBQztnQkFBQyxNQUFNLHNCQUR2Qkgsd0NBQXdDLGFBQ1ZDLENBQUssUUFBWCxJQUFLLGFBQU9ELHdDQUF3QyxFQUFFRSxhQUFhLEVBQUVDLFdBQVc7WUFBRyxDQUFDOzs7O1lBSXhIQyxHQUFLLEVBQUxBLENBQUs7bUJBQVosUUFBUSxDQUFEQSxLQUFLLENBQUNDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQ0MsU0FBNkIsU0FBQ0YsS0FBSyxDQUFDSix3Q0FBd0MsRUFBRUssT0FBTztZQUFHLENBQUM7OztZQUVqSEUsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsQ0FBQ0YsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDQyxTQUE2QixTQUFDQyxXQUFXLENBQUNQLHdDQUF3QyxFQUFFSyxPQUFPO1lBQUcsQ0FBQzs7TTs7RUFQaEVDLFNBQTZCO2tCQUE5RU4sd0NBQXdDLEE7Z0JBQXhDQSx3Q0FBd0MsRUFHcERRLENBQWlCLHFEIn0=