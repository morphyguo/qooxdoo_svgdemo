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
 * Place text on the image.
 * 
 * More info:
 * <ul>
 *   <li>http://www.w3.org/TR/SVG/text.html#TSpanElement</li>
 * </ul>
 */
qx.Class.define("svg.text.Tspan", {
  
  extend: svg.core.Element,
  
  include : [ svg.core.MTextContainer,
              svg.text.MTextLayout,
              svg.text.MTextAlignment,
              svg.text.MFontProperties,
              svg.text.MTextSpacing,
              svg.text.MTextDecoration ],
  
  construct : function(value) {
    this.base(arguments, "tspan");

    this.addListener("changeValue", this.__iconFont, this)

    if (value) {
      this.setValue(value);
    };
  },
  
  properties :
  {
    /**
     * X-coordinate of the text.
     * 
     * More info:
     * <ul>
     *   <li>http://www.w3.org/TR/SVG/text.html#TextElementXAttribute</li>
     * </ul>
     */
    x : {
      nullable: true,
      init: null,
      check: "svg.core.Types.isCoordinate(value)",
      apply: "__applyX",
      event: "changeX"
    },
    
    /**
     * Y-coordinate of the text.
     * 
     * More info:
     * <ul>
     *   <li>http://www.w3.org/TR/SVG/text.html#TextElementYAttribute</li>
     * </ul>
     */
    y : {
      nullable: true,
      init: null, 
      check: "svg.core.Types.isCoordinate(value)",
      apply: "__applyY",
      event: "changeY"
    },
    
    /**
     * Horizontal text offset. Sets the _dx_ attribute.
     * 
     * More info:
     * <ul>
     *   <li>http://www.w3.org/TR/SVG/text.html#TextElementDXAttribute</li>
     * </ul>
     */
    offsetX : {
      nullable: true,
      init: null,
      check: "svg.core.Types.isLength(value)",
      apply: "__applyOffsetX",
      event: "changeOffsetX"
    },
    
    /**
     * Vertical text offset. Sets the _dy_ attribute.
     * 
     * More info:
     * <ul>
     *   <li>http://www.w3.org/TR/SVG/text.html#TextElementDYAttribute</li>
     * </ul>
     */
    offsetY : {
      nullable: true,
      init: null, 
      check: "svg.core.Types.isLength(value)",
      apply: "__applyOffsetY",
      event: "changeOffsetY"
    },
    
    /**
     * The length that the text must fill. The text will be stretched
     * or shrinked if needed. The way in which stretching or shrinking
     * will occur is specified by the lengthAdjust property.
     * 
     * More info:
     * <ul>
     *   <li>http://www.w3.org/TR/SVG/text.html#TextElementTextLengthAttribute</li>
     * </ul>
     * 
     * @see #lengthAdjust
     */
    textLength : {
      nullable: true,
      init: null,
      check: "svg.core.Types.isLength(value)",
      apply: "__applyTextLength",
      event: "changeTextLength"
    },
    
    /**
     * How text will be stretched or shrinked to meet the length requirement set
     * by the textLength property.
     * 
     * <ul>
     *   <li><em>spacing</em>: only whitespace will be stretched</li>
     *   <li><em>spacingAndGlyphs</em>: both whitespace and characters will be stretched</li>
     * </ul>
     * 
     * More info:
     * <ul>
     *   <li>http://www.w3.org/TR/SVG/text.html#TextElementTextLengthAttribute</li>
     * </ul>
     */
    lengthAdjust : {
      nullable: true,
      init: null,
      check: ["spacing", "spacingAndGlyphs"],
      apply: "__applyLengthAdjust",
      event: "changeLengthAdjust"
    },
    
    /**
     * Rotation for individual characters or strings of text.
     * 
     * More info:
     * <ul>
     *   <li>http://www.w3.org/TR/SVG/text.html#TextElementRotateAttribute</li>
     * </ul>
     */
    rotate : {
      nullable: true,
      init: null,
      apply: "__applyRotate",
      event: "changeRotate"
    },
    opacity : {
      nullable: true,
      init: null,
      apply: "__applyOpacity",
      event: "changeOpacity"
    }
  },
  
  members :
  {
    //applies x
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
    
    //applies dx
    __applyOffsetX: function(value, old) {
      if (null == value) {
        this.removeAttribute("dx");
      } else {
        this.setAttribute("dx", value);
      }
    },
    
    //applies dy
    __applyOffsetY: function(value, old) {
      if (null == value) {
        this.removeAttribute("dy");
      } else {
        this.setAttribute("dy", value);
      }
    },
    
    //applies textLength
    __applyTextLength: function(value, old) {
      if (null == value) {
        this.removeAttribute("textLength");
      } else {
        this.setAttribute("textLength", value);
      }
    },
    
    //applies lengthAdjust
    __applyLengthAdjust: function(value, old) {
      if (null == value) {
        this.removeAttribute("lengthAdjust");
      } else {
        this.setAttribute("lengthAdjust", value);
      }
    },
    
    //applies rotate
    __applyRotate: function(value, old) {
      if (null == value) {
        this.removeAttribute("rotate");
      } else {
        this.setAttribute("rotate", value);
      }
    },
    __applyOpacity:function(value, old){
      if (null == value) {
        this.removeAttribute("opacity");
      } else {
        this.setAttribute("opacity", value);
      }
    },
    __updateContentHint: function (width, height) {
      // Compare with old sizes and relayout if necessary
      if (width !== this.__width || height !== this.__height) {
        this.__width = width;
        this.__height = height;

        qx.ui.core.queue.Layout.add(this);
      }
    },

    __setSource: function (el, source) {
      var isFont = source && qx.lang.String.startsWith(source, "@");

      if (isFont) {
        var ResourceManager = qx.util.ResourceManager.getInstance();
        var font = qx.theme.manager.Font.getInstance().resolve(source.match(/@([^/]+)/)[1]);
        var fontStyles = qx.lang.Object.clone(font.getStyles());
        el.setAttribute("font-family", fontStyles.fontFamily);
        el.setAttribute("font-size", fontStyles.fontSize);

        var resource = ResourceManager.getData(source);
        if (resource) {
          this.setValue(String.fromCharCode(resource[2]));
        }
        else {
          var charCode = parseInt(qx.theme.manager.Font.getInstance().resolve(source.match(/@([^/]+)\/(.*)$/)[2]), 16);
          if (qx.core.Environment.get("qx.debug")) {
            this.assertNumber(charCode, "Font source needs either a glyph name or the unicode number in hex");
          }
          this.setValue(String.fromCharCode(charCode));
        }

        return;
      }

      el.setSource(source);
    },

    __iconFont: function (e) {
      var isFont = this.getValue() && qx.lang.String.startsWith(this.getValue(), "@");
      if (isFont) {
        var font = qx.theme.manager.Font.getInstance().resolve(this.getValue().match(/@([^/]+)/)[1]);
        var size = font.getSize();
        this.__updateContentHint(size, size);

        var source = this.getValue();
        source = qx.util.AliasManager.getInstance().resolve(source);      
        var el = this.getDomElement();
        if (this.__wrapper) {
          el = el.getChild(0);
        }
        this.__setSource(el, source);
      }
    }
    
  }

  
});