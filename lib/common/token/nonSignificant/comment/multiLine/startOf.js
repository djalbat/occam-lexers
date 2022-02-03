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
var StartOfMultiLineCommentToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(StartOfMultiLineCommentToken, NonSignificantToken);
    var _super = _createSuper(StartOfMultiLineCommentToken);
    function StartOfMultiLineCommentToken() {
        _classCallCheck(this, StartOfMultiLineCommentToken);
        return _super.apply(this, arguments);
    }
    _createClass(StartOfMultiLineCommentToken, [
        {
            key: "clone",
            value: function clone(Class, startPosition, endPosition) {
                return _get(_getPrototypeOf(StartOfMultiLineCommentToken.prototype), "clone", this).call(this, Class, startPosition, endPosition);
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
    return StartOfMultiLineCommentToken;
}(_nonSignificant.default);
_defineProperty(StartOfMultiLineCommentToken, "type", _types.startOfMultiLineCommentType);
exports.default = StartOfMultiLineCommentToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uLy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IHN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGlzSW5Db21tZW50UHJlc2VydmluZygpIHtcbiAgICBjb25zdCBpbkNvbW1lbnRQcmVzZXJ2aW5nID0gdHJ1ZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnRQcmVzZXJ2aW5nO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFR5cGU7XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKENsYXNzLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiY2xvbmUiLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImlzSW5Db21tZW50UHJlc2VydmluZyIsImluQ29tbWVudFByZXNlcnZpbmciLCJtYXRjaCIsImNvbnRlbnQiLCJmcm9tQ29udGVudCIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW9CLEdBQWtDLENBQWxDLGVBQWtDO0FBRXRCLEdBQW1CLENBQW5CLE1BQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTFDQSw0QkFBNEIsaUJBQWxDLFFBQVE7OzthQUFGQSw0QkFBNEI7Ozs7OztZQUMvQ0MsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRSxDQUFDO2dCQUFDLE1BQU0sc0JBRDlCSiw0QkFBNEIsYUFDU0MsQ0FBSyxRQUFYLElBQUssYUFBT0MsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7WUFBRyxDQUFDOzs7WUFFbkdDLEdBQXFCLEVBQXJCQSxDQUFxQjttQkFBckJBLFFBQVEsQ0FBUkEscUJBQXFCLEdBQUcsQ0FBQztnQkFDdkIsR0FBSyxDQUFDQyxtQkFBbUIsR0FBRyxJQUFJO2dCQUVoQyxNQUFNLENBQUNBLG1CQUFtQjtZQUM1QixDQUFDOzs7O1lBSU1DLEdBQUssRUFBTEEsQ0FBSzttQkFBWixRQUFRLENBQURBLEtBQUssQ0FBQ0wsS0FBSyxFQUFFTSxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBZlAsZUFBa0MsU0FlTkQsS0FBSyxDQUFDTCxLQUFLLEVBQUVNLE9BQU87WUFBRyxDQUFDOzs7WUFFM0VDLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLENBQUNQLEtBQUssRUFBRU0sT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQWpCYixlQUFrQyxTQWlCQUMsV0FBVyxDQUFDUCxLQUFLLEVBQUVNLE9BQU87WUFBRyxDQUFDOzs7O0VBakJoRSxlQUFrQztnQkFJN0NSLDRCQUE0QixFQVN4Q1UsQ0FBSSxPQVgrQixNQUFtQjtrQkFFMUNWLDRCQUE0QiJ9