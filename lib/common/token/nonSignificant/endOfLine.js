"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonSignificant = _interopRequireDefault(require("../../token/nonSignificant"));

var _types = require("../../types");

var _content = require("../../../utilities/content");

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

var type = _types.endOfLineType,
    ///
regularExpression = /\r\n|\r|\n/;

var EndOfLineNonSignificantToken = /*#__PURE__*/function (_NonSignificantToken) {
  _inherits(EndOfLineNonSignificantToken, _NonSignificantToken);

  var _super = _createSuper(EndOfLineNonSignificantToken);

  function EndOfLineNonSignificantToken(type, content, innerHTML, significant, index) {
    var _this;

    _classCallCheck(this, EndOfLineNonSignificantToken);

    _this = _super.call(this, type, content, innerHTML, significant);
    _this.index = index;
    return _this;
  }

  _createClass(EndOfLineNonSignificantToken, [{
    key: "getIndex",
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: "asHTML",
    value: function asHTML() {
      var html = "\n"; ///

      return html;
    }
  }, {
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(EndOfLineNonSignificantToken.prototype), "clone", this).call(this, EndOfLineNonSignificantToken, startPosition, endPosition, this.index);
    }
  }], [{
    key: "match",
    value: function match(content) {
      var endOfLineNonSignificantToken = null;
      var match = content.match(regularExpression);

      if (match !== null) {
        var index = match.index;
        content = match[0]; ///

        var contentLength = content.length;

        if (contentLength > 0) {
          var sanitisedContent = (0, _content.sanitiseContent)(content),
              innerHTML = sanitisedContent,
              ///
          significant = false;
          endOfLineNonSignificantToken = new EndOfLineNonSignificantToken(type, content, innerHTML, significant, index);
        }
      }

      return endOfLineNonSignificantToken;
    }
  }]);

  return EndOfLineNonSignificantToken;
}(_nonSignificant["default"]);

exports["default"] = EndOfLineNonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJ0eXBlIiwiZW5kT2ZMaW5lVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImluZGV4IiwiaHRtbCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJtYXRjaCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJzYW5pdGlzZWRDb250ZW50IiwiTm9uU2lnbmlmaWNhbnRUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxvQkFBYjtBQUFBLElBQTRCO0FBQ3RCQyxpQkFBaUIsR0FBRyxZQUQxQjs7SUFHcUJDLDRCOzs7OztBQUNuQix3Q0FBWUgsSUFBWixFQUFrQkksT0FBbEIsRUFBMkJDLFNBQTNCLEVBQXNDQyxXQUF0QyxFQUFtREMsS0FBbkQsRUFBMEQ7QUFBQTs7QUFBQTs7QUFDeEQsOEJBQU1QLElBQU4sRUFBWUksT0FBWixFQUFxQkMsU0FBckIsRUFBZ0NDLFdBQWhDO0FBRUEsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBSHdEO0FBSXpEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLElBQUksR0FBRyxJQUFiLENBRE8sQ0FDYTs7QUFFcEIsYUFBT0EsSUFBUDtBQUNEOzs7MEJBRUtDLGEsRUFBZUMsVyxFQUFhO0FBQUUscUdBQW1CUCw0QkFBbkIsRUFBaURNLGFBQWpELEVBQWdFQyxXQUFoRSxFQUE2RSxLQUFLSCxLQUFsRjtBQUEyRjs7OzBCQUVsSEgsTyxFQUFTO0FBQ3BCLFVBQUlPLDRCQUE0QixHQUFHLElBQW5DO0FBRUEsVUFBTUMsS0FBSyxHQUFHUixPQUFPLENBQUNRLEtBQVIsQ0FBY1YsaUJBQWQsQ0FBZDs7QUFFQSxVQUFJVSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUFBLFlBQ1ZMLEtBRFUsR0FDQUssS0FEQSxDQUNWTCxLQURVO0FBR2xCSCxRQUFBQSxPQUFPLEdBQUdRLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FIa0IsQ0FHRTs7QUFFcEIsWUFBTUMsYUFBYSxHQUFHVCxPQUFPLENBQUNVLE1BQTlCOztBQUVBLFlBQUlELGFBQWEsR0FBRyxDQUFwQixFQUF1QjtBQUNyQixjQUFNRSxnQkFBZ0IsR0FBRyw4QkFBZ0JYLE9BQWhCLENBQXpCO0FBQUEsY0FDTUMsU0FBUyxHQUFHVSxnQkFEbEI7QUFBQSxjQUNvQztBQUM5QlQsVUFBQUEsV0FBVyxHQUFHLEtBRnBCO0FBSUFLLFVBQUFBLDRCQUE0QixHQUFHLElBQUlSLDRCQUFKLENBQWlDSCxJQUFqQyxFQUF1Q0ksT0FBdkMsRUFBZ0RDLFNBQWhELEVBQTJEQyxXQUEzRCxFQUF3RUMsS0FBeEUsQ0FBL0I7QUFDRDtBQUNGOztBQUVELGFBQU9JLDRCQUFQO0FBQ0Q7Ozs7RUF6Q3VESywwQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgZW5kT2ZMaW5lVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc2FuaXRpc2VDb250ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHR5cGUgPSBlbmRPZkxpbmVUeXBlLCAvLy9cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL1xcclxcbnxcXHJ8XFxuLztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCBpbmRleCkge1xuICAgIHN1cGVyKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpO1xuXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBhc0hUTUwoKSB7XG4gICAgY29uc3QgaHRtbCA9IFwiXFxuXCI7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCB0aGlzLmluZGV4KTsgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7XG4gICAgbGV0IGVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2g7XG5cbiAgICAgIGNvbnRlbnQgPSBtYXRjaFswXTsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICBzaWduaWZpY2FudCA9IGZhbHNlO1xuXG4gICAgICAgIGVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gPSBuZXcgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCBpbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cbn1cbiJdfQ==