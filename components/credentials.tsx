import type { NextPage } from "next";
import Input from "./input";

export type CredentialsType = {
  className?: string;
};

const Credentials: NextPage<CredentialsType> = ({ className = "" }) => {
  return (
    <form
      className={`m-0 self-stretch rounded-3xs bg-gray box-border flex flex-col items-start justify-start pt-[2.5rem] pb-[2.625rem] pr-[2.875rem] pl-[2.937rem] gap-[1.737rem] max-w-full border-[0px] border-solid border-gray mq800:pt-[1.625rem] mq800:px-[1.438rem] mq800:pb-[1.688rem] mq800:box-border ${className}`}
    >
      <img
        className="w-[33.875rem] h-[31.875rem] relative rounded-3xs hidden max-w-full"
        alt=""
        src="/rectangle-34.svg"
      />
      <div className="w-[8.938rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.137rem] box-border">
        <h1 className="m-0 flex-1 relative text-[2rem] font-bold font-montserrat text-white text-left z-[1] mq800:text-[1.625rem] mq450:text-[1.188rem]">
          Sign In
        </h1>
      </div>
      <Input
        emailAddress="Email Address"
        muddashiraianalysisPlaceh="muddashir@aianalysis.group"
      />
      <Input
        emailAddress="Password"
        muddashiraianalysisPlaceh="*************************"
        propGap="0.937rem"
        propPadding="0rem 0rem 0.612rem"
      />
      <div className="w-[17.081rem] flex flex-row items-start justify-start gap-[1.056rem]">
        <button className="cursor-pointer [border:none] pt-[0.687rem] px-[1.937rem] pb-[0.681rem] bg-goldenrod flex-[0.5056] rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-darkgoldenrod">
          <div className="h-[2.663rem] w-[7.838rem] relative rounded-8xs bg-goldenrod hidden" />
          <b className="flex-1 relative text-[0.875rem] font-montserrat text-black text-left z-[1]">
            Sign In
          </b>
        </button>
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.837rem] px-[0rem] pb-[0rem]">
          <div className="self-stretch relative text-[0.75rem] font-montserrat text-lightgray text-left z-[1]">
            Forgot password?
          </div>
        </div>
      </div>
      <div className="w-[14.813rem] relative text-[0.75rem] text-left inline-block z-[1]">
        <span className="font-montserrat">
          <span className="text-lightgray">Don’t have an account?</span>
          <span className="text-darkgray">{` `}</span>
        </span>
        <b className="font-montserrat text-white">Sign Up</b>
      </div>
    </form>
  );
};

export default Credentials;
