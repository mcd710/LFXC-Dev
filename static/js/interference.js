//file for the functions to call for interference practice

console.log("inside interference.js file")


StroopPractice =(nextPractice) =>()=>{

	console.log('inside the StroopPractice')
	var stimSet = possibleStimsCongruent.concat(possibleStimsInCongruent);
	var stimSet = _.shuffle(repmat(stimSet,Math.ceil(numStroopPracticeTrials/stimSet.length)));

	var writeRecord = function(Record){

	 	Record.phase = "StroopPractice";
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
			var tempset = possibleStimsCongruent.concat(possibleStimsInCongruent);
			trial.stimSet = [tempset[randi(0,tempset.length-1)]];
			trial.initiation();
			return;
		}
		//what to do next
		//psiTurk.doInstructions(instruction3Pages,intervalPracticeProtector);
		blockPartGarden(nextPractice);
	};

	var callbacks = {
		endOfSetCallback:nextAction,
		tallyCallback:0,
		recordStimCallback:recordStimStroop,
		completeRecordCallback:writeRecord
	};
	var configParams = {space:false,accFeedback:true,washout:true};
	trialTimingParams.itiDuration = 500;
	trialTimingParams.feedbackDur = 750;
	
	psiTurk.showPage("stages/stage.html");
	var trial = new timedTrial(stimSet,[false],[0,0],trialTimingParams,'#m',callbacks,configParams);
	var experiment = document.getElementById('experiment');
	experiment.style.backgroundImage = "url('"+ gardenImage+ "')" ;
	experiment.style.backgroundSize = "cover"
	experiment.style.backgroundRepeat= 'no-repeat'
	if(garden){
		showBoard(3,10,2,10);
	}	$("body").unbind("keydown").focus().keydown(trial.responseListener.bind(trial));
	trial.initiation();
}


FruitInterferencePractice =(nextPractice) =>()=>{

	console.log('inside the FruitInterferencePractice')
	var stimSet = possibleStimsCongruent.concat(possibleStimsInCongruent);
	var stimSet = _.shuffle(repmat(stimSet,Math.ceil(numStroopPracticeTrials/stimSet.length)));

	var writeRecord = function(Record){

	 	Record.phase = "FruitInterferencePractice";
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
			var tempset = possibleStimsCongruent.concat(possibleStimsInCongruent);
			trial.stimSet = [tempset[randi(0,tempset.length-1)]];
			trial.initiation();
			return;
		}
		//what to do next
		//psiTurk.doInstructions(intervalInstructions,intervalPracticeGarden);
		blockPartGarden(nextPractice);
	};

	var callbacks = {
		endOfSetCallback:nextAction,
		tallyCallback:0,
		recordStimCallback:recordStimPWI,
		completeRecordCallback:writeRecord
	};
	var configParams = {space:false,accFeedback:true,washout:true};
	trialTimingParams.itiDuration = 500;
	psiTurk.showPage("stages/stage.html");

	showBoard = function(){
	console.log("inside showBoard")
	var element_stimuli = $("<img></img>").attr({src: "/static/images/Farmboard.png",id:'farmboard'});
	addElement(element_stimuli,'#background',center=true);
	}


	var trial = new timedTrial(stimSet,[false],[0,0],trialTimingParams,'#m',callbacks,configParams);
	showBoard()
	$("body").unbind("keydown").focus().keydown(trial.responseListener.bind(trial));
	trial.initiation();
	
}