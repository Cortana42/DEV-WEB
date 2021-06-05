<div class="news_categorie">
                    <p>Gastronomie</p>
                    <p>Vins  alcools</p>
                    <p>Good spots</p>
                    <p>Mode  tendances</p>
                    <p class="news_arrow">Tout voir
                        <svg class="next" xmlns="http://www.w3.org/2000/svg" width="18.725" height="5" viewBox="0 0 18.725 5">
                            <path id="ARROW" d="M15.69,3H0V2H15.69V0l3.035,2.5L15.69,5Z" fill="#e74832"/>
                        </svg>
                    </p>
                    <a class="arrow_up" href="#scrollUp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                        </svg>
                    </a>
                </div>
var burgerMenu = document.querySelector('.burger_menu');
var resp = document.getElementById('resp');
var inner = document.querySelector('.hamburger_inner');
var overlay = document.querySelector('.menu_overlay')

function toggleBurgerMenu(burger, resp, overlay, inner) {
    burger.classList.toggle('active');
    resp.classList.toggle('active');
    overlay.classList.toggle('active');
    inner.classList.toggle('active');
}

burgerMenu.onclick = function () {
    toggleBurgerMenu(burgerMenu, resp, overlay, inner);
}

overlay.onclick = function () {
    toggleBurgerMenu(burgerMenu, resp, overlay, inner);
}