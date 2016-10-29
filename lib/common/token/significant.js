'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var SignificantToken = function (_Token) {
  _inherits(SignificantToken, _Token);

  function SignificantToken(str, line, type) {
    _classCallCheck(this, SignificantToken);

    var _this = _possibleConstructorReturn(this, (SignificantToken.__proto__ || Object.getPrototypeOf(SignificantToken)).call(this, str, line));

    _this.type = type;
    return _this;
  }

  _createClass(SignificantToken, [{
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'clone',
    value: function clone() {
      var str = this.getString(),
          line = this.getLine(),
          type = this.getType();

      return new SignificantToken(str, line, type);
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var innerHTML = this.str,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsInN0ciIsImxpbmUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0TGluZSIsImdldFR5cGUiLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJodG1sIiwidHlwZXMiLCJXSElURVNQQUNFIiwiRU5EX09GX0xJTkUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxnQjs7O0FBQ0osNEJBQVlDLEdBQVosRUFBaUJDLElBQWpCLEVBQXVCQyxJQUF2QixFQUE2QjtBQUFBOztBQUFBLG9JQUNyQkYsR0FEcUIsRUFDaEJDLElBRGdCOztBQUczQixVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFIMkI7QUFJNUI7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzRCQUVPO0FBQ04sVUFBSUYsTUFBTSxLQUFLRyxTQUFMLEVBQVY7QUFBQSxVQUNJRixPQUFPLEtBQUtHLE9BQUwsRUFEWDtBQUFBLFVBRUlGLE9BQU8sS0FBS0csT0FBTCxFQUZYOztBQUlBLGFBQU8sSUFBSU4sZ0JBQUosQ0FBcUJDLEdBQXJCLEVBQTBCQyxJQUExQixFQUFnQ0MsSUFBaEMsQ0FBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFJSSxZQUFZLEtBQUtOLEdBQXJCO0FBQUEsVUFBMEI7QUFDdEJPLGtCQUFZLEtBQUtMLElBRHJCO0FBQUEsVUFDNEI7QUFDeEJNLCtCQUF1QkQsU0FBdkIsVUFBcUNELFNBQXJDLFlBRko7O0FBSUEsYUFBT0UsSUFBUDtBQUNEOzs7O0VBekI0QlgsSzs7QUE0Qi9CRSxpQkFBaUJVLEtBQWpCLEdBQXlCO0FBQ3ZCQyxjQUFhLFlBRFU7QUFFdkJDLGVBQWM7QUFGUyxDQUF6Qjs7QUFLQUMsT0FBT0MsT0FBUCxHQUFpQmQsZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHIsIGxpbmUsIHR5cGUpIHtcbiAgICBzdXBlcihzdHIsIGxpbmUpO1xuICAgIFxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cbiAgXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBcbiAgY2xvbmUoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xuXG4gICAgcmV0dXJuIG5ldyBTaWduaWZpY2FudFRva2VuKHN0ciwgbGluZSwgdHlwZSk7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHZhciBpbm5lckhUTUwgPSB0aGlzLnN0ciwgLy8vXG4gICAgICAgIGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5TaWduaWZpY2FudFRva2VuLnR5cGVzID0ge1xuICBXSElURVNQQUNFIDogJ1dISVRFU1BBQ0UnLFxuICBFTkRfT0ZfTElORSA6ICdFTkRfT0ZfTElORSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==