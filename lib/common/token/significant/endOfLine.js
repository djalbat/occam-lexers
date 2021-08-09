"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _significant = _interopRequireDefault(require("../../token/significant"));
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
var EndOfLineSignificantToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(EndOfLineSignificantToken, SignificantToken);
    function EndOfLineSignificantToken(type, content, innerHTML, significant, index) {
        _classCallCheck(this, EndOfLineSignificantToken);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineSignificantToken).call(this, type, content, innerHTML, significant));
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
                var html = "\n"; ///
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
                var regularExpression = /\r\n|\r|\n/, matches = content.match(regularExpression);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IGVuZE9mTGluZVR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHNhbml0aXNlQ29udGVudCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCBpbmRleCkge1xuICAgIHN1cGVyKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpO1xuXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBhc0hUTUwoKSB7XG4gICAgY29uc3QgaHRtbCA9IFwiXFxuXCI7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgdGhpcy5pbmRleCk7IH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkge1xuICAgIGxldCBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uID0gL1xcclxcbnxcXHJ8XFxuLyxcbiAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBlbmRPZkxpbmVUeXBlLCAvLy9cbiAgICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50ID0gdHJ1ZSxcbiAgICAgICAgICAgICAgeyBpbmRleCB9ID0gbWF0Y2hlcztcblxuICAgICAgICBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuID0gbmV3IEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4odHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUIsR0FBVyxDQUFYLFVBQVc7QUFFYixHQUF5QixDQUF6QixZQUF5QjtBQUV4QixHQUFhLENBQWIsTUFBYTtBQUNYLEdBQTRCLENBQTVCLFFBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxHQUFLLENBQUcsS0FBSyxHQVBrQixVQUFXLGdCQU9sQyxLQUFLO0lBRVEseUJBQXlCO2NBQXpCLHlCQUF5QjthQUF6Qix5QkFBeUIsQ0FDaEMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUs7OEJBRHJDLHlCQUF5Qjs7aUVBQXpCLHlCQUF5QixhQUVwQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXO2NBRXRDLEtBQUssR0FBRyxLQUFLOzs7aUJBSkQseUJBQXlCOztZQU81QyxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLEdBQUcsQ0FBQzs0QkFDRSxLQUFLO1lBQ25CLENBQUM7OztZQUVELEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQyxJQUFJLElBQUcsRUFBSSxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFaEIsSUFBSTtZQUNiLENBQUM7OztZQUVELEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLENBQUM7NENBakJoQix5QkFBeUIsY0FpQkssS0FBSyxvQkFBQyx5QkFBeUIsRUFBRSxhQUFhLEVBQUUsV0FBVyxPQUFPLEtBQUs7WUFBRyxDQUFDOzs7O1lBRXJILEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDckIsR0FBRyxDQUFDLHlCQUF5QixHQUFHLElBQUk7Z0JBRXBDLEdBQUssQ0FBQyxpQkFBaUIsaUJBQ2pCLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtnQkFFL0MsRUFBRSxFQUFFLE9BQU8sS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsR0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTztvQkFFaEMsT0FBTyxHQUFHLFVBQVUsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRXpCLEdBQUssQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU07b0JBRXBDLEVBQUUsRUFBRSxhQUFhLEdBQUcsQ0FBQyxFQUFFLENBQUM7d0JBQ3RCLEdBQUssQ0FBQyxJQUFJLEdBdENZLE1BQWEsZ0JBdUM3QixnQkFBZ0IsT0F0Q0UsUUFBNEIsa0JBc0NYLE9BQU8sR0FDMUMsU0FBUyxHQUFHLGdCQUFnQixFQUM1QixXQUFXLEdBQUcsSUFBSSxFQUNoQixLQUFLLEdBQUssT0FBTyxDQUFqQixLQUFLO3dCQUViLHlCQUF5QixHQUFHLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSztvQkFDeEcsQ0FBQztnQkFDSCxDQUFDO3VCQUVNLHlCQUF5QjtZQUNsQyxDQUFDOzs7V0E1Q2tCLHlCQUF5QjtFQVBqQixZQUF5QjtrQkFPakMseUJBQXlCIn0=