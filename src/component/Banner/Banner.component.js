import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { socialsList } from '../../util/Socials';

import './Banner.style.scss';

class BannerComponent extends PureComponent {

  renderSocial({ icon, id, url }) {
    return (
      <div className='Banner-SocialImage' key={id}>
        { icon } 
      </div>
    );
  }

  renderContacts() {
      return (
          <div className='Banner-Contacts'>
            <div className='Banner-Contact'>
              <span className='Banner-ContactKey'>{'email'}</span>
              <a href={`mailto:we4u@logistix.co.za`} className='Link Banner-ContactValue'>{'we4u@logistix.co.za'}</a>
            </div>
            <div className='Banner-Contact'>
              <span className='Banner-ContactKey'>{'phone'}</span>
              <a href={`tel:0113001111`} className='Link Banner-ContactValue'>{'(011) 300 1111'}</a>
              <a href={`tel:0234440369`} className='Link Banner-ContactValue'>{'(023) 444 0369'}</a>
            </div>
          </div>
      );
  }

  renderContent() {
    return (
      <div className='Banner-ContentContainer'>
        <div className='Banner-Content'>
          <h2 className='Banner-ContentHeadingName'>
            {'WE 4 U LOGISTICS'}
          </h2>
          <h3 className='Banner-ContentHeading'>
            {'RELOCATION '}
            <span className='Banner-Stroke'>{'SIMPLIFIED'}</span>
            {' AND FURNITURE REMOVALS MADE '}
            <span className='Banner-Stroke'>{'EASY!'}</span>
          </h3>
          <div className='Banner-Divider'></div>
          <p className='Banner-ContentText'>
            {'Click this link to give us a'} 
            <a href='tel:0234440369' className='Banner-ContentTextCall'>{' call '}</a> {'or simply click the button below to get a quick quote.'}
          </p>
          <Link to={'/get-a-quote'} className='Link Banner-ButtonContainer'>
            <button className='Banner-ContentButton Button'>{'get a quote'}</button>
          </Link>
          { this.renderContacts() }
        </div>
      </div>
    );
  }

  renderImage() {
    const img = `${process.env.PUBLIC_URL}/assets/we4u/hero_bg_4_cropped.png`;

    return (
      <div className='Banner-Image'>
        <img
          className='Banner-Img'
          src={img} 
          alt='banner displayed' 
        />
      </div>
    );
  }

  renderSocialItem({ id, img, url }) {
    return (
      <Link to={url} className='Link Banner-SocialsImage' key={id}>
        <img 
            className='Banner-SocialsImg' 
            src={img} 
            alt='We4u Socials' 
        /> 
      </Link>
    );
  }

  renderSocials() {
    return (
        <div className='Banner-SocialContainer'>
          <div className='Banner-SocialWrapper'>
            { socialsList.map((social) => this.renderSocial(social)) }
          </div>
        </div>
    );
  }

  renderBanner() {
    return (
      <section className='Banner-Container'>
        <div className='ContainerWrapper Banner-Split'>
          { this.renderContent() }
          { this.renderImage() }
          { this.renderSocials()}
        </div>
      </section>
    );
  }

  render() {
    return this.renderBanner();
  }
}

export default BannerComponent;