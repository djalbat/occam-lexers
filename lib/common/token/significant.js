'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var SignificantToken = function (_Token) {
  _inherits(SignificantToken, _Token);

  function SignificantToken(content, line, type) {
    var updateHTML = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    _classCallCheck(this, SignificantToken);

    ///

    var _this = _possibleConstructorReturn(this, (SignificantToken.__proto__ || Object.getPrototypeOf(SignificantToken)).call(this, content, line, false));

    _this.type = type;

    if (updateHTML) {
      _this.updateHTML();
    }
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
    key: 'updateHTML',
    value: function updateHTML() {
      var content = this.getContent(),
          type = this.type,
          innerHTML = content,
          ///
      className = type,
          ///
      sanitisedInnerHTML = Token.sanitiseHTML(innerHTML),
          html = '<span class="' + className + '">' + sanitisedInnerHTML + '</span>';

      this.setHTML(html);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsInVwZGF0ZUhUTUwiLCJDbGFzcyIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW4iLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJzYW5pdGlzZWRJbm5lckhUTUwiLCJzYW5pdGlzZUhUTUwiLCJodG1sIiwic2V0SFRNTCIsInR5cGVzIiwic3RyaW5nIiwiZW5kT2ZMaW5lIiwid2hpdGVzcGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLGdCOzs7QUFDSiw0QkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQW9EO0FBQUEsUUFBbkJDLFVBQW1CLHVFQUFOLElBQU07O0FBQUE7O0FBQ3BCOztBQURvQixvSUFDNUNILE9BRDRDLEVBQ25DQyxJQURtQyxFQUM3QixLQUQ2Qjs7QUFHbEQsVUFBS0MsSUFBTCxHQUFZQSxJQUFaOztBQUVBLFFBQUlDLFVBQUosRUFBZ0I7QUFDZCxZQUFLQSxVQUFMO0FBQ0Q7QUFQaUQ7QUFRbkQ7Ozs7MEJBRUtDLEssRUFBTztBQUNYQSxjQUFRQSxTQUFTTCxnQkFBakI7O0FBRUEsVUFBSUMsVUFBVSxLQUFLSyxVQUFMLEVBQWQ7QUFBQSxVQUNJSixPQUFPLEtBQUtLLE9BQUwsRUFEWDtBQUFBLFVBRUlKLE9BQU8sS0FBS0ssT0FBTCxFQUZYO0FBQUEsVUFHSUMsbUJBQW1CLElBQUlKLEtBQUosQ0FBVUosT0FBVixFQUFtQkMsSUFBbkIsRUFBeUJDLElBQXpCLENBSHZCOztBQUtBLGFBQU9NLGdCQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS04sSUFBWjtBQUNEOzs7NEJBRU9BLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJRixVQUFVLEtBQUtLLFVBQUwsRUFBZDtBQUFBLFVBQ0lILE9BQU8sS0FBS0EsSUFEaEI7QUFBQSxVQUVJTyxZQUFZVCxPQUZoQjtBQUFBLFVBRXlCO0FBQ3JCVSxrQkFBWVIsSUFIaEI7QUFBQSxVQUd1QjtBQUNuQlMsMkJBQXFCZCxNQUFNZSxZQUFOLENBQW1CSCxTQUFuQixDQUp6QjtBQUFBLFVBS0lJLHlCQUF1QkgsU0FBdkIsVUFBcUNDLGtCQUFyQyxZQUxKOztBQU9BLFdBQUtHLE9BQUwsQ0FBYUQsSUFBYjtBQUNEOzs7O0VBdkM0QmhCLEs7O0FBMEMvQkUsaUJBQWlCZ0IsS0FBakIsR0FBeUI7QUFDdkJDLFVBQVMsUUFEYztBQUV2QkMsYUFBWSxXQUZXO0FBR3ZCQyxjQUFhO0FBSFUsQ0FBekI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJyQixnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIHR5cGUsIHVwZGF0ZUhUTUwgPSB0cnVlKSB7XG4gICAgc3VwZXIoY29udGVudCwgbGluZSwgZmFsc2UpOyAgLy8vXG4gICAgXG4gICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgIGlmICh1cGRhdGVIVE1MKSB7XG4gICAgICB0aGlzLnVwZGF0ZUhUTUwoKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShDbGFzcykge1xuICAgIENsYXNzID0gQ2xhc3MgfHwgU2lnbmlmaWNhbnRUb2tlbjtcbiAgICBcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cbiAgXG4gIHVwZGF0ZUhUTUwoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHRoaXMudHlwZSxcbiAgICAgICAgaW5uZXJIVE1MID0gY29udGVudCwgLy8vXG4gICAgICAgIGNsYXNzTmFtZSA9IHR5cGUsICAvLy9cbiAgICAgICAgc2FuaXRpc2VkSW5uZXJIVE1MID0gVG9rZW4uc2FuaXRpc2VIVE1MKGlubmVySFRNTCksXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3Nhbml0aXNlZElubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHRoaXMuc2V0SFRNTChodG1sKTtcbiAgfVxufVxuXG5TaWduaWZpY2FudFRva2VuLnR5cGVzID0ge1xuICBzdHJpbmcgOiAnc3RyaW5nJyxcbiAgZW5kT2ZMaW5lIDogJ2VuZE9mTGluZScsXG4gIHdoaXRlc3BhY2UgOiAnd2hpdGVzcGFjZSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==