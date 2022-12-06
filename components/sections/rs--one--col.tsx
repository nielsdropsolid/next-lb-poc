import {LayoutBuilderComponent} from "../lb--component";
import {componentsByRegion} from "../../lib/layout-builder";
import {MediaImage} from "../media--image";
import {cleanCssIdentifier} from "../../lib/html";

var classNames = require('classnames');

export function RsOneCol({ layoutBuilderSection ,node , ...props }) {

  const content = componentsByRegion(layoutBuilderSection.components,'content')
  const subregion = componentsByRegion(layoutBuilderSection.components,'subregion')
  const subregion_position = layoutBuilderSection.layout_settings.subregion_position
  const subregion_02 = componentsByRegion(layoutBuilderSection.components,'subregion_02')
  const subregion_02_position = layoutBuilderSection.layout_settings.subregion_02_position;

  // Template logic
  const minimalStyling = layoutBuilderSection.layout_settings.minimal_styling ?? false;
  const label = cleanCssIdentifier(layoutBuilderSection.layout_settings.label) ?? false;
  const template = cleanCssIdentifier(layoutBuilderSection.layout_id) ?? false;

  let sectionPurpose = layoutBuilderSection.layout_settings.section_purpose ?? false;

  if (sectionPurpose == 'content') {
    sectionPurpose = false
  }

  const identifier = layoutBuilderSection.layout_settings.identifier ?? null;
  const modifier = cleanCssIdentifier(layoutBuilderSection.layout_settings["bem-modifier"]) ?? false;

  // Variant options
  const backgroundStretched = layoutBuilderSection.layout_settings.backgrounds_full ?? false;
  let backgroundColor = false;
  if (layoutBuilderSection.layout_settings.background_color && layoutBuilderSection.layout_settings.background_color != '_none') {
    backgroundColor = layoutBuilderSection.layout_settings.background_color.split('/')[0];
  }
  let backgroundImage = false;
  if (layoutBuilderSection.layout_settings.background_image) {
    backgroundImage = true;
  }
  const sectionSpacingTop = layoutBuilderSection.layout_settings.top_layout_spacing ?? 1;
  const sectionSpacingBottom = layoutBuilderSection.layout_settings.bottom_layout_spacing ?? 1;

  let classes = classNames(
    layoutBuilderSection.layout_settings.classes,
    'layout',
    'layout-section',
    'layout--1-col',
    {
      ['layout--mod-' + modifier]: modifier,
      ['layout--label-' + label]: label,
      ['layout--' + template]: minimalStyling && template,
      'layout--content-blocks': !minimalStyling,
      'layout--1-col--content-blocks': !minimalStyling,
      ['layout--v-space-top-' + sectionSpacingTop]: !minimalStyling && sectionSpacingTop,
      ['layout--v-space-bottom-' + sectionSpacingBottom]: !minimalStyling && sectionSpacingBottom,
      'layout--bg-stretched': !minimalStyling && backgroundStretched,
      'layout--bg': !minimalStyling && (backgroundColor || backgroundImage),
      'layout--bg-image': !minimalStyling && backgroundImage,
      'layout--bg-color': !minimalStyling && backgroundColor,
      ['layout--bg--' + backgroundColor]: !minimalStyling && backgroundColor,
      ['layout__region--type-' + sectionPurpose]: sectionPurpose,
      ['layout__region--type-' + sectionPurpose + '--mod-' + modifier]: sectionPurpose && modifier,
    }
  )

  let regionClasses = classNames(
    'layout-builder__region',
    'layout__region',
    'layout__region--1-col',
    {
      ['layout__region--mod-' + modifier] : modifier,
    }
  )

  let subregion_classes_01 = classNames(
    'layout__subregion',
    'layout__subregion-01',
    {
      ['layout__subregion--1-col--mod-' + modifier]: modifier,
      ['layout__subregion-01--1-col--mod-' + modifier]: modifier,
    }
  )

  let subregion_classes_02 = classNames(
    'layout__subregion',
    'layout__subregion-02',
    {
      ['layout__subregion--1-col--mod-' + modifier]: modifier,
      ['layout__subregion-02--1-col--mod-' + modifier]: modifier,
    }
  )

  return (
    <>
      <div className={classes} id={identifier} data-bem-modifier={modifier}>
        <div className={regionClasses}>
          {subregion.length > 0 && subregion_position == "before" &&
            <div className={subregion_classes_01}>
              {subregion.map((value,index) => {
                return <LayoutBuilderComponent key={index} layoutBuilderComponent={value} node={node}></LayoutBuilderComponent>
              })}
            </div>
          }

          {subregion_02.length > 0 && subregion_02_position == "before" &&
            <div className={subregion_classes_02}>
              {subregion_02.map((value,index) => {
                return <LayoutBuilderComponent key={index} layoutBuilderComponent={value} node={node}></LayoutBuilderComponent>
              })}
            </div>
          }

          {content.map((value,index) => {
            return <LayoutBuilderComponent key={index} layoutBuilderComponent={value} node={node}></LayoutBuilderComponent>
          })}

          {subregion.length > 0 && subregion_position == "after" &&
            <div className={subregion_classes_01}>
              {subregion.map((value,index) => {
                return <LayoutBuilderComponent key={index} layoutBuilderComponent={value} node={node}></LayoutBuilderComponent>
              })}
            </div>
          }

          {subregion_02.length > 0 && subregion_02_position == "after" &&
            <div className={subregion_classes_02}>
              {subregion_02.map((value,index) => {
                return <LayoutBuilderComponent key={index} layoutBuilderComponent={value} node={node}></LayoutBuilderComponent>
              })}
            </div>
          }
        </div>
        { // @todo: Check if this actually works
          layoutBuilderSection.layout_settings.background_image &&
          <MediaImage media={layoutBuilderSection.layout_settings.background_image}/>
        }
      </div>
    </>
  );
}
