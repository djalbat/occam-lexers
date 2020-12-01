"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _significant = _interopRequireDefault(require("../../token/significant"));

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

var EndOfLineSignificantToken = /*#__PURE__*/function (_SignificantToken) {
  _inherits(EndOfLineSignificantToken, _SignificantToken);

  var _super = _createSuper(EndOfLineSignificantToken);

  function EndOfLineSignificantToken(type, content, innerHTML, significant, index) {
    var _this;

    _classCallCheck(this, EndOfLineSignificantToken);

    _this = _super.call(this, type, content, innerHTML, significant);
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
          matches = content.match(regularExpression);

      if (matches !== null) {
        var firstMatch = first(matches);
        content = firstMatch; ///

        var contentLength = content.length;

        if (contentLength > 0) {
          var type = _types.endOfLineType,
              sanitisedContent = (0, _content.sanitiseContent)(content),
              innerHTML = sanitisedContent,
              significant = true,
              index = matches.index;
          endOfLineSignificantToken = new EndOfLineSignificantToken(type, content, innerHTML, significant, index);
        }
      }

      return endOfLineSignificantToken;
    }
  }]);

  return EndOfLineSignificantToken;
}(_significant["default"]);

exports["default"] = EndOfLineSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsInR5cGUiLCJjb250ZW50IiwiaW5uZXJIVE1MIiwic2lnbmlmaWNhbnQiLCJpbmRleCIsImh0bWwiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImVuZE9mTGluZVR5cGUiLCJzYW5pdGlzZWRDb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsSyxHQUFVQyx5QixDQUFWRCxLOztJQUVhRSx5Qjs7Ozs7QUFDbkIscUNBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxTQUEzQixFQUFzQ0MsV0FBdEMsRUFBbURDLEtBQW5ELEVBQTBEO0FBQUE7O0FBQUE7O0FBQ3hELDhCQUFNSixJQUFOLEVBQVlDLE9BQVosRUFBcUJDLFNBQXJCLEVBQWdDQyxXQUFoQztBQUVBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUh3RDtBQUl6RDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxJQUFJLEdBQUcsSUFBYixDQURPLENBQ2E7O0FBRXBCLGFBQU9BLElBQVA7QUFDRDs7OzBCQUVLQyxhLEVBQWVDLFcsRUFBYTtBQUFFLGtHQUFtQlIseUJBQW5CLEVBQThDTyxhQUE5QyxFQUE2REMsV0FBN0QsRUFBMEUsS0FBS0gsS0FBL0U7QUFBd0Y7OzswQkFFL0dILE8sRUFBUztBQUNwQixVQUFJTyx5QkFBeUIsR0FBRyxJQUFoQztBQUVBLFVBQU1DLGlCQUFpQixHQUFHLFlBQTFCO0FBQUEsVUFDTUMsT0FBTyxHQUFHVCxPQUFPLENBQUNVLEtBQVIsQ0FBY0YsaUJBQWQsQ0FEaEI7O0FBR0EsVUFBSUMsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCLFlBQU1FLFVBQVUsR0FBR2YsS0FBSyxDQUFDYSxPQUFELENBQXhCO0FBRUFULFFBQUFBLE9BQU8sR0FBR1csVUFBVixDQUhvQixDQUdFOztBQUV0QixZQUFNQyxhQUFhLEdBQUdaLE9BQU8sQ0FBQ2EsTUFBOUI7O0FBRUEsWUFBSUQsYUFBYSxHQUFHLENBQXBCLEVBQXVCO0FBQ2YsY0FBQWIsSUFBSSxHQUFHZSxvQkFBUDtBQUFBLGNBQ0FDLGdCQURBLEdBQ21CLDhCQUFnQmYsT0FBaEIsQ0FEbkI7QUFBQSxjQUVBQyxTQUZBLEdBRVljLGdCQUZaO0FBQUEsY0FHQWIsV0FIQSxHQUdjLElBSGQ7QUFBQSxjQUlFQyxLQUpGLEdBSVlNLE9BSlosQ0FJRU4sS0FKRjtBQU1OSSxVQUFBQSx5QkFBeUIsR0FBRyxJQUFJVCx5QkFBSixDQUE4QkMsSUFBOUIsRUFBb0NDLE9BQXBDLEVBQTZDQyxTQUE3QyxFQUF3REMsV0FBeEQsRUFBcUVDLEtBQXJFLENBQTVCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSSx5QkFBUDtBQUNEOzs7O0VBNUNvRFMsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBTaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi90b2tlbi9zaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBlbmRPZkxpbmVUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzYW5pdGlzZUNvbnRlbnQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgaW5kZXgpIHtcbiAgICBzdXBlcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KTtcblxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGh0bWwgPSBcIlxcblwiOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHRoaXMuaW5kZXgpOyB9XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHtcbiAgICBsZXQgZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvbiA9IC9cXHJcXG58XFxyfFxcbi8sXG4gICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG5cbiAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB0eXBlID0gZW5kT2ZMaW5lVHlwZSwgLy8vXG4gICAgICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICBzaWduaWZpY2FudCA9IHRydWUsXG4gICAgICAgICAgICAgIHsgaW5kZXggfSA9IG1hdGNoZXM7XG5cbiAgICAgICAgZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuIl19