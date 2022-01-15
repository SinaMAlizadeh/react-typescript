import React from "react";

type inputProps = React.ComponentProps<"input">;

function CustomeTextBox(props: inputProps) {
  return <input {...props} />;
}

export default CustomeTextBox;
