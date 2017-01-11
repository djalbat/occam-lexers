'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

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
          type = this.getType(),
          innerHTML = content,
          ///
      className = type,
          ///
      html = '<span class="' + className + '">' + innerHTML + '</span>';

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsIkNsYXNzIiwiZ2V0Q29udGVudCIsImdldExpbmUiLCJnZXRUeXBlIiwic2lnbmlmaWNhbnRUb2tlbiIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsImh0bWwiLCJ0eXBlcyIsInN0cmluZyIsImVuZE9mTGluZSIsIndoaXRlc3BhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxnQjs7O0FBQ0osNEJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQztBQUFBOztBQUFBLG9JQUN6QkYsT0FEeUIsRUFDaEJDLElBRGdCOztBQUcvQixVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFIK0I7QUFJaEM7Ozs7MEJBRUtDLEssRUFBTztBQUNYQSxjQUFRQSxTQUFTSixnQkFBakI7O0FBRUEsVUFBSUMsVUFBVSxLQUFLSSxVQUFMLEVBQWQ7QUFBQSxVQUNJSCxPQUFPLEtBQUtJLE9BQUwsRUFEWDtBQUFBLFVBRUlILE9BQU8sS0FBS0ksT0FBTCxFQUZYO0FBQUEsVUFHSUMsbUJBQW1CLElBQUlKLEtBQUosQ0FBVUgsT0FBVixFQUFtQkMsSUFBbkIsRUFBeUJDLElBQXpCLENBSHZCOztBQUtBLGFBQU9LLGdCQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0wsSUFBWjtBQUNEOzs7NEJBRU9BLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixVQUFJRixVQUFVLEtBQUtJLFVBQUwsRUFBZDtBQUFBLFVBQ0lGLE9BQU8sS0FBS0ksT0FBTCxFQURYO0FBQUEsVUFFSUUsWUFBWVIsT0FGaEI7QUFBQSxVQUV5QjtBQUNyQlMsa0JBQVlQLElBSGhCO0FBQUEsVUFHdUI7QUFDbkJRLCtCQUF1QkQsU0FBdkIsVUFBcUNELFNBQXJDLFlBSko7O0FBTUEsYUFBT0UsSUFBUDtBQUNEOzs7O0VBbEM0QmIsSzs7QUFxQy9CRSxpQkFBaUJZLEtBQWpCLEdBQXlCO0FBQ3ZCQyxVQUFTLFFBRGM7QUFFdkJDLGFBQVksV0FGVztBQUd2QkMsY0FBYTtBQUhVLENBQXpCOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCakIsZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB0eXBlKSB7XG4gICAgc3VwZXIoY29udGVudCwgbGluZSk7XG4gICAgXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGNsb25lKENsYXNzKSB7XG4gICAgQ2xhc3MgPSBDbGFzcyB8fCBTaWduaWZpY2FudFRva2VuO1xuICAgIFxuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIFxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuICBcbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgIGlubmVySFRNTCA9IGNvbnRlbnQsIC8vL1xuICAgICAgICBjbGFzc05hbWUgPSB0eXBlLCAgLy8vXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke2lubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cblNpZ25pZmljYW50VG9rZW4udHlwZXMgPSB7XG4gIHN0cmluZyA6ICdzdHJpbmcnLFxuICBlbmRPZkxpbmUgOiAnZW5kT2ZMaW5lJyxcbiAgd2hpdGVzcGFjZSA6ICd3aGl0ZXNwYWNlJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19