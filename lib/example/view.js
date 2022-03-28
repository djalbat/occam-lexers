"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyLayout = require("easy-layout");
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _sizeable = _interopRequireDefault(require("./div/sizeable"));
var _tokens = _interopRequireDefault(require("./textarea/tokens"));
var _entries = _interopRequireDefault(require("./textarea/entries"));
var _content = _interopRequireDefault(require("./textarea/content"));
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        return _super.apply(this, arguments);
    }
    _createClass(View, [
        {
            key: "getTokens",
            value: function getTokens() {
                var Lexer = this.constructor.Lexer, entries = this.getEntries(), content = this.getContent(), lexer = Lexer.fromEntries(entries), tokens = lexer.tokenise(content);
                return tokens;
            }
        },
        {
            key: "keyUpHandler",
            value: function keyUpHandler(event, element) {
                try {
                    var tokens = this.getTokens();
                    this.setTokens(tokens);
                } catch (error) {
                    console.log(error);
                    this.clearTokens();
                }
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var keyUpHandler = this.keyUpHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Entries"), /*#__PURE__*/ React.createElement(_entries.default, {
                        onKeyUp: keyUpHandler
                    }))), /*#__PURE__*/ React.createElement(_easyLayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _constructor = this.constructor, initialContent = _constructor.initialContent, Lexer = _constructor.Lexer, entries = Lexer.entries, content = initialContent; ///
                this.setContent(content);
                this.setEntries(entries);
                this.keyUpHandler();
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgVG9rZW5zVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvdG9rZW5zXCI7XG5pbXBvcnQgRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2VudHJpZXNcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCB7IExleGVyIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKTtcblxuICAgICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyVG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgRW50cmllc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFRva2Vuc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFRva2Vuc1RleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbENvbnRlbnQsIExleGVyIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gTGV4ZXIsXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50OyAvLy9cblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB0aGlzLnNldEVudHJpZXMoZW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVID0gXCJ1XCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJWaWV3IiwiZ2V0VG9rZW5zIiwiTGV4ZXIiLCJjb25zdHJ1Y3RvciIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJsZXhlciIsImZyb21FbnRyaWVzIiwidG9rZW5zIiwidG9rZW5pc2UiLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJzZXRUb2tlbnMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRva2VucyIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJFbnRyaWVzVGV4dGFyZWEiLCJvbktleVVwIiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIkNvbnRlbnRUZXh0YXJlYSIsIlRva2Vuc1RleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsInNldENvbnRlbnQiLCJzZXRFbnRyaWVzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVzQixJQUFBLGNBQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUVmLElBQUEsS0FBTSxXQUFOLE1BQU0sQ0FBQTtBQUNzQyxJQUFBLFdBQWEsV0FBYixhQUFhLENBQUE7QUFFMUQsSUFBQSxXQUFjLGtDQUFkLGNBQWMsRUFBQTtBQUNiLElBQUEsU0FBZ0Isa0NBQWhCLGdCQUFnQixFQUFBO0FBQ2IsSUFBQSxPQUFtQixrQ0FBbkIsbUJBQW1CLEVBQUE7QUFDbEIsSUFBQSxRQUFvQixrQ0FBcEIsb0JBQW9CLEVBQUE7QUFDcEIsSUFBQSxRQUFvQixrQ0FBcEIsb0JBQW9CLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O2dGQVhoRDs7Ozs7Ozs7c0NBQUE7Ozs7OztpQ0FBQTs7O2lFQUFBOztTQUFBOzs7Ozs7OzhEQUFBO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozs4QkFBQTs7Ozs7Ozs7OzJCQUFBOzs7Ozs7Ozs7Ozs7c0NBQUE7Ozs7Ozs7Ozs7OztVQUFBOztLQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7OztRQXdGK0IsNEJBSS9COzs7O0tBNUZBOzs7QUFhQSxJQUFBLEFBQU1BLElBQUksaUJBMkVQLEFBM0VIOzRCQWJBOzthQWFNQSxJQUFJO21DQWJWOzs7OztZQWNFQyxHQUFTLEVBQVRBLFdBQVM7WUNkWCxPRGNFQSxTQUFBQSxTQUFTLEdBQUc7Z0JBQ1YsSUFBTSxBQUFFQyxLQUFLLEdBQUssSUFBSSxDQUFDQyxXQUFX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