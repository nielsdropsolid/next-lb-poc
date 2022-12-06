import {InlineBlockCbTitle} from "./blocks/inlineBlock--cbTitle";
import {SystemBreadcrumbBlock} from "./blocks/system--breadcrumb--block";
import {InlineBlockCbText} from "./blocks/inlineBlock--cbText";
import {InlineBlockCbTestimonial} from "./blocks/inlineBlock--cbTestimonial";
import {ViewsBlockNewsOverviewBlock1} from "./blocks/viewsBlock--NewsOverviewBlock1";

export function LayoutBuilderComponent({ layoutBuilderComponent , node,  ...props }) {
  // Dynamically fetch the correct component
  //console.log(layoutBuilderComponent.configuration.block_uuid)
  //console.log(layoutBuilderComponent.configuration.id)
  console.log(node)

  const block = function () {
      return node.layout_builder__blocks.find(block => block.id === layoutBuilderComponent.configuration.block_uuid)
  };

  // @todo: Add all rocketship components here
  return (
    <>
      {(() => {
        switch (layoutBuilderComponent.configuration.id) {
          case 'system_breadcrumb_block':
            return <SystemBreadcrumbBlock breadcrumbs={node.breadcrumbs} />
          case 'inline_block:cb_title':
            return <InlineBlockCbTitle block={block()}/>;
          case 'inline_block:cb_text':
            return <InlineBlockCbText block={block()}/>;
          case 'inline_block:cb_testimonial':
            return <InlineBlockCbTestimonial block={block()}/>;
          case 'views_block:news_overview-block_1':
            return <ViewsBlockNewsOverviewBlock1 block={block()}/>
          default:
            console.warn('The following component is not supported yet: ' + layoutBuilderComponent.configuration.label + ' ('+ layoutBuilderComponent.configuration.id +'). Please add in lb-component.tsx.')
            return null;
        }
      })()}
    </>
  );
}
