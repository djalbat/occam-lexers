'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../types'),
    NonSignificantToken = require('../../token/nonSignificant'),
    contentUtilities = require('../../../utilities/content');

var endOfLineType = types.endOfLineType,
    sanitiseContent = contentUtilities.sanitiseContent;


var type = endOfLineType,
    ///
regularExpression = /\r\n|\r|\n/;

var EndOfLineNonSignificantToken = function (_NonSignificantToken) {
  _inherits(EndOfLineNonSignificantToken, _NonSignificantToken);

  function EndOfLineNonSignificantToken(type, content, innerHTML, significant, index) {
    _classCallCheck(this, EndOfLineNonSignificantToken);

    var _this = _possibleConstructorReturn(this, (EndOfLineNonSignificantToken.__proto__ || Object.getPrototypeOf(EndOfLineNonSignificantToken)).call(this, type, content, innerHTML, significant));

    _this.index = index;
    return _this;
  }

  _createClass(EndOfLineNonSignificantToken, [{
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
      return _get(EndOfLineNonSignificantToken.prototype.__proto__ || Object.getPrototypeOf(EndOfLineNonSignificantToken.prototype), 'clone', this).call(this, EndOfLineNonSignificantToken, startPosition, endPosition, this.index);
    }
  }], [{
    key: 'match',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50VXRpbGl0aWVzIiwiZW5kT2ZMaW5lVHlwZSIsInNhbml0aXNlQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwiaW5uZXJIVE1MIiwic2lnbmlmaWNhbnQiLCJpbmRleCIsImh0bWwiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJlbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwibWF0Y2giLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwic2FuaXRpc2VkQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGFBQVIsQ0FBZDtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSw0QkFBUixDQUQ1QjtBQUFBLElBRU1FLG1CQUFtQkYsUUFBUSw0QkFBUixDQUZ6Qjs7QUFJTSxJQUFFRyxhQUFGLEdBQW9CSixLQUFwQixDQUFFSSxhQUFGO0FBQUEsSUFDRUMsZUFERixHQUNzQkYsZ0JBRHRCLENBQ0VFLGVBREY7OztBQUdOLElBQU1DLE9BQU9GLGFBQWI7QUFBQSxJQUE0QjtBQUN0Qkcsb0JBQW9CLFlBRDFCOztJQUdNQyw0Qjs7O0FBQ0osd0NBQVlGLElBQVosRUFBa0JHLE9BQWxCLEVBQTJCQyxTQUEzQixFQUFzQ0MsV0FBdEMsRUFBbURDLEtBQW5ELEVBQTBEO0FBQUE7O0FBQUEsNEpBQ2xETixJQURrRCxFQUM1Q0csT0FENEMsRUFDbkNDLFNBRG1DLEVBQ3hCQyxXQUR3Qjs7QUFHeEQsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBSHdEO0FBSXpEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLE9BQU8sSUFBYixDQURPLENBQ2E7O0FBRXBCLGFBQU9BLElBQVA7QUFDRDs7OzBCQUVLQyxhLEVBQWVDLFcsRUFBYTtBQUFFLCtKQUFtQlAsNEJBQW5CLEVBQWlETSxhQUFqRCxFQUFnRUMsV0FBaEUsRUFBNkUsS0FBS0gsS0FBbEY7QUFBMkY7OzswQkFFbEhILE8sRUFBUztBQUNwQixVQUFJTywrQkFBK0IsSUFBbkM7O0FBRUEsVUFBTUMsUUFBUVIsUUFBUVEsS0FBUixDQUFjVixpQkFBZCxDQUFkOztBQUVBLFVBQUlVLFVBQVUsSUFBZCxFQUFvQjtBQUFBLFlBQ1ZMLEtBRFUsR0FDQUssS0FEQSxDQUNWTCxLQURVOzs7QUFHbEJILGtCQUFVUSxNQUFNLENBQU4sQ0FBVixDQUhrQixDQUdFOztBQUVwQixZQUFNQyxnQkFBZ0JULFFBQVFVLE1BQTlCOztBQUVBLFlBQUlELGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQixjQUFNRSxtQkFBbUJmLGdCQUFnQkksT0FBaEIsQ0FBekI7QUFBQSxjQUNNQyxZQUFZVSxnQkFEbEI7QUFBQSxjQUNvQztBQUM5QlQsd0JBQWMsS0FGcEI7O0FBSUFLLHlDQUErQixJQUFJUiw0QkFBSixDQUFpQ0YsSUFBakMsRUFBdUNHLE9BQXZDLEVBQWdEQyxTQUFoRCxFQUEyREMsV0FBM0QsRUFBd0VDLEtBQXhFLENBQS9CO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSSw0QkFBUDtBQUNEOzs7O0VBekN3Q2QsbUI7O0FBNEMzQ21CLE9BQU9DLE9BQVAsR0FBaUJkLDRCQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vdHlwZXMnKSxcbiAgICAgIE5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi90b2tlbi9ub25TaWduaWZpY2FudCcpLFxuICAgICAgY29udGVudFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9jb250ZW50Jyk7XG5cbmNvbnN0IHsgZW5kT2ZMaW5lVHlwZSB9ID0gdHlwZXMsXG4gICAgICB7IHNhbml0aXNlQ29udGVudCB9ID0gY29udGVudFV0aWxpdGllcztcblxuY29uc3QgdHlwZSA9IGVuZE9mTGluZVR5cGUsIC8vL1xuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXFxyXFxufFxccnxcXG4vO1xuXG5jbGFzcyBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIGluZGV4KSB7XG4gICAgc3VwZXIodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCk7XG5cbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gJ1xcbic7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCB0aGlzLmluZGV4KTsgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7XG4gICAgbGV0IGVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2g7XG5cbiAgICAgIGNvbnRlbnQgPSBtYXRjaFswXTsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICBzaWduaWZpY2FudCA9IGZhbHNlO1xuXG4gICAgICAgIGVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gPSBuZXcgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCBpbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuO1xuIl19