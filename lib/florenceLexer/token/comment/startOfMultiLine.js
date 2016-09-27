'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var StartOfMultiLineCommentToken = function (_CommentToken) {
  _inherits(StartOfMultiLineCommentToken, _CommentToken);

  function StartOfMultiLineCommentToken(str) {
    _classCallCheck(this, StartOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (StartOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(StartOfMultiLineCommentToken)).call(this, str));
  }

  _createClass(StartOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new StartOfMultiLineCommentToken(str);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(/^(\/\*)/);

      if (!matches) {
        return null;
      }

      var str = matches[1],
          startOfMultiLine = new StartOfMultiLineCommentToken(str);

      return startOfMultiLine;
    }
  }, {
    key: 'positionInContent',
    value: function positionInContent(content) {
      var matches = content.match(/(.*?)\/\*/);

      if (!matches) {
        return -1;
      }

      var str = matches[1],
          position = str.length; ///

      return position;
    }
  }]);

  return StartOfMultiLineCommentToken;
}(CommentToken);

module.exports = StartOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL3Rva2VuL2NvbW1lbnQvc3RhcnRPZk11bHRpTGluZS5qcyJdLCJuYW1lcyI6WyJDb21tZW50VG9rZW4iLCJyZXF1aXJlIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsInN0ciIsImdldFN0ciIsImNvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzdGFydE9mTXVsdGlMaW5lIiwicG9zaXRpb24iLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsWUFBUixDQUFuQjs7SUFFTUMsNEI7OztBQUNKLHdDQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQUEsdUpBQ1RBLEdBRFM7QUFFaEI7Ozs7NEJBRU87QUFDTixVQUFJQSxNQUFNLEtBQUtDLE1BQUwsRUFBVjs7QUFFQSxhQUFPLElBQUlGLDRCQUFKLENBQWlDQyxHQUFqQyxDQUFQO0FBQ0Q7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFJQyxVQUFVRCxRQUFRRSxLQUFSLENBQWMsU0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUgsTUFBTUcsUUFBUSxDQUFSLENBQVY7QUFBQSxVQUNJRSxtQkFBbUIsSUFBSU4sNEJBQUosQ0FBaUNDLEdBQWpDLENBRHZCOztBQUdBLGFBQU9LLGdCQUFQO0FBQ0Q7OztzQ0FFd0JILE8sRUFBUztBQUNoQyxVQUFJQyxVQUFVRCxRQUFRRSxLQUFSLENBQWMsV0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxDQUFDLENBQVI7QUFDRDs7QUFFRCxVQUFJSCxNQUFNRyxRQUFRLENBQVIsQ0FBVjtBQUFBLFVBQ0lHLFdBQVdOLElBQUlPLE1BRG5CLENBUGdDLENBUUo7O0FBRTVCLGFBQU9ELFFBQVA7QUFDRDs7OztFQW5Dd0NULFk7O0FBc0MzQ1csT0FBT0MsT0FBUCxHQUFpQlYsNEJBQWpCIiwiZmlsZSI6InN0YXJ0T2ZNdWx0aUxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNsYXNzIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHIpIHtcbiAgICBzdXBlcihzdHIpO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyKCk7XG5cbiAgICByZXR1cm4gbmV3IFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4oc3RyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eKFxcL1xcKikvKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHN0ciA9IG1hdGNoZXNbMV0sXG4gICAgICAgIHN0YXJ0T2ZNdWx0aUxpbmUgPSBuZXcgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbihzdHIpO1xuXG4gICAgcmV0dXJuIHN0YXJ0T2ZNdWx0aUxpbmU7XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25JbkNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKC4qPylcXC9cXCovKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHZhciBzdHIgPSBtYXRjaGVzWzFdLFxuICAgICAgICBwb3NpdGlvbiA9IHN0ci5sZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW47XG4iXX0=