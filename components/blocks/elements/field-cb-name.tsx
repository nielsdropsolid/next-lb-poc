export function FieldCbName({name, ...props}) {

  return (
    <>
      <div
        className="field--name-field-cb-name field--type-string field-cb-name"
        dangerouslySetInnerHTML={{ __html : name}}
      />
    </>
  );
}
