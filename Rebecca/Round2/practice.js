(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1488505146134", id:"bg"},
		{src:"images/copy1.png?1488505146134", id:"copy1"},
		{src:"images/copy2.png?1488505146134", id:"copy2"},
		{src:"images/copy3.png?1488505146134", id:"copy3"},
		{src:"images/logo.png?1488505146134", id:"logo"},
		{src:"images/pro1.png?1488505146134", id:"pro1"},
		{src:"images/pro2.png?1488505146134", id:"pro2"},
		{src:"images/pro3.png?1488505146134", id:"pro3"},
		{src:"images/pro4.png?1488505146134", id:"pro4"},
		{src:"images/pro5.png?1488505146134", id:"pro5"},
		{src:"images/star_blue.png?1488505146134", id:"star_blue"},
		{src:"images/woman.png?1488505146134", id:"woman"},
		{src:"images/x2_cta_copy.png?1488505146134", id:"x2_cta_copy"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.copy1 = function() {
	this.initialize(img.copy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,36);


(lib.copy2 = function() {
	this.initialize(img.copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,50);


(lib.copy3 = function() {
	this.initialize(img.copy3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,25);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,162);


(lib.pro1 = function() {
	this.initialize(img.pro1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,77);


(lib.pro2 = function() {
	this.initialize(img.pro2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,161);


(lib.pro3 = function() {
	this.initialize(img.pro3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,165);


(lib.pro4 = function() {
	this.initialize(img.pro4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,153);


(lib.pro5 = function() {
	this.initialize(img.pro5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,151);


(lib.star_blue = function() {
	this.initialize(img.star_blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,144);


(lib.woman = function() {
	this.initialize(img.woman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,501);


(lib.x2_cta_copy = function() {
	this.initialize(img.x2_cta_copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,28);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.star_blue();
	this.instance.setTransform(-11.2,-18.8,0.261,0.261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-18.8,22.5,37.6);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.star_blue();
	this.instance.setTransform(-11.2,-18.8,0.261,0.261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-18.8,22.5,37.6);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.star_blue();
	this.instance.setTransform(-11.2,-18.8,0.261,0.261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-18.8,22.5,37.6);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.star_blue();
	this.instance.setTransform(-11.2,-18.8,0.261,0.261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-18.8,22.5,37.6);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBC914").s().p("AnzBtIAAjaIPmAAIAADag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-11,100,22);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.woman();
	this.instance.setTransform(-252.9,-411.5,1.643,1.643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.9,-411.5,506,823);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.woman();
	this.instance.setTransform(-252.9,-411.5,1.643,1.643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.9,-411.5,506,823);


(lib.that = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copy3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,25);


(lib.pro5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pro5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,151);


(lib.pro5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pro5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,151);


(lib.pro4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pro4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,153);


(lib.pro4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pro4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,153);


(lib.pro3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pro3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,165);


(lib.pro3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pro3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,165);


(lib.pro2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pro2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,161);


(lib.pro2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pro2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,161);


(lib.pro1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pro1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,77);


(lib.pro1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pro1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,77);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189,162);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An0DtQhtjZEckcQEbkfEhCmQEjCmhNgKQhNgLgBBWQgCBWBwChQBxCjjbBbQjbBckWAHIgTABQkKAAhpjSg");
	this.shape.setTransform(53.2,44.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.4,89.5);


(lib.get_unstoppable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copy1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181,36);


(lib.CURLS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,50);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnPZdMAAAgy5IOgAAMAAAAy5g");
	this.shape.setTransform(70.5,183.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.womancopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.woman();
	this.instance.setTransform(0,0,1.643,1.643);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(253,411.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(253,411.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({_off:true},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,506,823);


(lib.woman_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.womancopy();
	this.instance.setTransform(253,411.5,1,1,0,0,0,253,411.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,506,823);


(lib.STAR1_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// Layer 1
	this.instance = new lib.Tween11("synched",0);
	this.instance.setTransform(11.2,18.8);

	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.setTransform(11.2,18.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.setTransform(11.2,18.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.setTransform(11.2,18.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_2}]},12).to({state:[{t:this.instance_3}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:0},12).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},12).to({_off:true,alpha:1},12).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},12).to({_off:true,alpha:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.5,37.6);


(lib.star1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// star1
	this.instance = new lib.STAR1_anim();
	this.instance.setTransform(-186.8,50.5,1,1,0,0,0,11.2,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29));

	// star2
	this.instance_1 = new lib.STAR1_anim();
	this.instance_1.setTransform(27.8,108.8,1,1,0,0,0,11.2,18.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(22));

	// star3
	this.instance_2 = new lib.STAR1_anim();
	this.instance_2.setTransform(-77.2,71.2,1,1,0,0,0,11.2,18.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(17));

	// star4
	this.instance_3 = new lib.STAR1_anim();
	this.instance_3.setTransform(-33.2,2.8,1,1,0,0,0,11.2,18.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).wait(11));

	// star5
	this.instance_4 = new lib.STAR1_anim();
	this.instance_4.setTransform(-113.8,-18.1,1,1,0,0,0,11.2,18.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198,31.7,22.4,37.6);


(lib.cta_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


// stage content:
(lib.practice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_213 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(213).call(this.frame_213).wait(1));

	// pro1.png copy
	this.instance = new lib.pro1copy();
	this.instance.setTransform(340.3,528.5,0.533,0.533,0,0,0,32.5,38.6);
	this.instance._off = true;

	this.instance_1 = new lib.pro1_1();
	this.instance_1.setTransform(171.7,528.5,0.533,0.533,0,0,0,32.5,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},146).to({state:[{t:this.instance_1}]},25).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(146).to({_off:false},0).to({_off:true,x:171.7},25,cjs.Ease.get(1)).wait(43));

	// pro2.png copy
	this.instance_2 = new lib.pro2copy();
	this.instance_2.setTransform(368,506.4,0.556,0.556,0,0,0,21.6,80.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.pro2_1();
	this.instance_3.setTransform(201.1,506.5,0.556,0.556,0,0,0,21.7,80.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},147).to({state:[{t:this.instance_3}]},25).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(147).to({_off:false},0).to({_off:true,regX:21.7,x:201.1,y:506.5},25,cjs.Ease.get(1)).wait(42));

	// pro4.png copy
	this.instance_4 = new lib.pro4copy();
	this.instance_4.setTransform(413.3,509.7,0.5,0.552,0,0,0,20.6,78.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.pro4_1();
	this.instance_5.setTransform(244,508.7,0.5,0.549,0,0,0,20.5,76.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},149).to({state:[{t:this.instance_5}]},25).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(149).to({_off:false},0).to({_off:true,regX:20.5,regY:76.5,scaleY:0.55,x:244,y:508.7},25,cjs.Ease.get(1)).wait(40));

	// pro3.png copy
	this.instance_6 = new lib.pro3copy();
	this.instance_6.setTransform(391.5,504.5,0.559,0.559,0,0,0,29.5,82.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.pro3_1();
	this.instance_7.setTransform(223.6,504.6,0.559,0.559,0,0,0,29.6,82.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},148).to({state:[{t:this.instance_7}]},25).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(148).to({_off:false},0).to({_off:true,regX:29.6,regY:82.7,x:223.6,y:504.6},25,cjs.Ease.get(1)).wait(41));

	// pro5.png copy
	this.instance_8 = new lib.pro5copy();
	this.instance_8.setTransform(443.6,520.5,0.532,0.532,0,0,0,38.6,75.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.pro5_1();
	this.instance_9.setTransform(275.6,520.5,0.532,0.532,0,0,0,38.6,75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},150).to({state:[{t:this.instance_9}]},25).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150).to({_off:false},0).to({_off:true,x:275.6},25,cjs.Ease.get(1)).wait(39));

	// light
	this.instance_10 = new lib.light();
	this.instance_10.setTransform(206.5,505.8,1.094,1.268,0,0,0,53.1,44.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;
	this.instance_10.filters = [new cjs.BlurFilter(39, 39, 1)];
	this.instance_10.cache(-2,-2,110,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(164).to({_off:false},0).to({alpha:1},25).wait(25));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(214));

	// copy3.png
	this.instance_11 = new lib.that();
	this.instance_11.setTransform(492.5,473.5,1,1,0,0,0,75.5,12.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(131).to({_off:false},0).to({x:102.5},21,cjs.Ease.get(1)).wait(62));

	// copy2.png
	this.instance_12 = new lib.CURLS();
	this.instance_12.setTransform(-204,432,1,1,0,0,0,61,25);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(131).to({_off:false},0).to({x:102},21,cjs.Ease.get(1)).wait(62));

	// copy1.png
	this.instance_13 = new lib.get_unstoppable();
	this.instance_13.setTransform(492.5,392,1,1,0,0,0,90.5,18);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(131).to({_off:false},0).to({x:108.5,y:393},21,cjs.Ease.get(1)).wait(62));

	// x2_cta_copy.png
	this.instance_14 = new lib.x2_cta_copy();
	this.instance_14.setTransform(109,570,0.494,0.429);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(214));

	// cta_bg
	this.instance_15 = new lib.cta_bg();
	this.instance_15.setTransform(150,576,1,1,0,0,0,50,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC914").s().p("AnzBtIAAjZIPmAAIAADZg");
	this.shape_1.setTransform(150,576);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBCD28").s().p("AnzBtIAAjZIPmAAIAADZg");
	this.shape_2.setTransform(150,576);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCD23B").s().p("AnzBtIAAjZIPmAAIAADZg");
	this.shape_3.setTransform(150,576);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCD74F").s().p("AnzBtIAAjZIPmAAIAADZg");
	this.shape_4.setTransform(150,576);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCDB62").s().p("AnzBtIAAjZIPmAAIAADZg");
	this.shape_5.setTransform(150,576);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDE076").s().p("AnzBtIAAjZIPmAAIAADZg");
	this.shape_6.setTransform(150,576);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDE48A").s().p("AnzBtIAAjZIPmAAIAADZg");
	this.shape_7.setTransform(150,576);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDE89D").s().p("AnzBtIAAjZIPmAAIAADZg");
	this.shape_8.setTransform(150,576);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEEDB1").s().p("AnzBtIAAjZIPmAAIAADZg");
	this.shape_9.setTransform(150,576);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEF2C4").s().p("AnzBtIAAjZIPmAAIAADZg");
	this.shape_10.setTransform(150,576);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEF6D8").s().p("AnzBtIAAjZIPmAAIAADZg");
	this.shape_11.setTransform(150,576);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFBEB").s().p("AnzBtIAAjZIPmAAIAADZg");
	this.shape_12.setTransform(150,576);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AnzBtIAAjZIPmAAIAADZg");
	this.shape_13.setTransform(150,576);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.shape_1}]},189).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// woman.png
	this.instance_16 = new lib.woman_1();
	this.instance_16.setTransform(-314.9,225.8,0.999,0.999,0,0,0,253,411.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(91).to({_off:false},0).wait(1).to({x:-312.9,y:226.2},0).wait(1).to({scaleX:1,scaleY:1,x:-309.9,y:226.9},0).wait(1).to({scaleX:1,scaleY:1,x:-305.9,y:227.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-300.9,y:228.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-294.6,y:230},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-287.1,y:231.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-278.4,y:233.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-268.3,y:235.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-256.8,y:237.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-243.8,y:240.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-229.3,y:243.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-213.2,y:246.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-195.5,y:250.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-176,y:254.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-154.8,y:258.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-131.9,y:263.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-107.2,y:268.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-80.9,y:273.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-52.8,y:279.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-23.3,y:285.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:7.6,y:292},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:39.7,y:298.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:72.8,y:305.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:106.5,y:312.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:140.5,y:319.3},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:174.6,y:326.3},0).to({scaleX:0.68,scaleY:0.68,x:174,y:371},14,cjs.Ease.get(-1)).to({regY:411.6,scaleX:0.61,scaleY:0.61,x:173.7,y:395.1},13,cjs.Ease.get(1)).wait(70));

	// logo
	this.instance_17 = new lib.logo_1();
	this.instance_17.setTransform(-300.3,-56.3,2.405,2.405,0,0,0,94.4,80.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(9).to({_off:false},0).to({regX:94.5,regY:81.2,scaleX:0.98,scaleY:0.98,x:157.5,y:92},23,cjs.Ease.get(1)).wait(81).to({regY:81,scaleX:0.97,scaleY:0.97,y:91.8},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:91.9},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:91.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:91.9},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.78,scaleY:0.78},0).wait(1).to({scaleX:0.78,scaleY:0.78},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:92},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:91.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:92},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({regY:81.3,scaleX:0.76,scaleY:0.76,y:92.2},0).wait(72));

	// star
	this.instance_18 = new lib.star1();
	this.instance_18.setTransform(266,355,1,1,0,0,0,43,72);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(54).to({_off:false},0).to({_off:true},58).wait(102));

	// pro1.png
	this.instance_19 = new lib.pro1_1();
	this.instance_19.setTransform(382.5,367.5,1,1,0,0,0,32.5,38.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(32).to({_off:false},0).to({x:66.5},25,cjs.Ease.get(1)).to({_off:true},62).wait(95));

	// pro2.png
	this.instance_20 = new lib.pro2_1();
	this.instance_20.setTransform(433.5,325.5,1,1,0,0,0,21.5,80.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(33).to({_off:false},0).to({x:120.5},25,cjs.Ease.get(1)).to({_off:true},61).wait(95));

	// pro3.png
	this.instance_21 = new lib.pro3_1();
	this.instance_21.setTransform(470.5,323.5,1,1,0,0,0,29.5,82.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(34).to({_off:false},0).to({x:158.5},25,cjs.Ease.get(1)).to({_off:true},60).wait(95));

	// pro4.png
	this.instance_22 = new lib.pro4_1();
	this.instance_22.setTransform(505.5,329.5,1,1,0,0,0,20.5,76.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(35).to({_off:false},0).to({x:199.5},25,cjs.Ease.get(1)).to({_off:true},59).wait(95));

	// pro5.png
	this.instance_23 = new lib.pro5_1();
	this.instance_23.setTransform(556.5,352.5,1,1,0,0,0,38.5,75.5);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(36).to({_off:false},0).to({x:258.5,y:353.5},25,cjs.Ease.get(1)).to({_off:true},58).wait(95));

	// bg
	this.instance_24 = new lib.bg_1();
	this.instance_24.setTransform(149.8,300,1.227,1.16,0,0,0,149.8,299.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(109).to({regX:150,regY:300,scaleX:1.23,x:150.1,y:300.1},0).wait(1).to({scaleX:1.23,scaleY:1.16},0).wait(1).to({scaleX:1.22,scaleY:1.16},0).wait(1).to({scaleX:1.22,scaleY:1.16},0).wait(1).to({scaleX:1.22,scaleY:1.15},0).wait(1).to({scaleX:1.21,scaleY:1.15},0).wait(1).to({scaleX:1.2,scaleY:1.14},0).wait(1).to({scaleX:1.19,scaleY:1.14},0).wait(1).to({scaleX:1.18,scaleY:1.13},0).wait(1).to({scaleX:1.17,scaleY:1.12},0).wait(1).to({scaleX:1.16,scaleY:1.11},0).wait(1).to({scaleX:1.14,scaleY:1.1},0).wait(1).to({scaleX:1.12,scaleY:1.09},0).wait(1).to({scaleX:1.11,scaleY:1.08},0).wait(1).to({scaleX:1.09,scaleY:1.06},0).wait(1).to({scaleX:1.07,scaleY:1.05},0).wait(1).to({scaleX:1.06,scaleY:1.04,x:150,y:300},0).wait(1).to({scaleX:1.05,scaleY:1.03,x:150.1},0).wait(1).to({scaleX:1.04,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.02,x:150},0).wait(1).to({scaleX:1.02,scaleY:1.01,x:150.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:150,y:300.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:300},0).wait(1).to({scaleX:1,scaleY:1,x:150.1},0).wait(1).to({scaleX:1,scaleY:1,x:150,y:300.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:149.8,regY:299.9,x:149.8,y:299.9},0).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116.1,252.1,368.1,695.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;