// JavaScript Document

	var _ = require('../../lib/thirdParty/underscore'),
	theme = require('../../lib/ti/theme'),
	ui = require('../../lib/ti/components'),
	parseapi = require('com.forge42.parseapi'),
	ActionBarView = require('../../ui/common/ActionBarView');
	
	Ti.API.info("module is => " + parseapi);

	var parse_module_debug_log = true;

	// Toggle Parse API Module Debugging Log Output
	parseapi.enableParseModuleDebugLog(parse_module_debug_log);
		
	parseapi.initParse( {
							applicationId: "q9LKm1Q0QwwuIIYw8uOLCZdS78mkuFprSpAIQ0gW",
	 						clientKey: "DMr6nSNnaH2nGhdf05AMTRjxmDSvng2Q4LnOYKsU"
						});	
	
	
	