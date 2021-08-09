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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var BrokenCommentToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(BrokenCommentToken, NonSignificantToken);
    function BrokenCommentToken() {
        _classCallCheck(this, BrokenCommentToken);
        return _possibleConstructorReturn(this, _getPrototypeOf(BrokenCommentToken).apply(this, arguments));
    }
    _createClass(BrokenCommentToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(BrokenCommentToken.prototype), "clone", this).call(this, BrokenCommentToken, startPosition, endPosition);
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _nonSignificant.default.match(BrokenCommentToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _nonSignificant.default.fromContent(BrokenCommentToken, content);
            }
        }
    ]);
    return BrokenCommentToken;
}(_nonSignificant.default);
_defineProperty(BrokenCommentToken, "type", _types.brokenCommentType);
_defineProperty(BrokenCommentToken, "regularExpression", /^\//);
exports.default = BrokenCommentToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvYnJva2VuQ29tbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IGJyb2tlbkNvbW1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb2tlbkNvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoQnJva2VuQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgdHlwZSA9IGJyb2tlbkNvbW1lbnRUeXBlO1xuXG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwvLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChCcm9rZW5Db21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQnJva2VuQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW9CLEdBQTRCLENBQTVCLGVBQTRCO0FBRTFCLEdBQWEsQ0FBYixNQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFMUIsa0JBQWtCO2NBQWxCLGtCQUFrQjthQUFsQixrQkFBa0I7OEJBQWxCLGtCQUFrQjtnRUFBbEIsa0JBQWtCOztpQkFBbEIsa0JBQWtCOztZQUNyQyxHQUFLLEdBQUwsS0FBSzs0QkFBTCxLQUFLLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDOzRDQURoQixrQkFBa0IsY0FDWSxLQUFLLG9CQUFDLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxXQUFXO1lBQUcsQ0FBQzs7OztZQU1sRyxHQUFLLEdBQUwsS0FBSzs0QkFBTCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7dUJBWE8sZUFBNEIsU0FXUCxLQUFLLENBQUMsa0JBQWtCLEVBQUUsT0FBTztZQUFHLENBQUM7OztZQUVqRixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7dUJBYkMsZUFBNEIsU0FhRCxXQUFXLENBQUMsa0JBQWtCLEVBQUUsT0FBTztZQUFHLENBQUM7OztXQVRqRixrQkFBa0I7RUFKUCxlQUE0QjtnQkFJdkMsa0JBQWtCLEdBRzlCLElBQUksR0FMcUIsTUFBYTtnQkFFMUIsa0JBQWtCLEdBSzlCLGlCQUFpQjtrQkFMTCxrQkFBa0IifQ==