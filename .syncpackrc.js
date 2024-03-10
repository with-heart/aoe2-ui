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
  sortAz: ['resolutions', 'preconstruct', 'workspaces'],
  sortExports: [],
  sortFirst: [
    'name',
    'private',
    'version',
    'author',
    'contributors',
    'license',
    'description',
    'keywords',
    'main',
    'module',
    'types',
    'exports',
    'bin',
    'files',
    'scripts',
    'dependencies',
    'devDependencies',
  ],
}
