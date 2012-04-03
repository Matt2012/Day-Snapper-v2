function AuthenticationView() {
	
    Ti.include('../../lib/ti/global.js');
	
	var self = new ui.View({
		backgroundColor:'white'
	});
	
	var LoginView = require('/ui/common/LoginView');
	var RegisterView = require('/ui/common/RegisterView');
	var EmailPasswordView = require('/ui/common/EmailPasswordView');

	var loginV = new LoginView();
	var registerV = new RegisterView();
	var passwordV = new EmailPasswordView();
 
    var scrollView = Ti.UI.createScrollableView({
		top:44,
		left:0,
		right:0,
		bottom:44,
		views:[loginV, registerV, passwordV],
		showPagingControl:false
	});
 
    self.add(scrollView);
	
	scrollView.addEventListener('scroll', function(e) {
		alert(e.index);
		//switch
		//change buttons (show hide);
	});
	
	
	var topBar = new ActionBarView({
		pos: 'top',
		buttons: {
			snap: {
				title:'Register',
				width:120
			}
		}
	});

	self.add(topBar.viewProxy);
	
	topBar.addEventListener('buttonPress', function(e) {
		alert(e.index);
		//switch statement
		scrollView.scrollToView(e.index);
	});
	
	var bottomBar = new ActionBarView({
		pos: 'bottom',
		buttons: {
			snap: {
				title:'Forgotten Password',
				width:120
			}
		}
	});

	self.add(bottomBar.viewProxy);
	
	bottomBar.addEventListener('buttonPress', function(e) {
		alert(e.index);
		//switch statement
		scrollView.scrollToView(e.index);
	});
	
	return self;
};

module.exports = MasterView;