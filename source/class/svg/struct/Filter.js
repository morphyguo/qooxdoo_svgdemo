/* ************************************************************************

   Copyright:
     2010-2011  Marc Puts

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Marc Puts (marcputs)

************************************************************************ */

/**
 * Add filling properties to elements that can be filled (which means painting
 * the interior of the object).
 *
 * With SVG, you can paint (i.e., fill or stroke) with:
 * <ul>
 *   <li>a single color</li>
 *   <li>a solid color with opacity</li>
 *   <li>a gradient (linear or radial)</li>
 *   <li>a pattern (vector or image, possibly tiled)</li>
 *   <li>custom paints available via extensibility</li>
 * </ul>
 *
 * SVG uses the general notion of a paint server. Paint servers are specified
 * using a URI reference on a 'fill' property. Gradients, patterns
 * and solid colors are just specific types of paint servers.
 *
 * More info:
 * <ul>
 *   <li>https://www.w3.org/TR/SVG/pservers.html#LinearGradientElement</li>
 * </ul>
 */
qx.Class.define("svg.struct.Filter", {
  extend: svg.core.Element,

  construct: function() {
    this.base(arguments, "filter");
  },

  properties: {
    x : {
      nullable: true,
      init: null,
      apply: "__applyX",
      check: "String",
      event: "changeX"
    },
    y : {
      nullable: true,
      init: null,
      apply: "__applyY",
      check: "String",
      event: "changeY"
    },
    width : {
      nullable: true,
      init: null,
      apply: "__applyWidth",
      check: "String",
      event: "changeWidth"
    },
    height : {
      nullable: true,
      init: null,
      apply: "__applyHeight",
      check: "String",
      event: "changeHeight"
    }
  },

  members: {
    __applyX: function(value, old) {
      if (null == value) {
        this.removeAttribute("x");
      } else {
        this.setAttribute("x", value);
      }
    },
  
    //applies y
    __applyY: function(value, old) {
      if (null == value) {
        this.removeAttribute("y");
      } else {
        this.setAttribute("y", value);
      }
    },
  
    //applies width
    __applyWidth: function(value, old) {
      if (null == value) {
        this.removeAttribute("width");
      } else {
        this.setAttribute("width", value);
      }
    },
  
    //applies height
    __applyHeight: function(value, old) {
      if (null == value) {
        this.removeAttribute("height");
      } else {
        this.setAttribute("height", value);
      }
    }
  }
});