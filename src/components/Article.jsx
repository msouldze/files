import '../assets/styles/Article.css'

export default function Article() {
  return (
    <section className='article-container'>
        <div className='article-details'>
            <div className='article-info'>
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
        </div>
        <div className='article-text'>
            <h3 className='text-header'>Est Ampyciden pater patent</h3>
            <div className='text-subsection'>
                <h4 className='subsection-header'>Amor saxa inpiger</h4>
                <p className='subsection-text'>Lorem markdownum Stygias neque is referam fudi, breve per. Et Achaica tamen: nescia ista occupat, illum se ad potest humum et.</p>
            </div>
            <div className='text-subsection'>
                <h4 className='subsection-header'>Qua deos has fontibus</h4>
                <p className='subsection-text'>Recens nec ferro responsaque dedere armenti opes momorderat pisce, vitataque et fugisse. Et iamque incipiens, qua huius suo omnes ne pendentia citus pedum.</p>
            </div>
            <div className='text-subsection'>
                <h4 className='subsection-header'>Quamvis pronuba</h4>
                <p className='subsection-text'>Ulli labore facta. Io cervis non nosterque nullae, vides: aethere Delphice subit, tamen Romane ob cubilia Rhodopen calentes librata! Nihil populorum flava, inrita? Sit hic nunc, hoc formae Esse illo? Umeris eram similis, crudelem de est relicto ingemuit finiat Pelia uno cernunt Venus draconem, hic, Methymnaeae.</p>
                <ol>
                    <li>Clamoribus haesit tenentem iube Haec munera</li>
                    <li>Vincla venae</li>
                    <li>Paris includere etiam tamen</li>
                    <li>Superi te putria imagine Deianira</li>
                    <li>Tremore hoste Esse sed perstat capillis siqua</li>
                </ol>
            </div>
        </div>
    </section>
  )
}