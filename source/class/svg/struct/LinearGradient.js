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
qx.Class.define("svg.struct.LinearGradient", {
  extend: svg.core.Element,

  construct: function() {
    this.base(arguments, "linearGradient");
  },

  properties: {
    x1: {
      nullable: true,
      init: null,
      apply: "__applyX1",
      check: "String",
      event: "changeX1"
    },
    y1: {
      nullable: true,
      init: null,
      apply: "__applyY1",
      check: "String",
      event: "changeY1"
    },
    x2: {
      nullable: true,
      init: null,
      apply: "__applyX2",
      check: "String",
      event: "changeX2"
    },
    y2: {
      nullable: true,
      init: null,
      apply: "__applyY2",
      check: "String",
      event: "changeY2"
    }
  },

  members: {
    __applyX1: function(value, old) {
      if (null == value) {
        this.removeAttribute("x1");
      } else {
        this.setAttribute("x1", value);
      }
    },
    __applyY1: function(value, old) {
      if (null == value) {
        this.removeAttribute("y1");
      } else {
        this.setAttribute("y1", value);
      }
    },
    __applyX2: function(value, old) {
      if (null == value) {
        this.removeAttribute("x2");
      } else {
        this.setAttribute("x2", value);
      }
    },
    __applyY2: function(value, old) {
      if (null == value) {
        this.removeAttribute("y2");
      } else {
        this.setAttribute("y2", value);
      }
    }
  }
});