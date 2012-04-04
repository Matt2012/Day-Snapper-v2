function AuthenticationWindow()
{
	var AuthenticationView = require('ui/common/AuthenticationWindow');
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

function MasterDetailView()
{
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');
		
	//construct UI
	var masterView = new MasterView(),
		detailView = new DetailView();
	
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
	
	Ti.include('../../../lib/ti/global.js');

	//create object instance
	var self = Ti.UI.createWindow({
		exitOnClose:true,
		navBarHidden:true,
		backgroundColor:'#ffffff'
	});
	
	Ti.API.info('------------------------is logged in' + parseapi.PFUserCurrentUser());
	if(parseapi.PFUserCurrentUser() == null)
	{
		//No UserID stored so show login screen (with register and forgot password options)
		Ti.API.info('------------------------Loading Authentication View');
		var AuthenticationView = require('/ui/common/AuthenticationView');
		var firstV = new AuthenticationView();
		
		firstV.addEventListener('authenticated', function(user) {
			self.remove(firstV);
			var mainV = MasterDetailView();
			self.add(mainV);
			return false;
		});
		
	}
	else if(Ti.App.Properties.hasProperty('usePin') && Ti.App.Properties.getProperty('usePin'))
	{
		//If using pin option and logged in show pin window
		Ti.API.info('------------------------Open Pin Window');
		var firstV = PinWindow();
	}
	else
	{
		//Main snaps window
		Ti.API.info('------------------------Loading Master Detail View in Main Window');
		var firstV = MasterDetailView();
	}
	
		 
	self.add(firstV);
	
			
	return self;
};

module.exports = ApplicationWindow;