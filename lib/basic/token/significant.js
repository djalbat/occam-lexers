'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../../common/token');

var SignificantToken = function (_Token) {
  _inherits(SignificantToken, _Token);

  function SignificantToken(str) {
    _classCallCheck(this, SignificantToken);

    var line = null;

    return _possibleConstructorReturn(this, (SignificantToken.__proto__ || Object.getPrototypeOf(SignificantToken)).call(this, str, line));
  }

  _createClass(SignificantToken, null, [{
    key: 'fromContent',
    value: function fromContent(content) {
      var str = content,
          ///
      significantToken = new SignificantToken(str);

      return significantToken;
    }
  }]);

  return SignificantToken;
}(Token);

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9iYXNpYy90b2tlbi9zaWduaWZpY2FudC5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwic3RyIiwibGluZSIsImNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLG9CQUFSLENBQVo7O0lBRU1DLGdCOzs7QUFDSiw0QkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFFBQUlDLE9BQU8sSUFBWDs7QUFEZSwrSEFHVEQsR0FIUyxFQUdKQyxJQUhJO0FBSWhCOzs7O2dDQUVrQkMsTyxFQUFTO0FBQzFCLFVBQUlGLE1BQU1FLE9BQVY7QUFBQSxVQUFvQjtBQUNoQkMseUJBQW1CLElBQUlKLGdCQUFKLENBQXFCQyxHQUFyQixDQUR2Qjs7QUFHQSxhQUFPRyxnQkFBUDtBQUNEOzs7O0VBWjRCTixLOztBQWUvQk8sT0FBT0MsT0FBUCxHQUFpQk4sZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4nKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyKSB7XG4gICAgdmFyIGxpbmUgPSBudWxsO1xuICAgIFxuICAgIHN1cGVyKHN0ciwgbGluZSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIHN0ciA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBTaWduaWZpY2FudFRva2VuKHN0cik7XG4gICAgXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19