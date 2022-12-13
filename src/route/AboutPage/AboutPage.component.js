import { PureComponent } from 'react';

import Header from '../../component/Header';
import About from '../../component/About';
import Hero from '../../component/Hero';
import Footer from '../../component/Footer';
import FooterDetails from '../../component/FooterDetails';

class AboutPageComponent extends PureComponent {
    
    renderComponents() {
        const data = {
            heading: 'About Us',
            url: `${process.env.PUBLIC_URL}/assets/we4u/hero_bg_4.jpg`
        }

        return (
            <div>
                <div className='HomePage-GradientOne'>
                    <Header />
                </div>
                <Hero data={data} />
                <About />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderAbout() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderAbout();
    }
}

export default AboutPageComponent;