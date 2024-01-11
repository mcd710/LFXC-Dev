var endRedirectFXCICR = function() {

	// Load the questionnaire snippet 
	psiTurk.showPage('postTask.html');
	psiTurk.recordUnstructuredData('EndTask', 1);

	psiTurk.recordUnstructuredData('incorrect1', incorrect1);
 	psiTurk.recordUnstructuredData('incorrect2', incorrect2);
 	psiTurk.recordUnstructuredData('incorrect3', incorrect3);
	
	$("#next").click(function () {
		psiTurk.saveData({
			success: function(){
				psiTurk.computeBonus('compute_bonus',
					function(response){
						psiTurk.completeHIT();
						//location.replace(redirect_link+'?workerID='+response['workerId']+'&bP='+response['pb']+'&PLATFORM='+response['PLATFORM']+'&assignmentId='+response['assignmentId']+'&order='+condition);
							 location.replace(redirect_link+'?WorkerID='+response['workerId']+'&assignmentId='+response['assignmentId']+'&bo='+parseFloat(response['bonus']).toFixed(2)+'&PLATFORM='+response['PLATFORM']+'&order='+condition)
			});
            }, 
           // error: prompt_resubmit
        });
	});
};