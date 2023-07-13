"use client";

import { FC, useEffect, useState } from "react";
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import { convertToRaw } from 'draft-js';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface EditorProps {
    handleEditorChange: (content: any) => any;
    label?: string;
    error?: string,
    value?: any
}
 
const DraftEditor: FC<EditorProps> = ({ handleEditorChange, value, label, error }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    const onEditorStateChange = (editorState: any) => {
        setEditorState(editorState);
        handleEditorChange(convertToRaw(editorState.getCurrentContent()));
    };

    console.log(value);

    useEffect(() => {
        if(value) 
            EditorState.createWithContent(value)
    }, [value])
    
    // const uploadImageCallBack = async (file: File) => {
    //     const imgData = await apiClient.uploadInlineImageForArticle(file);
    //     return Promise.resolve({ data: { 
    //       link: `${process.env.NEXT_PUBLIC_API_URL}${imgData[0].formats.small.url}`
    //     }});
    // }

    return (
        <div className='form-group flex flex-col gap-y-1' role="group">
            {label ? <label className='capitalize text-sm xs:text-[.9rem] md:text-[.92rem] text-gray-300'>{label}</label> : null}
            <Editor 
                editorState={editorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                placeholder="Enter some text..."
                onEditorStateChange={onEditorStateChange}
                // toolbarOnFocus
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'history'],
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true }
                }} 
            />
            {error ? (
                <span className='form-error text-[.8rem] text-[#f03e3e]'>{error}</span> 
            ) : null}
        </div>   
    );
}
 
export default DraftEditor;