class LoginService {
  constructor(authService) {
    this.authService = authService;
  }
  login(email, password, failureHandler) {
    console.log('Do the login thing with', email, password);
    this.authService().signInWithEmailAndPassword(email, password).catch((error) => {
      failureHandler(error);
    })
  }
}

export {LoginService}
