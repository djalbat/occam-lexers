'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('../../util'),
    Token = require('../token');

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
    value: function clone(Class) {
      Class = Class || SignificantToken;

      var content = this.getContent(),
          line = this.getLine(),
          type = this.getType(),
          significantToken = new Class(content, line, type);

      return significantToken;
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'setType',
    value: function setType(type) {
      this.type = type;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var content = this.getContent(),
          type = this.type,
          innerHTML = content,
          ///
      className = type,
          ///
      sanitisedInnerHTML = util.sanitise(innerHTML),
          html = '<span class="' + className + '">' + sanitisedInnerHTML + '</span>';

      return html;
    }
  }]);

  return SignificantToken;
}(Token);

SignificantToken.types = {
  string: 'string',
  endOfLine: 'endOfLine',
  whitespace: 'whitespace'
};

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJUb2tlbiIsIlNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwibGluZSIsInR5cGUiLCJDbGFzcyIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW4iLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJzYW5pdGlzZWRJbm5lckhUTUwiLCJzYW5pdGlzZSIsImh0bWwiLCJ0eXBlcyIsInN0cmluZyIsImVuZE9mTGluZSIsIndoaXRlc3BhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsWUFBUixDQUFYO0FBQUEsSUFDSUMsUUFBUUQsUUFBUSxVQUFSLENBRFo7O0lBR01FLGdCOzs7QUFDSiw0QkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQUEsb0lBQ3pCRixPQUR5QixFQUNoQkMsSUFEZ0I7O0FBRy9CLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUgrQjtBQUloQzs7OzswQkFFS0MsSyxFQUFPO0FBQ1hBLGNBQVFBLFNBQVNKLGdCQUFqQjs7QUFFQSxVQUFJQyxVQUFVLEtBQUtJLFVBQUwsRUFBZDtBQUFBLFVBQ0lILE9BQU8sS0FBS0ksT0FBTCxFQURYO0FBQUEsVUFFSUgsT0FBTyxLQUFLSSxPQUFMLEVBRlg7QUFBQSxVQUdJQyxtQkFBbUIsSUFBSUosS0FBSixDQUFVSCxPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsSUFBekIsQ0FIdkI7O0FBS0EsYUFBT0ssZ0JBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLTCxJQUFaO0FBQ0Q7Ozs0QkFFT0EsSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlGLFVBQVUsS0FBS0ksVUFBTCxFQUFkO0FBQUEsVUFDSUYsT0FBTyxLQUFLQSxJQURoQjtBQUFBLFVBRUlNLFlBQVlSLE9BRmhCO0FBQUEsVUFFeUI7QUFDckJTLGtCQUFZUCxJQUhoQjtBQUFBLFVBR3VCO0FBQ25CUSwyQkFBcUJkLEtBQUtlLFFBQUwsQ0FBY0gsU0FBZCxDQUp6QjtBQUFBLFVBS0lJLHlCQUF1QkgsU0FBdkIsVUFBcUNDLGtCQUFyQyxZQUxKOztBQU9BLGFBQU9FLElBQVA7QUFDRDs7OztFQW5DNEJkLEs7O0FBc0MvQkMsaUJBQWlCYyxLQUFqQixHQUF5QjtBQUN2QkMsVUFBUyxRQURjO0FBRXZCQyxhQUFZLFdBRlc7QUFHdkJDLGNBQWE7QUFIVSxDQUF6Qjs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQm5CLGdCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsJyksXG4gICAgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB0eXBlKSB7XG4gICAgc3VwZXIoY29udGVudCwgbGluZSk7XG4gICAgXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGNsb25lKENsYXNzKSB7XG4gICAgQ2xhc3MgPSBDbGFzcyB8fCBTaWduaWZpY2FudFRva2VuO1xuICAgIFxuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIFxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuICBcbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdGhpcy50eXBlLFxuICAgICAgICBpbm5lckhUTUwgPSBjb250ZW50LCAvLy9cbiAgICAgICAgY2xhc3NOYW1lID0gdHlwZSwgIC8vL1xuICAgICAgICBzYW5pdGlzZWRJbm5lckhUTUwgPSB1dGlsLnNhbml0aXNlKGlubmVySFRNTCksXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3Nhbml0aXNlZElubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cblNpZ25pZmljYW50VG9rZW4udHlwZXMgPSB7XG4gIHN0cmluZyA6ICdzdHJpbmcnLFxuICBlbmRPZkxpbmUgOiAnZW5kT2ZMaW5lJyxcbiAgd2hpdGVzcGFjZSA6ICd3aGl0ZXNwYWNlJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19