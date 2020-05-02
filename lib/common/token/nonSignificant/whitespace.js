"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonSignificant = _interopRequireDefault(require("../../token/nonSignificant"));

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

var WhitespaceToken = /*#__PURE__*/function (_NonSignificantToken) {
  _inherits(WhitespaceToken, _NonSignificantToken);

  var _super = _createSuper(WhitespaceToken);

  function WhitespaceToken() {
    _classCallCheck(this, WhitespaceToken);

    return _super.apply(this, arguments);
  }

  _createClass(WhitespaceToken, [{
    key: "asHTML",
    value: function asHTML() {
      var html = this.innerHTML; ///

      return html;
    }
  }, {
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(WhitespaceToken.prototype), "clone", this).call(this, WhitespaceToken, startPosition, endPosition);
    }
  }], [{
    key: "match",
    value: function match(content) {
      return _nonSignificant["default"].match(WhitespaceToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return _nonSignificant["default"].fromContent(WhitespaceToken, content);
    }
  }]);

  return WhitespaceToken;
}(_nonSignificant["default"]);

exports["default"] = WhitespaceToken;
var type = _types.whitespaceType,
    ///
regularExpression = /^[\t ]+/;
Object.assign(WhitespaceToken, {
  type: type,
  regularExpression: regularExpression
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoaXRlc3BhY2UuanMiXSwibmFtZXMiOlsiV2hpdGVzcGFjZVRva2VuIiwiaHRtbCIsImlubmVySFRNTCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNvbnRlbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCxVQUFNQyxJQUFJLEdBQUcsS0FBS0MsU0FBbEIsQ0FETyxDQUN1Qjs7QUFFOUIsYUFBT0QsSUFBUDtBQUNEOzs7MEJBRUtFLGEsRUFBZUMsVyxFQUFhO0FBQUUsd0ZBQW1CSixlQUFuQixFQUFvQ0csYUFBcEMsRUFBbURDLFdBQW5EO0FBQWtFOzs7MEJBRXpGQyxPLEVBQVM7QUFBRSxhQUFPQywyQkFBb0JDLEtBQXBCLENBQTBCUCxlQUExQixFQUEyQ0ssT0FBM0MsQ0FBUDtBQUE2RDs7O2dDQUVsRUEsTyxFQUFTO0FBQUUsYUFBT0MsMkJBQW9CRSxXQUFwQixDQUFnQ1IsZUFBaEMsRUFBaURLLE9BQWpELENBQVA7QUFBbUU7Ozs7RUFYdERDLDBCOzs7QUFjN0MsSUFBTUcsSUFBSSxHQUFHQyxxQkFBYjtBQUFBLElBQThCO0FBQ3hCQyxpQkFBaUIsR0FBRyxTQUQxQjtBQUdBQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2IsZUFBZCxFQUErQjtBQUM3QlMsRUFBQUEsSUFBSSxFQUFKQSxJQUQ2QjtBQUU3QkUsRUFBQUEsaUJBQWlCLEVBQWpCQTtBQUY2QixDQUEvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgd2hpdGVzcGFjZVR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2hpdGVzcGFjZVRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5pbm5lckhUTUw7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKFdoaXRlc3BhY2VUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4ubWF0Y2goV2hpdGVzcGFjZVRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KFdoaXRlc3BhY2VUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IHdoaXRlc3BhY2VUeXBlLCAgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eW1xcdCBdKy87XG5cbk9iamVjdC5hc3NpZ24oV2hpdGVzcGFjZVRva2VuLCB7XG4gIHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcbiJdfQ==