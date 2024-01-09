var blockPartProtector = function(){



	var configParams = {space:false,accFeedback:false,washout:false,tally:true};

	if(blockID == numBlock) {
		Questionnaire_Gain_Low();
		return;
	}

	blockID++;
	var blockType = blockSequence.shift();
	var cueSubset = cues[blockType];

	if(blockID > numBlock) {sessionID++;blockID = 1;}

	var displayFeedback = function(tag,interval)
	{
		var counter = interval.getCounter();
		var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * interval.counter[0];
		if(numSign[interval.cueType]<0) score = Math.max(score,0);
		$(tag).append($("<p></p>").attr({id:'intervalMsg'}).html(heading[interval.cueType] +
			score.toFixed(0)));
		$("#intervalMsg").css('margin-top','0px');
	}

	var cleanFeedback = function(){$("#intervalMsg").remove();}

	var showScore = function(tag,cueType)
	{
		var showScoreInTag = function(counter){
			$("#scoreCounter").remove();
			var score = initialBonus[cueType] + numSign[cueType] * values[cueType] * counter[0];
			if(numSign[cueType]<0) score = Math.max(score,0);
			$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(heading[cueType] + score.toFixed(0)));
			//$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(counter[0].toFixed(0)));
			$("#scoreCounter").css('margin-top','0px');
		};
		return showScoreInTag;
	}

	var cleanTally = function(){
		$('#scoreCounter').remove();
	}


	var PracticeSession = function(isGain){
		/*** The cues are specified as [path,cueType] ***/
		var intervalDurationSet = _.shuffle(repmat(intervalDurations,Math.ceil(numGainLossPractice/intervalDurations.length)));
		var itiDurationSet = _.shuffle(repmat(itiDurations,Math.ceil(numGainLossPractice/itiDurations.length)));
		var isiDurationSet = _.shuffle(repmat(isiDurations,Math.ceil(numGainLossPractice/isiDurations.length)));
		if(isGain == 1)
			subCueSet = cues['collector'];
		else
			subCueSet = cues['protector'];

		var cueSet = _.shuffle(repmat(subCueSet,Math.ceil(numGainLossPractice/subCueSet.length)));
		var intervalID = 0;
		var interval = 0;

		var Loop = function(){

			intervalID++;
			

			var calculateBonus = function(Interval)
			{
				var bonus = 0;
				return bonus;
			};

			intervalTimingParams.intervalDur = intervalDurationSet.shift();
			intervalTimingParams.itiDuration = itiDurationSet.shift();
			intervalTimingParams.isiDuration = isiDurationSet.shift();

			var writeRecord = function(Record){
				if(isGain == 1)
					Record.phase = "GainPractice";
				else
					Record.phase = "LossPractice";
			 	
			 	Record.sessionNum = NaN;
			 	Record.blockNum = NaN;
			 	Record.intervalNum = intervalID;
			 	Record.intervalType = cue[1];
			 	Record.intervalLength = intervalTimingParams.intervalDur;
			 	psiTurk.recordTrialData(Record);
			};

			var callbacks = {
				endCallback:Loop,
				displayFeedback:displayFeedback,
				cleanFeedback:cleanFeedback,
				tallyCallback:showScore,
				recordStimCallback:recordStimStroop,
				writeRecord:writeRecord,
				calculateBonus:calculateBonus,
				cleanTally:cleanTally
			};

			var cue = cueSet.shift();
			
			if(intervalID > numGainLossPractice) 
			{
				if(isGain == 1)
				{
					returnToInstructCallback = function(){psiTurk.doInstructions(instructionLossPages,LossPractice);};
					psiTurk.doInstructions(instructionLossPages,LossPractice);
				}
				else psiTurk.doInstructions(postPracticeBreak,MainPart);

			}
			else
			{
				var stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);
				interval = new Interval(intervalTimingParams,htmlParams,cue,trialTimingParams,configParams,stimSet,callbacks);
				psiTurk.showPage("stage.html");
				interval.initiate();
			}
		}
		Loop();
	}

	var GainPractice = function(){
		returnToInstructCallback = function(){psiTurk.doInstructions(instructionGainPages,GainPractice);};
		PracticeSession(1);
	}

	var LossPractice = function(){
		returnToInstructCallback = function(){psiTurk.doInstructions(instructionLossPages,LossPractice);};
		PracticeSession(0);
	}

	var MainPart = function(){

		var intervalID = 0;
		var itiDurationSet = _.shuffle(repmat(itiDurations,Math.ceil(numIntervalPerBlock/itiDurations.length)));
		var isiDurationSet = _.shuffle(repmat(isiDurations,Math.ceil(numIntervalPerBlock/isiDurations.length)));

		//Set up the sequence within the block.
		var indexList = [];
		var cueList = [];
		var intervalDurationList = [];

		for(var m = 0; m < numIntervalPerBlock/(cueSubset.length * intervalDurations.length); m++)
		{
			for(var j = 0; j < intervalDurations.length; j++)
			{
				for(var i = 0; i < cueSubset.length; i++)
				{
					cueList.push(cueSubset[i]);
					intervalDurationList.push(intervalDurations[j]);
				}
			}
		}
		if(blockID%2==0)
		{
			var selectedMask = [1,1];
			selectedMask = selectedMask.concat(repmat([0],numIntervalPerBlock - 2));
		}
		else
		{
			var selectedMask = [1,1];
			selectedMask = selectedMask.concat(repmat([0],numIntervalPerBlock - 2));			
		}



		for(var n = 0; n < numIntervalPerBlock; n++)
		{
			indexList.push(n);
		}

		indexList = _.shuffle(indexList);

		//var partSelected = selectedBlockList.shift();
		//cueList = _.shuffle(cueList);
		//intervalDurationList = _.shuffle(intervalDurationList);

		var Loop = function(){
			//intervalTimingParams.intervalDur = intervalDurationSet.shift();
			intervalTimingParams.itiDuration = itiDurationSet.shift();
			intervalTimingParams.isiDuration = isiDurationSet.shift();
			var selected;
			var cue;
			var bonused;

			//console.log(selectedMask);
			
			intervalID++;
			if(intervalID <= numIntervalPerBlock){
				selected = indexList.shift()
				cue = cueList[selected];
				intervalTimingParams.intervalDur = intervalDurationList[selected];
				bonused = selectedMask[selected];
				//console.log(selected)
				//console.log(bonused);
			}
			//console.log(bonused)

			

			var calculateBonus = function(Interval)
			{
				var counter = Interval.getCounter();
				var bonus = counter[0] * values[Interval.cueType] * bonused * price;
				//console.log(bonused);
				//console.log(bonus);
				return bonus;
			};

			var writeRecord = function(Record){

			 	Record.phase = "MainBlock";
			 	Record.sessionNum = sessionID;
			 	Record.blockNum = blockID;
			 	Record.intervalNum = intervalID;
			 	Record.intervalType = cue[1];
			 	Record.intervalLength = intervalTimingParams.intervalDur;
			 	psiTurk.recordTrialData(Record);
			};



			var callbacks = {
				endCallback:Loop,
				displayFeedback:displayFeedback,
				cleanFeedback:cleanFeedback,
				tallyCallback:showScore,
				recordStimCallback:recordStimStroop,
				writeRecord:writeRecord,
				calculateBonus:calculateBonus,
				cleanTally:cleanTally
			};



			if(intervalID > numIntervalPerBlock) blockPart();
			else {
				var stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);
				interval = new Interval(intervalTimingParams,htmlParams,cue,trialTimingParams,configParams,stimSet,callbacks);
				psiTurk.showPage("stage.html");
				interval.initiate();
			}
		}

		returnToInstructCallbackBreak = function(){psiTurk.doInstructions(breakForBlockType[blockType],Loop);};
		psiTurk.doInstructions(breakForBlockType[blockType],Loop);

	}
	if(blockID == 1) {
		returnToInstructCallback = function(){psiTurk.doInstructions(instructionGainPages,GainPractice);};
		returnToInstructCallbackMain = function(){psiTurk.doInstructions(postPracticeBreak,MainPart);};
		psiTurk.doInstructions(instructionGainPages,GainPractice);
	}
	else MainPart();
}



// var blockPartGarden = function(practiceNext){

// 	// if (blockID== 0){var practiceCur=true}

// 	// if(practiceCur){

// 	// }else{
// 	// 	blockID++;
// 	// 	var blockType = blockSequence.shift();
// 	// 	var cueSubset = cues[blockType];
// 	// }
	
	
// 	if(blockID == numBlock) {
// 		Questionnaire_Gain_Low();
// 		return;
// 	}

// 	if(blockID > numBlock) {sessionID++;blockID = 1;}

// 	var GainPractice = function(){
// 		console.log("practiceType is" +practiceType)
// 		console.log("practiceNext is" +practiceNext)
// 		returnToInstructCallback = function(){psiTurk.doInstructions(instructionGainPages,GainPractice);};
// 		practiceBlocksGarden(practiceType,practiceNext);
// 	}

// 	var LossPractice = function(){
// 		console.log("practiceType is" +practiceType)
// 		console.log("practiceNext is" +practiceNext)
// 		returnToInstructCallback = function(){psiTurk.doInstructions(instructionLossPages,LossPractice);};
// 		practiceBlocksGarden(practiceType,practiceNext);
// 	}


// 		switch(practiceNext) {

// 		  case 'keymapping':
// 		    practiceNext = 'interference'
// 		    psiTurk.doInstructions(keyMappingInstructions,FruitMappingPractice(practiceNext));

// 		    break;
// 		  case 'interference':
// 		    practiceNext = 'interval'
// 		    psiTurk.doInstructions(interferenceInstructions,FruitInterferencePractice(practiceNext));

// 		    break;
// 		  case 'interval':
// 		    practiceNext = 'gain'
// 		    psiTurk.doInstructions(intervalInstructions,intervalPracticeGarden(practiceNext));

// 		    break;
// 		  case 'gain':
// 		    practiceNext = 'loss'
// 		    practiceType = 'gain'
// 		    psiTurk.doInstructions(instructionGainPages,GainPractice);

// 		    break;
// 		  case 'loss':
// 		    practiceNext = 'mainStart'
// 		    practiceType = 'loss'
// 		    practiceCur = false
// 		    psiTurk.doInstructions(instructionLossPages,LossPractice);

// 		    break;
// 		  case 'mainStart':
// 		  	practiceNext = 'MainTask'
// 		  	blockID++;
// 			var blockType = blockSequence.shift();
// 			var cueSubset = cues[blockType];
// 		    psiTurk.doInstructions(startGameInstructions,MainPartGarden(blockType,cueSubset))
		    
// 		    break;
// 		  case 'MainTask':
// 		  	blockID++;
// 		  	practiceNext = 'MainTask'
// 		  	var blockType = blockSequence.shift();
// 			var cueSubset = cues[blockType];
// 		   	MainPartGarden(blockType,cueSubset);
		    
// 		    break;

// 		}
		






// }


