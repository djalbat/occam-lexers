'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var SingleLineCommentToken = function (_CommentToken) {
  _inherits(SingleLineCommentToken, _CommentToken);

  function SingleLineCommentToken(str) {
    _classCallCheck(this, SingleLineCommentToken);

    return _possibleConstructorReturn(this, (SingleLineCommentToken.__proto__ || Object.getPrototypeOf(SingleLineCommentToken)).call(this, str));
  }

  _createClass(SingleLineCommentToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new SingleLineCommentToken(str);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(/^(\/\/.*)$/);

      if (!matches) {
        return null;
      }

      var str = matches[1],
          singleLine = new SingleLineCommentToken(str);

      return singleLine;
    }
  }, {
    key: 'positionInContent',
    value: function positionInContent(content) {
      var matches = content.match(/(.*?)\/\//);

      if (!matches) {
        return -1;
      }

      var str = matches[1],
          position = str.length; ///

      return position;
    }
  }]);

  return SingleLineCommentToken;
}(CommentToken);

module.exports = SingleLineCommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL3Rva2VuL2NvbW1lbnQvc2luZ2xlTGluZS5qcyJdLCJuYW1lcyI6WyJDb21tZW50VG9rZW4iLCJyZXF1aXJlIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsInN0ciIsImdldFN0ciIsImNvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzaW5nbGVMaW5lIiwicG9zaXRpb24iLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsWUFBUixDQUFuQjs7SUFFTUMsc0I7OztBQUNKLGtDQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQUEsMklBQ1RBLEdBRFM7QUFFaEI7Ozs7NEJBRU87QUFDTixVQUFJQSxNQUFNLEtBQUtDLE1BQUwsRUFBVjs7QUFFQSxhQUFPLElBQUlGLHNCQUFKLENBQTJCQyxHQUEzQixDQUFQO0FBQ0Q7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFJQyxVQUFVRCxRQUFRRSxLQUFSLENBQWMsWUFBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUgsTUFBTUcsUUFBUSxDQUFSLENBQVY7QUFBQSxVQUNJRSxhQUFhLElBQUlOLHNCQUFKLENBQTJCQyxHQUEzQixDQURqQjs7QUFHQSxhQUFPSyxVQUFQO0FBQ0Q7OztzQ0FFd0JILE8sRUFBUztBQUNoQyxVQUFJQyxVQUFVRCxRQUFRRSxLQUFSLENBQWMsV0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxDQUFDLENBQVI7QUFDRDs7QUFFRCxVQUFJSCxNQUFNRyxRQUFRLENBQVIsQ0FBVjtBQUFBLFVBQ0lHLFdBQVdOLElBQUlPLE1BRG5CLENBUGdDLENBUUo7O0FBRTVCLGFBQU9ELFFBQVA7QUFDRDs7OztFQW5Da0NULFk7O0FBc0NyQ1csT0FBT0MsT0FBUCxHQUFpQlYsc0JBQWpCIiwiZmlsZSI6InNpbmdsZUxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNsYXNzIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHIpIHtcbiAgICBzdXBlcihzdHIpO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyKCk7XG5cbiAgICByZXR1cm4gbmV3IFNpbmdsZUxpbmVDb21tZW50VG9rZW4oc3RyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eKFxcL1xcLy4qKSQvKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHN0ciA9IG1hdGNoZXNbMV0sXG4gICAgICAgIHNpbmdsZUxpbmUgPSBuZXcgU2luZ2xlTGluZUNvbW1lbnRUb2tlbihzdHIpO1xuXG4gICAgcmV0dXJuIHNpbmdsZUxpbmU7XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25JbkNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKC4qPylcXC9cXC8vKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHZhciBzdHIgPSBtYXRjaGVzWzFdLFxuICAgICAgICBwb3NpdGlvbiA9IHN0ci5sZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbmdsZUxpbmVDb21tZW50VG9rZW47XG4iXX0=