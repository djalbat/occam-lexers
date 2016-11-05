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
      var tokenLength = token.getLength();

      if (endPosition === tokenLength) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInVuZGVmaW5lZCIsInN1YnN0cmluZyIsImxlbmd0aCIsInN1YnN0ciIsInRva2VuIiwidG9rZW5MZW5ndGgiLCJnZXRMZW5ndGgiLCJjbG9uZWRUb2tlbiIsImNsb25lIiwidG9rZW5XaXRoU3RhcnRUcmltbWVkIiwidHJpbUZyb21FbmRQb3NpdGlvbiIsInRva2VuV2l0aEVuZFRyaW1tZWQiLCJ0cmltVG9TdGFydFBvc2l0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxLO0FBQ0osaUJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OytCQUVVQyxhLEVBQWVDLFcsRUFBYTtBQUNyQyxVQUFJSCxVQUFZRSxrQkFBa0JFLFNBQW5CLElBQWtDRCxnQkFBZ0JDLFNBQW5ELEdBQ1IsS0FBS0osT0FERyxHQUVOLEtBQUtBLE9BQUwsQ0FBYUssU0FBYixDQUF1QkgsYUFBdkIsRUFBc0NDLFdBQXRDLENBRlI7O0FBSUEsYUFBT0gsT0FBUDtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRCxPQUFMLENBQWFNLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7OzsrQkFFVU4sTyxFQUFTO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7d0NBRW1CRyxXLEVBQWE7QUFDL0IsV0FBS0gsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYU8sTUFBYixDQUFvQkosV0FBcEIsQ0FBZjtBQUNEOzs7d0NBRW1CRCxhLEVBQWU7QUFDakMsV0FBS0YsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYU8sTUFBYixDQUFvQixDQUFwQixFQUF1QkwsYUFBdkIsQ0FBZjtBQUNEOzs7MkNBRTZCTSxLLEVBQU9MLFcsRUFBYTtBQUNoRCxVQUFJTSxjQUFjRCxNQUFNRSxTQUFOLEVBQWxCOztBQUVBLFVBQUlQLGdCQUFnQk0sV0FBcEIsRUFBaUM7QUFDL0IsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUUsY0FBY0gsTUFBTUksS0FBTixFQUFsQjtBQUFBLFVBQ0lDLHdCQUF3QkYsV0FENUIsQ0FQZ0QsQ0FRTjs7QUFFMUNFLDRCQUFzQkMsbUJBQXRCLENBQTBDWCxXQUExQzs7QUFFQSxhQUFPVSxxQkFBUDtBQUNEOzs7MkNBRTZCTCxLLEVBQU9OLGEsRUFBZTtBQUNsRCxVQUFJQSxrQkFBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSVMsY0FBY0gsTUFBTUksS0FBTixFQUFsQjtBQUFBLFVBQ0lHLHNCQUFzQkosV0FEMUIsQ0FMa0QsQ0FNVjs7QUFFeENJLDBCQUFvQkMsbUJBQXBCLENBQXdDZCxhQUF4Qzs7QUFFQSxhQUFPYSxtQkFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQm5CLEtBQWpCIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gIH1cblxuICBnZXRDb250ZW50KHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgdmFyIGNvbnRlbnQgPSAoKHN0YXJ0UG9zaXRpb24gPT09IHVuZGVmaW5lZCkgfHwgKGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQpKSA/XG4gICAgICAgICAgdGhpcy5jb250ZW50IDpcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuICBcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuICBcbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuICBcbiAgdHJpbUZyb21FbmRQb3NpdGlvbihlbmRQb3NpdGlvbikge1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5zdWJzdHIoZW5kUG9zaXRpb24pO1xuICB9XG5cbiAgdHJpbVRvU3RhcnRQb3NpdGlvbihzdGFydFBvc2l0aW9uKSB7XG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnN1YnN0cigwLCBzdGFydFBvc2l0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyB0cmltbWVkRnJvbUVuZFBvc2l0aW9uKHRva2VuLCBlbmRQb3NpdGlvbikge1xuICAgIHZhciB0b2tlbkxlbmd0aCA9IHRva2VuLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGVuZFBvc2l0aW9uID09PSB0b2tlbkxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGNsb25lZFRva2VuID0gdG9rZW4uY2xvbmUoKSxcbiAgICAgICAgdG9rZW5XaXRoU3RhcnRUcmltbWVkID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRva2VuV2l0aFN0YXJ0VHJpbW1lZC50cmltRnJvbUVuZFBvc2l0aW9uKGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiB0b2tlbldpdGhTdGFydFRyaW1tZWQ7XG4gIH1cblxuICBzdGF0aWMgdHJpbW1lZFRvU3RhcnRQb3NpdGlvbih0b2tlbiwgc3RhcnRQb3NpdGlvbikge1xuICAgIGlmIChzdGFydFBvc2l0aW9uID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY2xvbmVkVG9rZW4gPSB0b2tlbi5jbG9uZSgpLFxuICAgICAgICB0b2tlbldpdGhFbmRUcmltbWVkID0gY2xvbmVkVG9rZW47ICAvLy9cblxuICAgIHRva2VuV2l0aEVuZFRyaW1tZWQudHJpbVRvU3RhcnRQb3NpdGlvbihzdGFydFBvc2l0aW9uKTtcblxuICAgIHJldHVybiB0b2tlbldpdGhFbmRUcmltbWVkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG4iXX0=