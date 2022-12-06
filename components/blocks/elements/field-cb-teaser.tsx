export function FieldCbTeaser({teaser, ...props}) {

  // Process the replacement patterns for the title.
  const processReplacements = function (originalString) {
    return originalString.replace(/\*\*([^**]+)\*\*/g , '<span class="branded">$1</span>');
  }

  return (
    <>
      <div
        className="field--name-field-cb-teaser field--type-string-long field-cb-teaser"
        dangerouslySetInnerHTML={{ __html : processReplacements(teaser)}}
      />
    </>
  );
}
