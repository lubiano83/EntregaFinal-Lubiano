/* useAsync */

import { useEffect, useState } from "react";

export const useAsync = (asyncFn, dependencies = []) => {

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        setIsLoading(true)
        
        asyncFn()
            .then((respuesta) => {
                setData(respuesta)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, dependencies);

    return {data, error, isLoading}
}