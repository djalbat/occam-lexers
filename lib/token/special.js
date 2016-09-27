'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var SpecialToken = function (_Token) {
  _inherits(SpecialToken, _Token);

  function SpecialToken(str, line) {
    _classCallCheck(this, SpecialToken);

    var _this = _possibleConstructorReturn(this, (SpecialToken.__proto__ || Object.getPrototypeOf(SpecialToken)).call(this, str));

    _this.line = line;
    return _this;
  }

  _createClass(SpecialToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getString(),
          line = this.getLine();

      return new SpecialToken(str, line);
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
          type = SpecialToken.type,
          html = '<span class="' + type + '">' + str + '</span>';

      return html;
    }
  }]);

  return SpecialToken;
}(Token);

SpecialToken.type = 'special';

module.exports = SpecialToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90b2tlbi9zcGVjaWFsLmpzIl0sIm5hbWVzIjpbIlRva2VuIiwicmVxdWlyZSIsIlNwZWNpYWxUb2tlbiIsInN0ciIsImxpbmUiLCJnZXRTdHJpbmciLCJnZXRMaW5lIiwidHlwZSIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxZOzs7QUFDSix3QkFBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBdUI7QUFBQTs7QUFBQSw0SEFDZkQsR0FEZTs7QUFHckIsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBSHFCO0FBSXRCOzs7OzRCQUVPO0FBQ04sVUFBSUQsTUFBTSxLQUFLRSxTQUFMLEVBQVY7QUFBQSxVQUNJRCxPQUFPLEtBQUtFLE9BQUwsRUFEWDs7QUFHQSxhQUFPLElBQUlKLFlBQUosQ0FBaUJDLEdBQWpCLEVBQXNCQyxJQUF0QixDQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0csSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtILElBQVo7QUFDRDs7OzJCQUVNO0FBQ0wsVUFBSUQsTUFBTSxLQUFLRSxTQUFMLEVBQVY7QUFBQSxVQUNJRSxPQUFPTCxhQUFhSyxJQUR4QjtBQUFBLFVBRUlDLE9BQU8sa0JBQWtCRCxJQUFsQixHQUF5QixJQUF6QixHQUFnQ0osR0FBaEMsR0FBc0MsU0FGakQ7O0FBSUEsYUFBT0ssSUFBUDtBQUNEOzs7O0VBNUJ3QlIsSzs7QUErQjNCRSxhQUFhSyxJQUFiLEdBQW9CLFNBQXBCOztBQUVBRSxPQUFPQyxPQUFQLEdBQWlCUixZQUFqQiIsImZpbGUiOiJzcGVjaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBTcGVjaWFsVG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHN0ciwgbGluZSkge1xuICAgIHN1cGVyKHN0cik7XG4gICAgXG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCk7XG5cbiAgICByZXR1cm4gbmV3IFNwZWNpYWxUb2tlbihzdHIsIGxpbmUpO1xuICB9XG4gIFxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBodG1sKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICB0eXBlID0gU3BlY2lhbFRva2VuLnR5cGUsXG4gICAgICAgIGh0bWwgPSAnPHNwYW4gY2xhc3M9XCInICsgdHlwZSArICdcIj4nICsgc3RyICsgJzwvc3Bhbj4nO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxuU3BlY2lhbFRva2VuLnR5cGUgPSAnc3BlY2lhbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gU3BlY2lhbFRva2VuO1xuIl19