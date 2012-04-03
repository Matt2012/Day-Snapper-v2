function RegisterView() {
	var self = Ti.UI.createView();
	
	var lbl = Ti.UI.createLabel({
		text:'Register View',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	self.add(lbl);
	
	return self;
};

module.exports = RegisterView;
