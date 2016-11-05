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

    var _this = _possibleConstructorReturn(this, (ErrorToken.__proto__ || Object.getPrototypeOf(ErrorToken)).call(this, content, line, message));

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
    key: 'getHTML',
    value: function getHTML() {
      var content = this.getContent(),
          innerHTML = content,
          ///
      className = 'error',
          ///
      message = this.message,
          html = '<span class="' + className + '" data-message="' + message + '">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwibWVzc2FnZSIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0TWVzc2FnZSIsImVycm9yVG9rZW4iLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLFVBQVIsQ0FBWjs7SUFFTUMsVTs7O0FBQ0osc0JBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxPQUEzQixFQUFvQztBQUFBOztBQUFBLHdIQUM1QkYsT0FENEIsRUFDbkJDLElBRG1CLEVBQ2JDLE9BRGE7O0FBR2xDLFVBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUhrQztBQUluQzs7Ozs0QkFFTztBQUNOLFVBQUlGLFVBQVUsS0FBS0csVUFBTCxFQUFkO0FBQUEsVUFDSUYsT0FBTyxLQUFLRyxPQUFMLEVBRFg7QUFBQSxVQUVJRixVQUFVLEtBQUtHLFVBQUwsRUFGZDtBQUFBLFVBR0lDLGFBQWEsSUFBSVAsVUFBSixDQUFlQyxPQUFmLEVBQXdCQyxJQUF4QixFQUE4QkMsT0FBOUIsQ0FIakI7O0FBS0EsYUFBT0ksVUFBUDtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtKLE9BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUYsVUFBVSxLQUFLRyxVQUFMLEVBQWQ7QUFBQSxVQUNJSSxZQUFZUCxPQURoQjtBQUFBLFVBQ3lCO0FBQ3JCUSxrQkFBWSxPQUZoQjtBQUFBLFVBRTBCO0FBQ3RCTixnQkFBVSxLQUFLQSxPQUhuQjtBQUFBLFVBSUlPLHlCQUF1QkQsU0FBdkIsd0JBQW1ETixPQUFuRCxVQUErREssU0FBL0QsWUFKSjs7QUFNQSxhQUFPRSxJQUFQO0FBQ0Q7Ozs7RUE1QnNCWixLOztBQStCekJhLE9BQU9DLE9BQVAsR0FBaUJaLFVBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBFcnJvclRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCBtZXNzYWdlKSB7XG4gICAgc3VwZXIoY29udGVudCwgbGluZSwgbWVzc2FnZSk7XG5cbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG4gIFxuICBjbG9uZSgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgIG1lc3NhZ2UgPSB0aGlzLmdldE1lc3NhZ2UoKSxcbiAgICAgICAgZXJyb3JUb2tlbiA9IG5ldyBFcnJvclRva2VuKGNvbnRlbnQsIGxpbmUsIG1lc3NhZ2UpO1xuICAgIFxuICAgIHJldHVybiBlcnJvclRva2VuO1xuICB9XG4gIFxuICBnZXRNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGlubmVySFRNTCA9IGNvbnRlbnQsIC8vL1xuICAgICAgICBjbGFzc05hbWUgPSAnZXJyb3InLCAgLy8vXG4gICAgICAgIG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UsXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBkYXRhLW1lc3NhZ2U9XCIke21lc3NhZ2V9XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yVG9rZW47XG4iXX0=