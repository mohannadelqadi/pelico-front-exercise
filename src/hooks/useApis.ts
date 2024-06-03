import { useState } from "react"
import axios from 'axios';

const useApis = () => {
    const [apiState, setApiState] = useState<
        { state: 'idle' } |
        { state: 'loading' } |
        { state: 'error' } |
        { state: 'success', data: any }
    >();

    const callGetApi = (url: string): void => {
        setApiState({ state: 'loading' });

        axios.get(url).then(response => {
            console.log(response);
            if (response.status === 200) {
                const { data } = response;
                if (data && data !== undefined && data !== null) {
                    setApiState({ state: 'success', data: response.data });
                } else {
                    throw Error('API call failed');
                }
            }
        }).catch(error => {
            console.error(error);
            setApiState({ state: 'error' });
        });
    };

    return {
        callGetApi,
        apiState
    }
};

export default useApis;