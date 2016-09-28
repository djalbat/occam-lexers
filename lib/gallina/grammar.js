'use strict';

var unicode_letter = '\\u{c0}-\\u{ff}\\u{180}-\\u{24f}\\u{391}-\\u{3ff}\\u{400}-\\u{4ff}\\u{2100}-\\u{214f}\\u{2070}-\\u{2079}\\u{2080}-\\u{2089}',
    unicode_id_part = '',
    ///
first_letter = '[a-zA-Z_' + unicode_letter + ']',
    subsequent_letter = '[a-zA-Z_0-9_’' + unicode_letter + unicode_id_part + ']';

var grammar = {

  keyword: new RegExp('^(_|as|at|cofix|else|end|exists|exists2|fix|for|forall|fun|if|IF|in|let|match|mod|Prop|return|Set|then|Type|using|where|with)$', 'u'),

  ident: new RegExp('^(' + first_letter + subsequent_letter + '*)$', 'u'),

  num: /^([0-9]+)$/,

  string: /^("[^"]*")$/

};

module.exports = grammar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2dyYW1tYXIuanMiXSwibmFtZXMiOlsidW5pY29kZV9sZXR0ZXIiLCJ1bmljb2RlX2lkX3BhcnQiLCJmaXJzdF9sZXR0ZXIiLCJzdWJzZXF1ZW50X2xldHRlciIsImdyYW1tYXIiLCJrZXl3b3JkIiwiUmVnRXhwIiwiaWRlbnQiLCJudW0iLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJQSw4SUFBSjtBQUFBLElBQ0lDLG9CQURKO0FBQUEsSUFDMEI7QUFDdEJDLDRCQUEwQkYsY0FBMUIsTUFGSjtBQUFBLElBR0lHLHNDQUFvQ0gsY0FBcEMsR0FBcURDLGVBQXJELE1BSEo7O0FBS0EsSUFBSUcsVUFBVTs7QUFFWkMsV0FBZ0IsSUFBSUMsTUFBSixtSUFBNkksR0FBN0ksQ0FGSjs7QUFJWkMsU0FBZ0IsSUFBSUQsTUFBSixRQUFnQkosWUFBaEIsR0FBK0JDLGlCQUEvQixVQUF1RCxHQUF2RCxDQUpKOztBQU1aSyxPQUFnQixZQU5KOztBQVFaQyxVQUFnQjs7QUFSSixDQUFkOztBQVlBQyxPQUFPQyxPQUFQLEdBQWlCUCxPQUFqQiIsImZpbGUiOiJncmFtbWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHVuaWNvZGVfbGV0dGVyID0gYFxcXFx1e2MwfS1cXFxcdXtmZn1cXFxcdXsxODB9LVxcXFx1ezI0Zn1cXFxcdXszOTF9LVxcXFx1ezNmZn1cXFxcdXs0MDB9LVxcXFx1ezRmZn1cXFxcdXsyMTAwfS1cXFxcdXsyMTRmfVxcXFx1ezIwNzB9LVxcXFx1ezIwNzl9XFxcXHV7MjA4MH0tXFxcXHV7MjA4OX1gLFxyXG4gICAgdW5pY29kZV9pZF9wYXJ0ID0gYGAsIC8vL1xyXG4gICAgZmlyc3RfbGV0dGVyID0gYFthLXpBLVpfJHt1bmljb2RlX2xldHRlcn1dYCxcclxuICAgIHN1YnNlcXVlbnRfbGV0dGVyID0gYFthLXpBLVpfMC05X+KAmSR7dW5pY29kZV9sZXR0ZXJ9JHt1bmljb2RlX2lkX3BhcnR9XWA7XHJcblxyXG52YXIgZ3JhbW1hciA9IHtcclxuXHJcbiAga2V5d29yZCAgICAgICA6IG5ldyBSZWdFeHAoYF4oX3xhc3xhdHxjb2ZpeHxlbHNlfGVuZHxleGlzdHN8ZXhpc3RzMnxmaXh8Zm9yfGZvcmFsbHxmdW58aWZ8SUZ8aW58bGV0fG1hdGNofG1vZHxQcm9wfHJldHVybnxTZXR8dGhlbnxUeXBlfHVzaW5nfHdoZXJlfHdpdGgpJGAsICd1JyksXHJcblxyXG4gIGlkZW50ICAgICAgICAgOiBuZXcgUmVnRXhwKGBeKCR7Zmlyc3RfbGV0dGVyfSR7c3Vic2VxdWVudF9sZXR0ZXJ9KikkYCwgJ3UnKSxcclxuXHJcbiAgbnVtICAgICAgICAgICA6IC9eKFswLTldKykkLyxcclxuXHJcbiAgc3RyaW5nICAgICAgICA6IC9eKFwiW15cIl0qXCIpJC9cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyYW1tYXI7XHJcbiJdfQ==