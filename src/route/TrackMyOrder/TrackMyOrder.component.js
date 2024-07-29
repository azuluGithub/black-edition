import { PureComponent } from 'react';

import Hero from '../../component/Hero';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import FooterDetails from '../../component/FooterDetails';
import TrackMyOrder from '../../component/TrackMyOrder';

class TrackMyOrderComponent extends PureComponent {
    
    renderComponents() {
        const data = {
            heading: 'Track My Order',
            url: `${process.env.PUBLIC_URL}/assets/we4u/img_6.jpg`
        }

        return (
            <div>
                <div className='HomePage-GradientOne'>
                    <Header />
                </div>
                <Hero data={data} />
                <TrackMyOrder />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderTrackMyOrder() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderTrackMyOrder();
    }
}

export default TrackMyOrderComponent;