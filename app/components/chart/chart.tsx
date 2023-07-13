'use client';

import { FC } from "react";
import { Card, Title, AreaChart } from "@tremor/react";
import { dataFormatter } from "@/app/lib/utils";


type ChartProps = {
  title: string;
  amount: number;
  data: any;
  categories: string[]
}

  
export const Chart: FC<ChartProps> = ({ title, amount, data, categories }) => {
    return (
      <Card className="py-3.5 px-4 xs:p-5 sm:p-[1.2rem] mx-auto bg-chart ring-1 ring-tertiary-shade-900/30 rounded-[1.1rem] sm:rounded-[1.2rem]">
        <Title className="text-white font-bold text-[.98rem] xs:text-[1.15rem]">{title}</Title>
        <p className="font-medium text-[#10b981] text-[.9rem] xs:text-[1.02rem]">{amount.toLocaleString()}</p>
        <AreaChart
          className="h-20 xs:h-24 mt-3 sm:mt-5 justify-start" 
          data={data}
          showXAxis={false}
          showYAxis={false}
          index="date"
          autoMinValue={true}
          categories={categories}
          showGridLines={false}
          colors={["emerald"]}
          valueFormatter={dataFormatter}
        />
      </Card>
    )
  }

  