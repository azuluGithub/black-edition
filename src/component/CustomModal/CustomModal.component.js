import { PureComponent } from 'react';

import './CustomModal.scss';

class CustomModal extends PureComponent {
    renderContent() {
        const { children, closeModal } = this.props;

        return (
            <div className="CustomModal">
                <div className="CustomModal-Content">
                    { children }
                    <span 
                        className="CustomModal-Cross"
                        onClick = {() => closeModal(false)}
                    >{'X'}</span>
                </div>
            </div>
        );
    }

    render() {
        return this.renderContent();
    }
}

export default  CustomModal;

