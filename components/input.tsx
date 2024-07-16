import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type InputType = {
  className?: string;
  emailAddress?: string;
  muddashiraianalysisPlaceh?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propPadding?: CSSProperties["padding"];
};

const Input: NextPage<InputType> = ({
  className = "",
  emailAddress,
  muddashiraianalysisPlaceh,
  propGap,
  propPadding,
}) => {
  const inputStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      padding: propPadding,
    };
  }, [propGap, propPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-left text-[0.75rem] text-darkgray font-montserrat ${className}`}
      style={inputStyle}
    >
      <b className="w-[6.875rem] relative inline-block z-[1]">{emailAddress}</b>
      <div className="self-stretch rounded-8xs box-border flex flex-row items-start justify-start pt-[0.75rem] px-[1.625rem] pb-[1.562rem] max-w-full z-[1] border-[2px] border-solid border-darkslategray">
        <div className="h-[3.938rem] w-[28.063rem] relative rounded-8xs box-border hidden max-w-full border-[2px] border-solid border-darkslategray" />
        <input
          className="w-[18rem] [border:none] [outline:none] font-medium font-montserrat text-[1rem] bg-[transparent] h-[1.25rem] relative text-white text-left inline-block p-0 z-[2]"
          placeholder={muddashiraianalysisPlaceh}
          type="text"
        />
      </div>
    </div>
  );
};

export default Input;
