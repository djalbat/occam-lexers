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
var StringLiteralToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(StringLiteralToken, SignificantToken);
    function StringLiteralToken() {
        _classCallCheck(this, StringLiteralToken);
        return _possibleConstructorReturn(this, _getPrototypeOf(StringLiteralToken).apply(this, arguments));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwiU3RyaW5nTGl0ZXJhbFRva2VuIiwiY2xvbmUiLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImdldFN0cmluZyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZW5kIiwic3RyaW5nIiwic3Vic3RyaW5nIiwibWF0Y2giLCJmcm9tQ29udGVudCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFaUIsR0FBeUIsQ0FBekIsWUFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpDLGtCQUFrQixpQkFBeEIsUUFBUTtjQUFGLGtCQUFrQjthQUFsQixrQkFBa0I7OEJBQWxCLGtCQUFrQjtnRUFBbEIsa0JBQWtCOztpQkFBbEIsa0JBQWtCOztZQUNyQyxHQUFLLEdBQUwsS0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxzQkFEOUIsa0JBQWtCLGNBQ21CLEtBQUssR0FBWCxJQUFLLGFBQU8sS0FBSyxFQUFFLGFBQWEsRUFBRSxXQUFXO1lBQUcsQ0FBQzs7O1lBRW5HLEdBQVMsR0FBVCxTQUFTO21CQUFULFFBQVEsQ0FBUixTQUFTLEdBQUcsQ0FBQztnQkFDWCxHQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQ3pCLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUM5QixLQUFLLEdBQUcsQ0FBQyxFQUNULEdBQUcsR0FBRyxhQUFhLEdBQUcsQ0FBQyxFQUN2QixNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRztnQkFFM0MsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7O1lBRU0sR0FBSyxHQUFMLEtBQUs7bUJBQVosUUFBUSxDQUFELEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQWZWLFlBQXlCLFNBZUcsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1lBRXhFLEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBakJoQixZQUF5QixTQWlCUyxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU87WUFBRyxDQUFDOzs7V0FmeEUsa0JBQWtCO0VBRlYsWUFBeUI7a0JBRWpDLGtCQUFrQiJ9