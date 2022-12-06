export function FieldCbTitle({title, ...props}) {

  // Process the replacement patterns for the title.
  const processReplacements = function (originalString) {
    return originalString.replace(/\*\*([^**]+)\*\*/g , '<span class="branded">$1</span>');
  }

  return (
    <>
      <div className="field--name-field-cb-title field--type-string field-cb-title">
        <h2 dangerouslySetInnerHTML={{ __html : processReplacements(title)}} />
      </div>
    </>
  );
}
