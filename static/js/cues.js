// Sets the cues depending on the task 

//cues for collector protector cover story gems and bombs
cuesProtect= ()=> {

console.log("inside cuesProtect")
	const cues = {
	collector:
		[['/static/images/cues/GL_story/Rew1.png','gain_low'],
		 ['/static/images/cues/GL_story/Rew2.png','gain_high']],
	protector:
		[['/static/images/cues/GL_story/Pun1.png','loss_low'],
		 ['/static/images/cues/GL_story/Pun2.png','loss_high']],
	small:
		[['/static/images/cues/GL_story/Rew1.png','gain_low'],
		 ['/static/images/cues/GL_story/Pun1.png','loss_low']],
	large:
		[['/static/images/cues/GL_story/Rew2.png','gain_high'],
		 ['/static/images/cues/GL_story/Pun2.png','loss_high']]
	};

	return cues


}

// money cues low and high
cuesMoney= ()=> {

console.log("inside cuesMoney")
	const cues = {
	gain:
		[['/static/images/cues/reward/Rew1.png','gain_low'],
		 ['/static/images/cues/reward/Rew2.png','gain_high']],
	loss:
		[['/static/images/cues/rewardPunish/Pun1_small.png','loss_low'],
		 ['/static/images/cues/rewardPunish/Pun2.png','loss_high']],
	};

	return cues


}


// money cues low and high
cuesMoneyGroup= ()=> {

console.log("inside cuesMoney")
	const cues = {
	Personal_Gain:
		[['/static/images/cues/reward/Rew1.png','gain_low'],
		 ['/static/images/cues/reward/Rew2.png','gain_high']],
	Group_Gain:
		[['/static/images/cues/reward/Rew1.png','gain_low'],
		 ['/static/images/cues/reward/Rew2.png','gain_high']],
	};

	return cues


}


// cuesEfficacy= ()=> {

// 	console.log("inside cuesEfficacy")
// 		const cues = {
// 		random:
// 			[['/static/images/cues/RewardEfficacy/low_reward_low_efficacy.png','random_low'],
// 			['/static/images/cues/RewardEfficacy/high_reward_low_efficacy.png','random_high']],
// 		performance:
// 			[['/static/images/cues/RewardEfficacy/low_reward_high_efficacy.png','performance_low'],
// 			['/static/images/cues/RewardEfficacy/high_reward_high_efficacy.png','performance_high']],
// 		small:
// 			[['/static/images/cues/RewardEfficacy/low_reward_low_efficacy.png','random_low'],
// 			['/static/images/cues/RewardEfficacy/low_reward_high_efficacy.png','performance_low']],
// 		large:
// 			[['/static/images/cues/RewardEfficacy/high_reward_low_efficacy.png','random_high'],
// 			['/static/images/cues/RewardEfficacy/high_reward_high_efficacy.png','performance_high']]
// 		};
	
// 		return cues
	
// }

cuesEfficacy= ()=> {

	console.log("inside cuesEfficacy")
		const cues = {
		randomLow:
			[['/static/images/cues/StoryEfficacyReward/low_reward_low_efficacy.png','random_low']],
		randomHigh:
			[['/static/images/cues/StoryEfficacyReward/high_reward_low_efficacy.png','random_high']],
		performanceLow:
			[['/static/images/cues/StoryEfficacyReward/low_reward_high_efficacy.png','performance_low']],
		performanceHigh:
			[['/static/images/cues/StoryEfficacyReward/high_reward_high_efficacy.png','performance_high']],
		performancePractice:
			[['/static/images/cues/StoryEfficacyReward/button.png','performance_low']],
		randomPractice:
			[['/static/images/cues/StoryEfficacyReward/dice.png','random_low']],
		practiceAll:
		[['/static/images/cues/StoryEfficacyReward/low_reward_low_efficacy.png','random_low'],
		['/static/images/cues/StoryEfficacyReward/high_reward_low_efficacy.png','random_high'],
		['/static/images/cues/StoryEfficacyReward/low_reward_high_efficacy.png','performance_low'],
		['/static/images/cues/StoryEfficacyReward/high_reward_high_efficacy.png','performance_high']
	],
		
		};
	
		return cues
	
}

