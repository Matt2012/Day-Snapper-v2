// JavaScript Document

function textSettingWindow(opts, self)
{
	var ActionBarView = require('../../ui/common/ActionBarView');
	
	var textWin = Titanium.UI.createWindow({
		modal:true,
		navBarHidden:true,
		backgroundColor:'#fff'
	});
	
	var topBar = new ActionBarView({
		type:opts.winTitle,
		pos: 'top'
	});

	textWin.add(topBar.viewProxy);

	 var label = Ti.UI.createLabel({
		top: 55, left: 10, right: 10, height:40,
		text : opts.tfLabel,
		color: 'black'
	});
	textWin.add(label);

	var tf1 = Ti.UI.createTextField({
		value: Titanium.App.Properties.getString(opts.tfValue, ''),
		keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,
		top: 100, left: 10, right: 10, height:40
	});
	textWin.add(tf1);

	var btn = Ti.UI.createButton({
		title: 'Close',
		top: 150, left: 10, right: 10, height:40
	});

	btn.addEventListener("click", function(e) {
		if(opts.updateID)
		{
			self.myDesc[ opts.updateID ].text = tf1.value;
		}
		Titanium.App.Properties.setString(opts.tfValue, tf1.value);
		textWin.close();
	});
	textWin.add(btn);

	textWin.open({animated:true});
}