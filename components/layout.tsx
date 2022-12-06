import Head from 'next/head';
import {DrupalMenuLinkContent} from 'next-drupal';

import {PreviewAlert} from 'components/preview-alert';
import {PageHeader} from './page-header';

import {MenuFooter} from 'components/menu--footer';
import Link from "next/link";
import Image from "next/image";
import {IconsSvg} from "./icons-svg";

export interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
  menus: {
    main: DrupalMenuLinkContent[];
    footer: DrupalMenuLinkContent[];
    secondary: DrupalMenuLinkContent[];
  };
}

export function Layout({title, menus, children}: LayoutProps) {

  return (
    <>
      <Head>
        <title>{title} - Headless POC</title>
      </Head>
      <PreviewAlert/>

      <div className='dialog-off-canvas-main-canvas'>
        <div className='page-wrapper'>
          <div className="sticky-spacer"></div>
          <div className='wrapper--page-top'>
            <PageHeader heading={title} text="" menus={menus}/>
          </div>
          <div className='page'>
            <div className='highlighted'></div>
            <main role="main" className="main no-sidebars">
              <div className="container"><span id="main-content" tabIndex={-1}></span>
                <div className="main__content">{children}</div>
              </div>
            </main>
          </div>
          <aside className="doormat" role="complementary">
            <div className="container">
              <div className="row row--doormat">
                <div className="col col--doormat col--doormat--01">
                  <div id="block-sitebranding" data-bem="doormat sitebranding"
                       className="block block--provider-system block--system-branding-block block--id-sitebranding block--region-doormat block-system contextual-region"
                       aria-label="Site branding"><Image src="/logo.svg" alt="Logo" width={221} height={77} className='image'/></div>
                  <div id="block-partner" data-bem="doormat partner cb_text"
                       className="block block--view-mode-full block--provider-block-content block--block-contentf839f936-0c14-4146-933c-03ed42761543 block--id-partner block--region-doormat block--type-cb-text block-block_content contextual-region cb--view-mode--left cb-text--view-mode--left content-block"
                       aria-label="Partner">
                    <div
                      className="field field--name-field-cb-text field--type-text-long field--label-hidden text-long field-cb-text">
                      <h3>Become a partner?</h3></div>
                    <div className="field field--name-field-cb-link field--type-link field--label-hidden field-cb-link">
                      <Link href="/partners"><span className="wrapper--rs-icon"><svg
                        className="rs-icon rs-icon--angle-right" role="img" aria-hidden="true"
                        xmlnsXlink="http://www.w3.org/1999/xlink"><use xlinkHref="#rs-icon--angle-right"></use></svg></span><span
                        className="rs-icon-link__text"> Join us! </span><span className="wrapper--rs-icon"><svg
                        className="rs-icon rs-icon--arrow-right" role="img" aria-hidden="true"
                        xmlnsXlink="http://www.w3.org/1999/xlink"><use xlinkHref="#rs-icon--arrow-right"></use></svg></span></Link>
                    </div>
                  </div>
                  <div id="block-support" data-bem="doormat support cb_text"
                       className="block block--view-mode-full block--provider-block-content block--block-content8b868047-c67a-449d-adc1-bcbc63e2befc block--id-support block--region-doormat block--type-cb-text block-block_content contextual-region cb--view-mode--left cb-text--view-mode--left content-block"
                       aria-label="Support">
                    <div
                      className="field field--name-field-cb-text field--type-text-long field--label-hidden text-long field-cb-text">
                      <h3>Need support?</h3></div>
                    <div className="field field--name-field-cb-link field--type-link field--label-hidden field-cb-link">
                      <Link href="https://support.dropsolid.com/dxp"><span className="wrapper--rs-icon"><svg
                        className="rs-icon rs-icon--angle-right" role="img" aria-hidden="true"
                        xmlnsXlink="http://www.w3.org/1999/xlink"><use xlinkHref="#rs-icon--angle-right"></use></svg></span><span
                        className="rs-icon-link__text"> Check this out! </span><span className="wrapper--rs-icon"><svg
                        className="rs-icon rs-icon--arrow-right" role="img" aria-hidden="true"
                        xmlnsXlink="http://www.w3.org/1999/xlink"><use xlinkHref="#rs-icon--arrow-right"></use></svg></span></Link>
                    </div>
                  </div>
                </div>
                <div className="col col--doormat col--doormat--02"></div>
              </div>
            </div>
          </aside>
          <footer className='footer footer--primary' role="contentinfo">
            <div className='container'>
              <div id="block-socialmedialinks" data-bem="footer socialmedialinks social_media"
                   className="block block--view-mode-full block--provider-block-content block--block-contentb381e969-9382-41db-83df-abbf28db05fd block--id-socialmedialinks block--region-footer block--type-social-media block-block_content contextual-region"
                   aria-label="Social media links">
                <div
                  className="field field--name-field-social-link-facebook field--type-link field--label-hidden field-social-link-facebook">
                  <span className="wrapper--rs-icon"><svg className="rs-icon rs-icon--facebook" role="img"
                                                          aria-hidden="true"
                                                          xmlnsXlink="http://www.w3.org/1999/xlink"><use
                    xlinkHref="#rs-icon--facebook"></use></svg></span><a href="https://facebook.com/dropsolid"
                                                                         target="_blank" rel="noreferrer">Facebook</a>
                </div>
                <div
                  className="field field--name-field-social-link-linkedin field--type-link field--label-hidden field-social-link-linkedin">
                  <span className="wrapper--rs-icon"><svg className="rs-icon rs-icon--linkedin" role="img"
                                                          aria-hidden="true"
                                                          xmlnsXlink="http://www.w3.org/1999/xlink"><use
                    xlinkHref="#rs-icon--linkedin"></use></svg></span><a
                  href="https://www.linkedin.com/showcase/dropsolid-experience-cloud" rel="noreferrer"
                  target="_blank">LinkedIn</a></div>
                <div
                  className="field field--name-field-social-link-instagram field--type-link field--label-hidden field-social-link-instagram">
                  <span className="wrapper--rs-icon"><svg className="rs-icon rs-icon--instagram" role="img"
                                                          aria-hidden="true"
                                                          xmlnsXlink="http://www.w3.org/1999/xlink"><use
                    xlinkHref="#rs-icon--instagram"></use></svg></span><a
                  href="https://www.instagram.com/dropsolidgent/" rel="noreferrer" target="_blank">Instagram</a></div>
              </div>
              <div id="block-rocketship-theme-starter-rocketship-copyright-block"
                   data-bem="footer rocketship_theme_starter_rocketship_copyright_block"
                   className="block block--provider-rocketship-blocks block--rocketship-copyright-block block--id-rocketship-theme-starter-rocketship-copyright-block block--region-footer block-rocketship_blocks contextual-region"
                   aria-label="Copyright"> © Dropsolid Experience Cloud 2022
              </div>
              <div id="block-rocketship-theme-starter-powered-by-dropsolid"
                   data-bem="footer rocketship_theme_starter_powered_by_dropsolid"
                   className="block block--provider-rocketship-blocks block--powered-by-dropsolid block--id-rocketship-theme-starter-powered-by-dropsolid block--region-footer block-rocketship_blocks contextual-region"
                   aria-label="Powered by Dropsolid"> Powered by <Link href="https://dropsolid.com"
                                                                       target="_blank">Dropsolid</Link></div>
              <div id="block-rocketship-theme-starter-footer" data-bem="footer rocketship_theme_starter_footer"
                   className="block block--provider-system block--system-menu-blockfooter block--id-rocketship-theme-starter-footer block--region-footer block-system contextual-region"
                   aria-label="Footer">
                {menus?.footer && <MenuFooter menu={menus.footer}/>}
              </div>
            </div>
          </footer>
        </div>
      </div>
      <IconsSvg/>
    </>
  );
}
