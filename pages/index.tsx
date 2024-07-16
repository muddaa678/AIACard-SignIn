import type { NextPage } from "next";
import Credentials from "../components/credentials";

const DesktopSignIn: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-end justify-start gap-[4.312rem] leading-[normal] tracking-[normal] mq800:gap-[2.125rem] mq450:gap-[1.063rem] mq1300:flex-wrap">
      <div className="w-[46.875rem] box-border flex flex-row items-start justify-start pt-[2.5rem] px-[4.812rem] pb-[1.687rem] min-w-[46.875rem] max-w-full z-[1] border-r-[1px] border-solid border-gray mq800:pt-[1.625rem] mq800:px-[2.375rem] mq800:pb-[1.25rem] mq800:box-border mq1125:min-w-full mq1300:flex-1">
        <img
          className="h-[43rem] flex-1 relative max-w-full overflow-hidden object-cover mq1300:flex-1"
          loading="lazy"
          alt=""
          src="/screenshot-20240714-at-31226am-1@2x.png"
        />
        <div className="h-[47.188rem] w-[46.875rem] relative box-border hidden max-w-full border-r-[1px] border-solid border-gray" />
      </div>
      <div className="h-[41.625rem] w-[33.875rem] flex flex-col items-start justify-start min-w-[33.875rem] max-w-full mq800:min-w-full mq1300:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.687rem] max-w-full">
          <img
            className="w-[12.375rem] h-[3.313rem] relative object-contain"
            loading="lazy"
            alt=""
            src="/ai-analysis-logo-13-1@2x.png"
          />
          <Credentials />
        </div>
      </div>
    </div>
  );
};

export default DesktopSignIn;
