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
    StringLiteralToken = require("../../significant/stringLiteral");

var stringLiteralType = types.stringLiteralType;

var SinglyQuotedStringLiteralToken = /*#__PURE__*/function (_StringLiteralToken) {
  _inherits(SinglyQuotedStringLiteralToken, _StringLiteralToken);

  var _super = _createSuper(SinglyQuotedStringLiteralToken);

  function SinglyQuotedStringLiteralToken() {
    _classCallCheck(this, SinglyQuotedStringLiteralToken);

    return _super.apply(this, arguments);
  }

  _createClass(SinglyQuotedStringLiteralToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(SinglyQuotedStringLiteralToken.prototype), "clone", this).call(this, SinglyQuotedStringLiteralToken, startPosition, endPosition);
    }
  }], [{
    key: "match",
    value: function match(content) {
      return StringLiteralToken.match(SinglyQuotedStringLiteralToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return StringLiteralToken.fromContent(SinglyQuotedStringLiteralToken, content);
    }
  }]);

  return SinglyQuotedStringLiteralToken;
}(StringLiteralToken);

var type = stringLiteralType,
    ///
regularExpression = /^'(?:\\.|[^'])*'/;
Object.assign(SinglyQuotedStringLiteralToken, {
  type: type,
  regularExpression: regularExpression
});
module.exports = SinglyQuotedStringLiteralToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdseVF1b3RlZC5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInJlcXVpcmUiLCJTdHJpbmdMaXRlcmFsVG9rZW4iLCJzdHJpbmdMaXRlcmFsVHlwZSIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNvbnRlbnQiLCJtYXRjaCIsImZyb21Db250ZW50IiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUFyQjtBQUFBLElBQ01DLGtCQUFrQixHQUFHRCxPQUFPLENBQUMsaUNBQUQsQ0FEbEM7O0lBR1FFLGlCLEdBQXNCSCxLLENBQXRCRyxpQjs7SUFFRkMsOEI7Ozs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsdUdBQW1CRiw4QkFBbkIsRUFBbURDLGFBQW5ELEVBQWtFQyxXQUFsRTtBQUFpRjs7OzBCQUV4R0MsTyxFQUFTO0FBQUUsYUFBT0wsa0JBQWtCLENBQUNNLEtBQW5CLENBQXlCSiw4QkFBekIsRUFBeURHLE9BQXpELENBQVA7QUFBMkU7OztnQ0FFaEZBLE8sRUFBUztBQUFFLGFBQU9MLGtCQUFrQixDQUFDTyxXQUFuQixDQUErQkwsOEJBQS9CLEVBQStERyxPQUEvRCxDQUFQO0FBQWlGOzs7O0VBTHBFTCxrQjs7QUFRN0MsSUFBTVEsSUFBSSxHQUFHUCxpQkFBYjtBQUFBLElBQWdDO0FBQzFCUSxpQkFBaUIsR0FBRyxrQkFEMUI7QUFHQUMsTUFBTSxDQUFDQyxNQUFQLENBQWNULDhCQUFkLEVBQThDO0FBQzVDTSxFQUFBQSxJQUFJLEVBQUpBLElBRDRDO0FBRTVDQyxFQUFBQSxpQkFBaUIsRUFBakJBO0FBRjRDLENBQTlDO0FBS0FHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsOEJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpLFxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VuID0gcmVxdWlyZShcIi4uLy4uL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWxcIik7XG5cbmNvbnN0IHsgc3RyaW5nTGl0ZXJhbFR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZXh0ZW5kcyBTdHJpbmdMaXRlcmFsVG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU3RyaW5nTGl0ZXJhbFRva2VuLmZyb21Db250ZW50KFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IHN0cmluZ0xpdGVyYWxUeXBlLCAvLy9cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL14nKD86XFxcXC58W14nXSkqJy87XG5cbk9iamVjdC5hc3NpZ24oU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLCB7XG4gIHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XG4iXX0=