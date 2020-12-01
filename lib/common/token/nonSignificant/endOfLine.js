"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

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

var first = _necessary.arrayUtilities.first;

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
      var regularExpression = /\r\n|\r|\n/,
          matches = content.match(regularExpression);

      if (matches !== null) {
        var firstMatch = first(matches);
        content = firstMatch; ///

        var contentLength = content.length;

        if (contentLength > 0) {
          var type = _types.endOfLineType,
              sanitisedContent = (0, _content.sanitiseContent)(content),
              innerHTML = sanitisedContent,
              significant = false,
              index = matches.index;
          endOfLineNonSignificantToken = new EndOfLineNonSignificantToken(type, content, innerHTML, significant, index);
        }
      }

      return endOfLineNonSignificantToken;
    }
  }]);

  return EndOfLineNonSignificantToken;
}(_nonSignificant["default"]);

exports["default"] = EndOfLineNonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsInR5cGUiLCJjb250ZW50IiwiaW5uZXJIVE1MIiwic2lnbmlmaWNhbnQiLCJpbmRleCIsImh0bWwiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJlbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImVuZE9mTGluZVR5cGUiLCJzYW5pdGlzZWRDb250ZW50IiwiTm9uU2lnbmlmaWNhbnRUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsSyxHQUFVQyx5QixDQUFWRCxLOztJQUVhRSw0Qjs7Ozs7QUFDbkIsd0NBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxTQUEzQixFQUFzQ0MsV0FBdEMsRUFBbURDLEtBQW5ELEVBQTBEO0FBQUE7O0FBQUE7O0FBQ3hELDhCQUFNSixJQUFOLEVBQVlDLE9BQVosRUFBcUJDLFNBQXJCLEVBQWdDQyxXQUFoQztBQUVBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUh3RDtBQUl6RDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxJQUFJLEdBQUcsSUFBYixDQURPLENBQ2E7O0FBRXBCLGFBQU9BLElBQVA7QUFDRDs7OzBCQUVLQyxhLEVBQWVDLFcsRUFBYTtBQUFFLHFHQUFtQlIsNEJBQW5CLEVBQWlETyxhQUFqRCxFQUFnRUMsV0FBaEUsRUFBNkUsS0FBS0gsS0FBbEY7QUFBMkY7OzswQkFFbEhILE8sRUFBUztBQUNwQixVQUFJTyw0QkFBNEIsR0FBRyxJQUFuQztBQUVBLFVBQU1DLGlCQUFpQixHQUFHLFlBQTFCO0FBQUEsVUFDTUMsT0FBTyxHQUFHVCxPQUFPLENBQUNVLEtBQVIsQ0FBY0YsaUJBQWQsQ0FEaEI7O0FBR0EsVUFBSUMsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCLFlBQU1FLFVBQVUsR0FBR2YsS0FBSyxDQUFDYSxPQUFELENBQXhCO0FBRUFULFFBQUFBLE9BQU8sR0FBR1csVUFBVixDQUhvQixDQUdFOztBQUV0QixZQUFNQyxhQUFhLEdBQUdaLE9BQU8sQ0FBQ2EsTUFBOUI7O0FBRUEsWUFBSUQsYUFBYSxHQUFHLENBQXBCLEVBQXVCO0FBQ2YsY0FBQWIsSUFBSSxHQUFHZSxvQkFBUDtBQUFBLGNBQ0FDLGdCQURBLEdBQ21CLDhCQUFnQmYsT0FBaEIsQ0FEbkI7QUFBQSxjQUVBQyxTQUZBLEdBRVljLGdCQUZaO0FBQUEsY0FHQWIsV0FIQSxHQUdjLEtBSGQ7QUFBQSxjQUlFQyxLQUpGLEdBSVlNLE9BSlosQ0FJRU4sS0FKRjtBQU1OSSxVQUFBQSw0QkFBNEIsR0FBRyxJQUFJVCw0QkFBSixDQUFpQ0MsSUFBakMsRUFBdUNDLE9BQXZDLEVBQWdEQyxTQUFoRCxFQUEyREMsV0FBM0QsRUFBd0VDLEtBQXhFLENBQS9CO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSSw0QkFBUDtBQUNEOzs7O0VBNUN1RFMsMEIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi90b2tlbi9ub25TaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBlbmRPZkxpbmVUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzYW5pdGlzZUNvbnRlbnQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgaW5kZXgpIHtcbiAgICBzdXBlcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KTtcblxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGh0bWwgPSBcIlxcblwiOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgdGhpcy5pbmRleCk7IH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkge1xuICAgIGxldCBlbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uID0gL1xcclxcbnxcXHJ8XFxuLyxcbiAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBlbmRPZkxpbmVUeXBlLCAvLy9cbiAgICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50ID0gZmFsc2UsXG4gICAgICAgICAgICAgIHsgaW5kZXggfSA9IG1hdGNoZXM7XG5cbiAgICAgICAgZW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuIl19