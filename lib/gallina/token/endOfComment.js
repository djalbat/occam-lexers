'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../../common/token/comment');

var EndOfCommentToken = function (_CommentToken) {
  _inherits(EndOfCommentToken, _CommentToken);

  function EndOfCommentToken() {
    _classCallCheck(this, EndOfCommentToken);

    return _possibleConstructorReturn(this, (EndOfCommentToken.__proto__ || Object.getPrototypeOf(EndOfCommentToken)).apply(this, arguments));
  }

  _createClass(EndOfCommentToken, [{
    key: 'clone',
    value: function clone() {
      var string = this.getString(),
          line = this.getLine(),
          endOfCommentToken = new EndOfCommentToken(string, line);

      return endOfCommentToken;
    }
  }], [{
    key: 'position',
    value: function position(content) {
      var position = content.search(/\*\)/);

      return position;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content, line) {
      var endOfCommentToken = null,
          matches = content.match(/^\*\)/);

      if (matches) {
        var firstMatch = first(matches),
            string = firstMatch; ///

        endOfCommentToken = new EndOfCommentToken(string, line);
      }

      return endOfCommentToken;
    }
  }]);

  return EndOfCommentToken;
}(CommentToken);

module.exports = EndOfCommentToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL2VuZE9mQ29tbWVudC5qcyJdLCJuYW1lcyI6WyJDb21tZW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJzdHJpbmciLCJnZXRTdHJpbmciLCJsaW5lIiwiZ2V0TGluZSIsImVuZE9mQ29tbWVudFRva2VuIiwiY29udGVudCIsInBvc2l0aW9uIiwic2VhcmNoIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsNEJBQVIsQ0FBbkI7O0lBRU1DLGlCOzs7Ozs7Ozs7Ozs0QkFDSTtBQUNOLFVBQUlDLFNBQVMsS0FBS0MsU0FBTCxFQUFiO0FBQUEsVUFDSUMsT0FBTyxLQUFLQyxPQUFMLEVBRFg7QUFBQSxVQUVJQyxvQkFBb0IsSUFBSUwsaUJBQUosQ0FBc0JDLE1BQXRCLEVBQThCRSxJQUE5QixDQUZ4Qjs7QUFJQSxhQUFPRSxpQkFBUDtBQUNEOzs7NkJBRWVDLE8sRUFBUztBQUN2QixVQUFJQyxXQUFXRCxRQUFRRSxNQUFSLENBQWUsTUFBZixDQUFmOztBQUVBLGFBQU9ELFFBQVA7QUFDRDs7O2dDQUVrQkQsTyxFQUFTSCxJLEVBQU07QUFDaEMsVUFBSUUsb0JBQW9CLElBQXhCO0FBQUEsVUFDSUksVUFBVUgsUUFBUUksS0FBUixDQUFjLE9BQWQsQ0FEZDs7QUFHQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxZQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsWUFDSVIsU0FBU1UsVUFEYixDQURXLENBRWM7O0FBRXpCTiw0QkFBb0IsSUFBSUwsaUJBQUosQ0FBc0JDLE1BQXRCLEVBQThCRSxJQUE5QixDQUFwQjtBQUNEOztBQUVELGFBQU9FLGlCQUFQO0FBQ0Q7Ozs7RUEzQjZCUCxZOztBQThCaENlLE9BQU9DLE9BQVAsR0FBaUJkLGlCQUFqQjs7QUFFQSxTQUFTWSxLQUFULENBQWVHLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJlbmRPZkNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4vY29tbWVudCcpO1xuXG5jbGFzcyBFbmRPZkNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIGNsb25lKCkge1xuICAgIHZhciBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgIGVuZE9mQ29tbWVudFRva2VuID0gbmV3IEVuZE9mQ29tbWVudFRva2VuKHN0cmluZywgbGluZSk7XG4gICAgXG4gICAgcmV0dXJuIGVuZE9mQ29tbWVudFRva2VuO1xuICB9XG4gIFxuICBzdGF0aWMgcG9zaXRpb24oY29udGVudCkge1xuICAgIHZhciBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9cXCpcXCkvKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIGVuZE9mQ29tbWVudFRva2VuID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL15cXCpcXCkvKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgIHN0cmluZyA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBlbmRPZkNvbW1lbnRUb2tlbiA9IG5ldyBFbmRPZkNvbW1lbnRUb2tlbihzdHJpbmcsIGxpbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmRPZkNvbW1lbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==