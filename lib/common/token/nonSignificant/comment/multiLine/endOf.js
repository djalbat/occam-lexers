"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonSignificant = _interopRequireDefault(require("../../../../token/nonSignificant"));
var _types = require("../../../../types");
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
var EndOfMultiLineCommentToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(EndOfMultiLineCommentToken, NonSignificantToken);
    function EndOfMultiLineCommentToken() {
        _classCallCheck(this, EndOfMultiLineCommentToken);
        return _possibleConstructorReturn(this, _getPrototypeOf(EndOfMultiLineCommentToken).apply(this, arguments));
    }
    _createClass(EndOfMultiLineCommentToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(EndOfMultiLineCommentToken.prototype), "clone", this).call(this, EndOfMultiLineCommentToken, startPosition, endPosition);
            }
        },
        {
            key: "isInComment",
            value: function isInComment() {
                var inComment = false;
                return inComment;
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _nonSignificant.default.match(EndOfMultiLineCommentToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _nonSignificant.default.fromContent(EndOfMultiLineCommentToken, content);
            }
        }
    ]);
    return EndOfMultiLineCommentToken;
}(_nonSignificant.default);
_defineProperty(EndOfMultiLineCommentToken, "type", _types.endOfMultiLineCommentType);
_defineProperty(EndOfMultiLineCommentToken, "regularExpression", /^\*\//);
exports.default = EndOfMultiLineCommentToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YuanMiXSwibmFtZXMiOlsiTm9uU2lnbmlmaWNhbnRUb2tlbiIsImVuZE9mTXVsdGlMaW5lQ29tbWVudFR5cGUiLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImNsb25lIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiaXNJbkNvbW1lbnQiLCJpbkNvbW1lbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImNvbnRlbnQiLCJmcm9tQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFb0IsR0FBa0MsQ0FBbEMsZUFBa0M7QUFFeEIsR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV4QywwQkFBMEIsaUJBQWhDLFFBQVE7Y0FBRiwwQkFBMEI7YUFBMUIsMEJBQTBCOzhCQUExQiwwQkFBMEI7Z0VBQTFCLDBCQUEwQjs7aUJBQTFCLDBCQUEwQjs7WUFDN0MsR0FBSyxFQUFMLENBQUs7bUJBQUwsUUFBUSxDQUFSLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxzQkFEdkIsMEJBQTBCLGFBQ0ksQ0FBSyxRQUFYLElBQUssYUFBTywwQkFBMEIsRUFBRSxhQUFhLEVBQUUsV0FBVztZQUFHLENBQUM7OztZQUVqSCxHQUFXLEVBQVgsQ0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLO2dCQUV2QixNQUFNLENBQUMsU0FBUztZQUNsQixDQUFDOzs7O1lBTU0sR0FBSyxFQUFMLENBQUs7bUJBQVosUUFBUSxDQUFELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBakJBLGVBQWtDLFNBaUJiLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1lBRXpGLEdBQVcsRUFBWCxDQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FuQk4sZUFBa0MsU0FtQlAsV0FBVyxDQUFDLDBCQUEwQixFQUFFLE9BQU87WUFBRyxDQUFDOzs7V0FmekYsMEJBQTBCO0VBSmYsZUFBa0M7Z0JBSTdDLDBCQUEwQixFQVN0QyxDQUFJLE9BWDZCLE1BQW1CO2dCQUV4QywwQkFBMEIsRUFXdEMsQ0FBaUI7a0JBWEwsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgaXNJbkNvbW1lbnQoKSB7XG4gICAgY29uc3QgaW5Db21tZW50ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gaW5Db21tZW50O1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlO1xuXG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwqXFwvLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cbn1cbiJdfQ==