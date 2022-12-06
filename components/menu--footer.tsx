import { useRouter } from 'next/router';
import { DrupalMenuLinkContent } from 'next-drupal';
import {MenuLinkItem} from "./menu--link-item";

interface MenuFooterProps {
  menu?: DrupalMenuLinkContent[];
}

export function MenuFooter({ menu, ...props }: MenuFooterProps) {

  if (!menu?.length) {
    return null;
  }

  return (
    <nav data-cy="footer-menu" {...props}>
      <ul className="flex justify-center space-x-4 text-sm">
        {menu?.map((item) => {
          return (
            <MenuLinkItem key={item.id} item={item} menuName="footer"/>
          )
        })}
      </ul>
    </nav>
  );
}
