class LoginService {
  constructor(authService) {
    this.authService = authService;
  }
  login(email, password, failureHandler) {
    this.authService().signInWithEmailAndPassword(email, password).catch((error) => {
      failureHandler(error);
    })
  }
}

export {LoginService}
