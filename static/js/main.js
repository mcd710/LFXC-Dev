

		MainPartGardenGroupPointsStroopFXC =(blockType,cueSubset,nextPractice) =>()=>{

			var configParams = {space:false,accFeedback:false,washout:false,tally:true};
			console.log("at the start of mainGarden")
			//var intervalScore=NaN;
			//var intervalProbability=NaN;
			//var scoreDetermined=NaN;
	
			// add new function that computes the scores that we then just need to read in
			calculateFeedback = ()=>{
				
				var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * interval.counter[0];
				var randomWindom = avgRewardWindow[Math.floor(Math.random()*avgRewardWindow.length)];
				var windowReward= Math.round(interval.intervalDur*randomWindom)
				var randomScore = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * windowReward;
				var performanceScore=score
				return {
					score,
					randomScore,
					performanceScore
				}
	
			}
			// update the rolling reward window
			updateRewardWindow = ()=>{
				var intervalRewRate=((interval.counter[0])/(interval.intervalDur))
				if (avgRewardWindow.length>=avgRewardWindowLength){
					avgRewardWindow.shift();	
					avgRewardWindow.push(intervalRewRate)
				}else{ 
					avgRewardWindow.push(intervalRewRate)
				}
		
			}
	
			// Display Feedback 
			// this should be after each trial instead of an interval
			var displayFeedback = function(tag,interval)
			{
				var counter = interval.getCounter();
				//var prob= (randi(0,100))/100
				//intervalProbability=prob
				console.log("interval.cueType is" + interval.cueType)
				//console.log("prob is "+ prob)
				if (interval.cued==true){ // if it is instructed
	
					var {score,
						performanceScore,
						randomScore
					} = calculateFeedback();
	
					//showRandomTally(htmlParams.randomTally,randomScore)
					if(numSign[interval.cueType]<0) score = Math.max(score,0);
					var performanceText = $("<p></p>").attr({id:'totalPerformanceText'}).text('+' + performanceScore.toFixed(0));
					var randomText = $("<p></p>").attr({id:'totalRandoomText'}).text('+' + randomScore.toFixed(0));
					var performanceImg = $("<img></img>").attr({src:'/static/images/cues/StoryEfficacyReward/button.png',id:'performanceImg'});
					var randomImg = $("<img></img>").attr({src:'/static/images/cues/StoryEfficacyReward/dice.png',id:'randomImg'});
	
					performanceText.css({'font-size':'40px','margin-bottom':'96px'});
					performanceImg.css({'margin-bottom':'auto','margin':'auto'});
					randomText.css({'font-size':'40px','margin-bottom':'96px'});
					randomImg.css({'margin-bottom':'auto','margin':'auto'});
					
					if(interval.cueType == 'performance_low'||interval.cueType == 'performance_high'){
						updateRewardWindow()
						if (intervalEfficacy==1){
							var FeedbackHeading= 'Performance: + '
							if (isTrialbased==true){
								addElementByGrid(performanceImg,3,8,5,7,border=false);
								addElementByGrid(performanceText,6,6,3,9);
							}
							else{
								addElementByGrid(performanceImg,3,8,4,6,border=true);
								addElementByGrid(randomImg,3,8,6,8,border=false);
							}
						}else{
							var FeedbackHeading= 'Random: + '
							if (isTrialbased==true){
								addElementByGrid(randomImg,3,8,5,7,border=false);
								addElementByGrid(randomText,6,6,3,9);
							}
							else{
								addElementByGrid(performanceImg,3,8,4,6,border=false);
								addElementByGrid(randomImg,3,8,6,8,border=true);
							}
						
						}
					}else{
						if (intervalEfficacy==1){
							var FeedbackHeading= 'Random: + '
							if (isTrialbased){
								addElementByGrid(randomImg,3,8,5,7,border=false);
								addElementByGrid(randomText,6,6,3,9);
							}
							else{
							addElementByGrid(performanceImg,3,8,4,6,border=false);
							addElementByGrid(randomImg,3,8,6,8,border=true);
							}
							
						}else{
							var FeedbackHeading= 'Performance: + '
							if (isTrialbased){
								addElementByGrid(performanceImg,3,8,5,7,border=false);
								addElementByGrid(performanceText,6,6,3,9);
							}
							else{
								addElementByGrid(performanceImg,3,8,4,6,border=true);
								addElementByGrid(randomImg,3,8,6,8,border=false);
							}
						}
					}
	
					// show both outcomes in trialbased version
					if(isTrialbased==false){
						addElementByGrid(performanceText,6,6,4,6);
						addElementByGrid(randomText,6,6,6,8);
					}
				
					// $(tag).append($("<p></p>").attr({id:'intervalMsg'}).html(FeedbackHeading +
					// 		score.toFixed(0))); //0
					// $("#intervalMsg").css({"position": "absolute",
					// "left":"50%","top":"50%",
					// "transform":"translate(-50%, -50%)","font-size":"40px"});
		
				}
			intervalScore=score;
			} // end Feedback 
		
			var cleanFeedback = function(){$("#intervalMsg").remove();}
			
			var showScore = function(tag,cueType)
			{
				var showScoreInTag = function(counter){
					$("#scoreCounter").remove();
					var score = initialBonus[cueType] + numSign[interval.cueType] * values[interval.cueType] * counter[0];
					if(numSign[cueType]<0) score = Math.max(score,0);
					var element = $("<p></p>").attr({id:'scoreCounter'}).text(tallyHeading[interval.cueType] +score.toFixed(0));
					element.css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});
					addElement(element,tag,center=true);
					//$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(tallyHeading[cueType] + score.toFixed(0))); //0
					//$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(counter[0].toFixed(0)));
					//$("#scoreCounter").css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});
				};
				return showScoreInTag;
			}
	
			var showRandomTally = function(tag, randomScore)
			{
				
					$(tag).append($("<p></p>").attr({id:'randomCounter'}).text("Random: + " + randomScore)); //0
					//$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(counter[0].toFixed(0)));
					$("#randomCounter").css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});
				
			}
		
		
			var cleanTally = function(){
				$('#scoreCounter').remove();
				$('#randomCounter').remove();
			}
		
			var intervalID = 0;
			var itiDurationSet = _.shuffle(repmat(itiDurations,Math.ceil(numIntervalPerBlock/itiDurations.length)));
			var isiDurationSet = _.shuffle(repmat(isiDurations,Math.ceil(numIntervalPerBlock/isiDurations.length)));
			console.log("All ITI durations are",itiDurationSet.length)
		
		
			//Set up the sequence within the block.
			var indexList = [];
			var cueList = [];
			var intervalDurationList = [];
			var numefficacyProbabilityMajor = Math.round(efficacyProbability*numIntervalPerBlock)
			console.log("numefficacyProbabilityMajor is "+ numefficacyProbabilityMajor)
			
			var numefficacyProbabilityMinor=numIntervalPerBlock-numefficacyProbabilityMajor
			console.log("numefficacyProbabilityMinor is "+ numefficacyProbabilityMinor)
	
			var numefficacyProbabilityMajorArray = repmat([1],numefficacyProbabilityMajor)
			console.log("numefficacyProbabilityMajorArray is "+ numefficacyProbabilityMajorArray)
	
			var numefficacyProbabilityMinorArray =repmat([2], numefficacyProbabilityMinor )
			console.log("numefficacyProbabilityMinorArray is "+ numefficacyProbabilityMinorArray)
	
			var efficacyProbabilityArray= _.shuffle(numefficacyProbabilityMajorArray.concat(numefficacyProbabilityMinorArray))
			console.log("efficacyProbabilityArray is "+ efficacyProbabilityArray)
			//var efficacyProbabilityMinorArray= repmat(numefficacyProbabilityMinor)
			var intervalScore;
	
			// set up trial info for the whole block: cue list and duration list (if relevant)
			// this is number of interval per block. Would we want this to a variable that takes either 
			// make contingent on whether that's trial based or interval based and only do this if interval based. 
			// for trial-based, set up ONLY the cue list, but not the duration list
			if(isTrialbased==true){
				for( m = 0; m < numIntervalPerBlock/(cueSubset.length); m++)
				{
					for( i = 0; i < cueSubset.length; i++)
					{
						cueList.push(cueSubset[i]); // generate the cues we can have in this block
					}
				}// end of the for loop. This seems to just set all kinds of stuff.
	
	
			}
			else{
				for( m = 0; m < numIntervalPerBlock/(cueSubset.length * intervalDurations.length); m++)
				{
					for( j = 0; j < intervalDurations.length; j++)
					{
						for( i = 0; i < cueSubset.length; i++)
						{
							cueList.push(cueSubset[i]); // generate the cues we can have in this block
							intervalDurationList.push(intervalDurations[j]); // generate the interval durations (which we won't need in trial- based)
						}
					}
				}// end of the for loop. This seems to just set all kinds of stuff.
	
			}
			
				// this seems to not do anything.
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
		
		
				// this generates some index list that I guess is used to index the other lists above
				for(var n = 0; n < numIntervalPerBlock; n++)
				{
					indexList.push(n);
				}
		
				indexList = _.shuffle(indexList);
		
				//var partSelected = selectedBlockList.shift();
				//cueList = _.shuffle(cueList);
				//intervalDurationList = _.shuffle(intervalDurationList);
	
				// I think that we need to generate the stim set somewhere here, before we loop through
				// 
				if (isTrialbased == true){ stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalPerBlock);}
	
				// here's where we loop through the number of intervals/ Trials until we hit it
				var Loop = function(){
					
	
					// if trial-based we need this
					if(isTrialbased==true){
					cuedTrialTimingParams.itiDuration = itiDurationSet.shift();
					console.log("iti durations" +itiDurationSet)
					cuedTrialTimingParams.isiDuration = isiDurationSet.shift();}
					else{
					// if interval based, we need this
					//intervalTimingParams.intervalDur = intervalDurationSet.shift();
					intervalTimingParams.itiDuration = itiDurationSet.shift();
					intervalTimingParams.isiDuration = isiDurationSet.shift();
	
					}
	
					intervalEfficacy = efficacyProbabilityArray.shift();
					console.log("intervalEfficacy is "+ intervalEfficacy)
					console.log("efficacyProbabilityArray is "+ efficacyProbabilityArray)
					var selected;
					var cue;
					var cuetrialstim;
					var cuetrialstim
					var bonused;
					var scoreDetermined;
					
	
	
					//console.log(selectedMask);
					
					
					intervalID++; // increment intervalID 
					console.log("intervalID is "+ intervalID)
					// set up condition of the current trial and how the feedback is determined
					if(intervalID <= numIntervalPerBlock){
						selected = indexList.shift()
						cue = cueList[selected];
						// define stimulus or trial duration
						if (isTrialbased == true){
							cuetrialstim = stimSet[selected];// setting current stim
						}
						else{// setting current interval duration
							intervalTimingParams.intervalDur = intervalDurationList[selected];
	
						}
						
						bonused = selectedMask[selected];
						if(intervalEfficacy==1){
							if (cue[1] == 'performance_low'||cue[1] == 'performance_high'){
								scoreDetermined="Performance"
							}else{
								scoreDetermined="Random"
							}
						}else{
							if (cue[1] == 'performance_low'||cue[1] == 'performance_high'){
								scoreDetermined="Random"
							}else{
								scoreDetermined="Performance"
							}
						}
	
						
						
	
						//console.log(selected)
						//console.log(bonused);
					} // end set condition
					//console.log(bonused)
		
					
		
					var calculateBonus = function(Interval)
					{
						var counter = Interval.getCounter();
						var bonus = counter[0] * values[Interval.cueType] * bonused * price;
						//console.log(bonused);
						//console.log(bonus);
						return bonus;
					};
	
					// this is what's being saved out
					var writeRecord = function(Record){
						console.log("inside the record")
						console.log("mycondition is "+ mycondition)
						//console.log("intervalProbability is "+ intervalProbability)
						console.log("intervalEfficacy is "+ intervalEfficacy)
	
						console.log("intervalScore is "+ intervalScore)
						console.log("scoreDetermined is "+ scoreDetermined)
						 Record.phase = "MainBlock";
						 Record.PLATFORM = PLATFORM;
						 Record.order = game;
						 Record.sessionNum = sessionID;
						 Record.blockNum = blockID;
						 Record.blockType = blockType;
						 Record.intervalNum = intervalID;
						 Record.intervalType = cue[1];
						 Record.intervalLength = intervalTimingParams.intervalDur;
						 Record.isiLength = intervalTimingParams.isiDuration; // new in prep version
						 Record.intervalEfficacyType=intervalEfficacy;
						 Record.intervalScorePoints = intervalScore;
						 Record.scoreDetermined=scoreDetermined;
						 psiTurk.recordTrialData(Record);
					};
		
		
					// these are used in the interval function and probably define what happens next
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
		
		
					// within each block, we run this until we hit the number of intervals/ trials we want
					// change intervalID to trialID and numIntervalPerBlock to numTrialPerBlock
					if(intervalID > numIntervalPerBlock) {
						blockPartGarden(nextPractice);
					}
					else {
						console.log("at the start of the interval")
					
						//console.log("mycondition is "+ mycondition)
						console.log("intervalScore is "+ intervalScore)
						intervalScore= NaN
						console.log("intervalScore is "+ intervalScore)
	
						console.log("scoreDetermined is "+ scoreDetermined)
						//var scoreDetermined=NaN;
						console.log("scoreDetermined is "+ scoreDetermined)
	
						if (isTrialbased == true){
							console.log("setting up trial-based trial")
							// we're setting this up as a cued trial instead of an Interval, but leave the rest the same, hoping that this works //cuetrialstim
							interval = new CuedTrial(cuedTrialTimingParams,htmlParams,cue,trialCuedTrialTimingParams,configParams,stimSet,callbacks);
	
	
						}
						else{
							// here we need to change that this is only called here if isTrialbased os false
							stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);
							//	var trial = new timedTrial(stimSet,[false],[0,0],trialPracticeTimingParams,'#m',callbacks,configParams);
	
							// we'll probably replace that one below with the one above - actually, no, I think we want that to be the cuedTrial function
							// actual interval 
							interval = new Interval(intervalTimingParams,htmlParams,cue,trialIntervalTimingParams,configParams,stimSet,callbacks);
	
	
						}
						// here we need to change that this is only called here if isTrialbased os false
						//var stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials); // commented out while implementing trial based
						////	var trial = new timedTrial(stimSet,[false],[0,0],trialPracticeTimingParams,'#m',callbacks,configParams);
	
						// we'll probably replace that one below with the one above - actually, no, I think we want that to be the cuedTrial function
						// actual interval 
						//interval = new Interval(intervalTimingParams,htmlParams,cue,trialIntervalTimingParams,configParams,stimSet,callbacks);
						psiTurk.showPage("stages/stage.html");
						var experiment = document.getElementById('experiment');
						experiment.style.backgroundImage = "url('"+ gardenImage+ "')" ;
						experiment.style.backgroundSize = "cover"
						experiment.style.backgroundRepeat= 'no-repeat'
						if(garden){
							showBoard(3,10,2,10);
						}
						console.log("initiating trial based trial")
						interval.initiate(); // runs one new interval
	
	
					}
				}
		
				returnToInstructCallbackBreak = function(){psiTurk.doInstructions(breakForBlockType[blockType],Loop);};
				//psiTurk.doInstructions(breakForBlockType[blockType],Loop);
				Loop();
		
			} // end of whole main function for that version
	
	
		