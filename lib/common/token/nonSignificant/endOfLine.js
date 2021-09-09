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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIk5FV19MSU5FIiwiZW5kT2ZMaW5lVHlwZSIsInNhbml0aXNlQ29udGVudCIsImZpcnN0IiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsImNvbnN0cnVjdG9yIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImluZGV4IiwiZ2V0SW5kZXgiLCJhc0hUTUwiLCJodG1sIiwiY2xvbmUiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJtYXRjaCIsImVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoZXMiLCJmaXJzdE1hdGNoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInNhbml0aXNlZENvbnRlbnQiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXO0FBRVYsR0FBNEIsQ0FBNUIsZUFBNEI7QUFFbkMsR0FBb0IsQ0FBcEIsVUFBb0I7QUFDZixHQUFhLENBQWIsTUFBYTtBQUNYLEdBQTRCLENBQTVCLFFBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxHQUFLLENBQUcsS0FBSyxHQVJrQixVQUFXLGdCQVFsQyxLQUFLO0lBRVEsNEJBQTRCLGlCQUFsQyxRQUFRO2NBQUYsNEJBQTRCO2FBQTVCLDRCQUE0QixDQUNuQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSzs4QkFEckMsNEJBQTRCOztpRUFBNUIsNEJBQTRCLGFBRXZDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVc7Y0FFdEMsS0FBSyxHQUFHLEtBQUs7OztpQkFKRCw0QkFBNEI7O1lBTy9DLEdBQVEsR0FBUixRQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLEdBQUcsQ0FBQztnQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDbkIsQ0FBQzs7O1lBRUQsR0FBTSxHQUFOLE1BQU07bUJBQU4sUUFBUSxDQUFSLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQyxJQUFJLEdBbEJXLFVBQW9CO2dCQW9CekMsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDOzs7WUFFRCxHQUFLLEdBQUwsS0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQztnQkFBQyxNQUFNLHNCQWpCdkIsNEJBQTRCLGNBaUJFLEtBQUssR0FBWCxJQUFLLGFBQU8sNEJBQTRCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSztZQUFHLENBQUM7Ozs7WUFFeEgsR0FBSyxHQUFMLEtBQUs7bUJBQVosUUFBUSxDQUFELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDckIsR0FBRyxDQUFDLDRCQUE0QixHQUFHLElBQUk7Z0JBRXZDLEdBQUssQ0FBQyxpQkFBaUIsaUJBQ2pCLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtnQkFFL0MsRUFBRSxFQUFFLE9BQU8sS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsR0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTztvQkFFaEMsT0FBTyxHQUFHLFVBQVUsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRXpCLEdBQUssQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU07b0JBRXBDLEVBQUUsRUFBRSxhQUFhLEdBQUcsQ0FBQyxFQUFFLENBQUM7d0JBQ3RCLEdBQUssQ0FBQyxJQUFJLEdBdENZLE1BQWEsZ0JBdUM3QixnQkFBZ0IsT0F0Q0UsUUFBNEIsa0JBc0NYLE9BQU8sR0FDMUMsU0FBUyxHQUFHLGdCQUFnQixFQUM1QixXQUFXLEdBQUcsS0FBSyxFQUNqQixLQUFLLEdBQUssT0FBTyxDQUFqQixLQUFLO3dCQUViLDRCQUE0QixHQUFHLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSztvQkFDOUcsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE1BQU0sQ0FBQyw0QkFBNEI7WUFDckMsQ0FBQzs7O1dBNUNrQiw0QkFBNEI7RUFSakIsZUFBNEI7a0JBUXZDLDRCQUE0QiJ9