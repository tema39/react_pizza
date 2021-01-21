/* eslint-disable jsx-a11y/alt-text */
import "./styles.scss";
function Header() {
    return (
      <header className="header">
          <div className="left__block-logo">
            <div className="logo__wrap">
              <img className="logo__icon" src="./images/logotip_pizza.svg"></img>
            </div>
            <div className="logo__title-wrap">
              <h1 className="logo__title">REACT PIZZA</h1>
              <p className="logo__subtitle">самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <div className="right__block-buttons">
            <button className="button__price">500 p</button>
            <button className="button__crate">
              <img className="button__crate-icon" src="./images/iconfinder_shopping-cart.svg"></img>
            </button>
          </div>
      </header>
    )
}

export default Header;