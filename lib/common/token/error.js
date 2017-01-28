'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var ErrorToken = function (_Token) {
  _inherits(ErrorToken, _Token);

  function ErrorToken() {
    _classCallCheck(this, ErrorToken);

    return _possibleConstructorReturn(this, (ErrorToken.__proto__ || Object.getPrototypeOf(ErrorToken)).apply(this, arguments));
  }

  _createClass(ErrorToken, [{
    key: 'toPosition',
    value: function toPosition(position) {
      return Token.toPosition(this, position, ErrorToken);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(position) {
      return Token.fromPosition(this, position, ErrorToken);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      return Token.fromContentAndLine(content, line, ErrorToken);
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var innerHTML = content,
          ///
      className = 'error'; ///

      innerHTML = Token.sanitiseHTML(innerHTML);

      var html = '<span class="' + className + '">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsInBvc2l0aW9uIiwidG9Qb3NpdGlvbiIsImZyb21Qb3NpdGlvbiIsImNvbnRlbnQiLCJsaW5lIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwic2FuaXRpc2VIVE1MIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLFU7Ozs7Ozs7Ozs7OytCQUNPQyxRLEVBQVU7QUFBRSxhQUFPSCxNQUFNSSxVQUFOLENBQWlCLElBQWpCLEVBQXVCRCxRQUF2QixFQUFpQ0QsVUFBakMsQ0FBUDtBQUFxRDs7O2lDQUUvREMsUSxFQUFVO0FBQUUsYUFBT0gsTUFBTUssWUFBTixDQUFtQixJQUFuQixFQUF5QkYsUUFBekIsRUFBbUNELFVBQW5DLENBQVA7QUFBdUQ7Ozt1Q0FFdERJLE8sRUFBU0MsSSxFQUFNO0FBQUUsYUFBT1AsTUFBTVEsa0JBQU4sQ0FBeUJGLE9BQXpCLEVBQWtDQyxJQUFsQyxFQUF3Q0wsVUFBeEMsQ0FBUDtBQUE2RDs7O29DQUVqRkksTyxFQUFTO0FBQzlCLFVBQUlHLFlBQVlILE9BQWhCO0FBQUEsVUFBeUI7QUFDckJJLGtCQUFZLE9BRGhCLENBRDhCLENBRUw7O0FBRXpCRCxrQkFBWVQsTUFBTVcsWUFBTixDQUFtQkYsU0FBbkIsQ0FBWjs7QUFFQSxVQUFJRyx5QkFBdUJGLFNBQXZCLFVBQXFDRCxTQUFyQyxZQUFKOztBQUVBLGFBQU9HLElBQVA7QUFDRDs7OztFQWhCc0JaLEs7O0FBbUJ6QmEsT0FBT0MsT0FBUCxHQUFpQlosVUFBakIiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIEVycm9yVG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIHRvUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIFRva2VuLnRvUG9zaXRpb24odGhpcywgcG9zaXRpb24sIEVycm9yVG9rZW4pIH1cblxuICBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIFRva2VuLmZyb21Qb3NpdGlvbih0aGlzLCBwb3NpdGlvbiwgRXJyb3JUb2tlbikgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkgeyByZXR1cm4gVG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIEVycm9yVG9rZW4pOyB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIGlubmVySFRNTCA9IGNvbnRlbnQsIC8vL1xuICAgICAgICBjbGFzc05hbWUgPSAnZXJyb3InOyAvLy9cblxuICAgIGlubmVySFRNTCA9IFRva2VuLnNhbml0aXNlSFRNTChpbm5lckhUTUwpO1xuXG4gICAgdmFyIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke2lubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JUb2tlbjtcbiJdfQ==