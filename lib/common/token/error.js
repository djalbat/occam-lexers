'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignficantToken = require('./significant');

var ErrorToken = function (_SignficantToken) {
  _inherits(ErrorToken, _SignficantToken);

  function ErrorToken() {
    _classCallCheck(this, ErrorToken);

    return _possibleConstructorReturn(this, (ErrorToken.__proto__ || Object.getPrototypeOf(ErrorToken)).apply(this, arguments));
  }

  _createClass(ErrorToken, null, [{
    key: 'fromContent',
    value: function fromContent(content, line) {
      var str = content,
          ///
      type = 'error',
          errorToken = new ErrorToken(str, line, type);

      return errorToken;
    }
  }]);

  return ErrorToken;
}(SignficantToken);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiU2lnbmZpY2FudFRva2VuIiwicmVxdWlyZSIsIkVycm9yVG9rZW4iLCJjb250ZW50IiwibGluZSIsInN0ciIsInR5cGUiLCJlcnJvclRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxrQkFBa0JDLFFBQVEsZUFBUixDQUF0Qjs7SUFFTUMsVTs7Ozs7Ozs7Ozs7Z0NBQ2VDLE8sRUFBU0MsSSxFQUFNO0FBQ2hDLFVBQUlDLE1BQU1GLE9BQVY7QUFBQSxVQUFvQjtBQUNoQkcsYUFBTyxPQURYO0FBQUEsVUFFSUMsYUFBYSxJQUFJTCxVQUFKLENBQWVHLEdBQWYsRUFBb0JELElBQXBCLEVBQTBCRSxJQUExQixDQUZqQjs7QUFJQSxhQUFPQyxVQUFQO0FBQ0Q7Ozs7RUFQc0JQLGU7O0FBVXpCUSxPQUFPQyxPQUFQLEdBQWlCUCxVQUFqQiIsImZpbGUiOiJlcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNpZ25maWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgRXJyb3JUb2tlbiBleHRlbmRzIFNpZ25maWNhbnRUb2tlbiB7XG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIHN0ciA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgdHlwZSA9ICdlcnJvcicsXG4gICAgICAgIGVycm9yVG9rZW4gPSBuZXcgRXJyb3JUb2tlbihzdHIsIGxpbmUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGVycm9yVG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvclRva2VuO1xuIl19