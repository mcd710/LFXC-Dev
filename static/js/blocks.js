


blocksEfficacyRewardPreTMS= (game)=> {
	
	var blockseq1 =['performanceLow','randomHigh','randomLow','performanceHigh','performanceLow','randomHigh','randomLow','performanceHigh'];
	var blockseq2 = ['randomLow','performanceHigh','performanceLow','randomHigh','randomLow','performanceHigh','performanceLow','randomHigh'];
	
	var blockseq3 = ['randomHigh','performanceLow','performanceHigh','randomLow','randomHigh','performanceLow','performanceHigh','randomLow'];
	var blockseq4 = ['performanceHigh','randomLow','randomHigh','performanceLow','performanceHigh','randomLow','randomHigh','performanceLow'];

	var blockseq5 = ['performanceLow','randomHigh','performanceHigh','randomLow','performanceLow','randomHigh','performanceHigh','randomLow'];
	var blockseq6 = ['randomLow','performanceHigh','randomHigh','performanceLow','randomLow','performanceHigh','randomHigh','performanceLow'];
	
	var blockseq7 = ['randomHigh','performanceLow','randomLow','performanceHigh','randomHigh','performanceLow','randomLow','performanceHigh'];
	var blockseq8 = ['performanceHigh','randomLow','performanceLow','randomHigh','performanceHigh','randomLow','performanceLow','randomHigh'];

	var blockSequence;

	const highValue = 10;
	const lowValue = 1;
	const values = {random_low:lowValue,random_high:highValue,performance_low:lowValue,performance_high:highValue};
	const heading = {random_low:'Random: + ',random_high: 'Random: + ',performance_low:'Random: + ', performance_high:'Random: + '};
	const tallyHeading = {random_low:'Performance: + ',random_high: 'Performance: + ',performance_low:'Performance: + ', performance_high:'Performance: + '};
	const numSign = {random_low:1,random_high:1,performance_low:1,performance_high:1};
	const initialBonus = {random_low:0,random_high:0,performance_low:0,performance_high:0};
	var breakForBlockType = {randomLow:BreakRandomLowPage,performanceLow:BreakPerformanceLowPage,
	randomHigh:BreakRandomHighPage,performanceHigh:BreakPerformanceHighPage};

	switch(game){
		case '1':
			blockSequence =blockseq1
			break;
		case '2':
			blockSequence =blockseq2
			break;
		case '3':
			blockSequence =blockseq3
			break;
		case '4':
			blockSequence =blockseq4
			break;
		case '5':
			blockSequence =blockseq5
			break;
		case '6':
			blockSequence =blockseq6
			break;
		case '7':
			blockSequence =blockseq7
			break;
		case '8':
			blockSequence =blockseq8
			break;
	}
	return {
		blockSequence,
		highValue,
		lowValue,
		values,
		heading,
		tallyHeading,
		numSign,
		initialBonus,
		breakForBlockType
	}


}

