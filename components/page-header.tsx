import Link from 'next/link';
import Image from 'next/image';
import {HTMLAttributes} from 'react';
import {DrupalMenuLinkContent} from 'next-drupal';

import {MenuMain} from 'components/menu--main';
import {MenuSecondary} from "components/menu--secondary";

interface PageHeaderProps {
  heading: string;
  text?: string;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  menus: {
    main: DrupalMenuLinkContent[];
    secondary: DrupalMenuLinkContent[];
  };
}

export function PageHeader({heading, menus, text, className}: PageHeaderProps) {
  return (
      <header role='banner' className="wrapper--headers">
        <div className='header header--primary'>
          <div className="container">
            <div className="header__section--primary">
              <div
                className="block__branding block__branding--header block__branding--provider-system block__branding--system-branding-block block__branding--region-header block-system contextual-region"
                id="block-rocketship-theme-starter-branding" data-bem="header rocketship_theme_starter_branding"><Link
                className="block__branding__image block__branding__image--header block__branding__image--provider-system block__branding__image--system-branding-block block__branding__image--region-header"
                href="/" title="Home" rel="home"><Image src="/logo.svg" alt="Logo" width={221} height={77}/></Link><Link
                className="block__branding__name block__branding__name--header block__branding__name--provider-system block__branding__name--system-branding-block block__branding__name--region-header"
                href="/" title="Home" rel="home">Dropsolid.io</Link></div>
              <div id="block-headerbuttonmobile" data-bem="header headerbuttonmobile cb_text"
                   className="block block--view-mode-full block--provider-block-content block--block-content0147e635-10b0-4e98-aa95-a7f91a38298e block--id-headerbuttonmobile block--region-header block--type-cb-text block-block_content contextual-region cb--view-mode--left cb-text--view-mode--left content-block"
                   aria-label="header button (mobile)">
                <div className="field field--buttons field--name-field-cb-button field--type-link field--label-hidden"><Link
                  className="button button--buttons button--name-field-cb-button button--type-link button--label-hidden"
                  href="/demo"><span className="button__text"> Get a demo </span><span className="wrapper--rs-icon"><svg
                  className="rs-icon rs-icon--arrow-right button__icon button__icon--arrow-right" role="img"
                  aria-hidden="true" xmlnsXlink="http://www.w3.org/1999/xlink"><use
                  xlinkHref="#rs-icon--arrow-right"></use></svg></span></Link></div>
              </div>
            </div>
            <div className="header__section--secondary">
              <div className='wrapper--navigation'>
                <Link href="#" id="toggle-expand" className="navigation__toggle-expand"><span className="visually-hidden"> Mobile menu expand icon </span><span
                  className="navigation__toggle-expand__group navigation__toggle-expand__group--open"><span
                  className="wrapper--rs-icon"><svg
                  className="rs-icon rs-icon--hamburger navigation__toggle-expand__icon navigation__toggle-expand__icon--open"
                  role="img" aria-hidden="true" xmlnsXlink="http://www.w3.org/1999/xlink"><use
                  xlinkHref="#rs-icon--hamburger"></use></svg></span><span
                  className="navigation__toggle-expand__text navigation__toggle-expand__text--open">Menu</span></span><span
                  className="navigation__toggle-expand__group navigation__toggle-expand__group--closed"><span
                  className="wrapper--rs-icon"><svg
                  className="rs-icon rs-icon--times navigation__toggle-expand__icon navigation__toggle-expand__icon--closed"
                  role="img" aria-hidden="true" xmlnsXlink="http://www.w3.org/1999/xlink"><use
                  xlinkHref="#rs-icon--times"></use></svg></span><span
                  className="navigation__toggle-expand__text navigation__toggle-expand__text--closed">Close</span></span></Link>
                <div className='wrapper--navigation__content'>
                  {menus?.main &&
                    <div className='nav-section nav-section--primary'>
                      <MenuMain menu={menus.main}/>
                    </div>
                  }
                  {menus?.secondary &&
                    <div className='nav-section nav-section--secondary'>
                      <MenuSecondary menu={menus.secondary}/>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}
