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

var SignificantToken = require("../../token/significant");

var StringLiteralToken = /*#__PURE__*/function (_SignificantToken) {
  _inherits(StringLiteralToken, _SignificantToken);

  var _super = _createSuper(StringLiteralToken);

  function StringLiteralToken() {
    _classCallCheck(this, StringLiteralToken);

    return _super.apply(this, arguments);
  }

  _createClass(StringLiteralToken, [{
    key: "clone",
    value: function clone(Class, startPosition, endPosition) {
      return _get(_getPrototypeOf(StringLiteralToken.prototype), "clone", this).call(this, Class, startPosition, endPosition);
    }
  }, {
    key: "getString",
    value: function getString() {
      var content = this.getContent(),
          contentLength = content.length,
          start = 1,
          end = contentLength - 1,
          string = content.substring(start, end);
      return string;
    }
  }], [{
    key: "match",
    value: function match(Class, content) {
      return SignificantToken.match(Class, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(Class, content) {
      return SignificantToken.fromContent(Class, content);
    }
  }]);

  return StringLiteralToken;
}(SignificantToken);

module.exports = StringLiteralToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZ0xpdGVyYWwuanMiXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlbiIsInJlcXVpcmUiLCJTdHJpbmdMaXRlcmFsVG9rZW4iLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZW5kIiwic3RyaW5nIiwic3Vic3RyaW5nIiwibWF0Y2giLCJmcm9tQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLE9BQU8sQ0FBQyx5QkFBRCxDQUFoQzs7SUFFTUMsa0I7Ozs7Ozs7Ozs7Ozs7MEJBQ0VDLEssRUFBT0MsYSxFQUFlQyxXLEVBQWE7QUFBRSwyRkFBbUJGLEtBQW5CLEVBQTBCQyxhQUExQixFQUF5Q0MsV0FBekM7QUFBd0Q7OztnQ0FFdkY7QUFDVixVQUFNQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUFoQjtBQUFBLFVBQ01DLGFBQWEsR0FBR0YsT0FBTyxDQUFDRyxNQUQ5QjtBQUFBLFVBRU1DLEtBQUssR0FBRyxDQUZkO0FBQUEsVUFHTUMsR0FBRyxHQUFHSCxhQUFhLEdBQUcsQ0FINUI7QUFBQSxVQUlNSSxNQUFNLEdBQUdOLE9BQU8sQ0FBQ08sU0FBUixDQUFrQkgsS0FBbEIsRUFBeUJDLEdBQXpCLENBSmY7QUFNQSxhQUFPQyxNQUFQO0FBQ0Q7OzswQkFFWVQsSyxFQUFPRyxPLEVBQVM7QUFBRSxhQUFPTixnQkFBZ0IsQ0FBQ2MsS0FBakIsQ0FBdUJYLEtBQXZCLEVBQThCRyxPQUE5QixDQUFQO0FBQWdEOzs7Z0NBRTVESCxLLEVBQU9HLE8sRUFBUztBQUFFLGFBQU9OLGdCQUFnQixDQUFDZSxXQUFqQixDQUE2QlosS0FBN0IsRUFBb0NHLE9BQXBDLENBQVA7QUFBc0Q7Ozs7RUFmNUROLGdCOztBQWtCakNnQixNQUFNLENBQUNDLE9BQVAsR0FBaUJmLGtCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZShcIi4uLy4uL3Rva2VuL3NpZ25pZmljYW50XCIpO1xuXG5jbGFzcyBTdHJpbmdMaXRlcmFsVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGgsXG4gICAgICAgICAgc3RhcnQgPSAxLFxuICAgICAgICAgIGVuZCA9IGNvbnRlbnRMZW5ndGggLSAxLFxuICAgICAgICAgIHN0cmluZyA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChDbGFzcywgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nTGl0ZXJhbFRva2VuO1xuIl19