import {LayoutBuilder} from "./layout-builder";

export function NodeBasicPage({ node, ...props }) {
  return (
    <article className="node node--view-mode-full node--page node--page--full page--full" role="article"  typeof="schema:WebPage" {...props}>
      <div className="node__content node__content--view-mode-full node__content--page node__content--page--full">
        <LayoutBuilder layoutBuilderLayout={node.layout_builder__layout} node={node}></LayoutBuilder>
      </div>
    </article>
  );
}
