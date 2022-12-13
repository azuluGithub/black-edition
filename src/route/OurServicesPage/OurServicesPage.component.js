import { PureComponent } from 'react';

import Hero from '../../component/Hero';
import Footer from '../../component/Footer';
import OurServices from '../../component/OurServices';
import Header from '../../component/Header';
import FooterDetails from '../../component/FooterDetails';

class OurServicesPageComponent extends PureComponent {
    
    renderComponents() {
        const data = {
            heading: 'Our Services',
            url: `${process.env.PUBLIC_URL}/assets/we4u/hero_bg_1.jpg`
        }

        return (
            <div>
                <div className='HomePage-GradientOne'>
                    <Header />
                </div>
                <Hero data={data} />
                <OurServices isWhite={true} />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderOurServices() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderOurServices();
    }
}

export default OurServicesPageComponent;