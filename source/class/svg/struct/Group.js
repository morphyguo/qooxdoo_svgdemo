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
qx.Class.define("svg.struct.Group",
{
  extend : svg.core.Element,
  include : [ svg.core.dom.MLocatable,
              svg.paint.MFillProperties,
              svg.paint.MStrokeProperties,
              svg.coords.MTransform ],

  construct : function() {
    this.base(arguments, "g");
  },
  events:{
    /** Fired if a touch at the screen is started. */
    touchstart : "qx.event.type.Touch",

    /** Fired if a touch at the screen has ended. */
    touchend : "qx.event.type.Touch",

    /** Fired during a touch at the screen. */
    touchmove : "qx.event.type.Touch",

    /** Fired if a touch at the screen is canceled. */
    touchcancel : "qx.event.type.Touch"
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
    display : {
      nullable : true,
      init     : null,
      check    : ["inline", "none", "inherit"],
      apply    : "__applyDisplay",
      event    : "changeDisplay"
    },
    opacity:{
      nullable : true,
      init     : null,
      check    : "Number",
      apply    : "__applyOpacity",
      event    : "changeOpacity"
    },
    cursor:{
      nullable : true,
      init     : null,
      check    : "String",
      apply    : "__applyCursor",
      event    : "changeCursor"
    },
    pointerEvents:{
      nullable : true,
      init     : null,
      check    : "String",
      apply    : "__applyPointerEvents",
      event    : "changePointerEvents"
    },
    uid:{
      nullable : true,
      init     : null,
      check    : "String",
      apply    : "__applyUid",
      event    : "changeUid"
    }
  },
  
  members :
  {
    //applies display
    __applyDisplay : function(value, old) {
      if (null == value) {
        this.removeAttribute("display");
      } else {
        this.setAttribute("display", value);
      }
    },
    __applyOpacity:function(value, old){
      if (null == value) {
        this.removeAttribute("opacity");
      } else {
        this.setAttribute("opacity", value);
      }
    },
    __applyCursor:function(value,old){
      if (null == value) {
        this.removeAttribute("cursor");
      } else {
        this.setAttribute("cursor", value);
      }
    },
    __applyPointerEvents: function(value,old){
      if (null == value) {
        this.removeAttribute("pointer-events");
      } else {
        this.setAttribute("pointer-events", value);
      }
    },
    __applyUid: function(value,old){
      if (null == value) {
        this.removeAttribute("id");
      } else {
        this.setAttribute("id", value);
      }
    }
  }
});