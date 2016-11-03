'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var ErrorToken = function (_Token) {
  _inherits(ErrorToken, _Token);

  function ErrorToken(string, line, message) {
    _classCallCheck(this, ErrorToken);

    var _this = _possibleConstructorReturn(this, (ErrorToken.__proto__ || Object.getPrototypeOf(ErrorToken)).call(this, string, line, message));

    _this.message = message;
    return _this;
  }

  _createClass(ErrorToken, [{
    key: 'clone',
    value: function clone() {
      var string = this.getString(),
          line = this.getLine(),
          message = this.getMessage(),
          errorToken = new ErrorToken(string, line, message);

      return errorToken;
    }
  }, {
    key: 'getMessage',
    value: function getMessage() {
      return this.message;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var innerHTML = this.getString(),
          ///
      className = 'error',
          ///
      dataMessage = this.message,
          html = '<span class="' + className + '" data-message="' + dataMessage + '">' + innerHTML + '</span>';

      return html;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, line, message) {
      var string = content,
          ///
      errorToken = new ErrorToken(string, line, message);

      return errorToken;
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsInN0cmluZyIsImxpbmUiLCJtZXNzYWdlIiwiZ2V0U3RyaW5nIiwiZ2V0TGluZSIsImdldE1lc3NhZ2UiLCJlcnJvclRva2VuIiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiZGF0YU1lc3NhZ2UiLCJodG1sIiwiY29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLFU7OztBQUNKLHNCQUFZQyxNQUFaLEVBQW9CQyxJQUFwQixFQUEwQkMsT0FBMUIsRUFBbUM7QUFBQTs7QUFBQSx3SEFDM0JGLE1BRDJCLEVBQ25CQyxJQURtQixFQUNiQyxPQURhOztBQUdqQyxVQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFIaUM7QUFJbEM7Ozs7NEJBRU87QUFDTixVQUFJRixTQUFTLEtBQUtHLFNBQUwsRUFBYjtBQUFBLFVBQ0lGLE9BQU8sS0FBS0csT0FBTCxFQURYO0FBQUEsVUFFSUYsVUFBVSxLQUFLRyxVQUFMLEVBRmQ7QUFBQSxVQUdJQyxhQUFhLElBQUlQLFVBQUosQ0FBZUMsTUFBZixFQUF1QkMsSUFBdkIsRUFBNkJDLE9BQTdCLENBSGpCOztBQUtBLGFBQU9JLFVBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLSixPQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlLLFlBQVksS0FBS0osU0FBTCxFQUFoQjtBQUFBLFVBQWtDO0FBQzlCSyxrQkFBWSxPQURoQjtBQUFBLFVBQzBCO0FBQ3RCQyxvQkFBYyxLQUFLUCxPQUZ2QjtBQUFBLFVBR0lRLHlCQUF1QkYsU0FBdkIsd0JBQW1EQyxXQUFuRCxVQUFtRUYsU0FBbkUsWUFISjs7QUFLQSxhQUFPRyxJQUFQO0FBQ0Q7OztnQ0FFa0JDLE8sRUFBU1YsSSxFQUFNQyxPLEVBQVM7QUFDekMsVUFBSUYsU0FBU1csT0FBYjtBQUFBLFVBQXVCO0FBQ25CTCxtQkFBYSxJQUFJUCxVQUFKLENBQWVDLE1BQWYsRUFBdUJDLElBQXZCLEVBQTZCQyxPQUE3QixDQURqQjs7QUFHQSxhQUFPSSxVQUFQO0FBQ0Q7Ozs7RUFsQ3NCVCxLOztBQXFDekJlLE9BQU9DLE9BQVAsR0FBaUJkLFVBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBFcnJvclRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGxpbmUsIG1lc3NhZ2UpIHtcbiAgICBzdXBlcihzdHJpbmcsIGxpbmUsIG1lc3NhZ2UpO1xuXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuICBcbiAgY2xvbmUoKSB7XG4gICAgdmFyIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgbWVzc2FnZSA9IHRoaXMuZ2V0TWVzc2FnZSgpLFxuICAgICAgICBlcnJvclRva2VuID0gbmV3IEVycm9yVG9rZW4oc3RyaW5nLCBsaW5lLCBtZXNzYWdlKTtcbiAgICBcbiAgICByZXR1cm4gZXJyb3JUb2tlbjtcbiAgfVxuICBcbiAgZ2V0TWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgaW5uZXJIVE1MID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgIGNsYXNzTmFtZSA9ICdlcnJvcicsICAvLy9cbiAgICAgICAgZGF0YU1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UsXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBkYXRhLW1lc3NhZ2U9XCIke2RhdGFNZXNzYWdlfVwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSwgbWVzc2FnZSkge1xuICAgIHZhciBzdHJpbmcgPSBjb250ZW50LCAgLy8vXG4gICAgICAgIGVycm9yVG9rZW4gPSBuZXcgRXJyb3JUb2tlbihzdHJpbmcsIGxpbmUsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIGVycm9yVG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvclRva2VuO1xuIl19