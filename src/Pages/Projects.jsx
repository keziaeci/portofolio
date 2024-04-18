import React from "react";
// import asahi from '../../src/images/asahi.png'
import { Link } from "../Components/Link";
import Navigator from "../Components/Navigator";
import { Timeline2 } from "../Components/Timeline2";

export const Projects = () => {
  return (
    <div className="font-mono max-w-full p-4 lg:p-52 content-center">
      <div className="text-sm  breadcrumbs">
        <ul className="dark:text-slate-400">
          <li>
            <Link path="/" name="Home" />
          </li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap  lg:mt-10">
        <div className="lg:flex-1">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <Timeline2
              date={"January 2024 - March 2024"}
              title={"E-Perpus (Kawan Alinea)"}
              desc={"Developing an online reading alike website using Laravel."}
              link={"https://github.com/keziaeci/E-perpus"}
            />
            <Timeline2
              date={"October 2023 - December 2023"}
              title={"Mini Choolifah"}
              desc={
                "Work with the team on developing API using Laravel,JWT, and Infyom."
              }
              link={"https://gitlab.com/azura-labs/mini-choolifah-backend"}
            />
            <Timeline2
              date={"Juni 2023 - Juli 2023"}
              title={"Sistem Arsip Persuratan - Rework"}
              desc={"Upgrading from vanilla PHP to Laravel"}
              link={"https://github.com/keziaeci/sistem-arsip-persuratan"}
            />
            <Timeline2
              date={"February 2023"}
              title={"Small Warehouse Management System"}
              desc={
                // "Get faster in listing goods and responsive display on various devices."
                "Work with the team on developing API using Laravel,JWT."
              }
              link={"https://github.com/loekalin/wms-server"}
            />
            <Timeline2
              date={"2021 - Juni 2022"}
              title={"Lokalin Website"}
              desc={
                "Work with the team on developing the front-end using Bootstrap."
                // "Marketplace alike website for local brands"
              }
              link={"https://lokalin.netlify.app/"}
            />
          </ol>
        </div>

        <div className="lg:flex-none shrink">
          <Navigator path="/" name="../Back" />
          {/* <Navigator path="/projects" name="My Works."/> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
