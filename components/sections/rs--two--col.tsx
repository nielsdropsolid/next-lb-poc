import {LayoutBuilderComponent} from "../lb--component";
import {componentsByRegion} from "../../lib/layout-builder";
import {MediaImage} from "../media--image";
import {cleanCssIdentifier} from "../../lib/html";

var classNames = require('classnames');

export function RsTwoCol({layoutBuilderSection, node, ...props}) {

  const top = componentsByRegion(layoutBuilderSection.components, 'top')
  const firstTop = componentsByRegion(layoutBuilderSection.components, 'first_top')
  const firstMain = componentsByRegion(layoutBuilderSection.components, 'first_main')
  const firstBottom = componentsByRegion(layoutBuilderSection.components, 'first_bottom')
  const secondTop = componentsByRegion(layoutBuilderSection.components, 'second_top')
  const secondMain = componentsByRegion(layoutBuilderSection.components, 'second_main')
  const secondBottom = componentsByRegion(layoutBuilderSection.components, 'second_bottom')
  const bottom = componentsByRegion(layoutBuilderSection.components, 'bottom')

  // Template logic
  const minimalStyling = layoutBuilderSection.layout_settings.minimal_styling ?? false;
  const label = cleanCssIdentifier(layoutBuilderSection.layout_settings.label) ?? false;
  // Not sure about the below one.
  const template = cleanCssIdentifier(layoutBuilderSection.layout_id) ?? false;
  const reversed = layoutBuilderSection.layout_settings.reversed ?? false;

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

  // Column spacing
  const colSpacing = layoutBuilderSection.layout_settings.col_spacing ?? '1x';
  const colSpacingOverride = layoutBuilderSection.layout_settings.col_spacing_override ?? '1x';
  const colSpacingOverrideColumn = layoutBuilderSection.layout_settings.col_spacing_override_column ?? null;

  // Column sizing
  const colSizing = layoutBuilderSection.layout_settings.col_sizing ?? false;
  const leftColSizeSuffix = layoutBuilderSection.layout_settings.left_col_size_suffix ?? false;
  const rightColSizeSuffix = layoutBuilderSection.layout_settings.left_col_size_suffix ?? false;

  // Vertical alignment
  const valign = cleanCssIdentifier(layoutBuilderSection.layout_settings.vertical_alignment) ?? 'top';

  // Order settings
  const classAside = reversed ? 'right' : 'left';
  const classMain = reversed ? 'left' : 'right';

  const identifier = layoutBuilderSection.layout_settings.identifier ?? null;

  const modifier = cleanCssIdentifier(layoutBuilderSection.layout_settings["bem-modifier"]) ?? false;

  let classes = classNames(
    layoutBuilderSection.layout_settings.classes,
    'layout',
    'layout-section',
    'layout--2-col',
    {
      ['layout--mod-' + modifier] : modifier,
      ['layout--label-' + label]: label,
      ['layout--' + template]: minimalStyling && template,
      'layout--content-blocks': !minimalStyling,
      'layout--2-col--content-blocks': !minimalStyling,
      ['layout--v-space-top-' + sectionSpacingTop]: !minimalStyling && sectionSpacingTop,
      ['layout--v-space-bottom-' + sectionSpacingBottom]: !minimalStyling && sectionSpacingBottom,
      'layout--bg-stretched': !minimalStyling && backgroundStretched,
      'layout--bg': !minimalStyling && (backgroundColor || backgroundImage),
      'layout--bg-image': !minimalStyling && backgroundImage,
      'layout--bg-color': !minimalStyling && backgroundColor,
      ['layout--bg--' + backgroundColor]: !minimalStyling && backgroundColor,
    }
  )

  let colClasses = classNames(
    'layout__cols',
    'layout__cols--2-col',
    {
      ['layout__cols--mod-' + modifier] : modifier,
      'layout__cols--reversed': reversed,
      'layout__cols--content-blocks': !minimalStyling,
      'layout__cols--2-col--content-blocks': !minimalStyling,
      ['layout__cols--v-align-' + valign]: !minimalStyling && valign,
      ['layout__cols--col-spacing-' + colSpacing]: !minimalStyling && colSpacing,
    }
  )

  let regionClasses = classNames(
    'layout-builder__region',
    'layout__region',
    'layout__region--2-col',
    {
      ['layout__region--mod-' + modifier] : modifier,
    }
  )

  let sidebarClasses = classNames(
    'layout-builder__region',
    'layout__region',
    'layout__sidebar',
    'layout__region--2-col',
    'layout__sidebar--2-col',
    'layout__sidebar--2-col--' + classAside,
    'layout__col',
    'layout__col--2-col',
    {
      'layout__sidebar--reversed': reversed,
      ['layout__region--mod-' + modifier] : modifier,
      ['layout__sidebar--mod-' + modifier] : modifier,
      'layout__region--content-blocks': !minimalStyling,
      'layout__region--2-col--content-blocks': !minimalStyling,
      'layout__col--content-blocks': !minimalStyling,
      'layout__col--2-col--content-blocks': !minimalStyling,
      'layout__sidebar--2-col--content-blocks': !minimalStyling,
      ['layout__sidebar--2-col--content-blocks--' + classAside]: !minimalStyling && classAside,
      ['layout__region' + leftColSizeSuffix]: !minimalStyling && colSizing,
      ['layout__region--col-spacing-last-' + colSpacing]: !minimalStyling && colSpacing && reversed,
      ['layout__region--col-spacing-first-' + colSpacing]: !minimalStyling && colSpacing && !reversed,
      ['layout__region--col-spacing-last-' + colSpacingOverride]: !minimalStyling && colSpacingOverride && colSpacingOverrideColumn && colSpacingOverrideColumn == 1 && reversed,
      ['layout__region--col-spacing-last-' + colSpacingOverride]: !minimalStyling && colSpacingOverride && colSpacingOverrideColumn && colSpacingOverrideColumn == 1 && !reversed
    }
  )

  let mainClasses = classNames(
    'layout-builder__region',
    'layout__region',
    'layout__content',
    'layout__region--2-col',
    'layout__content--2-col',
    'layout__content--2-col--' + classMain,
    'layout__col',
    'layout__col--2-col',
    {
      'layout__content--reversed': reversed,
      ['layout__region--mod-' + modifier] : modifier,
      ['layout__content--mod-' + modifier] : modifier,
      'layout__region--content-blocks': !minimalStyling,
      'layout__content--content-blocks': !minimalStyling,
      'layout__col--content-blocks': !minimalStyling,
      'layout__col--2-col--content-blocks': !minimalStyling,
      'layout__region--2-col--content-blocks': !minimalStyling,
      'layout__content--2-col--content-blocks': !minimalStyling,
      ['layout__content--2-col--content-blocks--' + classMain]: !minimalStyling,
      ['layout__region' + rightColSizeSuffix]: !minimalStyling && colSizing,
      ['layout__region--col-spacing-first-' + colSpacing]: !minimalStyling && colSpacing && reversed,
      ['layout__region--col-spacing-last-' + colSpacing]: !minimalStyling && colSpacing && !reversed,
      ['layout__region--col-spacing-first-' + colSpacingOverride]: !minimalStyling && colSpacingOverride && colSpacingOverrideColumn && colSpacingOverrideColumn == 2 && reversed,
      ['layout__region--col-spacing-last-' + colSpacingOverride]: !minimalStyling && colSpacingOverride && colSpacingOverrideColumn && colSpacingOverrideColumn == 2 && !reversed,
    }
  )

  let topClasses = classNames(
    'layout__top',
    'layout__top--2-col',
    {
      ['layout__top--mod-' + modifier] : modifier,
    }
  );

  let firstTopClasses = classNames(
    'layout__sidebar__row',
    'layout__sidebar__row--primary',
    'layout__sidebar__row--top',
    'layout__sidebar__row--top--primary',
    {
      ['layout__sidebar__row--mod-' + modifier] : modifier,
      ['layout__sidebar__row--top--mod-' + modifier] : modifier,
    }
  )

  let firstMainClasses = classNames(
    'layout__sidebar__row',
    'layout__sidebar__row--primary',
    'layout__sidebar__row--main',
    'layout__sidebar__row--main--primary',
    {
      ['layout__sidebar__row--mod-' + modifier] : modifier,
      ['layout__sidebar__row--main--mod-' + modifier] : modifier,
    }
  )

  let firstBottomClasses = classNames(
    'layout__sidebar__row',
    'layout__sidebar__row--primary',
    'layout__sidebar__row--bottom',
    'layout__sidebar__row--bottom--primary',
    {
      ['layout__sidebar__row--mod-' + modifier] : modifier,
      ['layout__sidebar__row--bottom--mod-' + modifier] : modifier,
    }
  )

  let secondTopClasses = classNames(
    'layout__content__row',
    'layout__content__row--top',
    {
      ['layout__content__row--mod-' + modifier] : modifier,
      ['layout__content__row--top--mod-' + modifier] : modifier,
    }
  );

  let secondMainClasses = classNames(
    'layout__content__row',
    'layout__content__row--main',
    {
      ['layout__content__row--mod-' + modifier] : modifier,
      ['layout__content__row--main--mod-' + modifier] : modifier,
    }
  );

  let secondBottomClasses = classNames(
    'layout__content__row',
    'layout__content__row--bottom',
    {
      ['layout__content__row--mod-' + modifier] : modifier,
      ['layout__content__row--bottom--mod-' + modifier] : modifier,
    }
  );

  let bottomClasses = classNames(
    'layout__bottom',
    'layout__bottom--2-col',
    {
      ['layout__bottom--mod-' + modifier] : modifier,
    }
  )

  return (
    <>
      <div className={classes} id={identifier} data-bem-modifier={modifier}>
        {
          top.length > 0 &&
          <div className={topClasses + regionClasses}>
            {top.map((value, index) => {
              return <LayoutBuilderComponent key={index} layoutBuilderComponent={value}
                                             node={node}></LayoutBuilderComponent>
            })}
          </div>
        }
        <div className={colClasses}>
          <div className={sidebarClasses}>
            {
              firstTop.length > 0 &&
              <div className={firstTopClasses}>
                {firstTop.map((value, index) => {
                  return <LayoutBuilderComponent key={index} layoutBuilderComponent={value}
                                                 node={node}></LayoutBuilderComponent>
                })}
              </div>
            }
            {
              firstMain.length > 0 &&
              <div className={firstMainClasses}>
                {firstMain.map((value, index) => {
                  return <LayoutBuilderComponent key={index} layoutBuilderComponent={value}
                                                 node={node}></LayoutBuilderComponent>
                })}
              </div>
            }
            {
              firstBottom.length > 0 &&
              <div className={firstBottomClasses}>
                {firstBottom.map((value, index) => {
                  return <LayoutBuilderComponent key={index} layoutBuilderComponent={value}
                                                 node={node}></LayoutBuilderComponent>
                })}
              </div>
            }
          </div>
          <div className={mainClasses}>
            {
              secondTop.length > 0 &&
              <div className={secondTopClasses}>
                {secondTop.map((value, index) => {
                  return <LayoutBuilderComponent key={index} layoutBuilderComponent={value}
                                                 node={node}></LayoutBuilderComponent>
                })}
              </div>
            }
            {
              secondMain.length > 0 &&
              <div className={secondMainClasses}>
                {secondMain.map((value, index) => {
                  return <LayoutBuilderComponent key={index} layoutBuilderComponent={value}
                                                 node={node}></LayoutBuilderComponent>
                })}
              </div>
            }
            {
              secondBottom.length > 0 &&
              <div className={secondBottomClasses}>
                {secondBottom.map((value, index) => {
                  return <LayoutBuilderComponent key={index} layoutBuilderComponent={value}
                                                 node={node}></LayoutBuilderComponent>
                })}
              </div>
            }
          </div>
        </div>
        {
          bottom.length > 0 &&
          <div className={bottomClasses}>
            {bottom.map((value, index) => {
              return <LayoutBuilderComponent key={index} layoutBuilderComponent={value}
                                             node={node}></LayoutBuilderComponent>
            })}
          </div>
        }

        { // @todo: Check if this actually works
          layoutBuilderSection.layout_settings.background_image &&
          <MediaImage media={layoutBuilderSection.layout_settings.background_image}/>
        }
      </div>
    </>
  );
}
