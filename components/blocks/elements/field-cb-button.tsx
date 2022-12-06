import {Button} from "../../atoms/button";

export function FieldCbButton({button, ...props}) {

  return (
    <>
      <div className="field--buttons field--name-field-cb-button field--type-link">
        {button.map((value,index) => {
          return <Button key={index} button={value}/>
        })}
      </div>
    </>
  );
}
