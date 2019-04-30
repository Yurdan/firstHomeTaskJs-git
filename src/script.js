
function enter() {
  let login = prompt('Login', '');
  if (login == 'админ') {
    function adminPass() {
      let pass = prompt('Пароль', '');
      if (pass == 'черный властелин') {
        alert('Добро пожаловать');
      } else if (pass == undefined) {
        alert('Вход отменен');
      } else {
        let yesNot = confirm('Пароль неверен \nХотите попробовать еще раз?');
        if (yesNot == true) {
          adminPass();
        } else {
          alert('Досвидания');
        }
      }
    }
    adminPass();
  }
  else if (login == undefined) {
    alert('Вход отменен');
  } else { 
    let yesOrNot = confirm('Патоль неверен \nХотите попробовать еще раз?');
    if (yesOrNot == true) {
      enter();
    }
    else {
      alert('Досвидания');
    }
  }
}

