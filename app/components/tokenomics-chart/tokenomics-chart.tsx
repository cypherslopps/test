"use client";

import { useCallback, useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Heading from "../heading/heading";
import { zkSyncAddresses } from "@/app/lib/constants";
import { fetchZkSyncBalance } from "@/app/lib/zkSyncUtils";
import { Loader2 } from "lucide-react";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

 
const TokenomicsChart = () => {
    const [options] = useState({
        chart: {
            width: 720,
            height: "auto",
            type: 'polarArea'
        },
        labels: ['Community Token Claim', 'Liquidity', 'Proposal Fund', 'Governance', 'Nebula NFT Drop'],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'right',
            itemMargin: {
                horizontal: 0,
                vertical: 12
            },
            offsetY: 130,
            labels: {
                colors: "#ggg",
                useSeriesColors: true
            }
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6
            }
        },
        responsive: [
            {
                breakpoint: 650,
                options: {
                    chart: {
                        width: 620,
                        type: 'polarArea'
                    },
                    legend: {
                        position: 'bottom'
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    }
                }
            },
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 580,
                        type: 'polarArea'
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    }
                }
            }
        ]
    });
    const [series, setSeries] = useState([]);
    const [balances, setBalances] = useState<any>({ data: [] });
    const [isLoading, setIsLoading] = useState<boolean>(true);

    let fetchWalletBalance = useCallback(async () => {
        const addressBalances = await Promise.all(zkSyncAddresses.map(address => fetchZkSyncBalance(address)));

        setBalances({ data: addressBalances });
    }, [fetchZkSyncBalance]);

    // Invoke memoized function
    useEffect(() => {
        fetchWalletBalance();
    }, [fetchWalletBalance]);

    // Set chart series data
    useEffect(() => {
        setSeries(balances.data);
        setIsLoading(false);
    }, [balances, isLoading]);

    return (
        <div className="chart flex flex-col items-center pt-8 relative overflow-x-scroll">
            <Heading 
              heading="Project Addresses"
              subHeading="Total supply: 100 Trillion"
              variant="light"
              styles={`text-center md:text-center ${isLoading ? "" : "xs:-mb-12"}`}
              removeContentPadding
            />
            {!isLoading ? (
                <Chart 
                    options={options} 
                    series={series} 
                    type="polarArea" 
                    width={820} 
                />
            ) : ( 
                <div className="my-10">
                    <Loader2 className="w-5 h-5 md:w-7 md:h-7 stroke-tertiary-700 animate-spin transition-transform duration-500" />
                </div>
            )}
        </div>
    );
}
 
export default TokenomicsChart;