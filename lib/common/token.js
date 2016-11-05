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
    value: function getContent(startPosition, endPosition) {
      var content = startPosition === undefined || endPosition === undefined ? this.content : this.content.substr(startPosition, endPosition);

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
    key: 'trimFromEndPosition',
    value: function trimFromEndPosition(endPosition) {
      this.content = this.content.substr(endPosition);
    }
  }, {
    key: 'trimToStartPosition',
    value: function trimToStartPosition(startPosition) {
      this.content = this.content.substr(0, startPosition);
    }
  }], [{
    key: 'trimmedFromEndPosition',
    value: function trimmedFromEndPosition(token, endPosition) {
      if (endPosition === this.length) {
        return null;
      }

      var clonedToken = token.clone(),
          tokenWithStartTrimmed = clonedToken; ///

      tokenWithStartTrimmed.trimFromEndPosition(endPosition);

      return tokenWithStartTrimmed;
    }
  }, {
    key: 'trimmedToStartPosition',
    value: function trimmedToStartPosition(token, startPosition) {
      if (startPosition === 0) {
        return null;
      }

      var clonedToken = token.clone(),
          tokenWithEndTrimmed = clonedToken; ///

      tokenWithEndTrimmed.trimToStartPosition(startPosition);

      return tokenWithEndTrimmed;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInVuZGVmaW5lZCIsInN1YnN0ciIsImxlbmd0aCIsInRva2VuIiwiY2xvbmVkVG9rZW4iLCJjbG9uZSIsInRva2VuV2l0aFN0YXJ0VHJpbW1lZCIsInRyaW1Gcm9tRW5kUG9zaXRpb24iLCJ0b2tlbldpdGhFbmRUcmltbWVkIiwidHJpbVRvU3RhcnRQb3NpdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSztBQUNKLGlCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQjtBQUFBOztBQUN6QixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzsrQkFFVUMsYSxFQUFlQyxXLEVBQWE7QUFDckMsVUFBSUgsVUFBWUUsa0JBQWtCRSxTQUFuQixJQUFrQ0QsZ0JBQWdCQyxTQUFuRCxHQUNSLEtBQUtKLE9BREcsR0FFTixLQUFLQSxPQUFMLENBQWFLLE1BQWIsQ0FBb0JILGFBQXBCLEVBQW1DQyxXQUFuQyxDQUZSOztBQUlBLGFBQU9ILE9BQVA7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0QsT0FBTCxDQUFhTSxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7K0JBRVVOLE8sRUFBUztBQUNsQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7O3dDQUVtQkcsVyxFQUFhO0FBQy9CLFdBQUtILE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFLLE1BQWIsQ0FBb0JGLFdBQXBCLENBQWY7QUFDRDs7O3dDQUVtQkQsYSxFQUFlO0FBQ2pDLFdBQUtGLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFLLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUJILGFBQXZCLENBQWY7QUFDRDs7OzJDQUU2QkssSyxFQUFPSixXLEVBQWE7QUFDaEQsVUFBSUEsZ0JBQWdCLEtBQUtHLE1BQXpCLEVBQWlDO0FBQy9CLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlFLGNBQWNELE1BQU1FLEtBQU4sRUFBbEI7QUFBQSxVQUNJQyx3QkFBd0JGLFdBRDVCLENBTGdELENBTU47O0FBRTFDRSw0QkFBc0JDLG1CQUF0QixDQUEwQ1IsV0FBMUM7O0FBRUEsYUFBT08scUJBQVA7QUFDRDs7OzJDQUU2QkgsSyxFQUFPTCxhLEVBQWU7QUFDbEQsVUFBSUEsa0JBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlNLGNBQWNELE1BQU1FLEtBQU4sRUFBbEI7QUFBQSxVQUNJRyxzQkFBc0JKLFdBRDFCLENBTGtELENBTVY7O0FBRXhDSSwwQkFBb0JDLG1CQUFwQixDQUF3Q1gsYUFBeEM7O0FBRUEsYUFBT1UsbUJBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJoQixLQUFqQiIsImZpbGUiOiJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICB9XG5cbiAgZ2V0Q29udGVudChzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikge1xuICAgIHZhciBjb250ZW50ID0gKChzdGFydFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHx8IChlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSkgP1xuICAgICAgICAgIHRoaXMuY29udGVudCA6XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3Vic3RyKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cbiAgXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cbiAgXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cbiAgXG4gIHRyaW1Gcm9tRW5kUG9zaXRpb24oZW5kUG9zaXRpb24pIHtcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuc3Vic3RyKGVuZFBvc2l0aW9uKTtcbiAgfVxuXG4gIHRyaW1Ub1N0YXJ0UG9zaXRpb24oc3RhcnRQb3NpdGlvbikge1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5zdWJzdHIoMCwgc3RhcnRQb3NpdGlvbik7XG4gIH1cblxuICBzdGF0aWMgdHJpbW1lZEZyb21FbmRQb3NpdGlvbih0b2tlbiwgZW5kUG9zaXRpb24pIHtcbiAgICBpZiAoZW5kUG9zaXRpb24gPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgdmFyIGNsb25lZFRva2VuID0gdG9rZW4uY2xvbmUoKSxcbiAgICAgICAgdG9rZW5XaXRoU3RhcnRUcmltbWVkID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRva2VuV2l0aFN0YXJ0VHJpbW1lZC50cmltRnJvbUVuZFBvc2l0aW9uKGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiB0b2tlbldpdGhTdGFydFRyaW1tZWQ7XG4gIH1cblxuICBzdGF0aWMgdHJpbW1lZFRvU3RhcnRQb3NpdGlvbih0b2tlbiwgc3RhcnRQb3NpdGlvbikge1xuICAgIGlmIChzdGFydFBvc2l0aW9uID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY2xvbmVkVG9rZW4gPSB0b2tlbi5jbG9uZSgpLFxuICAgICAgICB0b2tlbldpdGhFbmRUcmltbWVkID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRva2VuV2l0aEVuZFRyaW1tZWQudHJpbVRvU3RhcnRQb3NpdGlvbihzdGFydFBvc2l0aW9uKTtcblxuICAgIHJldHVybiB0b2tlbldpdGhFbmRUcmltbWVkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG4iXX0=