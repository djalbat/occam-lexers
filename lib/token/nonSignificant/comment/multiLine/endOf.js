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
var EndOfMultiLineCommentToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(EndOfMultiLineCommentToken, NonSignificantToken);
    var _super = _createSuper(EndOfMultiLineCommentToken);
    function EndOfMultiLineCommentToken() {
        _classCallCheck(this, EndOfMultiLineCommentToken);
        return _super.apply(this, arguments);
    }
    _createClass(EndOfMultiLineCommentToken, [
        {
            key: "clone",
            value: function clone(Class, startPosition, endPosition) {
                return _get(_getPrototypeOf(EndOfMultiLineCommentToken.prototype), "clone", this).call(this, Class, startPosition, endPosition);
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
    return EndOfMultiLineCommentToken;
}(_nonSignificant.default);
exports.default = EndOfMultiLineCommentToken;
_defineProperty(EndOfMultiLineCommentToken, "type", _types.endOfMultiLineCommentType);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGlzSW5Db21tZW50UHJlc2VydmluZygpIHtcbiAgICBjb25zdCBpbkNvbW1lbnRQcmVzZXJ2aW5nID0gZmFsc2U7XG5cbiAgICByZXR1cm4gaW5Db21tZW50UHJlc2VydmluZztcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gZW5kT2ZNdWx0aUxpbmVDb21tZW50VHlwZTtcblxuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4ubWF0Y2goQ2xhc3MsIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KENsYXNzLCBjb250ZW50KTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVSA9IFwidVwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJjbG9uZSIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiaXNJbkNvbW1lbnRQcmVzZXJ2aW5nIiwiaW5Db21tZW50UHJlc2VydmluZyIsIm1hdGNoIiwiY29udGVudCIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudCIsInR5cGUiLCJlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRWdDLElBQUEsZUFBa0Msa0NBQWxDLGtDQUFrQyxFQUFBO0FBRXhCLElBQUEsTUFBbUIsV0FBbkIsbUJBQW1CLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFKN0Q7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7OzswQkFBQTs7Ozs7Ozs7OztTQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozt3Q0FBQTs7Ozs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFNZSxJQUFBLEFBQU1BLDBCQUEwQixpQkNONUMsQURNWTs4REFOZjs7YUFNcUJBLDBCQUEwQjt5REFOL0M7Ozs7O1lBT0VDLEdBQUssRUFBTEEsT0FBSztZRVBQLE9GT0VBLFNBQUFBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRTtnQkFBRSxPQUFPLHFCQUQvQkosMEJBQTBCLGFBQ1dDLE9BQUssRUFBWCxJQUFLLENBQUEsWUFBT0MsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRTthQUFFOzs7WUFFbkdDLEdBQXFCLEVBQXJCQSx1QkFBcUI7WUVUdkIsT0ZTRUEsU0FBQUEscUJBQXFCLEdBQUc7Z0JBQ3RCLElBQU1DLG1CQUFtQixHQUFHLEtBQUssQUFBQztnQkFFbEMsT0FBT0EsbUJBQW1CLENBQUM7YUFDNUI7Ozs7WUFJTUMsR0FBSyxFQUFMQSxPQUFLO1lFakJkLE9GaUJFLFNBQU9BLEtBQUssQ0FBQ0wsS0FBSyxFQUFFTSxPQUFPLEVBQUU7Z0JBQUUsT0FBT0MsZUFBbUIsU0FBQ0YsS0FBSyxDQUFDTCxLQUFLLEVBQUVNLE9BQU8sQ0FBQyxDQUFDO2FBQUU7OztZQUUzRUUsR0FBVyxFQUFYQSxhQUFXO1lFbkJwQixPRm1CRSxTQUFPQSxXQUFXLENBQUNSLEtBQUssRUFBRU0sT0FBTyxFQUFFO2dCQUFFLE9BQU9DLGVBQW1CLFNBQUNDLFdBQVcsQ0FBQ1IsS0FBSyxFQUFFTSxPQUFPLENBQUMsQ0FBQzthQUFFOztNQW5CaEc7O0NBb0JDLENBZHVEQyxlQUFtQixTQWMxRTtrQkFkb0JULDBCQUEwQixBQU4vQztBQWVFLGdCQVRtQkEsMEJBQTBCLEVBU3RDVyxNQUFJLEVBQUdDLE1BQXlCLDJCQUFDLEFBZjFDIn0=