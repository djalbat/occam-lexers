'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var WhitespaceToken = function (_Token) {
  _inherits(WhitespaceToken, _Token);

  function WhitespaceToken() {
    _classCallCheck(this, WhitespaceToken);

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).apply(this, arguments));
  }

  _createClass(WhitespaceToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getString();

      return new WhitespaceToken(str);
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var str = this.getString(),
          html = str; ///

      return html;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(/^([\t ]+)/);

      if (!matches) {
        return null;
      }

      var firstMatch = first(matches),
          str = firstMatch,
          ///
      whitespaceToken = new WhitespaceToken(str);

      return whitespaceToken;
    }
  }, {
    key: 'positionInContent',
    value: function positionInContent(content) {
      var position = content.search(/[\t ]+/);

      return position;
    }
  }]);

  return WhitespaceToken;
}(Token);

module.exports = WhitespaceToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJXaGl0ZXNwYWNlVG9rZW4iLCJzdHIiLCJnZXRTdHJpbmciLCJodG1sIiwiY29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsIndoaXRlc3BhY2VUb2tlbiIsInBvc2l0aW9uIiwic2VhcmNoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxlOzs7Ozs7Ozs7Ozs0QkFDSTtBQUNOLFVBQUlDLE1BQU0sS0FBS0MsU0FBTCxFQUFWOztBQUVBLGFBQU8sSUFBSUYsZUFBSixDQUFvQkMsR0FBcEIsQ0FBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFJQSxNQUFNLEtBQUtDLFNBQUwsRUFBVjtBQUFBLFVBQ0lDLE9BQU9GLEdBRFgsQ0FEUSxDQUVROztBQUVoQixhQUFPRSxJQUFQO0FBQ0Q7OztnQ0FFa0JDLE8sRUFBUztBQUMxQixVQUFJQyxVQUFVRCxRQUFRRSxLQUFSLENBQWMsV0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLFVBQ0lKLE1BQU1NLFVBRFY7QUFBQSxVQUNzQjtBQUNsQkUsd0JBQWtCLElBQUlULGVBQUosQ0FBb0JDLEdBQXBCLENBRnRCOztBQUlBLGFBQU9RLGVBQVA7QUFDRDs7O3NDQUV3QkwsTyxFQUFTO0FBQ2hDLFVBQUlNLFdBQVdOLFFBQVFPLE1BQVIsQ0FBZSxRQUFmLENBQWY7O0FBRUEsYUFBT0QsUUFBUDtBQUNEOzs7O0VBaEMyQlosSzs7QUFtQzlCYyxPQUFPQyxPQUFQLEdBQWlCYixlQUFqQjs7QUFFQSxTQUFTUSxLQUFULENBQWVNLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ3aGl0ZXNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBXaGl0ZXNwYWNlVG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgcmV0dXJuIG5ldyBXaGl0ZXNwYWNlVG9rZW4oc3RyKTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIGh0bWwgPSBzdHI7IC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXihbXFx0IF0rKS8pO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICBzdHIgPSBmaXJzdE1hdGNoLCAvLy9cbiAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gbmV3IFdoaXRlc3BhY2VUb2tlbihzdHIpO1xuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbkluQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1tcXHQgXSsvKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdoaXRlc3BhY2VUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=