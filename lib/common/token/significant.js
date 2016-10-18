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

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsInN0ciIsImxpbmUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0TGluZSIsImdldFR5cGUiLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLFVBQVIsQ0FBWjs7SUFFTUMsZ0I7OztBQUNKLDRCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsSUFBdkIsRUFBNkI7QUFBQTs7QUFBQSxvSUFDckJGLEdBRHFCLEVBQ2hCQyxJQURnQjs7QUFHM0IsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBSDJCO0FBSTVCOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLFVBQUlGLE1BQU0sS0FBS0csU0FBTCxFQUFWO0FBQUEsVUFDSUYsT0FBTyxLQUFLRyxPQUFMLEVBRFg7QUFBQSxVQUVJRixPQUFPLEtBQUtHLE9BQUwsRUFGWDs7QUFJQSxhQUFPLElBQUlOLGdCQUFKLENBQXFCQyxHQUFyQixFQUEwQkMsSUFBMUIsRUFBZ0NDLElBQWhDLENBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUksWUFBWSxLQUFLTixHQUFyQjtBQUFBLFVBQTBCO0FBQ3RCTyxrQkFBWSxLQUFLTCxJQURyQjtBQUFBLFVBQzRCO0FBQ3hCTSwrQkFBdUJELFNBQXZCLFVBQXFDRCxTQUFyQyxZQUZKOztBQUlBLGFBQU9FLElBQVA7QUFDRDs7OztFQXpCNEJYLEs7O0FBNEIvQlksT0FBT0MsT0FBUCxHQUFpQlgsZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHIsIGxpbmUsIHR5cGUpIHtcbiAgICBzdXBlcihzdHIsIGxpbmUpO1xuICAgIFxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cbiAgXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBcbiAgY2xvbmUoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xuXG4gICAgcmV0dXJuIG5ldyBTaWduaWZpY2FudFRva2VuKHN0ciwgbGluZSwgdHlwZSk7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHZhciBpbm5lckhUTUwgPSB0aGlzLnN0ciwgLy8vXG4gICAgICAgIGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW47XG4iXX0=