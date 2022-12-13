import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './GetInTouch.style.scss';

function useOnScreen(options){
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

const GetInTouchComponent = () => {
  const [ setRef, isVisible ] = useOnScreen({ threshold: 0.3 });

  const renderTitle = () => {
    const toggleForm = isVisible ? 'GetInTouch-Title_Appear': 'GetInTouch-Title_FadeIn';

    return (
      <p className={`GetInTouch-Title ${toggleForm}`}>
          {'Get in touch with us today,'}
          <br />
          {' let\'s move with you!'}
      </p>
    );
  }

  const renderButton = () => {
    const toggleButton = isVisible ? 'GetInTouch-ContainerButton_Appear': 'GetInTouch-ContainerButton_FadeIn';

    return (
      <Link to='/get-a-quote' className={`Link GetInTouch-ContainerButton ${toggleButton}`}>
        <button
          type='submit'
          className='GetInTouch-Button Button'
        >{"Get A quote"}</button>
      </Link>
    );
  }

  const renderDivider = () => {
    return <div className='GetInTouch-Divider'></div>;
  }

  return (
      <section ref={setRef} className='GetInTouch PaddedContainer'>
        <div className='ContainerWrapper GetInTouch-Container '>
          { renderTitle() }
          { renderDivider() }
          { renderButton() }
        </div>
      </section>
    );
}

export default GetInTouchComponent;



