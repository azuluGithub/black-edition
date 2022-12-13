import { PureComponent } from 'react';

import './About.style.scss';

class AboutComponent extends PureComponent {
  renderContentAbout() {
    return (
      <div className='About-Content'>
        <div className='About-ContentContainer'>
            <div className='About-ContentWrapper'>
              <span className='About-ContentHeading'>{'This Is Who We Are'}</span>
              <div className='About-Divider'></div>
              <p className='About-ContentParagrph'>
                {'We4U Logistics (Pty) Ltd is a Johannesburg based furniture removals company that focuses on Home, Hotels and Office relocations. We also offer storage units to facilitate customers that do not need to move immediately into their homes.'}
              </p>
              <p className='About-ContentParagrph'>
                {'Our comprehensive range of furniture removal services catters for local and nationwide areas. We are geared to package, handle and transport all types of set ups.'}
              </p>
              <p className='About-ContentParagrph'>
                {'Our approach to business relies on use of our expertise and experience to deliver exceptional services to our clients, on time and on demand. Our staff are trained and emphasised to handle every move as if its their own, and with this, we strive to provide the best, most reliable, competitively affordable and efficient services.'}
              </p>
            </div>
        </div>
      </div>
    );
  }

  renderContentAboutImage() {
    const AboutImg = `${process.env.PUBLIC_URL}/assets/we4u/about_bg.png`;
    
    return (
      <div className='About-Image'>
        <div className='About-ImageContainer'>
          <img 
              className='About-Img' 
              src={AboutImg} 
              alt='we4u company services' 
          /> 
        </div>
      </div>
    );
  }

  renderContentWhyUsImage() {
    const AboutImg = `${process.env.PUBLIC_URL}/assets/we4u/about_bg_2.png`;
    
    return (
      <div className='About-Image'>
        <div className='About-ImageContainer'>
          <img 
              className='About-Img' 
              src={AboutImg} 
              alt='we4u company services' 
          /> 
        </div>
      </div>
    );
  }

  renderContentWhyUs() {
    return (
      <div className='About-Content'>
        <div className='About-ContentContainer'>
            <div className='About-ContentWrapper'>
              <span className='About-ContentHeading'>{'Why You Should Choose Us!'}</span>
              <div className='About-Divider'></div>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark About-ContentParagrphCheckMark_isBlue'>
                {'We4U Logistics (Pty) Ltd offers the best furniture removals and storage services at reasonable and competitive prices without compromising on quality of work.'}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark About-ContentParagrphCheckMark_isBlue'>
                {'Our client care is evident in our pre-planning of moves. We have an Agile approach, ensuring that everything is done efficiently and on time, eliminating nasty surprises for our clients'}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark About-ContentParagrphCheckMark_isBlue'>
                {"We listen to you! We offer bespoke solutions to our clients' unique and specific requirements and schedules. We don't box everyone in one inflexible solution."}
              </p>

              <p className='About-ContentParagrph About-ContentParagrphCheckMark About-ContentParagrphCheckMark_isBlue'>
                {"We have very friendly, honest and reliable teams that are well trained , skilled and well equiped with industry knowledge, experience and great communication skills."}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark About-ContentParagrphCheckMark_isBlue'>
                {"We have a combined sum of over 20 years on experience within the team, and we put our clients first in everything we do."}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark About-ContentParagrphCheckMark_isBlue'>
                {"Most importantly, our fleet is maintained regularly to ensure guaranteed and ontime deliveries as per client's schedule."}
              </p>
            </div>
        </div>
      </div>
    );
  }

  renderAboutComponents() {
    return (
      <div className='About-Split About-AboutComponents'>
        { this.renderContentAboutImage() }
        { this.renderContentAbout() }
      </div>
    );
  }

  renderWorkingWithUsOne() {
    return (
      <div className='About-Content About-Content_hasShadow'>
        <div className='About-ContentContainer'>
            <div className='About-ContentWrapper'>
              <div className='About-ContentHeadingCount'>{'1'}</div>
              <span className='About-ContentHeadingSmall'>{'Choose Your Service'}</span>
              <p className='About-ContentParagrph'>
                {'With a vast selection of services options, it is very easy for find the bespoke solution for you needs. See options of choice below:'}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark  About-ContentParagrphCheckMark_isBrown'>
                {'Browse through Our Services to find your perfect solution'}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark  About-ContentParagrphCheckMark_isBrown'>
                {'If you are not sure what will work or you, do not worry, our team is always waiting to assist you.'}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark  About-ContentParagrphCheckMark_isBrown'>
                {"Give us a call to discuss any other solution that is not listed under our services list."}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark  About-ContentParagrphCheckMark_isBrown'>
                {"Chat with us on our WhatsApp, lets get you the best solution by the end of the chat session."}
              </p>
            </div>
        </div>
      </div>
    );
  }

  renderWorkingWithUsTwo() {
    return (
      <div className='About-Content About-Content_hasShadow'>
        <div className='About-ContentContainer'>
            <div className='About-ContentWrapper'>
              <div className='About-ContentHeadingCount'>{'2'}</div>
              <span className='About-ContentHeadingSmall'>{'Get A Quote'}</span>
              <p className='About-ContentParagrph'>
                {'Getting a quote from us is very simple. Our sales team gets back to you in minutes. Try the following options:'}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark  About-ContentParagrphCheckMark_isBrown'>
                {'Click on any button that says Get A Quote (there are plenty of them).'}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark  About-ContentParagrphCheckMark_isBrown'>
                {'Fill in the Get Free Quote form to get an obligation free quote in a matter of minutes after we call you.'}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark  About-ContentParagrphCheckMark_isBrown'>
                {"Request to be called back from the Contact Us page."}
              </p>

              <p className='About-ContentParagrph About-ContentParagrphCheckMark  About-ContentParagrphCheckMark_isBrown'>
                {"Chat with us on our WhatsApp, lets get you a quote by the end of the chat session."}
              </p>
            </div>
        </div>
      </div>
    );
  }

  renderWorkingWithUsThree() {
    return (
      <div className='About-Content About-Content_hasShadow'>
        <div className='About-ContentContainer'>
            <div className='About-ContentWrapper'>
              <div className='About-ContentHeadingCount'>{'3'}</div>
              <span className='About-ContentHeadingSmall'>{'Confirm Your Trip'}</span>
              <p className='About-ContentParagrph'>
                {'After getting the quote, the process is very seamless. All you have to do is to accept telephonically then enjoy the following:'}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark  About-ContentParagrphCheckMark_isBrown'>
                {'Confirmation correspondence and date booking pack.'}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark  About-ContentParagrphCheckMark_isBrown'>
                {'Reminder and Tips of packing closer to the booking date (if you have opted to pack for yourself)'}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark  About-ContentParagrphCheckMark_isBrown'>
                {"If you have order for packing by us, we will communicate date of packing closer to the booking date."}
              </p>
              <p className='About-ContentParagrph About-ContentParagrphCheckMark  About-ContentParagrphCheckMark_isBrown'>
                {"Get confirmation communication of choice when team is on their way on the day of moving"}
              </p>
            </div>
        </div>
      </div>
    );
  }

  renderWorkingWithUs() {
    return (
      <div className='About-WorkingWithUsContainer'>
        <span className='About-ContentHeading About-ContentHeading_isWhite'>{'Working With Us Is Easy'}</span>
        <div className='About-Divider H2MB'></div>
        <div className='About-Split'>
          { this.renderWorkingWithUsOne() }
          { this.renderWorkingWithUsTwo() }
          { this.renderWorkingWithUsThree() }
        </div>
      </div>
    );
  }

  renderWhyUsComponents() {
    return (
      <div className='About-Split About-WhyUsContainer '>
        { this.renderContentWhyUs() }
        { this.renderContentWhyUsImage() }
      </div>
    );
  }

  renderAbout() {
    return (
      <section className='About'>
        <div className='ContainerWrapper'>
          { this.renderAboutComponents() }
          { this.renderWorkingWithUs() }
          { this.renderWhyUsComponents() }
        </div>
      </section>
    );
  }

  render() {
    return this.renderAbout();
  }
}

export default AboutComponent;