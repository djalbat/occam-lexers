"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BasicView;
    }
});
var _index = require("../../index");
var _view = /*#__PURE__*/ _interopRequireDefault(require("../view"));
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
var BasicView = /*#__PURE__*/ function(View) {
    _inherits(BasicView, View);
    var _super = _createSuper(BasicView);
    function BasicView() {
        _classCallCheck(this, BasicView);
        return _super.apply(this, arguments);
    }
    return BasicView;
}(_view.default);
_defineProperty(BasicView, "Lexer", _index.BasicLexer);
_defineProperty(BasicView, "initialContent", "1+2/3");
_defineProperty(BasicView, "defaultProperties", {
    className: "basic"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYmFzaWMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJhc2ljTGV4ZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVmlldyBleHRlbmRzIFZpZXcge1xuICBzdGF0aWMgTGV4ZXIgPSBCYXNpY0xleGVyO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGAxKzIvM2A7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJiYXNpY1wiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkJhc2ljVmlldyIsIlZpZXciLCJMZXhlciIsIkJhc2ljTGV4ZXIiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFNUUEsU0FBUzs7O3FCQUpILGFBQWE7eURBRXZCLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsU0FBUyxpQkFBZjs7O2FBQU1BLFNBQVM7Ozs7O0NBUTdCLENBUnNDQyxLQUFJLFFBQUEsQ0FRMUM7QUFQQyxnQkFEbUJELFNBQVMsRUFDckJFLE9BQUssRUFBR0MsTUFBVSxXQUFBLENBQUM7QUFFMUIsZ0JBSG1CSCxTQUFTLEVBR3JCSSxnQkFBYyxFQUFJLE9BQUssQ0FBRTtBQUVoQyxnQkFMbUJKLFNBQVMsRUFLckJLLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsT0FBTztDQUNuQixDQUFDIn0=