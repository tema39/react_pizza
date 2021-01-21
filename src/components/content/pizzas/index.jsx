/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.scss";
function Pizzas() {
  const menuRef = React.createRef();
  const menu = document.querySelector('.container__pizzas')
function sortMenu() {
  setTimeout(() => {
    console.log(menu)
  },  );
  if(menuRef.current.classList.contains('active')){
    menuRef.current.classList.remove('active')
  } else{menuRef.current.classList.add('active')}
}

  return (
    <div className="container__pizzas">
      <div className="filte__wrap">
      <div className="left__block-filter">
        <ul className="filter__list">
          <li className="filter__list-item">
            <button className="filter__button">Все</button>
          </li>
          <li className="filter__list-item">
            <button className="filter__button">Мясные</button>
          </li>
          <li className="filter__list-item">
            <button className="filter__button">Вегетарианская</button>
          </li>
          <li className="filter__list-item">
            <button className="filter__button">Гриль</button>
          </li>
          <li className="filter__list-item">
            <button className="filter__button">Острые</button>
          </li>
          <li className="filter__list-item">
            <button className="filter__button">Закрытые</button>
          </li>
        </ul>
      </div>
      <div className="right__block-sorting">
        <button onClick={sortMenu} className="button__sorting">
          <img class="botton__sorting-icon" src="/images/Vector.svg"></img>
        </button>
        <h3 className="title__sorting">Сортировка по: <span className="sorting__text">популярности</span></h3>
        <ul className="sorting__list" ref={menuRef}>
          <li class="sorting__list-item">
            <button class="item__button">популярности</button>
          </li>
          <li class="sorting__list-item">
            <button class="item__button">по цене</button>
          </li>
          <li class="sorting__list-item">
            <button class="item__button">по алфавиту</button>
          </li>
        </ul>
      </div>
      </div>
      <div className="all__pizzas">
        <h2 className="title__pizzas">Все пиццы</h2>
        <ul className="pizzas__list">
          <li className="pizzas__list-item">
            <img className="pizzas__img" src="./images/pizza1.png"></img>
            <h3 className="caption__pizzas">Чизбургер-пицца</h3>
            <div className="configuration__pizzas-wrap">
              <div className="btn__thickness-pizzas">
                <button className="thin__pizzas">Тонкая</button>
                <button className="traditional__pizzas">Традиционная</button>
              </div>
              <div className="size__pizzas-wrap">
                <button className="button__size-pizzas">26 см.</button>
                <button className="button__size-pizzas">30 см.</button>
                <button className="button__size-pizzas">40 см.</button>
              </div>
              </div>
              <div className="price__pizzas-wrap">
                <p className="price__text">от 395 ₽</p>
                <button className="button__add-pizzas">
                  <img className="plus__icon" src="./images/plus.svg"></img>
                  Добавить
                </button>
              </div>
            
          </li>
          <li className="pizzas__list-item">
            <img className="pizzas__img" src="./images/pizza2.png"></img>
            <h3 className="caption__pizzas">Сырная</h3>
            <div className="configuration__pizzas-wrap">
              <div className="btn__thickness-pizzas">
                <button className="thin__pizzas">Тонкая</button>
                <button className="traditional__pizzas">Традиционная</button>
              </div>
              <div className="size__pizzas-wrap">
                <button className="button__size-pizzas">26 см.</button>
                <button className="button__size-pizzas">30 см.</button>
                <button className="button__size-pizzas">40 см.</button>
              </div>
              </div>
              <div className="price__pizzas-wrap">
                <p className="price__text">от 450 ₽</p>
                <button className="button__add-pizzas">
                  <img className="plus__icon" src="./images/plus.svg"></img>
                  Добавить
                </button>
              </div>
            
          </li>
          <li className="pizzas__list-item">
            <img className="pizzas__img" src="./images/pizza3.png"></img>
            <h3 className="caption__pizzas">Криветки по-азиатски</h3>
            <div className="configuration__pizzas-wrap">
              <div className="btn__thickness-pizzas">
                <button className="thin__pizzas">Тонкая</button>
                <button className="traditional__pizzas">Традиционная</button>
              </div>
              <div className="size__pizzas-wrap">
                <button className="button__size-pizzas">26 см.</button>
                <button className="button__size-pizzas">30 см.</button>
                <button className="button__size-pizzas">40 см.</button>
              </div>
              </div>
              <div className="price__pizzas-wrap">
                <p className="price__text">от 290 ₽</p>
                <button className="button__add-pizzas">
                  <img className="plus__icon" src="./images/plus.svg"></img>
                  Добавить
                </button>
              </div>
            
          </li>
          <li className="pizzas__list-item">
            <img className="pizzas__img" src="./images/pizza4.png"></img>
            <h3 className="caption__pizzas">Сырный цыпленок</h3>
            <div className="configuration__pizzas-wrap">
              <div className="btn__thickness-pizzas">
                <button className="thin__pizzas">Тонкая</button>
                <button className="traditional__pizzas">Традиционная</button>
              </div>
              <div className="size__pizzas-wrap">
                <button className="button__size-pizzas">26 см.</button>
                <button className="button__size-pizzas">30 см.</button>
                <button className="button__size-pizzas">40 см.</button>
              </div>
              </div>
              <div className="price__pizzas-wrap">
                <p className="price__text">от 385 ₽</p>
                <button className="button__add-pizzas">
                  <img className="plus__icon" src="./images/plus.svg"></img>
                  Добавить
                </button>
              </div>
            
          </li>
          <li className="pizzas__list-item">
            <img className="pizzas__img" src="./images/pizza1.png"></img>
            <h3 className="caption__pizzas">Чизбургер-пицца</h3>
            <div className="configuration__pizzas-wrap">
              <div className="btn__thickness-pizzas">
                <button className="thin__pizzas">Тонкая</button>
                <button className="traditional__pizzas">Традиционная</button>
              </div>
              <div className="size__pizzas-wrap">
                <button className="button__size-pizzas">26 см.</button>
                <button className="button__size-pizzas">30 см.</button>
                <button className="button__size-pizzas">40 см.</button>
              </div>
              </div>
              <div className="price__pizzas-wrap">
                <p className="price__text">от 395 ₽</p>
                <button className="button__add-pizzas">
                  <img className="plus__icon" src="./images/plus.svg"></img>
                  Добавить
                </button>
              </div>
            
          </li>
          <li className="pizzas__list-item">
            <img className="pizzas__img" src="./images/pizza2.png"></img>
            <h3 className="caption__pizzas">Сырная</h3>
            <div className="configuration__pizzas-wrap">
              <div className="btn__thickness-pizzas">
                <button className="thin__pizzas">Тонкая</button>
                <button className="traditional__pizzas">Традиционная</button>
              </div>
              <div className="size__pizzas-wrap">
                <button className="button__size-pizzas">26 см.</button>
                <button className="button__size-pizzas">30 см.</button>
                <button className="button__size-pizzas">40 см.</button>
              </div>
              </div>
              <div className="price__pizzas-wrap">
                <p className="price__text">от 450 ₽</p>
                <button className="button__add-pizzas">
                  <img className="plus__icon" src="./images/plus.svg"></img>
                  Добавить
                </button>
              </div>
            
          </li>
          <li className="pizzas__list-item">
            <img className="pizzas__img" src="./images/pizza3.png"></img>
            <h3 className="caption__pizzas">Криветки по-азиатски</h3>
            <div className="configuration__pizzas-wrap">
              <div className="btn__thickness-pizzas">
                <button className="thin__pizzas">Тонкая</button>
                <button className="traditional__pizzas">Традиционная</button>
              </div>
              <div className="size__pizzas-wrap">
                <button className="button__size-pizzas">26 см.</button>
                <button className="button__size-pizzas">30 см.</button>
                <button className="button__size-pizzas">40 см.</button>
              </div>
              </div>
              <div className="price__pizzas-wrap">
                <p className="price__text">от 290 ₽</p>
                <button className="button__add-pizzas">
                  <img className="plus__icon" src="./images/plus.svg"></img>
                  Добавить
                </button>
              </div>
            
          </li>
          <li className="pizzas__list-item">
            <img className="pizzas__img" src="./images/pizza4.png"></img>
            <h3 className="caption__pizzas">Сырный цыпленок</h3>
            <div className="configuration__pizzas-wrap">
              <div className="btn__thickness-pizzas">
                <button className="thin__pizzas">Тонкая</button>
                <button className="traditional__pizzas">Традиционная</button>
              </div>
              <div className="size__pizzas-wrap">
                <button className="button__size-pizzas">26 см.</button>
                <button className="button__size-pizzas">30 см.</button>
                <button className="button__size-pizzas">40 см.</button>
              </div>
              </div>
              <div className="price__pizzas-wrap">
                <p className="price__text">от 385 ₽</p>
                <button className="button__add-pizzas">
                  <img className="plus__icon" src="./images/plus.svg"></img>
                  Добавить
                </button>
              </div>
            
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Pizzas;
