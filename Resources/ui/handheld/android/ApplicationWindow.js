
function AuthenticationWindow()
{
	var AuthenticationView = require('ui/common/AuthenticationWindow');
	//construct UI
	var authenticationView = new AuthenticationView();
	
	//listen for login or register or pin getting userID
	authenticationView.addEventListener('authenticated', function(e) {
		alert('10');
		//authenticationView.remove(scrollview);
	});
	
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
	
/*	self.addEventListener('dox', function(user) {
		alert('user is logged in '+  user.objectForKey("username"));
		//this.remove(scrollDay); 
	});*/
	
	

	
/*	Titanium.API.addEventListener('myEvent', function(e)
	{
		Titanium.API.info('my event fired!');
		alert('Custom data sent with the event: ');
	});*/
	
	
	if(!Ti.App.Properties.hasProperty('userID'))
	{
		//No UserID stored so show login screen (with register and forgot password options)
		Ti.API.info('------------------------Loading Authentication Window');
		var AuthenticationView = require('/ui/common/AuthenticationWindow');
		var firstV = new AuthenticationView();
		
		firstV.addEventListener('authenticated', function(user) {
			alert('user logged in '  + user.objectForKey("username"));
			self.remove(firstV);
			var mainV = MasterDetailWindow();
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
		var firstV = MasterDetailWindow();
	}
	
		 
	self.add(firstV);
	
			
	return self;
};

module.exports = ApplicationWindow;
