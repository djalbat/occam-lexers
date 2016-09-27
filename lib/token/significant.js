'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var SignificantToken = function (_Token) {
  _inherits(SignificantToken, _Token);

  function SignificantToken(str, type, line) {
    _classCallCheck(this, SignificantToken);

    var _this = _possibleConstructorReturn(this, (SignificantToken.__proto__ || Object.getPrototypeOf(SignificantToken)).call(this, str));

    _this.type = type;
    _this.line = line;
    return _this;
  }

  _createClass(SignificantToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getString(),
          type = this.getType(),
          line = this.getLine();

      return new SignificantToken(str, type, line);
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'html',
    value: function html() {
      var str = this.getString(),
          type = this.getType(),
          html = '<span class="' + type + '">' + str + '</span>';

      return html;
    }
  }]);

  return SignificantToken;
}(Token);

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90b2tlbi9zaWduaWZpY2FudC5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwic3RyIiwidHlwZSIsImxpbmUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TGluZSIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxnQjs7O0FBQ0osNEJBQVlDLEdBQVosRUFBaUJDLElBQWpCLEVBQXVCQyxJQUF2QixFQUE2QjtBQUFBOztBQUFBLG9JQUNyQkYsR0FEcUI7O0FBRzNCLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUoyQjtBQUs1Qjs7Ozs0QkFFTztBQUNOLFVBQUlGLE1BQU0sS0FBS0csU0FBTCxFQUFWO0FBQUEsVUFDSUYsT0FBTyxLQUFLRyxPQUFMLEVBRFg7QUFBQSxVQUVJRixPQUFPLEtBQUtHLE9BQUwsRUFGWDs7QUFJQSxhQUFPLElBQUlOLGdCQUFKLENBQXFCQyxHQUFyQixFQUEwQkMsSUFBMUIsRUFBZ0NDLElBQWhDLENBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRCxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7MkJBRU07QUFDTCxVQUFJRixNQUFNLEtBQUtHLFNBQUwsRUFBVjtBQUFBLFVBQ0lGLE9BQU8sS0FBS0csT0FBTCxFQURYO0FBQUEsVUFFSUUsT0FBTyxrQkFBa0JMLElBQWxCLEdBQXlCLElBQXpCLEdBQWdDRCxHQUFoQyxHQUFzQyxTQUZqRDs7QUFJQSxhQUFPTSxJQUFQO0FBQ0Q7Ozs7RUE5QjRCVCxLOztBQWlDL0JVLE9BQU9DLE9BQVAsR0FBaUJULGdCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyLCB0eXBlLCBsaW5lKSB7XG4gICAgc3VwZXIoc3RyKTtcbiAgICBcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCk7XG5cbiAgICByZXR1cm4gbmV3IFNpZ25pZmljYW50VG9rZW4oc3RyLCB0eXBlLCBsaW5lKTtcbiAgfVxuICBcbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgaHRtbCgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICBodG1sID0gJzxzcGFuIGNsYXNzPVwiJyArIHR5cGUgKyAnXCI+JyArIHN0ciArICc8L3NwYW4+JztcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==