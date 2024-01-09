feedbackImgs = [
	"/static/images/feedback/missedTrial.png",
	"/static/images/feedback/tooFast.png",
	"/static/images/feedback/correct.png",
	"/static/images/feedback/incorrect.png"
];





function Trial(stimSet,timer,counter,timingParams,htmlTag,callbackParams,configParams){
	//console.log("inside the Trial function")

	this.stimSet = stimSet;
	this.timer = timer;
	this.counter = counter;
	this.itiDuration = timingParams.itiDuration;
	this.trialNum = 0;

	this.htmlTag = htmlTag;
	this.space = configParams.space;
	this.feedbackForEveryTrial = configParams.accFeedback;
	this.washout = configParams.washout;
	this.isTally = configParams.tally;
	this.feedbackDur = timingParams.feedbackDur;
	this.shortestRT = timingParams.thresholdRT;

	this.endOfSet = callbackParams.endOfSetCallback;
	this.tally = callbackParams.tallyCallback;
	this.recordStim = callbackParams.recordStimCallback;
	this.completeRecord = callbackParams.completeRecordCallback;
	console.log("this.stimSet is" + this.stimSet)
}




Trial.prototype.updateStim = function(stim)
{	//console.log("inside updateStim")
	this.stim = stim;
	this.stimResponse = stim.color;
	this.stimWord = stim.word;
	//this.stimFontColor = stim.fontColor
	this.stimPath = stim.path;

	console.log("this.stim is" + this.stim)

}




Trial.prototype.initializeRecordParams = function(){
	//console.log("inside initializeRecordParams")
	this.stimon = NaN;
	this.initon = NaN;
	this.response = NaN;
	this.hit = NaN;
	this.rt = NaN;
	this.initrt = NaN;
	this.feedback = -1;
	this.initiated = false;
	this.listening = false;
	this.responded = false;
}




Trial.prototype.initiation = function(){
	//console.log("inside trial.initiation")
	//console.log("stim is" + stim)
	if(this.timer[0]){this.cleanAll();return;}
	this.initializeRecordParams();
	if(this.stimSet.length > 0)
	{
		this.updateStim(this.stimSet.shift());
		this.trialNum++;
		console.log("this.trialNum is" + this.trialNum)

		if(this.itiDuration>0) this.ITI();
		else this.postITIAction();
	}
	else
	{
		if(this.washout) this.endOfSet(this);
		else this.endOfSet();
	}
}



Trial.prototype.ITI = function(){
	//console.log("inside ITI")
	var element_fixation = $("<img></img>").attr({src:"/static/images/fixation.png",id:'fixation'});
	addElement(element_fixation,this.htmlTag);
	setTimeout(this.postITIAction.bind(this),this.itiDuration);
}



Trial.prototype.postITIAction = function(){
	if(this.timer[0]){this.cleanAll();return;}
	$("#fixation").remove();
	if(this.space)
		this.spaceTimerID = setTimeout(this.showBox.bind(this),200);
	else
		console.log("we are post ITIAction")

		this.showStimuli();

}




Trial.prototype.showBox = function(){
	if(this.timer[0]){this.cleanAll(); return;}
	this.cleanAll();
	var element_box = $("<img></img>").attr({src:"/static/images/hidden.png",id:'box'});
	addElement(element_box,this.htmlTag);
	this.initon = new Date().getTime();
	this.listening = true;
	if(isNaN(this.tally) && this.isTally) this.tally(this.counter);
}




Trial.prototype.showStimuli = function(){
	console.log("inside of showStimuli")

	if(this.timer[0]) return;
	this.cleanAll();
	if(isNaN(this.tally) && this.isTally) this.tally(this.counter);
	console.log("inside of tally")
	console.log("this.stimPath is" + this.stimPath)

	var element_stimuli = $("<img></img>").attr({src:this.stimPath,id:'stimuli'});
	//var element_word = $("<p></p>").attr({id:'stimuli'}).text(this.stimWord);
	//element_word.css({'font-size':70, 'color': this.stimFontColor, 'fontWeight': 600,'webkitTextStrokeWidth':"medium", 'webkitTextStrokeColor':"black"});
	addElement(element_stimuli,this.htmlTag,true);
	//addElement(element_word,this.htmlTag);
	this.stimon = new Date().getTime();
	this.listening = true;
	console.log("now listening")

}




Trial.prototype.responseListener = function(){
	if(this.space)
	{
		if(this.initiated)
			this.stimResponseListener(event);
		else
			this.spaceResponseListener(event);
	}
	else
	{
		this.stimResponseListener(event);
	}
}




Trial.prototype.stimResponseListener = function(event) {
	console.log("inside StimresponseListener")

	if(this.timer[0]) return;
	if (!this.listening) return;
	var keyCode = event.keyCode;
 	var index = responseKeyCodes.indexOf(keyCode);

	if (index >= 0)
	{
		console.log("index is" + index)

		this.listening = false;
		this.responded = true;
		this.rt = new Date().getTime() - this.stimon;
	 	this.response = responses[index];
	 	this.responseHandler();
	}
}




Trial.prototype.spaceResponseListener = function(event) {

	if(this.timer[0]) return;
	if (!this.listening) return;

	var keyCode = event.keyCode;
	var temprt = new Date().getTime() - this.initon;

	if (keyCode == spaceKey )
	{
		this.listening = false;
		this.initrt = temprt;//new Date().getTime() - this.initon;
		this.initiated = true;
		this.showStimuli();
	}
}




Trial.prototype.responseHandler = function(){
	console.log("inside responseHandler")
	console.log("this.responded is" + this.responded)

	this.listening = false;
	if(this.responded)
	{	console.log("we responsed")

		if(this.rt<this.shortestRT)
		{
			console.log("this.rt is shot" + this.rt)

			this.feedback = 1;
			this.hit = 0;
		}
		else if(this.response == this.stimResponse)
		{
			console.log("we responsed and were correct")

			this.hit = 1;

			this.counter[0] = this.counter[0] + 1;
			if(this.feedbackForEveryTrial) this.feedback = 2;
		}
		else
		{	console.log("we responsed and were not correct" )

			if(this.washout)
			{
				this.counter[0] = 0;
			}
			this.hit = 0;
			this.counter[1] = this.counter[1] + 1
			if(this.feedbackForEveryTrial) this.feedback = 3;
		}
	}
	else
	{
		console.log("in the else washout did not respond" + this.stimPath)

		if(this.washout) this.counter[0] = 0;
		this.feedback = 0;
		this.hit = 0;
	}
	this.cleanAll();

	var newRecord = this.recordResponse(this.stim);
	this.completeRecord(newRecord);
	if(this.feedback >= 0) this.showFeedback();

	else this.initiation();
}



Trial.prototype.recordResponse = function(stim){
	console.log("inside recordResponse")

	var newRecord = this.recordStim(stim);
	if(isNaN(stim)){
		newRecord.response = this.response;
		newRecord.hit = this.hit;
		newRecord.rt = this.rt;
		newRecord.trialNum = this.trialNum;
		newRecord.initrt = this.initrt;
		newRecord.stimOn = this.stimon
	}else
	{
		newRecord.response = NaN;
		newRecord.hit = NaN;
		newRecord.rt = NaN;
		newRecord.trialNum = NaN;
		newRecord.initrt = NaN;	
		newRecord.stimOn = NaN;
	}
	newRecord.moneyEarned = 0;
	return newRecord;
}



Trial.prototype.cleanAll = function(){
	console.log("inside cleanALL")

	if(this.space) clearTimeout(this.spaceTimerID);
	$('#stimuli,#box,#feedback').remove();
}



Trial.prototype.showFeedback = function(){
	console.log("insidefeedbacl");
	var feedbackImg = feedbackImgs[this.feedback];
	var element_feedback = $("<img></img>").attr({src:feedbackImg,id:'feedback'});
	addElement(element_feedback,this.htmlTag);
	setTimeout(this.removeFeedback.bind(this),this.feedbackDur);
}



Trial.prototype.removeFeedback = function(){
	console.log("inside removefeedback")

	if(this.timer[0]) return;
	$("#feedback").remove(); 
	this.initiation();
}







//Subclass for timed trial



function timedTrial(stimSet,timer,counter,timingParams,htmlTag,callbackParams,configParams){
	Trial.call(this,stimSet,timer,counter,timingParams,htmlTag,callbackParams,configParams);
	this.deadline = timingParams.deadline;
}

timedTrial.prototype = Object.create(Trial.prototype);
timedTrial.prototype.constructor = timedTrial;

timedTrial.prototype.showStimuli = function(){
	(Object.getPrototypeOf(timedTrial.prototype).showStimuli.bind(this))();
	this.timerID = setTimeout(this.responseHandler.bind(this),this.deadline);
}

timedTrial.prototype.responseListener = function() {
	clearTimeout(this.timerID);
	(Object.getPrototypeOf(timedTrial.prototype).responseListener.bind(this))();
}

timedTrial.prototype.cleanAll = function() {
	clearTimeout(this.timerID);
	(Object.getPrototypeOf(timedTrial.prototype).cleanAll.bind(this))();
}