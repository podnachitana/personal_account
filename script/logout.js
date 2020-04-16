document.querySelector("#logout").onclick = function () {
  let c = document.cookie; // получила куку
  let d = new Date(); //
  d.setTime(d.getTime() - 10 * 60 * 1000); // взяла прошедшее время на 10мин назад
  let expires = d.toUTCString();//
  document.cookie = `${c}; expires=${expires}; path=/`;//перезаписала куку
  location.reload();//перезагрузка стр
};


