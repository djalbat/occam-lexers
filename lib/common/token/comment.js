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
    key: 'getHTML',
    value: function getHTML() {
      var str = this.getString(),
          html = '<span class="comment">' + str + '</span>';

      return html;
    }
  }, {
    key: 'merge',
    value: function merge(commentToken) {
      var str = this.getString(),
          commentTokenStr = commentToken.getString();

      str += commentTokenStr;

      this.setString(str);

      return this;
    }
  }]);

  return CommentToken;
}(Token);

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vY29tbWVudC5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJDb21tZW50VG9rZW4iLCJzdHIiLCJnZXRTdHJpbmciLCJodG1sIiwiY29tbWVudFRva2VuIiwiY29tbWVudFRva2VuU3RyIiwic2V0U3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLG9CQUFSLENBQVo7O0lBRU1DLFk7Ozs7Ozs7Ozs7OzhCQUNNO0FBQ1IsVUFBSUMsTUFBTSxLQUFLQyxTQUFMLEVBQVY7QUFBQSxVQUNJQyxPQUFPLDJCQUEyQkYsR0FBM0IsR0FBaUMsU0FENUM7O0FBR0EsYUFBT0UsSUFBUDtBQUNEOzs7MEJBRUtDLFksRUFBYztBQUNsQixVQUFJSCxNQUFNLEtBQUtDLFNBQUwsRUFBVjtBQUFBLFVBQ0lHLGtCQUFrQkQsYUFBYUYsU0FBYixFQUR0Qjs7QUFHQUQsYUFBT0ksZUFBUDs7QUFFQSxXQUFLQyxTQUFMLENBQWVMLEdBQWY7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFqQndCSCxLOztBQW9CM0JTLE9BQU9DLE9BQVAsR0FBaUJSLFlBQWpCIiwiZmlsZSI6ImNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbicpO1xuXG5jbGFzcyBDb21tZW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIGh0bWwgPSAnPHNwYW4gY2xhc3M9XCJjb21tZW50XCI+JyArIHN0ciArICc8L3NwYW4+JztcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgbWVyZ2UoY29tbWVudFRva2VuKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIGNvbW1lbnRUb2tlblN0ciA9IGNvbW1lbnRUb2tlbi5nZXRTdHJpbmcoKTtcblxuICAgIHN0ciArPSBjb21tZW50VG9rZW5TdHI7XG4gICAgXG4gICAgdGhpcy5zZXRTdHJpbmcoc3RyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VuO1xuIl19