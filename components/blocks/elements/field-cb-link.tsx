import {RsLink} from "../../atoms/link";

export function FieldCbLink({link, ...props}) {

  return (
    <>
      <div className="field--name-field-cb-link field--type-link field-cb-link">
        <RsLink link={link} />
      </div>
    </>
  );
}
