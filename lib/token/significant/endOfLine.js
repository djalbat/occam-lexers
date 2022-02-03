"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _significant = _interopRequireDefault(require("../../token/significant"));
var _types = require("../../types");
var _content = require("../../utilities/content");
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
var first = _necessary.arrayUtilities.first, NEW_LINE_CHARACTER = _necessary.characters.NEW_LINE_CHARACTER;
var EndOfLineSignificantToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(EndOfLineSignificantToken, SignificantToken);
    var _super = _createSuper(EndOfLineSignificantToken);
    function EndOfLineSignificantToken(type, content, innerHTML, significant, index) {
        _classCallCheck(this, EndOfLineSignificantToken);
        var _this;
        _this = _super.call(this, type, content, innerHTML, significant);
        _this.index = index;
        return _this;
    }
    _createClass(EndOfLineSignificantToken, [
        {
            key: "getIndex",
            value: function getIndex() {
                return this.index;
            }
        },
        {
            key: "asHTML",
            value: function asHTML() {
                var html = NEW_LINE_CHARACTER;
                return html;
            }
        },
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(EndOfLineSignificantToken.prototype), "clone", this).call(this, EndOfLineSignificantToken, startPosition, endPosition, this.index);
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                var endOfLineSignificantToken = null;
                var regularExpression = /^(?:\r\n|\r|\n)/, matches = content.match(regularExpression);
                if (matches !== null) {
                    var firstMatch = first(matches);
                    content = firstMatch; ///
                    var contentLength = content.length;
                    if (contentLength > 0) {
                        var type = _types.endOfLineType, sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent, significant = true, index = matches.index;
                        endOfLineSignificantToken = new EndOfLineSignificantToken(type, content, innerHTML, significant, index);
                    }
                }
                return endOfLineSignificantToken;
            }
        }
    ]);
    return EndOfLineSignificantToken;
}(_significant.default);
exports.default = EndOfLineSignificantToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMsIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgZW5kT2ZMaW5lVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc2FuaXRpc2VDb250ZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBORVdfTElORV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgaW5kZXgpIHtcbiAgICBzdXBlcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KTtcblxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGh0bWwgPSBORVdfTElORV9DSEFSQUNURVI7XG4gICAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHRoaXMuaW5kZXgpOyB9XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHtcbiAgICBsZXQgZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvbiA9IC9eKD86XFxyXFxufFxccnxcXG4pLyxcbiAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBlbmRPZkxpbmVUeXBlLCAvLy9cbiAgICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50ID0gdHJ1ZSxcbiAgICAgICAgICAgICAgeyBpbmRleCB9ID0gbWF0Y2hlcztcblxuICAgICAgICBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuID0gbmV3IEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4odHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIk5FV19MSU5FX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImluZGV4IiwiZ2V0SW5kZXgiLCJhc0hUTUwiLCJodG1sIiwiY2xvbmUiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJtYXRjaCIsImVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoZXMiLCJmaXJzdE1hdGNoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImVuZE9mTGluZVR5cGUiLCJzYW5pdGlzZWRDb250ZW50Iiwic2FuaXRpc2VDb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFK0IsR0FBVyxDQUFYLFVBQVc7QUFFekIsR0FBeUIsQ0FBekIsWUFBeUI7QUFFeEIsR0FBYSxDQUFiLE1BQWE7QUFDWCxHQUF5QixDQUF6QixRQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELEdBQUssQ0FBR0EsS0FBSyxHQUFLQyxVQUFjLGdCQUF4QkQsS0FBSyxFQUNMRSxrQkFBa0IsR0FBS0MsVUFBVSxZQUFqQ0Qsa0JBQWtCO0lBRUxFLHlCQUF5QixpQkFBL0IsUUFBUTs7O2FBQUZBLHlCQUF5QixDQUNoQ0MsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxLQUFLOzs7a0NBQ2hESixJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxXQUFXO2NBRXRDQyxLQUFLLEdBQUdBLEtBQUs7Ozs7O1lBR3BCQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQ0QsS0FBSztZQUNuQixDQUFDOzs7WUFFREUsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQ0MsSUFBSSxHQUFHVixrQkFBa0I7Z0JBRS9CLE1BQU0sQ0FBQ1UsSUFBSTtZQUNiLENBQUM7OztZQUVEQyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxhQUFhLEVBQUVDLFdBQVcsRUFBRSxDQUFDO2dCQUFDLE1BQU0sc0JBakJ2QlgseUJBQXlCLGFBaUJLUyxDQUFLLFFBQVgsSUFBSyxhQUFPVCx5QkFBeUIsRUFBRVUsYUFBYSxFQUFFQyxXQUFXLEVBQUUsSUFBSSxDQUFDTixLQUFLO1lBQUcsQ0FBQzs7OztZQUVySE8sR0FBSyxFQUFMQSxDQUFLO21CQUFaLFFBQVEsQ0FBREEsS0FBSyxDQUFDVixPQUFPLEVBQUUsQ0FBQztnQkFDckIsR0FBRyxDQUFDVyx5QkFBeUIsR0FBRyxJQUFJO2dCQUVwQyxHQUFLLENBQUNDLGlCQUFpQixzQkFDakJDLE9BQU8sR0FBR2IsT0FBTyxDQUFDVSxLQUFLLENBQUNFLGlCQUFpQjtnQkFFL0MsRUFBRSxFQUFFQyxPQUFPLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ3JCLEdBQUssQ0FBQ0MsVUFBVSxHQUFHcEIsS0FBSyxDQUFDbUIsT0FBTztvQkFFaENiLE9BQU8sR0FBR2MsVUFBVSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFekIsR0FBSyxDQUFDQyxhQUFhLEdBQUdmLE9BQU8sQ0FBQ2dCLE1BQU07b0JBRXBDLEVBQUUsRUFBRUQsYUFBYSxHQUFHLENBQUMsRUFBRSxDQUFDO3dCQUN0QixHQUFLLENBQUNoQixJQUFJLEdBQUdrQixNQUFhLGdCQUNwQkMsZ0JBQWdCLE9BQUdDLFFBQWUsa0JBQUNuQixPQUFPLEdBQzFDQyxTQUFTLEdBQUdpQixnQkFBZ0IsRUFDNUJoQixXQUFXLEdBQUcsSUFBSSxFQUNoQkMsS0FBSyxHQUFLVSxPQUFPLENBQWpCVixLQUFLO3dCQUViUSx5QkFBeUIsR0FBRyxHQUFHLENBQUNiLHlCQUF5QixDQUFDQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLEtBQUs7b0JBQ3hHLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxNQUFNLENBQUNRLHlCQUF5QjtZQUNsQyxDQUFDOzs7O0VBNUNvRFMsWUFBZ0I7a0JBQWxEdEIseUJBQXlCIn0=