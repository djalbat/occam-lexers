'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var SignificantToken = function (_Token) {
  _inherits(SignificantToken, _Token);

  function SignificantToken(content, line, type) {
    _classCallCheck(this, SignificantToken);

    var _this = _possibleConstructorReturn(this, (SignificantToken.__proto__ || Object.getPrototypeOf(SignificantToken)).call(this, content, line));

    _this.type = type;
    return _this;
  }

  _createClass(SignificantToken, [{
    key: 'clone',
    value: function clone() {
      var content = this.getContent(),
          line = this.getLine(),
          type = this.getType();

      return new SignificantToken(content, line, type);
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var content = this.getContent(),
          type = this.getType(),
          innerHTML = content,
          ///
      className = type,
          ///
      html = '<span class="' + className + '">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return SignificantToken;
}(Token);

SignificantToken.types = {
  whitespace: 'whitespace',
  endOfLine: 'endOfLine'
};

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0VHlwZSIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsImh0bWwiLCJ0eXBlcyIsIndoaXRlc3BhY2UiLCJlbmRPZkxpbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxnQjs7O0FBQ0osNEJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQztBQUFBOztBQUFBLG9JQUN6QkYsT0FEeUIsRUFDaEJDLElBRGdCOztBQUcvQixVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFIK0I7QUFJaEM7Ozs7NEJBRU87QUFDTixVQUFJRixVQUFVLEtBQUtHLFVBQUwsRUFBZDtBQUFBLFVBQ0lGLE9BQU8sS0FBS0csT0FBTCxFQURYO0FBQUEsVUFFSUYsT0FBTyxLQUFLRyxPQUFMLEVBRlg7O0FBSUEsYUFBTyxJQUFJTixnQkFBSixDQUFxQkMsT0FBckIsRUFBOEJDLElBQTlCLEVBQW9DQyxJQUFwQyxDQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixVQUFJRixVQUFVLEtBQUtHLFVBQUwsRUFBZDtBQUFBLFVBQ0lELE9BQU8sS0FBS0csT0FBTCxFQURYO0FBQUEsVUFFSUMsWUFBWU4sT0FGaEI7QUFBQSxVQUV5QjtBQUNyQk8sa0JBQVlMLElBSGhCO0FBQUEsVUFHdUI7QUFDbkJNLCtCQUF1QkQsU0FBdkIsVUFBcUNELFNBQXJDLFlBSko7O0FBTUEsYUFBT0UsSUFBUDtBQUNEOzs7O0VBM0I0QlgsSzs7QUE4Qi9CRSxpQkFBaUJVLEtBQWpCLEdBQXlCO0FBQ3ZCQyxjQUFhLFlBRFU7QUFFdkJDLGFBQVk7QUFGVyxDQUF6Qjs7QUFLQUMsT0FBT0MsT0FBUCxHQUFpQmQsZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB0eXBlKSB7XG4gICAgc3VwZXIoY29udGVudCwgbGluZSk7XG4gICAgXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xuXG4gICAgcmV0dXJuIG5ldyBTaWduaWZpY2FudFRva2VuKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG4gIFxuICBnZXRIVE1MKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgaW5uZXJIVE1MID0gY29udGVudCwgLy8vXG4gICAgICAgIGNsYXNzTmFtZSA9IHR5cGUsICAvLy9cbiAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxuU2lnbmlmaWNhbnRUb2tlbi50eXBlcyA9IHtcbiAgd2hpdGVzcGFjZSA6ICd3aGl0ZXNwYWNlJyxcbiAgZW5kT2ZMaW5lIDogJ2VuZE9mTGluZSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==