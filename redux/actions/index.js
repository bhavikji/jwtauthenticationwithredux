import authActions from './authActions';

// this is for you chitraji, this ...authActions is a spread it is use to import all the function from the file for example, it will import all the actions created in authActions file.
//Which means,
/* exports default {
  authenticate,
  reauthenticate,
  deauthenticate,
}
equals to.
export default {
  ...authActions,
};*/

export default {
  ...authActions,
}