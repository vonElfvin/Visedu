// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBcsOkV4SdWeeYQvz6pnB2Z6w3qqWoiNi8',
    authDomain: 'visedu-app.firebaseapp.com',
    databaseURL: 'https://visedu-app.firebaseio.com',
    projectId: 'visedu-app',
    storageBucket: 'visedu-app.appspot.com',
    messagingSenderId: '1002636738243'
  }
};
