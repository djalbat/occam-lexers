"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonSignificant = _interopRequireDefault(require("../../token/nonSignificant"));
var _types = require("../../types");
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
var EndOfLineNonSignificantToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(EndOfLineNonSignificantToken, NonSignificantToken);
    var _super = _createSuper(EndOfLineNonSignificantToken);
    function EndOfLineNonSignificantToken() {
        _classCallCheck(this, EndOfLineNonSignificantToken);
        return _super.apply(this, arguments);
    }
    _createClass(EndOfLineNonSignificantToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(EndOfLineNonSignificantToken.prototype), "clone", this).call(this, EndOfLineNonSignificantToken, startPosition, endPosition);
            }
        },
        {
            key: "asHTML",
            value: function asHTML() {
                var html = this.innerHTML; ///
                return html;
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _nonSignificant.default.match(EndOfLineNonSignificantToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _nonSignificant.default.fromContent(EndOfLineNonSignificantToken, content);
            }
        }
    ]);
    return EndOfLineNonSignificantToken;
}(_nonSignificant.default);
exports.default = EndOfLineNonSignificantToken;
_defineProperty(EndOfLineNonSignificantToken, "type", _types.endOfLineType);
_defineProperty(EndOfLineNonSignificantToken, "regularExpression", /^(?:\r\n|\r|\n)/);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9lbmRPZkxpbmUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi90b2tlbi9ub25TaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBlbmRPZkxpbmVUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5pbm5lckhUTUw7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBlbmRPZkxpbmVUeXBlO1xuXG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eKD86XFxyXFxufFxccnxcXG4pLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJjbG9uZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImFzSFRNTCIsImh0bWwiLCJpbm5lckhUTUwiLCJtYXRjaCIsImNvbnRlbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwiZW5kT2ZMaW5lVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRW1CLElBQUEsZUFBNEIsa0NBQTVCLDRCQUE0QixFQUFBO0FBRTlCLElBQUEsTUFBYSxXQUFiLGFBQWEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFBLEFBQU1BLDRCQUE0QixpQkNOOUMsQURNWTs7O2FBQU1BLDRCQUE0Qjs7Ozs7O1lBQy9DQyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsYUFBYSxFQUFFQyxXQUFXLEVBQUU7Z0JBQUUsT0FBTyxxQkFEeEJILDRCQUE0QixhQUNFQyxPQUFLLEVBQVgsSUFBSyxDQUFBLFlBQU9ELDRCQUE0QixFQUFFRSxhQUFhLEVBQUVDLFdBQVcsRUFBRTthQUFFOzs7WUFFbkhDLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNQLElBQU1DLElBQUksR0FBRyxJQUFJLENBQUNDLFNBQVMsQUFBQyxFQUFFLEdBQUc7Z0JBRWpDLE9BQU9ELElBQUksQ0FBQzthQUNiOzs7O1lBTU1FLEdBQUssRUFBTEEsT0FBSzttQkFBWixTQUFPQSxLQUFLLENBQUNDLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxlQUFtQixRQUFBLENBQUNGLEtBQUssQ0FBQ1AsNEJBQTRCLEVBQUVRLE9BQU8sQ0FBQyxDQUFDO2FBQUU7OztZQUUzRkUsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLENBQUNGLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxlQUFtQixRQUFBLENBQUNDLFdBQVcsQ0FBQ1YsNEJBQTRCLEVBQUVRLE9BQU8sQ0FBQyxDQUFDO2FBQUU7Ozs7Q0FDL0csQ0FoQnlEQyxlQUFtQixRQUFBLENBZ0I1RTtrQkFoQm9CVCw0QkFBNEI7QUFTL0MsZ0JBVG1CQSw0QkFBNEIsRUFTeENXLE1BQUksRUFBR0MsTUFBYSxjQUFBLENBQUM7QUFFNUIsZ0JBWG1CWiw0QkFBNEIsRUFXeENhLG1CQUFpQixvQkFBcUIifQ==