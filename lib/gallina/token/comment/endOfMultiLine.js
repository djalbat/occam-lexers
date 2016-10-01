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
    key: 'position',
    value: function position(content) {
      var position = -1,
          matches = content.match(/(.*?)\*\)/);

      if (matches) {
        var firstMatch = first(matches),
            str = firstMatch;

        position = str.length; ///
      }

      return position;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      var endOfMultiLineCommentToken = null,
          matches = content.match(/^(\*\))/);

      if (matches) {
        var firstMatch = first(matches),
            str = firstMatch; ///

        endOfMultiLineCommentToken = new EndOfMultiLineCommentToken(str);
      }

      return endOfMultiLineCommentToken;
    }
  }]);

  return EndOfMultiLineCommentToken;
}(CommentToken);

module.exports = EndOfMultiLineCommentToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL2NvbW1lbnQvZW5kT2ZNdWx0aUxpbmUuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwic3RyIiwiZ2V0U3RyIiwiY29udGVudCIsInBvc2l0aW9uIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwibGVuZ3RoIiwiZW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxZQUFSLENBQW5COztJQUVNQywwQjs7O0FBQ0osc0NBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFBQSxtSkFDVEEsR0FEUztBQUVoQjs7Ozs0QkFFTztBQUNOLFVBQUlBLE1BQU0sS0FBS0MsTUFBTCxFQUFWOztBQUVBLGFBQU8sSUFBSUYsMEJBQUosQ0FBK0JDLEdBQS9CLENBQVA7QUFDRDs7OzZCQUVlRSxPLEVBQVM7QUFDdkIsVUFBSUMsV0FBVyxDQUFDLENBQWhCO0FBQUEsVUFDSUMsVUFBVUYsUUFBUUcsS0FBUixDQUFjLFdBQWQsQ0FEZDs7QUFHQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxZQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsWUFDSUosTUFBTU0sVUFEVjs7QUFHQUgsbUJBQVdILElBQUlRLE1BQWYsQ0FKVyxDQUlhO0FBQ3pCOztBQUVELGFBQU9MLFFBQVA7QUFDRDs7O2dDQUVrQkQsTyxFQUFTO0FBQzFCLFVBQUlPLDZCQUE2QixJQUFqQztBQUFBLFVBQ0lMLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxTQUFkLENBRGQ7O0FBR0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLFlBQ0lKLE1BQU1NLFVBRFYsQ0FEVyxDQUVXOztBQUV0QkcscUNBQTZCLElBQUlWLDBCQUFKLENBQStCQyxHQUEvQixDQUE3QjtBQUNEOztBQUVELGFBQU9TLDBCQUFQO0FBQ0Q7Ozs7RUFyQ3NDWixZOztBQXdDekNhLE9BQU9DLE9BQVAsR0FBaUJaLDBCQUFqQjs7QUFFQSxTQUFTUSxLQUFULENBQWVLLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJlbmRPZk11bHRpTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1lbnQnKTtcblxuY2xhc3MgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHIpIHtcbiAgICBzdXBlcihzdHIpO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyKCk7XG5cbiAgICByZXR1cm4gbmV3IEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuKHN0cik7XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb24oY29udGVudCkge1xuICAgIHZhciBwb3NpdGlvbiA9IC0xLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKC4qPylcXCpcXCkvKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgIHN0ciA9IGZpcnN0TWF0Y2g7XG5cbiAgICAgIHBvc2l0aW9uID0gc3RyLmxlbmd0aDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIGVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL14oXFwqXFwpKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgc3RyID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIGVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbmV3IEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuKHN0cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19