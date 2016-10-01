'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../../common/token');

var SpecialToken = function (_Token) {
  _inherits(SpecialToken, _Token);

  function SpecialToken() {
    _classCallCheck(this, SpecialToken);

    return _possibleConstructorReturn(this, (SpecialToken.__proto__ || Object.getPrototypeOf(SpecialToken)).apply(this, arguments));
  }

  _createClass(SpecialToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getString(),
          line = this.getLine();

      return new SpecialToken(str, line);
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var str = this.getString(),
          type = SpecialToken.type,
          html = '<span class="' + type + '">' + str + '</span>';

      return html;
    }
  }], [{
    key: 'position',
    value: function position(content) {
      var position = content.search(SpecialToken.regExp);

      return position;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content, line) {
      var str = content; ///

      var specialToken = new SpecialToken(str, line);

      return specialToken;
    }
  }]);

  return SpecialToken;
}(Token);

SpecialToken.type = 'special';
SpecialToken.regExp = /(!|%|&&|&|@|~|\(\)|\(|\)|\*|\+\+|\+|,|\.\(|\.\.|\.|\\\/|\/\\|\/|::|:<|:=|:>|:|;|<->|>->|<-|->|-|<:|<=|<>|<|=>|=_D|=|>=|>|\?|\?=|\[|\]|\^|\{|\}|\|\||\|-|\|)/;

module.exports = SpecialToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL3NwZWNpYWwuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU3BlY2lhbFRva2VuIiwic3RyIiwiZ2V0U3RyaW5nIiwibGluZSIsImdldExpbmUiLCJ0eXBlIiwiaHRtbCIsImNvbnRlbnQiLCJwb3NpdGlvbiIsInNlYXJjaCIsInJlZ0V4cCIsInNwZWNpYWxUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxvQkFBUixDQUFaOztJQUVNQyxZOzs7Ozs7Ozs7Ozs0QkFDSTtBQUNOLFVBQUlDLE1BQU0sS0FBS0MsU0FBTCxFQUFWO0FBQUEsVUFDSUMsT0FBTyxLQUFLQyxPQUFMLEVBRFg7O0FBR0EsYUFBTyxJQUFJSixZQUFKLENBQWlCQyxHQUFqQixFQUFzQkUsSUFBdEIsQ0FBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFJRixNQUFNLEtBQUtDLFNBQUwsRUFBVjtBQUFBLFVBQ0lHLE9BQU9MLGFBQWFLLElBRHhCO0FBQUEsVUFFSUMsT0FBTyxrQkFBa0JELElBQWxCLEdBQXlCLElBQXpCLEdBQWdDSixHQUFoQyxHQUFzQyxTQUZqRDs7QUFJQSxhQUFPSyxJQUFQO0FBQ0Q7Ozs2QkFFZUMsTyxFQUFTO0FBQ3ZCLFVBQUlDLFdBQVdELFFBQVFFLE1BQVIsQ0FBZVQsYUFBYVUsTUFBNUIsQ0FBZjs7QUFFQSxhQUFPRixRQUFQO0FBQ0Q7OztnQ0FFa0JELE8sRUFBU0osSSxFQUFNO0FBQ2hDLFVBQUlGLE1BQU1NLE9BQVYsQ0FEZ0MsQ0FDWjs7QUFFcEIsVUFBSUksZUFBZSxJQUFJWCxZQUFKLENBQWlCQyxHQUFqQixFQUFzQkUsSUFBdEIsQ0FBbkI7O0FBRUEsYUFBT1EsWUFBUDtBQUNEOzs7O0VBNUJ3QmIsSzs7QUErQjNCRSxhQUFhSyxJQUFiLEdBQW9CLFNBQXBCO0FBQ0FMLGFBQWFVLE1BQWIsR0FBc0IsNkpBQXRCOztBQUVBRSxPQUFPQyxPQUFQLEdBQWlCYixZQUFqQiIsImZpbGUiOiJzcGVjaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4nKTtcblxuY2xhc3MgU3BlY2lhbFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjbG9uZSgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgbGluZSA9IHRoaXMuZ2V0TGluZSgpO1xuXG4gICAgcmV0dXJuIG5ldyBTcGVjaWFsVG9rZW4oc3RyLCBsaW5lKTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIHR5cGUgPSBTcGVjaWFsVG9rZW4udHlwZSxcbiAgICAgICAgaHRtbCA9ICc8c3BhbiBjbGFzcz1cIicgKyB0eXBlICsgJ1wiPicgKyBzdHIgKyAnPC9zcGFuPic7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbihjb250ZW50KSB7XG4gICAgdmFyIHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goU3BlY2lhbFRva2VuLnJlZ0V4cCk7XG4gICAgXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBzdHIgPSBjb250ZW50OyAgLy8vXG4gICAgXG4gICAgdmFyIHNwZWNpYWxUb2tlbiA9IG5ldyBTcGVjaWFsVG9rZW4oc3RyLCBsaW5lKTtcbiAgICBcbiAgICByZXR1cm4gc3BlY2lhbFRva2VuO1xuICB9IFxufVxuXG5TcGVjaWFsVG9rZW4udHlwZSA9ICdzcGVjaWFsJztcblNwZWNpYWxUb2tlbi5yZWdFeHAgPSAvKCF8JXwmJnwmfEB8fnxcXChcXCl8XFwofFxcKXxcXCp8XFwrXFwrfFxcK3wsfFxcLlxcKHxcXC5cXC58XFwufFxcXFxcXC98XFwvXFxcXHxcXC98Ojp8Ojx8Oj18Oj58Onw7fDwtPnw+LT58PC18LT58LXw8Onw8PXw8Pnw8fD0+fD1fRHw9fD49fD58XFw/fFxcPz18XFxbfFxcXXxcXF58XFx7fFxcfXxcXHxcXHx8XFx8LXxcXHwpLztcblxubW9kdWxlLmV4cG9ydHMgPSBTcGVjaWFsVG9rZW47XG4iXX0=