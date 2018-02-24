declare namespace FSWin {
    type Attributes = {
        [key: string]: boolean;
    }
}

export declare function getAttributes(path: string, callback: (result?: FSWin.Attributes) => void): void;
