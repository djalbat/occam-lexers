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
      var content = startPosition === undefined || endPosition === undefined ? this.content : this.content.substring(startPosition, endPosition);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInVuZGVmaW5lZCIsInN1YnN0cmluZyIsImxlbmd0aCIsInN1YnN0ciIsInRva2VuIiwiY2xvbmVkVG9rZW4iLCJjbG9uZSIsInRva2VuV2l0aFN0YXJ0VHJpbW1lZCIsInRyaW1Gcm9tRW5kUG9zaXRpb24iLCJ0b2tlbldpdGhFbmRUcmltbWVkIiwidHJpbVRvU3RhcnRQb3NpdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSztBQUNKLGlCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQjtBQUFBOztBQUN6QixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzsrQkFFVUMsYSxFQUFlQyxXLEVBQWE7QUFDckMsVUFBSUgsVUFBWUUsa0JBQWtCRSxTQUFuQixJQUFrQ0QsZ0JBQWdCQyxTQUFuRCxHQUNSLEtBQUtKLE9BREcsR0FFTixLQUFLQSxPQUFMLENBQWFLLFNBQWIsQ0FBdUJILGFBQXZCLEVBQXNDQyxXQUF0QyxDQUZSOztBQUlBLGFBQU9ILE9BQVA7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0QsT0FBTCxDQUFhTSxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7K0JBRVVOLE8sRUFBUztBQUNsQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7O3dDQUVtQkcsVyxFQUFhO0FBQy9CLFdBQUtILE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFPLE1BQWIsQ0FBb0JKLFdBQXBCLENBQWY7QUFDRDs7O3dDQUVtQkQsYSxFQUFlO0FBQ2pDLFdBQUtGLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFPLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUJMLGFBQXZCLENBQWY7QUFDRDs7OzJDQUU2Qk0sSyxFQUFPTCxXLEVBQWE7QUFDaEQsVUFBSUEsZ0JBQWdCLEtBQUtHLE1BQXpCLEVBQWlDO0FBQy9CLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlHLGNBQWNELE1BQU1FLEtBQU4sRUFBbEI7QUFBQSxVQUNJQyx3QkFBd0JGLFdBRDVCLENBTGdELENBTU47O0FBRTFDRSw0QkFBc0JDLG1CQUF0QixDQUEwQ1QsV0FBMUM7O0FBRUEsYUFBT1EscUJBQVA7QUFDRDs7OzJDQUU2QkgsSyxFQUFPTixhLEVBQWU7QUFDbEQsVUFBSUEsa0JBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlPLGNBQWNELE1BQU1FLEtBQU4sRUFBbEI7QUFBQSxVQUNJRyxzQkFBc0JKLFdBRDFCLENBTGtELENBTVY7O0FBRXhDSSwwQkFBb0JDLG1CQUFwQixDQUF3Q1osYUFBeEM7O0FBRUEsYUFBT1csbUJBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJqQixLQUFqQiIsImZpbGUiOiJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICB9XG5cbiAgZ2V0Q29udGVudChzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikge1xuICAgIHZhciBjb250ZW50ID0gKChzdGFydFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHx8IChlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSkgP1xuICAgICAgICAgIHRoaXMuY29udGVudCA6XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cbiAgXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cbiAgXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cbiAgXG4gIHRyaW1Gcm9tRW5kUG9zaXRpb24oZW5kUG9zaXRpb24pIHtcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuc3Vic3RyKGVuZFBvc2l0aW9uKTtcbiAgfVxuXG4gIHRyaW1Ub1N0YXJ0UG9zaXRpb24oc3RhcnRQb3NpdGlvbikge1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5zdWJzdHIoMCwgc3RhcnRQb3NpdGlvbik7XG4gIH1cblxuICBzdGF0aWMgdHJpbW1lZEZyb21FbmRQb3NpdGlvbih0b2tlbiwgZW5kUG9zaXRpb24pIHtcbiAgICBpZiAoZW5kUG9zaXRpb24gPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY2xvbmVkVG9rZW4gPSB0b2tlbi5jbG9uZSgpLFxuICAgICAgICB0b2tlbldpdGhTdGFydFRyaW1tZWQgPSBjbG9uZWRUb2tlbjsgIC8vL1xuXG4gICAgdG9rZW5XaXRoU3RhcnRUcmltbWVkLnRyaW1Gcm9tRW5kUG9zaXRpb24oZW5kUG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHRva2VuV2l0aFN0YXJ0VHJpbW1lZDtcbiAgfVxuXG4gIHN0YXRpYyB0cmltbWVkVG9TdGFydFBvc2l0aW9uKHRva2VuLCBzdGFydFBvc2l0aW9uKSB7XG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBjbG9uZWRUb2tlbiA9IHRva2VuLmNsb25lKCksXG4gICAgICAgIHRva2VuV2l0aEVuZFRyaW1tZWQgPSBjbG9uZWRUb2tlbjsgIC8vL1xuXG4gICAgdG9rZW5XaXRoRW5kVHJpbW1lZC50cmltVG9TdGFydFBvc2l0aW9uKHN0YXJ0UG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHRva2VuV2l0aEVuZFRyaW1tZWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==