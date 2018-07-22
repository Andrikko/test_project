var dataJson;
var xhr = new XMLHttpRequest();

xhr.open('GET', './db.json', false);

xhr.send();
if (xhr.status != 200) {
  alert(xhr.status + ': ' + xhr.statusText);
} else {
  try {
    var items = JSON.parse(xhr.responseText);
  } catch (e) {
    alert("Некорректный ответ " + e.message);
  }
  getItems(items);
};

function getItems(items) {

  let roadImg1 = "./img/" + items[0].img;
  let roadImg2 = "./img/" + items[1].img;
  let roadImg3 = "./img/" + items[2].img;

  let coupleDate1 = items[0].date.split(" ");
  let coupleDate2 = items[1].date.split(" ");
  let coupleDate3 = items[2].date.split(" ");


  document.getElementById('post-img_tr').setAttribute("src", roadImg1);
  document.getElementById('date_tr').innerHTML = coupleDate1[0] + "<br>" + coupleDate1[1];
  document.getElementById('title_tr').innerHTML = items[0].title;
  document.getElementById('text_tr').innerHTML = items[0].description;
  document.getElementById('under_text_tr').setAttribute('src', roadImg3);

  document.getElementById('post-img_fe').setAttribute("src", roadImg2);
  document.getElementById('date_fe').innerHTML = coupleDate2[0] + "<br>" + coupleDate2[1];
  document.getElementById('title_fe').innerHTML = items[1].title;
  document.getElementById('text_fe').innerHTML = items[1].description;
  document.getElementById('under_text_fe').setAttribute('src', roadImg2);

  document.getElementById('post-img_fl').setAttribute("src", roadImg3);
  document.getElementById('date_fl').innerHTML = coupleDate3[0] + "<br>" + coupleDate3[1];
  document.getElementById('title_fl').innerHTML = items[2].title;
  document.getElementById('text_fl').innerHTML = items[2].description;
  document.getElementById('under_text_fl').setAttribute('src', roadImg3);
}