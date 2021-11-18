function stringContainsNumber(_string) {
  return /\d/.test(_string);
}
function stringContainsSmallLetter(_string) {
  return /[a-z]/.test(_string);
}
function stringContainsCapitalLetter(_string) {
  return /[A-Z]/.test(_string);
}

function validate(setMessage, password1, password2, name, surname) {
  if (stringContainsNumber(name)) {
    setMessage("Name can't contain a number");
    return false;
  }
  if (stringContainsNumber(surname)) {
    setMessage("Surname can't contain a number");
    return false;
  }
  if (name.length < 2 || name.length > 50) {
    setMessage('Name should have between 2 to 50 characters');
    return false;
  }
  if (surname.length < 2 || surname.length > 50) {
    setMessage('Surname should have between 2 to 50 characters');
    return false;
  }
  if (password1 !== password2) {
    setMessage("Passwords aren't identical");
    return false;
  }
  if (password1.length < 8 || password1.length > 20) {
    setMessage('Passwords must contain from 8 to 20 characters');
    return false;
  }
  if (!stringContainsNumber(password1)) {
    setMessage('Password should have at least 1 number');
    return false;
  }
  if (!stringContainsSmallLetter(password1)) {
    setMessage('Password should have at least 1 small letter');
    return false;
  }
  if (!stringContainsCapitalLetter(password1)) {
    setMessage('Password should have at least 1 capital letter');
    return false;
  }
  return true;
}

export default validate;
