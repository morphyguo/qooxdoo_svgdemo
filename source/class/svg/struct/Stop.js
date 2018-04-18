/* ************************************************************************

   Copyright:
     2010-2011  Marc Puts

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Marc Puts (marcputs)
     * Martijn Evers (mevers)

************************************************************************ */

/**
 * A container element for grouping together related elements, somewhat
 * similar to {@link Defs}.
 *
 * The differences between groups and defs are:
 * <ul>
 *   <li>The group itself is a rendered element (unlike {@link Defs}).</li>
 *   <li>It can be reused by a {@link Use} element.</li>
 * </ul>
 *
 * Grouping constructs provides information about document structure and semantics.
 *
 * More info:
 * <ul>
 *   <li>http://www.w3.org/TR/SVG/struct.html#Groups</li>
 * </ul>
 *
 */
qx.Class.define("svg.struct.Stop",
{
  extend : svg.core.Element,
  include : [ svg.core.dom.MLocatable,
              svg.paint.MFillProperties,
              svg.paint.MStrokeProperties,
              svg.coords.MTransform ],

  construct : function() {
    this.base(arguments, "stop");
  },
  
  properties :
  {
    /**
     * Whether or not the group and its children should be rendered.
     * 
     * Possible values:
     * <ul>
     *   <li><em>inline</em>: the group is rendered</li>
     *   <li><em>none</em>: the group is not rendered</li>
     * </ul>
     * 
     * More info:
     * <ul>
     *   <li>http://www.w3.org/TR/SVG/painting.html#DisplayProperty</li>
     * </ul>
     */
    offset: {
      nullable: true,
      init: null,
      apply: "_applyOffset",
      check: "Number",
      event: "changeOffset"
    },
    StopColor:{
      nullable: true,
      init: null,
      apply: "_applyStopColor",
      check: "String",
      event: "changeStopColor"
    }
  },
  
  members :
  {
    //applies id
    _applyOffset: function(value, old) {
      if (null == value) {
        this.removeAttribute("offset");
      } else {
        this.setAttribute("offset", value);
      }
    },
    _applyStopColor: function(value, old) {
      if (null == value) {
        this.removeAttribute("stop-color");
      } else {
        this.setAttribute("stop-color", value);
      }
    }
  }
});