"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _nonSignificant = _interopRequireDefault(require("../../token/nonSignificant"));
var _constants = require("../../../constants");
var _types = require("../../types");
var _content = require("../../../utilities/content");
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
var first = _necessary.arrayUtilities.first;
var EndOfLineNonSignificantToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(EndOfLineNonSignificantToken, NonSignificantToken);
    function EndOfLineNonSignificantToken(type, content, innerHTML, significant, index) {
        _classCallCheck(this, EndOfLineNonSignificantToken);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineNonSignificantToken).call(this, type, content, innerHTML, significant));
        _this.index = index;
        return _this;
    }
    _createClass(EndOfLineNonSignificantToken, [
        {
            key: "getIndex",
            value: function getIndex() {
                return this.index;
            }
        },
        {
            key: "asHTML",
            value: function asHTML() {
                var html = _constants.NEW_LINE;
                return html;
            }
        },
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(EndOfLineNonSignificantToken.prototype), "clone", this).call(this, EndOfLineNonSignificantToken, startPosition, endPosition, this.index);
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                var endOfLineNonSignificantToken = null;
                var regularExpression = /\r\n|\r|\n/, matches = content.match(regularExpression);
                if (matches !== null) {
                    var firstMatch = first(matches);
                    content = firstMatch; ///
                    var contentLength = content.length;
                    if (contentLength > 0) {
                        var type = _types.endOfLineType, sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent, significant = false, index = matches.index;
                        endOfLineNonSignificantToken = new EndOfLineNonSignificantToken(type, content, innerHTML, significant, index);
                    }
                }
                return endOfLineNonSignificantToken;
            }
        }
    ]);
    return EndOfLineNonSignificantToken;
}(_nonSignificant.default);
exports.default = EndOfLineNonSignificantToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IE5FV19MSU5FIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZW5kT2ZMaW5lVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc2FuaXRpc2VDb250ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIGluZGV4KSB7XG4gICAgc3VwZXIodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCk7XG5cbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gTkVXX0xJTkU7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgdGhpcy5pbmRleCk7IH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkge1xuICAgIGxldCBlbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uID0gL1xcclxcbnxcXHJ8XFxuLyxcbiAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBlbmRPZkxpbmVUeXBlLCAvLy9cbiAgICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50ID0gZmFsc2UsXG4gICAgICAgICAgICAgIHsgaW5kZXggfSA9IG1hdGNoZXM7XG5cbiAgICAgICAgZW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXO0FBRVYsR0FBNEIsQ0FBNUIsZUFBNEI7QUFFbkMsR0FBb0IsQ0FBcEIsVUFBb0I7QUFDZixHQUFhLENBQWIsTUFBYTtBQUNYLEdBQTRCLENBQTVCLFFBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxHQUFLLENBQUcsS0FBSyxHQVJrQixVQUFXLGdCQVFsQyxLQUFLO0lBRVEsNEJBQTRCO2NBQTVCLDRCQUE0QjthQUE1Qiw0QkFBNEIsQ0FDbkMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUs7OEJBRHJDLDRCQUE0Qjs7aUVBQTVCLDRCQUE0QixhQUV2QyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXO2NBRXRDLEtBQUssR0FBRyxLQUFLOzs7aUJBSkQsNEJBQTRCOztZQU8vQyxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLEdBQUcsQ0FBQzs0QkFDRSxLQUFLO1lBQ25CLENBQUM7OztZQUVELEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQyxJQUFJLEdBbEJXLFVBQW9CO3VCQW9CbEMsSUFBSTtZQUNiLENBQUM7OztZQUVELEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLENBQUM7NENBakJoQiw0QkFBNEIsY0FpQkUsS0FBSyxvQkFBQyw0QkFBNEIsRUFBRSxhQUFhLEVBQUUsV0FBVyxPQUFPLEtBQUs7WUFBRyxDQUFDOzs7O1lBRXhILEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDckIsR0FBRyxDQUFDLDRCQUE0QixHQUFHLElBQUk7Z0JBRXZDLEdBQUssQ0FBQyxpQkFBaUIsaUJBQ2pCLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtnQkFFL0MsRUFBRSxFQUFFLE9BQU8sS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsR0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTztvQkFFaEMsT0FBTyxHQUFHLFVBQVUsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRXpCLEdBQUssQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU07b0JBRXBDLEVBQUUsRUFBRSxhQUFhLEdBQUcsQ0FBQyxFQUFFLENBQUM7d0JBQ3RCLEdBQUssQ0FBQyxJQUFJLEdBdENZLE1BQWEsZ0JBdUM3QixnQkFBZ0IsT0F0Q0UsUUFBNEIsa0JBc0NYLE9BQU8sR0FDMUMsU0FBUyxHQUFHLGdCQUFnQixFQUM1QixXQUFXLEdBQUcsS0FBSyxFQUNqQixLQUFLLEdBQUssT0FBTyxDQUFqQixLQUFLO3dCQUViLDRCQUE0QixHQUFHLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSztvQkFDOUcsQ0FBQztnQkFDSCxDQUFDO3VCQUVNLDRCQUE0QjtZQUNyQyxDQUFDOzs7V0E1Q2tCLDRCQUE0QjtFQVJqQixlQUE0QjtrQkFRdkMsNEJBQTRCIn0=