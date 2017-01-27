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

      return this; ///
    }
  }, {
    key: 'updateHTML',
    value: function updateHTML() {
      var content = this.getContent(),
          innerHTML = content,
          ///
      sanitisedInnerHTML = Token.sanitiseHTML(innerHTML),
          html = '<span class="comment">' + sanitisedInnerHTML + '</span>';

      this.setHTML(html);
    }
  }]);

  return CommentToken;
}(Token);

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vY29tbWVudC5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJDb21tZW50VG9rZW4iLCJDbGFzcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGluZSIsImdldExpbmUiLCJjb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW5Db250ZW50Iiwic2V0Q29udGVudCIsImlubmVySFRNTCIsInNhbml0aXNlZElubmVySFRNTCIsInNhbml0aXNlSFRNTCIsImh0bWwiLCJzZXRIVE1MIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLG9CQUFSLENBQVo7O0lBRU1DLFk7Ozs7Ozs7Ozs7OzBCQUNFQyxLLEVBQU87QUFDWCxVQUFJQyxVQUFVLEtBQUtDLFVBQUwsRUFBZDtBQUFBLFVBQ0lDLE9BQU8sS0FBS0MsT0FBTCxFQURYO0FBQUEsVUFFSUMsZUFBZSxJQUFJTCxLQUFKLENBQVVDLE9BQVYsRUFBbUJFLElBQW5CLENBRm5COztBQUlBLGFBQU9FLFlBQVA7QUFDRDs7OzBCQUVLQSxZLEVBQWM7QUFDbEIsVUFBSUosVUFBVSxLQUFLQyxVQUFMLEVBQWQ7QUFBQSxVQUNJSSxzQkFBc0JELGFBQWFILFVBQWIsRUFEMUI7O0FBR0FELGlCQUFXSyxtQkFBWDs7QUFFQSxXQUFLQyxVQUFMLENBQWdCTixPQUFoQjs7QUFFQSxhQUFPLElBQVAsQ0FSa0IsQ0FRSjtBQUNmOzs7aUNBRVk7QUFDWCxVQUFJQSxVQUFVLEtBQUtDLFVBQUwsRUFBZDtBQUFBLFVBQ0lNLFlBQVlQLE9BRGhCO0FBQUEsVUFDeUI7QUFDckJRLDJCQUFxQlosTUFBTWEsWUFBTixDQUFtQkYsU0FBbkIsQ0FGekI7QUFBQSxVQUdJRyxrQ0FBZ0NGLGtCQUFoQyxZQUhKOztBQUtBLFdBQUtHLE9BQUwsQ0FBYUQsSUFBYjtBQUNEOzs7O0VBM0J3QmQsSzs7QUE4QjNCZ0IsT0FBT0MsT0FBUCxHQUFpQmYsWUFBakIiLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuJyk7XG5cbmNsYXNzIENvbW1lbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY2xvbmUoQ2xhc3MpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgIGNvbW1lbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lKTtcblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cbiAgXG4gIG1lcmdlKGNvbW1lbnRUb2tlbikge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGNvbW1lbnRUb2tlbkNvbnRlbnQgPSBjb21tZW50VG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgY29udGVudCArPSBjb21tZW50VG9rZW5Db250ZW50O1xuICAgIFxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHJldHVybiB0aGlzOyAgLy8vXG4gIH1cblxuICB1cGRhdGVIVE1MKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGlubmVySFRNTCA9IGNvbnRlbnQsIC8vL1xuICAgICAgICBzYW5pdGlzZWRJbm5lckhUTUwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaW5uZXJIVE1MKSxcbiAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cImNvbW1lbnRcIj4ke3Nhbml0aXNlZElubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHRoaXMuc2V0SFRNTChodG1sKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbjtcbiJdfQ==