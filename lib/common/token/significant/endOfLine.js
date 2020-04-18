'use strict';

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

var types = require('../../types'),
    SignificantToken = require('../../token/significant'),
    contentUtilities = require('../../../utilities/content');

var endOfLineType = types.endOfLineType,
    sanitiseContent = contentUtilities.sanitiseContent;
var type = endOfLineType,
    ///
regularExpression = /\r\n|\r|\n/;

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
      var html = '\n'; ///

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
      var match = content.match(regularExpression);

      if (match !== null) {
        var index = match.index;
        content = match[0]; ///

        var contentLength = content.length;

        if (contentLength > 0) {
          var sanitisedContent = sanitiseContent(content),
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
}(SignificantToken);

module.exports = EndOfLineSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwiY29udGVudFV0aWxpdGllcyIsImVuZE9mTGluZVR5cGUiLCJzYW5pdGlzZUNvbnRlbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImlubmVySFRNTCIsInNpZ25pZmljYW50IiwiaW5kZXgiLCJodG1sIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInNhbml0aXNlZENvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBckI7QUFBQSxJQUNNQyxnQkFBZ0IsR0FBR0QsT0FBTyxDQUFDLHlCQUFELENBRGhDO0FBQUEsSUFFTUUsZ0JBQWdCLEdBQUdGLE9BQU8sQ0FBQyw0QkFBRCxDQUZoQzs7QUFJTSxJQUFFRyxhQUFGLEdBQW9CSixLQUFwQixDQUFFSSxhQUFGO0FBQUEsSUFDRUMsZUFERixHQUNzQkYsZ0JBRHRCLENBQ0VFLGVBREY7QUFHTixJQUFNQyxJQUFJLEdBQUdGLGFBQWI7QUFBQSxJQUE0QjtBQUN0QkcsaUJBQWlCLEdBQUcsWUFEMUI7O0lBR01DLHlCOzs7OztBQUNKLHFDQUFZRixJQUFaLEVBQWtCRyxPQUFsQixFQUEyQkMsU0FBM0IsRUFBc0NDLFdBQXRDLEVBQW1EQyxLQUFuRCxFQUEwRDtBQUFBOztBQUFBOztBQUN4RCw4QkFBTU4sSUFBTixFQUFZRyxPQUFaLEVBQXFCQyxTQUFyQixFQUFnQ0MsV0FBaEM7QUFFQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFId0Q7QUFJekQ7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsSUFBSSxHQUFHLElBQWIsQ0FETyxDQUNhOztBQUVwQixhQUFPQSxJQUFQO0FBQ0Q7OzswQkFFS0MsYSxFQUFlQyxXLEVBQWE7QUFBRSxrR0FBbUJQLHlCQUFuQixFQUE4Q00sYUFBOUMsRUFBNkRDLFdBQTdELEVBQTBFLEtBQUtILEtBQS9FO0FBQXdGOzs7MEJBRS9HSCxPLEVBQVM7QUFDcEIsVUFBSU8seUJBQXlCLEdBQUcsSUFBaEM7QUFFQSxVQUFNQyxLQUFLLEdBQUdSLE9BQU8sQ0FBQ1EsS0FBUixDQUFjVixpQkFBZCxDQUFkOztBQUVBLFVBQUlVLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQUEsWUFDVkwsS0FEVSxHQUNBSyxLQURBLENBQ1ZMLEtBRFU7QUFHbEJILFFBQUFBLE9BQU8sR0FBR1EsS0FBSyxDQUFDLENBQUQsQ0FBZixDQUhrQixDQUdFOztBQUVwQixZQUFNQyxhQUFhLEdBQUdULE9BQU8sQ0FBQ1UsTUFBOUI7O0FBRUEsWUFBSUQsYUFBYSxHQUFHLENBQXBCLEVBQXVCO0FBQ3JCLGNBQU1FLGdCQUFnQixHQUFHZixlQUFlLENBQUNJLE9BQUQsQ0FBeEM7QUFBQSxjQUNNQyxTQUFTLEdBQUdVLGdCQURsQjtBQUFBLGNBQ29DO0FBQzlCVCxVQUFBQSxXQUFXLEdBQUcsSUFGcEI7QUFJQUssVUFBQUEseUJBQXlCLEdBQUcsSUFBSVIseUJBQUosQ0FBOEJGLElBQTlCLEVBQW9DRyxPQUFwQyxFQUE2Q0MsU0FBN0MsRUFBd0RDLFdBQXhELEVBQXFFQyxLQUFyRSxDQUE1QjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0kseUJBQVA7QUFDRDs7OztFQXpDcUNkLGdCOztBQTRDeENtQixNQUFNLENBQUNDLE9BQVAsR0FBaUJkLHlCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi90eXBlcycpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL3Rva2VuL3NpZ25pZmljYW50JyksXG4gICAgICBjb250ZW50VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnQnKTtcblxuY29uc3QgeyBlbmRPZkxpbmVUeXBlIH0gPSB0eXBlcyxcbiAgICAgIHsgc2FuaXRpc2VDb250ZW50IH0gPSBjb250ZW50VXRpbGl0aWVzO1xuXG5jb25zdCB0eXBlID0gZW5kT2ZMaW5lVHlwZSwgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9cXHJcXG58XFxyfFxcbi87XG5cbmNsYXNzIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgaW5kZXgpIHtcbiAgICBzdXBlcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KTtcblxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGh0bWwgPSAnXFxuJzsgIC8vL1xuICAgIFxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCB0aGlzLmluZGV4KTsgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7XG4gICAgbGV0IGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2g7XG5cbiAgICAgIGNvbnRlbnQgPSBtYXRjaFswXTsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICBzaWduaWZpY2FudCA9IHRydWU7XG5cbiAgICAgICAgZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW47XG4iXX0=