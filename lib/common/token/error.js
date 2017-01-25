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
      sanitisedInnerHTML = Token.sanitiseHTML(innerHTML),
          html = '<span class="' + className + '"">' + sanitisedInnerHTML + '</span>';

      return html;
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwibWVzc2FnZSIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0TWVzc2FnZSIsImVycm9yVG9rZW4iLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJzYW5pdGlzZWRJbm5lckhUTUwiLCJzYW5pdGlzZUhUTUwiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLFVBQVIsQ0FBWjs7SUFFTUMsVTs7O0FBQ0osc0JBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxPQUEzQixFQUFvQztBQUFBOztBQUFBLHdIQUM1QkYsT0FENEIsRUFDbkJDLElBRG1CLEVBQ2JDLE9BRGE7O0FBR2xDLFVBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUhrQztBQUluQzs7Ozs0QkFFTztBQUNOLFVBQUlGLFVBQVUsS0FBS0csVUFBTCxFQUFkO0FBQUEsVUFDSUYsT0FBTyxLQUFLRyxPQUFMLEVBRFg7QUFBQSxVQUVJRixVQUFVLEtBQUtHLFVBQUwsRUFGZDtBQUFBLFVBR0lDLGFBQWEsSUFBSVAsVUFBSixDQUFlQyxPQUFmLEVBQXdCQyxJQUF4QixFQUE4QkMsT0FBOUIsQ0FIakI7O0FBS0EsYUFBT0ksVUFBUDtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtKLE9BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUYsVUFBVSxLQUFLRyxVQUFMLEVBQWQ7QUFBQSxVQUNJSSxZQUFZUCxPQURoQjtBQUFBLFVBQ3lCO0FBQ3JCUSxrQkFBWSxPQUZoQjtBQUFBLFVBRTBCO0FBQ3RCQywyQkFBcUJaLE1BQU1hLFlBQU4sQ0FBbUJILFNBQW5CLENBSHpCO0FBQUEsVUFJSUkseUJBQXVCSCxTQUF2QixXQUFzQ0Msa0JBQXRDLFlBSko7O0FBTUEsYUFBT0UsSUFBUDtBQUNEOzs7O0VBNUJzQmQsSzs7QUErQnpCZSxPQUFPQyxPQUFQLEdBQWlCZCxVQUFqQiIsImZpbGUiOiJlcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY2xhc3MgRXJyb3JUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgbWVzc2FnZSkge1xuICAgIHN1cGVyKGNvbnRlbnQsIGxpbmUsIG1lc3NhZ2UpO1xuXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuICBcbiAgY2xvbmUoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICBtZXNzYWdlID0gdGhpcy5nZXRNZXNzYWdlKCksXG4gICAgICAgIGVycm9yVG9rZW4gPSBuZXcgRXJyb3JUb2tlbihjb250ZW50LCBsaW5lLCBtZXNzYWdlKTtcbiAgICBcbiAgICByZXR1cm4gZXJyb3JUb2tlbjtcbiAgfVxuICBcbiAgZ2V0TWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBpbm5lckhUTUwgPSBjb250ZW50LCAvLy9cbiAgICAgICAgY2xhc3NOYW1lID0gJ2Vycm9yJywgIC8vL1xuICAgICAgICBzYW5pdGlzZWRJbm5lckhUTUwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaW5uZXJIVE1MKSxcbiAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiXCI+JHtzYW5pdGlzZWRJbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yVG9rZW47XG4iXX0=