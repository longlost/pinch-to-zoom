
/**
  * `pinch-to-zoom`
  * 
  *
  *   A simple wrapper for GoogleChromeLabs/pinch-zoom element
  *   to play nicely within other custom element shadow DOM.
  *
  *
  *   Docs at https://github.com/GoogleChromeLabs/pinch-zoom
  *
  *
  *
  * @customElement
  * @polymer
  * @demo demo/index.html
  *
  *
  **/

import {AppElement, html} from '@longlost/app-core/app-element.js';
import {consumeEvent}     from '@longlost/app-core/utils.js';
import 'pinch-zoom-element/lib/styles.css?name=pinch-zoom-element';
import 'pinch-zoom-element';


class PinchToZoom extends AppElement {

  static get is() { return 'pinch-to-zoom'; }

  static get template() {

    return html`
      <style include="pinch-zoom-element">

        :host {
          display: block;
        }

        pinch-zoom,
        div {
          height: 100%;
        }

      </style>


      <pinch-zoom id="pz" 
                  on-change="__changeHandler">
        <div>
          <slot></slot>
        </div>
      </pinch-zoom>

    `;
  }


  __changeHandler(event) {

    consumeEvent(event);

    this.fire('pinch-to-zoom-change', this.getTransform());
  }


  getTransform() {

    return {
      scale: this.$.pz.scale,
      x:     this.$.pz.x,
      y:     this.$.pz.y
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
