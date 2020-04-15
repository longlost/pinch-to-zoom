
/**
  * `pinch-to-zoom`
  * 
  *
  *		A simple wrapper for GoogleChromeLabs/pinch-zoom element
  * 	to play nicely within other custom element shadow DOM.
  *
  *
  *		Docs at https://github.com/GoogleChromeLabs/pinch-zoom
  *
  *
  *
  * @customElement
  * @polymer
  * @demo demo/index.html
  *
  *
  **/

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {htmlLiteral} 					from '@polymer/polymer/lib/utils/html-tag.js';
// Disable webpack config 'style-loader' so 
// these styles are not put in the document head.
import styles from '!css-loader!pinch-zoom-element/lib/styles.css';
import 'pinch-zoom-element';


class PinchToZoom extends PolymerElement {
  static get is() { return 'pinch-to-zoom'; }

  static get template() {

    return html`
      <style>

      	:host {
      		display: block;
      	}

        ${this.stylePartial}

        pinch-zoom,
        div {
        	height: 100%;
        }

      </style>


      <pinch-zoom id="pz">
      	<div>
      		<slot></slot>
      	</div>
      </pinch-zoom>

    `;
  }


  static get stylePartial() {
    return htmlLiteral([styles.toString()]);
  }


  getTransform() {
  	return {
  		scale: this.$.pz.scale,
  		x: 		 this.$.pz.x,
  		y: 		 this.$.pz.y
  	};
  }


  setTransform(options) {
  	return this.$.pz.setTransform(options);
  }


  scaleTo(scale, options) {
  	return this.$.pz.scaleTo(scale, options);
  }

}

window.customElements.define(PinchToZoom.is, PinchToZoom);
