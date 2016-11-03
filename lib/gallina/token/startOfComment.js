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
      var string = this.getString(),
          line = this.getLine(),
          startOfCommentToken = new StartOfCommentToken(string, line);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL3N0YXJ0T2ZDb21tZW50LmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRUb2tlbiIsInJlcXVpcmUiLCJTdGFydE9mQ29tbWVudFRva2VuIiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwibGluZSIsImdldExpbmUiLCJzdGFydE9mQ29tbWVudFRva2VuIiwiY29udGVudCIsInBvc2l0aW9uIiwic2VhcmNoIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsNEJBQVIsQ0FBbkI7O0lBRU1DLG1COzs7Ozs7Ozs7Ozs0QkFDSTtBQUNOLFVBQUlDLFNBQVMsS0FBS0MsU0FBTCxFQUFiO0FBQUEsVUFDSUMsT0FBTyxLQUFLQyxPQUFMLEVBRFg7QUFBQSxVQUVJQyxzQkFBc0IsSUFBSUwsbUJBQUosQ0FBd0JDLE1BQXhCLEVBQWdDRSxJQUFoQyxDQUYxQjs7QUFJQSxhQUFPRSxtQkFBUDtBQUNEOzs7NkJBRWVDLE8sRUFBUztBQUN2QixVQUFJQyxXQUFXRCxRQUFRRSxNQUFSLENBQWUsTUFBZixDQUFmOztBQUVBLGFBQU9ELFFBQVA7QUFDRDs7O2dDQUVrQkQsTyxFQUFTSCxJLEVBQU07QUFDaEMsVUFBSUUsc0JBQXNCLElBQTFCO0FBQUEsVUFDSUksVUFBVUgsUUFBUUksS0FBUixDQUFjLE9BQWQsQ0FEZDs7QUFHQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxZQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsWUFDSVIsU0FBU1UsVUFEYixDQURXLENBRWM7O0FBRXpCTiw4QkFBc0IsSUFBSUwsbUJBQUosQ0FBd0JDLE1BQXhCLEVBQWdDRSxJQUFoQyxDQUF0QjtBQUNEOztBQUVELGFBQU9FLG1CQUFQO0FBQ0Q7Ozs7RUEzQitCUCxZOztBQThCbENlLE9BQU9DLE9BQVAsR0FBaUJkLG1CQUFqQjs7QUFFQSxTQUFTWSxLQUFULENBQWVHLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJzdGFydE9mQ29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbi9jb21tZW50Jyk7XG5cbmNsYXNzIFN0YXJ0T2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZSgpIHtcbiAgICB2YXIgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICBzdGFydE9mQ29tbWVudFRva2VuID0gbmV3IFN0YXJ0T2ZDb21tZW50VG9rZW4oc3RyaW5nLCBsaW5lKTtcblxuICAgIHJldHVybiBzdGFydE9mQ29tbWVudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvXFwoXFwqLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBzdGFydE9mQ29tbWVudFRva2VuID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL15cXChcXCovKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgIHN0cmluZyA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBzdGFydE9mQ29tbWVudFRva2VuID0gbmV3IFN0YXJ0T2ZDb21tZW50VG9rZW4oc3RyaW5nLCBsaW5lKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN0YXJ0T2ZDb21tZW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFydE9mQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==