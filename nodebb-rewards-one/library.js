var plugin = module.exports;

plugin.getConditionals = function(conditionals, callback) {
	conditionals = conditionals.concat([
		{
			"name": ">",
			"conditional": "greaterthan"
		}
	]);

	callback(false, conditionals);
};

plugin.getConditions = function(conditions, callback) {
	conditions = conditions.concat([
		{
			"name": "Condition One",
			"condition": "test/con-one"
		}
	]);

	callback(false, conditions);
};

plugin.getRewards = function(rewards, callback) {
	rewards = rewards.concat([
		{
			"rid": "test/award-one",
			"name": "Test Award One",
			"inputs": [
				{
					"type": "text",
					"name": "awardOne",
					"label": "Test Award One Value:"
				}
			]
		}
	]);

	callback(false, rewards);
};

plugin.giveAward = function () {};

plugin.greaterthan = function (data, callback) { callback(null, true); };
