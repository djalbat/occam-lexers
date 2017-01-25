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
      sanitisedInnerHTML = Token.sanitiseHTML(innerHTML),
          html = '<span class="comment">' + sanitisedInnerHTML + '</span>';

      return html;
    }
  }]);

  return CommentToken;
}(Token);

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vY29tbWVudC5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJDb21tZW50VG9rZW4iLCJDbGFzcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGluZSIsImdldExpbmUiLCJjb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW5Db250ZW50Iiwic2V0Q29udGVudCIsImlubmVySFRNTCIsInNhbml0aXNlZElubmVySFRNTCIsInNhbml0aXNlSFRNTCIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsb0JBQVIsQ0FBWjs7SUFFTUMsWTs7Ozs7Ozs7Ozs7MEJBQ0VDLEssRUFBTztBQUNYLFVBQUlDLFVBQVUsS0FBS0MsVUFBTCxFQUFkO0FBQUEsVUFDSUMsT0FBTyxLQUFLQyxPQUFMLEVBRFg7QUFBQSxVQUVJQyxlQUFlLElBQUlMLEtBQUosQ0FBVUMsT0FBVixFQUFtQkUsSUFBbkIsQ0FGbkI7O0FBSUEsYUFBT0UsWUFBUDtBQUNEOzs7MEJBRUtBLFksRUFBYztBQUNsQixVQUFJSixVQUFVLEtBQUtDLFVBQUwsRUFBZDtBQUFBLFVBQ0lJLHNCQUFzQkQsYUFBYUgsVUFBYixFQUQxQjs7QUFHQUQsaUJBQVdLLG1CQUFYOztBQUVBLFdBQUtDLFVBQUwsQ0FBZ0JOLE9BQWhCOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFJQSxVQUFVLEtBQUtDLFVBQUwsRUFBZDtBQUFBLFVBQ0lNLFlBQVlQLE9BRGhCO0FBQUEsVUFDeUI7QUFDckJRLDJCQUFxQlosTUFBTWEsWUFBTixDQUFtQkYsU0FBbkIsQ0FGekI7QUFBQSxVQUdJRyxrQ0FBZ0NGLGtCQUFoQyxZQUhKOztBQUtBLGFBQU9FLElBQVA7QUFDRDs7OztFQTNCd0JkLEs7O0FBOEIzQmUsT0FBT0MsT0FBUCxHQUFpQmQsWUFBakIiLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuJyk7XG5cbmNsYXNzIENvbW1lbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY2xvbmUoQ2xhc3MpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgIGNvbW1lbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lKTtcblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cbiAgXG4gIG1lcmdlKGNvbW1lbnRUb2tlbikge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGNvbW1lbnRUb2tlbkNvbnRlbnQgPSBjb21tZW50VG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgY29udGVudCArPSBjb21tZW50VG9rZW5Db250ZW50O1xuICAgIFxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBpbm5lckhUTUwgPSBjb250ZW50LCAvLy9cbiAgICAgICAgc2FuaXRpc2VkSW5uZXJIVE1MID0gVG9rZW4uc2FuaXRpc2VIVE1MKGlubmVySFRNTCksXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCJjb21tZW50XCI+JHtzYW5pdGlzZWRJbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbjtcbiJdfQ==