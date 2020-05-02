"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonSignificant = _interopRequireDefault(require("../../../../../common/token/nonSignificant"));

var _types = require("../../../../../common/types");

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
regularExpression = /^###/;
Object.assign(StartOfMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0T2YuanMiXSwibmFtZXMiOlsiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImluQ29tbWVudCIsImNvbnRlbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJzdGFydE9mTXVsdGlMaW5lQ29tbWVudFR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSw0Qjs7Ozs7Ozs7Ozs7OzswQkFDYkMsYSxFQUFlQyxXLEVBQWE7QUFBRSxxR0FBbUJGLDRCQUFuQixFQUFpREMsYUFBakQsRUFBZ0VDLFdBQWhFO0FBQStFOzs7a0NBRXJHO0FBQ1osVUFBTUMsU0FBUyxHQUFHLElBQWxCO0FBRUEsYUFBT0EsU0FBUDtBQUNEOzs7MEJBRVlDLE8sRUFBUztBQUFFLGFBQU9DLDJCQUFvQkMsS0FBcEIsQ0FBMEJOLDRCQUExQixFQUF3REksT0FBeEQsQ0FBUDtBQUEwRTs7O2dDQUUvRUEsTyxFQUFTO0FBQUUsYUFBT0MsMkJBQW9CRSxXQUFwQixDQUFnQ1AsNEJBQWhDLEVBQThESSxPQUE5RCxDQUFQO0FBQWdGOzs7O0VBWHREQywwQjs7O0FBYzFELElBQU1HLElBQUksR0FBR0Msa0NBQWI7QUFBQSxJQUEyQztBQUNyQ0MsaUJBQWlCLEdBQUcsTUFEMUI7QUFHQUMsTUFBTSxDQUFDQyxNQUFQLENBQWNaLDRCQUFkLEVBQTRDO0FBQzFDUSxFQUFBQSxJQUFJLEVBQUpBLElBRDBDO0FBRTFDRSxFQUFBQSxpQkFBaUIsRUFBakJBO0FBRjBDLENBQTVDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgc3RhcnRPZk11bHRpTGluZUNvbW1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbW1vbi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBpc0luQ29tbWVudCgpIHtcbiAgICBjb25zdCBpbkNvbW1lbnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IHN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VHlwZSwgIC8vL1xuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXiMjIy87XG5cbk9iamVjdC5hc3NpZ24oU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwge1xuICB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvblxufSk7XG4iXX0=