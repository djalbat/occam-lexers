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
      var html = this.updateHTML !== null ? this.updatedHTML : this.html;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJ1cGRhdGVkSFRNTCIsInVwZGF0ZUhUTUwiLCJsZW5ndGgiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsInRva2VuIiwiZ2V0TGVuZ3RoIiwiQ2xhc3MiLCJjbG9uZWRUb2tlbiIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwic3Vic3RyaW5nIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwiaHRtbEZyb21Db250ZW50Iiwic2FuaXRpc2VIVE1MIiwic2FuaXRpc2VkSFRNTCIsInJlcGxhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEs7QUFDSixpQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtILE9BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlDLE9BQVEsS0FBS0UsVUFBTCxLQUFvQixJQUFyQixHQUNHLEtBQUtELFdBRFIsR0FFSyxLQUFLRCxJQUZyQjs7QUFJQSxhQUFPQSxJQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0YsT0FBTCxDQUFhSyxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7K0JBRVVGLFcsRUFBYTtBQUN0QixXQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLQSxXQUFMLEdBQW1CLElBQW5CO0FBQ0Q7OzswQkFFS0csYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPUixNQUFNUyxLQUFOLENBQVksSUFBWixFQUFrQkYsYUFBbEIsRUFBaUNDLFdBQWpDLEVBQThDUixLQUE5QyxDQUFQO0FBQThEOzs7MEJBRXJGVSxLLEVBQWtFO0FBQUEsVUFBM0RILGFBQTJELHVFQUEzQyxDQUEyQztBQUFBLFVBQXhDQyxXQUF3Qyx1RUFBMUJFLE1BQU1DLFNBQU4sRUFBMEI7QUFBQSxVQUFQQyxLQUFPOztBQUM3RSxVQUFJQyxjQUFjLElBQWxCOztBQUVBLFVBQUlOLGtCQUFrQkMsV0FBdEIsRUFBbUM7QUFDakMsWUFBSVAsVUFBVVMsTUFBTUksVUFBTixFQUFkO0FBQUEsWUFDSVosT0FBT1EsTUFBTUssT0FBTixFQURYOztBQUdBZCxrQkFBVUEsUUFBUWUsU0FBUixDQUFrQlQsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVY7O0FBRUFLLHNCQUFjRCxNQUFNSyxrQkFBTixDQUF5QmhCLE9BQXpCLEVBQWtDQyxJQUFsQyxFQUF3Q1UsS0FBeEMsQ0FBZDtBQUNEOztBQUVELGFBQU9DLFdBQVA7QUFDRDs7O3VDQUV5QlosTyxFQUFTQyxJLEVBQXFCO0FBQUEsVUFBZlUsS0FBZSx1RUFBUFosS0FBTzs7QUFDdEQsVUFBSUcsT0FBT1MsTUFBTU0sZUFBTixDQUFzQmpCLE9BQXRCLENBQVg7QUFBQSxVQUNJUyxRQUFRLElBQUlFLEtBQUosQ0FBVVgsT0FBVixFQUFtQkMsSUFBbkIsRUFBeUJDLElBQXpCLENBRFo7O0FBR0EsYUFBT08sS0FBUDtBQUNEOzs7OEJBRWdCQSxLLEVBQXNCO0FBQUEsVUFBZkUsS0FBZSx1RUFBUFosS0FBTzs7QUFDckMsVUFBSUMsVUFBVVMsTUFBTUksVUFBTixFQUFkO0FBQUEsVUFDSVosT0FBT1EsTUFBTUssT0FBTixFQURYOztBQUdBTCxjQUFRRSxNQUFNSyxrQkFBTixDQUF5QmhCLE9BQXpCLEVBQWtDQyxJQUFsQyxFQUF3Q1UsS0FBeEMsQ0FBUjs7QUFFQSxhQUFPRixLQUFQO0FBQ0Q7OztvQ0FFc0JULE8sRUFBUztBQUM5QixVQUFJRSxPQUFPRixPQUFYLENBRDhCLENBQ1Y7O0FBRXBCRSxhQUFPSCxNQUFNbUIsWUFBTixDQUFtQmhCLElBQW5CLENBQVAsQ0FIOEIsQ0FHSTs7QUFFbEMsYUFBT0EsSUFBUDtBQUNEOzs7aUNBRW1CQSxJLEVBQU07QUFDeEIsVUFBSWlCLGdCQUFnQmpCLEtBQUtrQixPQUFMLENBQWEsR0FBYixFQUFpQixPQUFqQixFQUEwQkEsT0FBMUIsQ0FBa0MsR0FBbEMsRUFBdUMsTUFBdkMsRUFBK0NBLE9BQS9DLENBQXVELEdBQXZELEVBQTRELE1BQTVELENBQXBCOztBQUVBLGFBQU9ELGFBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJ2QixLQUFqQiIsImZpbGUiOiJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCBodG1sKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMuaHRtbCA9IGh0bWw7XG5cbiAgICB0aGlzLnVwZGF0ZWRIVE1MID0gbnVsbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgaHRtbCA9ICh0aGlzLnVwZGF0ZUhUTUwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlZEhUTUwgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWw7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuICBcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuXG4gIHVwZGF0ZUhUTUwodXBkYXRlZEhUTUwpIHtcbiAgICB0aGlzLnVwZGF0ZWRIVE1MID0gdXBkYXRlZEhUTUw7XG4gIH1cblxuICByZXNldEhUTUwoKSB7XG4gICAgdGhpcy51cGRhdGVkSFRNTCA9IG51bGw7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gVG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIFRva2VuKTsgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gdG9rZW4uZ2V0TGVuZ3RoKCksIENsYXNzKSB7XG4gICAgdmFyIGNsb25lZFRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgdmFyIGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZSA9IHRva2VuLmdldExpbmUoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkVG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWRUb2tlbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IFRva2VuKSB7XG4gICAgdmFyIGh0bWwgPSBDbGFzcy5odG1sRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbih0b2tlbiwgQ2xhc3MgPSBUb2tlbikge1xuICAgIHZhciBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICBsaW5lID0gdG9rZW4uZ2V0TGluZSgpO1xuXG4gICAgdG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MpO1xuICAgIFxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBodG1sRnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBodG1sID0gY29udGVudDsgLy8vXG5cbiAgICBodG1sID0gVG9rZW4uc2FuaXRpc2VIVE1MKGh0bWwpOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBzYW5pdGlzZUhUTUwoaHRtbCkge1xuICAgIHZhciBzYW5pdGlzZWRIVE1MID0gaHRtbC5yZXBsYWNlKC8mLywnJmFtcDsnKS5yZXBsYWNlKC88LywgJyZsdDsnKS5yZXBsYWNlKC8+LywgJyZndDsnKTtcblxuICAgIHJldHVybiBzYW5pdGlzZWRIVE1MO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG4iXX0=