import React from "react";
import { BsTranslate } from "react-icons/bs";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { RiArrowDropDownLine, RiNotionFill } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="wr-container relative flex justify-center items-center w-full h-fit text-neutral-900 px-[80px] py-[110px]">
      <div className="h-[1px] w-[98%] bg-neutral-900/20 mt-4 absolute top-0"></div>
      <div className="fo-wrapper-content flex justify-between gap-8 w-[1280px]">
        <div className="flex flex-col items-center gap-12 w-fit">
          <div className="flex flex-col gap-7">
            <a className="flex items-center gap-1" href="">
              <RiNotionFill className="text-neutral-900" size={50} />
              <h1 className="font-semibold text-3xl">Notion</h1>
            </a>
            <div className="flex items-center gap-1">
              <div className="p-[5px] hover:bg-slate-200 rounded-md duration-200 w-fit">
                <IoLogoInstagram className="text-[#aa2cc0]" size={25} />
              </div>
              <div className="p-[7px] hover:bg-slate-200 rounded-md duration-200 w-fit group">
                <FaXTwitter
                  className="text-neutral-500 group-hover:text-neutral-900 duration-200"
                  size={20}
                />
              </div>
              <div className="p-[7px] hover:bg-slate-200 rounded-md duration-200 w-fit group">
                <FaLinkedin
                  className="text-neutral-500 group-hover:text-[#0e76a8] duration-200"
                  size={20}
                />
              </div>
              <div className="p-[7px] hover:bg-slate-200 rounded-md duration-200 w-fit group">
                <FaFacebookSquare
                  className="text-neutral-500 group-hover:text-[#4267B2] duration-200"
                  size={20}
                />
              </div>
              <div className="p-[7px] hover:bg-slate-200 rounded-md duration-200 w-fit group">
                <FaYoutube
                  className="text-neutral-500 group-hover:text-[#FF0000] duration-200"
                  size={20}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="flex justify-center items-center gap-2 w-fit px-4 py-1 border border-neutral-900/10 hover:bg-slate-200 rounded-md duration-200">
              <BsTranslate />
              <h1 className="font-semibold">English</h1>
              <RiArrowDropDownLine size={25} />
            </button>
            <div>
              <h3 className="hover:underline decoration-blue-700 cursor-pointer text-neutral-500 text-sm">
                Do Not Sell or Share My Info
              </h3>
              <h3 className="text-neutral-500 text-sm mt-1">Cookie settings</h3>
            </div>
            <h3 className="text-neutral-900 text-sm">
              © 2024 Notion Labs, Inc.
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-end w-fit">
          <nav className="fo-wrapper-navigation grid grid-cols-4 gap-32 justify-items-center">
            <ul className="flex flex-col gap-1">
              <li className="font-semibold cursor-default">Company</li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Security
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Status
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Terms & privacy
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="font-semibold cursor-default">Download</li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  iOS & Android
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Mac & Windows
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Calendar
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Web Clipper
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-1 mr-auto">
              <li className="font-semibold cursor-default">Resources</li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Help center
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Community
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Integrations
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Templates
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Affiliates
                </a>
              </li>
            </ul>

            <ul className="flex flex-col gap-1">
              <li className="font-semibold cursor-default">Notion for</li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Enterprise
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Small business
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-700" href="#">
                  Personal
                </a>
              </li>
            </ul>
          </nav>
          <a
            href=""
            className="font-bold hover:text-blue-600 hover:underline decoration-blue-600"
          >
            Explore more →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
