function LoginView() {
	var self = Ti.UI.createView();
	
	var lbl = Ti.UI.createLabel({
		text:'Login View',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	self.add(lbl);
	
	return self;
};

module.exports = LoginView;
