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

var significant = false;

var NonSignificantToken = /*#__PURE__*/function (_Token) {
  _inherits(NonSignificantToken, _Token);

  var _super = _createSuper(NonSignificantToken);

  function NonSignificantToken() {
    _classCallCheck(this, NonSignificantToken);

    return _super.apply(this, arguments);
  }

  _createClass(NonSignificantToken, [{
    key: "clone",
    value: function clone(Class, startPosition, endPosition) {
      return _get(_getPrototypeOf(NonSignificantToken.prototype), "clone", this).call(this, Class, startPosition, endPosition, significant);
    }
  }], [{
    key: "match",
    value: function match(Class, content) {
      return _token["default"].match(Class, content, significant);
    }
  }, {
    key: "fromContent",
    value: function fromContent(Class, content) {
      return _token["default"].fromContent(Class, content, significant);
    }
  }, {
    key: "fromContentAndType",
    value: function fromContentAndType(Class, content, type) {
      return _token["default"].fromContentAndType(Class, content, type, significant);
    }
  }]);

  return NonSignificantToken;
}(_token["default"]);

exports["default"] = NonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblNpZ25pZmljYW50LmpzIl0sIm5hbWVzIjpbInNpZ25pZmljYW50IiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY29udGVudCIsIlRva2VuIiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJmcm9tQ29udGVudEFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLEtBQXBCOztJQUVxQkMsbUI7Ozs7Ozs7Ozs7Ozs7MEJBQ2JDLEssRUFBT0MsYSxFQUFlQyxXLEVBQWE7QUFBRSw0RkFBbUJGLEtBQW5CLEVBQTBCQyxhQUExQixFQUF5Q0MsV0FBekMsRUFBc0RKLFdBQXREO0FBQXFFOzs7MEJBRW5HRSxLLEVBQU9HLE8sRUFBUztBQUFFLGFBQU9DLGtCQUFNQyxLQUFOLENBQVlMLEtBQVosRUFBbUJHLE9BQW5CLEVBQTRCTCxXQUE1QixDQUFQO0FBQWtEOzs7Z0NBRTlERSxLLEVBQU9HLE8sRUFBUztBQUFFLGFBQU9DLGtCQUFNRSxXQUFOLENBQWtCTixLQUFsQixFQUF5QkcsT0FBekIsRUFBa0NMLFdBQWxDLENBQVA7QUFBd0Q7Ozt1Q0FFbkVFLEssRUFBT0csTyxFQUFTSSxJLEVBQU07QUFBRSxhQUFPSCxrQkFBTUksa0JBQU4sQ0FBeUJSLEtBQXpCLEVBQWdDRyxPQUFoQyxFQUF5Q0ksSUFBekMsRUFBK0NULFdBQS9DLENBQVA7QUFBcUU7Ozs7RUFQeEVNLGlCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb2tlbiBmcm9tIFwiLi4vdG9rZW5cIjtcblxuY29uc3Qgc2lnbmlmaWNhbnQgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHNpZ25pZmljYW50KTsgfVxuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCkgeyByZXR1cm4gVG9rZW4ubWF0Y2goQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCkgeyByZXR1cm4gVG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUpIHsgcmV0dXJuIFRva2VuLmZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgc2lnbmlmaWNhbnQpOyB9XG59XG4iXX0=