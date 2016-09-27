'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BracketToken = require('../bracket');

var ClosingCurlyBracketToken = function (_BracketToken) {
  _inherits(ClosingCurlyBracketToken, _BracketToken);

  function ClosingCurlyBracketToken(str) {
    _classCallCheck(this, ClosingCurlyBracketToken);

    return _possibleConstructorReturn(this, (ClosingCurlyBracketToken.__proto__ || Object.getPrototypeOf(ClosingCurlyBracketToken)).call(this, str));
  }

  _createClass(ClosingCurlyBracketToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new ClosingCurlyBracketToken(str);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(/^(\}).*/);

      if (!matches) {
        return null;
      }

      var str = matches[1],
          closingCurlyBracketToken = new ClosingCurlyBracketToken(str);

      return closingCurlyBracketToken;
    }
  }]);

  return ClosingCurlyBracketToken;
}(BracketToken);

module.exports = ClosingCurlyBracketToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL3Rva2VuL2JyYWNrZXQvY2xvc2luZ0N1cmx5LmpzIl0sIm5hbWVzIjpbIkJyYWNrZXRUb2tlbiIsInJlcXVpcmUiLCJDbG9zaW5nQ3VybHlCcmFja2V0VG9rZW4iLCJzdHIiLCJnZXRTdHIiLCJjb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiY2xvc2luZ0N1cmx5QnJhY2tldFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLFlBQVIsQ0FBbkI7O0lBRU1DLHdCOzs7QUFDSixvQ0FBWUMsR0FBWixFQUFpQjtBQUFBOztBQUFBLCtJQUNUQSxHQURTO0FBRWhCOzs7OzRCQUVPO0FBQ04sVUFBSUEsTUFBTSxLQUFLQyxNQUFMLEVBQVY7O0FBRUEsYUFBTyxJQUFJRix3QkFBSixDQUE2QkMsR0FBN0IsQ0FBUDtBQUNEOzs7Z0NBRWtCRSxPLEVBQVM7QUFDMUIsVUFBSUMsVUFBVUQsUUFBUUUsS0FBUixDQUFjLFNBQWQsQ0FBZDs7QUFFQSxVQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlILE1BQU1HLFFBQVEsQ0FBUixDQUFWO0FBQUEsVUFDSUUsMkJBQTJCLElBQUlOLHdCQUFKLENBQTZCQyxHQUE3QixDQUQvQjs7QUFHQSxhQUFPSyx3QkFBUDtBQUNEOzs7O0VBdEJvQ1IsWTs7QUF5QnZDUyxPQUFPQyxPQUFQLEdBQWlCUix3QkFBakIiLCJmaWxlIjoiY2xvc2luZ0N1cmx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQnJhY2tldFRva2VuID0gcmVxdWlyZSgnLi4vYnJhY2tldCcpO1xuXG5jbGFzcyBDbG9zaW5nQ3VybHlCcmFja2V0VG9rZW4gZXh0ZW5kcyBCcmFja2V0VG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHIpIHtcbiAgICBzdXBlcihzdHIpO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyKCk7XG5cbiAgICByZXR1cm4gbmV3IENsb3NpbmdDdXJseUJyYWNrZXRUb2tlbihzdHIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL14oXFx9KS4qLyk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBzdHIgPSBtYXRjaGVzWzFdLFxuICAgICAgICBjbG9zaW5nQ3VybHlCcmFja2V0VG9rZW4gPSBuZXcgQ2xvc2luZ0N1cmx5QnJhY2tldFRva2VuKHN0cik7XG5cbiAgICByZXR1cm4gY2xvc2luZ0N1cmx5QnJhY2tldFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xvc2luZ0N1cmx5QnJhY2tldFRva2VuO1xuXG4iXX0=