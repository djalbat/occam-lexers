'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../../common/token');

var CommentToken = function (_Token) {
  _inherits(CommentToken, _Token);

  function CommentToken() {
    _classCallCheck(this, CommentToken);

    return _possibleConstructorReturn(this, (CommentToken.__proto__ || Object.getPrototypeOf(CommentToken)).apply(this, arguments));
  }

  _createClass(CommentToken, [{
    key: 'clone',
    value: function clone(Class) {
      var content = this.getContent(),
          line = this.getLine(),
          commentToken = new Class(content, line);

      return commentToken;
    }
  }, {
    key: 'merge',
    value: function merge(commentToken) {
      var content = this.getContent(),
          commentTokenContent = commentToken.getContent();

      content += commentTokenContent;

      this.setContent(content);

      return this;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var content = this.getContent(),
          innerHTML = content,
          ///
      html = '<span class="comment">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return CommentToken;
}(Token);

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vY29tbWVudC5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJDb21tZW50VG9rZW4iLCJDbGFzcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGluZSIsImdldExpbmUiLCJjb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW5Db250ZW50Iiwic2V0Q29udGVudCIsImlubmVySFRNTCIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsb0JBQVIsQ0FBWjs7SUFFTUMsWTs7Ozs7Ozs7Ozs7MEJBQ0VDLEssRUFBTztBQUNYLFVBQUlDLFVBQVUsS0FBS0MsVUFBTCxFQUFkO0FBQUEsVUFDSUMsT0FBTyxLQUFLQyxPQUFMLEVBRFg7QUFBQSxVQUVJQyxlQUFlLElBQUlMLEtBQUosQ0FBVUMsT0FBVixFQUFtQkUsSUFBbkIsQ0FGbkI7O0FBSUEsYUFBT0UsWUFBUDtBQUNEOzs7MEJBRUtBLFksRUFBYztBQUNsQixVQUFJSixVQUFVLEtBQUtDLFVBQUwsRUFBZDtBQUFBLFVBQ0lJLHNCQUFzQkQsYUFBYUgsVUFBYixFQUQxQjs7QUFHQUQsaUJBQVdLLG1CQUFYOztBQUVBLFdBQUtDLFVBQUwsQ0FBZ0JOLE9BQWhCOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFJQSxVQUFVLEtBQUtDLFVBQUwsRUFBZDtBQUFBLFVBQ0lNLFlBQVlQLE9BRGhCO0FBQUEsVUFDeUI7QUFDckJRLHdDQUFnQ0QsU0FBaEMsWUFGSjs7QUFJQSxhQUFPQyxJQUFQO0FBQ0Q7Ozs7RUExQndCWixLOztBQTZCM0JhLE9BQU9DLE9BQVAsR0FBaUJaLFlBQWpCIiwiZmlsZSI6ImNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbicpO1xuXG5jbGFzcyBDb21tZW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNsb25lKENsYXNzKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICBjb21tZW50VG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSk7XG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG4gIFxuICBtZXJnZShjb21tZW50VG9rZW4pIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBjb21tZW50VG9rZW5Db250ZW50ID0gY29tbWVudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgKz0gY29tbWVudFRva2VuQ29udGVudDtcbiAgICBcbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgaW5uZXJIVE1MID0gY29udGVudCwgLy8vXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCJjb21tZW50XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbjtcbiJdfQ==