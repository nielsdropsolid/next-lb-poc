import {FieldCbTitleReplacement} from "./elements/field-cb-title-replacement";
import {FieldCbSubtitle} from "./elements/field-cb-subtitle";
import {FieldCbTeaser} from "./elements/field-cb-teaser";
import {FieldCbButton} from "./elements/field-cb-button";

export function InlineBlockCbTitle({ block,  ...props }) {

  return (
    <>
      <div data-bem="cb_title"
           className="block block--view-mode-full block--provider-layout-builder block--inline-blockcb-title block--type-cb-title block-layout_builder contextual-region cb-title--extended content-block"
           aria-label="Simple Title">

         {block.field_cb_node_title_replacement.value &&
          <FieldCbTitleReplacement
            title={block.field_cb_node_title_replacement.value}
            tag={block.field_cb_node_title_replacement.wrapper}
          />
        }

        {block.field_cb_subtitle &&
          <FieldCbSubtitle subtitle={block.field_cb_subtitle} />
        }

        {block.field_cb_teaser &&
          <FieldCbTeaser teaser={block.field_cb_teaser} />
        }

        {block.field_cb_teaser &&
          <FieldCbTeaser teaser={block.field_cb_teaser} />
        }

        {block.field_cb_button &&
          <FieldCbButton button={block.field_cb_button} />
        }
      </div>
    </>
  );
}
