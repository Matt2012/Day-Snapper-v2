function btnTagWindow() {

	Ti.include('../../lib/ti/global.js');
	ActionBarView = require('/ui/ActionBarView');

	var self = Ti.UI.CurrentWindow;
	
	var actionBar = new ActionBarView({
		title:'Tags'
	});
	self.add(actionBar.viewProxy);
	
	
	actionBar.addEventListener('buttonPress', function() {
		self.close();
	});
	
	return self;
}
module.exports = btnTagWindow;