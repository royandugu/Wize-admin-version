"use client"

import React from "react";

import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { EventType } from "../../systemComponents/types/types";
import Link from "next/link";

type Table = {
  title: string;
  tableRows: Array<string>;
  tableCols: Array<object>;
  dataKeys: Array<string>;
  hasImage: boolean;
  parseOn?: number;
  hasPopUp?:boolean;
  setShowPopUp?:React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedData:React.Dispatch<React.SetStateAction<EventType>>;
  updateDestination?:string
}

const Table = (props: Table) => {

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-5">
        <h4 className="mb-6 text-xl font-semibold text-black">
          {props.title}
        </h4>

        <table className="min-w-full">
          <tbody>
            <tr className="rounded-sm bg-gray-2 gap-10">
              {props.tableRows.map((tr: string, id: number) => (
                <th key={id} className="px-10 py-5 border border-[rgb(200,200,200)]"> {tr} </th>
              ))}
            </tr>
            {props.tableCols.map((item: any, index) => (
              <tr key={index} className="p-4 mb-4">
                {props.dataKeys.map((key, i) => (
                  <td key={i} className="p-5 border border-[rgb(200,200,200)]">
                    {props.hasImage ? i === 0 ? <img src={item[key]} className="w-full h-[100px]" /> : item[key] : item[key]}
                  </td>
                ))}
                <td className="p-5 border border-[rgb(200,200,200)]">
                  <div className="flex justify-center items-center gap-5">
                    <Link href={`${props.updateDestination}/${item._id}`}><FaPencilAlt size={25} className="text-grad-one cursor-pointer" /></Link>
                    <MdDelete size={30} className="text-grad-two cursor-pointer" onClick={()=>{
                      props.setSelectedData(item)
                      props.setShowPopUp && props.setShowPopUp(true)
                    }}/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
