"use strict";

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

var SinglyQuotedBrokenStringLiteralToken = /*#__PURE__*/function (_SignificantToken) {
  _inherits(SinglyQuotedBrokenStringLiteralToken, _SignificantToken);

  var _super = _createSuper(SinglyQuotedBrokenStringLiteralToken);

  function SinglyQuotedBrokenStringLiteralToken() {
    _classCallCheck(this, SinglyQuotedBrokenStringLiteralToken);

    return _super.apply(this, arguments);
  }

  _createClass(SinglyQuotedBrokenStringLiteralToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(SinglyQuotedBrokenStringLiteralToken.prototype), "clone", this).call(this, SinglyQuotedBrokenStringLiteralToken, startPosition, endPosition);
    }
  }], [{
    key: "match",
    value: function match(content) {
      return _significant["default"].match(SinglyQuotedBrokenStringLiteralToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return _significant["default"].fromContent(SinglyQuotedBrokenStringLiteralToken, content);
    }
  }]);

  return SinglyQuotedBrokenStringLiteralToken;
}(_significant["default"]);

var type = _types.brokenStringLiteralType,
    ///
regularExpression = /^'/;
Object.assign(SinglyQuotedBrokenStringLiteralToken, {
  type: type,
  regularExpression: regularExpression
});
module.exports = SinglyQuotedBrokenStringLiteralToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdseVF1b3RlZC5qcyJdLCJuYW1lcyI6WyJTaW5nbHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwiYnJva2VuU3RyaW5nTGl0ZXJhbFR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsb0M7Ozs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsNkdBQW1CRixvQ0FBbkIsRUFBeURDLGFBQXpELEVBQXdFQyxXQUF4RTtBQUF1Rjs7OzBCQUU5R0MsTyxFQUFTO0FBQUUsYUFBT0Msd0JBQWlCQyxLQUFqQixDQUF1Qkwsb0NBQXZCLEVBQTZERyxPQUE3RCxDQUFQO0FBQStFOzs7Z0NBRXBGQSxPLEVBQVM7QUFBRSxhQUFPQyx3QkFBaUJFLFdBQWpCLENBQTZCTixvQ0FBN0IsRUFBbUVHLE9BQW5FLENBQVA7QUFBcUY7Ozs7RUFMbEVDLHVCOztBQVFuRCxJQUFNRyxJQUFJLEdBQUdDLDhCQUFiO0FBQUEsSUFBc0M7QUFDaENDLGlCQUFpQixHQUFHLElBRDFCO0FBR0FDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWCxvQ0FBZCxFQUFvRDtBQUNsRE8sRUFBQUEsSUFBSSxFQUFKQSxJQURrRDtBQUVsREUsRUFBQUEsaUJBQWlCLEVBQWpCQTtBQUZrRCxDQUFwRDtBQUtBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJiLG9DQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vc2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgYnJva2VuU3RyaW5nTGl0ZXJhbFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuY2xhc3MgU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShTaW5nbHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLm1hdGNoKFNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChTaW5nbHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBicm9rZW5TdHJpbmdMaXRlcmFsVHlwZSwgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eJy87XG5cbk9iamVjdC5hc3NpZ24oU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLCB7XG4gIHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaW5nbHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW47XG4iXX0=