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
    value: function clone(token) {
      var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : token.getLength();
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : SignificantToken;

      var clonedToken = null;

      if (startPosition !== endPosition) {
        var line = token.getLine(),
            type = token.getType();

        var content = token.getContent();

        content = content.substring(startPosition, endPosition);

        clonedToken = Class.fromContentLineAndType(content, line, type, Class);
      }

      return clonedToken;
    }
  }, {
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : SignificantToken;

      var html = Class.htmlFromContentAndType(content, type),
          significantToken = new Class(content, line, html, type);

      return significantToken;
    }
  }, {
    key: 'htmlFromContentAndType',
    value: function htmlFromContentAndType(content, type) {
      var innerHTML = content; ///

      var className = type; ///

      innerHTML = Token.sanitiseHTML(innerHTML);

      var html = '<span class="' + className + '">' + innerHTML + '</span>';

      return html;
    }
  }, {
    key: 'fromToken',
    value: function fromToken(token) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SignificantToken;

      var content = token.getContent(),
          line = token.getLine(),
          type = token.getType();

      token = Class.fromContentLineAndType(content, line, type, Class);

      return token;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwiaHRtbCIsInR5cGUiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsInRva2VuIiwiZ2V0TGVuZ3RoIiwiQ2xhc3MiLCJjbG9uZWRUb2tlbiIsImdldExpbmUiLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsInN1YnN0cmluZyIsImZyb21Db250ZW50TGluZUFuZFR5cGUiLCJodG1sRnJvbUNvbnRlbnRBbmRUeXBlIiwic2lnbmlmaWNhbnRUb2tlbiIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsInNhbml0aXNlSFRNTCIsInR5cGVzIiwic3RyaW5nIiwiZW5kT2ZMaW5lIiwid2hpdGVzcGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7O0lBRU1DLGdCOzs7QUFDSiw0QkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUFBOztBQUFBLG9JQUMvQkgsT0FEK0IsRUFDdEJDLElBRHNCLEVBQ2hCQyxJQURnQjs7QUFHckMsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBSHFDO0FBSXRDOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7OzswQkFFS0MsYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPTixpQkFBaUJPLEtBQWpCLENBQXVCLElBQXZCLEVBQTZCRixhQUE3QixFQUE0Q0MsV0FBNUMsRUFBeUROLGdCQUF6RCxDQUFQO0FBQW1GOzs7MEJBRTFHUSxLLEVBQXFGO0FBQUEsVUFBOUVILGFBQThFLHVFQUE5RCxDQUE4RDtBQUFBLFVBQTNEQyxXQUEyRCx1RUFBN0NFLE1BQU1DLFNBQU4sRUFBNkM7QUFBQSxVQUExQkMsS0FBMEIsdUVBQWxCVixnQkFBa0I7O0FBQ2hHLFVBQUlXLGNBQWMsSUFBbEI7O0FBRUEsVUFBSU4sa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFNSixPQUFPTSxNQUFNSSxPQUFOLEVBQWI7QUFBQSxZQUNNUixPQUFPSSxNQUFNSyxPQUFOLEVBRGI7O0FBR0EsWUFBSVosVUFBVU8sTUFBTU0sVUFBTixFQUFkOztBQUVBYixrQkFBVUEsUUFBUWMsU0FBUixDQUFrQlYsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVY7O0FBRUFLLHNCQUFjRCxNQUFNTSxzQkFBTixDQUE2QmYsT0FBN0IsRUFBc0NDLElBQXRDLEVBQTRDRSxJQUE1QyxFQUFrRE0sS0FBbEQsQ0FBZDtBQUNEOztBQUVELGFBQU9DLFdBQVA7QUFDRDs7OzJDQUU2QlYsTyxFQUFTQyxJLEVBQU1FLEksRUFBZ0M7QUFBQSxVQUExQk0sS0FBMEIsdUVBQWxCVixnQkFBa0I7O0FBQzNFLFVBQU1HLE9BQU9PLE1BQU1PLHNCQUFOLENBQTZCaEIsT0FBN0IsRUFBc0NHLElBQXRDLENBQWI7QUFBQSxVQUNNYyxtQkFBbUIsSUFBSVIsS0FBSixDQUFVVCxPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsSUFBekIsRUFBK0JDLElBQS9CLENBRHpCOztBQUdBLGFBQU9jLGdCQUFQO0FBQ0Q7OzsyQ0FFNkJqQixPLEVBQVNHLEksRUFBTTtBQUMzQyxVQUFJZSxZQUFZbEIsT0FBaEIsQ0FEMkMsQ0FDbEI7O0FBRXpCLFVBQU1tQixZQUFZaEIsSUFBbEIsQ0FIMkMsQ0FHbkI7O0FBRXhCZSxrQkFBWXJCLE1BQU11QixZQUFOLENBQW1CRixTQUFuQixDQUFaOztBQUVBLFVBQU1oQix5QkFBdUJpQixTQUF2QixVQUFxQ0QsU0FBckMsWUFBTjs7QUFFQSxhQUFPaEIsSUFBUDtBQUNEOzs7OEJBRWdCSyxLLEVBQWlDO0FBQUEsVUFBMUJFLEtBQTBCLHVFQUFsQlYsZ0JBQWtCOztBQUNoRCxVQUFNQyxVQUFVTyxNQUFNTSxVQUFOLEVBQWhCO0FBQUEsVUFDTVosT0FBT00sTUFBTUksT0FBTixFQURiO0FBQUEsVUFFTVIsT0FBT0ksTUFBTUssT0FBTixFQUZiOztBQUlBTCxjQUFRRSxNQUFNTSxzQkFBTixDQUE2QmYsT0FBN0IsRUFBc0NDLElBQXRDLEVBQTRDRSxJQUE1QyxFQUFrRE0sS0FBbEQsQ0FBUjs7QUFFQSxhQUFPRixLQUFQO0FBQ0Q7OztpQ0FFbUJMLEksRUFBTTtBQUFFLGFBQU9MLE1BQU11QixZQUFOLENBQW1CbEIsSUFBbkIsQ0FBUDtBQUFrQzs7OztFQTNEakNMLEs7O0FBOEQvQkUsaUJBQWlCc0IsS0FBakIsR0FBeUI7QUFDdkJDLFVBQVEsUUFEZTtBQUV2QkMsYUFBVyxXQUZZO0FBR3ZCQyxjQUFZO0FBSFcsQ0FBekI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUIzQixnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgaHRtbCwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuICAgIFxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgU2lnbmlmaWNhbnRUb2tlbikgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gdG9rZW4uZ2V0TGVuZ3RoKCksIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGxldCBjbG9uZWRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IGxpbmUgPSB0b2tlbi5nZXRMaW5lKCksXG4gICAgICAgICAgICB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpO1xuXG4gICAgICBsZXQgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkVG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIENsYXNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkVG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlLCBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBjb25zdCBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0eXBlKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0eXBlKSB7XG4gICAgbGV0IGlubmVySFRNTCA9IGNvbnRlbnQ7IC8vL1xuICAgIFxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHR5cGU7IC8vL1xuXG4gICAgaW5uZXJIVE1MID0gVG9rZW4uc2FuaXRpc2VIVE1MKGlubmVySFRNTCk7XG5cbiAgICBjb25zdCBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW4odG9rZW4sIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZSA9IHRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpO1xuXG4gICAgdG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIENsYXNzKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBzYW5pdGlzZUhUTUwoaHRtbCkgeyByZXR1cm4gVG9rZW4uc2FuaXRpc2VIVE1MKGh0bWwpOyB9XG59XG5cblNpZ25pZmljYW50VG9rZW4udHlwZXMgPSB7XG4gIHN0cmluZzogJ3N0cmluZycsXG4gIGVuZE9mTGluZTogJ2VuZE9mTGluZScsXG4gIHdoaXRlc3BhY2U6ICd3aGl0ZXNwYWNlJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19