import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { socialsList } from '../../util/Socials';

import './FooterDetails.style.scss';

class FooterDetailsComponent extends PureComponent {

  quickLinks = [
    {
      id: 'About Us',
      name: 'About Us',
      url: '/about'
    },
    {
        id: "Services",
        name: "Services",
        url: "/our-services",
    },
    {
        id: "Contact Us",
        name: "Contact Us",
        url: "/contact/contact",
    },
    {
        id: "Get A Quote Now!",
        name: "Get A Quote Now!",
        url: "/get-a-quote",
    },
  ];

  renderSocial({ icon, id, url }) {
    return (
      <a target='_blank' rel='noreferrer' href={url} className='FooterDetails-SocialImage' key={id}>
        <div 
          className='FooterDetails-SocialImg'
        >
        { icon }
        </div>
      </a>
    );
  }

  renderSocials() {
    return (
        <div className='FooterDetails-SocialContainer'>
          { socialsList.map((social) => this.renderSocial(social)) }
        </div>
    );
  }

  renderQr() {
    const qrCode = `${process.env.PUBLIC_URL}/assets/we4u/we4ulogisitics_qr.png`;

    return (
        <div className='FooterDetails-QrContainer'>
            <img
                className='FooterDetails-Qr'
                src={qrCode} 
                alt='we4u qr logo'
            />
        </div>
    );
}

  renderLinks() {
    const { quickLinks } = this;

    return (
      <div className='FooterDetails-Content'>
        <div className='FooterDetails-ContentContainer'>
          { this.renderLinksItem('Quick Links', quickLinks) }
          { this.renderSocials() }
        </div>
      </div>
    );
  }

  renderLink(url, name) {
    if (!url) {
      return (
        <span>{ name }</span>
      );
    }
    
    return (
      <Link to={url} className='Link FooterDetails-LinkAnchor'>{ name }</Link>
    );
  }

  renderLinkElement(element) {
    const { name, url } = element;

    return (
      <div key={name} className='FooterDetails-LinkElement'>
        { this.renderLink(url, name) }
      </div>
    );
  }

  renderLinksItem(title, list) {
    return (
      <div className='FooterDetails-LinksItem'>
        <span className='FooterDetails-LinksTitle'>{title}</span>
        { list.map(this.renderLinkElement.bind(this)) }
      </div>
    );
  }

  renderQrCode() {
    return (
      <div className=''>
        <span className='FooterDetails-LinksTitle'>{'Follow Us'}</span>
        { this.renderQr() }
      </div>
    );
  }

  renderComponents() {
    return (
      <div className='FooterDetails-Split'>
        { this.renderLinks() }
        { this.renderQrCode() }
      </div>
    );
  }

  renderFooterDetails() {
    return (
      <section className='FooterDetails  PaddedContainer'>
        <div className='ContainerWrapper'>
          { this.renderComponents() }
        </div>
      </section>
    );
  }

  render() {
    return this.renderFooterDetails();
  }
}

export default FooterDetailsComponent;