export function FieldCbExtraRule({extra_rule, ...props}) {

  return (
    <>
      <div
        className="field--name-field-cb-extra-rule field--type-string field-cb-extra-rule"
        dangerouslySetInnerHTML={{ __html : extra_rule}}
      />
    </>
  );
}
