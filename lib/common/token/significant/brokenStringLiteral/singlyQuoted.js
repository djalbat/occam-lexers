"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _significant = _interopRequireDefault(require("../../significant"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var SinglyQuotedBrokenStringLiteralToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(SinglyQuotedBrokenStringLiteralToken, SignificantToken);
    var _super = _createSuper(SinglyQuotedBrokenStringLiteralToken);
    function SinglyQuotedBrokenStringLiteralToken() {
        _classCallCheck(this, SinglyQuotedBrokenStringLiteralToken);
        return _super.apply(this, arguments);
    }
    _createClass(SinglyQuotedBrokenStringLiteralToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(SinglyQuotedBrokenStringLiteralToken.prototype), "clone", this).call(this, SinglyQuotedBrokenStringLiteralToken, startPosition, endPosition);
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _significant.default.match(SinglyQuotedBrokenStringLiteralToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _significant.default.fromContent(SinglyQuotedBrokenStringLiteralToken, content);
            }
        }
    ]);
    return SinglyQuotedBrokenStringLiteralToken;
}(_significant.default);
_defineProperty(SinglyQuotedBrokenStringLiteralToken, "type", _types.brokenStringLiteralType);
_defineProperty(SinglyQuotedBrokenStringLiteralToken, "regularExpression", /^'/);
exports.default = SinglyQuotedBrokenStringLiteralToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi9zaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBicm9rZW5TdHJpbmdMaXRlcmFsVHlwZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKFNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIHR5cGUgPSBicm9rZW5TdHJpbmdMaXRlcmFsVHlwZTtcblxuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXicvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLm1hdGNoKFNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChTaW5nbHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIiwiY2xvbmUiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJtYXRjaCIsImNvbnRlbnQiLCJmcm9tQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFaUIsR0FBbUIsQ0FBbkIsWUFBbUI7QUFFUixHQUFnQixDQUFoQixNQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuQ0Esb0NBQW9DLGlCQUExQyxRQUFRO2NBQUZBLG9DQUFvQzs4QkFBcENBLG9DQUFvQzthQUFwQ0Esb0NBQW9DOzhCQUFwQ0Esb0NBQW9DOzs7aUJBQXBDQSxvQ0FBb0M7O1lBQ3ZEQyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxhQUFhLEVBQUVDLFdBQVcsRUFBRSxDQUFDO2dCQUFDLE1BQU0sc0JBRHZCSCxvQ0FBb0MsYUFDTkMsQ0FBSyxRQUFYLElBQUssYUFBT0Qsb0NBQW9DLEVBQUVFLGFBQWEsRUFBRUMsV0FBVztZQUFHLENBQUM7Ozs7WUFNcEhDLEdBQUssRUFBTEEsQ0FBSzttQkFBWixRQUFRLENBQURBLEtBQUssQ0FBQ0MsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQVhILFlBQW1CLFNBV0VELEtBQUssQ0FBQ0osb0NBQW9DLEVBQUVLLE9BQU87WUFBRyxDQUFDOzs7WUFFaEdDLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLENBQUNELE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FiVCxZQUFtQixTQWFRQyxXQUFXLENBQUNOLG9DQUFvQyxFQUFFSyxPQUFPO1lBQUcsQ0FBQzs7O1dBVGhHTCxvQ0FBb0M7RUFKNUIsWUFBbUI7Z0JBSTNCQSxvQ0FBb0MsRUFHaERPLENBQUksT0FMMkIsTUFBZ0I7Z0JBRW5DUCxvQ0FBb0MsRUFLaERRLENBQWlCO2tCQUxMUixvQ0FBb0MifQ==