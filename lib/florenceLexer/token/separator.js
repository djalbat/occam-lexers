'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../../common/token');

var SeparatorToken = function (_Token) {
  _inherits(SeparatorToken, _Token);

  function SeparatorToken(str) {
    _classCallCheck(this, SeparatorToken);

    return _possibleConstructorReturn(this, (SeparatorToken.__proto__ || Object.getPrototypeOf(SeparatorToken)).call(this, str));
  }

  _createClass(SeparatorToken, [{
    key: 'html',
    value: function html() {
      var str = this.getStr(),
          html = '<span class="separator">' + str + '</span>';

      return html;
    }
  }, {
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new SeparatorToken(str);
    }
  }]);

  return SeparatorToken;
}(Token);

module.exports = SeparatorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL3Rva2VuL3NlcGFyYXRvci5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJTZXBhcmF0b3JUb2tlbiIsInN0ciIsImdldFN0ciIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsb0JBQVIsQ0FBWjs7SUFFTUMsYzs7O0FBQ0osMEJBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFBQSwySEFDVEEsR0FEUztBQUVoQjs7OzsyQkFFTTtBQUNMLFVBQUlBLE1BQU0sS0FBS0MsTUFBTCxFQUFWO0FBQUEsVUFDSUMsT0FBTyw2QkFBNkJGLEdBQTdCLEdBQW1DLFNBRDlDOztBQUdBLGFBQU9FLElBQVA7QUFDRDs7OzRCQUVPO0FBQ04sVUFBSUYsTUFBTSxLQUFLQyxNQUFMLEVBQVY7O0FBRUEsYUFBTyxJQUFJRixjQUFKLENBQW1CQyxHQUFuQixDQUFQO0FBQ0Q7Ozs7RUFoQjBCSCxLOztBQW1CN0JNLE9BQU9DLE9BQVAsR0FBaUJMLGNBQWpCIiwiZmlsZSI6InNlcGFyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuJyk7XG5cbmNsYXNzIFNlcGFyYXRvclRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHIpIHtcbiAgICBzdXBlcihzdHIpO1xuICB9XG5cbiAgaHRtbCgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHIoKSxcbiAgICAgICAgaHRtbCA9ICc8c3BhbiBjbGFzcz1cInNlcGFyYXRvclwiPicgKyBzdHIgKyAnPC9zcGFuPic7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cigpO1xuXG4gICAgcmV0dXJuIG5ldyBTZXBhcmF0b3JUb2tlbihzdHIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VwYXJhdG9yVG9rZW47XG5cbiJdfQ==