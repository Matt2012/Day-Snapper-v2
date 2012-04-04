function MasterView() {
	
	Ti.include('../../lib/ti/global.js');
	var ActionBarView = require('../../ui/common/ActionBarView');
	
	var self = new ui.View({
		backgroundColor:'white'
	});
	
	var SnapView = require('../../ui/common/SnapView');
	
	var snapsTable = new SnapView();
	
	self.SnapView = snapsTable;
	
	self.add(snapsTable);
	
	var topBar = new ActionBarView({
		pos: 'top',
		buttons: {
			settings: {
				icon:'gear',
				width:40
			}
		}
	});

	self.add(topBar.viewProxy);
	
	topBar.addEventListener('buttonPress', function(e) {
		alert(e.id);
		//open settings window
	});
	
	var bottomBar = new ActionBarView({
		pos: 'bottom',
		buttons: {
			btnAdd: {
				icon:'plus',
				width:80
			},
			btnRefresh: {
				icon:'sync',
				width:80
			},
			btnTags: {
				icon:'tag',
				width:80
			},
			btnSearch: {
				icon:'search',
				width:80
			}
		}
	});

	self.add(bottomBar.viewProxy);
	
	bottomBar.addEventListener('buttonPress', function(e) {

		var btnAction = e.id;
		if(btnAction == 'search')
		{
			//hide drop down
			
			//show search (add view)
			
		}
		else
		{
/*			var Window = require();
			var w = new ui.Window({
				navBarHidden:true,
				
				modal:true
			});
			w.open();*/
			
			
			var dialog = Titanium.UI.createOptionDialog({
    title: 'Hello',
    options: ['Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2','Option 1','Option 2'],
    cancel:1
});
dialog.show();
	
			
/*			var PopUp = require('/ui/common/dialog/'+btnAction+'Window');
			
			var popupView = new PopUp();
			
			self.add(popupView);*/


		}
		
		

	});
	
	return self;
};

module.exports = MasterView;