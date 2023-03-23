import './App.scss';
import logo from './assets/images/logo.svg';
import img from './assets/images/image-web-3-desktop.jpg';
import retro from './assets/images/image-retro-pcs.jpg';
import laptops from './assets/images/image-top-laptops.jpg';
import gaming from './assets/images/image-gaming-growth.jpg';


function App() {
  return (
    <div>
      <div className="wrapper">
        <header className='header'>
          <a href='#' className="header__logo"><img src={logo} alt="logo" /></a>
          <nav>
            <ul className='header__nav'>
              <li className='header__nav-item'><a href="#">Home</a></li>
              <li className='header__nav-item'><a href="#">New</a></li>
              <li className='header__nav-item'><a href="#">Popular</a></li>
              <li className='header__nav-item'><a href="#">Trending</a></li>
              <li className='header__nav-item'><a href="#">Categories</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section className='main-section'>
            <div className='main-block'>
              <img src={img} alt="web 3.0 illustration" className='main-block__img'/>
              <div className="main-block__description">
                <h1 className='main-block__title'>The Bright Future of Web 3.0?</h1>
                <div className="main-block__text-wrapper">
                  <p className='main-block__text'>  We dive into the next evolution of the web that claims to the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                  <a href="#" className='main-block__link'>Read more</a>
                </div>
              </div>
            </div>
            <div className='new-articles'>
              <h2 className='new-articles__title'>New</h2>
              <ul className='articles-list'>
                <li className='articles-list__item'>
                  <a href="">
                    <h3 className='articles-list__item-title'>Hydrogen VS Electric Cars</h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                  </a>
                </li>
                <li className='articles-list__item'>
                  <a href="">
                    <h3 className='articles-list__item-title'>The Downsides of AI Artistry</h3>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                  </a>
                </li>
                <li className='articles-list__item'>
                  <a href="">
                    <h3 className='articles-list__item-title'>Is VC Funding Drying Up?</h3>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className='bottom-section'>
            <article>
              <img src={retro} alt="retro pcs" />
              <div>01</div>
              <h3>Reviving Retro PCs</h3>
              <p>What happens when old PCs are given modern upgrades?</p>
            </article>
            <article>
              <img src={laptops} alt="top 10 laptops" />
              <div>02</div>
              <h3>Top 10 Laptops of 2022</h3>
              <p>Our best picks for various needs and budgets.</p>
            </article>
            <article>
              <img src={gaming} alt="gaming growth" />
              <div>03</div>
              <h3>The Growth of Gaming</h3>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
