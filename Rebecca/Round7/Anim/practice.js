(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 700,
	height: 500,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1490864080540", id:"bg"},
		{src:"images/BuildYourOwnCTA.png?1490864080540", id:"BuildYourOwnCTA"},
		{src:"images/car.png?1490864080540", id:"car"},
		{src:"images/cramodule.png?1490864080540", id:"cramodule"},
		{src:"images/doubleseat.png?1490864080540", id:"doubleseat"},
		{src:"images/FindOutMoreCTA.png?1490864080540", id:"FindOutMoreCTA"},
		{src:"images/logo.png?1490864080540", id:"logo"},
		{src:"images/Meet_copy.png?1490864080540", id:"Meet_copy"},
		{src:"images/seat.png?1490864080540", id:"seat"},
		{src:"images/shell_canvas.png?1490864080540", id:"shell_canvas"},
		{src:"images/steeringwheel.png?1490864080540", id:"steeringwheel"},
		{src:"images/WE_copy.png?1490864080540", id:"WE_copy"},
		{src:"images/wheel.png?1490864080540", id:"wheel"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,500);


(lib.BuildYourOwnCTA = function() {
	this.initialize(img.BuildYourOwnCTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,21);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,559,170);


(lib.cramodule = function() {
	this.initialize(img.cramodule);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,500);


(lib.doubleseat = function() {
	this.initialize(img.doubleseat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,97);


(lib.FindOutMoreCTA = function() {
	this.initialize(img.FindOutMoreCTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,21);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,70);


(lib.Meet_copy = function() {
	this.initialize(img.Meet_copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,461,19);


(lib.seat = function() {
	this.initialize(img.seat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,150);


(lib.shell_canvas = function() {
	this.initialize(img.shell_canvas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,224);


(lib.steeringwheel = function() {
	this.initialize(img.steeringwheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,75);


(lib.WE_copy = function() {
	this.initialize(img.WE_copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,439,47);


(lib.wheel = function() {
	this.initialize(img.wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,83);


(lib.we_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WE_copy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,439,47);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheel();
	this.instance.setTransform(33.7,48.1,1,1,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-48,96.2,96.2);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheel();
	this.instance.setTransform(33.7,48.1,1,1,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-48,96.2,96.2);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheel();
	this.instance.setTransform(-41.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-41.5,83,83);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheel();
	this.instance.setTransform(-41.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-41.5,83,83);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cramodule();
	this.instance.setTransform(-350,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-250,700,500);


(lib.steering = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.steeringwheel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,75);


(lib.seat_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.seat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,150);


(lib.pro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shell_canvas();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,650,224);


(lib.meet_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Meet_copy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,461,19);


(lib.maskani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx+AWGMAAAgsLMBj9AAAMAAAAsLg");
	this.shape.setTransform(320,141.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,283);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142,70);


(lib.light_glass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkKRnQkFgIhrlQQhslPBwnSQBunTEIlFQEGlEEFAIQEGAJBqFOQBrFRhuHRQhwHTkHFEQkBE9j9AAIgNAAg");
	this.shape.setTransform(68.9,112.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.7,225.5);


(lib.light_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkLOKQjAg5g6kyQg6kyBvl1QBvl3DXjiQDUjhDCA5QDAA5A6ExQA6EzhwF1QhuF3jXDhQiqC0idAAQgoAAgngLg");
	this.shape.setTransform(53.8,91.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.6,183.6);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjoO4QhgmLAAotQAAosBgmLQBhmKCHAAQCIAABgGKQBhGLAAIsQAAIthhGLQhgGKiIAAQiHAAhhmKg");
	this.shape.setTransform(33.1,134.8,3.039,1.688);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-92.4,200.3,454.5);


(lib.find_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FindOutMoreCTA();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,21);


(lib.dou_seat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.doubleseat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,97);


(lib.car_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,559,170);


(lib.build_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BuildYourOwnCTA();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,21);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,500);


(lib.wheelcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Layer 1
	this.instance = new lib.Tween11("synched",0);
	this.instance.setTransform(41.5,41.5);

	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.setTransform(41.5,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},33).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:-360},33,cjs.Ease.get(1)).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-6.6,96.1,96.1);


(lib.wheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Layer 1
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(41.5,41.5);

	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.setTransform(41.5,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},34).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:-360},34,cjs.Ease.get(1)).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,83);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheelcopy();
	this.instance.setTransform(186.5,12.1,1,1,0,0,0,41.5,41.5);

	this.instance_1 = new lib.wheel_1();
	this.instance_1.setTransform(-190.5,13.1,1,1,0,0,0,41.5,41.5);

	this.instance_2 = new lib.car_1();
	this.instance_2.setTransform(0,0,1,1,0,0,0,279.5,85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279.5,-85,559,170);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// Layer 2
	this.maskani = new lib.maskani();
	this.maskani.setTransform(-286.1,117.6,1,1,0,0,0,319.9,141.5);

	this.timeline.addTween(cjs.Tween.get(this.maskani).wait(1).to({regX:320,x:-285.7},0).wait(1).to({x:-284.9},0).wait(1).to({x:-283.6},0).wait(1).to({x:-281.7},0).wait(1).to({x:-279},0).wait(1).to({x:-275.6},0).wait(1).to({x:-271.4},0).wait(1).to({x:-266.2},0).wait(1).to({x:-260},0).wait(1).to({x:-252.5},0).wait(1).to({x:-243.8},0).wait(1).to({x:-233.5},0).wait(1).to({x:-221.5},0).wait(1).to({x:-207.5},0).wait(1).to({x:-191.4},0).wait(1).to({x:-173},0).wait(1).to({x:-152},0).wait(1).to({x:-128.6},0).wait(1).to({x:-102.9},0).wait(1).to({x:-75.5},0).wait(1).to({x:-47},0).wait(1).to({x:-18.4},0).wait(1).to({x:9.4},0).wait(1).to({x:35.8},0).wait(1).to({x:60.5},0).wait(1).to({x:83.4},0).wait(1).to({x:104.3},0).wait(1).to({x:123.4},0).wait(1).to({x:140.8},0).wait(1).to({x:156.7},0).wait(1).to({x:171.2},0).wait(1).to({x:184.4},0).wait(1).to({x:196.5},0).wait(1).to({x:207.5},0).wait(1).to({x:217.6},0).wait(1).to({x:226.8},0).wait(1).to({x:235.3},0).wait(1).to({x:243.1},0).wait(1).to({x:250.2},0).wait(1).to({x:256.7},0).wait(1).to({x:262.6},0).wait(1).to({x:268.1},0).wait(1).to({x:273},0).wait(1).to({x:277.5},0).wait(1).to({x:281.6},0).wait(1).to({x:285.3},0).wait(1).to({x:288.7},0).wait(1).to({x:291.7},0).wait(1).to({x:294.4},0).wait(1).to({x:296.8},0).wait(1).to({x:298.9},0).wait(1).to({x:300.7},0).wait(1).to({x:302.3},0).wait(1).to({x:303.6},0).wait(1).to({x:304.7},0).wait(1).to({x:305.6},0).wait(1).to({x:306.2},0).wait(1).to({x:306.7},0).wait(1).to({x:307},0).wait(1).to({regX:319.9,x:306.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-606,-23.9,640,283);


(lib.modoul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(350,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,500);


(lib.car_shell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var masker = this.maskani;
		var	bmp = this.pro;
		var scope = this;
		var blurFilter = new createjs.BlurFilter(20, 0, 1);
			masker.filters = [blurFilter];
			masker.visible = false;
			createjs.Ticker.addEventListener("tick", setFilter);
		    function setFilter(){
				if(scope.currentFrame == scope.totalFrames -1){
					createjs.Ticker.removeEventListener("tick", setFilter);
				}
				masker.cache(0,0,600,230);
				masker.visible = false;
				bmp.filters = [
				    new createjs.AlphaMaskFilter(masker.cacheCanvas)
				];
				bmp.cache(0,0,600,230);
			
			}
	}
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60).call(this.frame_60).wait(1));

	// Layer 5
	this.maskani = new lib.Symbol1();
	this.maskani.setTransform(87.5,37,1,1,0,0,0,87.5,37);

	this.timeline.addTween(cjs.Tween.get(this.maskani).wait(61));

	// pro
	this.pro = new lib.pro();
	this.pro.setTransform(1010,5,1,1,0,0,0,325,112);

	this.timeline.addTween(cjs.Tween.get(this.pro).wait(2).to({x:325,y:112},0).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-606,-107,1941,366);


// stage content:



(lib.practice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_249 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(249).call(this.frame_249).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_206 = new cjs.Graphics().p("A5mCeIEBi1IANgJQCHhnCMhFQD0h5EBgPQBvgMBpgFQBxgGBtAHQBZAFBpAQIAXAAIAcgIIEBADQC7gDC7AgQBBALB4AqQBzAoArAGID4AeIGeAAIEQD3Ir3AmImRC5IqdA5QgmAIgKgmIg+hmMggKACTgA5mCeIhFAxIBFgxIBEgmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(206).to({graphics:mask_graphics_206,x:391,y:165.6}).wait(44));

	// Layer 6
	this.instance = new lib.light_glass();
	this.instance.setTransform(45.7,137.1,1,1,0,0,0,68.9,112.8);
	this.instance.alpha = 0.488;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(59, 59, 1)];
	this.instance.cache(-2,-2,142,230);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(206).to({_off:false},0).wait(1).to({x:50.1},0).wait(1).to({x:55.5},0).wait(1).to({x:62.1,alpha:0.489},0).wait(1).to({x:69.8},0).wait(1).to({x:79},0).wait(1).to({x:89.6},0).wait(1).to({x:101.8},0).wait(1).to({x:115.9},0).wait(1).to({x:131.8,alpha:0.49},0).wait(1).to({x:149.9},0).wait(1).to({x:170.2},0).wait(1).to({x:193,alpha:0.491},0).wait(1).to({x:218.3},0).wait(1).to({x:246.3,alpha:0.492},0).wait(1).to({x:276.9},0).wait(1).to({x:310,alpha:0.493},0).wait(1).to({x:345.2},0).wait(1).to({x:381.9,alpha:0.494},0).wait(1).to({x:419.3},0).wait(1).to({x:456.5,alpha:0.495},0).wait(1).to({x:492.7,alpha:0.496},0).wait(1).to({x:527},0).wait(1).to({x:559,alpha:0.497},0).wait(1).to({x:588.4},0).wait(1).to({x:615,alpha:0.498},0).wait(1).to({x:638.8},0).wait(1).to({x:660},0).wait(1).to({x:678.7,alpha:0.499},0).wait(1).to({x:695.1},0).wait(1).to({x:709.4},0).wait(1).to({x:721.7},0).wait(1).to({x:732.3},0).wait(1).to({x:741.2,alpha:0.5},0).wait(1).to({x:748.7},0).wait(1).to({x:754.8},0).wait(1).to({x:759.7},0).wait(1).to({x:763.4},0).wait(1).to({x:766.2},0).wait(1).to({x:767.9},0).wait(1).to({x:768.8},0).wait(1).to({x:768.9},0).wait(3));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_207 = new cjs.Graphics().p("AqiADIX4g6QgLAsg4gBI5pBEQAggaCUgbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(207).to({graphics:mask_1_graphics_207,x:380.2,y:294.1}).wait(43));

	// Layer 8
	this.instance_1 = new lib.light_copy();
	this.instance_1.setTransform(-29.4,250.4,0.722,1,15,0,0,53.7,91.8);
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 30, 109, 205, 0), new cjs.BlurFilter(116, 116, 1)];
	this.instance_1.cache(-2,-2,112,188);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(207).to({_off:false},0).wait(1).to({regX:53.8,x:-25,y:250.6},0).wait(1).to({x:-19.8,y:250.9},0).wait(1).to({x:-13.4,y:251.2},0).wait(1).to({x:-5.7,y:251.5},0).wait(1).to({x:3.2,y:252},0).wait(1).to({x:13.6,y:252.5},0).wait(1).to({x:25.5,y:253},0).wait(1).to({x:39.2,y:253.7},0).wait(1).to({x:54.8,y:254.4},0).wait(1).to({x:72.5,y:255.3},0).wait(1).to({x:92.3,y:256.3},0).wait(1).to({x:114.6,y:257.3},0).wait(1).to({x:139.4,y:258.5},0).wait(1).to({x:166.7,y:259.8},0).wait(1).to({x:196.7,y:261.3},0).wait(1).to({x:229,y:262.8},0).wait(1).to({x:263.4,y:264.5},0).wait(1).to({x:299.3,y:266.2},0).wait(1).to({x:335.8,y:268},0).wait(1).to({x:372.2,y:269.7},0).wait(1).to({x:407.6,y:271.4},0).wait(1).to({x:441.2,y:273},0).wait(1).to({x:472.5,y:274.5},0).wait(1).to({x:501.2,y:275.9},0).wait(1).to({x:527.2,y:277.2},0).wait(1).to({x:550.5,y:278.3},0).wait(1).to({x:571.2,y:279.3},0).wait(1).to({x:589.4,y:280.2},0).wait(1).to({x:605.5,y:280.9},0).wait(1).to({x:619.4,y:281.6},0).wait(1).to({x:631.5,y:282.2},0).wait(1).to({x:641.8,y:282.7},0).wait(1).to({x:650.5,y:283.1},0).wait(1).to({x:657.8,y:283.4},0).wait(1).to({x:663.8,y:283.7},0).wait(1).to({x:668.6,y:284},0).wait(1).to({x:672.3,y:284.1},0).wait(1).to({x:674.9,y:284.3},0).wait(1).to({x:676.6,y:284.4},0).wait(1).to({x:677.5},0).wait(1).to({x:677.6},0).wait(1).to({regX:53.7,x:677.5},0).wait(1));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_207 = new cjs.Graphics().p("A/pRuQiigihlh7QhviHgCjLIg+DIIjIhGQhhgnA2guIAAhaIgbgcIAWgjIgCh1QgxjbC4h+QhNkqMLiyQgkgoCegCIBagoQDIh/DAhpQDJhtDahkIAagdICZgyQDhhfEGAFQHAgmG2AIQFJAFFGA0QBUhnCjAuQghA3AhAbIJMBpQAfAagNAdQgKAZgmAVIGVFUQBECOAQCEQARCDgfCJIBGAcQAVArgVAsIAbDhQANBjgmgYQAjAqgjAaQgWAjAWAjQh0CUiIAWIhYhfQggDChsB4QhfBriOAjQhZAWhPgHQhNgGhVgjQjDhQhJibMgkPAAAIhMAFIkDAgIitglQhqCkinBIQhpAshqAAQg1AAg0gKgAmrKEQiUAaggAaIZphGQA4ABALgrgA5skaMAgKgCTIA+BmQAKAmAmgIIKeg5IGQi5IL4gmIkRj5ImeAAIj4geQgrgGhzgoQh4gqhBgLQi7ggi7ADIkAgDQgDgDgDAAIgGABQgIACgFAEIgEAEIgWAAQhrgQhagFQhsgHhvAGQhqAEhvANIgnAFQjaAfi5BLIg7AYQiHA+hmBRIgmAeIgMAJIimCCQgLADgNAMIgEAEIgFAGIgeAVIgNAFIgTAMQgmAZgcAOIBFgxg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(207).to({graphics:mask_2_graphics_207,x:355.5,y:230}).wait(43));

	// Layer 3
	this.instance_2 = new lib.light();
	this.instance_2.setTransform(-1.6,222.6,0.605,1,21.4,0,0,33,134.7);
	this.instance_2.alpha = 0.07;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(68, 68, 1)];
	this.instance_2.cache(-69,-94,204,459);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(207).to({_off:false},0).wait(1).to({regX:33.1,regY:134.8,x:2.7},0).wait(1).to({x:8},0).wait(1).to({x:14.4},0).wait(1).to({x:22},0).wait(1).to({x:31},0).wait(1).to({x:41.4},0).wait(1).to({x:53.4},0).wait(1).to({x:67.1},0).wait(1).to({x:82.7},0).wait(1).to({x:100.4},0).wait(1).to({x:120.3},0).wait(1).to({x:142.6},0).wait(1).to({x:167.4},0).wait(1).to({x:194.8},0).wait(1).to({x:224.8},0).wait(1).to({x:257.2},0).wait(1).to({x:291.6},0).wait(1).to({x:327.5},0).wait(1).to({x:364.1},0).wait(1).to({x:400.6},0).wait(1).to({x:436},0).wait(1).to({x:469.6},0).wait(1).to({x:501},0).wait(1).to({x:529.7},0).wait(1).to({x:555.7},0).wait(1).to({x:579.1},0).wait(1).to({x:599.8},0).wait(1).to({x:618.1},0).wait(1).to({x:634.2},0).wait(1).to({x:648.1},0).wait(1).to({x:660.2},0).wait(1).to({x:670.5},0).wait(1).to({x:679.3},0).wait(1).to({x:686.6},0).wait(1).to({x:692.6},0).wait(1).to({x:697.4},0).wait(1).to({x:701.1},0).wait(1).to({x:703.7},0).wait(1).to({x:705.4},0).wait(1).to({x:706.3},0).wait(1).to({x:706.4},0).wait(1).to({regX:33,regY:134.7},0).wait(1));

	// shell_canvas.png
	this.instance_3 = new lib.car_shell();
	this.instance_3.setTransform(358,211,1,1,0,0,0,325,112);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(175).to({_off:false},0).wait(75));

	// cra module.png
	this.instance_4 = new lib.modoul();
	this.instance_4.setTransform(350,224,1,1,0,0,0,350,250);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(136).to({_off:false},0).to({y:243,alpha:1},25,cjs.Ease.get(1)).wait(89));

	// steering wheel.png
	this.instance_5 = new lib.steering();
	this.instance_5.setTransform(258,146.5,1,1,0,0,0,45,37.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(102).to({_off:false},0).to({y:207.5,alpha:1},10,cjs.Ease.get(1)).wait(1).to({y:207.3},0).wait(1).to({y:206.6},0).wait(1).to({y:205.4},0).wait(1).to({y:204},0).wait(1).to({y:202.6},0).wait(1).to({y:201.3},0).wait(1).to({y:200.2},0).wait(1).to({y:199.4},0).wait(1).to({y:198.9},0).wait(1).to({y:198.6},0).wait(1).to({y:198.5},0).wait(127));

	// seat.png
	this.instance_6 = new lib.seat_1();
	this.instance_6.setTransform(342,153,1,1,0,0,0,63,75);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(107).to({_off:false},0).to({y:208,alpha:1},10,cjs.Ease.get(1)).wait(1).to({y:207.7},0).wait(1).to({y:206.7},0).wait(1).to({y:205.2},0).wait(1).to({y:203.5},0).wait(1).to({y:201.8},0).wait(1).to({y:200.3},0).wait(1).to({y:199.2},0).wait(1).to({y:198.5},0).wait(1).to({y:198.1},0).wait(1).to({y:198},0).wait(123));

	// double seat.png
	this.instance_7 = new lib.dou_seat();
	this.instance_7.setTransform(467.5,122.5,1,1,0,0,0,56.5,48.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(112).to({_off:false},0).to({y:214.5,alpha:1},9,cjs.Ease.get(1)).wait(1).to({y:214.2},0).wait(1).to({y:213.2},0).wait(1).to({y:211.7},0).wait(1).to({y:210},0).wait(1).to({y:208.3},0).wait(1).to({y:206.8},0).wait(1).to({y:205.7},0).wait(1).to({y:205},0).wait(1).to({y:204.6},0).wait(1).to({y:204.5},0).wait(119));

	// build_cta
	this.instance_8 = new lib.build_cta();
	this.instance_8.setTransform(286,489.5,1,1,0,0,0,62,10.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(78).to({_off:false},0).to({y:477.5,alpha:1},15,cjs.Ease.get(1)).wait(157));

	// Find Out More CTA.png
	this.instance_9 = new lib.find_cta();
	this.instance_9.setTransform(149,486.5,1,1,0,0,0,60,10.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(78).to({_off:false},0).to({y:478.5,alpha:1},15,cjs.Ease.get(1)).wait(157));

	// Meet_copy.png
	this.instance_10 = new lib.meet_copy();
	this.instance_10.setTransform(416.5,439.5,1,1,0,0,0,230.5,9.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(44).to({_off:false},0).to({x:319.5,alpha:1},26,cjs.Ease.get(1)).wait(180));

	// WE_copy.png
	this.instance_11 = new lib.we_copy();
	this.instance_11.setTransform(405.5,398.5,1,1,0,0,0,219.5,23.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40).to({_off:false},0).to({x:307.5,alpha:1},27,cjs.Ease.get(1)).wait(183));

	// car.png
	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.setTransform(967.5,281);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).to({x:357.5},33,cjs.Ease.get(1)).wait(203));

	// logo
	this.instance_13 = new lib.logo_1();
	this.instance_13.setTransform(629,70,1,1,0,0,0,71,35);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},8).wait(242));

	// bg.jpg
	this.instance_14 = new lib.bg_1();
	this.instance_14.setTransform(350,250,1,1,0,0,0,350,250);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:1},8).wait(242));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(350,250,700,500);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;