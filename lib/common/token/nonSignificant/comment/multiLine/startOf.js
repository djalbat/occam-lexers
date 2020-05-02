"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonSignificant = _interopRequireDefault(require("../../../../token/nonSignificant"));

var _types = require("../../../../types");

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

var StartOfMultiLineCommentToken = /*#__PURE__*/function (_NonSignificantToken) {
  _inherits(StartOfMultiLineCommentToken, _NonSignificantToken);

  var _super = _createSuper(StartOfMultiLineCommentToken);

  function StartOfMultiLineCommentToken() {
    _classCallCheck(this, StartOfMultiLineCommentToken);

    return _super.apply(this, arguments);
  }

  _createClass(StartOfMultiLineCommentToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(StartOfMultiLineCommentToken.prototype), "clone", this).call(this, StartOfMultiLineCommentToken, startPosition, endPosition);
    }
  }, {
    key: "isInComment",
    value: function isInComment() {
      var inComment = true;
      return inComment;
    }
  }], [{
    key: "match",
    value: function match(content) {
      return _nonSignificant["default"].match(StartOfMultiLineCommentToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return _nonSignificant["default"].fromContent(StartOfMultiLineCommentToken, content);
    }
  }]);

  return StartOfMultiLineCommentToken;
}(_nonSignificant["default"]);

exports["default"] = StartOfMultiLineCommentToken;
var type = _types.startOfMultiLineCommentType,
    ///
regularExpression = /^\/\*/;
Object.assign(StartOfMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0T2YuanMiXSwibmFtZXMiOlsiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImluQ29tbWVudCIsImNvbnRlbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJzdGFydE9mTXVsdGlMaW5lQ29tbWVudFR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSw0Qjs7Ozs7Ozs7Ozs7OzswQkFDYkMsYSxFQUFlQyxXLEVBQWE7QUFBRSxxR0FBbUJGLDRCQUFuQixFQUFpREMsYUFBakQsRUFBZ0VDLFdBQWhFO0FBQStFOzs7a0NBRXJHO0FBQ1osVUFBTUMsU0FBUyxHQUFHLElBQWxCO0FBRUEsYUFBT0EsU0FBUDtBQUNEOzs7MEJBRVlDLE8sRUFBUztBQUFFLGFBQU9DLDJCQUFvQkMsS0FBcEIsQ0FBMEJOLDRCQUExQixFQUF3REksT0FBeEQsQ0FBUDtBQUEwRTs7O2dDQUUvRUEsTyxFQUFTO0FBQUUsYUFBT0MsMkJBQW9CRSxXQUFwQixDQUFnQ1AsNEJBQWhDLEVBQThESSxPQUE5RCxDQUFQO0FBQWdGOzs7O0VBWHREQywwQjs7O0FBYzFELElBQU1HLElBQUksR0FBR0Msa0NBQWI7QUFBQSxJQUEyQztBQUNyQ0MsaUJBQWlCLEdBQUcsT0FEMUI7QUFHQUMsTUFBTSxDQUFDQyxNQUFQLENBQWNaLDRCQUFkLEVBQTRDO0FBQzFDUSxFQUFBQSxJQUFJLEVBQUpBLElBRDBDO0FBRTFDRSxFQUFBQSxpQkFBaUIsRUFBakJBO0FBRjBDLENBQTVDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgaXNJbkNvbW1lbnQoKSB7XG4gICAgY29uc3QgaW5Db21tZW50ID0gdHJ1ZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFR5cGUsICAvLy9cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC9cXCovO1xuXG5PYmplY3QuYXNzaWduKFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuIl19