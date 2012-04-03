/**
 * Aaron K Saunders
 * Clearly Innovative Inc 2011
 * blog.clearlyinnovative.com
 *
 * Cocoafish + Appcelerator Module iOS AND Android Example Code
 */
// TODO: write your module tests here
var options, cocoaFish, cocoafishMgr = require('com.ci.cocoafish');
Ti.API.info("module is => " + cocoafishMgr);
options = {
	"consumer_key" : "xxxxxxxxxxxxxxxxxxxxxxxx",
	"secret_key" : "xxxxxxxxxxxxxxxxxxxxxxxxxx"
};

if(Ti.Platform.name == "android") {
	cocoaFish = cocoafishMgr.createCocoaFishMgr(options);
} else {
	cocoaFish = cocoafishMgr.create(options);
}
Ti.API.info("proxy is => " + cocoaFish);

cocoaFish.apiCall({
	"baseUrl" : "users/login.json",
	"httpMethod" : "POST",
	"params" : {
		"login" : "aaron@clearlyinnovative.com",
		"password" : "password"
	},
	success : function(d) {
		Ti.API.info("responseText is => " + d.responseText);
		Ti.API.info("metaDataText is => " + d.metaDataText);

		// get user photos
		var obj = JSON.parse(d.responseText);
		//getPhotos(obj.users[0].id);
		uploadPhoto();
	},
	error : function(d) {
		Ti.API.info("error is => " + d.errorText);
	}
});

function getPhotos(user_id) {
	cocoaFish.apiCall({
		"baseUrl" : "photos/search.json",
		"httpMethod" : "GET",
		"params" : {
			"user_id" : user_id
		},
		success : function(d) {
			Ti.API.info("responseText is => " + d.responseText);
			Ti.API.info("metaDataText is => " + d.metaDataText);
			uploadPhoto();
		},
		error : function(d) {
			Ti.API.info("error is => " + d.errorText);
		}
	});

}

function uploadPhoto() {

    Titanium.Media.showCamera({
    
        success:function(event)
        {
            var cropRect = event.cropRect;
            var image = event.media;
            
            Ti.API.info("event is => " + JSON.stringify(event));
            Ti.API.info("event.media is => " + JSON.stringify(event.media));
            Ti.API.info("event.media.nativePath is => " + event.media.nativePath);
            
            cocoaFish.apiCall({
                "baseUrl" : "photos/create.json",
                "httpMethod" : "POST",
                "params" : {
                    "photo" : event.media.nativePath,
                    "tags" : "aaron, nativeAndroid, fileObject"
                },
                "success" : function(d) {
                    Ti.API.info("uploadPhoto: responseText is => " + d.responseText);
                    Ti.API.info("uploadPhoto: metaDataText is => " + d.metaDataText);
                    alert("Success");
                },
                "error" : function(d) {
                    Ti.API.error("uploadPhoto: error is => " + d.errorText);
                }
            });
            
        },
        cancel:function()
        {
    
        },
        error:function(error)
        {
            // create alert
            var a = Titanium.UI.createAlertDialog({title:'Camera'});
    
            // set message
            if (error.code == Titanium.Media.NO_CAMERA)
            {
                a.setMessage('Device does not have video recording capabilities');
            }
            else
            {
                a.setMessage('Unexpected error: ' + error.code);
            }
    
            // show alert
            a.show();
        },
        allowEditing:true
    });

}