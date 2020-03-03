'use strict';

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

var types = require('../../types'),
    NonSignificantToken = require('../../token/nonSignificant'),
    contentUtilities = require('../../../utilities/content');

var endOfLineType = types.endOfLineType,
    sanitiseContent = contentUtilities.sanitiseContent;
var type = endOfLineType,
    ///
regularExpression = /\r\n|\r|\n/;

var EndOfLineNonSignificantToken = /*#__PURE__*/function (_NonSignificantToken) {
  _inherits(EndOfLineNonSignificantToken, _NonSignificantToken);

  function EndOfLineNonSignificantToken(type, content, innerHTML, significant, index) {
    var _this;

    _classCallCheck(this, EndOfLineNonSignificantToken);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineNonSignificantToken).call(this, type, content, innerHTML, significant));
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
      var html = '\n'; ///

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
          var sanitisedContent = sanitiseContent(content),
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
}(NonSignificantToken);

module.exports = EndOfLineNonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInJlcXVpcmUiLCJOb25TaWduaWZpY2FudFRva2VuIiwiY29udGVudFV0aWxpdGllcyIsImVuZE9mTGluZVR5cGUiLCJzYW5pdGlzZUNvbnRlbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImlubmVySFRNTCIsInNpZ25pZmljYW50IiwiaW5kZXgiLCJodG1sIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiZW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInNhbml0aXNlZENvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUFyQjtBQUFBLElBQ01DLG1CQUFtQixHQUFHRCxPQUFPLENBQUMsNEJBQUQsQ0FEbkM7QUFBQSxJQUVNRSxnQkFBZ0IsR0FBR0YsT0FBTyxDQUFDLDRCQUFELENBRmhDOztBQUlNLElBQUVHLGFBQUYsR0FBb0JKLEtBQXBCLENBQUVJLGFBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3NCRixnQkFEdEIsQ0FDRUUsZUFERjtBQUdOLElBQU1DLElBQUksR0FBR0YsYUFBYjtBQUFBLElBQTRCO0FBQ3RCRyxpQkFBaUIsR0FBRyxZQUQxQjs7SUFHTUMsNEI7OztBQUNKLHdDQUFZRixJQUFaLEVBQWtCRyxPQUFsQixFQUEyQkMsU0FBM0IsRUFBc0NDLFdBQXRDLEVBQW1EQyxLQUFuRCxFQUEwRDtBQUFBOztBQUFBOztBQUN4RCxzR0FBTU4sSUFBTixFQUFZRyxPQUFaLEVBQXFCQyxTQUFyQixFQUFnQ0MsV0FBaEM7QUFFQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFId0Q7QUFJekQ7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsSUFBSSxHQUFHLElBQWIsQ0FETyxDQUNhOztBQUVwQixhQUFPQSxJQUFQO0FBQ0Q7OzswQkFFS0MsYSxFQUFlQyxXLEVBQWE7QUFBRSxxR0FBbUJQLDRCQUFuQixFQUFpRE0sYUFBakQsRUFBZ0VDLFdBQWhFLEVBQTZFLEtBQUtILEtBQWxGO0FBQTJGOzs7MEJBRWxISCxPLEVBQVM7QUFDcEIsVUFBSU8sNEJBQTRCLEdBQUcsSUFBbkM7QUFFQSxVQUFNQyxLQUFLLEdBQUdSLE9BQU8sQ0FBQ1EsS0FBUixDQUFjVixpQkFBZCxDQUFkOztBQUVBLFVBQUlVLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQUEsWUFDVkwsS0FEVSxHQUNBSyxLQURBLENBQ1ZMLEtBRFU7QUFHbEJILFFBQUFBLE9BQU8sR0FBR1EsS0FBSyxDQUFDLENBQUQsQ0FBZixDQUhrQixDQUdFOztBQUVwQixZQUFNQyxhQUFhLEdBQUdULE9BQU8sQ0FBQ1UsTUFBOUI7O0FBRUEsWUFBSUQsYUFBYSxHQUFHLENBQXBCLEVBQXVCO0FBQ3JCLGNBQU1FLGdCQUFnQixHQUFHZixlQUFlLENBQUNJLE9BQUQsQ0FBeEM7QUFBQSxjQUNNQyxTQUFTLEdBQUdVLGdCQURsQjtBQUFBLGNBQ29DO0FBQzlCVCxVQUFBQSxXQUFXLEdBQUcsS0FGcEI7QUFJQUssVUFBQUEsNEJBQTRCLEdBQUcsSUFBSVIsNEJBQUosQ0FBaUNGLElBQWpDLEVBQXVDRyxPQUF2QyxFQUFnREMsU0FBaEQsRUFBMkRDLFdBQTNELEVBQXdFQyxLQUF4RSxDQUEvQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0ksNEJBQVA7QUFDRDs7OztFQXpDd0NkLG1COztBQTRDM0NtQixNQUFNLENBQUNDLE9BQVAsR0FBaUJkLDRCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi90eXBlcycpLFxuICAgICAgTm9uU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50JyksXG4gICAgICBjb250ZW50VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnQnKTtcblxuY29uc3QgeyBlbmRPZkxpbmVUeXBlIH0gPSB0eXBlcyxcbiAgICAgIHsgc2FuaXRpc2VDb250ZW50IH0gPSBjb250ZW50VXRpbGl0aWVzO1xuXG5jb25zdCB0eXBlID0gZW5kT2ZMaW5lVHlwZSwgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9cXHJcXG58XFxyfFxcbi87XG5cbmNsYXNzIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgaW5kZXgpIHtcbiAgICBzdXBlcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KTtcblxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGh0bWwgPSAnXFxuJzsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHRoaXMuaW5kZXgpOyB9XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHtcbiAgICBsZXQgZW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCBtYXRjaCA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaDtcblxuICAgICAgY29udGVudCA9IG1hdGNoWzBdOyAvLy9cblxuICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50ID0gZmFsc2U7XG5cbiAgICAgICAgZW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47XG4iXX0=