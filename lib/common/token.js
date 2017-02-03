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
      var Class = arguments[3];

      var clonedToken = null;

      if (startPosition !== endPosition) {
        var content = token.getContent(),
            line = token.getLine();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJ1cGRhdGVkSFRNTCIsImxlbmd0aCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwidG9rZW4iLCJnZXRMZW5ndGgiLCJDbGFzcyIsImNsb25lZFRva2VuIiwiZ2V0Q29udGVudCIsImdldExpbmUiLCJzdWJzdHJpbmciLCJmcm9tQ29udGVudEFuZExpbmUiLCJodG1sRnJvbUNvbnRlbnQiLCJzYW5pdGlzZUhUTUwiLCJzYW5pdGlzZWRIVE1MIiwicmVwbGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSztBQUNKLGlCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaOztBQUVBLFNBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0gsT0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUMsT0FBUSxLQUFLQyxXQUFMLEtBQXFCLElBQXRCLEdBQ0csS0FBS0EsV0FEUixHQUVLLEtBQUtELElBRnJCOztBQUlBLGFBQU9BLElBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixPQUFMLENBQWFJLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7OzsrQkFFVUQsVyxFQUFhO0FBQ3RCLFdBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtBLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDs7OzBCQUVLRSxhLEVBQWVDLFcsRUFBYTtBQUFFLGFBQU9QLE1BQU1RLEtBQU4sQ0FBWSxJQUFaLEVBQWtCRixhQUFsQixFQUFpQ0MsV0FBakMsRUFBOENQLEtBQTlDLENBQVA7QUFBOEQ7OzswQkFFckZTLEssRUFBa0U7QUFBQSxVQUEzREgsYUFBMkQsdUVBQTNDLENBQTJDO0FBQUEsVUFBeENDLFdBQXdDLHVFQUExQkUsTUFBTUMsU0FBTixFQUEwQjtBQUFBLFVBQVBDLEtBQU87O0FBQzdFLFVBQUlDLGNBQWMsSUFBbEI7O0FBRUEsVUFBSU4sa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFJTixVQUFVUSxNQUFNSSxVQUFOLEVBQWQ7QUFBQSxZQUNJWCxPQUFPTyxNQUFNSyxPQUFOLEVBRFg7O0FBR0FiLGtCQUFVQSxRQUFRYyxTQUFSLENBQWtCVCxhQUFsQixFQUFpQ0MsV0FBakMsQ0FBVjs7QUFFQUssc0JBQWNELE1BQU1LLGtCQUFOLENBQXlCZixPQUF6QixFQUFrQ0MsSUFBbEMsRUFBd0NTLEtBQXhDLENBQWQ7QUFDRDs7QUFFRCxhQUFPQyxXQUFQO0FBQ0Q7Ozt1Q0FFeUJYLE8sRUFBU0MsSSxFQUFxQjtBQUFBLFVBQWZTLEtBQWUsdUVBQVBYLEtBQU87O0FBQ3RELFVBQUlHLE9BQU9RLE1BQU1NLGVBQU4sQ0FBc0JoQixPQUF0QixDQUFYO0FBQUEsVUFDSVEsUUFBUSxJQUFJRSxLQUFKLENBQVVWLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixDQURaOztBQUdBLGFBQU9NLEtBQVA7QUFDRDs7OzhCQUVnQkEsSyxFQUFzQjtBQUFBLFVBQWZFLEtBQWUsdUVBQVBYLEtBQU87O0FBQ3JDLFVBQUlDLFVBQVVRLE1BQU1JLFVBQU4sRUFBZDtBQUFBLFVBQ0lYLE9BQU9PLE1BQU1LLE9BQU4sRUFEWDs7QUFHQUwsY0FBUUUsTUFBTUssa0JBQU4sQ0FBeUJmLE9BQXpCLEVBQWtDQyxJQUFsQyxFQUF3Q1MsS0FBeEMsQ0FBUjs7QUFFQSxhQUFPRixLQUFQO0FBQ0Q7OztvQ0FFc0JSLE8sRUFBUztBQUM5QixVQUFJRSxPQUFPRixPQUFYLENBRDhCLENBQ1Y7O0FBRXBCRSxhQUFPSCxNQUFNa0IsWUFBTixDQUFtQmYsSUFBbkIsQ0FBUCxDQUg4QixDQUdJOztBQUVsQyxhQUFPQSxJQUFQO0FBQ0Q7OztpQ0FFbUJBLEksRUFBTTtBQUN4QixVQUFJZ0IsZ0JBQWdCaEIsS0FBS2lCLE9BQUwsQ0FBYSxHQUFiLEVBQWlCLE9BQWpCLEVBQTBCQSxPQUExQixDQUFrQyxHQUFsQyxFQUF1QyxNQUF2QyxFQUErQ0EsT0FBL0MsQ0FBdUQsR0FBdkQsRUFBNEQsTUFBNUQsQ0FBcEI7O0FBRUEsYUFBT0QsYUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQnRCLEtBQWpCIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy5odG1sID0gaHRtbDtcblxuICAgIHRoaXMudXBkYXRlZEhUTUwgPSBudWxsO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHZhciBodG1sID0gKHRoaXMudXBkYXRlZEhUTUwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlZEhUTUwgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWw7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuICBcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuXG4gIHVwZGF0ZUhUTUwodXBkYXRlZEhUTUwpIHtcbiAgICB0aGlzLnVwZGF0ZWRIVE1MID0gdXBkYXRlZEhUTUw7XG4gIH1cblxuICByZXNldEhUTUwoKSB7XG4gICAgdGhpcy51cGRhdGVkSFRNTCA9IG51bGw7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gVG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIFRva2VuKTsgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gdG9rZW4uZ2V0TGVuZ3RoKCksIENsYXNzKSB7XG4gICAgdmFyIGNsb25lZFRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgdmFyIGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZSA9IHRva2VuLmdldExpbmUoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkVG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWRUb2tlbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IFRva2VuKSB7XG4gICAgdmFyIGh0bWwgPSBDbGFzcy5odG1sRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbih0b2tlbiwgQ2xhc3MgPSBUb2tlbikge1xuICAgIHZhciBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICBsaW5lID0gdG9rZW4uZ2V0TGluZSgpO1xuXG4gICAgdG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MpO1xuICAgIFxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBodG1sRnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBodG1sID0gY29udGVudDsgLy8vXG5cbiAgICBodG1sID0gVG9rZW4uc2FuaXRpc2VIVE1MKGh0bWwpOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBzYW5pdGlzZUhUTUwoaHRtbCkge1xuICAgIHZhciBzYW5pdGlzZWRIVE1MID0gaHRtbC5yZXBsYWNlKC8mLywnJmFtcDsnKS5yZXBsYWNlKC88LywgJyZsdDsnKS5yZXBsYWNlKC8+LywgJyZndDsnKTtcblxuICAgIHJldHVybiBzYW5pdGlzZWRIVE1MO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG4iXX0=