'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var ErrorToken = function (_Token) {
  _inherits(ErrorToken, _Token);

  function ErrorToken() {
    _classCallCheck(this, ErrorToken);

    return _possibleConstructorReturn(this, (ErrorToken.__proto__ || Object.getPrototypeOf(ErrorToken)).apply(this, arguments));
  }

  _createClass(ErrorToken, null, [{
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var innerHTML = content,
          ///
      className = 'error'; ///

      innerHTML = Token.sanitiseHTML(innerHTML);

      var html = '<span class="' + className + '">' + innerHTML + '</span>';

      return html;
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      return Token.fromContentAndLine(content, line, ErrorToken);
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJzYW5pdGlzZUhUTUwiLCJodG1sIiwibGluZSIsImZyb21Db250ZW50QW5kTGluZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLFU7Ozs7Ozs7Ozs7O29DQUNtQkMsTyxFQUFTO0FBQzlCLFVBQUlDLFlBQVlELE9BQWhCO0FBQUEsVUFBeUI7QUFDckJFLGtCQUFZLE9BRGhCLENBRDhCLENBRUw7O0FBRXpCRCxrQkFBWUosTUFBTU0sWUFBTixDQUFtQkYsU0FBbkIsQ0FBWjs7QUFFQSxVQUFJRyx5QkFBdUJGLFNBQXZCLFVBQXFDRCxTQUFyQyxZQUFKOztBQUVBLGFBQU9HLElBQVA7QUFDRDs7O3VDQUV5QkosTyxFQUFTSyxJLEVBQU07QUFBRSxhQUFPUixNQUFNUyxrQkFBTixDQUF5Qk4sT0FBekIsRUFBa0NLLElBQWxDLEVBQXdDTixVQUF4QyxDQUFQO0FBQTZEOzs7O0VBWmpGRixLOztBQWV6QlUsT0FBT0MsT0FBUCxHQUFpQlQsVUFBakIiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIEVycm9yVG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIHN0YXRpYyBodG1sRnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBpbm5lckhUTUwgPSBjb250ZW50LCAvLy9cbiAgICAgICAgY2xhc3NOYW1lID0gJ2Vycm9yJzsgLy8vXG5cbiAgICBpbm5lckhUTUwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaW5uZXJIVE1MKTtcblxuICAgIHZhciBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkgeyByZXR1cm4gVG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIEVycm9yVG9rZW4pOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JUb2tlbjtcbiJdfQ==