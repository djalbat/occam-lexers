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

  _createClass(StartOfCommentToken, null, [{
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
        var firstMatch = first(matches),
            string = firstMatch; ///

        startOfCommentToken = new StartOfCommentToken(string, line);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL3N0YXJ0T2ZDb21tZW50LmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRUb2tlbiIsInJlcXVpcmUiLCJTdGFydE9mQ29tbWVudFRva2VuIiwiY29udGVudCIsInBvc2l0aW9uIiwic2VhcmNoIiwibGluZSIsInN0YXJ0T2ZDb21tZW50VG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSw0QkFBUixDQUFuQjs7SUFFTUMsbUI7Ozs7Ozs7Ozs7OzZCQUNZQyxPLEVBQVM7QUFDdkIsVUFBSUMsV0FBV0QsUUFBUUUsTUFBUixDQUFlLE1BQWYsQ0FBZjs7QUFFQSxhQUFPRCxRQUFQO0FBQ0Q7OztnQ0FFa0JELE8sRUFBU0csSSxFQUFNO0FBQ2hDLFVBQUlDLHNCQUFzQixJQUExQjtBQUFBLFVBQ0lDLFVBQVVMLFFBQVFNLEtBQVIsQ0FBYyxPQUFkLENBRGQ7O0FBR0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLFlBQ0lJLFNBQVNGLFVBRGIsQ0FEVyxDQUVjOztBQUV6QkgsOEJBQXNCLElBQUlMLG1CQUFKLENBQXdCVSxNQUF4QixFQUFnQ04sSUFBaEMsQ0FBdEI7QUFDRDs7QUFFRCxhQUFPQyxtQkFBUDtBQUNEOzs7O0VBbkIrQlAsWTs7QUFzQmxDYSxPQUFPQyxPQUFQLEdBQWlCWixtQkFBakI7O0FBRUEsU0FBU1MsS0FBVCxDQUFlSSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic3RhcnRPZkNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4vY29tbWVudCcpO1xuXG5jbGFzcyBTdGFydE9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvXFwoXFwqLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBzdGFydE9mQ29tbWVudFRva2VuID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL15cXChcXCovKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgIHN0cmluZyA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBzdGFydE9mQ29tbWVudFRva2VuID0gbmV3IFN0YXJ0T2ZDb21tZW50VG9rZW4oc3RyaW5nLCBsaW5lKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN0YXJ0T2ZDb21tZW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFydE9mQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==