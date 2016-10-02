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
    key: 'getHTML',
    value: function getHTML() {
      var str = this.getString(),
          html = '<span class="error">' + str + '</span>';

      return html;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, line) {
      var str = content,
          ///
      errorToken = new ErrorToken(str, line);

      return errorToken;
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsInN0ciIsImdldFN0cmluZyIsImh0bWwiLCJjb250ZW50IiwibGluZSIsImVycm9yVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxVOzs7Ozs7Ozs7Ozs4QkFDTTtBQUNSLFVBQUlDLE1BQU0sS0FBS0MsU0FBTCxFQUFWO0FBQUEsVUFDSUMsT0FBTyx5QkFBeUJGLEdBQXpCLEdBQStCLFNBRDFDOztBQUdBLGFBQU9FLElBQVA7QUFDRDs7O2dDQUVrQkMsTyxFQUFTQyxJLEVBQU07QUFDaEMsVUFBSUosTUFBTUcsT0FBVjtBQUFBLFVBQW9CO0FBQ2hCRSxtQkFBYSxJQUFJTixVQUFKLENBQWVDLEdBQWYsRUFBb0JJLElBQXBCLENBRGpCOztBQUdBLGFBQU9DLFVBQVA7QUFDRDs7OztFQWJzQlIsSzs7QUFnQnpCUyxPQUFPQyxPQUFQLEdBQWlCUixVQUFqQiIsImZpbGUiOiJlcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY2xhc3MgRXJyb3JUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgaHRtbCA9ICc8c3BhbiBjbGFzcz1cImVycm9yXCI+JyArIHN0ciArICc8L3NwYW4+JztcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgc3RyID0gY29udGVudCwgIC8vL1xuICAgICAgICBlcnJvclRva2VuID0gbmV3IEVycm9yVG9rZW4oc3RyLCBsaW5lKTtcblxuICAgIHJldHVybiBlcnJvclRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JUb2tlbjtcbiJdfQ==