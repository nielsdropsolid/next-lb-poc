export function FieldCbSubtitle({subtitle, ...props}) {

  // Process the replacement patterns for the title.
  const processReplacements = function (originalString) {
    return originalString.replace(/\*\*([^**]+)\*\*/g , '<span class="branded">$1</span>');
  }

  // Process the specific logic used for the subtitle tag and content.
  const processSubtitle = function (originalString) {
    const subtitle = originalString.split("***")
    if(subtitle[0]) {
      return '<' + subtitle[1] + '>' + processReplacements(subtitle[0]) + '</' + subtitle[1] + '>'
    }else {
      return null
    }
  }

  return (
    <>
      <div
        className="field--name-field-cb-subtitle field--type-string field-cb-subtitle"
        dangerouslySetInnerHTML={{ __html : processSubtitle(subtitle)}}
      />
    </>
  );
}
