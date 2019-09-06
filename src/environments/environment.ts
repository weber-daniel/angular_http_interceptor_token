// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const BACKEND_URL = 'https://jsonplaceholder.typicode.com';

export const environment = {
  production: false,
  tokenKey: 'STORE_TOKEN_APP_KEY',
  fakeTokenValue: 'FAKE_TOKEN_443e4tgf4t3e4g4g34534s34',
  endpoints: {
    user: {
      getUserList: `${BACKEND_URL}/users`,
      addUser: `${BACKEND_URL}/users`,
      editUser: `${BACKEND_URL}/users`,
      deleteUser: `${BACKEND_URL}/users`
    },
    fakeRest: {
      getPostList: `${BACKEND_URL}/posts`,
      getCommentList: `${BACKEND_URL}/comments`,
      getAlbumList: `${BACKEND_URL}/albums`,
      getTodoList: `${BACKEND_URL}/todos`,
      getPhotoList: `${BACKEND_URL}/photos`,
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
