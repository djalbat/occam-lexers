'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var EndOfMultiLineCommentToken = function (_CommentToken) {
  _inherits(EndOfMultiLineCommentToken, _CommentToken);

  function EndOfMultiLineCommentToken(str) {
    _classCallCheck(this, EndOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (EndOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(EndOfMultiLineCommentToken)).call(this, str));
  }

  _createClass(EndOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new EndOfMultiLineCommentToken(str);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(/^(\*\/)/);

      if (!matches) {
        return null;
      }

      var str = matches[1],
          endOfMultiLine = new EndOfMultiLineCommentToken(str);

      return endOfMultiLine;
    }
  }, {
    key: 'positionInContent',
    value: function positionInContent(content) {
      var matches = content.match(/(.*?)\*\//);

      if (!matches) {
        return -1;
      }

      var str = matches[1],
          position = str.length; ///

      return position;
    }
  }]);

  return EndOfMultiLineCommentToken;
}(CommentToken);

module.exports = EndOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL3Rva2VuL2NvbW1lbnQvZW5kT2ZNdWx0aUxpbmUuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwic3RyIiwiZ2V0U3RyIiwiY29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsImVuZE9mTXVsdGlMaW5lIiwicG9zaXRpb24iLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsWUFBUixDQUFuQjs7SUFFTUMsMEI7OztBQUNKLHNDQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQUEsbUpBQ1RBLEdBRFM7QUFFaEI7Ozs7NEJBRU87QUFDTixVQUFJQSxNQUFNLEtBQUtDLE1BQUwsRUFBVjs7QUFFQSxhQUFPLElBQUlGLDBCQUFKLENBQStCQyxHQUEvQixDQUFQO0FBQ0Q7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFJQyxVQUFVRCxRQUFRRSxLQUFSLENBQWMsU0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUgsTUFBTUcsUUFBUSxDQUFSLENBQVY7QUFBQSxVQUNJRSxpQkFBaUIsSUFBSU4sMEJBQUosQ0FBK0JDLEdBQS9CLENBRHJCOztBQUdBLGFBQU9LLGNBQVA7QUFDRDs7O3NDQUV3QkgsTyxFQUFTO0FBQ2hDLFVBQUlDLFVBQVVELFFBQVFFLEtBQVIsQ0FBYyxXQUFkLENBQWQ7O0FBRUEsVUFBSSxDQUFDRCxPQUFMLEVBQWM7QUFDWixlQUFPLENBQUMsQ0FBUjtBQUNEOztBQUVELFVBQUlILE1BQU1HLFFBQVEsQ0FBUixDQUFWO0FBQUEsVUFDSUcsV0FBV04sSUFBSU8sTUFEbkIsQ0FQZ0MsQ0FRSjs7QUFFNUIsYUFBT0QsUUFBUDtBQUNEOzs7O0VBbkNzQ1QsWTs7QUFzQ3pDVyxPQUFPQyxPQUFQLEdBQWlCViwwQkFBakIiLCJmaWxlIjoiZW5kT2ZNdWx0aUxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNsYXNzIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyKSB7XG4gICAgc3VwZXIoc3RyKTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cigpO1xuXG4gICAgcmV0dXJuIG5ldyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbihzdHIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL14oXFwqXFwvKS8pO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgc3RyID0gbWF0Y2hlc1sxXSxcbiAgICAgICAgZW5kT2ZNdWx0aUxpbmUgPSBuZXcgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4oc3RyKTtcblxuICAgIHJldHVybiBlbmRPZk11bHRpTGluZTtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbkluQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC8oLio/KVxcKlxcLy8pO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgdmFyIHN0ciA9IG1hdGNoZXNbMV0sXG4gICAgICAgIHBvc2l0aW9uID0gc3RyLmxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47XG4iXX0=