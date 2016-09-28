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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsInN0ciIsInR5cGUiLCJsaW5lIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldExpbmUiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLFVBQVIsQ0FBWjs7SUFFTUMsZ0I7OztBQUNKLDRCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsSUFBdkIsRUFBNkI7QUFBQTs7QUFBQSxvSUFDckJGLEdBRHFCOztBQUczQixVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFKMkI7QUFLNUI7Ozs7NEJBRU87QUFDTixVQUFJRixNQUFNLEtBQUtHLFNBQUwsRUFBVjtBQUFBLFVBQ0lGLE9BQU8sS0FBS0csT0FBTCxFQURYO0FBQUEsVUFFSUYsT0FBTyxLQUFLRyxPQUFMLEVBRlg7O0FBSUEsYUFBTyxJQUFJTixnQkFBSixDQUFxQkMsR0FBckIsRUFBMEJDLElBQTFCLEVBQWdDQyxJQUFoQyxDQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0QsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUYsTUFBTSxLQUFLRyxTQUFMLEVBQVY7QUFBQSxVQUNJRixPQUFPLEtBQUtHLE9BQUwsRUFEWDtBQUFBLFVBRUlFLE9BQU8sa0JBQWtCTCxJQUFsQixHQUF5QixJQUF6QixHQUFnQ0QsR0FBaEMsR0FBc0MsU0FGakQ7O0FBSUEsYUFBT00sSUFBUDtBQUNEOzs7O0VBOUI0QlQsSzs7QUFpQy9CVSxPQUFPQyxPQUFQLEdBQWlCVCxnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHN0ciwgdHlwZSwgbGluZSkge1xuICAgIHN1cGVyKHN0cik7XG4gICAgXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgbGluZSA9IHRoaXMuZ2V0TGluZSgpO1xuXG4gICAgcmV0dXJuIG5ldyBTaWduaWZpY2FudFRva2VuKHN0ciwgdHlwZSwgbGluZSk7XG4gIH1cbiAgXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgaHRtbCA9ICc8c3BhbiBjbGFzcz1cIicgKyB0eXBlICsgJ1wiPicgKyBzdHIgKyAnPC9zcGFuPic7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW47XG4iXX0=