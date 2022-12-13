import { PureComponent } from 'react';

import Header from '../../component/Header';
import GetAQuote from '../../component/GetAQuote';
import Hero from '../../component/Hero';
import Footer from '../../component/Footer';
import Map from '../../component/Map';
import FooterDetails from '../../component/FooterDetails';

class GetAQuoteComponent extends PureComponent {
    
    renderComponents() {
        const data = {
            heading: 'Get A Quote',
            url: `${process.env.PUBLIC_URL}/assets/we4u/world.png`
        }

        return (
            <div>
                <div className='HomePage-GradientOne'>
                    <Header />
                </div>
                <Hero data={data} />
                <GetAQuote />
                <Map />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderGetAQuote() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderGetAQuote();
    }
}

export default GetAQuoteComponent;