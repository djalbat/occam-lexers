"use strict";

var _nonSignificant = _interopRequireDefault(require("../../../token/nonSignificant"));

var _types = require("../../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SingleLineCommentToken = /*#__PURE__*/function (_NonSignificantToken) {
  _inherits(SingleLineCommentToken, _NonSignificantToken);

  var _super = _createSuper(SingleLineCommentToken);

  function SingleLineCommentToken() {
    _classCallCheck(this, SingleLineCommentToken);

    return _super.apply(this, arguments);
  }

  _createClass(SingleLineCommentToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(SingleLineCommentToken.prototype), "clone", this).call(this, SingleLineCommentToken, startPosition, endPosition);
    }
  }, {
    key: "isInComment",
    value: function isInComment() {
      var inComment = false;
      return inComment;
    }
  }], [{
    key: "match",
    value: function match(content) {
      return _nonSignificant["default"].match(SingleLineCommentToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return _nonSignificant["default"].fromContent(SingleLineCommentToken, content);
    }
  }]);

  return SingleLineCommentToken;
}(_nonSignificant["default"]);

var type = _types.singleLineCommentType,
    regularExpression = /^\/\/.*/;
Object.assign(SingleLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});
module.exports = SingleLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZUxpbmUuanMiXSwibmFtZXMiOlsiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImluQ29tbWVudCIsImNvbnRlbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJzaW5nbGVMaW5lQ29tbWVudFR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsc0I7Ozs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsK0ZBQW1CRixzQkFBbkIsRUFBMkNDLGFBQTNDLEVBQTBEQyxXQUExRDtBQUF5RTs7O2tDQUUvRjtBQUNaLFVBQU1DLFNBQVMsR0FBRyxLQUFsQjtBQUVBLGFBQU9BLFNBQVA7QUFDRDs7OzBCQUVZQyxPLEVBQVM7QUFBRSxhQUFPQywyQkFBb0JDLEtBQXBCLENBQTBCTixzQkFBMUIsRUFBa0RJLE9BQWxELENBQVA7QUFBb0U7OztnQ0FFekVBLE8sRUFBUztBQUFFLGFBQU9DLDJCQUFvQkUsV0FBcEIsQ0FBZ0NQLHNCQUFoQyxFQUF3REksT0FBeEQsQ0FBUDtBQUEwRTs7OztFQVhyRUMsMEI7O0FBY3JDLElBQU1HLElBQUksR0FBR0MsNEJBQWI7QUFBQSxJQUNNQyxpQkFBaUIsR0FBRyxTQUQxQjtBQUdBQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1osc0JBQWQsRUFBc0M7QUFDcENRLEVBQUFBLElBQUksRUFBSkEsSUFEb0M7QUFFcENFLEVBQUFBLGlCQUFpQixFQUFqQkE7QUFGb0MsQ0FBdEM7QUFLQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZCxzQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IHNpbmdsZUxpbmVDb21tZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jbGFzcyBTaW5nbGVMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShTaW5nbGVMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBpc0luQ29tbWVudCgpIHtcbiAgICBjb25zdCBpbkNvbW1lbnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChTaW5nbGVMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KFNpbmdsZUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBzaW5nbGVMaW5lQ29tbWVudFR5cGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwvXFwvLiovO1xuXG5PYmplY3QuYXNzaWduKFNpbmdsZUxpbmVDb21tZW50VG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbmdsZUxpbmVDb21tZW50VG9rZW47XG4iXX0=