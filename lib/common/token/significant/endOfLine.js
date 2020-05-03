"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _significant = _interopRequireDefault(require("../../token/significant"));

var _types = require("../../types");

var _content = require("../../../utilities/content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EndOfLineSignificantToken = /*#__PURE__*/function (_SignificantToken) {
  _inherits(EndOfLineSignificantToken, _SignificantToken);

  function EndOfLineSignificantToken(type, content, innerHTML, significant, index) {
    var _this;

    _classCallCheck(this, EndOfLineSignificantToken);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineSignificantToken).call(this, type, content, innerHTML, significant));
    _this.index = index;
    return _this;
  }

  _createClass(EndOfLineSignificantToken, [{
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
      return _get(_getPrototypeOf(EndOfLineSignificantToken.prototype), "clone", this).call(this, EndOfLineSignificantToken, startPosition, endPosition, this.index);
    }
  }], [{
    key: "match",
    value: function match(content) {
      var endOfLineSignificantToken = null;
      var regularExpression = /\r\n|\r|\n/,
          match = content.match(regularExpression);

      if (match !== null) {
        var index = match.index;
        content = match[0]; ///

        var contentLength = content.length;

        if (contentLength > 0) {
          var type = _types.endOfLineType,
              ///
          sanitisedContent = (0, _content.sanitiseContent)(content),
              innerHTML = sanitisedContent,
              ///
          significant = true;
          endOfLineSignificantToken = new EndOfLineSignificantToken(type, content, innerHTML, significant, index);
        }
      }

      return endOfLineSignificantToken;
    }
  }]);

  return EndOfLineSignificantToken;
}(_significant["default"]);

exports["default"] = EndOfLineSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImluZGV4IiwiaHRtbCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImVuZE9mTGluZVR5cGUiLCJzYW5pdGlzZWRDb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHlCOzs7QUFDbkIscUNBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxTQUEzQixFQUFzQ0MsV0FBdEMsRUFBbURDLEtBQW5ELEVBQTBEO0FBQUE7O0FBQUE7O0FBQ3hELG1HQUFNSixJQUFOLEVBQVlDLE9BQVosRUFBcUJDLFNBQXJCLEVBQWdDQyxXQUFoQztBQUVBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUh3RDtBQUl6RDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxJQUFJLEdBQUcsSUFBYixDQURPLENBQ2E7O0FBRXBCLGFBQU9BLElBQVA7QUFDRDs7OzBCQUVLQyxhLEVBQWVDLFcsRUFBYTtBQUFFLGtHQUFtQlIseUJBQW5CLEVBQThDTyxhQUE5QyxFQUE2REMsV0FBN0QsRUFBMEUsS0FBS0gsS0FBL0U7QUFBd0Y7OzswQkFFL0dILE8sRUFBUztBQUNwQixVQUFJTyx5QkFBeUIsR0FBRyxJQUFoQztBQUVBLFVBQU1DLGlCQUFpQixHQUFHLFlBQTFCO0FBQUEsVUFDTUMsS0FBSyxHQUFHVCxPQUFPLENBQUNTLEtBQVIsQ0FBY0QsaUJBQWQsQ0FEZDs7QUFHQSxVQUFJQyxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUFBLFlBQ1ZOLEtBRFUsR0FDQU0sS0FEQSxDQUNWTixLQURVO0FBR2xCSCxRQUFBQSxPQUFPLEdBQUdTLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FIa0IsQ0FHRTs7QUFFcEIsWUFBTUMsYUFBYSxHQUFHVixPQUFPLENBQUNXLE1BQTlCOztBQUVBLFlBQUlELGFBQWEsR0FBRyxDQUFwQixFQUF1QjtBQUNyQixjQUFNWCxJQUFJLEdBQUdhLG9CQUFiO0FBQUEsY0FBNEI7QUFDdEJDLFVBQUFBLGdCQUFnQixHQUFHLDhCQUFnQmIsT0FBaEIsQ0FEekI7QUFBQSxjQUVNQyxTQUFTLEdBQUdZLGdCQUZsQjtBQUFBLGNBRW9DO0FBQzlCWCxVQUFBQSxXQUFXLEdBQUcsSUFIcEI7QUFLQUssVUFBQUEseUJBQXlCLEdBQUcsSUFBSVQseUJBQUosQ0FBOEJDLElBQTlCLEVBQW9DQyxPQUFwQyxFQUE2Q0MsU0FBN0MsRUFBd0RDLFdBQXhELEVBQXFFQyxLQUFyRSxDQUE1QjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0kseUJBQVA7QUFDRDs7OztFQTNDb0RPLHVCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi90b2tlbi9zaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBlbmRPZkxpbmVUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzYW5pdGlzZUNvbnRlbnQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCBpbmRleCkge1xuICAgIHN1cGVyKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpO1xuXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBhc0hUTUwoKSB7XG4gICAgY29uc3QgaHRtbCA9IFwiXFxuXCI7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgdGhpcy5pbmRleCk7IH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkge1xuICAgIGxldCBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uID0gL1xcclxcbnxcXHJ8XFxuLyxcbiAgICAgICAgICBtYXRjaCA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaDtcblxuICAgICAgY29udGVudCA9IG1hdGNoWzBdOyAvLy9cblxuICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGVuZE9mTGluZVR5cGUsIC8vL1xuICAgICAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnQgPSB0cnVlO1xuXG4gICAgICAgIGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gPSBuZXcgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCBpbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW47XG4gIH1cbn1cbiJdfQ==