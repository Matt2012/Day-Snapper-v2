function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');
		
	//create object instance
	var self = Ti.UI.createWindow({
		exitOnClose:true,
		navBarHidden:true,
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var masterView = new MasterView(),
		detailView = new DetailView();
		
	//create master view container
	self.add(masterView);
	
	//create detail view container
	var detailContainerWindow = Ti.UI.createWindow({
		title:'Snap',
		navBarHidden:false,
		backgroundColor:'#ffffff'
	});
	detailContainerWindow.add(detailView);
    
	//add behavior for master view
	masterView.SnapView.addEventListener('itemSelected', function(e) {
		detailView.fireEvent('itemSelected',e);
		detailContainerWindow.open();
	});
	
	return self;
};

module.exports = ApplicationWindow;
