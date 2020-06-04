let currentPage = 0;
let storiesCount = 15;
const container = document.querySelector('#main-container');
if (document.location.pathname == "/success") {
  currentPage = 8;
}

const returnTemplate = (pageNum) => {
  switch (pageNum) {
    case 1:
      return (`<div class="page-layout" style="background: url(./static/img/back-min.jpg) no-repeat; background-size: cover;">
      <div class="gradient"></div>
      <div class="story-indicator">
        <div class="story-item"></div>
        <div class="story-item"></div>
        <div class="story-item"></div>
        <div class="story-item"></div>
        <div class="story-item"></div>
      </div>
      <div class="page-content">
        <div class="prev-page"></div>
        <div class="next-page"></div>
        <div class="titles">
          <h1 class="page-title">Нравится постить сторис с едой в <img src="./static/img/instagram-title.png" width="224px" alt="instagram">?</h1>
          <h3 class="page-subtitle mp-subtitle">Делись сторис с друзьями и кушай в ресторанах бесплатно</h3>
        </div>
        <div class="buttons">
          
        </div>
      </div>
    </div>`);
    case 2:
      return (`<div class="page-layout">
      <div class="story-indicator">
        <div class="story-item active"></div>
        <div class="story-item"></div>
        <div class="story-item"></div>
        <div class="story-item"></div>
        <div class="story-item"></div>
      </div>
      <div class="page-content">
        <div class="prev-page"></div>
        <div class="next-page"></div>
        <div class="titles">
          <h2 class="page-title">Выбирайте еду из ресторанов</h1>
          <h3 class="page-subtitle">Мясо, бургеры, пицца, суши и многое другое. Бесплатно!</h3>
        </div>
        <div class="image">
          <img src="./static/img/food-cards-min.png" width="260px" alt="munchies">
        </div>
      </div>
    </div>`);
    case 3:
      return (`<div class="page-layout">
      <div class="story-indicator">
        <div class="story-item active"></div>
        <div class="story-item active"></div>
        <div class="story-item"></div>
        <div class="story-item"></div>
        <div class="story-item"></div>
      </div>
      <div class="page-content">
        <div class="prev-page"></div>
        <div class="next-page"></div>
        <div class="titles">
          <h2 class="page-title">Курьер бесплатно доставит еду</h1>
          <h3 class="page-subtitle">А пока можно выбрать сериальчик</h3>
        </div>
        <div class="image">
          <img src="./static/img/peeps-min.png" width="260px" alt="munchies">
        </div>
      </div>
    </div>`);
    case 4:
      return (`<div class="page-layout">
      <div class="story-indicator">
        <div class="story-item active"></div>
        <div class="story-item active"></div>
        <div class="story-item active"></div>
        <div class="story-item"></div>
        <div class="story-item"></div>
      </div>
      <div class="page-content">
        <div class="prev-page"></div>
        <div class="next-page"></div>
        <div class="titles">
          <h2 class="page-title">Расскажи друзьям о блюде в <img src="./static/img/instagram-second-title.png" width="159px" alt="instagram"></h1>
          <h3 class="page-subtitle">Теперь время выложить еду в сторис и отметить ресторан</h3>
        </div>
        <div class="image">
          <img src="./static/img/croods-min.png" width="100%" alt="munchies">
        </div>
      </div>
    </div>`);
    case 5:
      return (`<div class="page-layout">
      <div class="story-indicator">
        <div class="story-item active"></div>
        <div class="story-item active"></div>
        <div class="story-item active"></div>
        <div class="story-item active"></div>
        <div class="story-item"></div>
      </div>
      <div class="page-content">
        <div class="titles">
          <h2 class="page-title">Хочешь покушать бесплатно?</h1>
          <h3 class="page-subtitle">О ресторане узнают ваши подписчики, а Вы насладитесь лучшими блюдами</h3>
          <img src="./static/img/croods-min.png" width="200px" alt="munchies" style="margin-top: 20px">
        </div>
        <div class="buttons">
          <button type="button" class="btn btn-info" data-link="8" id="goToForm">Да!</button>
          <button type="button" class="next-page btn calc-button">Сколько блюд можно получить бесплатно?</button>
        </div>
      </div>
    </div>`);
    case 6:
      return (`<div class="page-layout">
      <div class="story-indicator">
        <div class="story-item active"></div>
        <div class="story-item active"></div>
        <div class="story-item active"></div>
        <div class="story-item active"></div>
        <div class="story-item"></div>
      </div>
      <div class="page-content">
        <div class="prev-page"></div>
        <div class="next-page"></div>
        <div class="titles">
          <h2 class="page-title">Сторис с едой</h1>
          <h3 class="page-subtitle">В месяц за каждую сторис Вы бесплатно получите до</h3>
        </div>
        <div class="image">
          <img src="./static/img/15dishes-min.png" width="100%" alt="dishes">
        </div>
      </div>
    </div>`);
    case 7:
      return (`<div class="page-layout">
      <div class="story-indicator">
        <div class="story-item active"></div>
        <div class="story-item active"></div>
        <div class="story-item active"></div>
        <div class="story-item active"></div>
        <div class="story-item active"></div>
      </div>
      <div class="page-content">
        <div class="titles">
          <h2 class="page-title">Сэкономил – значит заработал</h1>
          <h3 class="page-subtitle">За месяц Вы получите еду из ресторанов на сумму до</h3>
        </div>
        <div class="image">
          <img src="./static/img/money-min.png" width="100%" alt="money">
        </div>
        <img src="./static/img/assistant-min.png" width="215px" alt="assistant">
        <div class="buttons">
          <button type="button" class="btn btn-info" id="interest">Да!</button>
        </div>
      </div>
    </div>`);
    case 8:
      return (`<div class="page-layout">
      <div class="page-content">
         <div class="back" id="back">
         </div>
        <div class="titles form-titles">
          <h2 class="page-title">Знакомство</h1>
          <h3 class="page-subtitle form-subtitle">Пару слов о вас</h3>
        </div>
        <form id="registration" action="/register" method="POST">
          <div class="body">
            <label for="cusine">Ваша любимая кухня?</label>
            <select name="cusine" id="cusine">
              <option value="any">Любая</option>
              <option value="asian">Азиатская</option>
              <option value="japan">Японская</option>
              <option value="euro">Европейская</option>
              <option value="india">Индийская</option>
              <option value="mexico">Мексиканская</option>
              <option value="russian">Российская</option>
            </select>
            <label for="followers">Сколько у Вас подписчиков?</label>
            <select name="followers" id="followers">
              <option value="&#60;1000">&#60;1000</option>
              <option value="1000-5000">1000-5000</option>
              <option value="5000-15000">5000-15000</option>
              <option value="15000-35000">15000-35000</option>
              <option value="35000-100000">35000-100000</option>
              <option value="&#62;100000">&#62;100000</option>
            </select>
            <label for="email">Ваша почта?</label>
            <input type="email" name="email" id="email" placeholder="username@gmail.com" required>
          </div>
          <div class="buttons">
            <button type="submit" class="btn btn-dark">Зарегестрироваться</button>
          </div>
        </form>
      </div>`);
    case 9:
      return (`<div class="page-layout">
      <div class="page-content">
        <div class="titles">
          <h2 class="page-title">К сожалению, мы еще не работаем в вашем городе</h1>
          <h3 class="page-subtitle">Мы будем счастливы сообщить вам о скором открытии.</h3>
        </div>
        <img src="./static/img/assistant-agree-min.png" width="215px" alt="assistant">
        <div class="buttons">
          <button type="button" class="next-page btn btn-info">Ok</button>
        </div>
      </div>
    </div>`);
    case 10:
      return (`<div class="page-layout">
      <div class="page-content">
        <div class="titles">
          <h2 class="page-title">К сожалению, мы еще не работаем в вашем городе</h1>
          <h3 class="page-subtitle">Мы будем счастливы сообщить вам о скором открытии.</h3>
        </div>
        <img src="./static/img/assistant-reply-min.png" width="100%" alt="assistant" style="margin-top: 60px">
        <div class="buttons" style="visibility: hidden;" id="assistantReply">
          <button type="button" class="btn btn-info">Ok</button>
        </div>
      </div>
    </div>`);
    case 11:
      return (`<div class="page-layout">
      <div class="page-content">
        <div class="">
          <div class="" style="text-align: center;">
            <img src="./static/img/final-thanks-min.png" width="238px" alt="assistant">
          </div>
          
          <div class="final-container">
            <h3>Спасибо!</h3>
            <p>Вы узнаете первым об открытии сервиса.</p>
            <p>А пока можете подписаться на наши социальные сети.</p>
            <a href="instagram.com"><button type="button" class="btn btn-info btn-inst">Instagram</button></a>
            <button type="button" class="btn btn-dark" id="questions">Есть вопросы?</button>
          </div>
        </div>
      </div>
    </div>`);
    case 12:
      return (`<div class="page-layout">
      <div class="page-content">
        <div class="">
          <div class="" style="text-align: center;">
            <img src="./static/img/final-contact-min.png" width="238px" alt="assistant">
          </div>
          
          <div class="titles">
            <h2 class="page-title" style="font-size: 32px;">Пишите нам, и мы обязательно ответим!</h1>
            <div class="final-inputs">
              <input class="contact-us" id="contact-us" value="info@business.com" readonly>
              <input class="copied" value="Скопировано" readonly>
            </div>
          </div>
        </div>
      </div>
    </div>`);
  }
};
// const query = function (url, data) {
//   let xhr = new XMLHttpRequest();

//   xhr.open("POST", url);
//   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xhr.send(data);
//   console.log(data, url)
// };
// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     body: data // body data type must match "Content-Type" header
//   });
//   return await response.json(); // parses JSON response into native JavaScript objects
// }

const renderPage = (page) => { 
  const updatedPage = page === `prev` ? currentPage - 1 : currentPage + 1;
  const newTemplate = returnTemplate(updatedPage);
  if (newTemplate) {
    currentPage = updatedPage;
    container.innerHTML = ``;
    container.insertAdjacentHTML(`afterbegin`, returnTemplate(currentPage));
    const prevSlide = container.querySelector(`.prev-page`);
    const nextSlide = container.querySelector(`.next-page`);
    const storyCountSelect = container.querySelector(`#vol`);
    const storyCouunt = container.querySelector(`.rande-output`);
    const goToFormButton = container.querySelector(`#goToForm`);
    const backButton = container.querySelector(`#back`);
    const interestButton = container.querySelector(`#interest`);
    const form = container.querySelector(`#registration`);
    const assistantReply = container.querySelector(`#assistantReply`);
    const questionsButton = container.querySelector(`#questions`);
    const contactUsInput = container.querySelector(`#contact-us`);

    if (storyCountSelect && storyCouunt) {
      storyCountSelect.addEventListener(`change`, () => {
        storiesCount = storyCountSelect.value
        storyCouunt.innerText = storiesCount;
      })
    }
    if (goToFormButton) {
      goToFormButton.addEventListener(`click`, () => {
        currentPage = +goToFormButton.getAttribute(`data-link`) - 1;
        renderPage(`next`);
      })
    }
    if (backButton) {
      backButton.addEventListener(`click`, () => {
        currentPage = 4;
        renderPage(`next`);
      })
    }
    if (interestButton) {
      interestButton.addEventListener(`click`, () => {
        renderPage(`next`);
      })
    }
    // if (form) {
    //   form.addEventListener(`submit`, (evt) => {
    //     evt.preventDefault();
    //     postData(`http://localhost:3000/register`, new FormData(form));
    //     // renderPage();
    //   })
    // }
    if (questionsButton) {
      questionsButton.addEventListener(`click`, () => {
        renderPage(`next`);
      })
    }
    if (contactUsInput) {
      contactUsInput.addEventListener(`click`, () => {
        container.querySelector(`.copied`).style = `display: initial`;
        contactUsInput.select();
        document.execCommand(`copy`);
      })
    }
    if (assistantReply) {
      setTimeout(() => {
        renderPage(`next`);
      }, 1500)
    }
    if (prevSlide) {
      prevSlide.addEventListener(`click`, () => {
        renderPage(`prev`);
      })
    }
    if (nextSlide) {
      nextSlide.addEventListener(`click`, () => {
        renderPage(`next`);
      })
    }
   
  }
};

renderPage(`next`);