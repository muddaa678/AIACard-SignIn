import type { NextPage } from "next";

export type CodeInputType = {
  className?: string;
};

const CodeInput: NextPage<CodeInputType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex-1 rounded-3xs bg-gray flex flex-col items-start justify-start pt-[2.5rem] pb-[15.937rem] pr-[1.25rem] pl-[2.937rem] box-border gap-[1.562rem] max-w-full text-left text-[2rem] text-white font-montserrat mq800:pt-[1.625rem] mq800:pb-[10.375rem] mq800:box-border mq450:pl-[1.25rem] mq450:box-border ${className}`}
    >
      <img
        className="w-[33.875rem] h-[31.875rem] relative rounded-3xs hidden max-w-full"
        alt=""
        src="/rectangle-34.svg"
      />
      <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq800:text-[1.625rem] mq450:text-[1.188rem]">
        Verification Code
      </h1>
      <div className="w-[16.625rem] flex-1 flex flex-col items-start justify-start gap-[1.125rem] text-[0.75rem]">
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem]">
          <div className="w-[16.5rem] relative inline-block shrink-0 max-h-[1.875rem] [word-break:break-word] z-[1]">
            <span>{`Verification code has been sent to your email `}</span>
            <b>muddashir@aianalysis.group</b>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[0.218rem]">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[1.125rem]">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[0.231rem]">
              <div className="self-stretch w-[2.563rem] relative rounded-8xs box-border z-[1] border-[2px] border-solid border-darkslategray" />
              <div className="self-stretch w-[2.563rem] relative rounded-8xs box-border z-[1] border-[2px] border-solid border-darkslategray" />
              <div className="self-stretch w-[2.563rem] relative rounded-8xs box-border z-[1] border-[2px] border-solid border-darkslategray" />
              <div className="self-stretch w-[2.563rem] relative rounded-8xs box-border z-[1] border-[2px] border-solid border-darkslategray" />
            </div>
            <div className="w-[9.5rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border">
              <button className="cursor-pointer [border:none] pt-[0.625rem] px-[0.437rem] pb-[0.812rem] bg-darkslategray flex-1 rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-dimgray">
                <div className="h-[2.188rem] w-[9.375rem] relative rounded-8xs bg-darkslategray hidden" />
                <b className="w-[8.137rem] relative text-[0.625rem] inline-block font-montserrat text-white text-center shrink-0 z-[1]">
                  Resend OTP (23 secs)
                </b>
              </button>
            </div>
          </div>
          <div className="h-[3.125rem] w-[2.563rem] relative rounded-8xs box-border z-[1] border-[2px] border-solid border-darkslategray" />
          <div className="h-[3.125rem] w-[2.563rem] relative rounded-8xs box-border z-[1] border-[2px] border-solid border-darkslategray" />
        </div>
      </div>
    </div>
  );
};

export default CodeInput;
