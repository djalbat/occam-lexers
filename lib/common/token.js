'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {
  function Token(content, line) {
    _classCallCheck(this, Token);

    this.content = content;
    this.line = line;
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
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'getTrimmedContent',
    value: function getTrimmedContent(startPosition, endPosition) {
      var trimmedContent = this.content.substring(startPosition, endPosition);

      return trimmedContent;
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.content = content;
    }
  }, {
    key: 'trimContentToPosition',
    value: function trimContentToPosition(position) {
      this.content = this.content.substr(0, position);
    }
  }, {
    key: 'trimContentFromPosition',
    value: function trimContentFromPosition(position) {
      this.content = this.content.substr(position);
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(token) {
      var tokens = this.line.getTokens(),
          index = tokens.indexOf(this);

      tokens.splice(index, 1, token);
    }
  }], [{
    key: 'trimmedToPosition',
    value: function trimmedToPosition(token, position) {
      if (position === 0) {
        return null;
      }

      var clonedToken = token.clone(),
          tokenWithEndTrimmed = clonedToken; ///

      tokenWithEndTrimmed.trimContentToPosition(position);

      return tokenWithEndTrimmed;
    }
  }, {
    key: 'trimmedFromPosition',
    value: function trimmedFromPosition(token, position) {
      var tokenLength = token.getLength();

      if (position === tokenLength) {
        return null;
      }

      var clonedToken = token.clone(),
          tokenWithStartTrimmed = clonedToken; ///

      tokenWithStartTrimmed.trimContentFromPosition(position);

      return tokenWithStartTrimmed;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsImxlbmd0aCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInRyaW1tZWRDb250ZW50Iiwic3Vic3RyaW5nIiwicG9zaXRpb24iLCJzdWJzdHIiLCJ0b2tlbiIsInRva2VucyIsImdldFRva2VucyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImNsb25lZFRva2VuIiwiY2xvbmUiLCJ0b2tlbldpdGhFbmRUcmltbWVkIiwidHJpbUNvbnRlbnRUb1Bvc2l0aW9uIiwidG9rZW5MZW5ndGgiLCJnZXRMZW5ndGgiLCJ0b2tlbldpdGhTdGFydFRyaW1tZWQiLCJ0cmltQ29udGVudEZyb21Qb3NpdGlvbiIsImh0bWwiLCJzYW5pdGlzZWRIVE1MIiwicmVwbGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSztBQUNKLGlCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQjtBQUFBOztBQUN6QixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0QsT0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRCxPQUFMLENBQWFFLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7OztzQ0FFaUJDLGEsRUFBZUMsVyxFQUFhO0FBQzVDLFVBQUlDLGlCQUFpQixLQUFLTCxPQUFMLENBQWFNLFNBQWIsQ0FBdUJILGFBQXZCLEVBQXNDQyxXQUF0QyxDQUFyQjs7QUFFQSxhQUFPQyxjQUFQO0FBQ0Q7OzsrQkFFVUwsTyxFQUFTO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7MENBRXFCTyxRLEVBQVU7QUFDOUIsV0FBS1AsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYVEsTUFBYixDQUFvQixDQUFwQixFQUF1QkQsUUFBdkIsQ0FBZjtBQUNEOzs7NENBRXVCQSxRLEVBQVU7QUFDaEMsV0FBS1AsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYVEsTUFBYixDQUFvQkQsUUFBcEIsQ0FBZjtBQUNEOzs7Z0NBRVdFLEssRUFBTztBQUNqQixVQUFJQyxTQUFTLEtBQUtULElBQUwsQ0FBVVUsU0FBVixFQUFiO0FBQUEsVUFDSUMsUUFBUUYsT0FBT0csT0FBUCxDQUFlLElBQWYsQ0FEWjs7QUFHQUgsYUFBT0ksTUFBUCxDQUFjRixLQUFkLEVBQXFCLENBQXJCLEVBQXdCSCxLQUF4QjtBQUNEOzs7c0NBRXdCQSxLLEVBQU9GLFEsRUFBVTtBQUN4QyxVQUFJQSxhQUFhLENBQWpCLEVBQW9CO0FBQ2xCLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlRLGNBQWNOLE1BQU1PLEtBQU4sRUFBbEI7QUFBQSxVQUNJQyxzQkFBc0JGLFdBRDFCLENBTHdDLENBTUE7O0FBRXhDRSwwQkFBb0JDLHFCQUFwQixDQUEwQ1gsUUFBMUM7O0FBRUEsYUFBT1UsbUJBQVA7QUFDRDs7O3dDQUMwQlIsSyxFQUFPRixRLEVBQVU7QUFDMUMsVUFBSVksY0FBY1YsTUFBTVcsU0FBTixFQUFsQjs7QUFFQSxVQUFJYixhQUFhWSxXQUFqQixFQUE4QjtBQUM1QixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJSixjQUFjTixNQUFNTyxLQUFOLEVBQWxCO0FBQUEsVUFDSUssd0JBQXdCTixXQUQ1QixDQVAwQyxDQVFBOztBQUUxQ00sNEJBQXNCQyx1QkFBdEIsQ0FBOENmLFFBQTlDOztBQUVBLGFBQU9jLHFCQUFQO0FBQ0Q7OztpQ0FFbUJFLEksRUFBTTtBQUN4QixVQUFJQyxnQkFBZ0JELEtBQUtFLE9BQUwsQ0FBYSxHQUFiLEVBQWlCLE9BQWpCLEVBQTBCQSxPQUExQixDQUFrQyxHQUFsQyxFQUF1QyxNQUF2QyxFQUErQ0EsT0FBL0MsQ0FBdUQsR0FBdkQsRUFBNEQsTUFBNUQsQ0FBcEI7O0FBRUEsYUFBT0QsYUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQjVCLEtBQWpCIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuICBcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuXG4gIGdldFRyaW1tZWRDb250ZW50KHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgdmFyIHRyaW1tZWRDb250ZW50ID0gdGhpcy5jb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdHJpbW1lZENvbnRlbnQ7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG4gIFxuICB0cmltQ29udGVudFRvUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuc3Vic3RyKDAsIHBvc2l0aW9uKTtcbiAgfVxuXG4gIHRyaW1Db250ZW50RnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnN1YnN0cihwb3NpdGlvbik7XG4gIH1cblxuICByZXBsYWNlV2l0aCh0b2tlbikge1xuICAgIHZhciB0b2tlbnMgPSB0aGlzLmxpbmUuZ2V0VG9rZW5zKCksXG4gICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2YodGhpcyk7XG5cbiAgICB0b2tlbnMuc3BsaWNlKGluZGV4LCAxLCB0b2tlbik7XG4gIH1cblxuICBzdGF0aWMgdHJpbW1lZFRvUG9zaXRpb24odG9rZW4sIHBvc2l0aW9uKSB7XG4gICAgaWYgKHBvc2l0aW9uID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY2xvbmVkVG9rZW4gPSB0b2tlbi5jbG9uZSgpLFxuICAgICAgICB0b2tlbldpdGhFbmRUcmltbWVkID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRva2VuV2l0aEVuZFRyaW1tZWQudHJpbUNvbnRlbnRUb1Bvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB0b2tlbldpdGhFbmRUcmltbWVkO1xuICB9XG4gIHN0YXRpYyB0cmltbWVkRnJvbVBvc2l0aW9uKHRva2VuLCBwb3NpdGlvbikge1xuICAgIHZhciB0b2tlbkxlbmd0aCA9IHRva2VuLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHBvc2l0aW9uID09PSB0b2tlbkxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGNsb25lZFRva2VuID0gdG9rZW4uY2xvbmUoKSxcbiAgICAgICAgdG9rZW5XaXRoU3RhcnRUcmltbWVkID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRva2VuV2l0aFN0YXJ0VHJpbW1lZC50cmltQ29udGVudEZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdG9rZW5XaXRoU3RhcnRUcmltbWVkO1xuICB9XG5cbiAgc3RhdGljIHNhbml0aXNlSFRNTChodG1sKSB7XG4gICAgdmFyIHNhbml0aXNlZEhUTUwgPSBodG1sLnJlcGxhY2UoLyYvLCcmYW1wOycpLnJlcGxhY2UoLzwvLCAnJmx0OycpLnJlcGxhY2UoLz4vLCAnJmd0OycpO1xuXG4gICAgcmV0dXJuIHNhbml0aXNlZEhUTUw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==