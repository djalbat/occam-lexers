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
var StartOfMultiLineCommentToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(StartOfMultiLineCommentToken, NonSignificantToken);
    function StartOfMultiLineCommentToken() {
        _classCallCheck(this, StartOfMultiLineCommentToken);
        return _possibleConstructorReturn(this, _getPrototypeOf(StartOfMultiLineCommentToken).apply(this, arguments));
    }
    _createClass(StartOfMultiLineCommentToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(StartOfMultiLineCommentToken.prototype), "clone", this).call(this, StartOfMultiLineCommentToken, startPosition, endPosition);
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
                return _nonSignificant.default.match(StartOfMultiLineCommentToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _nonSignificant.default.fromContent(StartOfMultiLineCommentToken, content);
            }
        }
    ]);
    return StartOfMultiLineCommentToken;
}(_nonSignificant.default);
_defineProperty(StartOfMultiLineCommentToken, "type", _types.startOfMultiLineCommentType);
_defineProperty(StartOfMultiLineCommentToken, "regularExpression", /^\/\*/);
exports.default = StartOfMultiLineCommentToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZi5qcyJdLCJuYW1lcyI6WyJOb25TaWduaWZpY2FudFRva2VuIiwic3RhcnRPZk11bHRpTGluZUNvbW1lbnRUeXBlIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImNsb25lIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiaXNJbkNvbW1lbnQiLCJpbkNvbW1lbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImNvbnRlbnQiLCJmcm9tQ29udGVudCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFb0IsR0FBa0MsQ0FBbEMsZUFBa0M7QUFFdEIsR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUxQyw0QkFBNEIsaUJBQWxDLFFBQVE7Y0FBRiw0QkFBNEI7YUFBNUIsNEJBQTRCOzhCQUE1Qiw0QkFBNEI7Z0VBQTVCLDRCQUE0Qjs7aUJBQTVCLDRCQUE0Qjs7WUFDL0MsR0FBSyxHQUFMLEtBQUs7bUJBQUwsUUFBUSxDQUFSLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxzQkFEdkIsNEJBQTRCLGNBQ0UsS0FBSyxHQUFYLElBQUssYUFBTyw0QkFBNEIsRUFBRSxhQUFhLEVBQUUsV0FBVztZQUFHLENBQUM7OztZQUVuSCxHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJO2dCQUV0QixNQUFNLENBQUMsU0FBUztZQUNsQixDQUFDOzs7O1lBTU0sR0FBSyxHQUFMLEtBQUs7bUJBQVosUUFBUSxDQUFELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBakJBLGVBQWtDLFNBaUJiLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1lBRTNGLEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FuQk4sZUFBa0MsU0FtQlAsV0FBVyxDQUFDLDRCQUE0QixFQUFFLE9BQU87WUFBRyxDQUFDOzs7V0FmM0YsNEJBQTRCO0VBSmpCLGVBQWtDO2dCQUk3Qyw0QkFBNEIsR0FTeEMsSUFBSSxHQVgrQixNQUFtQjtnQkFFMUMsNEJBQTRCLEdBV3hDLGlCQUFpQjtrQkFYTCw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uLy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IHN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBpc0luQ29tbWVudCgpIHtcbiAgICBjb25zdCBpbkNvbW1lbnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudDtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gc3RhcnRPZk11bHRpTGluZUNvbW1lbnRUeXBlO1xuXG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwvXFwqLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXX0=