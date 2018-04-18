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
qx.Class.define("svg.struct.FeComposite", {
  extend: svg.core.Element,

  construct: function() {
    this.base(arguments, "feComposite");
  },

  properties: {
    inCom:{
      nullable: true,
      init: null,
      apply: "__applyInCom",
      check: "String",
      event: "changeInCom"
    },
    in2 : {
      nullable: true,
      init: null,
      apply: "__applyIn2",
      check: "String",
      event: "changeIn2"
    },
    operator : {
      nullable: true,
      init: null,
      apply: "__applyOperator",
      check: "String",
      event: "changeOperator"
    },
    result : {
      nullable: true,
      init: null,
      apply: "__applyResult",
      check: "String",
      event: "changeResult"
    }
  },

  members: {
    __applyInCom:function(value, old){
      if (null == value) {
        this.removeAttribute("in");
      } else {
        this.setAttribute("in", value);
      }
    },
    __applyIn2: function(value, old) {
      if (null == value) {
        this.removeAttribute("in2");
      } else {
        this.setAttribute("in2", value);
      }
    },
    __applyOperator: function(value, old) {
      if (null == value) {
        this.removeAttribute("operator");
      } else {
        this.setAttribute("operator", value);
      }
    },
    __applyResult: function(value, old) {
      if (null == value) {
        this.removeAttribute("result");
      } else {
        this.setAttribute("result", value);
      }
    }
  }
});