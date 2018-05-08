// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDsz08guwtgC5xPQM8tK7tCYeA0y5_LFeA',
    authDomain: 'visedu-firebase-only-project.firebaseapp.com',
    databaseURL: 'https://visedu-firebase-only-project.firebaseio.com',
    projectId: 'visedu-firebase-only-project',
    storageBucket: 'visedu-firebase-only-project.appspot.com',
    messagingSenderId: '750535296812'
  },
  basePath: '//localhost:8080/'
};
