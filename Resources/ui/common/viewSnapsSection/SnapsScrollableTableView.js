function SnapView() {
	
	Ti.include('../../../lib/ti/global.js');	
	Ti.include('../../../lib/thirdParty/taffy.js');	
	parseapi = require('com.forge42.parseapi');
	
	var self = Ti.UI.createView({
		backgroundColor:'#FFFFFF',
		top:44,
		height:375
	});
	
	var user = parseapi.PFUserCurrentUser();

	var mySnapsDB = TAFFY( TAFFY.loadFlatFile('snapsLatest.json') );
	
	//mySnapsDB().remove();
	
	var c = mySnapsDB().count();
	
	Ti.API.info('-----------------------------------------------------count:'+ c);
	//if first time
	if (c<1 || !c) {		
		//some dummy data if empty
		var d1 = new Date().toISOString();
		var rightImage = iconPath('note','bottom');
		// user.objectForKey("username")
		var defaultsDD = {"dateAdded":d1, "dateUpdated":d1, "dateFor":d1, "status":"live", "hasChild":true, "userID":user.objectId,"rightImage":rightImage,"category":"note"};
		var r1 = {"title":"Welcome to Day Snapper."};
		var r2 = {"title":"A short note about Tiny.coop."};
		_.extend(r1, defaultsDD);
		_.extend(r2, defaultsDD);
		var ar = [r1,r2];
		var snaps = TAFFY ( ar );
	    snaps.saveFlatFile('snapsLatest.json');
	    Ti.API.info('fresh');
	}
	else
	{
		Ti.API.info('not fresh');
		mySnapsDB.saveFlatFile('snapsLatest.json');
	}
	var mySnapsDB = TAFFY( TAFFY.loadFlatFile('snapsLatest.json') );
	
	var y = mySnapsDB({status:"live"}).get();
	//var y = mySnapsDB().get();
		
	var table = Ti.UI.createTableView({
		data:y,
		height:375,
		color:'#999'
	});
	self.add(table);
	
	//add behavior
	table.addEventListener('click', function(e) {
		//alert(e.rowData.title);
		self.fireEvent('itemSelected', {
			snap:e.rowData
		});
	});
	
	
	self.addEventListener('saveSnapAndRefresh_step4', function(newSnap) {
		var mySnapsDB = TAFFY( TAFFY.loadFlatFile('snapsLatest.json') );
		var d1 = new Date().toISOString();
		//var leftIcon = iconPath(newSnap,'bottom');
		var defaults = {"hasChild":true,"status":"live","isPrivate":true,"price":"1.99","dateAdded":d1,"dateUpdated":d1,"dateFor":d1,"userID":user.objectId};
		_.extend(newSnap, defaults);
		//alert(JSON.stringify(newSnap));
		mySnapsDB.insert(newSnap);
		mySnapsDB.saveFlatFile('snapsLatest.json');
		var y = mySnapsDB({status:"live"}).get();
		table.data = y;
		//return false;
	});
	
	return self;
};

module.exports = SnapView;