"use client";
import VerfiyForm from "@/app/[lang]/auth/verify/verify-form";
import { Shield, MailCheck, Info } from "lucide-react";

const VerifyPage = () => {
  return (
    <div className="loginwrapper bg-primary flex justify-center items-center">
      <div className="flex flex-col gap-4 justify-center bg-background my-10 p-10 2xl:my-20 m-4 w-fit overflow-hidden xl:w-[calc(100vw-80px)] 2xl:w-[calc(100vw-160px)] 2xl:px-20 2xl:py-24 rounded-3xl">
        <div className="relative rounded-xl">
          <div className="flex flex-col xl:flex-row items-center w-full gap-y-12">
            <div className="basis-full xl:basis-1/2 w-full">
              <div className="w-full xl:w-[480px] relative z-20">
                <VerfiyForm />
              </div>
            </div>
            <div className="basis-full xl:basis-1/2 hidden xl:block relative w-[500px]">
              <svg
                className="absolute top-0 -right-0"
                width="1208"
                height="580"
                viewBox="0 0 1208 1080"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_4801_13605)">
                  <circle
                    cx="604"
                    cy="565"
                    r="404"
                    fill="url(#paint0_radial_4801_13605)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_4801_13605"
                    x="0"
                    y="-39"
                    width="1208"
                    height="1208"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_4801_13605"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_4801_13605"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(805.322 373.168) rotate(134.675) scale(1098.13)"
                  >
                    <stop stopColor="#826AF9" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#826AF9" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              <div className="bg-primary h-full w-full rounded-3xl rounded-tr-none xl:p-[60px] xl:pr-9 relative overflow-hidden">
                <svg
                  className="absolute -top-[25px] -right-6 hidden lg:block [&>*]:fill-background"
                  width="209"
                  height="162"
                  viewBox="0 0 209 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M62 25H0V0H209V162H185C184.317 129.162 169.576 122.271 158.235 120.921H121.512C100.402 119.676 90.7287 104.351 90.7287 93.7286V57.8571C89.4326 35.64 71.0009 26.7357 62 25Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary-foreground rtl:pr-16">
                  Account <span className="xl:block"></span>
                  Verification
                </div>

                <div className="text-xl mt-2 text-primary-foreground flex gap-1 rtl:pr-12">
                  <span>
                    <Shield className="text-primary-foreground text-2xl" />
                  </span>
                  Secure OTP verification process to protect your admin account
                  and ensure authorized access.
                </div>

                <div className="bg-card overflow-hidden w-full rounded-3xl rounded-tr-none relative mt-11 pt-8 pb-7 pl-4">
                  <div className="h-[72px] w-[72px] rounded-full bg-background flex justify-center items-center absolute right-0 top-0 z-10">
                    <MailCheck className="w-8 h-8 text-blue-400" />
                  </div>
                  <svg
                    className="absolute -top-[25px] -right-6 [&>*]:fill-primary"
                    width="209"
                    height="162"
                    viewBox="0 0 209 162"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M62 25H0V0H209V162H185C184.317 129.162 169.576 122.271 158.235 120.921H121.512C100.402 119.676 90.7287 104.351 90.7287 93.7286V57.8571C89.4326 35.64 71.0009 26.7357 62 25Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="w-[90%] mx-auto">
                    <div className="pl-4 rtl:pr-14 pb-4">
                      <div className="text-lg lg:text-xl font-semibold text-default-900 mb-6">
                        OTP Verification
                      </div>
                      <div className="space-y-4">
                        <div className="text-default-700 text-lg leading-relaxed">
                          <p className="mb-4">
                            Enter the verification code sent to your registered
                            email address to complete the authentication
                            process.
                          </p>
                          <p className="mb-0">
                            For security purposes, the OTP code is valid for 10
                            minutes only. Make sure to enter it before it
                            expires.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
