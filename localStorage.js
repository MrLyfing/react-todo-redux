/**
 * Created by Lyfing on 29/11/2016.
 */

export const loadState = () => {
    //in case if browser does not support local storage, need to try catch
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null)
            return undefined;
        return JSON.parse(serializedState);

    }
    catch(err) {
        return undefined;
    }

};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (err) {
        // Ignore write errors
    }
};


