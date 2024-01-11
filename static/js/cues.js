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

