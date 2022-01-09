"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _significant = _interopRequireDefault(require("../../token/significant"));
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
var StringLiteralToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(StringLiteralToken, SignificantToken);
    var _super = _createSuper(StringLiteralToken);
    function StringLiteralToken() {
        _classCallCheck(this, StringLiteralToken);
        return _super.apply(this, arguments);
    }
    _createClass(StringLiteralToken, [
        {
            key: "clone",
            value: function clone(Class, startPosition, endPosition) {
                return _get(_getPrototypeOf(StringLiteralToken.prototype), "clone", this).call(this, Class, startPosition, endPosition);
            }
        },
        {
            key: "getString",
            value: function getString() {
                var content = this.getContent(), contentLength = content.length, start = 1, end = contentLength - 1, string = content.substring(start, end);
                return string;
            }
        }
    ], [
        {
            key: "match",
            value: function match(Class, content) {
                return _significant.default.match(Class, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(Class, content) {
                return _significant.default.fromContent(Class, content);
            }
        }
    ]);
    return StringLiteralToken;
}(_significant.default);
exports.default = StringLiteralToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ0xpdGVyYWxUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aCxcbiAgICAgICAgICBzdGFydCA9IDEsXG4gICAgICAgICAgZW5kID0gY29udGVudExlbmd0aCAtIDEsXG4gICAgICAgICAgc3RyaW5nID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLm1hdGNoKENsYXNzLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdHJpbmdMaXRlcmFsVG9rZW4iLCJjbG9uZSIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiZ2V0U3RyaW5nIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJlbmQiLCJzdHJpbmciLCJzdWJzdHJpbmciLCJtYXRjaCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVpQixHQUF5QixDQUF6QixZQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakNBLGtCQUFrQixpQkFBeEIsUUFBUTtjQUFGQSxrQkFBa0I7OEJBQWxCQSxrQkFBa0I7YUFBbEJBLGtCQUFrQjs4QkFBbEJBLGtCQUFrQjs7O2lCQUFsQkEsa0JBQWtCOztZQUNyQ0MsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRSxDQUFDO2dCQUFDLE1BQU0sc0JBRDlCSixrQkFBa0IsYUFDbUJDLENBQUssUUFBWCxJQUFLLGFBQU9DLEtBQUssRUFBRUMsYUFBYSxFQUFFQyxXQUFXO1lBQUcsQ0FBQzs7O1lBRW5HQyxHQUFTLEVBQVRBLENBQVM7bUJBQVRBLFFBQVEsQ0FBUkEsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsR0FBSyxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxhQUFhLEdBQUdGLE9BQU8sQ0FBQ0csTUFBTSxFQUM5QkMsS0FBSyxHQUFHLENBQUMsRUFDVEMsR0FBRyxHQUFHSCxhQUFhLEdBQUcsQ0FBQyxFQUN2QkksTUFBTSxHQUFHTixPQUFPLENBQUNPLFNBQVMsQ0FBQ0gsS0FBSyxFQUFFQyxHQUFHO2dCQUUzQyxNQUFNLENBQUNDLE1BQU07WUFDZixDQUFDOzs7O1lBRU1FLEdBQUssRUFBTEEsQ0FBSzttQkFBWixRQUFRLENBQURBLEtBQUssQ0FBQ1osS0FBSyxFQUFFSSxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBZlYsWUFBeUIsU0FlR1EsS0FBSyxDQUFDWixLQUFLLEVBQUVJLE9BQU87WUFBRyxDQUFDOzs7WUFFeEVTLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLENBQUNiLEtBQUssRUFBRUksT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQWpCaEIsWUFBeUIsU0FpQlNTLFdBQVcsQ0FBQ2IsS0FBSyxFQUFFSSxPQUFPO1lBQUcsQ0FBQzs7O1dBZnhFTixrQkFBa0I7RUFGVixZQUF5QjtrQkFFakNBLGtCQUFrQiJ9