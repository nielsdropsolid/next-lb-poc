import {withRouter} from "next/router";
import classNames from "classnames";
import Link from "next/link";
import {DrupalMenuLinkContent} from "next-drupal";
import React from "react";

export const MenuLinkItem = withRouter(class extends React.Component<any, any> {

  displayName = 'MenuLinkItem';

  constructor(props) {
    super(props);
    this.state = {
      openSub: false
    }
  }

  static defaultProps = {
    level: 0
  }

  render() {
    const isActive =
      this.props.router.asPath === this.props.item.url ||
      (this.props.item.url !== '/' ? this.props.router.asPath.indexOf(this.props.item.url) === 0 : false);

    const drupalClasses = this.props.item?.options?.attributes?.class?.join(' ');
    const hasSubItems = this.props.item.items?.length > 0;

    return (
      <li
        onMouseEnter={() => this.setState({
          openSub: true
        })}
        onMouseLeave={() => this.setState({
          openSub: false
        })}
        onClick={() => this.setState({
          openSub: this.state.openSub !== true
        })}
        key={this.props.item.id}
        className={classNames(
          'menu__item',
          'menu__item--' + this.props.menuName,
          drupalClasses,
          {
            'menu-item--active-trail': isActive,
            'menu__item--with-sub has-sub': hasSubItems,
            ['menu__item--sub-' + this.props.level]: this.props.level > 0,
            'menu__item--sub': this.props.level > 0,
            'js-open': this.state.openSub
          }
        )}
      >
        {this.props.item.url &&
          <Link
            href={this.props.item.url}
            passHref
            className={classNames(
              'menu__link',
              'menu__link--' + this.props.menuName,
              drupalClasses,
              {
                'menu__link--with-sub': hasSubItems,
                ['menu__link--sub-' + this.props.level]: this.props.level > 0,
                'menu__link--sub': this.props.level > 0,
              }
            )}>
            {this.props.item.title}
          </Link>
        }
        {!this.props.item.url &&
          <span className='menu__link menu__link--empty'>
        {this.props.item.title}
      </span>
        }
        {hasSubItems &&
          <span className="wrapper--rs-icon">
            <svg className="rs-icon rs-icon--angle-down expand-sub" role="img" aria-hidden="true" xmlnsXlink="http://www.w3.org/1999/xlink">
              <use xlinkHref="#rs-icon--angle-down"></use>
            </svg>
          </span>
        }
        {this.props.item.items?.length > 0 &&
          <ul className='menu menu--main menu--sub menu--sub-1'>
            {this.props.item.items.map((subItem: DrupalMenuLinkContent) => {
              return (<MenuLinkItem key={subItem.id} item={subItem} menuName={this.props.menuName}
                                    level={this.props.level + 1}/>)
            })}
          </ul>
        }
      </li>
    );
  }
})
