import {LayoutBuilderComponent} from "../lb--component";

export function FallbackSection({ layoutBuilderSection , node, ...props }) {
  // A fallback for when we don't know the section being used.
  return (
    <>
      <div className='fallback--section'>
        {layoutBuilderSection.components.map((value,index) => {
          return <LayoutBuilderComponent key={index} layoutBuilderComponent={value} node={node}></LayoutBuilderComponent>
        })}
      </div>
    </>
  );
}
