import React, { Component } from 'react';

class AbstractForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState()
  }
  getInitialState() {
    return {};
  }
  commonPasswords = ['password', '123456', '123456123456', 'password12345678', '12345678', '12345', '12345qwerty', 'abc123', 'qwerty', '12345678abc123', 'footballmonkey', 'monkey', '123456789', 'qwerty1234567', 'letmein', '111111', '1234', 'football', '1234567890letmein', 'dragon', '1234567', 'baseball', '1234567trustno1', 'iloveyou', 'princessdragon', 'adobe123[a]', '1234baseball', '123123', 'welcome', 'login111111', 'trustno1', 'admin', '1234567890', 'welcomeiloveyou', 'solomaster', 'sunshine', 'abc123sunshine', 'master', 'photoshop[a]', '1qaz2wsx', 'adminashley', 'mustang', '121212bailey', 'access', 'flowerpassw0rd', 'shadow', 'passw0rdshadow', 'ashley', 'dragon123123', 'michael', 'login', 'sunshine654321', 'jesus', 'password1', 'superman', 'princess', 'mastersuperman', '696969', 'qwertyuiop', 'hottieqazwsx', 'ninja', 'azerty', 'solo', 'lovememichael', 'batman', 'passw0rd', 'zaq1zaq1Football', '000000', 'starwars'];

  passwordValidator = (value) => {
    return this.commonPasswordValidator(
        ...this.repetitionValidator(
          ...this.mixedCharactersValidator(
              ...this.lengthValidator(value))));
  }
  static validatorBase(value, validation=null, feedback='', worker) {
    let v = ['', validation, feedback];
    if (value) v = worker();
    if (validation === 'error') {
      v[1] = validation;
    } else if (v[1] !== 'error' && validation === 'warning') {
      v[1] = validation;
    }
    return v
  }
  lengthValidator = (value, validation, feedback, min_length=8, preferred_length=10) => {
    if (!feedback) {feedback = '';}
    return AbstractForm.validatorBase(value, validation, feedback, () => {
      const length = value.length;
      const lengthWarn = feedback+'Recommended length > '+preferred_length+'\n';
      const lengthError = 'Minimum length: '+min_length+'\n';
      if (length > preferred_length) return [value, 'success', feedback];
      else if (length > min_length) return [value, 'warning', feedback+lengthWarn];
      else if (length > 0) return [value, 'error', feedback+lengthError];
    });
  }
  mixedCharactersValidator = (value, validation, feedback) => {
    const mixedCharErr = 'Must include at least one number.'+'\n';
    const mixedCaseWarn = 'Including lower AND uppercase letters is recommended.';
    return AbstractForm.validatorBase(value, validation, feedback, () => {
      const has_lower = /[a-z]/.test(value);
      const has_upper = /[A-Z]/.test(value);
      const has_digit = /[0-9]/.test(value);
      if (has_lower && has_upper && has_digit) return [value, 'success', feedback];
      if ((has_lower || has_upper) && has_digit) return [value, 'warning', feedback+mixedCaseWarn];
      return [value, 'error', feedback+mixedCharErr]
    });
  }
  repetitionValidator = (value, validation, feedback) => {
    const repErr = 'Repeating digits or characters is not recommended. e.g. "11123"'
    return AbstractForm.validatorBase(value, validation, feedback, () => {
      const has_dupe_alpha = (/([a-z])\2/i).test(value);
      const has_dupe_digit = /[0-9]\2/.test(value);
      if (has_dupe_alpha && has_dupe_digit) return [value, 'error', feedback+repErr];
      if (has_dupe_alpha || has_dupe_digit) return [value, 'error', feedback+repErr];
      return [value, 'success', feedback]
    })
  }
  commonPasswordValidator = (value, validation, feedback) => {
    const pwError = "You've used a common password, please pick another.\n";
    return AbstractForm.validatorBase(value, validation, feedback, () => {
      let pws = this.commonPasswords;
      if (pws.some(function(p) { return value.indexOf(p) >= 0; })) {
        return [value, 'error', feedback+pwError];
      }
      return [value, 'success', feedback]
    })
  }

  handleChange = (e) => {
    let _ = {};
    let prop_name = e.target.id.split('-', 2)[1];
    let methodName = prop_name+'Validator';
    if (typeof this[methodName] === 'function') {
      let r = this[methodName](e.target.value);
      _[prop_name] = {value: r[0], status: r[1], feedback: r[2]};
    } else {
      _[prop_name] = {value: e.target.value, status: null, feedback: ''}
    }
    this.setState(_);
  }
}

export {AbstractForm}
