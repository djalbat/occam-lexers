'use strict';

function sanitiseContent(content) {
  const sanitisedContent = (content !== null) ?
                              content.replace(/&/,'&amp;').replace(/</, '&lt;').replace(/>/, '&gt;') :
                                null;

  return sanitisedContent;
}

module.exports = {
  sanitiseContent: sanitiseContent
};
