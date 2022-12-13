import { useEffect, useState } from "react";
import {Helmet} from "react-helmet";

import './Testimonials.style.scss';

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

const TestimonialsComponent = () => {
  const [ setRef, isVisible ] = useOnScreen({ threshold: 0.3 });

  const renderTitle = () => {
    const toggleForm = isVisible ? 'Testimonials-Title_Appear': 'Testimonials-Title_FadeIn';

    return (
      <p className={`Testimonials-Title ${toggleForm}`}>
          {'What our clients had to say'}
      </p>
    );
  }

  const renderContent = () => {
    return (
      <div className='Testimonials-Content'>
        <Helmet>
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        </Helmet>
        <div className="elfsight-app-281c59e6-1c7d-45fb-aa4d-11e0f963eee0"></div>
      </div>
    );
  }

  const renderDivider = () => {
    return <div className='Testimonials-Divider'></div>;
  }

  return (
      <section ref={setRef} className='Testimonials PaddedContainer'>
        <div className='ContainerWrapper Testimonials-Container '>
          { renderTitle() }
          { renderDivider() }
          { renderContent() }
        </div>
      </section>
    );
}

export default TestimonialsComponent;



