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
var MiddleOfMultiLineCommentToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(MiddleOfMultiLineCommentToken, NonSignificantToken);
    function MiddleOfMultiLineCommentToken() {
        _classCallCheck(this, MiddleOfMultiLineCommentToken);
        return _possibleConstructorReturn(this, _getPrototypeOf(MiddleOfMultiLineCommentToken).apply(this, arguments));
    }
    _createClass(MiddleOfMultiLineCommentToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(MiddleOfMultiLineCommentToken.prototype), "clone", this).call(this, MiddleOfMultiLineCommentToken, startPosition, endPosition);
            }
        },
        {
            key: "isInComment",
            value: function isInComment() {
                var inComment = true;
                return inComment;
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _nonSignificant.default.match(MiddleOfMultiLineCommentToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _nonSignificant.default.fromContent(MiddleOfMultiLineCommentToken, content);
            }
        }
    ]);
    return MiddleOfMultiLineCommentToken;
}(_nonSignificant.default);
_defineProperty(MiddleOfMultiLineCommentToken, "type", _types.middleOfMultiLineCommentType);
_defineProperty(MiddleOfMultiLineCommentToken, "regularExpression", /^(?:.+?(?=\*\/)|.+$)/);
exports.default = MiddleOfMultiLineCommentToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2YuanMiXSwibmFtZXMiOlsiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIm1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGUiLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImNsb25lIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiaXNJbkNvbW1lbnQiLCJpbkNvbW1lbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImNvbnRlbnQiLCJmcm9tQ29udGVudCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFb0IsR0FBa0MsQ0FBbEMsZUFBa0M7QUFFckIsR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzQyw2QkFBNkIsaUJBQW5DLFFBQVE7Y0FBRiw2QkFBNkI7YUFBN0IsNkJBQTZCOzhCQUE3Qiw2QkFBNkI7Z0VBQTdCLDZCQUE2Qjs7aUJBQTdCLDZCQUE2Qjs7WUFDaEQsR0FBSyxHQUFMLEtBQUs7bUJBQUwsUUFBUSxDQUFSLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxzQkFEdkIsNkJBQTZCLGNBQ0MsS0FBSyxHQUFYLElBQUssYUFBTyw2QkFBNkIsRUFBRSxhQUFhLEVBQUUsV0FBVztZQUFHLENBQUM7OztZQUVwSCxHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJO2dCQUV0QixNQUFNLENBQUMsU0FBUztZQUNsQixDQUFDOzs7O1lBTU0sR0FBSyxHQUFMLEtBQUs7bUJBQVosUUFBUSxDQUFELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBakJBLGVBQWtDLFNBaUJiLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1lBRTVGLEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FuQk4sZUFBa0MsU0FtQlAsV0FBVyxDQUFDLDZCQUE2QixFQUFFLE9BQU87WUFBRyxDQUFDOzs7V0FmNUYsNkJBQTZCO0VBSmxCLGVBQWtDO2dCQUk3Qyw2QkFBNkIsR0FTekMsSUFBSSxHQVhnQyxNQUFtQjtnQkFFM0MsNkJBQTZCLEdBV3pDLGlCQUFpQjtrQkFYTCw2QkFBNkIifQ==