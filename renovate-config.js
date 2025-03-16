module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "ludwigsteindl/gepardec-default-quarkus",
        "ludwigsteindl/gepardec-log4j-example"
    ],
    prHourlyLimit: 0,
    ignoreDeps: ["com.gepardec:write-open-rewrite"],
    separateMajorMinor: false,
    packageRules: [
        {
            matchPackageNames: ["io.quarkus{/,}**"],
            groupName: "quarkus",
            groupSlug: "quarkus_{{currentVersion}}_{{newVersion}}"
        },
        {
            matchDatasources: ["maven"],
            matchPackageNames: ["log4j"],
            replacementName: "log4j-core",
            replacementVersion: "2.0"
        }
    ],
    recreateWhen: "always"
    // repositoryCache: true, // This option decides if Renovate uses a JSON cache to speed up extractions.
    // ignorePrAuthor: false,
    // requireConfig: true,
    // optimizeForDisabled: true, // checks for enabled in renovate.json
};
