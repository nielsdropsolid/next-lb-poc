export function FieldCbTitleReplacement({title, tag, ...props}) {

  // Process the replacement patterns for the title.
  const processReplacements = function (originalString) {
    return originalString.replace(/\*\*([^**]+)\*\*/g , '<span class="branded">$1</span>');
  }

  // Dynamic wrapper tag.
  const WrapperTag = tag;

  return (
    <>
      <div className="field--name-field-cb-node-title-replacement field--type-contentblock-title-replacement field-cb-node-title-replacement">
        <WrapperTag dangerouslySetInnerHTML={{ __html : processReplacements(title)}}></WrapperTag>
      </div>
    </>
  );
}
