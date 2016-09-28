'use strict';

var GallinaLine = require('./gallina/line'),
    GallinaContext = require('./gallina/context');

class GallinaLexer {
  static linesFromContent(content, gallinaContext) {
    gallinaContext = gallinaContext || new GallinaContext(0);  ///

    var contents = content.split(/\n/),
        multiLineCommentDepth = gallinaContext.getMultiLineCommentDepth(),
        lines = contents.map(function(content) {
          var line = GallinaLine.fromContent(content, multiLineCommentDepth);

          multiLineCommentDepth = line.getMultiLineCommentDepth();

          return line;
        });
    
    gallinaContext.setMultiLineCommentDepth(multiLineCommentDepth);

    return lines;
  }
}

module.exports = GallinaLexer;
