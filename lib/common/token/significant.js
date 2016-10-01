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
    key: 'clone',
    value: function clone() {
      var str = this.getString(),
          line = this.getLine(),
          type = this.getType();

      return new SignificantToken(str, line, type);
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var str = this.getString(),
          type = this.getType(),
          html = '<span class="' + type + '">' + str + '</span>';

      return html;
    }
  }]);

  return SignificantToken;
}(Token);

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsInN0ciIsImxpbmUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0TGluZSIsImdldFR5cGUiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLFVBQVIsQ0FBWjs7SUFFTUMsZ0I7OztBQUNKLDRCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsSUFBdkIsRUFBNkI7QUFBQTs7QUFBQSxvSUFDckJGLEdBRHFCLEVBQ2hCQyxJQURnQjs7QUFHM0IsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBSDJCO0FBSTVCOzs7OzRCQUVPO0FBQ04sVUFBSUYsTUFBTSxLQUFLRyxTQUFMLEVBQVY7QUFBQSxVQUNJRixPQUFPLEtBQUtHLE9BQUwsRUFEWDtBQUFBLFVBRUlGLE9BQU8sS0FBS0csT0FBTCxFQUZYOztBQUlBLGFBQU8sSUFBSU4sZ0JBQUosQ0FBcUJDLEdBQXJCLEVBQTBCQyxJQUExQixFQUFnQ0MsSUFBaEMsQ0FBUDtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUYsTUFBTSxLQUFLRyxTQUFMLEVBQVY7QUFBQSxVQUNJRCxPQUFPLEtBQUtHLE9BQUwsRUFEWDtBQUFBLFVBRUlDLE9BQU8sa0JBQWtCSixJQUFsQixHQUF5QixJQUF6QixHQUFnQ0YsR0FBaEMsR0FBc0MsU0FGakQ7O0FBSUEsYUFBT00sSUFBUDtBQUNEOzs7O0VBekI0QlQsSzs7QUE0Qi9CVSxPQUFPQyxPQUFQLEdBQWlCVCxnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHN0ciwgbGluZSwgdHlwZSkge1xuICAgIHN1cGVyKHN0ciwgbGluZSk7XG4gICAgXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKTtcblxuICAgIHJldHVybiBuZXcgU2lnbmlmaWNhbnRUb2tlbihzdHIsIGxpbmUsIHR5cGUpO1xuICB9XG4gIFxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgIGh0bWwgPSAnPHNwYW4gY2xhc3M9XCInICsgdHlwZSArICdcIj4nICsgc3RyICsgJzwvc3Bhbj4nO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19