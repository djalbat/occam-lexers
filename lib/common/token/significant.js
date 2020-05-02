"use strict";

var _token = _interopRequireDefault(require("../token"));

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

var significant = true;

var SignificantToken = /*#__PURE__*/function (_Token) {
  _inherits(SignificantToken, _Token);

  var _super = _createSuper(SignificantToken);

  function SignificantToken() {
    _classCallCheck(this, SignificantToken);

    return _super.apply(this, arguments);
  }

  _createClass(SignificantToken, [{
    key: "clone",
    value: function clone(Class, startPosition, endPosition) {
      var _get2;

      if (endPosition === undefined) {
        endPosition = startPosition;
        startPosition = Class;
        Class = SignificantToken;
      }

      for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var significantToken = (_get2 = _get(_getPrototypeOf(SignificantToken.prototype), "clone", this)).call.apply(_get2, [this, Class, startPosition, endPosition, significant].concat(remainingArguments));

      return significantToken;
    }
  }], [{
    key: "match",
    value: function match(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      for (var _len2 = arguments.length, remainingArguments = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      var significantToken = _token["default"].match.apply(_token["default"], [Class, content, significant].concat(remainingArguments));

      return significantToken;
    }
  }, {
    key: "fromContent",
    value: function fromContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      var significantToken = _token["default"].fromContent.apply(_token["default"], [Class, content, significant].concat(remainingArguments));

      return significantToken;
    }
  }, {
    key: "fromContentAndType",
    value: function fromContentAndType(Class, content, type) {
      if (type === undefined) {
        type = content;
        content = Class;
        Class = SignificantToken;
      }

      for (var _len4 = arguments.length, remainingArguments = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 3] = arguments[_key4];
      }

      var significantToken = _token["default"].fromContentAndType.apply(_token["default"], [Class, content, type, significant].concat(remainingArguments));

      return significantToken;
    }
  }]);

  return SignificantToken;
}(_token["default"]);

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pZmljYW50LmpzIl0sIm5hbWVzIjpbInNpZ25pZmljYW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwidW5kZWZpbmVkIiwicmVtYWluaW5nQXJndW1lbnRzIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJUb2tlbiIsIm1hdGNoIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwiZnJvbUNvbnRlbnRBbmRUeXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxJQUFwQjs7SUFFTUMsZ0I7Ozs7Ozs7Ozs7Ozs7MEJBQ0VDLEssRUFBT0MsYSxFQUFlQyxXLEVBQW9DO0FBQUE7O0FBQzlELFVBQUlBLFdBQVcsS0FBS0MsU0FBcEIsRUFBK0I7QUFDN0JELFFBQUFBLFdBQVcsR0FBR0QsYUFBZDtBQUNBQSxRQUFBQSxhQUFhLEdBQUdELEtBQWhCO0FBQ0FBLFFBQUFBLEtBQUssR0FBR0QsZ0JBQVI7QUFDRDs7QUFMNkQsd0NBQXBCSyxrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQU85RCxVQUFNQyxnQkFBZ0IsdUdBQWVMLEtBQWYsRUFBc0JDLGFBQXRCLEVBQXFDQyxXQUFyQyxFQUFrREosV0FBbEQsU0FBa0VNLGtCQUFsRSxFQUF0Qjs7QUFFQSxhQUFPQyxnQkFBUDtBQUNEOzs7MEJBRVlMLEssRUFBT00sTyxFQUFnQztBQUNsRCxVQUFJQSxPQUFPLEtBQUtILFNBQWhCLEVBQTJCO0FBQ3pCRyxRQUFBQSxPQUFPLEdBQUdOLEtBQVY7QUFDQUEsUUFBQUEsS0FBSyxHQUFHRCxnQkFBUjtBQUNEOztBQUppRCx5Q0FBcEJLLGtCQUFvQjtBQUFwQkEsUUFBQUEsa0JBQW9CO0FBQUE7O0FBTWxELFVBQU1DLGdCQUFnQixHQUFHRSxrQkFBTUMsS0FBTiwyQkFBWVIsS0FBWixFQUFtQk0sT0FBbkIsRUFBNEJSLFdBQTVCLFNBQTRDTSxrQkFBNUMsRUFBekI7O0FBRUEsYUFBT0MsZ0JBQVA7QUFDRDs7O2dDQUVrQkwsSyxFQUFPTSxPLEVBQWdDO0FBQ3hELFVBQUlBLE9BQU8sS0FBS0gsU0FBaEIsRUFBMkI7QUFDekJHLFFBQUFBLE9BQU8sR0FBR04sS0FBVjtBQUNBQSxRQUFBQSxLQUFLLEdBQUdELGdCQUFSO0FBQ0Q7O0FBSnVELHlDQUFwQkssa0JBQW9CO0FBQXBCQSxRQUFBQSxrQkFBb0I7QUFBQTs7QUFNeEQsVUFBTUMsZ0JBQWdCLEdBQUdFLGtCQUFNRSxXQUFOLDJCQUFrQlQsS0FBbEIsRUFBeUJNLE9BQXpCLEVBQWtDUixXQUFsQyxTQUFrRE0sa0JBQWxELEVBQXpCOztBQUVBLGFBQU9DLGdCQUFQO0FBQ0Q7Ozt1Q0FFeUJMLEssRUFBT00sTyxFQUFTSSxJLEVBQTZCO0FBQ3JFLFVBQUlBLElBQUksS0FBS1AsU0FBYixFQUF3QjtBQUN0Qk8sUUFBQUEsSUFBSSxHQUFHSixPQUFQO0FBQ0FBLFFBQUFBLE9BQU8sR0FBR04sS0FBVjtBQUNBQSxRQUFBQSxLQUFLLEdBQUdELGdCQUFSO0FBQ0Q7O0FBTG9FLHlDQUFwQkssa0JBQW9CO0FBQXBCQSxRQUFBQSxrQkFBb0I7QUFBQTs7QUFPckUsVUFBTUMsZ0JBQWdCLEdBQUdFLGtCQUFNSSxrQkFBTiwyQkFBeUJYLEtBQXpCLEVBQWdDTSxPQUFoQyxFQUF5Q0ksSUFBekMsRUFBK0NaLFdBQS9DLFNBQStETSxrQkFBL0QsRUFBekI7O0FBRUEsYUFBT0MsZ0JBQVA7QUFDRDs7OztFQTdDNEJFLGlCOztBQWdEL0JLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmQsZ0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb2tlbiBmcm9tIFwiLi4vdG9rZW5cIjtcblxuY29uc3Qgc2lnbmlmaWNhbnQgPSB0cnVlO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG4gICAgICBzdGFydFBvc2l0aW9uID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHN1cGVyLmNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5tYXRjaChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHR5cGUgPSBjb250ZW50O1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19