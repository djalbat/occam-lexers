"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _significant = _interopRequireDefault(require("../../significant"));

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

var DoublyQuotedBrokenStringLiteralToken = /*#__PURE__*/function (_SignificantToken) {
  _inherits(DoublyQuotedBrokenStringLiteralToken, _SignificantToken);

  var _super = _createSuper(DoublyQuotedBrokenStringLiteralToken);

  function DoublyQuotedBrokenStringLiteralToken() {
    _classCallCheck(this, DoublyQuotedBrokenStringLiteralToken);

    return _super.apply(this, arguments);
  }

  _createClass(DoublyQuotedBrokenStringLiteralToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(DoublyQuotedBrokenStringLiteralToken.prototype), "clone", this).call(this, DoublyQuotedBrokenStringLiteralToken, startPosition, endPosition);
    }
  }], [{
    key: "match",
    value: function match(content) {
      return _significant["default"].match(DoublyQuotedBrokenStringLiteralToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return _significant["default"].fromContent(DoublyQuotedBrokenStringLiteralToken, content);
    }
  }]);

  return DoublyQuotedBrokenStringLiteralToken;
}(_significant["default"]);

exports["default"] = DoublyQuotedBrokenStringLiteralToken;
var type = _types.brokenStringLiteralType,
    ///
regularExpression = /^"/;
Object.assign(DoublyQuotedBrokenStringLiteralToken, {
  type: type,
  regularExpression: regularExpression
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvdWJseVF1b3RlZC5qcyJdLCJuYW1lcyI6WyJEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwiYnJva2VuU3RyaW5nTGl0ZXJhbFR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxvQzs7Ozs7Ozs7Ozs7OzswQkFDYkMsYSxFQUFlQyxXLEVBQWE7QUFBRSw2R0FBbUJGLG9DQUFuQixFQUF5REMsYUFBekQsRUFBd0VDLFdBQXhFO0FBQXVGOzs7MEJBRTlHQyxPLEVBQVM7QUFBRSxhQUFPQyx3QkFBaUJDLEtBQWpCLENBQXVCTCxvQ0FBdkIsRUFBNkRHLE9BQTdELENBQVA7QUFBK0U7OztnQ0FFcEZBLE8sRUFBUztBQUFFLGFBQU9DLHdCQUFpQkUsV0FBakIsQ0FBNkJOLG9DQUE3QixFQUFtRUcsT0FBbkUsQ0FBUDtBQUFxRjs7OztFQUxuREMsdUI7OztBQVFsRSxJQUFNRyxJQUFJLEdBQUdDLDhCQUFiO0FBQUEsSUFBc0M7QUFDaENDLGlCQUFpQixHQUFHLElBRDFCO0FBR0FDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWCxvQ0FBZCxFQUFvRDtBQUNsRE8sRUFBQUEsSUFBSSxFQUFKQSxJQURrRDtBQUVsREUsRUFBQUEsaUJBQWlCLEVBQWpCQTtBQUZrRCxDQUFwRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vc2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgYnJva2VuU3RyaW5nTGl0ZXJhbFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLm1hdGNoKERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBicm9rZW5TdHJpbmdMaXRlcmFsVHlwZSwgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXCIvO1xuXG5PYmplY3QuYXNzaWduKERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiwge1xuICB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvblxufSk7XG4iXX0=