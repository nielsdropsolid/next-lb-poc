import Link from "next/link";

export function SystemBreadcrumbBlock({ breadcrumbs,  ...props }) {
  return <>
    <div className="block block--provider-system block--system-breadcrumb-block block-system"
         aria-label="Breadcrumbs">
      <nav role="navigation" aria-labelledby="system-breadcrumb" aria-label="Breadcrumb">
        <ol className="breadcrumb">
          {breadcrumbs.map((value,index) => {
            switch (value.uri) {
              case 'internal:#':
                return <li key={index} className="breadcrumb__item"><span className="breadcrumb__element">{value.title}</span></li>
              default:
                const cleanuri = value.uri.replace('base:','');
                return <li key={index} className="breadcrumb__item"><Link href={cleanuri} className="breadcrumb__element breadcrumb__link">{value.title}</Link></li>;
            }
          })}
        </ol>
      </nav>
    </div>
  </>;

}
