"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _significant = _interopRequireDefault(require("../../token/significant"));

var _types = require("../../types");

var _content = require("../../../utilities/content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsInR5cGUiLCJjb250ZW50IiwiaW5uZXJIVE1MIiwic2lnbmlmaWNhbnQiLCJpbmRleCIsImh0bWwiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImVuZE9mTGluZVR5cGUiLCJzYW5pdGlzZWRDb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7SUFFYUUseUI7Ozs7O0FBQ25CLHFDQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsU0FBM0IsRUFBc0NDLFdBQXRDLEVBQW1EQyxLQUFuRCxFQUEwRDtBQUFBOztBQUFBOztBQUN4RCw4QkFBTUosSUFBTixFQUFZQyxPQUFaLEVBQXFCQyxTQUFyQixFQUFnQ0MsV0FBaEM7QUFFQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFId0Q7QUFJekQ7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsSUFBSSxHQUFHLElBQWIsQ0FETyxDQUNhOztBQUVwQixhQUFPQSxJQUFQO0FBQ0Q7OzswQkFFS0MsYSxFQUFlQyxXLEVBQWE7QUFBRSxrR0FBbUJSLHlCQUFuQixFQUE4Q08sYUFBOUMsRUFBNkRDLFdBQTdELEVBQTBFLEtBQUtILEtBQS9FO0FBQXdGOzs7MEJBRS9HSCxPLEVBQVM7QUFDcEIsVUFBSU8seUJBQXlCLEdBQUcsSUFBaEM7QUFFQSxVQUFNQyxpQkFBaUIsR0FBRyxZQUExQjtBQUFBLFVBQ01DLE9BQU8sR0FBR1QsT0FBTyxDQUFDVSxLQUFSLENBQWNGLGlCQUFkLENBRGhCOztBQUdBLFVBQUlDLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQixZQUFNRSxVQUFVLEdBQUdmLEtBQUssQ0FBQ2EsT0FBRCxDQUF4QjtBQUVBVCxRQUFBQSxPQUFPLEdBQUdXLFVBQVYsQ0FIb0IsQ0FHRTs7QUFFdEIsWUFBTUMsYUFBYSxHQUFHWixPQUFPLENBQUNhLE1BQTlCOztBQUVBLFlBQUlELGFBQWEsR0FBRyxDQUFwQixFQUF1QjtBQUNmLGNBQUFiLElBQUksR0FBR2Usb0JBQVA7QUFBQSxjQUNBQyxnQkFEQSxHQUNtQiw4QkFBZ0JmLE9BQWhCLENBRG5CO0FBQUEsY0FFQUMsU0FGQSxHQUVZYyxnQkFGWjtBQUFBLGNBR0FiLFdBSEEsR0FHYyxJQUhkO0FBQUEsY0FJRUMsS0FKRixHQUlZTSxPQUpaLENBSUVOLEtBSkY7QUFNTkksVUFBQUEseUJBQXlCLEdBQUcsSUFBSVQseUJBQUosQ0FBOEJDLElBQTlCLEVBQW9DQyxPQUFwQyxFQUE2Q0MsU0FBN0MsRUFBd0RDLFdBQXhELEVBQXFFQyxLQUFyRSxDQUE1QjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0kseUJBQVA7QUFDRDs7OztFQTVDb0RTLHVCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgZW5kT2ZMaW5lVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc2FuaXRpc2VDb250ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIGluZGV4KSB7XG4gICAgc3VwZXIodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCk7XG5cbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gXCJcXG5cIjsgIC8vL1xuICAgIFxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCB0aGlzLmluZGV4KTsgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7XG4gICAgbGV0IGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb24gPSAvXFxyXFxufFxccnxcXG4vLFxuICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGVuZE9mTGluZVR5cGUsIC8vL1xuICAgICAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnQgPSB0cnVlLFxuICAgICAgICAgICAgICB7IGluZGV4IH0gPSBtYXRjaGVzO1xuXG4gICAgICAgIGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gPSBuZXcgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCBpbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW47XG4gIH1cbn1cbiJdfQ==