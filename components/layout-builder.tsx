import {LayoutBuilderSection} from "./lb--section";

export function LayoutBuilder({ layoutBuilderLayout , node, ...props }){

  return (
    <>
      {layoutBuilderLayout.map((value,index) => {
        return <LayoutBuilderSection key={index} layoutBuilderSection={value} node={node}></LayoutBuilderSection>
      })}
    </>
  );

}
