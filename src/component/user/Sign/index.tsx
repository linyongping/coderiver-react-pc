import React from 'react';
import style from './index.less'
import Logo from 'assets/svg/logo@2x.svg'

export default class Index extends React.Component<Props, State> {
  render() {
    const { header, children, footer } = this.props;
    return (
      <div className={style['sign-main']}>
        <div className={'sign-container'}>
          <div className={'sign-header'}>
            <img className={'logo'} src={Logo} />
            <p>{header}</p>
          </div>
          {children}
          <div className={'sign-foot'}>
            {footer}
          </div>
        </div>
      </div>
    )
  }
}
