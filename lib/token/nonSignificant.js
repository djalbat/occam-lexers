"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _token = _interopRequireDefault(require("../token"));
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
var significant = false;
var NonSignificantToken = /*#__PURE__*/ function(Token) {
    _inherits(NonSignificantToken, Token);
    var _super = _createSuper(NonSignificantToken);
    function NonSignificantToken() {
        _classCallCheck(this, NonSignificantToken);
        return _super.apply(this, arguments);
    }
    _createClass(NonSignificantToken, [
        {
            key: "clone",
            value: function clone(Class, startPosition, endPosition) {
                return _get(_getPrototypeOf(NonSignificantToken.prototype), "clone", this).call(this, Class, startPosition, endPosition, significant);
            }
        }
    ], [
        {
            key: "match",
            value: function match(Class, content) {
                return _token.default.match(Class, content, significant);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(Class, content) {
                return _token.default.fromContent(Class, content, significant);
            }
        },
        {
            key: "fromContentAndType",
            value: function fromContentAndType(Class, content, type) {
                return _token.default.fromContentAndType(Class, content, type, significant);
            }
        }
    ]);
    return NonSignificantToken;
}(_token.default);
exports.default = NonSignificantToken;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRva2VuIGZyb20gXCIuLi90b2tlblwiO1xuXG5jb25zdCBzaWduaWZpY2FudCA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25TaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50KSB7IHJldHVybiBUb2tlbi5tYXRjaChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50KSB7IHJldHVybiBUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSkgeyByZXR1cm4gVG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsic2lnbmlmaWNhbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwiY2xvbmUiLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsIm1hdGNoIiwiY29udGVudCIsIlRva2VuIiwiZnJvbUNvbnRlbnQiLCJmcm9tQ29udGVudEFuZFR5cGUiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRUssSUFBQSxNQUFVLGtDQUFWLFVBQVUsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU1BLFdBQVcsR0FBRyxLQUFLLEFBQUM7QUFFWCxJQUFBLEFBQU1DLG1CQUFtQixpQkNOckMsQURNWTs7O2FBQU1BLG1CQUFtQjs7Ozs7O1lBQ3RDQyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRTtnQkFBRSxPQUFPLHFCQUQvQkosbUJBQW1CLGFBQ2tCQyxPQUFLLEVBQVgsSUFBSyxDQUFBLFlBQU9DLEtBQUssRUFBRUMsYUFBYSxFQUFFQyxXQUFXLEVBQUVMLFdBQVcsRUFBRTthQUFFOzs7O1lBRXpHTSxHQUFLLEVBQUxBLE9BQUs7bUJBQVosU0FBT0EsS0FBSyxDQUFDSCxLQUFLLEVBQUVJLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxNQUFLLFFBQUEsQ0FBQ0YsS0FBSyxDQUFDSCxLQUFLLEVBQUVJLE9BQU8sRUFBRVAsV0FBVyxDQUFDLENBQUM7YUFBRTs7O1lBRTFFUyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsQ0FBQ04sS0FBSyxFQUFFSSxPQUFPLEVBQUU7Z0JBQUUsT0FBT0MsTUFBSyxRQUFBLENBQUNDLFdBQVcsQ0FBQ04sS0FBSyxFQUFFSSxPQUFPLEVBQUVQLFdBQVcsQ0FBQyxDQUFDO2FBQUU7OztZQUV0RlUsR0FBa0IsRUFBbEJBLG9CQUFrQjttQkFBekIsU0FBT0Esa0JBQWtCLENBQUNQLEtBQUssRUFBRUksT0FBTyxFQUFFSSxJQUFJLEVBQUU7Z0JBQUUsT0FBT0gsTUFBSyxRQUFBLENBQUNFLGtCQUFrQixDQUFDUCxLQUFLLEVBQUVJLE9BQU8sRUFBRUksSUFBSSxFQUFFWCxXQUFXLENBQUMsQ0FBQzthQUFFOzs7O0NBQ3hILENBUmdEUSxNQUFLLFFBQUEsQ0FRckQ7a0JBUm9CUCxtQkFBbUIifQ==