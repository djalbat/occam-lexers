"use strict";

import { Element } from "easy";
import { ColumnsDiv } from "easy-layout";

import Heading from "./heading";
import Paragraph from "./paragraph";
import ColumnDiv from "./div/column";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import TokensTextarea from "./textarea/tokens";
import EntriesTextarea from "./textarea/entries";
import ContentTextarea from "./textarea/content";
import VerticalSplitterDiv from "./div/splitter/vertical";

export default class View extends Element {
  getTokens() {
    const Lexer = this.getLexer(),
          entries = this.getEntries(),
          content = this.getContent(),
          lexer = Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);

    return tokens;
  }

  keyUpHandler() {
    try {
      const tokens = this.getTokens();

      this.setTokens(tokens);
    } catch (error) {
      console.log(error);

      this.clearTokens();
    }
  }

  childElements(properties) {
    const title = this.getTitle(),
          keyUpHandler = this.keyUpHandler.bind(this);

    return ([

      <Heading>
        {title}
      </Heading>,
      <ColumnsDiv>
        <SizeableDiv>
          <SubHeading>
            Entries
          </SubHeading>
          <EntriesTextarea onKeyUp={keyUpHandler} />
          <SubHeading>
            Content
          </SubHeading>
          <ContentTextarea onKeyUp={keyUpHandler} />
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <SubHeading>
            Tokens
          </SubHeading>
          <TokensTextarea />
        </ColumnDiv>
      </ColumnsDiv>,
      <Paragraph>
        <a href="index.html">...back</a>
      </Paragraph>

    ]);
  }

  initialise(properties) {
    this.assignContext();

    const Lexer = this.getLexer(),
          initialContent = this.getInitialContent(),
          content = initialContent, ///
          { entries } = Lexer;

    this.setContent(content);
    this.setEntries(entries);

    this.keyUpHandler();
  }

  static tagName = "div";

  static fromClass(Class, properties) {
    const exampleView = Element.fromClass(Class, properties);

    exampleView.initialise(properties);

    return exampleView
  }
}
