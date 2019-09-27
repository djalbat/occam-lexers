'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../types'),
    SignificantToken = require('../../token/significant'),
    contentUtilities = require('../../../utilities/content');

var endOfLineType = types.endOfLineType,
    sanitiseContent = contentUtilities.sanitiseContent;


var type = endOfLineType,
    ///
regularExpression = /\r\n|\r|\n/;

var EndOfLineSignificantToken = function (_SignificantToken) {
  _inherits(EndOfLineSignificantToken, _SignificantToken);

  function EndOfLineSignificantToken(type, content, innerHTML, significant, index) {
    _classCallCheck(this, EndOfLineSignificantToken);

    var _this = _possibleConstructorReturn(this, (EndOfLineSignificantToken.__proto__ || Object.getPrototypeOf(EndOfLineSignificantToken)).call(this, type, content, innerHTML, significant));

    _this.index = index;
    return _this;
  }

  _createClass(EndOfLineSignificantToken, [{
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: 'asHTML',
    value: function asHTML() {
      var html = '\n'; ///

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(EndOfLineSignificantToken.prototype.__proto__ || Object.getPrototypeOf(EndOfLineSignificantToken.prototype), 'clone', this).call(this, EndOfLineSignificantToken, startPosition, endPosition, this.index);
    }
  }], [{
    key: 'match',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50VXRpbGl0aWVzIiwiZW5kT2ZMaW5lVHlwZSIsInNhbml0aXNlQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwiaW5uZXJIVE1MIiwic2lnbmlmaWNhbnQiLCJpbmRleCIsImh0bWwiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwibWF0Y2giLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwic2FuaXRpc2VkQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGFBQVIsQ0FBZDtBQUFBLElBQ01DLG1CQUFtQkQsUUFBUSx5QkFBUixDQUR6QjtBQUFBLElBRU1FLG1CQUFtQkYsUUFBUSw0QkFBUixDQUZ6Qjs7QUFJTSxJQUFFRyxhQUFGLEdBQW9CSixLQUFwQixDQUFFSSxhQUFGO0FBQUEsSUFDRUMsZUFERixHQUNzQkYsZ0JBRHRCLENBQ0VFLGVBREY7OztBQUdOLElBQU1DLE9BQU9GLGFBQWI7QUFBQSxJQUE0QjtBQUN0Qkcsb0JBQW9CLFlBRDFCOztJQUdNQyx5Qjs7O0FBQ0oscUNBQVlGLElBQVosRUFBa0JHLE9BQWxCLEVBQTJCQyxTQUEzQixFQUFzQ0MsV0FBdEMsRUFBbURDLEtBQW5ELEVBQTBEO0FBQUE7O0FBQUEsc0pBQ2xETixJQURrRCxFQUM1Q0csT0FENEMsRUFDbkNDLFNBRG1DLEVBQ3hCQyxXQUR3Qjs7QUFHeEQsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBSHdEO0FBSXpEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLE9BQU8sSUFBYixDQURPLENBQ2E7O0FBRXBCLGFBQU9BLElBQVA7QUFDRDs7OzBCQUVLQyxhLEVBQWVDLFcsRUFBYTtBQUFFLHlKQUFtQlAseUJBQW5CLEVBQThDTSxhQUE5QyxFQUE2REMsV0FBN0QsRUFBMEUsS0FBS0gsS0FBL0U7QUFBd0Y7OzswQkFFL0dILE8sRUFBUztBQUNwQixVQUFJTyw0QkFBNEIsSUFBaEM7O0FBRUEsVUFBTUMsUUFBUVIsUUFBUVEsS0FBUixDQUFjVixpQkFBZCxDQUFkOztBQUVBLFVBQUlVLFVBQVUsSUFBZCxFQUFvQjtBQUFBLFlBQ1ZMLEtBRFUsR0FDQUssS0FEQSxDQUNWTCxLQURVOzs7QUFHbEJILGtCQUFVUSxNQUFNLENBQU4sQ0FBVixDQUhrQixDQUdFOztBQUVwQixZQUFNQyxnQkFBZ0JULFFBQVFVLE1BQTlCOztBQUVBLFlBQUlELGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQixjQUFNRSxtQkFBbUJmLGdCQUFnQkksT0FBaEIsQ0FBekI7QUFBQSxjQUNNQyxZQUFZVSxnQkFEbEI7QUFBQSxjQUNvQztBQUM5QlQsd0JBQWMsSUFGcEI7O0FBSUFLLHNDQUE0QixJQUFJUix5QkFBSixDQUE4QkYsSUFBOUIsRUFBb0NHLE9BQXBDLEVBQTZDQyxTQUE3QyxFQUF3REMsV0FBeEQsRUFBcUVDLEtBQXJFLENBQTVCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSSx5QkFBUDtBQUNEOzs7O0VBekNxQ2QsZ0I7O0FBNEN4Q21CLE9BQU9DLE9BQVAsR0FBaUJkLHlCQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vdHlwZXMnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi90b2tlbi9zaWduaWZpY2FudCcpLFxuICAgICAgY29udGVudFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9jb250ZW50Jyk7XG5cbmNvbnN0IHsgZW5kT2ZMaW5lVHlwZSB9ID0gdHlwZXMsXG4gICAgICB7IHNhbml0aXNlQ29udGVudCB9ID0gY29udGVudFV0aWxpdGllcztcblxuY29uc3QgdHlwZSA9IGVuZE9mTGluZVR5cGUsIC8vL1xuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXFxyXFxufFxccnxcXG4vO1xuXG5jbGFzcyBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIGluZGV4KSB7XG4gICAgc3VwZXIodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCk7XG5cbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gJ1xcbic7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgdGhpcy5pbmRleCk7IH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkge1xuICAgIGxldCBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2ggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IG1hdGNoO1xuXG4gICAgICBjb250ZW50ID0gbWF0Y2hbMF07IC8vL1xuXG4gICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG5cbiAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnQgPSB0cnVlO1xuXG4gICAgICAgIGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gPSBuZXcgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCBpbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuO1xuIl19