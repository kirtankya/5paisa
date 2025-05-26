import { useEffect } from "react";
const UseOverFlow = (stateVal) => {
  const HTMLRoot =
    typeof window !== "undefined" && document?.documentElement?.classList;
  useEffect(() => {
    HTMLRoot?.toggle("cm_overflow", stateVal);
  }, [stateVal, HTMLRoot]);
};
export default UseOverFlow;
