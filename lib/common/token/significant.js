'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var SignificantToken = function (_Token) {
  _inherits(SignificantToken, _Token);

  function SignificantToken(string, line, type) {
    _classCallCheck(this, SignificantToken);

    var _this = _possibleConstructorReturn(this, (SignificantToken.__proto__ || Object.getPrototypeOf(SignificantToken)).call(this, string, line));

    _this.type = type;
    return _this;
  }

  _createClass(SignificantToken, [{
    key: 'clone',
    value: function clone() {
      var string = this.getString(),
          line = this.getLine(),
          type = this.getType();

      return new SignificantToken(string, line, type);
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var innerHTML = this.string,
          ///
      className = this.type,
          ///
      html = '<span class="' + className + '">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return SignificantToken;
}(Token);

SignificantToken.types = {
  WHITESPACE: 'WHITESPACE',
  END_OF_LINE: 'END_OF_LINE'
};

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsInN0cmluZyIsImxpbmUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0TGluZSIsImdldFR5cGUiLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJodG1sIiwidHlwZXMiLCJXSElURVNQQUNFIiwiRU5EX09GX0xJTkUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxnQjs7O0FBQ0osNEJBQVlDLE1BQVosRUFBb0JDLElBQXBCLEVBQTBCQyxJQUExQixFQUFnQztBQUFBOztBQUFBLG9JQUN4QkYsTUFEd0IsRUFDaEJDLElBRGdCOztBQUc5QixVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFIOEI7QUFJL0I7Ozs7NEJBRU87QUFDTixVQUFJRixTQUFTLEtBQUtHLFNBQUwsRUFBYjtBQUFBLFVBQ0lGLE9BQU8sS0FBS0csT0FBTCxFQURYO0FBQUEsVUFFSUYsT0FBTyxLQUFLRyxPQUFMLEVBRlg7O0FBSUEsYUFBTyxJQUFJTixnQkFBSixDQUFxQkMsTUFBckIsRUFBNkJDLElBQTdCLEVBQW1DQyxJQUFuQyxDQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixVQUFJSSxZQUFZLEtBQUtOLE1BQXJCO0FBQUEsVUFBNkI7QUFDekJPLGtCQUFZLEtBQUtMLElBRHJCO0FBQUEsVUFDNEI7QUFDeEJNLCtCQUF1QkQsU0FBdkIsVUFBcUNELFNBQXJDLFlBRko7O0FBSUEsYUFBT0UsSUFBUDtBQUNEOzs7O0VBekI0QlgsSzs7QUE0Qi9CRSxpQkFBaUJVLEtBQWpCLEdBQXlCO0FBQ3ZCQyxjQUFhLFlBRFU7QUFFdkJDLGVBQWM7QUFGUyxDQUF6Qjs7QUFLQUMsT0FBT0MsT0FBUCxHQUFpQmQsZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGxpbmUsIHR5cGUpIHtcbiAgICBzdXBlcihzdHJpbmcsIGxpbmUpO1xuICAgIFxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICB2YXIgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XG5cbiAgICByZXR1cm4gbmV3IFNpZ25pZmljYW50VG9rZW4oc3RyaW5nLCBsaW5lLCB0eXBlKTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBcbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgaW5uZXJIVE1MID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICBjbGFzc05hbWUgPSB0aGlzLnR5cGUsICAvLy9cbiAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxuU2lnbmlmaWNhbnRUb2tlbi50eXBlcyA9IHtcbiAgV0hJVEVTUEFDRSA6ICdXSElURVNQQUNFJyxcbiAgRU5EX09GX0xJTkUgOiAnRU5EX09GX0xJTkUnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW47XG4iXX0=