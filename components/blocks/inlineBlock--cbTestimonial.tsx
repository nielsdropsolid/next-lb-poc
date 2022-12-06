import {FieldCbText} from "./elements/field-cb-text";
import {FieldCbLink} from "./elements/field-cb-link";
import {FieldCbName} from "./elements/field-cb-name";
import {FieldCbExtraRule} from "./elements/field-cb-extra-rule";
import { MediaImage } from 'components/media--image';

export function InlineBlockCbTestimonial({block, ...props}) {
  return (
    <>
      <div data-bem="cb_testimonial"
           className="block block--view-mode-full block--provider-layout-builder block--inline-blockcb-testimonial block--type-cb-testimonial block--cb-testimonial--full block-layout_builder content-block"
           aria-label="Inline block: Testimonial">

        <div className="cb-content cb-testimonial-content">
          {block.field_cb_text?.hasOwnProperty('processed') &&
            <FieldCbText text={block.field_cb_text.processed} />
          }

          <div className="cb-info cb-testimonial-info">

            {block.field_cb_media && (
              <div className="my-6 overflow-hidden rounded-md">
                <MediaImage
                  media={block.field_cb_media}
                  imageField='field_media_image'
                  imageStyle='testimonial_avatar'
                  priority
                  sizes="(min-width: 768px) 625px, 100vw"
                />
              </div>
            )}

            {block.field_cb_name &&
              <FieldCbName name={block.field_cb_name} />
            }

            {block.field_cb_extra_rule &&
              <FieldCbExtraRule extra_rule={block.field_cb_extra_rule} />
            }

            {block.field_cb_link &&
              <FieldCbLink link={block.field_cb_link} />
            }
          </div>
        </div>
      </div>
    </>
  );
}
