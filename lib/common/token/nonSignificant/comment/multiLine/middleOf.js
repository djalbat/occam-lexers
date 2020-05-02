"use strict";

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

var MiddleOfMultiLineCommentToken = /*#__PURE__*/function (_NonSignificantToken) {
  _inherits(MiddleOfMultiLineCommentToken, _NonSignificantToken);

  var _super = _createSuper(MiddleOfMultiLineCommentToken);

  function MiddleOfMultiLineCommentToken() {
    _classCallCheck(this, MiddleOfMultiLineCommentToken);

    return _super.apply(this, arguments);
  }

  _createClass(MiddleOfMultiLineCommentToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(MiddleOfMultiLineCommentToken.prototype), "clone", this).call(this, MiddleOfMultiLineCommentToken, startPosition, endPosition);
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
      return _nonSignificant["default"].match(MiddleOfMultiLineCommentToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return _nonSignificant["default"].fromContent(MiddleOfMultiLineCommentToken, content);
    }
  }]);

  return MiddleOfMultiLineCommentToken;
}(_nonSignificant["default"]);

var type = _types.middleOfMultiLineCommentType,
    ///
regularExpression = /^(?:.+?(?=\*\/)|.+$)/;
Object.assign(MiddleOfMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});
module.exports = MiddleOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZU9mLmpzIl0sIm5hbWVzIjpbIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiaW5Db21tZW50IiwiY29udGVudCIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJtYXRjaCIsImZyb21Db250ZW50IiwidHlwZSIsIm1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsNkI7Ozs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsc0dBQW1CRiw2QkFBbkIsRUFBa0RDLGFBQWxELEVBQWlFQyxXQUFqRTtBQUFnRjs7O2tDQUV0RztBQUNaLFVBQU1DLFNBQVMsR0FBRyxJQUFsQjtBQUVBLGFBQU9BLFNBQVA7QUFDRDs7OzBCQUVZQyxPLEVBQVM7QUFBRSxhQUFPQywyQkFBb0JDLEtBQXBCLENBQTBCTiw2QkFBMUIsRUFBeURJLE9BQXpELENBQVA7QUFBMkU7OztnQ0FFaEZBLE8sRUFBUztBQUFFLGFBQU9DLDJCQUFvQkUsV0FBcEIsQ0FBZ0NQLDZCQUFoQyxFQUErREksT0FBL0QsQ0FBUDtBQUFpRjs7OztFQVhyRUMsMEI7O0FBYzVDLElBQU1HLElBQUksR0FBR0MsbUNBQWI7QUFBQSxJQUE0QztBQUN0Q0MsaUJBQWlCLEdBQUcsc0JBRDFCO0FBR0FDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWiw2QkFBZCxFQUE2QztBQUMzQ1EsRUFBQUEsSUFBSSxFQUFKQSxJQUQyQztBQUUzQ0UsRUFBQUEsaUJBQWlCLEVBQWpCQTtBQUYyQyxDQUE3QztBQUtBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLDZCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgbWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuXG5jbGFzcyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGlzSW5Db21tZW50KCkge1xuICAgIGNvbnN0IGluQ29tbWVudCA9IHRydWU7XG5cbiAgICByZXR1cm4gaW5Db21tZW50O1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4ubWF0Y2goTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBtaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUeXBlLCAgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eKD86Lis/KD89XFwqXFwvKXwuKyQpLztcblxuT2JqZWN0LmFzc2lnbihNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwge1xuICB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47XG4iXX0=