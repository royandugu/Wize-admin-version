"use client"

import CardOne from "./dashboardComponents/cards/cardOne";
import CardTwo from './dashboardComponents/cards/cardTwo';
import CardThree from './dashboardComponents/cards/cardThree';
import CardFour from './dashboardComponents/cards/cardFour';

import dynamic from "next/dynamic";

const ChartOne = dynamic(() => import('./dashboardComponents/charts/chartOne'), { ssr: false })
const ChartTwo = dynamic(() => import('./dashboardComponents/charts/chartTwo'), { ssr: false })
const ChartThree = dynamic(() => import('./dashboardComponents/charts/chartThree'), { ssr: false })

const DashboardDisplay = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {(typeof window !== 'undefined') &&
          <>
            <ChartOne />
            <ChartTwo />
            <ChartThree />
          </>
        }
      </div>
    </>
  );
};

export default DashboardDisplay;
