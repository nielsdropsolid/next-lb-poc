import {FieldCbTitle} from "./elements/field-cb-title";
import {FieldCbTeaser} from "./elements/field-cb-teaser";
import {FieldCbText} from "./elements/field-cb-text";
import {FieldCbLink} from "./elements/field-cb-link";
import {FieldCbButton} from "./elements/field-cb-button";

export function InlineBlockCbText({block, ...props}) {
    return (
    <>
      <div data-bem="cb_text"
           className="block block--view-mode-full block--provider-layout-builder block--inline-blockcb-text block--type-cb-text block--cb-text--full block-layout_builder cb--view-mode--left cb-text--view-mode--left content-block"
           aria-label="Inline block: Text">

        {block.field_cb_title &&
          <FieldCbTitle title={block.field_cb_title} />
        }

        {block.field_cb_teaser &&
          <FieldCbTeaser teaser={block.field_cb_teaser} />
        }

        {block.field_cb_text?.hasOwnProperty('processed') &&
          <FieldCbText text={block.field_cb_text.processed} />
        }

        {block.field_cb_link &&
          <FieldCbLink link={block.field_cb_link} />
        }

        {block.field_cb_button &&
          <FieldCbButton button={block.field_cb_button} />
        }
      </div>
    </>
  );
}
