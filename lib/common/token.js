'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {
  function Token(content, line, html) {
    _classCallCheck(this, Token);

    this.content = content;
    this.line = line;
    this.html = html;

    this.updatedHTML = null;
  }

  _createClass(Token, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = this.updatedHTML !== null ? this.updatedHTML : this.html;

      return html;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'updateHTML',
    value: function updateHTML(updatedHTML) {
      this.updatedHTML = updatedHTML;
    }
  }, {
    key: 'resetHTML',
    value: function resetHTML() {
      this.updatedHTML = null;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return Token.clone(this, startPosition, endPosition, Token);
    }
  }], [{
    key: 'clone',
    value: function clone(token) {
      var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : token.getLength();
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Token;

      var clonedToken = null;

      if (startPosition !== endPosition) {
        var line = token.getLine();

        var content = token.getContent();

        content = content.substring(startPosition, endPosition);

        clonedToken = Class.fromContentAndLine(content, line, Class);
      }

      return clonedToken;
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Token;

      var html = Class.htmlFromContent(content),
          token = new Class(content, line, html);

      return token;
    }
  }, {
    key: 'fromToken',
    value: function fromToken(token) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Token;

      var content = token.getContent(),
          line = token.getLine();

      token = Class.fromContentAndLine(content, line, Class);

      return token;
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var html = content; ///

      html = Token.sanitiseHTML(html); ///

      return html;
    }
  }, {
    key: 'sanitiseHTML',
    value: function sanitiseHTML(html) {
      var sanitisedHTML = html.replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

      return sanitisedHTML;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJ1cGRhdGVkSFRNTCIsImxlbmd0aCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwidG9rZW4iLCJnZXRMZW5ndGgiLCJDbGFzcyIsImNsb25lZFRva2VuIiwiZ2V0TGluZSIsImdldENvbnRlbnQiLCJzdWJzdHJpbmciLCJmcm9tQ29udGVudEFuZExpbmUiLCJodG1sRnJvbUNvbnRlbnQiLCJzYW5pdGlzZUhUTUwiLCJzYW5pdGlzZWRIVE1MIiwicmVwbGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSztBQUNKLGlCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaOztBQUVBLFNBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0gsT0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTUMsT0FBUSxLQUFLQyxXQUFMLEtBQXFCLElBQXRCLEdBQ0csS0FBS0EsV0FEUixHQUVLLEtBQUtELElBRnZCOztBQUlBLGFBQU9BLElBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixPQUFMLENBQWFJLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7OzsrQkFFVUQsVyxFQUFhO0FBQ3RCLFdBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtBLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDs7OzBCQUVLRSxhLEVBQWVDLFcsRUFBYTtBQUFFLGFBQU9QLE1BQU1RLEtBQU4sQ0FBWSxJQUFaLEVBQWtCRixhQUFsQixFQUFpQ0MsV0FBakMsRUFBOENQLEtBQTlDLENBQVA7QUFBOEQ7OzswQkFFckZTLEssRUFBMEU7QUFBQSxVQUFuRUgsYUFBbUUsdUVBQW5ELENBQW1EO0FBQUEsVUFBaERDLFdBQWdELHVFQUFsQ0UsTUFBTUMsU0FBTixFQUFrQztBQUFBLFVBQWZDLEtBQWUsdUVBQVBYLEtBQU87O0FBQ3JGLFVBQUlZLGNBQWMsSUFBbEI7O0FBRUEsVUFBSU4sa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFNTCxPQUFPTyxNQUFNSSxPQUFOLEVBQWI7O0FBRUEsWUFBSVosVUFBVVEsTUFBTUssVUFBTixFQUFkOztBQUVBYixrQkFBVUEsUUFBUWMsU0FBUixDQUFrQlQsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVY7O0FBRUFLLHNCQUFjRCxNQUFNSyxrQkFBTixDQUF5QmYsT0FBekIsRUFBa0NDLElBQWxDLEVBQXdDUyxLQUF4QyxDQUFkO0FBQ0Q7O0FBRUQsYUFBT0MsV0FBUDtBQUNEOzs7dUNBRXlCWCxPLEVBQVNDLEksRUFBcUI7QUFBQSxVQUFmUyxLQUFlLHVFQUFQWCxLQUFPOztBQUN0RCxVQUFNRyxPQUFPUSxNQUFNTSxlQUFOLENBQXNCaEIsT0FBdEIsQ0FBYjtBQUFBLFVBQ01RLFFBQVEsSUFBSUUsS0FBSixDQUFVVixPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsSUFBekIsQ0FEZDs7QUFHQSxhQUFPTSxLQUFQO0FBQ0Q7Ozs4QkFFZ0JBLEssRUFBc0I7QUFBQSxVQUFmRSxLQUFlLHVFQUFQWCxLQUFPOztBQUNyQyxVQUFNQyxVQUFVUSxNQUFNSyxVQUFOLEVBQWhCO0FBQUEsVUFDTVosT0FBT08sTUFBTUksT0FBTixFQURiOztBQUdBSixjQUFRRSxNQUFNSyxrQkFBTixDQUF5QmYsT0FBekIsRUFBa0NDLElBQWxDLEVBQXdDUyxLQUF4QyxDQUFSOztBQUVBLGFBQU9GLEtBQVA7QUFDRDs7O29DQUVzQlIsTyxFQUFTO0FBQzlCLFVBQUlFLE9BQU9GLE9BQVgsQ0FEOEIsQ0FDVjs7QUFFcEJFLGFBQU9ILE1BQU1rQixZQUFOLENBQW1CZixJQUFuQixDQUFQLENBSDhCLENBR0k7O0FBRWxDLGFBQU9BLElBQVA7QUFDRDs7O2lDQUVtQkEsSSxFQUFNO0FBQ3hCLFVBQU1nQixnQkFBZ0JoQixLQUFLaUIsT0FBTCxDQUFhLEdBQWIsRUFBaUIsT0FBakIsRUFBMEJBLE9BQTFCLENBQWtDLEdBQWxDLEVBQXVDLE1BQXZDLEVBQStDQSxPQUEvQyxDQUF1RCxHQUF2RCxFQUE0RCxNQUE1RCxDQUF0Qjs7QUFFQSxhQUFPRCxhQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCdEIsS0FBakIiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgaHRtbCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xuXG4gICAgdGhpcy51cGRhdGVkSFRNTCA9IG51bGw7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgY29uc3QgaHRtbCA9ICh0aGlzLnVwZGF0ZWRIVE1MICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlZEhUTUwgOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG5cbiAgdXBkYXRlSFRNTCh1cGRhdGVkSFRNTCkge1xuICAgIHRoaXMudXBkYXRlZEhUTUwgPSB1cGRhdGVkSFRNTDtcbiAgfVxuXG4gIHJlc2V0SFRNTCgpIHtcbiAgICB0aGlzLnVwZGF0ZWRIVE1MID0gbnVsbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgVG9rZW4pOyB9XG5cbiAgc3RhdGljIGNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSB0b2tlbi5nZXRMZW5ndGgoKSwgQ2xhc3MgPSBUb2tlbikge1xuICAgIGxldCBjbG9uZWRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IGxpbmUgPSB0b2tlbi5nZXRMaW5lKCk7XG5cbiAgICAgIGxldCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgICBjbG9uZWRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZFRva2VuO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzID0gVG9rZW4pIHtcbiAgICBjb25zdCBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbih0b2tlbiwgQ2xhc3MgPSBUb2tlbikge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZSA9IHRva2VuLmdldExpbmUoKTtcblxuICAgIHRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzKTtcbiAgICBcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBsZXQgaHRtbCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgaHRtbCA9IFRva2VuLnNhbml0aXNlSFRNTChodG1sKTsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgc2FuaXRpc2VIVE1MKGh0bWwpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRIVE1MID0gaHRtbC5yZXBsYWNlKC8mLywnJmFtcDsnKS5yZXBsYWNlKC88LywgJyZsdDsnKS5yZXBsYWNlKC8+LywgJyZndDsnKTtcblxuICAgIHJldHVybiBzYW5pdGlzZWRIVE1MO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG4iXX0=