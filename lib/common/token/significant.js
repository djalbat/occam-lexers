"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

exports["default"] = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pZmljYW50LmpzIl0sIm5hbWVzIjpbInNpZ25pZmljYW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwidW5kZWZpbmVkIiwicmVtYWluaW5nQXJndW1lbnRzIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJUb2tlbiIsIm1hdGNoIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwiZnJvbUNvbnRlbnRBbmRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxJQUFwQjs7SUFFcUJDLGdCOzs7Ozs7Ozs7Ozs7OzBCQUNiQyxLLEVBQU9DLGEsRUFBZUMsVyxFQUFvQztBQUFBOztBQUM5RCxVQUFJQSxXQUFXLEtBQUtDLFNBQXBCLEVBQStCO0FBQzdCRCxRQUFBQSxXQUFXLEdBQUdELGFBQWQ7QUFDQUEsUUFBQUEsYUFBYSxHQUFHRCxLQUFoQjtBQUNBQSxRQUFBQSxLQUFLLEdBQUdELGdCQUFSO0FBQ0Q7O0FBTDZELHdDQUFwQkssa0JBQW9CO0FBQXBCQSxRQUFBQSxrQkFBb0I7QUFBQTs7QUFPOUQsVUFBTUMsZ0JBQWdCLHVHQUFlTCxLQUFmLEVBQXNCQyxhQUF0QixFQUFxQ0MsV0FBckMsRUFBa0RKLFdBQWxELFNBQWtFTSxrQkFBbEUsRUFBdEI7O0FBRUEsYUFBT0MsZ0JBQVA7QUFDRDs7OzBCQUVZTCxLLEVBQU9NLE8sRUFBZ0M7QUFDbEQsVUFBSUEsT0FBTyxLQUFLSCxTQUFoQixFQUEyQjtBQUN6QkcsUUFBQUEsT0FBTyxHQUFHTixLQUFWO0FBQ0FBLFFBQUFBLEtBQUssR0FBR0QsZ0JBQVI7QUFDRDs7QUFKaUQseUNBQXBCSyxrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQU1sRCxVQUFNQyxnQkFBZ0IsR0FBR0Usa0JBQU1DLEtBQU4sMkJBQVlSLEtBQVosRUFBbUJNLE9BQW5CLEVBQTRCUixXQUE1QixTQUE0Q00sa0JBQTVDLEVBQXpCOztBQUVBLGFBQU9DLGdCQUFQO0FBQ0Q7OztnQ0FFa0JMLEssRUFBT00sTyxFQUFnQztBQUN4RCxVQUFJQSxPQUFPLEtBQUtILFNBQWhCLEVBQTJCO0FBQ3pCRyxRQUFBQSxPQUFPLEdBQUdOLEtBQVY7QUFDQUEsUUFBQUEsS0FBSyxHQUFHRCxnQkFBUjtBQUNEOztBQUp1RCx5Q0FBcEJLLGtCQUFvQjtBQUFwQkEsUUFBQUEsa0JBQW9CO0FBQUE7O0FBTXhELFVBQU1DLGdCQUFnQixHQUFHRSxrQkFBTUUsV0FBTiwyQkFBa0JULEtBQWxCLEVBQXlCTSxPQUF6QixFQUFrQ1IsV0FBbEMsU0FBa0RNLGtCQUFsRCxFQUF6Qjs7QUFFQSxhQUFPQyxnQkFBUDtBQUNEOzs7dUNBRXlCTCxLLEVBQU9NLE8sRUFBU0ksSSxFQUE2QjtBQUNyRSxVQUFJQSxJQUFJLEtBQUtQLFNBQWIsRUFBd0I7QUFDdEJPLFFBQUFBLElBQUksR0FBR0osT0FBUDtBQUNBQSxRQUFBQSxPQUFPLEdBQUdOLEtBQVY7QUFDQUEsUUFBQUEsS0FBSyxHQUFHRCxnQkFBUjtBQUNEOztBQUxvRSx5Q0FBcEJLLGtCQUFvQjtBQUFwQkEsUUFBQUEsa0JBQW9CO0FBQUE7O0FBT3JFLFVBQU1DLGdCQUFnQixHQUFHRSxrQkFBTUksa0JBQU4sMkJBQXlCWCxLQUF6QixFQUFnQ00sT0FBaEMsRUFBeUNJLElBQXpDLEVBQStDWixXQUEvQyxTQUErRE0sa0JBQS9ELEVBQXpCOztBQUVBLGFBQU9DLGdCQUFQO0FBQ0Q7Ozs7RUE3QzJDRSxpQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4uL3Rva2VuXCI7XG5cbmNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kUG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xuICAgICAgc3RhcnRQb3NpdGlvbiA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBzdXBlci5jbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gVG9rZW4ubWF0Y2goQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0eXBlID0gY29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG59XG4iXX0=