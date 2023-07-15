import { RawDraftContentState } from 'draft-js';
import type { JsonRpcFetchFunc, ExternalProvider } from "@metamask/providers";

interface HashtagConfig {
    trigger?: string | undefined;
    separator?: string | undefined;
}

declare function draftToHtml(
    editorContent: RawDraftContentState,
    hashtagConfig?: HashtagConfig,
    directional?: boolean,
    customEntityTransform?: (...args: any[]) => any,
): string;

declare global {
    interface Window {
      ethereum?: JsonRpcFetchFunc | ExternalProvider;
    }
}

export = draftToHtml;