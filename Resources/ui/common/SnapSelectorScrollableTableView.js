function SnapSelectorScrollableTableView() {
	
	var self = Ti.UI.createView({
		backgroundColor:'#FFFFFF',
		top:44,
		height:375
	});

	var ar = [{"title":"Quick Note", "id":"btNote"},
		{"title":"Photo Snap", "id":"btn"},
		{"title":"Voice Snap", "id":"btn"},
		{"title":"Video Snap", "id":"btn"},
		{"title":"Snap from Gallery", "id":"btn"},
		{"title":"Public Blog Snap", "id":"btn"},
		{"title":"Private Diary Snap", "id":"btn"},
		{"title":"Make a DooBee Snap", "id":"btn"},
		{"title":"Quick Location Snap", "id":"btn"}
		];
		
	var table = Ti.UI.createTableView({
		data:ar,
		height:375,
		color:'#999'
	});
	self.add(table);
	
	//add behavior
	table.addEventListener('click', function(e) {
		//alert(e.rowData.title);
		self.fireEvent('itemSelected', {
			name:e.rowData.title,
			id:e.rowData.id
		});
	});
	
	return self;
};

module.exports = SnapSelectorScrollableTableView;