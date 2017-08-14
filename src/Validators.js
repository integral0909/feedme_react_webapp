const commonPasswords = ['password', '123456', '123456123456', 'password12345678', '12345678', '12345', '12345qwerty', 'abc123', 'qwerty', '12345678abc123', 'footballmonkey', 'monkey', '123456789', 'qwerty1234567', 'letmein', '111111', '1234', 'football', '1234567890letmein', 'dragon', '1234567', 'baseball', '1234567trustno1', 'iloveyou', 'princessdragon', 'adobe123[a]', '1234baseball', '123123', 'welcome', 'login111111', 'trustno1', 'admin', '1234567890', 'welcomeiloveyou', 'solomaster', 'sunshine', 'abc123sunshine', 'master', 'photoshop[a]', '1qaz2wsx', 'adminashley', 'mustang', '121212bailey', 'access', 'flowerpassw0rd', 'shadow', 'passw0rdshadow', 'ashley', 'dragon123123', 'michael', 'login', 'sunshine654321', 'jesus', 'password1', 'superman', 'princess', 'mastersuperman', '696969', 'qwertyuiop', 'hottieqazwsx', 'ninja', 'azerty', 'solo', 'lovememichael', 'batman', 'passw0rd', 'zaq1zaq1Football', '000000', 'starwars'];

function validatorBase(value, validation=null, feedback='', worker) {
  let v = ['', validation, feedback];
  if (value) v = worker();
  if (validation === 'error') {
    v[1] = validation;
  } else if (v[1] !== 'error' && validation === 'warning') {
    v[1] = validation;
  }
  return v;
}
function lengthValidator(value, validation, feedback, minLength=8, preferredLength=10) {
  return validatorBase(value, validation, feedback, () => {
    const length = value.length;
    const lengthWarn = (feedback || '')+'Recommended length > '+preferredLength+'\n';
    const lengthError = (feedback || '')+'Minimum length: '+minLength+'\n';
    if (length > preferredLength) return [value, 'success', feedback];
    else if (length > minLength) return [value, 'warning', lengthWarn];
    else if (length > 0) return [value, 'error', lengthError];
  });
}
function mixedCharactersValidator (value, validation, feedback) {
  const mixedCharErr = (feedback || '')+'Must include at least one number.'+'\n';
  const mixedCaseWarn = (feedback || '')+'Including lower AND uppercase letters is recommended.';
  return validatorBase(value, validation, feedback, () => {
    const has_lower = /[a-z]/.test(value);
    const has_upper = /[A-Z]/.test(value);
    const has_digit = /[0-9]/.test(value);
    if (has_lower && has_upper && has_digit) return [value, 'success', feedback];
    if ((has_lower || has_upper) && has_digit) return [value, 'warning', mixedCaseWarn];
    return [value, 'error', mixedCharErr]
  });
}
function repetitionValidator(value, validation, feedback) {
  const repErr = (feedback || '')+'Repeating digits or characters is not recommended. e.g. "11123"'
  return validatorBase(value, validation, feedback, () => {
    const has_dupe_alpha = (/([a-z])\2/i).test(value);
    const has_dupe_digit = /[0-9]\2/.test(value);
    if (has_dupe_alpha && has_dupe_digit) return [value, 'error', repErr];
    if (has_dupe_alpha || has_dupe_digit) return [value, 'error', repErr];
    return [value, 'success', feedback]
  })
}
function commonPasswordValidator(value, validation, feedback) {
  const pwError = (feedback || '')+"You've used a common password, please pick another.\n";
  return validatorBase(value, validation, feedback, () => {
    let pws = commonPasswords;
    if (pws.some(function(p) { return value.indexOf(p) >= 0; })) {
      return [value, 'error', pwError];
    }
    return [value, 'success', feedback]
  })
}

export {commonPasswordValidator, repetitionValidator, mixedCharactersValidator, lengthValidator}
