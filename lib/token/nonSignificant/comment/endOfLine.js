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
function _get(target1, property1, receiver1) {
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
    return _get(target1, property1, receiver1 || target1);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
_defineProperty(EndOfLineCommentNonSignificantToken, "type", _types.endOfLineCommentType);
_defineProperty(EndOfLineCommentNonSignificantToken, "regularExpression", /^(?:\r\n|\r|\n)/);
exports.default = EndOfLineCommentNonSignificantToken;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L2VuZE9mTGluZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IGVuZE9mTGluZUNvbW1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmlubmVySFRNTDsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBpc0luQ29tbWVudFByZXNlcnZpbmcoKSB7XG4gICAgY29uc3QgaW5Db21tZW50UHJlc2VydmluZyA9IHRydWU7XG5cbiAgICByZXR1cm4gaW5Db21tZW50UHJlc2VydmluZztcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gZW5kT2ZMaW5lQ29tbWVudFR5cGU7XG5cbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL14oPzpcXHJcXG58XFxyfFxcbikvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuLCBjb250ZW50KTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiIsImNsb25lIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiYXNIVE1MIiwiaHRtbCIsImlubmVySFRNTCIsImlzSW5Db21tZW50UHJlc2VydmluZyIsImluQ29tbWVudFByZXNlcnZpbmciLCJtYXRjaCIsImNvbnRlbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwiZW5kT2ZMaW5lQ29tbWVudFR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVtQixJQUFBLGVBQStCLGtDQUEvQiwrQkFBK0IsRUFBQTtBQUUxQixJQUFBLE1BQWdCLFdBQWhCLGdCQUFnQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEsbUNBQW1DLGlCQ05yRCxBRE1ZOzs7YUFBTUEsbUNBQW1DOzs7Ozs7WUFDdERDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxhQUFhLEVBQUVDLFdBQVcsRUFBRTtnQkFBRSxPQUFPLHFCQUR4QkgsbUNBQW1DLGFBQ0xDLE9BQUssRUFBWCxJQUFLLENBQUEsWUFBT0QsbUNBQW1DLEVBQUVFLGFBQWEsRUFBRUMsV0FBVyxFQUFFO2FBQUU7OztZQUUxSEMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ1AsSUFBTUMsSUFBSSxHQUFHLElBQUksQ0FBQ0MsU0FBUyxBQUFDLEVBQUUsR0FBRztnQkFFakMsT0FBT0QsSUFBSSxDQUFDO2FBQ2I7OztZQUVERSxHQUFxQixFQUFyQkEsdUJBQXFCO21CQUFyQkEsU0FBQUEscUJBQXFCLEdBQUc7Z0JBQ3RCLElBQU1DLG1CQUFtQixHQUFHLElBQUksQUFBQztnQkFFakMsT0FBT0EsbUJBQW1CLENBQUM7YUFDNUI7Ozs7WUFNTUMsR0FBSyxFQUFMQSxPQUFLO21CQUFaLFNBQU9BLEtBQUssQ0FBQ0MsT0FBTyxFQUFFO2dCQUFFLE9BQU9DLGVBQW1CLFFBQUEsQ0FBQ0YsS0FBSyxDQUFDVCxtQ0FBbUMsRUFBRVUsT0FBTyxDQUFDLENBQUM7YUFBRTs7O1lBRWxHRSxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsQ0FBQ0YsT0FBTyxFQUFFO2dCQUFFLE9BQU9DLGVBQW1CLFFBQUEsQ0FBQ0MsV0FBVyxDQUFDWixtQ0FBbUMsRUFBRVUsT0FBTyxDQUFDLENBQUM7YUFBRTs7OztDQUN0SCxDQXRCZ0VDLGVBQW1CLFFBQUEsQ0FzQm5GO0FBUEMsZ0JBZm1CWCxtQ0FBbUMsRUFlL0NhLE1BQUksRUFBR0MsTUFBb0IscUJBQUEsQ0FBQztBQUVuQyxnQkFqQm1CZCxtQ0FBbUMsRUFpQi9DZSxtQkFBaUIsb0JBQXFCO2tCQWpCMUJmLG1DQUFtQyJ9