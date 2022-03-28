"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonSignificant = _interopRequireDefault(require("../../../../token/nonSignificant"));
var _types = require("../../../../types");
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
var MiddleOfMultiLineCommentToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(MiddleOfMultiLineCommentToken, NonSignificantToken);
    var _super = _createSuper(MiddleOfMultiLineCommentToken);
    function MiddleOfMultiLineCommentToken() {
        _classCallCheck(this, MiddleOfMultiLineCommentToken);
        return _super.apply(this, arguments);
    }
    _createClass(MiddleOfMultiLineCommentToken, [
        {
            key: "clone",
            value: function clone(Class, startPosition, endPosition) {
                return _get(_getPrototypeOf(MiddleOfMultiLineCommentToken.prototype), "clone", this).call(this, Class, startPosition, endPosition);
            }
        },
        {
            key: "isInCommentPreserving",
            value: function isInCommentPreserving() {
                var inCommentPreserving = true;
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
    return MiddleOfMultiLineCommentToken;
}(_nonSignificant.default);
exports.default = MiddleOfMultiLineCommentToken;
_defineProperty(MiddleOfMultiLineCommentToken, "type", _types.middleOfMultiLineCommentType);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBtaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGlzSW5Db21tZW50UHJlc2VydmluZygpIHtcbiAgICBjb25zdCBpbkNvbW1lbnRQcmVzZXJ2aW5nID0gdHJ1ZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnRQcmVzZXJ2aW5nO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBtaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUeXBlO1xuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChDbGFzcywgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVID0gXCJ1XCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImNsb25lIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJpc0luQ29tbWVudFByZXNlcnZpbmciLCJpbkNvbW1lbnRQcmVzZXJ2aW5nIiwibWF0Y2giLCJjb250ZW50IiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsImZyb21Db250ZW50IiwidHlwZSIsIm1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFZ0MsSUFBQSxlQUFrQyxrQ0FBbEMsa0NBQWtDLEVBQUE7QUFFckIsSUFBQSxNQUFtQixXQUFuQixtQkFBbUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUpoRTtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OzBCQUFBOzs7Ozs7Ozs7O1NBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7O3dDQUFBOzs7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQU1lLElBQUEsQUFBTUEsNkJBQTZCLGlCQ04vQyxBRE1ZO2lFQU5mOzthQU1xQkEsNkJBQTZCOzREQU5sRDs7Ozs7WUFPRUMsR0FBSyxFQUFMQSxPQUFLO1lFUFAsT0ZPRUEsU0FBQUEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFO2dCQUFFLE9BQU8scUJBRC9CSiw2QkFBNkIsYUFDUUMsT0FBSyxFQUFYLElBQUssQ0FBQSxZQUFPQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFO2FBQUU7OztZQUVuR0MsR0FBcUIsRUFBckJBLHVCQUFxQjtZRVR2QixPRlNFQSxTQUFBQSxxQkFBcUIsR0FBRztnQkFDdEIsSUFBTUMsbUJBQW1CLEdBQUcsSUFBSSxBQUFDO2dCQUVqQyxPQUFPQSxtQkFBbUIsQ0FBQzthQUM1Qjs7OztZQUlNQyxHQUFLLEVBQUxBLE9BQUs7WUVqQmQsT0ZpQkUsU0FBT0EsS0FBSyxDQUFDTCxLQUFLLEVBQUVNLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxlQUFtQixTQUFDRixLQUFLLENBQUNMLEtBQUssRUFBRU0sT0FBTyxDQUFDLENBQUM7YUFBRTs7O1lBRTNFRSxHQUFXLEVBQVhBLGFBQVc7WUVuQnBCLE9GbUJFLFNBQU9BLFdBQVcsQ0FBQ1IsS0FBSyxFQUFFTSxPQUFPLEVBQUU7Z0JBQUUsT0FBT0MsZUFBbUIsU0FBQ0MsV0FBVyxDQUFDUixLQUFLLEVBQUVNLE9BQU8sQ0FBQyxDQUFDO2FBQUU7O01BbkJoRzs7Q0FvQkMsQ0FkMERDLGVBQW1CLFNBYzdFO2tCQWRvQlQsNkJBQTZCLEFBTmxEO0FBZUUsZ0JBVG1CQSw2QkFBNkIsRUFTekNXLE1BQUksRUFBR0MsTUFBNEIsOEJBQUMsQUFmN0MifQ==