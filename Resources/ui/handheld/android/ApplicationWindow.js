
function AuthenticationWindow()
{
	var AuthenticationView = require('ui/common/AuthenticationView');
	//construct UI
	var authenticationView = new AuthenticationView();
	return authenticationView;
}

function PinWindow()
{
	var PinView = require('ui/common/PinView');
	//construct UI
	var pinView = new PinView();
	return pinView;
}


function MasterDetailWindow()
{
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');
		
	//construct UI
	var masterView = new MasterView(),
		detailView = new DetailView();
		
	//create master view container
	//self.add(masterView);
	
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
	
	return masterView;
}




function ApplicationWindow() {
	

	//create object instance
	var self = Ti.UI.createWindow({
		exitOnClose:true,
		navBarHidden:true,
		backgroundColor:'#ffffff'
	});
	
	
	if(Ti.App.Properties.hasProperty('userID')==null)
	{
		//No UserID stored so show login screen (with register and forgot password options)
		Ti.API.info('------------------------Loading Authentication Window');
		var firstView = AuthenticationWindow();
	}
	else if(Ti.App.Properties.hasProperty('usePin')!=null && Ti.App.Properties.getProperty('usePin'))
	{
		//If using pin option and logged in show pin window
		var firstView = PinWindow();
	}
	else
	{
		//Main snaps window
		Ti.API.info('------------------------Loading Master Detail Window');
		var firstView = MasterDetailWindow();
	}
	self.add(firstView);
	
	return self;
};

module.exports = ApplicationWindow;
