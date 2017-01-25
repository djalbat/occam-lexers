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
          type = this.type,
          innerHTML = content,
          ///
      className = type,
          ///
      sanitisedInnerHTML = Token.sanitiseHTML(innerHTML),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsIkNsYXNzIiwiZ2V0Q29udGVudCIsImdldExpbmUiLCJnZXRUeXBlIiwic2lnbmlmaWNhbnRUb2tlbiIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsInNhbml0aXNlZElubmVySFRNTCIsInNhbml0aXNlSFRNTCIsImh0bWwiLCJ0eXBlcyIsInN0cmluZyIsImVuZE9mTGluZSIsIndoaXRlc3BhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxnQjs7O0FBQ0osNEJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQztBQUFBOztBQUFBLG9JQUN6QkYsT0FEeUIsRUFDaEJDLElBRGdCOztBQUcvQixVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFIK0I7QUFJaEM7Ozs7MEJBRUtDLEssRUFBTztBQUNYQSxjQUFRQSxTQUFTSixnQkFBakI7O0FBRUEsVUFBSUMsVUFBVSxLQUFLSSxVQUFMLEVBQWQ7QUFBQSxVQUNJSCxPQUFPLEtBQUtJLE9BQUwsRUFEWDtBQUFBLFVBRUlILE9BQU8sS0FBS0ksT0FBTCxFQUZYO0FBQUEsVUFHSUMsbUJBQW1CLElBQUlKLEtBQUosQ0FBVUgsT0FBVixFQUFtQkMsSUFBbkIsRUFBeUJDLElBQXpCLENBSHZCOztBQUtBLGFBQU9LLGdCQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0wsSUFBWjtBQUNEOzs7NEJBRU9BLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixVQUFJRixVQUFVLEtBQUtJLFVBQUwsRUFBZDtBQUFBLFVBQ0lGLE9BQU8sS0FBS0EsSUFEaEI7QUFBQSxVQUVJTSxZQUFZUixPQUZoQjtBQUFBLFVBRXlCO0FBQ3JCUyxrQkFBWVAsSUFIaEI7QUFBQSxVQUd1QjtBQUNuQlEsMkJBQXFCYixNQUFNYyxZQUFOLENBQW1CSCxTQUFuQixDQUp6QjtBQUFBLFVBS0lJLHlCQUF1QkgsU0FBdkIsVUFBcUNDLGtCQUFyQyxZQUxKOztBQU9BLGFBQU9FLElBQVA7QUFDRDs7OztFQW5DNEJmLEs7O0FBc0MvQkUsaUJBQWlCYyxLQUFqQixHQUF5QjtBQUN2QkMsVUFBUyxRQURjO0FBRXZCQyxhQUFZLFdBRlc7QUFHdkJDLGNBQWE7QUFIVSxDQUF6Qjs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQm5CLGdCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRlbnQsIGxpbmUpO1xuICAgIFxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBjbG9uZShDbGFzcykge1xuICAgIENsYXNzID0gQ2xhc3MgfHwgU2lnbmlmaWNhbnRUb2tlbjtcbiAgICBcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cbiAgXG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHRoaXMudHlwZSxcbiAgICAgICAgaW5uZXJIVE1MID0gY29udGVudCwgLy8vXG4gICAgICAgIGNsYXNzTmFtZSA9IHR5cGUsICAvLy9cbiAgICAgICAgc2FuaXRpc2VkSW5uZXJIVE1MID0gVG9rZW4uc2FuaXRpc2VIVE1MKGlubmVySFRNTCksXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3Nhbml0aXNlZElubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cblNpZ25pZmljYW50VG9rZW4udHlwZXMgPSB7XG4gIHN0cmluZyA6ICdzdHJpbmcnLFxuICBlbmRPZkxpbmUgOiAnZW5kT2ZMaW5lJyxcbiAgd2hpdGVzcGFjZSA6ICd3aGl0ZXNwYWNlJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19