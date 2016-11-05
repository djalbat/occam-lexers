'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../../common/token/comment');

var StartOfCommentToken = function (_CommentToken) {
  _inherits(StartOfCommentToken, _CommentToken);

  function StartOfCommentToken() {
    _classCallCheck(this, StartOfCommentToken);

    return _possibleConstructorReturn(this, (StartOfCommentToken.__proto__ || Object.getPrototypeOf(StartOfCommentToken)).apply(this, arguments));
  }

  _createClass(StartOfCommentToken, [{
    key: 'clone',
    value: function clone() {
      var content = this.getContent(),
          line = this.getLine(),
          startOfCommentToken = new StartOfCommentToken(content, line);

      return startOfCommentToken;
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
      var startOfCommentToken = null,
          matches = content.match(/^\(\*/);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        startOfCommentToken = new StartOfCommentToken(content, line);
      }

      return startOfCommentToken;
    }
  }]);

  return StartOfCommentToken;
}(CommentToken);

module.exports = StartOfCommentToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL3N0YXJ0T2ZDb21tZW50LmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRUb2tlbiIsInJlcXVpcmUiLCJTdGFydE9mQ29tbWVudFRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJsaW5lIiwiZ2V0TGluZSIsInN0YXJ0T2ZDb21tZW50VG9rZW4iLCJwb3NpdGlvbiIsInNlYXJjaCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLDRCQUFSLENBQW5COztJQUVNQyxtQjs7Ozs7Ozs7Ozs7NEJBQ0k7QUFDTixVQUFJQyxVQUFVLEtBQUtDLFVBQUwsRUFBZDtBQUFBLFVBQ0lDLE9BQU8sS0FBS0MsT0FBTCxFQURYO0FBQUEsVUFFSUMsc0JBQXNCLElBQUlMLG1CQUFKLENBQXdCQyxPQUF4QixFQUFpQ0UsSUFBakMsQ0FGMUI7O0FBSUEsYUFBT0UsbUJBQVA7QUFDRDs7OzZCQUVlSixPLEVBQVM7QUFDdkIsVUFBSUssV0FBV0wsUUFBUU0sTUFBUixDQUFlLE1BQWYsQ0FBZjs7QUFFQSxhQUFPRCxRQUFQO0FBQ0Q7OztnQ0FFa0JMLE8sRUFBU0UsSSxFQUFNO0FBQ2hDLFVBQUlFLHNCQUFzQixJQUExQjtBQUFBLFVBQ0lHLFVBQVVQLFFBQVFRLEtBQVIsQ0FBYyxPQUFkLENBRGQ7O0FBR0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjs7QUFFQVAsa0JBQVVTLFVBQVYsQ0FIVyxDQUdXOztBQUV0QkwsOEJBQXNCLElBQUlMLG1CQUFKLENBQXdCQyxPQUF4QixFQUFpQ0UsSUFBakMsQ0FBdEI7QUFDRDs7QUFFRCxhQUFPRSxtQkFBUDtBQUNEOzs7O0VBNUIrQlAsWTs7QUErQmxDYyxPQUFPQyxPQUFQLEdBQWlCYixtQkFBakI7O0FBRUEsU0FBU1csS0FBVCxDQUFlRyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic3RhcnRPZkNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4vY29tbWVudCcpO1xuXG5jbGFzcyBTdGFydE9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICBzdGFydE9mQ29tbWVudFRva2VuID0gbmV3IFN0YXJ0T2ZDb21tZW50VG9rZW4oY29udGVudCwgbGluZSk7XG5cbiAgICByZXR1cm4gc3RhcnRPZkNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbihjb250ZW50KSB7XG4gICAgdmFyIHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1xcKFxcKi8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgc3RhcnRPZkNvbW1lbnRUb2tlbiA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eXFwoXFwqLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBzdGFydE9mQ29tbWVudFRva2VuID0gbmV3IFN0YXJ0T2ZDb21tZW50VG9rZW4oY29udGVudCwgbGluZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdGFydE9mQ29tbWVudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhcnRPZkNvbW1lbnRUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=