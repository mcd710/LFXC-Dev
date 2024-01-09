




// practiceBlocksGardenPointsStroop =(practiceType,nextPractice) =>()=>{

// 	var configParams = {space:false,accFeedback:false,washout:false,tally:true};

// 	/*** The cues are specified as [path,cueType] ***/
// 	var intervalDurationSet = _.shuffle(repmat(intervalDurations,Math.ceil(numGainLossPractice/intervalDurations.length)));
// 	var itiDurationSet = _.shuffle(repmat(itiDurations,Math.ceil(numGainLossPractice/itiDurations.length)));
// 	var isiDurationSet = _.shuffle(repmat(isiDurations,Math.ceil(numGainLossPractice/isiDurations.length)));

// 	switch(practiceType) {
// 		case 'gain':
// 			subCueSet = cues['Personal_Gain'];
	   
// 		break;
// 		case 'random':
// 			subCueSet = cues['randomLow'];
	   
// 		break;
// 		 case 'performance':
// 			subCueSet = cues['performanceLow'];
	   
// 		break;
// 		case 'randomPractice':
// 			subCueSet = cues['randomPractice'];
	   
// 		break;
// 		case 'performancePractice':
// 			subCueSet = cues['performancePractice'];
	   
// 		break;
// 		case 'practiceAll':
// 			subCueSet = cues['practiceAll'];
	   
// 		break;
// 		  case 'loss':
// 		subCueSet = cues['loss'];

// 		break;
// 	}


// 	var cueSet = _.shuffle(repmat(subCueSet,Math.ceil(numGainLossPractice/subCueSet.length)));
// 	var intervalID = 0;
// 	var interval = 0;


// 	var displayFeedback = function(tag,interval)
// 	{
// 		var counter = interval.getCounter();
// 		if (interval.cued==true){
// 			if (interval.cueType == 'performance_low'||interval.cueType == 'performance_high'){
// 				var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * interval.counter[0];
// 				if (practiceavgRewardWindow.length>=practiceavgRewardWindowLength){
// 						practiceavgRewardWindow.shift();
// 						var pintervalRewRate=((interval.counter[0])/(interval.intervalDur))
// 						practiceavgRewardWindow.push(pintervalRewRate)
// 					}else{
// 						var pintervalRewRate=((interval.counter[0])/(interval.intervalDur))
// 						practiceavgRewardWindow.push(pintervalRewRate)
// 					}
// 					var FeedbackHeading= 'Performance: + '
// 			}else if (interval.cueType == 'random_low'||interval.cueType == 'random_high'){
// 				//var windowMean= mean(...practiceavgRewardWindow)
// 				var practicerandomWindom = practiceavgRewardWindow[Math.floor(Math.random()*practiceavgRewardWindow.length)];
// 				var practicewindowReward= Math.round(interval.intervalDur*practicerandomWindom)
// 				var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * practicewindowReward
// 				var FeedbackHeading= 'Random: + '
// 			}else{
// 				var score = initialBonus["performance_low"] + numSign["performance_low"] * values["performance_low"] * interval.counter[0];

// 			}
			
// 			if(numSign[interval.cueType]<0) score = Math.max(score,0);
// 			$(tag).append($("<p></p>").attr({id:'intervalMsg'}).html(FeedbackHeading+
// 					score.toFixed(0))); //0
// 			$("#intervalMsg").css({"position": "absolute",
// 			"left":"50%","top":"50%",
// 			"transform":"translate(-50%, -50%)","font-size":"40px"});

// 		}
// 	}

// 	var cleanFeedback = function(){$("#intervalMsg").remove();}

// 	var showScore = function(tag,cueType)
// 	{ if (practiceType=="randomPractice" || practiceType=="performancePractice"||practiceType=="practiceAll"){
// 		var tallyheadpractice="Performance: +"
// 	}else{
// 		var tallyheadpractice="Correct: +"
// 	}
// 		var showScoreInTag = function(counter){
// 			$("#scoreCounter").remove();
// 			var score = initialBonus[cueType] + numSign[cueType] * values[cueType] * counter[0];
// 			if(numSign[cueType]<0) score = Math.max(score,0);
// 			$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text( tallyheadpractice+score.toFixed(0)));//0
// 			//$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(counter[0].toFixed(0)));
// 			$("#scoreCounter").css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});

// 		};
// 		return showScoreInTag;
// 	}

// 	var cleanTally = function(){
// 		$('#scoreCounter').remove();
// 	}



// 	var Loop = function(){

// 		intervalID++;
		
		
// 		var calculateBonus = function(Interval)
// 		{
// 			var bonus = 0;
// 			return bonus;
// 		};

// 		intervalTimingParams.intervalDur = intervalDurationSet.shift();
// 		intervalTimingParams.itiDuration = itiDurationSet.shift();
// 		intervalTimingParams.isiDuration = isiDurationSet.shift();

// 		var writeRecord = function(Record){
// 			if(practiceType == 'random')
// 				Record.phase = "RandomPractice";
// 			else
// 				Record.phase = "PerformancePractice";
			 
// 			 Record.sessionNum = NaN;
// 			 Record.blockNum = NaN;
// 			 Record.intervalNum = intervalID;
// 			 Record.intervalType = cue[1];
// 			 Record.intervalLength = intervalTimingParams.intervalDur;
// 			 psiTurk.recordTrialData(Record);
// 		};

// 		var callbacks = {
// 			endCallback:Loop,
// 			displayFeedback:displayFeedback,
// 			cleanFeedback:cleanFeedback,
// 			tallyCallback:showScore,
// 			recordStimCallback:recordStimStroop,
// 			writeRecord:writeRecord,
// 			calculateBonus:calculateBonus,
// 			cleanTally:cleanTally
// 		};

// 		var cue = cueSet.shift();
		
// 		if(intervalID > numGainLossPractice) 
// 		{
// 			blockPartGarden(nextPractice)

// 		}
// 		else
// 		{
// 			var stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);
// 			interval = new Interval(intervalTimingParams,htmlParams,cue,trialTimingParams,configParams,stimSet,callbacks);
// 			psiTurk.showPage("stages/stage.html");
// 			var experiment = document.getElementById('experiment');
// 			experiment.style.backgroundImage = "url('"+ gardenImage+ "')" ;
// 			experiment.style.backgroundSize = "cover"
// 			experiment.style.backgroundRepeat= 'no-repeat'
// 			showBoard(3,9,2,10);
// 			interval.initiate();
// 		}
// 	}
// 	Loop();

// }



practiceBlocksGardenPointsStroop =(practiceType,nextPractice) =>()=>{

	if(isTrialbased==true){
		var configParams = {space:false,accFeedback:false,washout:false,tally:false}; // remove online tracker in trial based version
	}
	else{
		var configParams = {space:false,accFeedback:false,washout:false,tally:true};
	}
	simplepractice = false;

	/*** The cues are specified as [path,cueType] ***/
	var intervalDurationSet = _.shuffle(repmat(intervalDurations,Math.ceil(numGainLossPractice/intervalDurations.length)));
	var itiDurationSet = _.shuffle(repmat(itiDurations,Math.ceil(numGainLossPractice/itiDurations.length)));
	var isiDurationSet = _.shuffle(repmat(isiDurations,Math.ceil(numGainLossPractice/isiDurations.length)));

	switch(practiceType) {
		case 'gain':
			subCueSet = cues['Personal_Gain'];
	   
		break;
		case 'random':
			subCueSet = cues['randomLow'];
	   
		break;
		 case 'performance':
			subCueSet = cues['performanceLow'];
	   
		break;
		case 'randomPractice':
			subCueSet = cues['randomPractice'];
	   
		break;
		case 'performancePractice':
			subCueSet = cues['performancePractice'];
	   
		break;
		case 'practiceAll':
			subCueSet = cues['practiceAll'];
			var configParams = {space:false,accFeedback:false,washout:false,tally:false};

	   
		break;
		  case 'loss':
		subCueSet = cues['loss'];

		break;
	}



	var cueSet = _.shuffle(repmat(subCueSet,Math.ceil(numGainLossPractice/subCueSet.length)));
	var intervalID = 0;
	var interval = 0;


	var displayFeedback = function(tag,interval)
	{
		var counter = interval.getCounter();
		if (interval.cued==true){
			if (interval.cueType == 'performance_low'||interval.cueType == 'performance_high'){
				var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * interval.counter[0];
				if (practiceavgRewardWindow.length>=practiceavgRewardWindowLength){
						practiceavgRewardWindow.shift();
						var pintervalRewRate=((interval.counter[0])/(interval.intervalDur))
						practiceavgRewardWindow.push(pintervalRewRate)
					}else{
						var pintervalRewRate=((interval.counter[0])/(interval.intervalDur))
						practiceavgRewardWindow.push(pintervalRewRate)
					}
					var FeedbackHeading= 'Performance: + '

					var practicerandomWindom = practiceavgRewardWindow[Math.floor(Math.random()*practiceavgRewardWindow.length)];
					var practicewindowReward= Math.round(interval.intervalDur*practicerandomWindom)
					var randomScore = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * practicewindowReward
					var performanceScore=score
			}else if (interval.cueType == 'random_low'||interval.cueType == 'random_high'){
				//var windowMean= mean(...practiceavgRewardWindow)
				var practicerandomWindom = practiceavgRewardWindow[Math.floor(Math.random()*practiceavgRewardWindow.length)];
				var practicewindowReward= Math.round(interval.intervalDur*practicerandomWindom)
				var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * practicewindowReward
				var FeedbackHeading= 'Random: + '
				var performanceScore = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * interval.counter[0];

				var randomScore=score
			}else{
				var score = initialBonus["performance_low"] + numSign["performance_low"] * values["performance_low"] * interval.counter[0];

			}
			
			if(numSign[interval.cueType]<0) score = Math.max(score,0);
			if(practiceType=="randomPractice" ){
				//showRandomTally(htmlParams.randomTally,randomScore)
				var performanceText = $("<p></p>").attr({id:'totalPerformanceText'}).text('+' + performanceScore.toFixed(0));
				var randomText = $("<p></p>").attr({id:'totalRandoomText'}).text('+' + randomScore.toFixed(0));
				var performanceImg = $("<img></img>").attr({src:'/static/images/cues/StoryEfficacyReward/button.png',id:'performanceImg'});
				var randomImg = $("<img></img>").attr({src:'/static/images/cues/StoryEfficacyReward/dice.png',id:'randomImg'});

				//performanceText.css({'margin-top':'30px','font-size':'40px'});
				performanceText.css({'font-size':'40px'});
				performanceImg.css({'margin-bottom':'auto','margin':'auto'});
				//randomText.css({'margin-top':'30px','font-size':'40px'});
				randomText.css({'font-size':'40px'});
				randomImg.css({'margin-bottom':'auto','margin':'auto'});
				if(interval.cueType == 'performance_low'||interval.cueType == 'performance_high'){
					addElementByGrid(performanceImg,3,8,4,6,border=true);
					addElementByGrid(randomImg,3,8,6,8,border=false);
				}else{
					addElementByGrid(performanceImg,3,8,4,6,border=false);
					addElementByGrid(randomImg,3,8,6,8,border=true);
			
				}
			
				addElementByGrid(performanceText,6,6,4,6);
				addElementByGrid(randomText,6,6,6,8);
				// addElement(performanceImg,"#ml",center=true);
				// addElement(randomImg,"#mr",center=true);
				// addElement(performanceText,"#ml",center=true);
				// addElement(randomText,"#mr",center=true);
				//addElementBy(summaryText,"4","5/7");
			}else if(practiceType=="performancePractice") {
				//showRandomTally(htmlParams.randomTally,randomScore)
				var performanceText = $("<p></p>").attr({id:'totalPerformanceText'}).text('+' + performanceScore.toFixed(0));
				
				var performanceImg = $("<img></img>").attr({src:'/static/images/cues/StoryEfficacyReward/button.png',id:'performanceImg'});

				performanceText.css({'font-size':'40px','margin-bottom':'96px'});
				performanceImg.css({'margin-bottom':'auto','margin':'auto'});
		
				
				addElementByGrid(performanceImg,3,8,5,7,border=true);
				addElementByGrid(performanceText,6,6,3,9);

			}
			else if(practiceType=="practiceAll") {
				var performanceText = $("<p></p>").attr({id:'totalPerformanceText'}).text('+' + performanceScore.toFixed(0));
				var randomText = $("<p></p>").attr({id:'totalRandoomText'}).text('+' + randomScore.toFixed(0));
				var performanceImg = $("<img></img>").attr({src:'/static/images/cues/StoryEfficacyReward/button.png',id:'performanceImg'});
				var randomImg = $("<img></img>").attr({src:'/static/images/cues/StoryEfficacyReward/dice.png',id:'randomImg'});

				performanceText.css({'font-size':'40px','margin-bottom':'96px'});
				performanceImg.css({'margin-bottom':'auto','margin':'auto'});
				randomText.css({'font-size':'40px','margin-bottom':'96px'});
				randomImg.css({'margin-bottom':'auto','margin':'auto'});
				
				// if(interval.cueType == 'performance_low'||interval.cueType == 'performance_high'){
				// 	addElementByGrid(performanceImg,"3/8","5/7",border=false);
				// addElementByGrid(performanceText,"6/6","3/9");
				
				// }else{
				// 	addElementByGrid(randomImg,"3/8","5/7",border=false);
				// addElementByGrid(randomText,"6/6","3/9");
			
				// }
				if(interval.cueType == 'performance_low'||interval.cueType == 'performance_high'){
					addElementByGrid(performanceImg,3,8,4,6,border=true);
					addElementByGrid(randomImg,3,8,6,8,border=false);
				}else{
					addElementByGrid(performanceImg,3,8,4,6,border=false);
					addElementByGrid(randomImg,3,8,6,8,border=true);
			
				}
			
				addElementByGrid(performanceText,6,6,4,6);
				addElementByGrid(randomText,6,6,6,8);
			
			

			}else{

				$(tag).append($("<p></p>").attr({id:'intervalMsg'}).html(FeedbackHeading+
					score.toFixed(0))); //0
			//$("#intervalMsg").css({"position": "absolute",
			//"left":"50%","top":"50%",
			//"transform":"translate(-50%, -50%)","font-size":"40px"});
			$("#intervalMsg").css({"font-size":"40px"});
			}
			

		}
	}

	//var cleanFeedback = function(){$("#intervalMsg").remove();}
	var cleanFeedback = function(){$("#performanceText","#performanceImg","#randomText","#randomImg").remove();}

	var showScore = function(tag,cueType)
	{ if (practiceType=="randomPractice" || practiceType=="performancePractice"||practiceType=="practiceAll"){
		var tallyheadpractice="Performance: +"
	}else{
		var tallyheadpractice="Correct: +"
	}
		var showScoreInTag = function(counter){
			$("#scoreCounter").remove();
			var score = initialBonus[cueType] + numSign[cueType] * values[cueType] * counter[0];
			if(numSign[cueType]<0) score = Math.max(score,0);
			var element = $("<p></p>").attr({id:'scoreCounter'}).text(tallyheadpractice+score.toFixed(0));
			element.css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});
			addElement(element,tag,center=true);

			

		};
		return showScoreInTag;
	}

	// var showRandomTally = function(tag, randomScore)
	// 	{
			
	// 			$(tag).append($("<p></p>").attr({id:'randomCounter'}).text("Random: + " + randomScore)); //0
	// 			//$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(counter[0].toFixed(0)));
	// 			$("#randomCounter").css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});
			
	// 	}

	var cleanTally = function(){
		$('#scoreCounter').remove();
		$('#randomCounter').remove();
	}

	// creating stims out here if trial based
	if (isTrialbased == true){ stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalPerBlock);}

	var Loop = function(){

		intervalID++;
		
		
		var calculateBonus = function(Interval)
		{
			var bonus = 0;
			return bonus;
		};

		// do timing only once depending on version
		if (isTrialbased==true){
			cuedTrialTimingParams.itiDuration = itiDurationSet.shift();
			console.log("iti durations" +itiDurationSet)
			cuedTrialTimingParams.isiDuration = isiDurationSet.shift();
		}
		else{
			intervalTimingParamsPractice.intervalDur = intervalDurationSet.shift();
			intervalTimingParamsPractice.itiDuration = itiDurationSet.shift();
			intervalTimingParamsPractice.isiDuration = isiDurationSet.shift();
		}


		var writeRecord = function(Record){
			if(practiceType == 'random')
				Record.phase = "RandomPractice";
			else
				Record.phase = "PerformancePractice";
			 
			 Record.sessionNum = NaN;
			 Record.blockNum = NaN;
			 Record.intervalNum = intervalID;
			 Record.intervalType = cue[1];
			 Record.intervalLength = intervalTimingParamsPractice.intervalDur;
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
			blockPartGarden(nextPractice)

		}
		else
		{
			if (isTrialbased==true){
				console.log("setting up trial-based trial")
				// we're setting this up as a cued trial instead of an Interval, but leave the rest the same, hoping that this works //cuetrialstim
				interval = new CuedTrial(cuedTrialTimingParams,htmlParams,cue,trialCuedTrialTimingParams,configParams,stimSet,callbacks);
			}
			else{
				stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);
				interval = new Interval(intervalTimingParamsPractice,htmlParams,cue,trialIntervalTimingParams,configParams,stimSet,callbacks);
			}
			psiTurk.showPage("stages/stage.html");
			var experiment = document.getElementById('experiment');
			experiment.style.backgroundImage = "url('"+ gardenImage+ "')" ;
			experiment.style.backgroundSize = "cover"
			experiment.style.backgroundRepeat= 'no-repeat'
			if(garden){
				showBoard(3,10,2,10);
			}
			interval.initiate();
		}
	}
	Loop();

}