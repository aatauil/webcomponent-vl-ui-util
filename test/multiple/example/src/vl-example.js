import { VlElement, define } from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/@govflanders/vl-ui-util/dist/js/util.min.js';
import '/lib/external-library.js';
import 'https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-polyfill/dist/index.js';
import '/node_modules/vl-ui-button/dist/vl-button.js';
import { analytics } from '/src/non-vl.js';

export class VlExample extends VlElement(HTMLElement) {
    constructor() {
        super(`
            <style>
        		@import '/src/style.css';
        		@import "/src/style.css";
        		@import '/node_modules/vl-ui-dependency/dist/style.css';
        		@import "/node_modules/vl-ui-dependency/dist/style.css";
            </style>
            <div>
        		example
            </div>
        `);
    }

}