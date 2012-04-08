function AuthenticationSliderView(self)
{
	var AuthenticationView = require('ui/common/AuthenticationView');
	//construct UI
	var authenticationView = new AuthenticationView();
	
	authenticationView.addEventListener('authenticated', function(user) {
		self.remove(authenticationView);
		var mainV = MasterDetailView(self);
		self.add(mainV);
		return false;
	});
		
	return authenticationView;
}

function PinView()
{
	var PinView = require('ui/common/PinView');
	//construct UI
	var pinView = new PinView();
	return pinView;
}


function MasterDetailView(self)
{
	var ActionBarView = require('../../../ui/common/ActionBarView');
		
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');
		
	//construct UI
	var masterView = new MasterView(),
		detailView = new DetailView();
	
	//create detail view container
	var detailContainerWindow = Ti.UI.createWindow({
		title:'Snap',
		navBarHidden:true,
		backgroundColor:'#ffffff'
	});
	detailContainerWindow.add(detailView);
	
	var topBar = new ActionBarView({
		type:'View Snap',
		pos: 'top'
	});
	
	detailContainerWindow.add(topBar.viewProxy);
	
	
	var bottomBar = new ActionBarView({
		pos: 'bottom',
		buttons: {
			btnNote: {
				icon:'note',
				width:80
			},
			btnCamera: {
				icon:'camera',
				width:80
			},
			btnVoice: {
				icon:'voice',
				width:80
			},
			btnVideo: {
				icon:'video',
				width:80
			}
		}
	});

	detailContainerWindow.add(bottomBar.viewProxy);
	
	bottomBar.addEventListener('buttonPress', function(e) {
		doAction('Snap',e.id, self);
	});
	
    
	//add behavior for master view
	masterView.SnapView.addEventListener('itemSelected', function(e) {
		detailView.fireEvent('itemSelected',e);
		detailContainerWindow.open();
	});
	
	masterView.addEventListener('unauthenticated', function(user) {
		self.remove(masterView);
		var asV = AuthenticationSliderView(self);
		self.add(asV);
		return false;
	});
	
	return masterView;
}


function ApplicationWindow() {
	
	Ti.include('../../../lib/ti/global.js');


	//create object instance //this is the main window
	var self = Ti.UI.createWindow({
		exitOnClose:true,
		navBarHidden:true,
		backgroundColor:'#ffffff'
	});
	
	self.orientationModes = [Ti.UI.PORTRAIT];
	
	Ti.API.info('------------------------is logged in' + parseapi.PFUserCurrentUser());
	if(parseapi.PFUserCurrentUser() == null)
	{
		//No UserID stored so show login screen (with register and forgot password options)
		Ti.API.info('------------------------Loading Authentication View');
		var firstV = AuthenticationSliderView(self);
	}
	else if(Ti.App.Properties.hasProperty('usePin') && Ti.App.Properties.getProperty('usePin'))
	{
		//If using pin option and logged in show pin window
		Ti.API.info('------------------------Open Pin Window');
		var firstV = PinView(self);
	}
	else
	{
		//Main snaps window
		Ti.API.info('------------------------Loading Master Detail View in Main Window');
		var firstV = MasterDetailView(self);
	}

	self.add(firstV);
	
			
	return self;
};

module.exports = ApplicationWindow;