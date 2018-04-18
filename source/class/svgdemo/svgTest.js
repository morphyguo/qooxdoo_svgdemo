qx.Class.define("svgdemo.svgTest", {
    extend: qx.ui.container.Composite,
    construct: function() {
        this.base(arguments);
        var layout = new qx.ui.layout.Canvas();
    	this.setLayout(layout);
    	var view = this._createView();
    	this.add(view);
    },
    members:{
    	_createView: function(){
    		var svgComposite = new svg.embed.Svg().set({
    			width:1000,
    			height:600,
    			backgroundColor:"#ccc"
    		});

    		var g = new svg.struct.Group();

    		var rect = new svg.shape.Rect().set({
    			width:200,
    			height:100,
    			fill: "rgb(255,255,255)",
                stroke: "rgba(179, 189, 198, 1.0)"
    		});

    		var text = new svg.text.Text().set({
    			offsetX: 100,
                offsetY: 50,
                textAnchor: "middle"
    		});
    		text.setValue("TEST");

    		g.add(rect);
    		
    		g.add(text);

    		this.dragRect(g);

    		svgComposite.getSvg().add(g);

    		return svgComposite;
    	},
    	dragRect: function(group){
    		new svg.behavior.Draggable(group,0,0,null,null,null);
    	}
    }
});