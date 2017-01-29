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

        clonedToken = Class.fromContentAndLine(content, line);
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
          line = token.getLine(),
          errorToken = Class.fromContentAndLine(content, line);

      return errorToken;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJsZW5ndGgiLCJ0b2tlbiIsInRva2VucyIsImdldFRva2VucyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiZ2V0TGVuZ3RoIiwiQ2xhc3MiLCJjbG9uZWRUb2tlbiIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwic3Vic3RyaW5nIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwiaHRtbEZyb21Db250ZW50IiwiZXJyb3JUb2tlbiIsInNhbml0aXNlSFRNTCIsInNhbml0aXNlZEhUTUwiLCJyZXBsYWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxLO0FBQ0osaUJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQztBQUFBOztBQUMvQixTQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0YsT0FBTCxDQUFhRyxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7Z0NBRVdDLEssRUFBTztBQUNqQixVQUFJQyxTQUFTLEtBQUtKLElBQUwsQ0FBVUssU0FBVixFQUFiO0FBQUEsVUFDSUMsUUFBUUYsT0FBT0csT0FBUCxDQUFlLElBQWYsQ0FEWjs7QUFHQUgsYUFBT0ksTUFBUCxDQUFjRixLQUFkLEVBQXFCLENBQXJCLEVBQXdCSCxLQUF4QjtBQUNEOzs7MEJBRUtNLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT1osTUFBTWEsS0FBTixDQUFZLElBQVosRUFBa0JGLGFBQWxCLEVBQWlDQyxXQUFqQyxFQUE4Q1osS0FBOUMsQ0FBUDtBQUE4RDs7OzBCQUVyRkssSyxFQUFrRTtBQUFBLFVBQTNETSxhQUEyRCx1RUFBM0MsQ0FBMkM7QUFBQSxVQUF4Q0MsV0FBd0MsdUVBQTFCUCxNQUFNUyxTQUFOLEVBQTBCO0FBQUEsVUFBUEMsS0FBTzs7QUFDN0UsVUFBSUMsY0FBYyxJQUFsQjs7QUFFQSxVQUFJTCxrQkFBa0JDLFdBQXRCLEVBQW1DO0FBQ2pDLFlBQUlYLFVBQVVJLE1BQU1ZLFVBQU4sRUFBZDtBQUFBLFlBQ0lmLE9BQU9HLE1BQU1hLE9BQU4sRUFEWDs7QUFHQWpCLGtCQUFVQSxRQUFRa0IsU0FBUixDQUFrQlIsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVY7O0FBRUFJLHNCQUFjRCxNQUFNSyxrQkFBTixDQUF5Qm5CLE9BQXpCLEVBQWtDQyxJQUFsQyxDQUFkO0FBQ0Q7O0FBRUQsYUFBT2MsV0FBUDtBQUNEOzs7dUNBRXlCZixPLEVBQVNDLEksRUFBcUI7QUFBQSxVQUFmYSxLQUFlLHVFQUFQZixLQUFPOztBQUN0RCxVQUFJRyxPQUFPWSxNQUFNTSxlQUFOLENBQXNCcEIsT0FBdEIsQ0FBWDtBQUFBLFVBQ0lJLFFBQVEsSUFBSVUsS0FBSixDQUFVZCxPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsSUFBekIsQ0FEWjs7QUFHQSxhQUFPRSxLQUFQO0FBQ0Q7Ozs4QkFFZ0JBLEssRUFBc0I7QUFBQSxVQUFmVSxLQUFlLHVFQUFQZixLQUFPOztBQUNyQyxVQUFJQyxVQUFVSSxNQUFNWSxVQUFOLEVBQWQ7QUFBQSxVQUNJZixPQUFPRyxNQUFNYSxPQUFOLEVBRFg7QUFBQSxVQUVJSSxhQUFhUCxNQUFNSyxrQkFBTixDQUF5Qm5CLE9BQXpCLEVBQWtDQyxJQUFsQyxDQUZqQjs7QUFJQSxhQUFPb0IsVUFBUDtBQUNEOzs7b0NBRXNCckIsTyxFQUFTO0FBQzlCLFVBQUlFLE9BQU9GLE9BQVgsQ0FEOEIsQ0FDVjs7QUFFcEJFLGFBQU9ILE1BQU11QixZQUFOLENBQW1CcEIsSUFBbkIsQ0FBUCxDQUg4QixDQUdJOztBQUVsQyxhQUFPQSxJQUFQO0FBQ0Q7OztpQ0FFbUJBLEksRUFBTTtBQUN4QixVQUFJcUIsZ0JBQWdCckIsS0FBS3NCLE9BQUwsQ0FBYSxHQUFiLEVBQWlCLE9BQWpCLEVBQTBCQSxPQUExQixDQUFrQyxHQUFsQyxFQUF1QyxNQUF2QyxFQUErQ0EsT0FBL0MsQ0FBdUQsR0FBdkQsRUFBNEQsTUFBNUQsQ0FBcEI7O0FBRUEsYUFBT0QsYUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQjNCLEtBQWpCIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy5odG1sID0gaHRtbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG5cbiAgcmVwbGFjZVdpdGgodG9rZW4pIHtcbiAgICB2YXIgdG9rZW5zID0gdGhpcy5saW5lLmdldFRva2VucygpLFxuICAgICAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHRoaXMpO1xuXG4gICAgdG9rZW5zLnNwbGljZShpbmRleCwgMSwgdG9rZW4pO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBUb2tlbik7IH1cblxuICBzdGF0aWMgY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHRva2VuLmdldExlbmd0aCgpLCBDbGFzcykge1xuICAgIHZhciBjbG9uZWRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIHZhciBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmUgPSB0b2tlbi5nZXRMaW5lKCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICAgIGNsb25lZFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWRUb2tlbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IFRva2VuKSB7XG4gICAgdmFyIGh0bWwgPSBDbGFzcy5odG1sRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbih0b2tlbiwgQ2xhc3MgPSBUb2tlbikge1xuICAgIHZhciBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICBsaW5lID0gdG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICBlcnJvclRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xuICAgIFxuICAgIHJldHVybiBlcnJvclRva2VuO1xuICB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgIGh0bWwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaHRtbCk7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIHNhbml0aXNlSFRNTChodG1sKSB7XG4gICAgdmFyIHNhbml0aXNlZEhUTUwgPSBodG1sLnJlcGxhY2UoLyYvLCcmYW1wOycpLnJlcGxhY2UoLzwvLCAnJmx0OycpLnJlcGxhY2UoLz4vLCAnJmd0OycpO1xuXG4gICAgcmV0dXJuIHNhbml0aXNlZEhUTUw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==