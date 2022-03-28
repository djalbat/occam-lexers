"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
var _constants = require("../../constants");
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
var TokensTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(TokensTextarea, Textarea);
    var _super = _createSuper(TokensTextarea);
    function TokensTextarea() {
        _classCallCheck(this, TokensTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(TokensTextarea, [
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                var lineNumber = 1, previousToken = null;
                var html1 = tokens.reduce(function(html, token) {
                    var tokenHTML = token.asHTML();
                    if (previousToken === null) {
                        html += "".concat(lineNumber++, ": ");
                    } else {
                        var previousTokenEndOfLineToken = previousToken.isEndOfLineToken();
                        if (previousTokenEndOfLineToken) {
                            html += "".concat(lineNumber++, ": ");
                        }
                    }
                    html += tokenHTML;
                    previousToken = token;
                    return html;
                }, _constants.EMPTY_STRING);
                this.html(html1);
            }
        },
        {
            key: "clearTokens",
            value: function clearTokens() {
                var html = _constants.EMPTY_STRING;
                this.html(html);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setTokens = this.setTokens.bind(this), clearTokens = this.clearTokens.bind(this);
                return {
                    setTokens: setTokens,
                    clearTokens: clearTokens
                };
            }
        }
    ]);
    return TokensTextarea;
}(_textarea.default);
exports.default = TokensTextarea;
_defineProperty(TokensTextarea, "defaultProperties", {
    className: "tokens",
    spellCheck: "false",
    readOnly: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3Rva2Vucy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbnNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIGxldCBsaW5lTnVtYmVyID0gMSxcbiAgICAgICAgcHJldmlvdXNUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZSgoaHRtbCwgdG9rZW4pID0+IHtcbiAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTCgpO1xuXG4gICAgICBpZiAocHJldmlvdXNUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgICBpZiAocHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xuXG4gICAgICBwcmV2aW91c1Rva2VuID0gdG9rZW47XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBjbGVhclRva2VucygpIHtcbiAgICBjb25zdCBodG1sID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzZXRUb2tlbnMgPSB0aGlzLnNldFRva2Vucy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyVG9rZW5zID0gdGhpcy5jbGVhclRva2Vucy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRUb2tlbnMsXG4gICAgICBjbGVhclRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ0b2tlbnNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFUgPSBcInVcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbIlRva2Vuc1RleHRhcmVhIiwic2V0VG9rZW5zIiwidG9rZW5zIiwibGluZU51bWJlciIsInByZXZpb3VzVG9rZW4iLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJhc0hUTUwiLCJwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiRU1QVFlfU1RSSU5HIiwiY2xlYXJUb2tlbnMiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIlRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFcUIsSUFBQSxTQUFhLGtDQUFiLGFBQWEsRUFBQTtBQUVMLElBQUEsVUFBaUIsV0FBakIsaUJBQWlCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFKOUM7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQU1lLElBQUEsQUFBTUEsY0FBYyxpQkNOaEMsQURNWTt1Q0FOZjs7YUFNcUJBLGNBQWM7NkNBTm5DOzs7OztZQU9FQyxHQUFTLEVBQVRBLFdBQVM7WUVQWCxPRk9FQSxTQUFBQSxTQUFTLENBQUNDLE1BQU0sRUFBRTtnQkFDaEIsSUFBSUMsVUFBVSxHQUFHLENBQUMsRUFDZEMsYUFBYSxHQUFHLElBQUksQUFBQztnQkFFekIsSUFBTUMsS0FBSSxHQUFHSCxNQUFNLENBQUNJLE1BQU0sQ0FBQyxTQUFDRCxJQUFJLEVBQUVFLEtBQUssRUFBSztvQkFDMUMsSUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sRUFBRSxBQUFDO29CQUVqQyxJQUFJTCxhQUFhLEtBQUssSUFBSSxFQUFFO3dCQUMxQkMsSUFBSSxJQUFJLEFBQUMsRUFBQSxDQUFlLE1BQUUsQ0FBZkYsVUFBVSxFQUFFLEVBQUMsSUFBRSxDQUFDLENBQUM7cUJBQzdCLE1BQU07d0JBQ0wsSUFBTU8sMkJBQTJCLEdBQUdOLGFBQWEsQ0FBQ08sZ0JBQWdCLEVBQUUsQUFBQzt3QkFFckUsSUFBSUQsMkJBQTJCLEVBQUU7NEJBQy9CTCxJQUFJLElBQUksQUFBQyxFQUFBLENBQWUsTUFBRSxDQUFmRixVQUFVLEVBQUUsRUFBQyxJQUFFLENBQUMsQ0FBQzt5QkFDN0I7cUJBQ0Y7b0JBRURFLElBQUksSUFBSUcsU0FBUyxDQUFDO29CQUVsQkosYUFBYSxHQUFHRyxLQUFLLENBQUM7b0JBRXRCLE9BQU9GLElBQUksQ0FBQztpQkFDYixFQUFFTyxVQUFZLGNBQUMsQUFBQztnQkFFakIsSUFBSSxDQUFDUCxJQUFJLENBQUNBLEtBQUksQ0FBQyxDQUFDO2FBQ2pCOzs7WUFFRFEsR0FBVyxFQUFYQSxhQUFXO1lFbENiLE9Ga0NFQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osSUFBTVIsSUFBSSxHQUFHTyxVQUFZLGFBQUEsQUFBQztnQkFFMUIsSUFBSSxDQUFDUCxJQUFJLENBQUNBLElBQUksQ0FBQyxDQUFDO2FBQ2pCOzs7WUFFRFMsR0FBYSxFQUFiQSxlQUFhO1lFeENmLE9Gd0NFQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTWIsU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUyxDQUFDYyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ3JDRixXQUFXLEdBQUcsSUFBSSxDQUFDQSxXQUFXLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztnQkFFaEQsT0FBUTtvQkFDTmQsU0FBUyxFQUFUQSxTQUFTO29CQUNUWSxXQUFXLEVBQVhBLFdBQVc7aUJBQ1osQ0FBRTthQUNKOztNQWhESDs7Q0F1REMsQ0FqRDJDRyxTQUFRLFNBaURuRDtrQkFqRG9CaEIsY0FBYyxBQU5uQztBQWtERSxnQkE1Q21CQSxjQUFjLEVBNEMxQmlCLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsUUFBUTtJQUNuQkMsVUFBVSxFQUFFLE9BQU87SUFDbkJDLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQyxBQXRESiJ9