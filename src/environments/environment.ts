// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCcwV5oiyvA1_lwQUBhT4vkIesauYk2Jfk",
    authDomain: "seemann-jannik.firebaseapp.com",
    databaseURL: "https://seemann-jannik.firebaseio.com",
    projectId: "seemann-jannik",
    storageBucket: "seemann-jannik.appspot.com",
  }
};
