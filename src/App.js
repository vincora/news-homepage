import './App.scss';
import logo from './assets/images/logo.svg';
import img from './assets/images/image-web-3-desktop.jpg';
import retro from './assets/images/image-retro-pcs.jpg';
import laptops from './assets/images/image-top-laptops.jpg';
import gaming from './assets/images/image-gaming-growth.jpg';


function App() {
  return (
    <div>
      <header>
        <a href='#' className="logo"><img src={logo} alt="logo" /></a>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <article>
            <img src={img} alt="web 3.0 illustration" />
            <h1>The Bright Future of Web 3.0?</h1>
            <p>  We dive into the next evolution of the web that claims to the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <a href="#">Read more</a>
          </article>
          <div>
            <h2>New</h2>
            <ul>
              <li>
                <h3>Hydrogen VS Electric Cars</h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </li>
              <li>
                <h3>The Downsides of AI Artistry</h3>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
              </li>
              <li>
                <h3>Is VC Funding Drying Up?</h3>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
              </li>
            </ul>
          </div>
        </section>
        <section>
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
  );
}

export default App;
