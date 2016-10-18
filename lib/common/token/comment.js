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
    key: 'merge',
    value: function merge(commentToken) {
      var str = this.getString(),
          commentTokenStr = commentToken.getString();

      str += commentTokenStr;

      this.setString(str);

      return this;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var innerHTML = this.getString(),
          ///
      html = '<span class="comment">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return CommentToken;
}(Token);

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vY29tbWVudC5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJDb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW4iLCJzdHIiLCJnZXRTdHJpbmciLCJjb21tZW50VG9rZW5TdHIiLCJzZXRTdHJpbmciLCJpbm5lckhUTUwiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLG9CQUFSLENBQVo7O0lBRU1DLFk7Ozs7Ozs7Ozs7OzBCQUNFQyxZLEVBQWM7QUFDbEIsVUFBSUMsTUFBTSxLQUFLQyxTQUFMLEVBQVY7QUFBQSxVQUNJQyxrQkFBa0JILGFBQWFFLFNBQWIsRUFEdEI7O0FBR0FELGFBQU9FLGVBQVA7O0FBRUEsV0FBS0MsU0FBTCxDQUFlSCxHQUFmOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFJSSxZQUFZLEtBQUtILFNBQUwsRUFBaEI7QUFBQSxVQUFrQztBQUM5Qkksd0NBQWdDRCxTQUFoQyxZQURKOztBQUdBLGFBQU9DLElBQVA7QUFDRDs7OztFQWpCd0JULEs7O0FBb0IzQlUsT0FBT0MsT0FBUCxHQUFpQlQsWUFBakIiLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuJyk7XG5cbmNsYXNzIENvbW1lbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgbWVyZ2UoY29tbWVudFRva2VuKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIGNvbW1lbnRUb2tlblN0ciA9IGNvbW1lbnRUb2tlbi5nZXRTdHJpbmcoKTtcblxuICAgIHN0ciArPSBjb21tZW50VG9rZW5TdHI7XG4gICAgXG4gICAgdGhpcy5zZXRTdHJpbmcoc3RyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgaW5uZXJIVE1MID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCJjb21tZW50XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbjtcbiJdfQ==