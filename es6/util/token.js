'use strict';

class tokenUtil {
  static sanitiseContent(content) {
    const sanitisedContent = content.replace(/&/,'&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

    return sanitisedContent;
  }
}

module.exports = tokenUtil;
