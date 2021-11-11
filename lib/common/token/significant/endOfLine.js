"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _significant = _interopRequireDefault(require("../../token/significant"));
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
var first = _necessary.arrayUtilities.first;
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
                var html = _constants.NEW_LINE;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IE5FV19MSU5FIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZW5kT2ZMaW5lVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc2FuaXRpc2VDb250ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIGluZGV4KSB7XG4gICAgc3VwZXIodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCk7XG5cbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gTkVXX0xJTkU7XG4gICAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHRoaXMuaW5kZXgpOyB9XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHtcbiAgICBsZXQgZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvbiA9IC9cXHJcXG58XFxyfFxcbi8sXG4gICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG5cbiAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB0eXBlID0gZW5kT2ZMaW5lVHlwZSwgLy8vXG4gICAgICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICBzaWduaWZpY2FudCA9IHRydWUsXG4gICAgICAgICAgICAgIHsgaW5kZXggfSA9IG1hdGNoZXM7XG5cbiAgICAgICAgZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsInR5cGUiLCJjb250ZW50IiwiaW5uZXJIVE1MIiwic2lnbmlmaWNhbnQiLCJpbmRleCIsImdldEluZGV4IiwiYXNIVE1MIiwiaHRtbCIsImNsb25lIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwibWF0Y2giLCJlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaGVzIiwiZmlyc3RNYXRjaCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJzYW5pdGlzZWRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVztBQUViLEdBQXlCLENBQXpCLFlBQXlCO0FBRTdCLEdBQW9CLENBQXBCLFVBQW9CO0FBQ2YsR0FBYSxDQUFiLE1BQWE7QUFDWCxHQUE0QixDQUE1QixRQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVELEdBQUssQ0FBR0EsS0FBSyxHQVJrQixVQUFXLGdCQVFsQ0EsS0FBSztJQUVRQyx5QkFBeUIsaUJBQS9CLFFBQVE7Y0FBRkEseUJBQXlCOzhCQUF6QkEseUJBQXlCO2FBQXpCQSx5QkFBeUIsQ0FDaENDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsS0FBSzs4QkFEckNMLHlCQUF5Qjs7a0NBRXBDQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxXQUFXO2NBRXRDQyxLQUFLLEdBQUdBLEtBQUs7OztpQkFKREwseUJBQXlCOztZQU81Q00sR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUNELEtBQUs7WUFDbkIsQ0FBQzs7O1lBRURFLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUcsQ0FBQztnQkFDUixHQUFLLENBQUNDLElBQUksR0FsQlcsVUFBb0I7Z0JBb0J6QyxNQUFNLENBQUNBLElBQUk7WUFDYixDQUFDOzs7WUFFREMsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsYUFBYSxFQUFFQyxXQUFXLEVBQUUsQ0FBQztnQkFBQyxNQUFNLHNCQWpCdkJYLHlCQUF5QixhQWlCS1MsQ0FBSyxRQUFYLElBQUssYUFBT1QseUJBQXlCLEVBQUVVLGFBQWEsRUFBRUMsV0FBVyxFQUFFLElBQUksQ0FBQ04sS0FBSztZQUFHLENBQUM7Ozs7WUFFckhPLEdBQUssRUFBTEEsQ0FBSzttQkFBWixRQUFRLENBQURBLEtBQUssQ0FBQ1YsT0FBTyxFQUFFLENBQUM7Z0JBQ3JCLEdBQUcsQ0FBQ1cseUJBQXlCLEdBQUcsSUFBSTtnQkFFcEMsR0FBSyxDQUFDQyxpQkFBaUIsaUJBQ2pCQyxPQUFPLEdBQUdiLE9BQU8sQ0FBQ1UsS0FBSyxDQUFDRSxpQkFBaUI7Z0JBRS9DLEVBQUUsRUFBRUMsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNyQixHQUFLLENBQUNDLFVBQVUsR0FBR2pCLEtBQUssQ0FBQ2dCLE9BQU87b0JBRWhDYixPQUFPLEdBQUdjLFVBQVUsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRXpCLEdBQUssQ0FBQ0MsYUFBYSxHQUFHZixPQUFPLENBQUNnQixNQUFNO29CQUVwQyxFQUFFLEVBQUVELGFBQWEsR0FBRyxDQUFDLEVBQUUsQ0FBQzt3QkFDdEIsR0FBSyxDQUFDaEIsSUFBSSxHQXRDWSxNQUFhLGdCQXVDN0JrQixnQkFBZ0IsT0F0Q0UsUUFBNEIsa0JBc0NYakIsT0FBTyxHQUMxQ0MsU0FBUyxHQUFHZ0IsZ0JBQWdCLEVBQzVCZixXQUFXLEdBQUcsSUFBSSxFQUNoQkMsS0FBSyxHQUFLVSxPQUFPLENBQWpCVixLQUFLO3dCQUViUSx5QkFBeUIsR0FBRyxHQUFHLENBQUNiLHlCQUF5QixDQUFDQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLEtBQUs7b0JBQ3hHLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxNQUFNLENBQUNRLHlCQUF5QjtZQUNsQyxDQUFDOzs7V0E1Q2tCYix5QkFBeUI7RUFSakIsWUFBeUI7a0JBUWpDQSx5QkFBeUIifQ==