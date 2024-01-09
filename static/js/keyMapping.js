//file for the functions to call for keyMapping practice





unTimedColorMappingPractice = (nextPractice)=>()=>{

	var configParams = {space:false,accFeedback:true,washout:true};
	var stimSet = _.shuffle(repmat(possibleStimsNeutral,Math.ceil(numUntimedColorPracticeTrials/possibleStimsNeutral.length)));
	
	var writeRecord = function(Record){

	 	Record.phase = "unTimedColorMappingPractice";
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
			trial.stimSet = [possibleStimsNeutral[randi(0,possibleStimsNeutral.length-1)]];
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

	var trial = new Trial(stimSet,[false],[0,0],trialTimingParams,'#m',callbacks,configParams);
	psiTurk.showPage("stages/stage.html");
	var experiment = document.getElementById('experiment');
	experiment.style.backgroundImage = "url('"+ gardenImage+ "')" ;
	experiment.style.backgroundSize = "cover"
	experiment.style.backgroundRepeat= 'no-repeat'
	if(garden){
		showBoard(3,10,2,10);
	}	$("body").unbind("keydown").focus().keydown(trial.responseListener.bind(trial));
	trial.initiation();
}


ColorMappingPractice = (nextPractice)=>()=>{

	//console.log('inside the ColorMappingPractice')
	var configParams = {space:false,accFeedback:true,washout:true};
	console.log("possibleStimsNeutral is" + possibleStimsNeutral)
	var stimSet = _.shuffle(repmat(possibleStimsNeutral,Math.ceil(numColorPracticeTrials/possibleStimsNeutral.length)));
	
	var writeRecord = function(Record){

	 	Record.phase = "ColorMappingPractice";
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
			trial.stimSet = [possibleStimsNeutral[randi(0,possibleStimsNeutral.length-1)]];
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
	var experiment = document.getElementById('experiment');
	experiment.style.backgroundImage = "url('"+ gardenImage+ "')" ;
	experiment.style.backgroundSize = "cover"
	experiment.style.backgroundRepeat= 'no-repeat'
	if(garden){
		showBoard(3,10,2,10);
	}	$("body").unbind("keydown").focus().keydown(trial.responseListener.bind(trial));
	trial.initiation();
}



ColorMappingTest = (nextPractice)=>()=>{

	//console.log('inside the ColorMappingPractice')
	var configParams = {space:false,accFeedback:false,washout:true};
	console.log("possibleStimsNeutral is" + possibleStimsNeutral)
	var stimSet = _.shuffle(repmat(possibleStimsNeutral,Math.ceil(numcolorTest/possibleStimsNeutral.length)));
	
	var writeRecord = function(Record){

	 	Record.phase = "ColorMappingTest";
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
			trial.stimSet = [possibleStimsNeutral[randi(0,possibleStimsNeutral.length-1)]];
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

	var trial = new Trial(stimSet,[false],[0,0],trialTimingParams,'#m',callbacks,configParams);
	psiTurk.showPage("stages/stage.html");
	var experiment = document.getElementById('experiment');
	experiment.style.backgroundImage = "url('"+ gardenImage+ "')" ;
	experiment.style.backgroundSize = "cover"
	experiment.style.backgroundRepeat= 'no-repeat'
	if(garden){
		showBoard(3,10,2,10);
	}
	$("body").unbind("keydown").focus().keydown(trial.responseListener.bind(trial));
	trial.initiation();
}



