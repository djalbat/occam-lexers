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

  _createClass(ErrorToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getString();

      return new ErrorToken(str);
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var str = this.getString(),
          html = '<span class="error">' + str + '</span>';

      return html;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var str = content,
          ///
      errorToken = new ErrorToken(str);

      return errorToken;
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsInN0ciIsImdldFN0cmluZyIsImh0bWwiLCJjb250ZW50IiwiZXJyb3JUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLFU7Ozs7Ozs7Ozs7OzRCQUNJO0FBQ04sVUFBSUMsTUFBTSxLQUFLQyxTQUFMLEVBQVY7O0FBRUEsYUFBTyxJQUFJRixVQUFKLENBQWVDLEdBQWYsQ0FBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFJQSxNQUFNLEtBQUtDLFNBQUwsRUFBVjtBQUFBLFVBQ0lDLE9BQU8seUJBQXlCRixHQUF6QixHQUErQixTQUQxQzs7QUFHQSxhQUFPRSxJQUFQO0FBQ0Q7OztnQ0FFa0JDLE8sRUFBUztBQUMxQixVQUFJSCxNQUFNRyxPQUFWO0FBQUEsVUFBb0I7QUFDaEJDLG1CQUFhLElBQUlMLFVBQUosQ0FBZUMsR0FBZixDQURqQjs7QUFHQSxhQUFPSSxVQUFQO0FBQ0Q7Ozs7RUFuQnNCUCxLOztBQXNCekJRLE9BQU9DLE9BQVAsR0FBaUJQLFVBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBFcnJvclRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjbG9uZSgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIHJldHVybiBuZXcgRXJyb3JUb2tlbihzdHIpO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgaHRtbCA9ICc8c3BhbiBjbGFzcz1cImVycm9yXCI+JyArIHN0ciArICc8L3NwYW4+JztcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgc3RyID0gY29udGVudCwgIC8vL1xuICAgICAgICBlcnJvclRva2VuID0gbmV3IEVycm9yVG9rZW4oc3RyKTtcblxuICAgIHJldHVybiBlcnJvclRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JUb2tlbjtcbiJdfQ==