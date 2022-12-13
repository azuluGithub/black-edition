import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import { socialsList } from '../../util/Socials';

import './Hero.style.scss';

class Hero extends PureComponent {
    static propTypes = {
        data: PropTypes.object.isRequired
    }
    
    renderSocial({ icon, id, url }) {
        return (
          <a target='_blank' rel='noreferrer' href={url} className='Hero-SocialImage' key={id}>
            { icon }
          </a>
        );
    }
    
    renderSocials() {
        return (
            <div className='Hero-SocialContainer'>
              { socialsList.map((social) => this.renderSocial(social)) }
            </div>
        );
    }

    renderContacts() {
        return (
            <div className='Hero-Contacts'>
              <div className='Hero-Contact'>
                <div className='Hero-ContactImage'>
                    <FaEnvelope color='white' fontSize={'20px'} />
                </div>
                <a href={`mailto:info@we4ulogistics.co.za`} className='Link Hero-ContactName'>{'info@we4ulogistics.co.za'}</a>
              </div>
              <div className='Hero-Contact'>
                <div className='Hero-ContactImage'>
                    <FaPhoneAlt color='white' fontSize={'20px'} />
                </div>
                <a href={`tel:0875501921`} className='Link Hero-ContactName'>{'(087) 550 1921 '}</a>
                <span className='Hero-TextSpacer'>{'|'}</span>
                <a href={`tel:0634896117`} className='Link Hero-ContactName'>{' (063) 489 6117'}</a>
              </div>
            </div>
        );
    }

    renderContactInfo() {
        return (
            <div className='Hero-ContactInfo'>
                { this.renderContacts() }
                { this.renderSocials() }
            </div>
        );
    }

    renderImage() {
        const { data: { url } } = this.props;

        return (
            <div className='Hero-Image'>
                <img
                    className='Hero-Img'
                    src={url}
                    alt='we4u company services' 
                />
            </div>
        );
    }

    renderContainer() {
        const { data: { heading } } = this.props;

        return (
            <div className='Hero-Container ContainerWrapper'>
                <div className='Hero-Components'>
                    <h2 className='Hero-Heading'>
                        { heading }
                    </h2>
                    { this.renderContactInfo() }
                </div>
            </div>
        )
    }

    renderComponents() {
        return (
          <section className='Hero'>
            { this.renderImage()}
            { this.renderContainer() }
          </section>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default Hero;