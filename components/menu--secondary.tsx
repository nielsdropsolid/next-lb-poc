import { DrupalMenuLinkContent } from 'next-drupal';
import {MenuLinkItem} from "./menu--link-item";

interface MenuSecondaryProps {
  menu?: DrupalMenuLinkContent[];
}

export function MenuSecondary({ menu, ...props }: MenuSecondaryProps) {
  if (!menu?.length) {
    return null;
  }

  return (
    <nav data-cy="nav-menu" {...props} className="nav nav--system-menu-block nav--secondary nav--provider-system nav--system-menu-blocksecondary nav--region-nav-secondary block--menu block-system contextual-region">
      <ul className="menu menu--secondary clearfix">
        {menu?.map((item) => {
          return (
            <MenuLinkItem key={item.id} item={item} menuName="secondary"/>
          )
        })}
      </ul>
    </nav>
  );
}
