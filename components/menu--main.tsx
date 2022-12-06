import { useRouter } from 'next/router';
import { DrupalMenuLinkContent } from 'next-drupal';
import {MenuLinkItem} from "./menu--link-item";

interface MenuMainProps {
  menu?: DrupalMenuLinkContent[];
}

export function MenuMain({ menu, ...props }: MenuMainProps) {
  if (!menu?.length) {
    return null;
  }

  return (
    <div className="nav-section nav-section--primary">
      <nav className="nav nav--system-menu-block nav--main nav--provider-system nav--system-menu-blockmain nav--region-nav-primary block--menu block-system contextual-region" data-cy="nav-menu" {...props}>
        <ul className="menu menu--main clearfix">
          {menu?.map((item) => {
            return (
              <MenuLinkItem key={item.id} item={item} menuName="main"/>
            )
          })}
        </ul>
      </nav>
    </div>
  );
}
