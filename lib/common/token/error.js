'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('./significant');

var ErrorToken = function (_SignificantToken) {
  _inherits(ErrorToken, _SignificantToken);

  function ErrorToken() {
    _classCallCheck(this, ErrorToken);

    return _possibleConstructorReturn(this, (ErrorToken.__proto__ || Object.getPrototypeOf(ErrorToken)).apply(this, arguments));
  }

  _createClass(ErrorToken, null, [{
    key: 'fromContent',
    value: function fromContent(content, line) {
      var str = content,
          ///
      type = SignificantToken.types.ERROR,
          errorToken = new ErrorToken(str, line, type);

      return errorToken;
    }
  }]);

  return ErrorToken;
}(SignificantToken);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlbiIsInJlcXVpcmUiLCJFcnJvclRva2VuIiwiY29udGVudCIsImxpbmUiLCJzdHIiLCJ0eXBlIiwidHlwZXMiLCJFUlJPUiIsImVycm9yVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLG1CQUFtQkMsUUFBUSxlQUFSLENBQXZCOztJQUVNQyxVOzs7Ozs7Ozs7OztnQ0FDZUMsTyxFQUFTQyxJLEVBQU07QUFDaEMsVUFBSUMsTUFBTUYsT0FBVjtBQUFBLFVBQW9CO0FBQ2hCRyxhQUFPTixpQkFBaUJPLEtBQWpCLENBQXVCQyxLQURsQztBQUFBLFVBRUlDLGFBQWEsSUFBSVAsVUFBSixDQUFlRyxHQUFmLEVBQW9CRCxJQUFwQixFQUEwQkUsSUFBMUIsQ0FGakI7O0FBSUEsYUFBT0csVUFBUDtBQUNEOzs7O0VBUHNCVCxnQjs7QUFVekJVLE9BQU9DLE9BQVAsR0FBaUJULFVBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgRXJyb3JUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBzdHIgPSBjb250ZW50LCAgLy8vXG4gICAgICAgIHR5cGUgPSBTaWduaWZpY2FudFRva2VuLnR5cGVzLkVSUk9SLFxuICAgICAgICBlcnJvclRva2VuID0gbmV3IEVycm9yVG9rZW4oc3RyLCBsaW5lLCB0eXBlKTtcblxuICAgIHJldHVybiBlcnJvclRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JUb2tlbjtcbiJdfQ==