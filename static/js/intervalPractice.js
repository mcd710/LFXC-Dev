
//file for the functions to call for interval practice






// intervalPracticeGardenStroop=(nextPractice) =>()=>{
// 	/*** Step 1: Define how you want to display interval-end feedback ***/
// 	console.log("inside the intervalPracticeGarden")

// 	var qualified = false;
// 	trialTimingParams.itiDuration = 0;
// 	var displayFeedback = function(tag,interval)
// 	{
// 		var counter = interval.getCounter();
// 		$(tag).append($("<p></p>").attr({id:'intervalMsg'}).text('Correct: ' + interval.counter[0]));
// 		$("#intervalMsg").css({"position": "absolute",
// 		"left":"50%","top":"50%",
// 		"transform":"translate(-50%, -50%)","font-size":"40px"});
// 	}
// 	/*** Step 2: Define how you want to clean up interval-end feedback ***/
// 	var cleanFeedback = function()
// 	{
// 		$("#intervalMsg").remove();
// 	}
// 	/*** Step 3: Define how you want to show the tally ***/
// 	var showScore = function(tag)
// 	{
// 		var showScoreInTag = function(counter){
// 			$("#scoreCounter").remove();	
// 			$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(counter[0]));
// 			$("#scoreCounter").css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});
// 		};
// 		return showScoreInTag;
// 	}

// 	var cleanTally = function(){
// 		$('#scoreCounter').remove();
// 	}

// 	var configParams = {space:false,accFeedback:false,washout:false,tally:true};
// 	var intervalDurationSet = _.shuffle(repmat(intervalDurations,Math.ceil(numIntervalPractice/intervalDurations.length)));
// 	var itiDurationSet = _.shuffle(repmat(itiDurations,Math.ceil(numIntervalPractice/itiDurations.length)));
// 	var isiDurationSet = _.shuffle(repmat(isiDurations,Math.ceil(numIntervalPractice/isiDurations.length)));
// 	var intervalNum = 0;

// 	var Loop = function(){
// 		intervalNum++;
// 		if(intervalNum > numIntervalPractice & (qualified|intervalNum>6)) {
// 			blockPartGarden(nextPractice);
// 		}
// 		else{
// 			if(intervalNum > numIntervalPractice)
// 			{
// 				intervalDurationSet = _.shuffle(intervalDurations);
// 				itiDurationSet = _.shuffle(itiDurations);
// 				isiDurationSet = _.shuffle(isiDurations);
// 			}

// 			var intervalDur = intervalDurationSet.shift();
// 			var itiDuration = itiDurationSet.shift();
// 			var isiDuration = isiDurationSet.shift();
// 			var stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);

// 			var calculateBonus = function(I)
// 			{
// 				var bonus = NaN;
// 				if(I.counter[0]>=intervalDur/1000) qualified = true;
// 				return bonus;
// 			};

// 			var writeRecord = function(Record){

// 			 	Record.phase = "IntervalPractice";
// 			 	Record.sessionNum = NaN;
// 			 	Record.blockNum = NaN;
// 			 	Record.intervalNum = intervalNum;
// 			 	Record.intervalType = NaN;
// 			 	Record.intervalLength = intervalDur;
// 			 	psiTurk.recordTrialData(Record);
// 			};

// 			var callbacks = {
// 				endCallback:Loop,
// 				displayFeedback:displayFeedback,
// 				cleanFeedback:cleanFeedback,
// 				tallyCallback:showScore,
// 				recordStimCallback:recordStimStroop,
// 				writeRecord:writeRecord,
// 				calculateBonus:calculateBonus,
// 				cleanTally:cleanTally
// 			};

// 			intervalTimingParams.intervalDur = intervalDur;
// 			intervalTimingParams.itiDuration = itiDuration;
// 			intervalTimingParams.isiDuration = isiDuration;

// 			var interval = new Interval(intervalTimingParams,htmlParams,0,trialTimingParams,configParams,stimSet,callbacks);
// 			interval.initiate();
// 		}		

// 	}
// 	psiTurk.showPage("stages/stage.html");
// 	showBoard()
// 	Loop();
// }


intervalPracticeGardenStroop=(nextPractice) =>()=>{
	/*** Step 1: Define how you want to display interval-end feedback ***/
	console.log("inside the intervalPracticeGarden")
	simplepractice = false;
	var qualified = false;
	//trialTimingParams.itiDuration = 0;
	RTArrayLength=20;

	updateRTArray = ()=>{
		var curRT=(interval.counter[2])
		if (RTArray.length==RTArrayLength){
			RTArray.shift();	
			RTArray.push(curRT)
		}else{ 
			RTArray.push(curRT)
		}
		curRTthresh = Math.average(RTArray)
		console.log("Current average RT is" + curRTthresh)
		console.log("Interval Array is " + RTArray)
		return {
			curRTthresh
		}
		
	}


	var displayFeedback = function(tag,interval)
	{	var counter = interval.getCounter();
		if (isTrialbased==true){
			if (interval.counter[3] == 1){ 
				// here add RT to variable with RTs
				updateRTArray();
			}
			
			if (interval.counter[0]==1){
				var element = $("<p></p>").attr({id:'intervalMsg'}).text('Successful');
				element.css('margin-top','0px');
				addElement(element,tag,center=true);

				//$(tag).append($("<p></p>").attr({id:'intervalMsg'}).text('Successful'));
				

			}
			else{
				var element = $("<p></p>").attr({id:'intervalMsg'}).text('Unsuccessful');
				element.css('margin-top','0px');
				addElement(element,tag,center=true);

				//$(tag).append($("<p></p>").attr({id:'intervalMsg'}).text('Unsuccessful'));
			}
		}
		else{
			var counter = interval.getCounter();
		var element = $("<p></p>").attr({id:'intervalMsg'}).text('Correct: ' + interval.counter[0]);
		element.css('margin-top','0px');
		addElement(element,"#mm",center=true);
		}
		$("#intervalMsg").css({"font-size":"40px"});
		
	}
	/*** Step 2: Define how you want to clean up interval-end feedback ***/
	var cleanFeedback = function()
	{
		$("#intervalMsg").remove();
	}
	/*** Step 3: Define how you want to show the tally ***/
	var showScore = function(tag)
	{
		var showScoreInTag = function(counter){
			$("#scoreCounter").remove();	
			var element = $("<p></p>").attr({id:'scoreCounter'}).text(counter[0]);
			element.css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});
			addElement(element,tag,center=true);
			//$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(counter[0]));
			//$("#scoreCounter").css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});
		};
		return showScoreInTag;
	}

	var cleanTally = function(){
		$('#scoreCounter').remove();
	}
	if (isTrialbased==true){
		var configParams = {space:false,accFeedback:true,washout:false,tally:false};// not tracker in trial-based
	}
	else{	
		var configParams = {space:false,accFeedback:false,washout:false,tally:true};
	}

	var intervalDurationSet = _.shuffle(repmat(intervalDurations,Math.ceil(numIntervalPractice/intervalDurations.length)));
	var itiDurationSet = _.shuffle(repmat(itiDurations,Math.ceil(numIntervalPractice/itiDurations.length)));
	var isiDurationSet = _.shuffle(repmat(isiDurations,Math.ceil(numIntervalPractice/isiDurations.length)));
	var intervalNum = 0;

	// generate stimSet for trial-based version
	if (isTrialbased == true){ stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalPractice);}

	var Loop = function(){
		intervalNum++;
		console.log('interval number ' + intervalNum)
		if(intervalNum > numIntervalPractice & (qualified|intervalNum>numIntervalPractice)) {
			blockPartGarden(nextPractice);
		}
		else{
			// fix whatever unholy thing  this is
			if(intervalNum > numIntervalPractice)
			{
				intervalDurationSet = _.shuffle(intervalDurations);
				itiDurationSet = _.shuffle(itiDurations);
				isiDurationSet = _.shuffle(isiDurations);
			}

						// do timing only once depending on version
			if (isTrialbased==true){
				cuedTrialTimingParams.itiDuration = itiDurationSet.shift();
				console.log("iti durations" +itiDurationSet)
				cuedTrialTimingParams.isiDuration = isiDurationSet.shift();
				intervalDur = cuedTrialTimingParams.intervalDur;
			}
			else{
				intervalTimingParams.intervalDur = intervalDurationSet.shift();
				intervalDur = intervalTimingParams.intervalDur;
				intervalTimingParams.itiDuration = itiDurationSet.shift();
				intervalTimingParams.isiDuration = isiDurationSet.shift();
			}
			//var intervalDur = intervalDurationSet.shift();
			//var itiDuration = itiDurationSet.shift();
			//var isiDuration = isiDurationSet.shift();
			//intervalTimingParams.intervalDur = intervalDur;
			//intervalTimingParams.itiDuration = itiDuration;
			//intervalTimingParams.isiDuration = isiDuration;

			var calculateBonus = function(I)
			{
				var bonus = NaN;
				if(I.counter[0]>=intervalDur/1000) qualified = true;
				return bonus;
			};

			var writeRecord = function(Record){

			 	Record.phase = "IntervalPractice";
			 	Record.sessionNum = NaN;
			 	Record.blockNum = NaN;
			 	Record.intervalNum = intervalNum;
			 	Record.intervalType = NaN;
			 	Record.intervalLength = intervalDur;
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


			if (isTrialbased==true){
				console.log("setting up trial-based trial")
				if (RTArray.length >=10) trialCuedTrialTimingParams.RewardDeadline = Math.round(curRTthresh+50);
				console.log("Current deadline is " + trialCuedTrialTimingParams.RewardDeadline)
				// we're setting this up as a cued trial instead of an Interval, but leave the rest the same, hoping that this works //cuetrialstim
				interval = new CuedTrial(cuedTrialTimingParams,htmlParams,0,trialCuedTrialTimingParams,configParams,stimSet,callbacks);
			}
			else{
				stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);
				interval = new Interval(intervalTimingParams,htmlParams,0,trialIntervalTimingParams,configParams,stimSet,callbacks);
			}
			interval.initiate();
		}		

	}
	psiTurk.showPage("stages/stage.html");
	var experiment = document.getElementById('experiment');
	experiment.style.backgroundImage = "url('"+ gardenImage+ "')" ;
	experiment.style.backgroundSize = "cover"
	experiment.style.backgroundRepeat= 'no-repeat'
	if(garden){
		showBoard(3,10,2,10);
	}
	Loop();
}

