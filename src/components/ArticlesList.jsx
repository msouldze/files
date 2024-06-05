import '../assets/styles/ArticlesList.css'

export default function ArticlesList() {
  return (
    <section className='list'>
      <ul className="articles-list">
        <li className="article">
          <div className='article-details'>
            <div className='article-header'>
              <h3 className="article-title">Some article title</h3>
              <div className='article-like'>
                <img className='likes-heart' src='/heart1.svg' alt='Like Image'/>
                <span className='likes-count'>12</span>
              </div>
            </div>
            <div className="article-tags">
              <span className="first-tag">Tag1</span>
              <span>SomeTag</span>
            </div>
            <p className="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='article-author'>
            <div className='author-info'>
              <div className='author-name'>John Doe</div>
              <div className='article-date'>March 5, 2020</div>
            </div>
            <img src="/Rectangle 1.png" alt="Author Profile Picture" />
          </div>
        </li>
        <li className="article">
          <div className='article-details'>
            <div className='article-header'>
              <h3 className="article-title">Some article title</h3>
              <div className='article-like'>
                <img className='likes-heart' src='/heart1.svg' alt='Like Image'/>
                <span className='likes-count'>12</span>
              </div>
            </div>
            <div className="article-tags">
              <span className="first-tag">Tag1</span>
              <span>SomeTag</span>
            </div>
            <p className="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='article-author'>
            <div className='author-info'>
              <div className='author-name'>John Doe</div>
              <div className='article-date'>March 5, 2020</div>
            </div>
            <img src="/Rectangle 1.png" alt="Author Profile Picture" />
          </div>
        </li>
        <li className="article">
          <div className='article-details'>
            <div className='article-header'>
              <h3 className="article-title">Some article title</h3>
              <div className='article-like'>
                <img className='likes-heart' src='/heart1.svg' alt='Like Image'/>
                <span className='likes-count'>12</span>
              </div>
            </div>
            <div className="article-tags">
              <span className="first-tag">Tag1</span>
              <span>SomeTag</span>
            </div>
            <p className="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='article-author'>
            <div className='author-info'>
              <div className='author-name'>John Doe</div>
              <div className='article-date'>March 5, 2020</div>
            </div>
            <img src="/Rectangle 1.png" alt="Author Profile Picture" />
          </div>
        </li>
        <li className="article">
          <div className='article-details'>
            <div className='article-header'>
              <h3 className="article-title">Some article title</h3>
              <div className='article-like'>
                <img className='likes-heart' src='/heart1.svg' alt='Like Image'/>
                <span className='likes-count'>12</span>
              </div>
            </div>
            <div className="article-tags">
              <span className="first-tag">Tag1</span>
              <span>SomeTag</span>
            </div>
            <p className="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='article-author'>
            <div className='author-info'>
              <div className='author-name'>John Doe</div>
              <div className='article-date'>March 5, 2020</div>
            </div>
            <img src="/Rectangle 1.png" alt="Author Profile Picture" />
          </div>
        </li>
        <li className="article">
          <div className='article-details'>
            <div className='article-header'>
              <h3 className="article-title">Some article title</h3>
              <div className='article-like'>
                <img className='likes-heart' src='/heart1.svg' alt='Like Image'/>
                <span className='likes-count'>12</span>
              </div>
            </div>
            <div className="article-tags">
              <span className="first-tag">Tag1</span>
              <span>SomeTag</span>
            </div>
            <p className="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='article-author'>
            <div className='author-info'>
              <div className='author-name'>John Doe</div>
              <div className='article-date'>March 5, 2020</div>
            </div>
            <img src="/Rectangle 1.png" alt="Author Profile Picture" />
          </div>
        </li>
      </ul>
      <div className="pagination">
        <div className="arrow back">
          {/* <img src="/left.svg" alt="" /> */}
        </div>
        <div className='active-page'>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div className="arrow forward"></div>
      </div>
    </section>
  )
}