const path = require('path');


module.exports = {

    webpack: function(config,env){
        if(env==="production"){
            // elementos con un nombre estatico.
            config.output.chunkFilename= 'static/js/[name].chunk.js';
            config.output.filename= 'static/js/[name].js';
            config.plugins[5].options.filename='static/css/[name].css';
            config.plugins[5].options.chunkFilename='static/css/[name].chunk.css';

        }

        return config;

    }

}