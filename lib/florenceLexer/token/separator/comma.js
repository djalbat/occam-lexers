'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SeparatorToken = require('../separator');

var CommaSeparatorToken = function (_SeparatorToken) {
  _inherits(CommaSeparatorToken, _SeparatorToken);

  function CommaSeparatorToken(str) {
    _classCallCheck(this, CommaSeparatorToken);

    return _possibleConstructorReturn(this, (CommaSeparatorToken.__proto__ || Object.getPrototypeOf(CommaSeparatorToken)).call(this, str));
  }

  _createClass(CommaSeparatorToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new CommaSeparatorToken(str);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(/(^,\s*)\b/);

      if (!matches) {
        return null;
      }

      var str = matches[1],
          comma = new CommaSeparatorToken(str);

      return comma;
    }
  }]);

  return CommaSeparatorToken;
}(SeparatorToken);

module.exports = CommaSeparatorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL3Rva2VuL3NlcGFyYXRvci9jb21tYS5qcyJdLCJuYW1lcyI6WyJTZXBhcmF0b3JUb2tlbiIsInJlcXVpcmUiLCJDb21tYVNlcGFyYXRvclRva2VuIiwic3RyIiwiZ2V0U3RyIiwiY29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsImNvbW1hIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxpQkFBaUJDLFFBQVEsY0FBUixDQUFyQjs7SUFFTUMsbUI7OztBQUNKLCtCQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQUEscUlBQ1RBLEdBRFM7QUFFaEI7Ozs7NEJBRU87QUFDTixVQUFJQSxNQUFNLEtBQUtDLE1BQUwsRUFBVjs7QUFFQSxhQUFPLElBQUlGLG1CQUFKLENBQXdCQyxHQUF4QixDQUFQO0FBQ0Q7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFJQyxVQUFVRCxRQUFRRSxLQUFSLENBQWMsV0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUgsTUFBTUcsUUFBUSxDQUFSLENBQVY7QUFBQSxVQUNJRSxRQUFRLElBQUlOLG1CQUFKLENBQXdCQyxHQUF4QixDQURaOztBQUdBLGFBQU9LLEtBQVA7QUFDRDs7OztFQXRCK0JSLGM7O0FBeUJsQ1MsT0FBT0MsT0FBUCxHQUFpQlIsbUJBQWpCIiwiZmlsZSI6ImNvbW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2VwYXJhdG9yVG9rZW4gPSByZXF1aXJlKCcuLi9zZXBhcmF0b3InKTtcblxuY2xhc3MgQ29tbWFTZXBhcmF0b3JUb2tlbiBleHRlbmRzIFNlcGFyYXRvclRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyKSB7XG4gICAgc3VwZXIoc3RyKTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cigpO1xuXG4gICAgcmV0dXJuIG5ldyBDb21tYVNlcGFyYXRvclRva2VuKHN0cik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKF4sXFxzKilcXGIvKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHN0ciA9IG1hdGNoZXNbMV0sXG4gICAgICAgIGNvbW1hID0gbmV3IENvbW1hU2VwYXJhdG9yVG9rZW4oc3RyKTtcblxuICAgIHJldHVybiBjb21tYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1hU2VwYXJhdG9yVG9rZW47XG4iXX0=