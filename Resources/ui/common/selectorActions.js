function doAction(which, btnAction, self)
{
	if(which=='Snap')
	{
		SnapAction(btnAction, self);
	}
	else if(which=='TagOpts')
	{
		TagOpts(btnAction);
	}
	else
	{
		//which == tag
		Tag(btnAction);
	}
}

function TagOpts(btnAction)
{
	alert("Tag Options: " + btnAction + ", coming soon.");
}

function Tag(btnAction)
{
	alert("Tag Sort: " + btnAction + ", coming soon.");
}

function SnapAction(btnAction, self)
{
	//alert(btnAction);
	switch(btnAction)
	{
		case'btnNote':
			openSnapWindow(btnAction, self)
		break;
		case'btnCamera':
			openCamera();
		break;
		case'btnGallery':
			openOther();
		break;
		case'btnVideo':
			openOther();
		break;
		case'btnVideo':
			openOther();
		break;
		case'btnBlog':
			openOther();
		break;
		default:
			openOther();
		break;
	}
}

function openCamera() {
	
		alert('open Carmera');
}

function openGallery() {
	
		alert('open Gallery');
}

function openOther() {
	
		alert('This Snap Coming Soon');
}

function openNote() {
	
		alert('This Note Coming Soon');
}

function openSnapWindow(btnAction, self)
{
	var url = '/ui/common/doSnapSection/'+btnAction+'Snap';
	var masterModal = require(url);
	var w = masterModal();
		
	w.addEventListener('saveSnapAndRefresh_step1', function(newSnap) {
		self.fireEvent('saveSnapAndRefresh_step2',newSnap);
		self.close();
	});
	
	w.open();
}