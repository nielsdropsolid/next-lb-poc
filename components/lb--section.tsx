import {FallbackSection} from "./sections/fallback--section";
import {RsTwoCol} from "./sections/rs--two--col";
import {RsOneCol} from "./sections/rs--one--col";

export function LayoutBuilderSection({ layoutBuilderSection , node,  ...props }) {
  // Dynamically get the correct section component based on id and skip if not supported.
  // The loop to get the components is unique to each section because of the regions.
  return (
    <>
      {(() => {
        switch (layoutBuilderSection.layout_id) {
          case 'rs_one_col':
            return <RsOneCol layoutBuilderSection={layoutBuilderSection} node={node}/>
          case 'rs_two_col':
            return <RsTwoCol layoutBuilderSection={layoutBuilderSection} node={node}/>
          default:
            console.warn('The following section is not supported yet: ' + layoutBuilderSection.layout_id + '. Please add in lb-section.tsx.')
            return <FallbackSection layoutBuilderSection={layoutBuilderSection} node={node} />
        }
      })()}
    </>
  );
}
