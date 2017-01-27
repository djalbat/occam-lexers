'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {
  function Token(content, line) {
    var updateHTML = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, Token);

    this.content = content;
    this.line = line;

    this.html = undefined; ///

    if (updateHTML) {
      this.updateHTML();
    }
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
    key: 'getHTML',
    value: function getHTML() {
      return this.html;
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

      this.updateHTML();
    }
  }, {
    key: 'setLine',
    value: function setLine(line) {
      this.line = line;
    }
  }, {
    key: 'setHTML',
    value: function setHTML(html) {
      this.html = html;
    }
  }, {
    key: 'getTrimmedContent',
    value: function getTrimmedContent(startPosition, endPosition) {
      var trimmedContent = this.content.substring(startPosition, endPosition);

      return trimmedContent;
    }
  }, {
    key: 'trimContentToPosition',
    value: function trimContentToPosition(position) {
      this.content = this.content.substr(position);

      this.updateHTML();
    }
  }, {
    key: 'trimContentFromPosition',
    value: function trimContentFromPosition(position) {
      this.content = this.content.substr(0, position);

      this.updateHTML();
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(token) {
      var tokens = this.line.getTokens(),
          index = tokens.indexOf(this);

      tokens.splice(index, 1, token);
    }
  }, {
    key: 'updateHTML',
    value: function updateHTML() {
      var html = this.content; ///

      this.html = Token.sanitiseHTML(html);
    }
  }], [{
    key: 'trimmedToPosition',
    value: function trimmedToPosition(token, position) {
      var tokenTrimmedToPosition = null,
          tokenLength = token.getLength();

      if (position !== tokenLength) {
        tokenTrimmedToPosition = token.clone(); ///

        tokenTrimmedToPosition.trimContentToPosition(position);
      }

      return tokenTrimmedToPosition;
    }
  }, {
    key: 'trimmedFromPosition',
    value: function trimmedFromPosition(token, position) {
      var tokenTrimmedFromPosition = null;

      if (position !== 0) {
        tokenTrimmedFromPosition = token.clone(); ///

        tokenTrimmedFromPosition.trimContentFromPosition(position); ///
      }

      return tokenTrimmedFromPosition;
    }
  }, {
    key: 'sanitiseHTML',
    value: function sanitiseHTML(html) {
      var sanitisedHTML = html.replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

      return sanitisedHTML;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsInVwZGF0ZUhUTUwiLCJodG1sIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwidHJpbW1lZENvbnRlbnQiLCJzdWJzdHJpbmciLCJwb3NpdGlvbiIsInN1YnN0ciIsInRva2VuIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwic2FuaXRpc2VIVE1MIiwidG9rZW5UcmltbWVkVG9Qb3NpdGlvbiIsInRva2VuTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiY2xvbmUiLCJ0cmltQ29udGVudFRvUG9zaXRpb24iLCJ0b2tlblRyaW1tZWRGcm9tUG9zaXRpb24iLCJ0cmltQ29udGVudEZyb21Qb3NpdGlvbiIsInNhbml0aXNlZEhUTUwiLCJyZXBsYWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxLO0FBQ0osaUJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQThDO0FBQUEsUUFBbkJDLFVBQW1CLHVFQUFOLElBQU07O0FBQUE7O0FBQzVDLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxTQUFLRSxJQUFMLEdBQVlDLFNBQVosQ0FKNEMsQ0FJcEI7O0FBRXhCLFFBQUlGLFVBQUosRUFBZ0I7QUFDZCxXQUFLQSxVQUFMO0FBQ0Q7QUFDRjs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRSxJQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0gsT0FBTCxDQUFhSyxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7K0JBRVVMLE8sRUFBUztBQUNsQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7O0FBRUEsV0FBS0UsVUFBTDtBQUNEOzs7NEJBRU9ELEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7NEJBRU9FLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7c0NBRWlCRyxhLEVBQWVDLFcsRUFBYTtBQUM1QyxVQUFJQyxpQkFBaUIsS0FBS1IsT0FBTCxDQUFhUyxTQUFiLENBQXVCSCxhQUF2QixFQUFzQ0MsV0FBdEMsQ0FBckI7O0FBRUEsYUFBT0MsY0FBUDtBQUNEOzs7MENBRXFCRSxRLEVBQVU7QUFDOUIsV0FBS1YsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYVcsTUFBYixDQUFvQkQsUUFBcEIsQ0FBZjs7QUFFQSxXQUFLUixVQUFMO0FBQ0Q7Ozs0Q0FFdUJRLFEsRUFBVTtBQUNoQyxXQUFLVixPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhVyxNQUFiLENBQW9CLENBQXBCLEVBQXVCRCxRQUF2QixDQUFmOztBQUVBLFdBQUtSLFVBQUw7QUFDRDs7O2dDQUVXVSxLLEVBQU87QUFDakIsVUFBSUMsU0FBUyxLQUFLWixJQUFMLENBQVVhLFNBQVYsRUFBYjtBQUFBLFVBQ0lDLFFBQVFGLE9BQU9HLE9BQVAsQ0FBZSxJQUFmLENBRFo7O0FBR0FILGFBQU9JLE1BQVAsQ0FBY0YsS0FBZCxFQUFxQixDQUFyQixFQUF3QkgsS0FBeEI7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSVQsT0FBTyxLQUFLSCxPQUFoQixDQURXLENBQ2U7O0FBRTFCLFdBQUtHLElBQUwsR0FBWUosTUFBTW1CLFlBQU4sQ0FBbUJmLElBQW5CLENBQVo7QUFDRDs7O3NDQUV3QlMsSyxFQUFPRixRLEVBQVU7QUFDeEMsVUFBSVMseUJBQXlCLElBQTdCO0FBQUEsVUFDSUMsY0FBY1IsTUFBTVMsU0FBTixFQURsQjs7QUFHQSxVQUFJWCxhQUFhVSxXQUFqQixFQUE4QjtBQUM1QkQsaUNBQXlCUCxNQUFNVSxLQUFOLEVBQXpCLENBRDRCLENBQ1k7O0FBRXhDSCwrQkFBdUJJLHFCQUF2QixDQUE2Q2IsUUFBN0M7QUFDRDs7QUFFRCxhQUFPUyxzQkFBUDtBQUNEOzs7d0NBRTBCUCxLLEVBQU9GLFEsRUFBVTtBQUMxQyxVQUFJYywyQkFBMkIsSUFBL0I7O0FBRUEsVUFBSWQsYUFBYSxDQUFqQixFQUFvQjtBQUNsQmMsbUNBQTJCWixNQUFNVSxLQUFOLEVBQTNCLENBRGtCLENBQ3dCOztBQUUxQ0UsaUNBQXlCQyx1QkFBekIsQ0FBaURmLFFBQWpELEVBSGtCLENBRzBDO0FBQzdEOztBQUVELGFBQU9jLHdCQUFQO0FBQ0Q7OztpQ0FFbUJyQixJLEVBQU07QUFDeEIsVUFBSXVCLGdCQUFnQnZCLEtBQUt3QixPQUFMLENBQWEsR0FBYixFQUFpQixPQUFqQixFQUEwQkEsT0FBMUIsQ0FBa0MsR0FBbEMsRUFBdUMsTUFBdkMsRUFBK0NBLE9BQS9DLENBQXVELEdBQXZELEVBQTRELE1BQTVELENBQXBCOztBQUVBLGFBQU9ELGFBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUI5QixLQUFqQiIsImZpbGUiOiJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB1cGRhdGVIVE1MID0gdHJ1ZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcblxuICAgIHRoaXMuaHRtbCA9IHVuZGVmaW5lZDsgIC8vL1xuXG4gICAgaWYgKHVwZGF0ZUhUTUwpIHtcbiAgICAgIHRoaXMudXBkYXRlSFRNTCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcblxuICAgIHRoaXMudXBkYXRlSFRNTCgpO1xuICB9XG5cbiAgc2V0TGluZShsaW5lKSB7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgfVxuXG4gIHNldEhUTUwoaHRtbCkge1xuICAgIHRoaXMuaHRtbCA9IGh0bWw7XG4gIH1cblxuICBnZXRUcmltbWVkQ29udGVudChzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikge1xuICAgIHZhciB0cmltbWVkQ29udGVudCA9IHRoaXMuY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHRyaW1tZWRDb250ZW50O1xuICB9XG5cbiAgdHJpbUNvbnRlbnRUb1Bvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnN1YnN0cihwb3NpdGlvbik7XG5cbiAgICB0aGlzLnVwZGF0ZUhUTUwoKTtcbiAgfVxuXG4gIHRyaW1Db250ZW50RnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnN1YnN0cigwLCBwb3NpdGlvbik7XG5cbiAgICB0aGlzLnVwZGF0ZUhUTUwoKTtcbiAgfVxuXG4gIHJlcGxhY2VXaXRoKHRva2VuKSB7XG4gICAgdmFyIHRva2VucyA9IHRoaXMubGluZS5nZXRUb2tlbnMoKSxcbiAgICAgICAgaW5kZXggPSB0b2tlbnMuaW5kZXhPZih0aGlzKTtcblxuICAgIHRva2Vucy5zcGxpY2UoaW5kZXgsIDEsIHRva2VuKTtcbiAgfVxuXG4gIHVwZGF0ZUhUTUwoKSB7XG4gICAgdmFyIGh0bWwgPSB0aGlzLmNvbnRlbnQ7ICAvLy9cblxuICAgIHRoaXMuaHRtbCA9IFRva2VuLnNhbml0aXNlSFRNTChodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyB0cmltbWVkVG9Qb3NpdGlvbih0b2tlbiwgcG9zaXRpb24pIHtcbiAgICB2YXIgdG9rZW5UcmltbWVkVG9Qb3NpdGlvbiA9IG51bGwsXG4gICAgICAgIHRva2VuTGVuZ3RoID0gdG9rZW4uZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAocG9zaXRpb24gIT09IHRva2VuTGVuZ3RoKSB7XG4gICAgICB0b2tlblRyaW1tZWRUb1Bvc2l0aW9uID0gdG9rZW4uY2xvbmUoKTsgLy8vXG5cbiAgICAgIHRva2VuVHJpbW1lZFRvUG9zaXRpb24udHJpbUNvbnRlbnRUb1Bvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5UcmltbWVkVG9Qb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyB0cmltbWVkRnJvbVBvc2l0aW9uKHRva2VuLCBwb3NpdGlvbikge1xuICAgIHZhciB0b2tlblRyaW1tZWRGcm9tUG9zaXRpb24gPSBudWxsO1xuXG4gICAgaWYgKHBvc2l0aW9uICE9PSAwKSB7XG4gICAgICB0b2tlblRyaW1tZWRGcm9tUG9zaXRpb24gPSB0b2tlbi5jbG9uZSgpOyAvLy9cblxuICAgICAgdG9rZW5UcmltbWVkRnJvbVBvc2l0aW9uLnRyaW1Db250ZW50RnJvbVBvc2l0aW9uKHBvc2l0aW9uKTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuVHJpbW1lZEZyb21Qb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBzYW5pdGlzZUhUTUwoaHRtbCkge1xuICAgIHZhciBzYW5pdGlzZWRIVE1MID0gaHRtbC5yZXBsYWNlKC8mLywnJmFtcDsnKS5yZXBsYWNlKC88LywgJyZsdDsnKS5yZXBsYWNlKC8+LywgJyZndDsnKTtcblxuICAgIHJldHVybiBzYW5pdGlzZWRIVE1MO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG4iXX0=