import { TextGroupDesktop } from "./TextGroupDesktop";
import { TextGroupMobile } from "./TextGroupMobile";

export const TextGroupComponent = () => {
  return (
    <>
      <div className="relative hidden md:flex w-full items-center">
        <TextGroupDesktop />
      </div>
      <div className="relative w-full items-center flex md:hidden p-2">
        <TextGroupMobile />
      </div>
    </>
  );
};
