declare namespace FSWin {
    type FileAttributes = {
        [key: string]: boolean;
    }

    type VolumeAttributes = {
        TOTAL: number,
        FREE: number
    }
}

export declare function getAttributes(path: string, callback: (result?: FSWin.FileAttributes) => void): void;
export declare function getAttributesSync(path: string): FSWin.FileAttributes | undefined;
export declare function convertPath(pathToConvert: string, callback: (result?: string) => void, isLong?: boolean): void;
export declare function convertPathSync(pathToConvert: string, isLong?: boolean): string;
export declare function dirWatcher(dirToWatch: string, callback: (event: any, message: string) => void, options?: any): any;
export declare function find(pathToFind: string, callback: (event: any, message: string) => void, isProgressiveMode?: boolean): void;
export declare function findSync(pathToFind: string, syncCallback: (file: any) => void): any[] | number;
export declare function getVolumeSpace(volume: string, callback: (result: FSWin.VolumeAttributes) => void): void;
export declare function getVolumeSpaceSync(volume: string): FSWin.VolumeAttributes;
export declare function setAttributes(pathToFileOrDir: string, attributes: FSWin.FileAttributes, callback: (succeeded: boolean) => void): void;
export declare function setAttributesSync(pathToFileOrDir: string, attributes: FSWin.FileAttributes): void;