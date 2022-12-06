import Link from "next/link";

export function Button({ button,  ...props }) {

  return <>
    <Link
      href={button.uri}
      className="button button--buttons button--name-field-cb-button button--type-link button--label-hidden">

      <span className='button__text'>{button.title}</span>
      <span className="wrapper--rs-icon"><svg
        className="rs-icon rs-icon--arrow-right button__icon button__icon--arrow-right" role="img"
        aria-hidden="true" xmlnsXlink="http://www.w3.org/1999/xlink"><use
        xlinkHref="#rs-icon--arrow-right"></use></svg></span>

    </Link>
  </>;
}
