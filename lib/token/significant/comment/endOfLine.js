"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _significant = _interopRequireDefault(require("../../../token/significant"));
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
var EndOfLineCommentSignificantToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(EndOfLineCommentSignificantToken, SignificantToken);
    var _super = _createSuper(EndOfLineCommentSignificantToken);
    function EndOfLineCommentSignificantToken() {
        _classCallCheck(this, EndOfLineCommentSignificantToken);
        return _super.apply(this, arguments);
    }
    _createClass(EndOfLineCommentSignificantToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(EndOfLineCommentSignificantToken.prototype), "clone", this).call(this, EndOfLineCommentSignificantToken, startPosition, endPosition);
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
                return _significant.default.match(EndOfLineCommentSignificantToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _significant.default.fromContent(EndOfLineCommentSignificantToken, content);
            }
        }
    ]);
    return EndOfLineCommentSignificantToken;
}(_significant.default);
exports.default = EndOfLineCommentSignificantToken;
_defineProperty(EndOfLineCommentSignificantToken, "type", _types.endOfLineCommentType);
_defineProperty(EndOfLineCommentSignificantToken, "regularExpression", /^(?:\r\n|\r|\n)/);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9jb21tZW50L2VuZE9mTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uLy4uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IGVuZE9mTGluZUNvbW1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShFbmRPZkxpbmVDb21tZW50U2lnbmlmaWNhbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmlubmVySFRNTDsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBpc0luQ29tbWVudFByZXNlcnZpbmcoKSB7XG4gICAgY29uc3QgaW5Db21tZW50UHJlc2VydmluZyA9IHRydWU7XG5cbiAgICByZXR1cm4gaW5Db21tZW50UHJlc2VydmluZztcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gZW5kT2ZMaW5lQ29tbWVudFR5cGU7XG5cbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL14oPzpcXHJcXG58XFxyfFxcbikvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLm1hdGNoKEVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KEVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIkVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIiwiY2xvbmUiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJhc0hUTUwiLCJodG1sIiwiaW5uZXJIVE1MIiwiaXNJbkNvbW1lbnRQcmVzZXJ2aW5nIiwiaW5Db21tZW50UHJlc2VydmluZyIsIm1hdGNoIiwiY29udGVudCIsIlNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudCIsInR5cGUiLCJlbmRPZkxpbmVDb21tZW50VHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFNkIsR0FBNEIsQ0FBNUIsWUFBNEI7QUFFcEIsR0FBZ0IsQ0FBaEIsTUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs4REFKckQ7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7OzswQkFBQTs7Ozs7Ozs7OztTQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozt3Q0FBQTs7Ozs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFNZSxHQUFLLENBQUNBLGdDQUFnQyxpQkFBdEMsUUFBUTtpRUFOdkI7O2FBTXFCQSxnQ0FBZ0M7K0RBTnJEOzs7OztZQU9FQyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxhQUFhLEVBQUVDLFdBQVcsRUFBRSxDQUFDO2dCQUFDLE1BQU0sc0JBRHZCSCxnQ0FBZ0MsYUFDRkMsQ0FBSyxRQUFYLElBQUssYUFBT0QsZ0NBQWdDLEVBQUVFLGFBQWEsRUFBRUMsV0FBVztZQUFHLENBQUM7OztZQUV2SEMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFHLEVBQUcsQUFBSCxDQUFHO2dCQUVqQyxNQUFNLENBQUNELElBQUk7WUFDYixDQUFDOzs7WUFFREUsR0FBcUIsRUFBckJBLENBQXFCO21CQUFyQkEsUUFBUSxDQUFSQSxxQkFBcUIsR0FBRyxDQUFDO2dCQUN2QixHQUFLLENBQUNDLG1CQUFtQixHQUFHLElBQUk7Z0JBRWhDLE1BQU0sQ0FBQ0EsbUJBQW1CO1lBQzVCLENBQUM7Ozs7WUFNTUMsR0FBSyxFQUFMQSxDQUFLO21CQUFaLFFBQVEsQ0FBREEsS0FBSyxDQUFDQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUNDLFlBQWdCLFNBQUNGLEtBQUssQ0FBQ1QsZ0NBQWdDLEVBQUVVLE9BQU87WUFBRyxDQUFDOzs7WUFFNUZFLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLENBQUNGLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQ0MsWUFBZ0IsU0FBQ0MsV0FBVyxDQUFDWixnQ0FBZ0MsRUFBRVUsT0FBTztZQUFHLENBQUM7O01BM0JqSDs7RUFNOERDLFlBQWdCO2tCQUF6RFgsZ0NBQWdDLEFBTnJEO2dCQU1xQkEsZ0NBQWdDLEVBZTVDYSxDQUFJLE9BQUdDLE1BQW9CLHNCQXJCcEM7Z0JBTXFCZCxnQ0FBZ0MsRUFpQjVDZSxDQUFpQixzQ0F2QjFCIn0=