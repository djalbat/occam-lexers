'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var SignificantToken = function (_Token) {
  _inherits(SignificantToken, _Token);

  function SignificantToken(content, line, html, type) {
    _classCallCheck(this, SignificantToken);

    var _this = _possibleConstructorReturn(this, (SignificantToken.__proto__ || Object.getPrototypeOf(SignificantToken)).call(this, content, line, html));

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
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, SignificantToken);
    }
  }], [{
    key: 'clone',
    value: function clone(token, startPosition, endPosition, Class) {
      return Token.clone(token, startPosition, endPosition, Class);
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : SignificantToken;

      var type = Class.type,
          html = Class.htmlFromContentAndType(content, type),
          significantToken = new Class(content, line, html, type);

      return significantToken;
    }
  }, {
    key: 'fromToken',
    value: function fromToken(token) {
      return Token.fromToken(token, SignificantToken);
    }
  }, {
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      var html = SignificantToken.htmlFromContentAndType(content, type),
          significantToken = new SignificantToken(content, line, html, type);

      return significantToken;
    }
  }, {
    key: 'htmlFromContentAndType',
    value: function htmlFromContentAndType(content, type) {
      var innerHTML = content,
          ///
      className = type; ///

      innerHTML = Token.sanitiseHTML(innerHTML);

      var html = '<span class="' + className + '">' + innerHTML + '</span>';

      return html;
    }
  }, {
    key: 'sanitiseHTML',
    value: function sanitiseHTML(html) {
      return Token.sanitiseHTML(html);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwiaHRtbCIsInR5cGUiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsInRva2VuIiwiQ2xhc3MiLCJodG1sRnJvbUNvbnRlbnRBbmRUeXBlIiwic2lnbmlmaWNhbnRUb2tlbiIsImZyb21Ub2tlbiIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsInNhbml0aXNlSFRNTCIsInR5cGVzIiwic3RyaW5nIiwiZW5kT2ZMaW5lIiwid2hpdGVzcGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLGdCOzs7QUFDSiw0QkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUFBOztBQUFBLG9JQUMvQkgsT0FEK0IsRUFDdEJDLElBRHNCLEVBQ2hCQyxJQURnQjs7QUFHckMsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBSHFDO0FBSXRDOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7OzswQkFFS0MsYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPTixpQkFBaUJPLEtBQWpCLENBQXVCLElBQXZCLEVBQTZCRixhQUE3QixFQUE0Q0MsV0FBNUMsRUFBeUROLGdCQUF6RCxDQUFQO0FBQW1GOzs7MEJBRTFHUSxLLEVBQU9ILGEsRUFBZUMsVyxFQUFhRyxLLEVBQU87QUFBRSxhQUFPWCxNQUFNUyxLQUFOLENBQVlDLEtBQVosRUFBbUJILGFBQW5CLEVBQWtDQyxXQUFsQyxFQUErQ0csS0FBL0MsQ0FBUDtBQUE4RDs7O3VDQUU3RlIsTyxFQUFTQyxJLEVBQWdDO0FBQUEsVUFBMUJPLEtBQTBCLHVFQUFsQlQsZ0JBQWtCOztBQUNqRSxVQUFJSSxPQUFPSyxNQUFNTCxJQUFqQjtBQUFBLFVBQ0lELE9BQU9NLE1BQU1DLHNCQUFOLENBQTZCVCxPQUE3QixFQUFzQ0csSUFBdEMsQ0FEWDtBQUFBLFVBRUlPLG1CQUFtQixJQUFJRixLQUFKLENBQVVSLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixFQUErQkMsSUFBL0IsQ0FGdkI7O0FBSUEsYUFBT08sZ0JBQVA7QUFDRDs7OzhCQUVnQkgsSyxFQUFPO0FBQUUsYUFBT1YsTUFBTWMsU0FBTixDQUFnQkosS0FBaEIsRUFBdUJSLGdCQUF2QixDQUFQO0FBQWtEOzs7MkNBRTlDQyxPLEVBQVNDLEksRUFBTUUsSSxFQUFNO0FBQ2pELFVBQUlELE9BQU9ILGlCQUFpQlUsc0JBQWpCLENBQXdDVCxPQUF4QyxFQUFpREcsSUFBakQsQ0FBWDtBQUFBLFVBQ0lPLG1CQUFtQixJQUFJWCxnQkFBSixDQUFxQkMsT0FBckIsRUFBOEJDLElBQTlCLEVBQW9DQyxJQUFwQyxFQUEwQ0MsSUFBMUMsQ0FEdkI7O0FBR0EsYUFBT08sZ0JBQVA7QUFDRDs7OzJDQUU2QlYsTyxFQUFTRyxJLEVBQU07QUFDM0MsVUFBSVMsWUFBWVosT0FBaEI7QUFBQSxVQUF5QjtBQUNyQmEsa0JBQVlWLElBRGhCLENBRDJDLENBRXJCOztBQUV0QlMsa0JBQVlmLE1BQU1pQixZQUFOLENBQW1CRixTQUFuQixDQUFaOztBQUVBLFVBQUlWLHlCQUF1QlcsU0FBdkIsVUFBcUNELFNBQXJDLFlBQUo7O0FBRUEsYUFBT1YsSUFBUDtBQUNEOzs7aUNBRW1CQSxJLEVBQU07QUFBRSxhQUFPTCxNQUFNaUIsWUFBTixDQUFtQlosSUFBbkIsQ0FBUDtBQUFrQzs7OztFQTNDakNMLEs7O0FBOEMvQkUsaUJBQWlCZ0IsS0FBakIsR0FBeUI7QUFDdkJDLFVBQVEsUUFEZTtBQUV2QkMsYUFBVyxXQUZZO0FBR3ZCQyxjQUFZO0FBSFcsQ0FBekI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJyQixnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwsIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZW50LCBsaW5lLCBodG1sKTtcbiAgICBcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIFNpZ25pZmljYW50VG9rZW4pIH1cblxuICBzdGF0aWMgY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDbGFzcykgeyByZXR1cm4gVG9rZW4uY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDbGFzcykgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgdmFyIHR5cGUgPSBDbGFzcy50eXBlLFxuICAgICAgICBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0eXBlKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sLCB0eXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbih0b2tlbikgeyByZXR1cm4gVG9rZW4uZnJvbVRva2VuKHRva2VuLCBTaWduaWZpY2FudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHtcbiAgICB2YXIgaHRtbCA9IFNpZ25pZmljYW50VG9rZW4uaHRtbEZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0eXBlKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBTaWduaWZpY2FudFRva2VuKGNvbnRlbnQsIGxpbmUsIGh0bWwsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0eXBlKSB7XG4gICAgdmFyIGlubmVySFRNTCA9IGNvbnRlbnQsIC8vL1xuICAgICAgICBjbGFzc05hbWUgPSB0eXBlOyAvLy9cblxuICAgIGlubmVySFRNTCA9IFRva2VuLnNhbml0aXNlSFRNTChpbm5lckhUTUwpO1xuXG4gICAgdmFyIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke2lubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIHNhbml0aXNlSFRNTChodG1sKSB7IHJldHVybiBUb2tlbi5zYW5pdGlzZUhUTUwoaHRtbCk7IH1cbn1cblxuU2lnbmlmaWNhbnRUb2tlbi50eXBlcyA9IHtcbiAgc3RyaW5nOiAnc3RyaW5nJyxcbiAgZW5kT2ZMaW5lOiAnZW5kT2ZMaW5lJyxcbiAgd2hpdGVzcGFjZTogJ3doaXRlc3BhY2UnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW47XG4iXX0=