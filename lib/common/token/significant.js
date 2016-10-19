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
  ERROR: 'ERROR',
  WHITESPACE: 'WHITESPACE',
  END_OF_LINE: 'END_OF_LINE'
};

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsInN0ciIsImxpbmUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0TGluZSIsImdldFR5cGUiLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJodG1sIiwidHlwZXMiLCJFUlJPUiIsIldISVRFU1BBQ0UiLCJFTkRfT0ZfTElORSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLGdCOzs7QUFDSiw0QkFBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBdUJDLElBQXZCLEVBQTZCO0FBQUE7O0FBQUEsb0lBQ3JCRixHQURxQixFQUNoQkMsSUFEZ0I7O0FBRzNCLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUgyQjtBQUk1Qjs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7NEJBRU87QUFDTixVQUFJRixNQUFNLEtBQUtHLFNBQUwsRUFBVjtBQUFBLFVBQ0lGLE9BQU8sS0FBS0csT0FBTCxFQURYO0FBQUEsVUFFSUYsT0FBTyxLQUFLRyxPQUFMLEVBRlg7O0FBSUEsYUFBTyxJQUFJTixnQkFBSixDQUFxQkMsR0FBckIsRUFBMEJDLElBQTFCLEVBQWdDQyxJQUFoQyxDQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlJLFlBQVksS0FBS04sR0FBckI7QUFBQSxVQUEwQjtBQUN0Qk8sa0JBQVksS0FBS0wsSUFEckI7QUFBQSxVQUM0QjtBQUN4Qk0sK0JBQXVCRCxTQUF2QixVQUFxQ0QsU0FBckMsWUFGSjs7QUFJQSxhQUFPRSxJQUFQO0FBQ0Q7Ozs7RUF6QjRCWCxLOztBQTRCL0JFLGlCQUFpQlUsS0FBakIsR0FBeUI7QUFDdkJDLFNBQVEsT0FEZTtBQUV2QkMsY0FBYSxZQUZVO0FBR3ZCQyxlQUFjO0FBSFMsQ0FBekI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJmLGdCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyLCBsaW5lLCB0eXBlKSB7XG4gICAgc3VwZXIoc3RyLCBsaW5lKTtcbiAgICBcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG4gIFxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cbiAgXG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKTtcblxuICAgIHJldHVybiBuZXcgU2lnbmlmaWNhbnRUb2tlbihzdHIsIGxpbmUsIHR5cGUpO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgaW5uZXJIVE1MID0gdGhpcy5zdHIsIC8vL1xuICAgICAgICBjbGFzc05hbWUgPSB0aGlzLnR5cGUsICAvLy9cbiAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxuU2lnbmlmaWNhbnRUb2tlbi50eXBlcyA9IHtcbiAgRVJST1IgOiAnRVJST1InLFxuICBXSElURVNQQUNFIDogJ1dISVRFU1BBQ0UnLFxuICBFTkRfT0ZfTElORSA6ICdFTkRfT0ZfTElORSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==