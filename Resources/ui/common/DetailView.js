function DetailView() {
	
	//Ti.include('../../lib/thirdParty/moment.min.js');
	var moment = require('../../lib/thirdParty/moment.min');
	Ti.include('../../lib/ti/global.js');
	
	var self = Ti.UI.createScrollView({
		backgroundColor:'#CCCCCC',
        layout: 'vertical'
	});
	
	var lbTitle = Ti.UI.createLabel({
		top:65,
		bottom:65,
		left:20,
		height:'auto',
		width:'auto',
		color:'#000'
	});
	self.add(lbTitle);
	
	
/*	var lbUser = Ti.UI.createLabel({
		height:'auto',
		width:'auto',
		top:10,
		left:20,
		color:'#000'
	});
	self.add(lbUser);*/
	
	var lbDate1 = Ti.UI.createLabel({
		height:'auto',
		width:'auto',
		top:10,
		left:20,
		color:'#000'
	});
	self.add(lbDate1);
	
/*	var lbDate2 = Ti.UI.createLabel({
		height:'auto',
		width:'auto',
		top:10,
		left:20,
		color:'#000'
	});
	self.add(lbDate2);*/
	
	self.addEventListener('itemSelected', function(e) {
		var d0 = moment(e.snap.dateFor);
		var d3 = d0.format("dddd, MMMM Do YYYY, h:mm a");
		lbTitle.text = e.snap.title;
		//lbUser.text = e.snap.userID;
		lbDate1.text = d3;
	});
	
	return self;
};

module.exports = DetailView;
