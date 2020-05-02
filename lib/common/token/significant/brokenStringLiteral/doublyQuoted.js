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

var types = require("../../../types"),
    SignificantToken = require("../../significant");

var brokenStringLiteralType = types.brokenStringLiteralType;

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
      return SignificantToken.match(DoublyQuotedBrokenStringLiteralToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return SignificantToken.fromContent(DoublyQuotedBrokenStringLiteralToken, content);
    }
  }]);

  return DoublyQuotedBrokenStringLiteralToken;
}(SignificantToken);

var type = brokenStringLiteralType,
    ///
regularExpression = /^"/;
Object.assign(DoublyQuotedBrokenStringLiteralToken, {
  type: type,
  regularExpression: regularExpression
});
module.exports = DoublyQuotedBrokenStringLiteralToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvdWJseVF1b3RlZC5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiYnJva2VuU3RyaW5nTGl0ZXJhbFR5cGUiLCJEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsZ0JBQUQsQ0FBckI7QUFBQSxJQUNNQyxnQkFBZ0IsR0FBR0QsT0FBTyxDQUFDLG1CQUFELENBRGhDOztJQUdRRSx1QixHQUE0QkgsSyxDQUE1QkcsdUI7O0lBRUZDLG9DOzs7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLDZHQUFtQkYsb0NBQW5CLEVBQXlEQyxhQUF6RCxFQUF3RUMsV0FBeEU7QUFBdUY7OzswQkFFOUdDLE8sRUFBUztBQUFFLGFBQU9MLGdCQUFnQixDQUFDTSxLQUFqQixDQUF1Qkosb0NBQXZCLEVBQTZERyxPQUE3RCxDQUFQO0FBQStFOzs7Z0NBRXBGQSxPLEVBQVM7QUFBRSxhQUFPTCxnQkFBZ0IsQ0FBQ08sV0FBakIsQ0FBNkJMLG9DQUE3QixFQUFtRUcsT0FBbkUsQ0FBUDtBQUFxRjs7OztFQUxsRUwsZ0I7O0FBUW5ELElBQU1RLElBQUksR0FBR1AsdUJBQWI7QUFBQSxJQUFzQztBQUNoQ1EsaUJBQWlCLEdBQUcsSUFEMUI7QUFHQUMsTUFBTSxDQUFDQyxNQUFQLENBQWNULG9DQUFkLEVBQW9EO0FBQ2xETSxFQUFBQSxJQUFJLEVBQUpBLElBRGtEO0FBRWxEQyxFQUFBQSxpQkFBaUIsRUFBakJBO0FBRmtELENBQXBEO0FBS0FHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsb0NBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoXCIuLi8uLi9zaWduaWZpY2FudFwiKTtcblxuY29uc3QgeyBicm9rZW5TdHJpbmdMaXRlcmFsVHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gYnJva2VuU3RyaW5nTGl0ZXJhbFR5cGUsIC8vL1xuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXlwiLztcblxuT2JqZWN0LmFzc2lnbihEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbjtcbiJdfQ==