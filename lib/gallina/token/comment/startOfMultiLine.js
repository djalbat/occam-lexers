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
      var position = -1,
          matches = content.match(/(.*?)\(\*/);

      if (matches) {
        var firstMatch = first(matches),
            str = firstMatch;

        position = str.length; ///
      }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL2NvbW1lbnQvc3RhcnRPZk11bHRpTGluZS5qcyJdLCJuYW1lcyI6WyJDb21tZW50VG9rZW4iLCJyZXF1aXJlIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsInN0ciIsImdldFN0ciIsImNvbnRlbnQiLCJwb3NpdGlvbiIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsImxlbmd0aCIsImxpbmUiLCJzdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsWUFBUixDQUFuQjs7SUFFTUMsNEI7Ozs7Ozs7Ozs7OzRCQUNJO0FBQ04sVUFBSUMsTUFBTSxLQUFLQyxNQUFMLEVBQVY7O0FBRUEsYUFBTyxJQUFJRiw0QkFBSixDQUFpQ0MsR0FBakMsQ0FBUDtBQUNEOzs7NkJBRWVFLE8sRUFBUztBQUN2QixVQUFJQyxXQUFXLENBQUMsQ0FBaEI7QUFBQSxVQUNJQyxVQUFVRixRQUFRRyxLQUFSLENBQWMsV0FBZCxDQURkOztBQUdBLFVBQUlELE9BQUosRUFBYTtBQUNYLFlBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7QUFBQSxZQUNJSixNQUFNTSxVQURWOztBQUdBSCxtQkFBV0gsSUFBSVEsTUFBZixDQUpXLENBSWE7QUFDekI7O0FBRUQsYUFBT0wsUUFBUDtBQUNEOzs7Z0NBRWtCRCxPLEVBQVNPLEksRUFBTTtBQUNoQyxVQUFJQywrQkFBK0IsSUFBbkM7QUFBQSxVQUNJTixVQUFVRixRQUFRRyxLQUFSLENBQWMsU0FBZCxDQURkOztBQUdBLFVBQUlELE9BQUosRUFBYTtBQUNYLFlBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7QUFBQSxZQUNJSixNQUFNTSxVQURWLENBRFcsQ0FFVzs7QUFFdEJJLHVDQUErQixJQUFJWCw0QkFBSixDQUFpQ0MsR0FBakMsRUFBc0NTLElBQXRDLENBQS9CO0FBQ0Q7O0FBR0QsYUFBT0MsNEJBQVA7QUFDRDs7OztFQWxDd0NiLFk7O0FBcUMzQ2MsT0FBT0MsT0FBUCxHQUFpQmIsNEJBQWpCOztBQUVBLFNBQVNRLEtBQVQsQ0FBZU0sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InN0YXJ0T2ZNdWx0aUxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNsYXNzIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZSgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHIoKTtcblxuICAgIHJldHVybiBuZXcgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbihzdHIpO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSAtMSxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyguKj8pXFwoXFwqLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICBzdHIgPSBmaXJzdE1hdGNoO1xuICAgICAgXG4gICAgICBwb3NpdGlvbiA9IHN0ci5sZW5ndGg7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL14oXFwoXFwqKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgc3RyID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIHN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBuZXcgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbihzdHIsIGxpbmUpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==