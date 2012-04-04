function btnAddWindow() {

	Ti.include('../../../lib/ti/global.js');
	ActionBarView = require('../../../ui/common/ActionBarView');

	var self = Ti.UI.createView({
		top: 80,
		width: 300, 
		height:350,
		borderWidth:3,
		borderRadius:10,
		borderColor:'black',
		backgroundColor: "white",
		layout:'vertical'
	});
	
	var actionBar = new ActionBarView({
		title:'Snap'
	});
	
	self.add(actionBar.viewProxy);
	
	var lbl = Ti.UI.createLabel({
		text:'Stuff Goes here',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	
	self.add(lbl);

	
	return self;
}

module.exports = btnAddWindow;