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
      var clonedToken = token.clone(),
          tokenWithStartTrimmed = clonedToken; ///

      tokenWithStartTrimmed.trimFromEndPosition(endPosition);

      return tokenWithStartTrimmed;
    }
  }, {
    key: 'trimmedToStartPosition',
    value: function trimmedToStartPosition(token, startPosition) {
      var clonedToken = token.clone(),
          tokenWithEndTrimmed = clonedToken; ///

      tokenWithEndTrimmed.trimToStartPosition(startPosition);

      return tokenWithEndTrimmed;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInVuZGVmaW5lZCIsInN1YnN0ciIsImxlbmd0aCIsInRva2VuIiwiY2xvbmVkVG9rZW4iLCJjbG9uZSIsInRva2VuV2l0aFN0YXJ0VHJpbW1lZCIsInRyaW1Gcm9tRW5kUG9zaXRpb24iLCJ0b2tlbldpdGhFbmRUcmltbWVkIiwidHJpbVRvU3RhcnRQb3NpdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSztBQUNKLGlCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQjtBQUFBOztBQUN6QixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzsrQkFFVUMsYSxFQUFlQyxXLEVBQWE7QUFDckMsVUFBSUgsVUFBWUUsa0JBQWtCRSxTQUFuQixJQUFrQ0QsZ0JBQWdCQyxTQUFuRCxHQUNSLEtBQUtKLE9BREcsR0FFTixLQUFLQSxPQUFMLENBQWFLLE1BQWIsQ0FBb0JILGFBQXBCLEVBQW1DQyxXQUFuQyxDQUZSOztBQUlBLGFBQU9ILE9BQVA7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0QsT0FBTCxDQUFhTSxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7K0JBRVVOLE8sRUFBUztBQUNsQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7O3dDQUVtQkcsVyxFQUFhO0FBQy9CLFdBQUtILE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFLLE1BQWIsQ0FBb0JGLFdBQXBCLENBQWY7QUFDRDs7O3dDQUVtQkQsYSxFQUFlO0FBQ2pDLFdBQUtGLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFLLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUJILGFBQXZCLENBQWY7QUFDRDs7OzJDQUU2QkssSyxFQUFPSixXLEVBQWE7QUFDaEQsVUFBSUssY0FBY0QsTUFBTUUsS0FBTixFQUFsQjtBQUFBLFVBQ0lDLHdCQUF3QkYsV0FENUIsQ0FEZ0QsQ0FFTjs7QUFFMUNFLDRCQUFzQkMsbUJBQXRCLENBQTBDUixXQUExQzs7QUFFQSxhQUFPTyxxQkFBUDtBQUNEOzs7MkNBRTZCSCxLLEVBQU9MLGEsRUFBZTtBQUNsRCxVQUFJTSxjQUFjRCxNQUFNRSxLQUFOLEVBQWxCO0FBQUEsVUFDSUcsc0JBQXNCSixXQUQxQixDQURrRCxDQUVWOztBQUV4Q0ksMEJBQW9CQyxtQkFBcEIsQ0FBd0NYLGFBQXhDOztBQUVBLGFBQU9VLG1CQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCaEIsS0FBakIiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHtcbiAgICB2YXIgY29udGVudCA9ICgoc3RhcnRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB8fCAoZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCkpID9cbiAgICAgICAgICB0aGlzLmNvbnRlbnQgOlxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnN1YnN0cihzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG4gIFxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG4gIFxuICB0cmltRnJvbUVuZFBvc2l0aW9uKGVuZFBvc2l0aW9uKSB7XG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnN1YnN0cihlbmRQb3NpdGlvbik7XG4gIH1cblxuICB0cmltVG9TdGFydFBvc2l0aW9uKHN0YXJ0UG9zaXRpb24pIHtcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuc3Vic3RyKDAsIHN0YXJ0UG9zaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIHRyaW1tZWRGcm9tRW5kUG9zaXRpb24odG9rZW4sIGVuZFBvc2l0aW9uKSB7XG4gICAgdmFyIGNsb25lZFRva2VuID0gdG9rZW4uY2xvbmUoKSxcbiAgICAgICAgdG9rZW5XaXRoU3RhcnRUcmltbWVkID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRva2VuV2l0aFN0YXJ0VHJpbW1lZC50cmltRnJvbUVuZFBvc2l0aW9uKGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiB0b2tlbldpdGhTdGFydFRyaW1tZWQ7XG4gIH1cblxuICBzdGF0aWMgdHJpbW1lZFRvU3RhcnRQb3NpdGlvbih0b2tlbiwgc3RhcnRQb3NpdGlvbikge1xuICAgIHZhciBjbG9uZWRUb2tlbiA9IHRva2VuLmNsb25lKCksXG4gICAgICAgIHRva2VuV2l0aEVuZFRyaW1tZWQgPSBjbG9uZWRUb2tlbjsgIC8vL1xuXG4gICAgdG9rZW5XaXRoRW5kVHJpbW1lZC50cmltVG9TdGFydFBvc2l0aW9uKHN0YXJ0UG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHRva2VuV2l0aEVuZFRyaW1tZWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==