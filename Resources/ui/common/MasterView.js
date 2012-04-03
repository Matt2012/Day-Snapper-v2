function MasterView() {
	
	var _ = require('../../lib/thirdParty/underscore'),
	theme = require('../../lib/ti/theme'),
	ui = require('../../lib/ti/components'),
	ActionBarView = require('../../ui/common/ActionBarView'),
	SnapView = require('../../ui/common/SnapView');
	
/*	var self = Ti.UI.createView({
		backgroundColor:'white'
	});*/
	
	var self = new ui.View({
		backgroundColor:'white'
	});
	
	
	var snapsTable = new SnapView();
	
	self.SnapView = snapsTable;
	
	self.add(snapsTable);
	
	var topBar = new ActionBarView({
		pos: 'top',
		buttons: {
			snap: {
				title:'Snap',
				width:80
			},
			settings: {
				icon:'../../images/14-gear@2x.png',
				width:40
			}
		}
	});

	self.add(topBar.viewProxy);
	
	topBar.addEventListener('buttonPress', function(e) {
		var Window = (e.id === 'snap') ? require('/ui/SnapWindow') : require('/ui/SettingsWindow');
		var w = new Window();
		w.open();
	});
	
	var bottomBar = new ActionBarView({
		pos: 'bottom',
		buttons: {
			snap: {
				title:'Search',
				width:80
			},
			settings: {
				icon:'../../images/14-gear@2x.png',
				width:40
			}
		}
	});

	self.add(bottomBar.viewProxy);
	
	bottomBar.addEventListener('buttonPress', function(e) {
		var Window = (e.id === 'snap') ? require('/ui/SnapWindow') : require('/ui/SettingsWindow');
		var w = new Window();
		w.open();
	});
	
	return self;
};

module.exports = MasterView;