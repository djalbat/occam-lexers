'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {
  function Token(content, line) {
    _classCallCheck(this, Token);

    this.content = content;
    this.line = line;
  }

  _createClass(Token, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.content = content;
    }
  }, {
    key: 'trimFromStart',
    value: function trimFromStart(start) {
      this.content = this.content.substr(start);
    }
  }, {
    key: 'trimToEnd',
    value: function trimToEnd(end) {
      this.content = this.content.substr(0, end);
    }
  }], [{
    key: 'withStartTrimmed',
    value: function withStartTrimmed(token, start) {
      var clonedToken = token.clone(),
          tokenWithStartTrimmed = clonedToken; ///

      tokenWithStartTrimmed.trimFromStart(start);

      return tokenWithStartTrimmed;
    }
  }, {
    key: 'withEndTrimmed',
    value: function withEndTrimmed(token, end) {
      var clonedToken = token.clone(),
          tokenWithEndTrimmed = clonedToken; ///

      tokenWithEndTrimmed.trimToEnd(end);

      return tokenWithEndTrimmed;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsImxlbmd0aCIsInN0YXJ0Iiwic3Vic3RyIiwiZW5kIiwidG9rZW4iLCJjbG9uZWRUb2tlbiIsImNsb25lIiwidG9rZW5XaXRoU3RhcnRUcmltbWVkIiwidHJpbUZyb21TdGFydCIsInRva2VuV2l0aEVuZFRyaW1tZWQiLCJ0cmltVG9FbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEs7QUFDSixpQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtELE9BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0QsT0FBTCxDQUFhRSxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7K0JBRVVGLE8sRUFBUztBQUNsQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7O2tDQUVhRyxLLEVBQU87QUFDbkIsV0FBS0gsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUksTUFBYixDQUFvQkQsS0FBcEIsQ0FBZjtBQUNEOzs7OEJBRVNFLEcsRUFBSztBQUNiLFdBQUtMLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFJLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUJDLEdBQXZCLENBQWY7QUFDRDs7O3FDQUV1QkMsSyxFQUFPSCxLLEVBQU87QUFDcEMsVUFBSUksY0FBY0QsTUFBTUUsS0FBTixFQUFsQjtBQUFBLFVBQ0lDLHdCQUF3QkYsV0FENUIsQ0FEb0MsQ0FFTTs7QUFFMUNFLDRCQUFzQkMsYUFBdEIsQ0FBb0NQLEtBQXBDOztBQUVBLGFBQU9NLHFCQUFQO0FBQ0Q7OzttQ0FFcUJILEssRUFBT0QsRyxFQUFLO0FBQ2hDLFVBQUlFLGNBQWNELE1BQU1FLEtBQU4sRUFBbEI7QUFBQSxVQUNJRyxzQkFBc0JKLFdBRDFCLENBRGdDLENBRVE7O0FBRXhDSSwwQkFBb0JDLFNBQXBCLENBQThCUCxHQUE5Qjs7QUFFQSxhQUFPTSxtQkFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQmYsS0FBakIiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG4gIFxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG4gIFxuICB0cmltRnJvbVN0YXJ0KHN0YXJ0KSB7XG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnN1YnN0cihzdGFydCk7XG4gIH1cblxuICB0cmltVG9FbmQoZW5kKSB7XG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnN1YnN0cigwLCBlbmQpO1xuICB9XG5cbiAgc3RhdGljIHdpdGhTdGFydFRyaW1tZWQodG9rZW4sIHN0YXJ0KSB7XG4gICAgdmFyIGNsb25lZFRva2VuID0gdG9rZW4uY2xvbmUoKSxcbiAgICAgICAgdG9rZW5XaXRoU3RhcnRUcmltbWVkID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRva2VuV2l0aFN0YXJ0VHJpbW1lZC50cmltRnJvbVN0YXJ0KHN0YXJ0KTtcblxuICAgIHJldHVybiB0b2tlbldpdGhTdGFydFRyaW1tZWQ7XG4gIH1cblxuICBzdGF0aWMgd2l0aEVuZFRyaW1tZWQodG9rZW4sIGVuZCkge1xuICAgIHZhciBjbG9uZWRUb2tlbiA9IHRva2VuLmNsb25lKCksXG4gICAgICAgIHRva2VuV2l0aEVuZFRyaW1tZWQgPSBjbG9uZWRUb2tlbjsgIC8vL1xuXG4gICAgdG9rZW5XaXRoRW5kVHJpbW1lZC50cmltVG9FbmQoZW5kKTtcblxuICAgIHJldHVybiB0b2tlbldpdGhFbmRUcmltbWVkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG4iXX0=