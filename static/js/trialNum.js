setTrialNumByMode= (mode)=>{

	if(test)
	{
		console.log("inside testmode")
		const numUntimedColorPracticeTrials = 8;

		const numColorPracticeTrials = 2;
		const numStroopPracticeTrials = 2;
		const numautomaticityTest =16;
		const numcolorTest =16;

		const numIntervalTrials = 30;
		const numIntervalPractice = 2;
		const numGainLossPractice = 2;
		
		const numBlock = 8;
		const numIntervalPerBlock = 4;
		const selectPerBlock = 1;
		const initialFundForLoss = 600;
		
		return{
			numUntimedColorPracticeTrials,
		numColorPracticeTrials,
		numStroopPracticeTrials,
		numautomaticityTest,
		numcolorTest,
		numIntervalTrials, 
		numIntervalPractice,
		numGainLossPractice,
		numBlock, 
		numIntervalPerBlock,
		selectPerBlock, 
		initialFundForLoss}
	}
	else
	{
		console.log("inside realmode")
		const numUntimedColorPracticeTrials = 8;
		const numColorPracticeTrials = 24;
		const numStroopPracticeTrials = 48;
		const numcolorTest =16;

		const numIntervalTrials = 30;
		const numIntervalPractice = 2;
		const numGainLossPractice = 4;
		
		const numBlock = 8;
		const numIntervalPerBlock = 16;
		const selectPerBlock = 2;
		const initialFundForLoss = 1200;

		return{
			numUntimedColorPracticeTrials,
		numColorPracticeTrials,
		numStroopPracticeTrials,
		numcolorTest,
		numIntervalTrials, 
		numIntervalPractice,
		numGainLossPractice,
		numBlock, 
		numIntervalPerBlock,
		selectPerBlock, 
		initialFundForLoss}
	}
	console.log("outside modes")
	

}

