"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonSignificant = _interopRequireDefault(require("../../../token/nonSignificant"));
var _types = require("../../../types");
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
var SingleLineCommentToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(SingleLineCommentToken, NonSignificantToken);
    var _super = _createSuper(SingleLineCommentToken);
    function SingleLineCommentToken() {
        _classCallCheck(this, SingleLineCommentToken);
        return _super.apply(this, arguments);
    }
    _createClass(SingleLineCommentToken, [
        {
            key: "clone",
            value: function clone(Class, startPosition, endPosition) {
                return _get(_getPrototypeOf(SingleLineCommentToken.prototype), "clone", this).call(this, Class, startPosition, endPosition);
            }
        },
        {
            key: "isInCommentPreserving",
            value: function isInCommentPreserving() {
                var inCommentPreserving = false;
                return inCommentPreserving;
            }
        }
    ], [
        {
            key: "match",
            value: function match(Class, content) {
                return _nonSignificant.default.match(Class, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(Class, content) {
                return _nonSignificant.default.fromContent(Class, content);
            }
        }
    ]);
    return SingleLineCommentToken;
}(_nonSignificant.default);
exports.default = SingleLineCommentToken;
_defineProperty(SingleLineCommentToken, "type", _types.singleLineCommentType);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgc2luZ2xlTGluZUNvbW1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgaXNJbkNvbW1lbnRQcmVzZXJ2aW5nKCkge1xuICAgIGNvbnN0IGluQ29tbWVudFByZXNlcnZpbmcgPSBmYWxzZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnRQcmVzZXJ2aW5nO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBzaW5nbGVMaW5lQ29tbWVudFR5cGU7XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKENsYXNzLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFUgPSBcInVcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJjbG9uZSIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiaXNJbkNvbW1lbnRQcmVzZXJ2aW5nIiwiaW5Db21tZW50UHJlc2VydmluZyIsIm1hdGNoIiwiY29udGVudCIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudCIsInR5cGUiLCJzaW5nbGVMaW5lQ29tbWVudFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFZ0MsSUFBQSxlQUErQixrQ0FBL0IsK0JBQStCLEVBQUE7QUFFekIsSUFBQSxNQUFnQixXQUFoQixnQkFBZ0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUp0RDtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OzBCQUFBOzs7Ozs7Ozs7O1NBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7O3dDQUFBOzs7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQU1lLElBQUEsQUFBTUEsc0JBQXNCLGlCQ054QyxBRE1ZOzBEQU5mOzthQU1xQkEsc0JBQXNCO3FEQU4zQzs7Ozs7WUFPRUMsR0FBSyxFQUFMQSxPQUFLO1lFUFAsT0ZPRUEsU0FBQUEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFO2dCQUFFLE9BQU8scUJBRC9CSixzQkFBc0IsYUFDZUMsT0FBSyxFQUFYLElBQUssQ0FBQSxZQUFPQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFO2FBQUU7OztZQUVuR0MsR0FBcUIsRUFBckJBLHVCQUFxQjtZRVR2QixPRlNFQSxTQUFBQSxxQkFBcUIsR0FBRztnQkFDdEIsSUFBTUMsbUJBQW1CLEdBQUcsS0FBSyxBQUFDO2dCQUVsQyxPQUFPQSxtQkFBbUIsQ0FBQzthQUM1Qjs7OztZQUlNQyxHQUFLLEVBQUxBLE9BQUs7WUVqQmQsT0ZpQkUsU0FBT0EsS0FBSyxDQUFDTCxLQUFLLEVBQUVNLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxlQUFtQixTQUFDRixLQUFLLENBQUNMLEtBQUssRUFBRU0sT0FBTyxDQUFDLENBQUM7YUFBRTs7O1lBRTNFRSxHQUFXLEVBQVhBLGFBQVc7WUVuQnBCLE9GbUJFLFNBQU9BLFdBQVcsQ0FBQ1IsS0FBSyxFQUFFTSxPQUFPLEVBQUU7Z0JBQUUsT0FBT0MsZUFBbUIsU0FBQ0MsV0FBVyxDQUFDUixLQUFLLEVBQUVNLE9BQU8sQ0FBQyxDQUFDO2FBQUU7O01BbkJoRzs7Q0FvQkMsQ0FkbURDLGVBQW1CLFNBY3RFO2tCQWRvQlQsc0JBQXNCLEFBTjNDO0FBZUUsZ0JBVG1CQSxzQkFBc0IsRUFTbENXLE1BQUksRUFBR0MsTUFBcUIsdUJBQUMsQUFmdEMifQ==