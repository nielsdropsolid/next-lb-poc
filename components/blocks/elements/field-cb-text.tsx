export function FieldCbText({text, ...props}) {

  return (
    <>
      <div className="field--name-field-cb-text field--type-text-long text-long field-cb-text"
          dangerouslySetInnerHTML={{__html: text}} />
    </>
  );
}
