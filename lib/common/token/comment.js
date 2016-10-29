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
      var string = this.getString(),
          commentTokenString = commentToken.getString();

      string += commentTokenString;

      this.setString(string);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vY29tbWVudC5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJDb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW4iLCJzdHJpbmciLCJnZXRTdHJpbmciLCJjb21tZW50VG9rZW5TdHJpbmciLCJzZXRTdHJpbmciLCJpbm5lckhUTUwiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLG9CQUFSLENBQVo7O0lBRU1DLFk7Ozs7Ozs7Ozs7OzBCQUNFQyxZLEVBQWM7QUFDbEIsVUFBSUMsU0FBUyxLQUFLQyxTQUFMLEVBQWI7QUFBQSxVQUNJQyxxQkFBcUJILGFBQWFFLFNBQWIsRUFEekI7O0FBR0FELGdCQUFVRSxrQkFBVjs7QUFFQSxXQUFLQyxTQUFMLENBQWVILE1BQWY7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlJLFlBQVksS0FBS0gsU0FBTCxFQUFoQjtBQUFBLFVBQWtDO0FBQzlCSSx3Q0FBZ0NELFNBQWhDLFlBREo7O0FBR0EsYUFBT0MsSUFBUDtBQUNEOzs7O0VBakJ3QlQsSzs7QUFvQjNCVSxPQUFPQyxPQUFQLEdBQWlCVCxZQUFqQiIsImZpbGUiOiJjb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4nKTtcblxuY2xhc3MgQ29tbWVudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBtZXJnZShjb21tZW50VG9rZW4pIHtcbiAgICB2YXIgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgY29tbWVudFRva2VuU3RyaW5nID0gY29tbWVudFRva2VuLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nICs9IGNvbW1lbnRUb2tlblN0cmluZztcbiAgICBcbiAgICB0aGlzLnNldFN0cmluZyhzdHJpbmcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHZhciBpbm5lckhUTUwgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cImNvbW1lbnRcIj4ke2lubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VuO1xuIl19