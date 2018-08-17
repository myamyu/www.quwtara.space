module.exports = {
	"env": {
			"browser": true,
			"es6": true,
			"commonjs": true
	},
	"extends": [
		"plugin:vue/essential"
	],
	"parserOptions": {
			"sourceType": "module"
	},
	"globals": {
		"window": true,
		"$": true,
		"customLinkLog": true
	},
	"rules": {
			"indent": ["warn", "tab"],
			"quotes": ["error", "single"],
			"semi": ["error", "always"]
	}
};
