"use strict";

var _significant = _interopRequireDefault(require("../../token/significant"));

var _types = require("../../types");

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

var RegularExpressionToken = /*#__PURE__*/function (_SignificantToken) {
  _inherits(RegularExpressionToken, _SignificantToken);

  var _super = _createSuper(RegularExpressionToken);

  function RegularExpressionToken() {
    _classCallCheck(this, RegularExpressionToken);

    return _super.apply(this, arguments);
  }

  _createClass(RegularExpressionToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(RegularExpressionToken.prototype), "clone", this).call(this, RegularExpressionToken, startPosition, endPosition);
    }
  }], [{
    key: "match",
    value: function match(content) {
      return _significant["default"].match(RegularExpressionToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return _significant["default"].fromContent(RegularExpressionToken, content);
    }
  }]);

  return RegularExpressionToken;
}(_significant["default"]);

var type = _types.regularExpressionType,
    ///
regularExpression = /^\/(?:\\.|[^\/])*\//;
Object.assign(RegularExpressionToken, {
  type: type,
  regularExpression: regularExpression
});
module.exports = RegularExpressionToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb25UeXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLHNCOzs7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLCtGQUFtQkYsc0JBQW5CLEVBQTJDQyxhQUEzQyxFQUEwREMsV0FBMUQ7QUFBeUU7OzswQkFFaEdDLE8sRUFBUztBQUFFLGFBQU9DLHdCQUFpQkMsS0FBakIsQ0FBdUJMLHNCQUF2QixFQUErQ0csT0FBL0MsQ0FBUDtBQUFpRTs7O2dDQUV0RUEsTyxFQUFTO0FBQUUsYUFBT0Msd0JBQWlCRSxXQUFqQixDQUE2Qk4sc0JBQTdCLEVBQXFERyxPQUFyRCxDQUFQO0FBQXVFOzs7O0VBTGxFQyx1Qjs7QUFRckMsSUFBTUcsSUFBSSxHQUFHQyw0QkFBYjtBQUFBLElBQW9DO0FBQzlCQyxpQkFBaUIsR0FBRyxxQkFEMUI7QUFHQUMsTUFBTSxDQUFDQyxNQUFQLENBQWNYLHNCQUFkLEVBQXNDO0FBQ3BDTyxFQUFBQSxJQUFJLEVBQUpBLElBRG9DO0FBRXBDRSxFQUFBQSxpQkFBaUIsRUFBakJBO0FBRm9DLENBQXRDO0FBS0FHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmIsc0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi90b2tlbi9zaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyByZWd1bGFyRXhwcmVzc2lvblR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25Ub2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoUmVndWxhckV4cHJlc3Npb25Ub2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4ubWF0Y2goUmVndWxhckV4cHJlc3Npb25Ub2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChSZWd1bGFyRXhwcmVzc2lvblRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gcmVndWxhckV4cHJlc3Npb25UeXBlLCAvLy9cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC8oPzpcXFxcLnxbXlxcL10pKlxcLy87XG5cbk9iamVjdC5hc3NpZ24oUmVndWxhckV4cHJlc3Npb25Ub2tlbiwge1xuICB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25Ub2tlbjtcbiJdfQ==