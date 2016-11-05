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
    value: function getContent(start, end) {
      var content = start === undefined || end === undefined ? this.content : this.content.substr(start, end);

      return content;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsInN0YXJ0IiwiZW5kIiwidW5kZWZpbmVkIiwic3Vic3RyIiwibGVuZ3RoIiwidG9rZW4iLCJjbG9uZWRUb2tlbiIsImNsb25lIiwidG9rZW5XaXRoU3RhcnRUcmltbWVkIiwidHJpbUZyb21TdGFydCIsInRva2VuV2l0aEVuZFRyaW1tZWQiLCJ0cmltVG9FbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEs7QUFDSixpQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7K0JBRVVDLEssRUFBT0MsRyxFQUFLO0FBQ3JCLFVBQUlILFVBQVlFLFVBQVVFLFNBQVgsSUFBMEJELFFBQVFDLFNBQW5DLEdBQ1IsS0FBS0osT0FERyxHQUVOLEtBQUtBLE9BQUwsQ0FBYUssTUFBYixDQUFvQkgsS0FBcEIsRUFBMkJDLEdBQTNCLENBRlI7O0FBSUEsYUFBT0gsT0FBUDtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRCxPQUFMLENBQWFNLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7OzsrQkFFVU4sTyxFQUFTO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7a0NBRWFFLEssRUFBTzs7QUFFbkIsV0FBS0YsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUssTUFBYixDQUFvQkgsS0FBcEIsQ0FBZjtBQUNEOzs7OEJBRVNDLEcsRUFBSztBQUNiLFdBQUtILE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFLLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUJGLEdBQXZCLENBQWY7QUFDRDs7O3FDQUV1QkksSyxFQUFPTCxLLEVBQU87QUFDcEMsVUFBSU0sY0FBY0QsTUFBTUUsS0FBTixFQUFsQjtBQUFBLFVBQ0lDLHdCQUF3QkYsV0FENUIsQ0FEb0MsQ0FFTTs7QUFFMUNFLDRCQUFzQkMsYUFBdEIsQ0FBb0NULEtBQXBDOztBQUVBLGFBQU9RLHFCQUFQO0FBQ0Q7OzttQ0FFcUJILEssRUFBT0osRyxFQUFLO0FBQ2hDLFVBQUlLLGNBQWNELE1BQU1FLEtBQU4sRUFBbEI7QUFBQSxVQUNJRyxzQkFBc0JKLFdBRDFCLENBRGdDLENBRVE7O0FBRXhDSSwwQkFBb0JDLFNBQXBCLENBQThCVixHQUE5Qjs7QUFFQSxhQUFPUyxtQkFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQmhCLEtBQWpCIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gIH1cblxuICBnZXRDb250ZW50KHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgY29udGVudCA9ICgoc3RhcnQgPT09IHVuZGVmaW5lZCkgfHwgKGVuZCA9PT0gdW5kZWZpbmVkKSkgP1xuICAgICAgICAgIHRoaXMuY29udGVudCA6XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3Vic3RyKHN0YXJ0LCBlbmQpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuICBcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuICBcbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuICBcbiAgdHJpbUZyb21TdGFydChzdGFydCkge1xuXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnN1YnN0cihzdGFydCk7XG4gIH1cblxuICB0cmltVG9FbmQoZW5kKSB7XG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnN1YnN0cigwLCBlbmQpO1xuICB9XG5cbiAgc3RhdGljIHdpdGhTdGFydFRyaW1tZWQodG9rZW4sIHN0YXJ0KSB7XG4gICAgdmFyIGNsb25lZFRva2VuID0gdG9rZW4uY2xvbmUoKSxcbiAgICAgICAgdG9rZW5XaXRoU3RhcnRUcmltbWVkID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRva2VuV2l0aFN0YXJ0VHJpbW1lZC50cmltRnJvbVN0YXJ0KHN0YXJ0KTtcblxuICAgIHJldHVybiB0b2tlbldpdGhTdGFydFRyaW1tZWQ7XG4gIH1cblxuICBzdGF0aWMgd2l0aEVuZFRyaW1tZWQodG9rZW4sIGVuZCkge1xuICAgIHZhciBjbG9uZWRUb2tlbiA9IHRva2VuLmNsb25lKCksXG4gICAgICAgIHRva2VuV2l0aEVuZFRyaW1tZWQgPSBjbG9uZWRUb2tlbjsgIC8vL1xuXG4gICAgdG9rZW5XaXRoRW5kVHJpbW1lZC50cmltVG9FbmQoZW5kKTtcblxuICAgIHJldHVybiB0b2tlbldpdGhFbmRUcmltbWVkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG4iXX0=