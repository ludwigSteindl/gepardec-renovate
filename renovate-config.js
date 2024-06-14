module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Ruhsi/gepardec-default-quarkus"
    ],
    "baseBranches": ["main"],
    allowedPostUpgradeCommands: ["^do-something$"],
    prHourlyLimit: 70,
    postUpgradeTasks: {
        "commands": ["do-something"],
        "executionMode": "branch"
    },
    recreateWhen: "always"
}