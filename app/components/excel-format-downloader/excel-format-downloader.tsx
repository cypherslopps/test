"use client";

import { FC, ReactNode } from "react";
import { utils, write, writeFile } from "xlsx"
import Button from "../button/button";

interface ExcelFormatDownloaderProps {
    children: ReactNode,
    data: object[]
}
 
const ExcelFormatDownloader: FC<ExcelFormatDownloaderProps> = ({ children, data }) => {

    async function downloadExcelData() {
        // Generate worksheet and workbook
        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Dates");

        // Headers
        utils.sheet_add_aoa(worksheet, [["Address", "Options", "Coins"]], { origin: 'A1' });

        // Calculate column width
        // const maxWidth = data.reduce((w,r) => Math.max(r.user.name), 10);
        // worksheet["!cols"] = [{ wch: maxWidth }];

        // Create an XLSX file and save to Votes.xlsx
        writeFile(workbook, "Votes.xlsx", { compression: true });
    }

    return (
        <Button 
            role="download button"
            variant="text-primary"
            title="Download"
            onClick={downloadExcelData}
        >
            {children}
        </Button>
    );
}
 
export default ExcelFormatDownloader;