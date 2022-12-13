import { PureComponent } from 'react';

import Header from '../../component/Header';
import Contact from '../../component/Contact';
import Hero from '../../component/Hero';
import Footer from '../../component/Footer';
import Map from '../../component/Map';
import FooterDetails from '../../component/FooterDetails';

class ContactPageComponent extends PureComponent {
    
    renderComponents() {
        const data = {
            heading: 'Contact Us',
            url: `${process.env.PUBLIC_URL}/assets/images/hero/phone.jpg`
        }

        return (
            <div>
                <div className='HomePage-GradientOne'>
                    <Header />
                </div>
                <Hero data={data} />
                <Contact />
                <Map />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderContact() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderContact();
    }
}

export default ContactPageComponent;