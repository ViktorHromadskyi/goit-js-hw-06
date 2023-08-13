const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {};
  for (const element of formLogin.elements) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  }
  if (formData.email && formData.password) {
    console.log(formData);
    formLogin.reset();
  } else {
    alert('Всі поля повинні бути заповнені');
  }
});
