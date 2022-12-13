import { useEffect, useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './OurBranches.style.scss';

function useOnScreen(options) {
    const [ref, setRef] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return [ setRef, isVisible];
}

const OurBranchesComponent = () => {
  const [ setRef, isVisible ] = useOnScreen({ threshold: 0.3 });

  const renderTitle = () => {
    const toggleForm = isVisible ? 'OurBranches-Title_Appear': 'OurBranches-Title_FadeIn';

    return (
      <p className={`OurBranches-Title ${toggleForm}`}>
          {'Our Branches'}
      </p>
    );
  }

  const renderContent = () => {
    return (
      <div className='OurBranches-Content'>
        <div className="OurBranches-Slider" >            
          <OwlCarousel 
            items={3}
            autoplay
            // loop
            margin={10}
            animateOut
            rewind
            center
            slideBy={2}
            nav
        >
            <div className='OurBranches-CarouselCard'>
              <img
                className="OurBranches-CarouselImg"
                src= {`${process.env.PUBLIC_URL}/assets/we4u/img_1.jpg`}
                alt='carousel gallery of we4u branches'
              />
              <div className="OurBranches-CarouselContent">
                <h3 className="OurBranches-CarouselTitle">Cape Town</h3>
                <p className="OurBranches-CarouselText">As vast and big as Cape Town is, we deliver in all towns and areas.  Give us a call today, lets take you there!</p>
              </div>
            </div>
            <div className='OurBranches-CarouselCard'>
              <img
                className="OurBranches-CarouselImg"
                src= {`${process.env.PUBLIC_URL}/assets/we4u/img_5.jpg`}
                alt='carousel gallery of we4u branches'
              />
              <div className="OurBranches-CarouselContent">
                <h3 className="OurBranches-CarouselTitle">KZN</h3>
                <p className="OurBranches-CarouselText">As vast and big as KZN is, we deliver in all towns and areas. Give us a call today, lets take you there!</p>
              </div>
            </div>
            <div className='OurBranches-CarouselCard'>
              <img
                className="OurBranches-CarouselImg"
                src= {`${process.env.PUBLIC_URL}/assets/we4u/img_7.jpg`}
                alt='carousel gallery of we4u branches'
              />
              <div className="OurBranches-CarouselContent">
                <h3 className="OurBranches-CarouselTitle">Mpumalanga</h3>
                <p className="OurBranches-CarouselText">As vast and big as Mpumalanga is, we deliver in all towns and areas. Give us a call today, lets take you there!</p>
              </div>
            </div>
            <div className='OurBranches-CarouselCard'>
              <img
                className="OurBranches-CarouselImg"
                src= {`${process.env.PUBLIC_URL}/assets/we4u/img_6.jpg`}
                alt='carousel gallery of we4u branches'
              />
              <div className="OurBranches-CarouselContent">
                <h3 className="OurBranches-CarouselTitle">Limpopo</h3>
                <p className="OurBranches-CarouselText">As vast and big as Limpopo is, we deliver in all towns and areas. Give us a call today, lets take you there!</p>
              </div>
            </div>
            
            <div className='OurBranches-CarouselCard'>
              <img
                className="OurBranches-CarouselImg"
                src= {`${process.env.PUBLIC_URL}/assets/we4u/img_2.jpg`}
                alt='carousel gallery of we4u branches'
              />
              <div className="OurBranches-CarouselContent">
                <h3 className="OurBranches-CarouselTitle">Free State</h3>
                <p className="OurBranches-CarouselText">As dynamic as Free State is, we deliver in all towns and areas in and around. Give us a call today, lets take you there!</p>
              </div>
            </div>
            <div className='OurBranches-CarouselCard'>
              <img
                className="OurBranches-CarouselImg"
                src= {`${process.env.PUBLIC_URL}/assets/we4u/img_4.jpg`}
                alt='carousel gallery of we4u branches'
              />
              <div className="OurBranches-CarouselContent">
                <h3 className="OurBranches-CarouselTitle">Gauteng</h3>
                <p className="OurBranches-CarouselText">As vast and big as Gauteng is, we deliver in all towns and areas. Give us a call today, lets take you there!</p>
              </div>
            </div>
            <div className='OurBranches-CarouselCard'>
              <img
                className="OurBranches-CarouselImg"
                src= {`${process.env.PUBLIC_URL}/assets/we4u/img_3.jpg`}
                alt='carousel gallery of we4u branches'
              />
              <div className="OurBranches-CarouselContent">
                <h3 className="OurBranches-CarouselTitle">North West</h3>
                <p className="OurBranches-CarouselText">As small as North West is, we deliver in all towns and areas. Give us a call today, lets take you there!</p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }

  const renderDivider = () => {
    return <div className='OurBranches-Divider'></div>;
  }

  return (
      <section ref={setRef} className='OurBranches PaddedContainer'>
        <div className=' OurBranches-Container '>
          { renderTitle() }
          { renderDivider() }
          { renderContent() }
        </div>
      </section>
    );
}

export default OurBranchesComponent;



