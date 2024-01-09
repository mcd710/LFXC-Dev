
WordAutomaticityPractice = (nextPractice)=>()=>{

	console.log('inside the WordAutomaticityPractice')
	var configParams = {space:false,accFeedback:true,washout:true};
	console.log("possibleStimsAutomatic is" + possibleStimsAutomatic)
	var stimSet = _.shuffle(repmat(possibleStimsAutomatic,Math.ceil(numColorPracticeTrials/possibleStimsAutomatic.length)));
	
	var writeRecord = function(Record){

	 	Record.phase = "WordAutomaticityPractice";
	 	Record.sessionNum = NaN;
	 	Record.blockNum = NaN;
	 	Record.intervalNum = NaN;
	 	Record.intervalType = NaN;
	 	Record.intervalLength = NaN;
	 	Record.moneyEarned = NaN;
	 	psiTurk.recordTrialData(Record);
	};

	var nextAction = function(trial){
		if(trial.counter[0] < 5){
			trial.stimSet = [possibleStimsAutomatic[randi(0,possibleStimsAutomatic.length-1)]];
			trial.initiation();
			return;
		}
		//what to do after the Color mapping practice
		blockPartGarden(nextPractice);
	}

	var callbacks = {
		endOfSetCallback:nextAction,
		tallyCallback:0,
		recordStimCallback:recordStimStroop,
		completeRecordCallback:writeRecord
	};
	
	trialTimingParams.itiDuration = 500;
	trialTimingParams.feedbackDur = 750;

	var trial = new timedTrial(stimSet,[false],[0,0],trialTimingParams,'#m',callbacks,configParams);
	psiTurk.showPage("stages/stage.html");
	showBoard()
	$("body").unbind("keydown").focus().keydown(trial.responseListener.bind(trial));
	trial.initiation();
}

WordAutomaticityTest = (nextPractice)=>()=>{

	console.log('inside the WordAutomaticityTest')
	var configParams = {space:false,accFeedback:false,washout:true};
	console.log("possibleStimsAutomatic is" + possibleStimsAutomatic)
	var stimSet = _.shuffle(repmat(possibleStimsAutomatic,Math.ceil(numautomaticityTest/possibleStimsAutomatic.length)));
	
	var writeRecord = function(Record){

	 	Record.phase = "WordAutomaticityTest";
	 	Record.sessionNum = NaN;
	 	Record.blockNum = NaN;
	 	Record.intervalNum = NaN;
	 	Record.intervalType = NaN;
	 	Record.intervalLength = NaN;
	 	Record.moneyEarned = NaN;
	 	psiTurk.recordTrialData(Record);
	};

	var nextAction = function(trial){
		if(trial.stimSet.length > 0){
			trial.stimSet = [possibleStimsAutomatic[randi(0,possibleStimsAutomatic.length-1)]];
			trial.initiation();
			return;
		}
		//what to do after the Color mapping practice
		blockPartGarden(nextPractice);
	}

	var callbacks = {
		endOfSetCallback:nextAction,
		tallyCallback:0,
		recordStimCallback:recordStimStroop,
		completeRecordCallback:writeRecord
	};
	
	trialTimingParams.itiDuration = 500;
	trialTimingParams.feedbackDur = 750;

	var trial = new timedTrial(stimSet,[false],[0,0],trialTimingParams,'#m',callbacks,configParams);
	psiTurk.showPage("stages/stage.html");
	showBoard()
	$("body").unbind("keydown").focus().keydown(trial.responseListener.bind(trial));
	trial.initiation();
}