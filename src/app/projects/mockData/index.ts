import a1_project1 from "../../assest/image/projects/project_1/a1.jpg";
import a2_project1 from "../../assest/image/projects/project_1/a2.jpg";
import a3_project1 from "../../assest/image/projects/project_1/a3.jpg";
import a4_project1 from "../../assest/image/projects/project_1/a4.jpg";
import a5_project1 from "../../assest/image/projects/project_1/a5.jpg";
import a6_project1 from "../../assest/image/projects/project_1/a6.jpg";
import a1_project2 from "../../assest/image/projects/project_2/a1.jpg";
import a1_project3 from "../../assest/image/projects/project_3/a1.jpg";
import a1_project4 from "../../assest/image/projects/project_4/a1.jpg";
import a1_project5 from "../../assest/image/projects/project_5/a1.jpg";
import a1_project6 from "../../assest/image/projects/project_5/a1.jpg";
import a1_project7 from "../../assest/image/projects/project_7/a1.jpg";
import a1_project8 from "../../assest/image/projects/project_8/a1.jpg";
import a1_project9 from "../../assest/image/projects/project_9/a1.jpg";

export interface Project {
  id: number;
  title: string;
  img: any;
  type: string;
  col: number;
  slug: string;
  location: string;
  time: string;
  subImage: any[];
  des: string;
}

export const listProject: Project[] = [
  {
    id: 1,
    title: "BEVERLY HILLS POLO CLUB",
    img: a1_project1,
    type: "Fit-out",
    col: 3,
    slug: "BEVERLY-HILLS-POLO-CLUB",
    location: "AEON MALL Huế",
    time: "Tháng 6-8/2024",
    subImage: [
      {
        img: a1_project1,
      },
      {
        img: a2_project1,
      },
      {
        img: a3_project1,
      },
      {
        img: a4_project1,
      },
      {
        img: a5_project1,
      },
      {
        img: a6_project1,
      },
    ],
    des: "Thi công hoàn thiện nội thất",
  },
  {
    id: 2,
    title: "ANH KAFE",
    img: a1_project2,
    type: "Fit-out",
    col: 2,
    slug: "ANH-KAFE",
    location: "AEON MALL Huế",
    time: "Tháng 6-8/2024",
    subImage: [
      {
        img: a1_project2,
      },
    ],
    des: "Thi công hoàn thiện nội thất",
  },
  {
    id: 3,
    title: "SHUYI GRASS JELLY",
    img: a1_project3,
    type: "Fit-out",
    col: 2,
    slug: "SHUYI-GRASS-JELLY",
    location: "AEON MALL Huế",
    time: "Tháng 6-8/2024",
    subImage: [
      {
        img: a1_project3,
      },
    ],
    des: "Thi công hoàn thiện nội thất",
  },
  {
    id: 4,
    title: "FM STYLE",
    img: a1_project4,
    type: "Fit-out",
    col: 2,
    slug: "FM-STYLE",
    location: "AEON MALL Huế",
    time: "Tháng 6-8/2024",
    subImage: [
      {
        img: a1_project4,
      },
    ],
    des: "Thi công hoàn thiện nội thất",
  },
  {
    id: 5,
    title: "DOOKKI",
    img: a1_project5,
    type: "Fit-out",
    col: 2,
    slug: "DOOKKI",
    location: "AEON MALL Huế",
    time: "Tháng 6-8/2024",
    subImage: [
      {
        img: a1_project5,
      },
    ],
    des: "Thi công hoàn thiện nội thất",
  },
  {
    id: 6,
    title: "INNO",
    img: a1_project6,
    type: "Fit-out",
    col: 3,
    slug: "INNO",
    location: "AEON MALL Huế",
    time: "Tháng 6-8/2024",
    subImage: [
      {
        img: a1_project6,
      },
    ],
    des: "Thi công hoàn thiện nội thất",
  },
  {
    id: 7,
    title: "TIROSS",
    img: a1_project7,
    type: "Fit-out",
    col: 2,
    slug: "TIROSS",
    location: "AEON MALL Huế",
    time: "Tháng 6-8/2024",
    subImage: [
      {
        img: a1_project7,
      },
    ],
    des: "Thi công hoàn thiện nội thất",
  },
  {
    id: 8,
    title: "FRESH NOODLE HUT",
    img: a1_project8,
    type: "Fit-out",
    col: 3,
    slug: "FRESH-NOODLE-HUT",
    location: "AEON MALL Huế",
    time: "Tháng 6-8/2024",
    subImage: [
      {
        img: a1_project8,
      },
    ],
    des: "Thi công hoàn thiện nội thất",
  },
  {
    id: 9,
    title: "OWEN",
    img: a1_project9,
    type: "Fit-out",
    col: 2,
    slug: "OWEN",
    location: "AEON MALL Huế",
    time: "Tháng 6-8/2024",
    subImage: [
      {
        img: a1_project9,
      },
    ],
    des: "Thi công hoàn thiện nội thất",
  },
];
