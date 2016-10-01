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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL2NvbW1lbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiQ29tbWVudFRva2VuIiwic3RyIiwiZ2V0U3RyaW5nIiwiaHRtbCIsImNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlblN0ciIsInNldFN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxvQkFBUixDQUFaOztJQUVNQyxZOzs7Ozs7Ozs7Ozs4QkFDTTtBQUNSLFVBQUlDLE1BQU0sS0FBS0MsU0FBTCxFQUFWO0FBQUEsVUFDSUMsT0FBTywyQkFBMkJGLEdBQTNCLEdBQWlDLFNBRDVDOztBQUdBLGFBQU9FLElBQVA7QUFDRDs7OzBCQUVLQyxZLEVBQWM7QUFDbEIsVUFBSUgsTUFBTSxLQUFLQyxTQUFMLEVBQVY7QUFBQSxVQUNJRyxrQkFBa0JELGFBQWFGLFNBQWIsRUFEdEI7O0FBR0FELGFBQU9JLGVBQVA7O0FBRUEsV0FBS0MsU0FBTCxDQUFlTCxHQUFmOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7O0VBakJ3QkgsSzs7QUFvQjNCUyxPQUFPQyxPQUFQLEdBQWlCUixZQUFqQiIsImZpbGUiOiJjb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4nKTtcblxuY2xhc3MgQ29tbWVudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBnZXRIVE1MKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICBodG1sID0gJzxzcGFuIGNsYXNzPVwiY29tbWVudFwiPicgKyBzdHIgKyAnPC9zcGFuPic7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIG1lcmdlKGNvbW1lbnRUb2tlbikge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICBjb21tZW50VG9rZW5TdHIgPSBjb21tZW50VG9rZW4uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHIgKz0gY29tbWVudFRva2VuU3RyO1xuICAgIFxuICAgIHRoaXMuc2V0U3RyaW5nKHN0cik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbjtcbiJdfQ==