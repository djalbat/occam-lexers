'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var StartOfMultiLineCommentToken = function (_CommentToken) {
  _inherits(StartOfMultiLineCommentToken, _CommentToken);

  function StartOfMultiLineCommentToken() {
    _classCallCheck(this, StartOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (StartOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(StartOfMultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(StartOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new StartOfMultiLineCommentToken(str);
    }
  }], [{
    key: 'position',
    value: function position(content) {
      var position = content.search(/\(\*/);

      return position;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content, line) {
      var startOfMultiLineCommentToken = null,
          matches = content.match(/^(\(\*)/);

      if (matches) {
        var firstMatch = first(matches),
            str = firstMatch; ///

        startOfMultiLineCommentToken = new StartOfMultiLineCommentToken(str, line);
      }

      return startOfMultiLineCommentToken;
    }
  }]);

  return StartOfMultiLineCommentToken;
}(CommentToken);

module.exports = StartOfMultiLineCommentToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL2NvbW1lbnQvc3RhcnRPZk11bHRpTGluZS5qcyJdLCJuYW1lcyI6WyJDb21tZW50VG9rZW4iLCJyZXF1aXJlIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsInN0ciIsImdldFN0ciIsImNvbnRlbnQiLCJwb3NpdGlvbiIsInNlYXJjaCIsImxpbmUiLCJzdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsWUFBUixDQUFuQjs7SUFFTUMsNEI7Ozs7Ozs7Ozs7OzRCQUNJO0FBQ04sVUFBSUMsTUFBTSxLQUFLQyxNQUFMLEVBQVY7O0FBRUEsYUFBTyxJQUFJRiw0QkFBSixDQUFpQ0MsR0FBakMsQ0FBUDtBQUNEOzs7NkJBRWVFLE8sRUFBUztBQUN2QixVQUFJQyxXQUFXRCxRQUFRRSxNQUFSLENBQWUsTUFBZixDQUFmOztBQUVBLGFBQU9ELFFBQVA7QUFDRDs7O2dDQUVrQkQsTyxFQUFTRyxJLEVBQU07QUFDaEMsVUFBSUMsK0JBQStCLElBQW5DO0FBQUEsVUFDSUMsVUFBVUwsUUFBUU0sS0FBUixDQUFjLFNBQWQsQ0FEZDs7QUFHQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxZQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsWUFDSVAsTUFBTVMsVUFEVixDQURXLENBRVc7O0FBRXRCSCx1Q0FBK0IsSUFBSVAsNEJBQUosQ0FBaUNDLEdBQWpDLEVBQXNDSyxJQUF0QyxDQUEvQjtBQUNEOztBQUdELGFBQU9DLDRCQUFQO0FBQ0Q7Ozs7RUExQndDVCxZOztBQTZCM0NjLE9BQU9DLE9BQVAsR0FBaUJiLDRCQUFqQjs7QUFFQSxTQUFTVyxLQUFULENBQWVHLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJzdGFydE9mTXVsdGlMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbWVudCcpO1xuXG5jbGFzcyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyKCk7XG5cbiAgICByZXR1cm4gbmV3IFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4oc3RyKTtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbihjb250ZW50KSB7XG4gICAgdmFyIHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1xcKFxcKi8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgc3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eKFxcKFxcKikvKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgIHN0ciA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbmV3IFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4oc3RyLCBsaW5lKTtcbiAgICB9XG5cblxuICAgIHJldHVybiBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=