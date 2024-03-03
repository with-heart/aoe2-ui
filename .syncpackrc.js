// @ts-check
// const pkg = require('./package.json')

/** @type {import("syncpack").RcFile} */
module.exports = {
  dependencyTypes: ['prod', 'dev', 'peer'],
  semverGroups: [
    {
      label: 'Use caret ranges in root package',
      range: '^',
      packages: ['aoe2-ui'],
    },
    {
      label: 'Use tilde versions in prod',
      dependencyTypes: ['prod'],
      range: '~',
    },
    {
      label: 'Use caret ranges in dev and peer',
      dependencyTypes: ['dev', 'peer'],
      range: '^',
    },
  ],
  versionGroups: [
    {
      label: 'Types packages should only be devDependencies',
      dependencies: ['@types/*'],
      dependencyTypes: ['!dev'],
      packages: ['!aoe2-ui'],
      isBanned: true,
    },
    {
      label: 'Use workspace protocol when developing local packages',
      dependencies: ['$LOCAL'],
      dependencyTypes: ['prod'],
      pinVersion: 'workspace:*',
    },
  ],
  sortAz: ['resolutions', 'workspaces'],
  sortFirst: [
    'name',
    'private',
    'version',
    'author',
    'contributors',
    'license',
    'description',
    'keywords',
    'module',
    'types',
    'bin',
    'files',
    'scripts',
    'dependencies',
    'devDependencies',
  ],
}
