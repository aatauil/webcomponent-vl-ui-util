/* eslint-disable no-unused-vars */
import {vlElement, define} from 'vl-ui-core';
import '@govflanders/vl-ui-util/dist/js/util.js';
import 'vl-ui-example/lib/external-library.js';
import 'https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-polyfill/dist/index.js';
import 'vl-ui-button';
import {analytics} from 'vl-ui-example/src/non-vl.js';
import {VlExampleOther} from 'vl-ui-example/dist/vl-example-other.src.js';
import 'vl-ui-example/dist/vl-example-other.src.js';

export class VlExample extends vlElement(HTMLElement) {
  constructor() {
    super(`
      <style>
.example{color: black;}
.example{color: black;}
.dependency{color: red;}
.dependency{color: red;}
      </style>
      <div>
        example
      </div>
    `);
  }

  get style() {
    return {
      style: '/node_modules/vl-ui-example/dist/style.css',
    };
  }
}

