//.versionrc.js
const versionRegex = /version = '(\d+.\d+.\d+(-\S+.\d+)?)'/;
const gradleFile = 'build.gradle';
const gradleFileUpdater = {
    filename: gradleFile,
    updater: {
        readVersion: contents => {
            const match = contents.match(versionRegex);
if (match && match[1]) {
                return match[1];
            }
throw Error(`Could not read version from ${gradleFile}`);
        },
        writeVersion: (contents, version) => contents.replace(versionRegex, `version = '${version}'`)
    }
};
module.exports = {
    header: '# Changelog',
    types: [
        {
            type: 'feat',
            section: '⚡️ Features'
        },
        {
            type: 'fix',
            section: '🐛 Bug Fixes'
        }
    ],
    packageFiles: [gradleFileUpdater],
    bumpFiles: [gradleFileUpdater]
};