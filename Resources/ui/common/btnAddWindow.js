function btnAddWindow() {

	Ti.include('../../lib/ti/global.js');
	Ti.include('../../ui/common/selectorActions.js');
	var ActionBarView = require('../../ui/common/ActionBarView');
	
	var self = new ui.Window({
		backgroundColor:'white',
		modal:true,
		navBarHidden:true
	});
	
	var SnapSelectorScrollableTableView = require('../../ui/common/SnapSelectorScrollableTableView');
	
	var SSSTableView = new SnapSelectorScrollableTableView();
	
	self.SnapView = SSSTableView;
	
	self.add(SSSTableView);
	
	self.SnapView.addEventListener('itemSelected', function(e) {
		doAction('Snap', e.id);
	});
	
	var topBar = new ActionBarView({
		type:'Pick a Snap',
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
			btnNote: {
				icon:'note',
				width:80
			},
			btnRefresh: {
				icon:'camera',
				width:80
			},
			btnTags: {
				icon:'voice',
				width:80
			},
			btnSearch: {
				icon:'video',
				width:80
			}
		}
	});

	self.add(bottomBar.viewProxy);
	
	bottomBar.addEventListener('buttonPress', function(e) {
		doAction('Snap',e.id);
	});

	return self;
}

module.exports = btnAddWindow;