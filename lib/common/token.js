'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {
  function Token(content, line, html) {
    _classCallCheck(this, Token);

    this.content = content;
    this.line = line;
    this.html = html;
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
      return this.html;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(token) {
      var tokens = this.line.getTokens(),
          index = tokens.indexOf(this);

      tokens.splice(index, 1, token);
    }
  }, {
    key: 'toPosition',
    value: function toPosition(position) {
      return Token.toPosition(this, position);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(position) {
      return Token.fromPosition(this, position);
    }
  }], [{
    key: 'toPosition',
    value: function toPosition(token, position) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Token;

      var tokenToPosition = null;

      if (position !== 0) {
        var content = token.getContent(),
            line = token.getLine();

        content = content.substring(0, position);

        tokenToPosition = Class.fromContentAndLine(content, line);
      }

      return tokenToPosition;
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(token, position) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Token;

      var tokenFromPosition = null,
          tokenLength = token.getLength();

      if (position !== tokenLength) {
        var content = token.getContent(),
            line = token.getLine();

        content = content.substring(position);

        tokenFromPosition = Class.fromContentAndLine(content, line);
      }

      return tokenFromPosition;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJsZW5ndGgiLCJ0b2tlbiIsInRva2VucyIsImdldFRva2VucyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInBvc2l0aW9uIiwidG9Qb3NpdGlvbiIsImZyb21Qb3NpdGlvbiIsIkNsYXNzIiwidG9rZW5Ub1Bvc2l0aW9uIiwiZ2V0Q29udGVudCIsImdldExpbmUiLCJzdWJzdHJpbmciLCJmcm9tQ29udGVudEFuZExpbmUiLCJ0b2tlbkZyb21Qb3NpdGlvbiIsInRva2VuTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiaHRtbEZyb21Db250ZW50Iiwic2FuaXRpc2VIVE1MIiwic2FuaXRpc2VkSFRNTCIsInJlcGxhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEs7QUFDSixpQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixPQUFMLENBQWFHLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7OztnQ0FFV0MsSyxFQUFPO0FBQ2pCLFVBQUlDLFNBQVMsS0FBS0osSUFBTCxDQUFVSyxTQUFWLEVBQWI7QUFBQSxVQUNJQyxRQUFRRixPQUFPRyxPQUFQLENBQWUsSUFBZixDQURaOztBQUdBSCxhQUFPSSxNQUFQLENBQWNGLEtBQWQsRUFBcUIsQ0FBckIsRUFBd0JILEtBQXhCO0FBQ0Q7OzsrQkFFVU0sUSxFQUFVO0FBQUUsYUFBT1gsTUFBTVksVUFBTixDQUFpQixJQUFqQixFQUF1QkQsUUFBdkIsQ0FBUDtBQUF5Qzs7O2lDQUVuREEsUSxFQUFVO0FBQUUsYUFBT1gsTUFBTWEsWUFBTixDQUFtQixJQUFuQixFQUF5QkYsUUFBekIsQ0FBUDtBQUEyQzs7OytCQUVsRE4sSyxFQUFPTSxRLEVBQXlCO0FBQUEsVUFBZkcsS0FBZSx1RUFBUGQsS0FBTzs7QUFDaEQsVUFBSWUsa0JBQWtCLElBQXRCOztBQUVBLFVBQUlKLGFBQWEsQ0FBakIsRUFBb0I7QUFDbEIsWUFBSVYsVUFBVUksTUFBTVcsVUFBTixFQUFkO0FBQUEsWUFDSWQsT0FBT0csTUFBTVksT0FBTixFQURYOztBQUdBaEIsa0JBQVVBLFFBQVFpQixTQUFSLENBQWtCLENBQWxCLEVBQXFCUCxRQUFyQixDQUFWOztBQUVBSSwwQkFBa0JELE1BQU1LLGtCQUFOLENBQXlCbEIsT0FBekIsRUFBa0NDLElBQWxDLENBQWxCO0FBQ0Q7O0FBRUQsYUFBT2EsZUFBUDtBQUNEOzs7aUNBRW1CVixLLEVBQU9NLFEsRUFBeUI7QUFBQSxVQUFmRyxLQUFlLHVFQUFQZCxLQUFPOztBQUNsRCxVQUFJb0Isb0JBQW9CLElBQXhCO0FBQUEsVUFDSUMsY0FBY2hCLE1BQU1pQixTQUFOLEVBRGxCOztBQUdBLFVBQUlYLGFBQWFVLFdBQWpCLEVBQThCO0FBQzVCLFlBQUlwQixVQUFVSSxNQUFNVyxVQUFOLEVBQWQ7QUFBQSxZQUNJZCxPQUFPRyxNQUFNWSxPQUFOLEVBRFg7O0FBR0FoQixrQkFBVUEsUUFBUWlCLFNBQVIsQ0FBa0JQLFFBQWxCLENBQVY7O0FBRUFTLDRCQUFvQk4sTUFBTUssa0JBQU4sQ0FBeUJsQixPQUF6QixFQUFrQ0MsSUFBbEMsQ0FBcEI7QUFDRDs7QUFFRCxhQUFPa0IsaUJBQVA7QUFDRDs7O3VDQUV5Qm5CLE8sRUFBU0MsSSxFQUFxQjtBQUFBLFVBQWZZLEtBQWUsdUVBQVBkLEtBQU87O0FBQ3RELFVBQUlHLE9BQU9XLE1BQU1TLGVBQU4sQ0FBc0J0QixPQUF0QixDQUFYO0FBQUEsVUFDSUksUUFBUSxJQUFJUyxLQUFKLENBQVViLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixDQURaOztBQUdBLGFBQU9FLEtBQVA7QUFDRDs7O29DQUVzQkosTyxFQUFTO0FBQzlCLFVBQUlFLE9BQU9GLE9BQVgsQ0FEOEIsQ0FDVjs7QUFFcEJFLGFBQU9ILE1BQU13QixZQUFOLENBQW1CckIsSUFBbkIsQ0FBUCxDQUg4QixDQUdJOztBQUVsQyxhQUFPQSxJQUFQO0FBQ0Q7OztpQ0FFbUJBLEksRUFBTTtBQUN4QixVQUFJc0IsZ0JBQWdCdEIsS0FBS3VCLE9BQUwsQ0FBYSxHQUFiLEVBQWlCLE9BQWpCLEVBQTBCQSxPQUExQixDQUFrQyxHQUFsQyxFQUF1QyxNQUF2QyxFQUErQ0EsT0FBL0MsQ0FBdUQsR0FBdkQsRUFBNEQsTUFBNUQsQ0FBcEI7O0FBRUEsYUFBT0QsYUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQjVCLEtBQWpCIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy5odG1sID0gaHRtbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG5cbiAgcmVwbGFjZVdpdGgodG9rZW4pIHtcbiAgICB2YXIgdG9rZW5zID0gdGhpcy5saW5lLmdldFRva2VucygpLFxuICAgICAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHRoaXMpO1xuXG4gICAgdG9rZW5zLnNwbGljZShpbmRleCwgMSwgdG9rZW4pO1xuICB9XG5cbiAgdG9Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gVG9rZW4udG9Qb3NpdGlvbih0aGlzLCBwb3NpdGlvbikgfVxuXG4gIGZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gVG9rZW4uZnJvbVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSB9XG5cbiAgc3RhdGljIHRvUG9zaXRpb24odG9rZW4sIHBvc2l0aW9uLCBDbGFzcyA9IFRva2VuKSB7XG4gICAgdmFyIHRva2VuVG9Qb3NpdGlvbiA9IG51bGw7XG5cbiAgICBpZiAocG9zaXRpb24gIT09IDApIHtcbiAgICAgIHZhciBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmUgPSB0b2tlbi5nZXRMaW5lKCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBwb3NpdGlvbik7XG5cbiAgICAgIHRva2VuVG9Qb3NpdGlvbiA9IENsYXNzLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5Ub1Bvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbih0b2tlbiwgcG9zaXRpb24sIENsYXNzID0gVG9rZW4pIHtcbiAgICB2YXIgdG9rZW5Gcm9tUG9zaXRpb24gPSBudWxsLFxuICAgICAgICB0b2tlbkxlbmd0aCA9IHRva2VuLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHBvc2l0aW9uICE9PSB0b2tlbkxlbmd0aCkge1xuICAgICAgdmFyIGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZSA9IHRva2VuLmdldExpbmUoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHBvc2l0aW9uKTtcblxuICAgICAgdG9rZW5Gcm9tUG9zaXRpb24gPSBDbGFzcy5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuRnJvbVBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IFRva2VuKSB7XG4gICAgdmFyIGh0bWwgPSBDbGFzcy5odG1sRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgIGh0bWwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaHRtbCk7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIHNhbml0aXNlSFRNTChodG1sKSB7XG4gICAgdmFyIHNhbml0aXNlZEhUTUwgPSBodG1sLnJlcGxhY2UoLyYvLCcmYW1wOycpLnJlcGxhY2UoLzwvLCAnJmx0OycpLnJlcGxhY2UoLz4vLCAnJmd0OycpO1xuXG4gICAgcmV0dXJuIHNhbml0aXNlZEhUTUw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==