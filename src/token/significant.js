"use strict";

import Token from "../token";

const significant = true;

export default class SignificantToken extends Token {
  static match(Class, content, ...remainingArguments) {
    if (content === undefined) {
      content = Class;  ///
      Class = SignificantToken; ///
    }

    const significantToken = Token.match(Class, content, significant, ...remainingArguments);

    return significantToken;
  }

  static fromContent(Class, content, ...remainingArguments) {
    if (content === undefined) {
      content = Class;  ///
      Class = SignificantToken; ///
    }

    const significantToken = Token.fromContent(Class, content, significant, ...remainingArguments);

    return significantToken;
  }

  static fromContentAndType(Class, content, type, ...remainingArguments) {
    if (type === undefined) {
      type = content; ///
      content = Class;  ///
      Class = SignificantToken; ///
    }

    const significantToken = Token.fromContentAndType(Class, content, type, significant, ...remainingArguments);

    return significantToken;
  }
}
