import {RootReducersType} from "./store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


export const saveState = (state: RootReducersType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};


// Видео по созданию этого файла
// https://www.youtube.com/watch?v=U8f01SM8Kq4&list=PLbLBXDhswD1eHUr9VOAMLNllso1QUF1hn&index=3