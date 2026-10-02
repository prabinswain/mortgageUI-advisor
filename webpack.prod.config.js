const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const sharedMappings = mf.SharedMappings();

sharedMappings.register(
    path.join(_dirname, 'tsconfig.json'),
    [/ mapped paths to share /]);

module.exports = {
    output: {
        uniqueName: "mMortgageCibc",
        publicPath: "https://#{ENVIRONMENT_ADVISOR_KEY}#/ui/",
        scriptType: 'text/javascript'
    },

    optimization: {
        runtimeChunk: false
    },
    resolve: {

        alias: {
            ...sharedMappings.getAliases(),
        }
    },
    experiments: {
        outputModule: true
    },
    plugins: [new ModuleFederationPlugin({
        library: { type: "module" },

        name: "mMortgageCibc",

        remotes: {

            "calculator": "calculator@#{ENVIRONMENT_KEY}#/dmr-calculator-ui/remoteEntry.js",
        },


        shared: share({

            "@angular/core": { singleton: true, strictVersion: false },

            "@angular/common": { singleton: true, strictVersion: false },

            "@angular/common/http": { singleton: true, strictVersion: false },

            "@angular/router": { singleton: true, strictVersion: false },

            ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
    ],


};