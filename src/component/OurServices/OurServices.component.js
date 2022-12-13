import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { ourServicesList } from "../../util/Services";
import './OurServices.style.scss';

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

const OurServices = ({ isWhite }) => {
    const [ setRef, isVisible ] = useOnScreen({ threshold: 0 });

    const toggleContent = isVisible ? 'OurServices-Item_Appear': 'OurServices-Item_FadeIn';

    const renderItem = ({ id, url, title, content, isShort }) => {
        const isWhiteClassItem = isWhite && 'OurServices-Item_isWhite';
        const isWhiteClassImage = isWhite && 'OurServices-ItemImage_isWhite';
        const isWhiteClassTitle = isWhite && 'OurServices-ItemTitle_isWhite';
        const isWhiteClassText = isWhite && 'OurServices-ItemContent_isWhite';
        const isWhiteClassButton = isWhite && 'OurServices-Button_isWhite';

        return (
            <div
                className={`OurServices-Item ${isWhiteClassItem} ${toggleContent}`}
                key={id}
            >
                <div className={`OurServices-ItemImage ${isWhiteClassImage}`}>
                    {url}
                </div>
                <div className='OurServices-ItemContentContainer'>
                    <span className={`OurServices-ItemTitle ${isWhiteClassTitle}`}>{title}</span>
                    <div className='OurServices-Divider'></div>
                    <p className={`OurServices-ItemContent ${isWhiteClassText}`}>{content}</p>
                </div>
                <Link to={`/contact/${id}`} className='Link OurServices-ButtonContainer'>
                    <button
                        type='submit'
                        className={`OurServices-Button ${isWhiteClassButton} Button`}
                    >{"Ask Us How"}</button>
                </Link>
            </div>
        );
    }

    const renderItems = (list) => {
        return (
            <div
                className='OurServices-Items'
            >
              { list.map(renderItem) }
            </div>
        );
    }

    const renderTitle = () => {
        const isWhiteClass = isWhite && 'OurServices-Title_isWhite';
        const toggleTitle = isVisible ? 'OurServices-Title_Appear': 'OurServices-Title_FadeIn';

        return (
            <p className={`OurServices-Title ${isWhiteClass} ${toggleTitle}`}>
                {'EXPLORE OUR SERVICES'}
            </p>
        );
    }
    
    const renderParagraph = () => {
        const isWhiteClass = isWhite && 'OurServices-Paragraph_isWhite';
        const toggleParagraph = isVisible ? 'OurServices-Paragraph_Appear': 'OurServices-Paragraph_FadeIn';
        
        return (
            <p className={`OurServices-Paragraph ${isWhiteClass} ${toggleParagraph}`}>
                {'We Offer The Following Services'}
            </p>
        );
    }

    return (
        <section
            ref={setRef}
            className='OurServices'
        >
            <div className='ContainerWrapper'>
                { renderTitle() }
                { renderParagraph() }
                { renderItems(ourServicesList) }
            </div>
        </section>
    );
}

export default OurServices;
