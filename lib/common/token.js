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
    key: 'trimFromStartPosition',
    value: function trimFromStartPosition(startPosition) {
      this.content = this.content.substr(startPosition);
    }
  }, {
    key: 'trimToEndPosition',
    value: function trimToEndPosition(endPosition) {
      this.content = this.content.substr(0, endPosition);
    }
  }], [{
    key: 'withStartTrimmed',
    value: function withStartTrimmed(token, startPosition) {
      var clonedToken = token.clone(),
          tokenWithStartTrimmed = clonedToken; ///

      tokenWithStartTrimmed.trimFromStartPosition(startPosition);

      return tokenWithStartTrimmed;
    }
  }, {
    key: 'withEndTrimmed',
    value: function withEndTrimmed(token, endPosition) {
      var clonedToken = token.clone(),
          tokenWithEndTrimmed = clonedToken; ///

      tokenWithEndTrimmed.trimToEndPosition(endPosition);

      return tokenWithEndTrimmed;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInVuZGVmaW5lZCIsInN1YnN0ciIsImxlbmd0aCIsInRva2VuIiwiY2xvbmVkVG9rZW4iLCJjbG9uZSIsInRva2VuV2l0aFN0YXJ0VHJpbW1lZCIsInRyaW1Gcm9tU3RhcnRQb3NpdGlvbiIsInRva2VuV2l0aEVuZFRyaW1tZWQiLCJ0cmltVG9FbmRQb3NpdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSztBQUNKLGlCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQjtBQUFBOztBQUN6QixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzsrQkFFVUMsYSxFQUFlQyxXLEVBQWE7QUFDckMsVUFBSUgsVUFBWUUsa0JBQWtCRSxTQUFuQixJQUFrQ0QsZ0JBQWdCQyxTQUFuRCxHQUNSLEtBQUtKLE9BREcsR0FFTixLQUFLQSxPQUFMLENBQWFLLE1BQWIsQ0FBb0JILGFBQXBCLEVBQW1DQyxXQUFuQyxDQUZSOztBQUlBLGFBQU9ILE9BQVA7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0QsT0FBTCxDQUFhTSxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7K0JBRVVOLE8sRUFBUztBQUNsQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OzBDQUVxQkUsYSxFQUFlO0FBQ25DLFdBQUtGLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFLLE1BQWIsQ0FBb0JILGFBQXBCLENBQWY7QUFDRDs7O3NDQUVpQkMsVyxFQUFhO0FBQzdCLFdBQUtILE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFLLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUJGLFdBQXZCLENBQWY7QUFDRDs7O3FDQUV1QkksSyxFQUFPTCxhLEVBQWU7QUFDNUMsVUFBSU0sY0FBY0QsTUFBTUUsS0FBTixFQUFsQjtBQUFBLFVBQ0lDLHdCQUF3QkYsV0FENUIsQ0FENEMsQ0FFRjs7QUFFMUNFLDRCQUFzQkMscUJBQXRCLENBQTRDVCxhQUE1Qzs7QUFFQSxhQUFPUSxxQkFBUDtBQUNEOzs7bUNBRXFCSCxLLEVBQU9KLFcsRUFBYTtBQUN4QyxVQUFJSyxjQUFjRCxNQUFNRSxLQUFOLEVBQWxCO0FBQUEsVUFDSUcsc0JBQXNCSixXQUQxQixDQUR3QyxDQUVBOztBQUV4Q0ksMEJBQW9CQyxpQkFBcEIsQ0FBc0NWLFdBQXRDOztBQUVBLGFBQU9TLG1CQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCaEIsS0FBakIiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHtcbiAgICB2YXIgY29udGVudCA9ICgoc3RhcnRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB8fCAoZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCkpID9cbiAgICAgICAgICB0aGlzLmNvbnRlbnQgOlxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnN1YnN0cihzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG4gIFxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG4gIFxuICB0cmltRnJvbVN0YXJ0UG9zaXRpb24oc3RhcnRQb3NpdGlvbikge1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5zdWJzdHIoc3RhcnRQb3NpdGlvbik7XG4gIH1cblxuICB0cmltVG9FbmRQb3NpdGlvbihlbmRQb3NpdGlvbikge1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5zdWJzdHIoMCwgZW5kUG9zaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIHdpdGhTdGFydFRyaW1tZWQodG9rZW4sIHN0YXJ0UG9zaXRpb24pIHtcbiAgICB2YXIgY2xvbmVkVG9rZW4gPSB0b2tlbi5jbG9uZSgpLFxuICAgICAgICB0b2tlbldpdGhTdGFydFRyaW1tZWQgPSBjbG9uZWRUb2tlbjsgIC8vL1xuXG4gICAgdG9rZW5XaXRoU3RhcnRUcmltbWVkLnRyaW1Gcm9tU3RhcnRQb3NpdGlvbihzdGFydFBvc2l0aW9uKTtcblxuICAgIHJldHVybiB0b2tlbldpdGhTdGFydFRyaW1tZWQ7XG4gIH1cblxuICBzdGF0aWMgd2l0aEVuZFRyaW1tZWQodG9rZW4sIGVuZFBvc2l0aW9uKSB7XG4gICAgdmFyIGNsb25lZFRva2VuID0gdG9rZW4uY2xvbmUoKSxcbiAgICAgICAgdG9rZW5XaXRoRW5kVHJpbW1lZCA9IGNsb25lZFRva2VuOyAgLy8vXG5cbiAgICB0b2tlbldpdGhFbmRUcmltbWVkLnRyaW1Ub0VuZFBvc2l0aW9uKGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiB0b2tlbldpdGhFbmRUcmltbWVkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG4iXX0=