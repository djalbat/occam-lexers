'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var ErrorToken = function (_Token) {
  _inherits(ErrorToken, _Token);

  function ErrorToken(content, line, message) {
    _classCallCheck(this, ErrorToken);

    var _this = _possibleConstructorReturn(this, (ErrorToken.__proto__ || Object.getPrototypeOf(ErrorToken)).call(this, content, line));

    _this.message = message;
    return _this;
  }

  _createClass(ErrorToken, [{
    key: 'clone',
    value: function clone() {
      var content = this.getContent(),
          line = this.getLine(),
          message = this.getMessage(),
          errorToken = new ErrorToken(content, line, message);

      return errorToken;
    }
  }, {
    key: 'getMessage',
    value: function getMessage() {
      return this.message;
    }
  }, {
    key: 'updateHTML',
    value: function updateHTML() {
      var content = this.getContent(),
          innerHTML = content,
          ///
      className = 'error',
          ///
      sanitisedInnerHTML = Token.sanitiseHTML(innerHTML),
          html = '<span class="' + className + '"">' + sanitisedInnerHTML + '</span>';

      this.setHTML(html);
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwibWVzc2FnZSIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0TWVzc2FnZSIsImVycm9yVG9rZW4iLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJzYW5pdGlzZWRJbm5lckhUTUwiLCJzYW5pdGlzZUhUTUwiLCJodG1sIiwic2V0SFRNTCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLFU7OztBQUNKLHNCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsT0FBM0IsRUFBb0M7QUFBQTs7QUFBQSx3SEFDNUJGLE9BRDRCLEVBQ25CQyxJQURtQjs7QUFHbEMsVUFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBSGtDO0FBSW5DOzs7OzRCQUVPO0FBQ04sVUFBSUYsVUFBVSxLQUFLRyxVQUFMLEVBQWQ7QUFBQSxVQUNJRixPQUFPLEtBQUtHLE9BQUwsRUFEWDtBQUFBLFVBRUlGLFVBQVUsS0FBS0csVUFBTCxFQUZkO0FBQUEsVUFHSUMsYUFBYSxJQUFJUCxVQUFKLENBQWVDLE9BQWYsRUFBd0JDLElBQXhCLEVBQThCQyxPQUE5QixDQUhqQjs7QUFLQSxhQUFPSSxVQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0osT0FBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJRixVQUFVLEtBQUtHLFVBQUwsRUFBZDtBQUFBLFVBQ0lJLFlBQVlQLE9BRGhCO0FBQUEsVUFDeUI7QUFDckJRLGtCQUFZLE9BRmhCO0FBQUEsVUFFMEI7QUFDdEJDLDJCQUFxQlosTUFBTWEsWUFBTixDQUFtQkgsU0FBbkIsQ0FIekI7QUFBQSxVQUlJSSx5QkFBdUJILFNBQXZCLFdBQXNDQyxrQkFBdEMsWUFKSjs7QUFNQSxXQUFLRyxPQUFMLENBQWFELElBQWI7QUFDRDs7OztFQTVCc0JkLEs7O0FBK0J6QmdCLE9BQU9DLE9BQVAsR0FBaUJmLFVBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBFcnJvclRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCBtZXNzYWdlKSB7XG4gICAgc3VwZXIoY29udGVudCwgbGluZSk7XG5cbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG4gIFxuICBjbG9uZSgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgIG1lc3NhZ2UgPSB0aGlzLmdldE1lc3NhZ2UoKSxcbiAgICAgICAgZXJyb3JUb2tlbiA9IG5ldyBFcnJvclRva2VuKGNvbnRlbnQsIGxpbmUsIG1lc3NhZ2UpO1xuICAgIFxuICAgIHJldHVybiBlcnJvclRva2VuO1xuICB9XG4gIFxuICBnZXRNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gIH1cblxuICB1cGRhdGVIVE1MKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGlubmVySFRNTCA9IGNvbnRlbnQsIC8vL1xuICAgICAgICBjbGFzc05hbWUgPSAnZXJyb3InLCAgLy8vXG4gICAgICAgIHNhbml0aXNlZElubmVySFRNTCA9IFRva2VuLnNhbml0aXNlSFRNTChpbm5lckhUTUwpLFxuICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJcIj4ke3Nhbml0aXNlZElubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHRoaXMuc2V0SFRNTChodG1sKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yVG9rZW47XG4iXX0=