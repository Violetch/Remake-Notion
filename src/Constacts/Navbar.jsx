import { GiArtificialIntelligence } from "react-icons/gi";
import { HiTemplate } from "react-icons/hi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { MdMenuBook } from "react-icons/md";
import { PiProjectorScreenChartThin } from "react-icons/pi";
import { SlCalender, SlDocs } from "react-icons/sl";
import { VscGlobe } from "react-icons/vsc";

const NAVBAR_SMALL_LIST = [
  {
    title: "Product",
    desc: [
      {
        icon: <GiArtificialIntelligence size={20} />,
        subTitle: "AI",
        styleIcon: "border border-neutral-300 rounded-md p-[7px]",
        styleSubTitle: "mt-2 ml-3",
      },
      {
        icon: <SlDocs size={20} />,
        subTitle: "Docs",
        styleIcon: "border border-neutral-300 rounded-md p-[7px]",
        styleSubTitle: "mt-2 ml-3",
      },
      {
        icon: <MdMenuBook size={20} />,
        subTitle: "Wikis",
        styleIcon: "border border-neutral-300 rounded-md p-[7px]",
        styleSubTitle: "mt-2 ml-3",
      },
      {
        icon: <PiProjectorScreenChartThin size={20} />,
        subTitle: "Projects",
        styleIcon: "border border-neutral-300 rounded-md p-[7px]",
        styleSubTitle: "mt-2 ml-3",
      },
      {
        icon: <SlCalender size={20} />,
        subTitle: "Calender",
        styleIcon: "border border-neutral-300 rounded-md p-[7px]",
        styleSubTitle: "mt-2 ml-3",
      },
      {
        icon: <VscGlobe size={20} />,
        subTitle: "Sites",
        styleIcon: "border border-neutral-300 rounded-md p-[7px]",
        styleSubTitle: "mt-2 ml-3",
      },
      {
        icon: <HiTemplate size={20} />,
        subTitle: "Tempalates",
        styleIcon: "border border-neutral-300 rounded-md p-[7px]",
        styleSubTitle: "mt-2 ml-3",
      },
      {
        icon: <LiaProjectDiagramSolid size={20} />,
        subTitle: "Integrations",
        styleIcon: "border border-neutral-300 rounded-md p-[7px]",
        styleSubTitle: "mt-2 ml-3",
      },
    ],
  },
  {
    title: "Teams",
    desc: [
      {
        subTitle: "Product",
      },
      {
        subTitle: "Engeenering",
      },
      {
        subTitle: "Design",
      },
      {
        subTitle: "Marketing",
      },
      {
        subTitle: "IT",
      },
      {
        subTitle: "Startups",
      },
      {
        subTitle: "Enterprise",
      },
      {
        subTitle: "Customor stories",
      },
    ],
  },
  {
    title: "Individuals",
    desc: [
      {
        subTitle: "Personal",
      },
      {
        subTitle: "Students",
      },
      {
        subTitle: "Teachers",
      },
      {
        subTitle: "Creators",
      },
    ],
  },
  {
    title: "Download",
    desc: [
      {
        subTitle: "IOS & Android",
      },
      {
        subTitle: "Mac & Windows",
      },
      {
        subTitle: "Calender",
      },
      {
        subTitle: "Web Clipper",
      },
    ],
  },
  {
    title: "Pricing",
  },
  {
    title: "Request a demo",
  },
];

export { NAVBAR_SMALL_LIST };
