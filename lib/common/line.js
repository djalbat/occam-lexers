'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    SignificantTokens = require('./significantTokens');

var Line = function () {
  function Line(content, number) {
    _classCallCheck(this, Line);

    this.content = content;
    this.number = number;

    this.tokens = undefined;
  }

  _createClass(Line, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getNumber',
    value: function getNumber() {
      return this.number;
    }
  }, {
    key: 'getTokens',
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = this.tokens.reduce(function (html, token) {
        var tokenHTML = token.getHTML();

        html += tokenHTML;

        return html;
      }, '');

      html += '\n';

      return html;
    }
  }, {
    key: 'setNumber',
    value: function setNumber(number) {
      this.number = number;
    }
  }, {
    key: 'setTokens',
    value: function setTokens(tokens) {
      this.tokens = tokens;
    }
  }, {
    key: 'pushToken',
    value: function pushToken(token) {
      this.tokens.push(token);
    }
  }, {
    key: 'replaceToken',
    value: function replaceToken(oldToken, newToken) {
      var oldTokenIndex = util.indexOf(this.tokens, oldToken),
          newTokens = [newToken];

      util.spliceArray(this.tokens, oldTokenIndex, 1, newTokens);
    }
  }], [{
    key: 'fromContentAndNumber',
    value: function fromContentAndNumber(Line, content, number, context, rules, CommentTokens, StringTokens, WhitespaceTokens) {
      var line = new Line(content, number),
          tokens = [];

      if (content !== '') {
        var tokensOrContents = [content];

        CommentTokens.pass(tokensOrContents, line, context);
        StringTokens.pass(tokensOrContents, line);
        WhitespaceTokens.pass(tokensOrContents, line);

        tokens = SignificantTokens.pass(tokensOrContents, line, rules);
      }

      line.setTokens(tokens);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJudW1iZXIiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJnZXRIVE1MIiwicHVzaCIsIm9sZFRva2VuIiwibmV3VG9rZW4iLCJvbGRUb2tlbkluZGV4IiwiaW5kZXhPZiIsIm5ld1Rva2VucyIsInNwbGljZUFycmF5IiwiY29udGV4dCIsInJ1bGVzIiwiQ29tbWVudFRva2VucyIsIlN0cmluZ1Rva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJsaW5lIiwidG9rZW5zT3JDb250ZW50cyIsInBhc3MiLCJzZXRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxvQkFBb0JELFFBQVEscUJBQVIsQ0FEeEI7O0lBR01FLEk7QUFDSixnQkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFNBQUtDLE1BQUwsR0FBY0MsU0FBZDtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLSCxPQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUUsT0FBTyxLQUFLRixNQUFMLENBQVlHLE1BQVosQ0FBbUIsVUFBU0QsSUFBVCxFQUFlRSxLQUFmLEVBQXNCO0FBQ2xELFlBQUlDLFlBQVlELE1BQU1FLE9BQU4sRUFBaEI7O0FBRUFKLGdCQUFRRyxTQUFSOztBQUVBLGVBQU9ILElBQVA7QUFDRCxPQU5VLEVBTVIsRUFOUSxDQUFYOztBQVFBQSxjQUFRLElBQVI7O0FBRUEsYUFBT0EsSUFBUDtBQUNEOzs7OEJBRVNILE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzhCQUVTQyxNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs4QkFFU0ksSyxFQUFPO0FBQ2YsV0FBS0osTUFBTCxDQUFZTyxJQUFaLENBQWlCSCxLQUFqQjtBQUNEOzs7aUNBRVlJLFEsRUFBVUMsUSxFQUFVO0FBQy9CLFVBQUlDLGdCQUFnQmhCLEtBQUtpQixPQUFMLENBQWEsS0FBS1gsTUFBbEIsRUFBMEJRLFFBQTFCLENBQXBCO0FBQUEsVUFDSUksWUFBWSxDQUFDSCxRQUFELENBRGhCOztBQUdBZixXQUFLbUIsV0FBTCxDQUFpQixLQUFLYixNQUF0QixFQUE4QlUsYUFBOUIsRUFBNkMsQ0FBN0MsRUFBZ0RFLFNBQWhEO0FBQ0Q7Ozt5Q0FFMkJmLEksRUFBTUMsTyxFQUFTQyxNLEVBQVFlLE8sRUFBU0MsSyxFQUFPQyxhLEVBQWVDLFksRUFBY0MsZ0IsRUFBa0I7QUFDaEgsVUFBSUMsT0FBTyxJQUFJdEIsSUFBSixDQUFTQyxPQUFULEVBQWtCQyxNQUFsQixDQUFYO0FBQUEsVUFDSUMsU0FBUyxFQURiOztBQUdBLFVBQUlGLFlBQVksRUFBaEIsRUFBb0I7QUFDbEIsWUFBSXNCLG1CQUFtQixDQUFDdEIsT0FBRCxDQUF2Qjs7QUFFQWtCLHNCQUFjSyxJQUFkLENBQW1CRCxnQkFBbkIsRUFBcUNELElBQXJDLEVBQTJDTCxPQUEzQztBQUNBRyxxQkFBYUksSUFBYixDQUFrQkQsZ0JBQWxCLEVBQW9DRCxJQUFwQztBQUNBRCx5QkFBaUJHLElBQWpCLENBQXNCRCxnQkFBdEIsRUFBd0NELElBQXhDOztBQUVBbkIsaUJBQVNKLGtCQUFrQnlCLElBQWxCLENBQXVCRCxnQkFBdkIsRUFBeUNELElBQXpDLEVBQStDSixLQUEvQyxDQUFUO0FBQ0Q7O0FBRURJLFdBQUtHLFNBQUwsQ0FBZXRCLE1BQWY7O0FBRUEsYUFBT21CLElBQVA7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUIzQixJQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnRUb2tlbnMnKTtcclxuXHJcbmNsYXNzIExpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIG51bWJlcikge1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xyXG5cclxuICAgIHRoaXMudG9rZW5zID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXROdW1iZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgfVxyXG5cclxuICBnZXRIVE1MKCkge1xyXG4gICAgdmFyIGh0bWwgPSB0aGlzLnRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcclxuICAgICAgdmFyIHRva2VuSFRNTCA9IHRva2VuLmdldEhUTUwoKTtcclxuICAgICAgXHJcbiAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9LCAnJyk7XHJcbiAgICBcclxuICAgIGh0bWwgKz0gJ1xcbic7XHJcbiAgICBcclxuICAgIHJldHVybiBodG1sO1xyXG4gIH1cclxuXHJcbiAgc2V0TnVtYmVyKG51bWJlcikge1xyXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcbiAgXHJcbiAgcHVzaFRva2VuKHRva2VuKSB7XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHRva2VuKTtcclxuICB9XHJcbiAgXHJcbiAgcmVwbGFjZVRva2VuKG9sZFRva2VuLCBuZXdUb2tlbikge1xyXG4gICAgdmFyIG9sZFRva2VuSW5kZXggPSB1dGlsLmluZGV4T2YodGhpcy50b2tlbnMsIG9sZFRva2VuKSxcclxuICAgICAgICBuZXdUb2tlbnMgPSBbbmV3VG9rZW5dO1xyXG5cclxuICAgIHV0aWwuc3BsaWNlQXJyYXkodGhpcy50b2tlbnMsIG9sZFRva2VuSW5kZXgsIDEsIG5ld1Rva2Vucyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmROdW1iZXIoTGluZSwgY29udGVudCwgbnVtYmVyLCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICB2YXIgbGluZSA9IG5ldyBMaW5lKGNvbnRlbnQsIG51bWJlciksXHJcbiAgICAgICAgdG9rZW5zID0gW107XHJcblxyXG4gICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIHZhciB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdO1xyXG5cclxuICAgICAgQ29tbWVudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpO1xyXG4gICAgICBTdHJpbmdUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuICAgICAgV2hpdGVzcGFjZVRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgICAgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIl19