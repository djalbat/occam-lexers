"use strict";

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

var Token = require("../token");

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

      var significantToken = Token.match.apply(Token, [Class, content, significant].concat(remainingArguments));
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

      var significantToken = Token.fromContent.apply(Token, [Class, content, significant].concat(remainingArguments));
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

      var significantToken = Token.fromContentAndType.apply(Token, [Class, content, type, significant].concat(remainingArguments));
      return significantToken;
    }
  }]);

  return SignificantToken;
}(Token);

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pZmljYW50LmpzIl0sIm5hbWVzIjpbIlRva2VuIiwicmVxdWlyZSIsInNpZ25pZmljYW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwidW5kZWZpbmVkIiwicmVtYWluaW5nQXJndW1lbnRzIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJtYXRjaCIsImZyb21Db250ZW50IiwidHlwZSIsImZyb21Db250ZW50QW5kVHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsSUFBcEI7O0lBRU1DLGdCOzs7Ozs7Ozs7Ozs7OzBCQUNFQyxLLEVBQU9DLGEsRUFBZUMsVyxFQUFvQztBQUFBOztBQUM5RCxVQUFJQSxXQUFXLEtBQUtDLFNBQXBCLEVBQStCO0FBQzdCRCxRQUFBQSxXQUFXLEdBQUdELGFBQWQ7QUFDQUEsUUFBQUEsYUFBYSxHQUFHRCxLQUFoQjtBQUNBQSxRQUFBQSxLQUFLLEdBQUdELGdCQUFSO0FBQ0Q7O0FBTDZELHdDQUFwQkssa0JBQW9CO0FBQXBCQSxRQUFBQSxrQkFBb0I7QUFBQTs7QUFPOUQsVUFBTUMsZ0JBQWdCLHVHQUFlTCxLQUFmLEVBQXNCQyxhQUF0QixFQUFxQ0MsV0FBckMsRUFBa0RKLFdBQWxELFNBQWtFTSxrQkFBbEUsRUFBdEI7O0FBRUEsYUFBT0MsZ0JBQVA7QUFDRDs7OzBCQUVZTCxLLEVBQU9NLE8sRUFBZ0M7QUFDbEQsVUFBSUEsT0FBTyxLQUFLSCxTQUFoQixFQUEyQjtBQUN6QkcsUUFBQUEsT0FBTyxHQUFHTixLQUFWO0FBQ0FBLFFBQUFBLEtBQUssR0FBR0QsZ0JBQVI7QUFDRDs7QUFKaUQseUNBQXBCSyxrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQU1sRCxVQUFNQyxnQkFBZ0IsR0FBR1QsS0FBSyxDQUFDVyxLQUFOLE9BQUFYLEtBQUssR0FBT0ksS0FBUCxFQUFjTSxPQUFkLEVBQXVCUixXQUF2QixTQUF1Q00sa0JBQXZDLEVBQTlCO0FBRUEsYUFBT0MsZ0JBQVA7QUFDRDs7O2dDQUVrQkwsSyxFQUFPTSxPLEVBQWdDO0FBQ3hELFVBQUlBLE9BQU8sS0FBS0gsU0FBaEIsRUFBMkI7QUFDekJHLFFBQUFBLE9BQU8sR0FBR04sS0FBVjtBQUNBQSxRQUFBQSxLQUFLLEdBQUdELGdCQUFSO0FBQ0Q7O0FBSnVELHlDQUFwQkssa0JBQW9CO0FBQXBCQSxRQUFBQSxrQkFBb0I7QUFBQTs7QUFNeEQsVUFBTUMsZ0JBQWdCLEdBQUdULEtBQUssQ0FBQ1ksV0FBTixPQUFBWixLQUFLLEdBQWFJLEtBQWIsRUFBb0JNLE9BQXBCLEVBQTZCUixXQUE3QixTQUE2Q00sa0JBQTdDLEVBQTlCO0FBRUEsYUFBT0MsZ0JBQVA7QUFDRDs7O3VDQUV5QkwsSyxFQUFPTSxPLEVBQVNHLEksRUFBNkI7QUFDckUsVUFBSUEsSUFBSSxLQUFLTixTQUFiLEVBQXdCO0FBQ3RCTSxRQUFBQSxJQUFJLEdBQUdILE9BQVA7QUFDQUEsUUFBQUEsT0FBTyxHQUFHTixLQUFWO0FBQ0FBLFFBQUFBLEtBQUssR0FBR0QsZ0JBQVI7QUFDRDs7QUFMb0UseUNBQXBCSyxrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQU9yRSxVQUFNQyxnQkFBZ0IsR0FBR1QsS0FBSyxDQUFDYyxrQkFBTixPQUFBZCxLQUFLLEdBQW9CSSxLQUFwQixFQUEyQk0sT0FBM0IsRUFBb0NHLElBQXBDLEVBQTBDWCxXQUExQyxTQUEwRE0sa0JBQTFELEVBQTlCO0FBRUEsYUFBT0MsZ0JBQVA7QUFDRDs7OztFQTdDNEJULEs7O0FBZ0QvQmUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCYixnQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgVG9rZW4gPSByZXF1aXJlKFwiLi4vdG9rZW5cIik7XG5cbmNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kUG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xuICAgICAgc3RhcnRQb3NpdGlvbiA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBzdXBlci5jbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gVG9rZW4ubWF0Y2goQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0eXBlID0gY29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==