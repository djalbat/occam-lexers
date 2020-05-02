"use strict";

import "juxtapose";

import { Body } from "easy";

import BNFExampleView from "./example/bnf/view";
import BasicExampleView from "./example/basic/view";
import FlorenceExampleView from "./example/florence/view";

let ExampleView;

const body = new Body(),
      example = window.location.search.substring(1);

switch (example) {
  case "bnf" : ExampleView = BNFExampleView; break;
  case "basic" : ExampleView = BasicExampleView; break;
  case "florence" : ExampleView = FlorenceExampleView; break;
}

const exampleView =

  <ExampleView />

;

exampleView.appendTo(body);
