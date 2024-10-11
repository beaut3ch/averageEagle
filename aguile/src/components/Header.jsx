function Header() {
  return (
    <div className="header">
      <div className="headerInnerContainer">
        <div className="headerLogo">
          <img
            src="./aguile-logo.png"
            alt="AvangerEagle"
            className="App-logo"
          />
        </div>
        <nav className="headerMenu">
          <a href="#home" className="headerMenuItem">
            Home
          </a>
          <a href="#about" className="headerMenuItem">
            About
          </a>
          <a href="#how-to-buy" className="headerMenuItem">
            How to Buy
          </a>
          <a href="#tokenomics" className="headerMenuItem">
            Tokenomics
          </a>
          <a href="#roadmap" className="headerMenuItem">
            Roadmap
          </a>
        </nav>
        <div class="button" role="button" tabindex="0" className="headerBuyNow">
          ¡BUY NOW!
        </div>
      </div>
    </div>
  );
}

export default Header;
