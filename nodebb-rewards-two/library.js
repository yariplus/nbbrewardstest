var plugin = module.exports;

plugin.getRewards = function(rewards, callback) {
	rewards = rewards.concat([
		{
			"rid": "test/award-two",
			"name": "Test Award Two",
			"inputs": [
				{
					"type": "text",
					"name": "awardTwo",
					"label": "Test Award Two Value:"
				},
				{
					"type": "text",
					"name": "awardTwoTwo",
					"label": "Test Award Two Second Value:"
				}
			]
		}
	]);

	callback(false, rewards);
};
