

function doAction(which, btnAction)
{
	if(which=='Snap')
	{
		SnapAction(btnAction);
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

function SnapAction(btnAction)
{
	switch(btnAction)
	{
		case'btnNote':
			openOther();
		break;
		case'btnCamera':
			openCamera();
		break
		case'btnGallery':
			openOther();
		break
		case'btnNote':
			openOther();
		break
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