import { PureComponent } from 'react';

import './Footer.style.scss';

class FooterComponent extends PureComponent {

  renderText() {
    return (
      <div className='Footer-TextContainer'>
        <p className='Footer-Text'>
          {'Copyright '}
          <span className='Footer-Copyright'>{'©'}</span>
          {' 2022 All rights reserved | Website done by Arnold Zulu'}
        </p>
      </div>
    );
  }

  renderComponents() {
    return (
      <div className='Footer-Components'>
        { this.renderText() }
      </div>
    );
  }

  renderSpacer() {
    return (
      <div className='Footer-Spacer'></div>
    );
  }

  renderFooter() {
    return (
      <footer className='Footer'>
        <div className='ContainerWrapper'>
          { this.renderSpacer() }
          <div className='Footer-FooterContainer'>
            { this.renderComponents() }
          </div>
        </div>
      </footer>
    );
  }

  render() {
    return this.renderFooter();
  }
}

export default FooterComponent;