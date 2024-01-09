//file containing the instruction functions 








instructionsFXCICR = ()=>{
	const pages = [
	
	"FXCICRInstructions/instruct-Welcome.html",
	"FXCICRInstructions/instruct-KeyMappingUntimed1.html",
	"FXCICRInstructions/instruct-KeyMappingReady.html",

	"FXCICRInstructions/instruct-KeyMappingUntimedRepeatPrompt1.html",

	"FXCICRInstructions/instruct-KeyMappingTimed1.html",



	"FXCICRInstructions/instruct-KeyMappingTest.html",	

	"FXCICRInstructions/instruct-interference1.html",
	"FXCICRInstructions/instruct-interference2.html",
	"FXCICRInstructions/instruct-interference3.html",
	"FXCICRInstructions/instruct-interferenceQ.html",

	"FXCICRInstructions/instruct-interval1.html",

	"FXCICRInstructions/instruct-efficacyHigh1.html",
	"FXCICRInstructions/instruct-efficacyHigh2.html",
	"FXCICRInstructions/instruct-efficacyHighQ.html",

	"FXCICRInstructions/instruct-efficacyLow1.html",
	"FXCICRInstructions/instruct-efficacyLow2.html",
	"FXCICRInstructions/instruct-efficacyLowQ.html",

	"FXCICRInstructions/instruct-EfficacyAll1.html",
	"FXCICRInstructions/instruct-EfficacyAll2.html",
	"FXCICRInstructions/instruct-EfficacyAll3.html",
	"FXCICRInstructions/instruct-EfficacyAllQ.html",

	"FXCICRInstructions/instruct-MainStart1.html",

	"FXCICRInstructions/instruct-break-LowEfficacyHighReward.html",
	"FXCICRInstructions/instruct-break-HighEfficacyHighReward.html",

	"FXCICRInstructions/instruct-break-LowEfficacyLowReward.html",
	"FXCICRInstructions/instruct-break-HighEfficacyLowReward.html",

	"FXCICRInstructions/instruct-ready.html",

	"stages/stage.html",
	"postTask.html",
	"bonusDisplay.html"
	];

	psiTurk.preloadPages(pages);



	const keyMappingUntimedInstructions = [
		"FXCICRInstructions/instruct-Welcome.html",
		"FXCICRInstructions/instruct-KeyMappingUntimed1.html",
		"FXCICRInstructions/instruct-KeyMappingReady.html",
		];
	
		const KeyMappingForwardPrompt = [
			
			"FXCICRInstructions/instruct-KeyMappingUntimedRepeatPrompt1.html",

			];
		

	const keyMappingTimedInstructions = [
		"FXCICRInstructions/instruct-KeyMappingTimed1.html",
	"FXCICRInstructions/instruct-KeyMappingReady.html"
	];
	
	

	const keyMappingTestInstructions = [
		"FXCICRInstructions/instruct-KeyMappingTest.html",
		"FXCICRInstructions/instruct-KeyMappingReady.html"
	
	];
	

	const interferenceInstructions = [
	"FXCICRInstructions/instruct-interference1.html",
	"FXCICRInstructions/instruct-interference2.html",
	"FXCICRInstructions/instruct-interference3.html",
	"FXCICRInstructions/instruct-interferenceQ.html",
	"FXCICRInstructions/instruct-ready.html"
	];


	const intervalInstructions = [
	"FXCICRInstructions/instruct-interval1.html",
	"FXCICRInstructions/instruct-ready.html"
	];

	const instructionEfficacyHighPages = [	
	"FXCICRInstructions/instruct-efficacyHigh1.html",
	"FXCICRInstructions/instruct-efficacyHigh2.html",
	"FXCICRInstructions/instruct-efficacyHighQ.html",
	"FXCICRInstructions/instruct-ready.html"
	];

	const instructionEfficacyLowPages = [
	"FXCICRInstructions/instruct-efficacyLow1.html",
	"FXCICRInstructions/instruct-efficacyLow2.html",
	"FXCICRInstructions/instruct-efficacyLowQ.html",
	"FXCICRInstructions/instruct-ready.html"
	];

	const instructionEfficacyALLPages = [
		"FXCICRInstructions/instruct-EfficacyAll1.html",
		"FXCICRInstructions/instruct-EfficacyAll2.html",
		"FXCICRInstructions/instruct-EfficacyAll3.html",
		"FXCICRInstructions/instruct-EfficacyAllQ.html",
		"FXCICRInstructions/instruct-ready.html"
		];
	
		
		const startGameInstructionsOrder1 = [
			"FXCICRInstructions/instruct-MainStart1.html",
			"FXCICRInstructions/instruct-break-HighEfficacyLowReward.html",
			"FXCICRInstructions/instruct-ready.html"
		];
		//return startGameInstructionsOrder

		const startGameInstructionsOrder2 = [
			"FXCICRInstructions/instruct-MainStart1.html",
			"FXCICRInstructions/instruct-break-LowEfficacyLowReward.html",
			"FXCICRInstructions/instruct-ready.html"
		];
		//return startGameInstructionsOrder

	

		const startGameInstructionsOrder3 = [
			"FXCICRInstructions/instruct-MainStart1.html",
			"FXCICRInstructions/instruct-break-LowEfficacyHighReward.html",
			"FXCICRInstructions/instruct-ready.html"
		];


		const startGameInstructionsOrder4 = [
			"FXCICRInstructions/instruct-MainStart1.html",
			"FXCICRInstructions/instruct-break-HighEfficacyHighReward.html",
			"FXCICRInstructions/instruct-ready.html"
		];
		
	


	


	const BreakRandomHighPage = [
		"FXCICRInstructions/instruct-break-LowEfficacyHighReward.html",
		"FXCICRInstructions/instruct-ready.html"
		
		];
		
		
		const BreakPerformanceHighPage = [
			"FXCICRInstructions/instruct-break-HighEfficacyHighReward.html",
			"FXCICRInstructions/instruct-ready.html"
		];
		
		
		const BreakRandomLowPage = [
		"FXCICRInstructions/instruct-break-LowEfficacyLowReward.html",
		"FXCICRInstructions/instruct-ready.html"
		];
		
		
		const BreakPerformanceLowPage = [
		"FXCICRInstructions/instruct-break-HighEfficacyLowReward.html",
		"FXCICRInstructions/instruct-ready.html"
		];

	return {pages,keyMappingUntimedInstructions,
		KeyMappingForwardPrompt,
		keyMappingTimedInstructions,
		keyMappingTestInstructions,
		interferenceInstructions,
		intervalInstructions,
		instructionEfficacyHighPages,
		instructionEfficacyLowPages,
		instructionEfficacyALLPages,
		startGameInstructionsOrder1,
		startGameInstructionsOrder2,
		startGameInstructionsOrder3,
		startGameInstructionsOrder4,
		BreakRandomHighPage,
		BreakPerformanceHighPage,
		BreakRandomLowPage,
		BreakPerformanceLowPage
	}



}




