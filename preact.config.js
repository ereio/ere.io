const path = require('path');


// Custom folders for css 
// https://github.com/preactjs/preact-cli/issues/522#issuecomment-370835370 
// https://github.com/preactjs/preact-cli/wiki/FAQs
// https://github.com/preactjs/preact-cli/issues/774 - version based loaders or rules

export default function (config, env, helpers) {

    config.module.rules[4].include = [
        path.resolve(__dirname, 'src', 'global'),
        path.resolve(__dirname, 'src', 'components'),
        path.resolve(__dirname, 'src', 'views')
    ];

    config.module.rules[5].exclude = [
        path.resolve(__dirname, 'src', 'global'),
        path.resolve(__dirname, 'src', 'components'),
        path.resolve(__dirname, 'src', 'views')
    ];
}