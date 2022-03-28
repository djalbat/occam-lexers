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
var EndOfLineCommentNonSignificantToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(EndOfLineCommentNonSignificantToken, NonSignificantToken);
    var _super = _createSuper(EndOfLineCommentNonSignificantToken);
    function EndOfLineCommentNonSignificantToken() {
        _classCallCheck(this, EndOfLineCommentNonSignificantToken);
        return _super.apply(this, arguments);
    }
    _createClass(EndOfLineCommentNonSignificantToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(EndOfLineCommentNonSignificantToken.prototype), "clone", this).call(this, EndOfLineCommentNonSignificantToken, startPosition, endPosition);
            }
        },
        {
            key: "asHTML",
            value: function asHTML() {
                var html = this.innerHTML; ///
                return html;
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
            value: function match(content) {
                return _nonSignificant.default.match(EndOfLineCommentNonSignificantToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _nonSignificant.default.fromContent(EndOfLineCommentNonSignificantToken, content);
            }
        }
    ]);
    return EndOfLineCommentNonSignificantToken;
}(_nonSignificant.default);
exports.default = EndOfLineCommentNonSignificantToken;
_defineProperty(EndOfLineCommentNonSignificantToken, "type", _types.endOfLineCommentType);
_defineProperty(EndOfLineCommentNonSignificantToken, "regularExpression", /^(?:\r\n|\r|\n)/);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L2VuZE9mTGluZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBlbmRPZkxpbmVDb21tZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5pbm5lckhUTUw7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgaXNJbkNvbW1lbnRQcmVzZXJ2aW5nKCkge1xuICAgIGNvbnN0IGluQ29tbWVudFByZXNlcnZpbmcgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudFByZXNlcnZpbmc7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IGVuZE9mTGluZUNvbW1lbnRUeXBlO1xuXG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eKD86XFxyXFxufFxccnxcXG4pLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiwgY29udGVudCk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFUgPSBcInVcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbIkVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuIiwiY2xvbmUiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJhc0hUTUwiLCJodG1sIiwiaW5uZXJIVE1MIiwiaXNJbkNvbW1lbnRQcmVzZXJ2aW5nIiwiaW5Db21tZW50UHJlc2VydmluZyIsIm1hdGNoIiwiY29udGVudCIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudCIsInR5cGUiLCJlbmRPZkxpbmVDb21tZW50VHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRWdDLElBQUEsZUFBK0Isa0NBQS9CLCtCQUErQixFQUFBO0FBRTFCLElBQUEsTUFBZ0IsV0FBaEIsZ0JBQWdCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFKckQ7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7OzswQkFBQTs7Ozs7Ozs7OztTQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozt3Q0FBQTs7Ozs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFNZSxJQUFBLEFBQU1BLG1DQUFtQyxpQkNOckQsQURNWTt1RUFOZjs7YUFNcUJBLG1DQUFtQztrRUFOeEQ7Ozs7O1lBT0VDLEdBQUssRUFBTEEsT0FBSztZRVBQLE9GT0VBLFNBQUFBLEtBQUssQ0FBQ0MsYUFBYSxFQUFFQyxXQUFXLEVBQUU7Z0JBQUUsT0FBTyxxQkFEeEJILG1DQUFtQyxhQUNMQyxPQUFLLEVBQVgsSUFBSyxDQUFBLFlBQU9ELG1DQUFtQyxFQUFFRSxhQUFhLEVBQUVDLFdBQVcsRUFBRTthQUFFOzs7WUFFMUhDLEdBQU0sRUFBTkEsUUFBTTtZRVRSLE9GU0VBLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxJQUFNQyxJQUFJLEdBQUcsSUFBSSxDQUFDQyxTQUFTLEFBQUMsRUFBRSxHQUFHO2dCQUVqQyxPQUFPRCxJQUFJLENBQUM7YUFDYjs7O1lBRURFLEdBQXFCLEVBQXJCQSx1QkFBcUI7WUVmdkIsT0ZlRUEsU0FBQUEscUJBQXFCLEdBQUc7Z0JBQ3RCLElBQU1DLG1CQUFtQixHQUFHLElBQUksQUFBQztnQkFFakMsT0FBT0EsbUJBQW1CLENBQUM7YUFDNUI7Ozs7WUFNTUMsR0FBSyxFQUFMQSxPQUFLO1lFekJkLE9GeUJFLFNBQU9BLEtBQUssQ0FBQ0MsT0FBTyxFQUFFO2dCQUFFLE9BQU9DLGVBQW1CLFNBQUNGLEtBQUssQ0FBQ1QsbUNBQW1DLEVBQUVVLE9BQU8sQ0FBQyxDQUFDO2FBQUU7OztZQUVsR0UsR0FBVyxFQUFYQSxhQUFXO1lFM0JwQixPRjJCRSxTQUFPQSxXQUFXLENBQUNGLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxlQUFtQixTQUFDQyxXQUFXLENBQUNaLG1DQUFtQyxFQUFFVSxPQUFPLENBQUMsQ0FBQzthQUFFOztNQTNCdkg7O0NBNEJDLENBdEJnRUMsZUFBbUIsU0FzQm5GO2tCQXRCb0JYLG1DQUFtQyxBQU54RDtBQXFCRSxnQkFmbUJBLG1DQUFtQyxFQWUvQ2EsTUFBSSxFQUFHQyxNQUFvQixzQkFBQyxBQXJCckM7QUF1QkUsZ0JBakJtQmQsbUNBQW1DLEVBaUIvQ2UsbUJBQWlCLG9CQUFxQixBQXZCL0MifQ==