import React from "react";
import { Child } from "./child";

// export const Person = ({ name, phone, address, age }) => {
//   console.log(name);
//   // const {name} = props;
//   return (
//     <div>
//       <span>Name: {name}</span>
//       <Child phone={phone} address={address} age={age} />
//     </div>
//   );
// };

export const Person = ({ name, ...restOfProperties }) => {
  console.log(name);
  // const {name} = props;
  return (
    <div>
      <span>Name: {name}</span>
      <Child {...restOfProperties} />
    </div>
  );
};
