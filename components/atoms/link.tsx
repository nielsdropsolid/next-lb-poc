import Link from "next/link";

export function RsLink({ link,  ...props }) {

  // @todo: Fix drupal relative uri's
  return <>
    <Link href={link.uri}>
      <span className="wrapper--rs-icon">
        <svg
        className="rs-icon rs-icon--angle-right" role="img" aria-hidden="true"
        xmlnsXlink="http://www.w3.org/1999/xlink"><use xlinkHref="#rs-icon--angle-right"></use></svg></span><span
        className="rs-icon-link__text">{link.title}</span><span className="wrapper--rs-icon"><svg
        className="rs-icon rs-icon--arrow-right" role="img" aria-hidden="true"
        xmlnsXlink="http://www.w3.org/1999/xlink"><use xlinkHref="#rs-icon--arrow-right"></use></svg></span>

    </Link>
  </>;
}
