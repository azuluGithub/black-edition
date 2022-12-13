import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { socialsList } from '../../util/Socials';

import './Banner.style.scss';

class BannerComponent extends PureComponent {

  renderSocial({ icon, id, url }) {
    return (
      <a target='_blank' rel='noreferrer' href={url} className='Banner-SocialImage' key={id}>
        { icon } 
      </a>
    );
  }

  renderContacts() {
      return (
          <div className='Banner-Contacts'>
            <div className='Banner-Contact'>
              <span className='Banner-ContactKey'>{'email'}</span>
              <a href={`mailto:info@we4ulogistics.co.za`} className='Link Banner-ContactValue'>{'info@we4ulogistics.co.za'}</a>
            </div>
            <div className='Banner-Contact'>
              <span className='Banner-ContactKey'>{'phone'}</span>
              <a href={`tel:0875501921`} className='Link Banner-ContactValue'>{'(087) 550 1921'}</a>
              <a href={`tel:0634896117`} className='Link Banner-ContactValue'>{'(063) 489 6117'}</a>
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
            <a href='tel:0634896117' className='Banner-ContentTextCall'>{' call '}</a> {'or simply click the button below to get a quick quote.'}
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