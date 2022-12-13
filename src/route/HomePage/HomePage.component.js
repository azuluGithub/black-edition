import { PureComponent } from 'react';

import Header from '../../component/Header';
import Banner from '../../component/Banner';
import OurServices from '../../component/OurServices';
import GetInTouch from '../../component/GetInTouch';
import FooterDetails from '../../component/FooterDetails';
import Footer from '../../component/Footer';
import IntroVideo from '../../component/IntroVideo';
import Testimonials from '../../component/Testimonials';
import GetCallBack from '../../component/GetCallBack';
import OurBranches from '../../component/OurBranches';

import './HomePage.style.scss';

class HomePageComponent extends PureComponent {
    
    renderComponents() {
        return (
            <div>
                <div className='HomePage-GradientOne'>
                    <Header />
                    <Banner />
                </div>
                <GetCallBack />
                <div className='HomePage-GradientThree'>
                    <OurServices isWhite={false} />
                </div>
                <OurBranches />
                <Testimonials />
                <GetInTouch />
                <IntroVideo />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderHome() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderHome();
    }
}

export default HomePageComponent;