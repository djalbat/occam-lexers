"use strict";

import { Textarea } from "easy";

export default class ContentTextarea extends Textarea {
  getContent() {
    const value = this.getValue(),
          content = value; ///

    return content;
  }

  setContent(content) {
    const value = content;

    this.setValue(value);
  }

  parentContext() {
    const getContent = this.getContent.bind(this),
          setContent = this.setContent.bind(this);

    return ({
      getContent,
      setContent
    });
  }
}

Object.assign(ContentTextarea, {
  tagName: "textarea",
  defaultProperties: {
    className: "content",
    spellCheck: "false"
  }
});
