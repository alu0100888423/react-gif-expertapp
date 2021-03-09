import { useEffect, useState } from "react"
import { getGifs } from "../helpers/girGifs";


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs( category )
            .then( imgs => {

                setState({
                    data: imgs,
                    loading:false
                });
            })

    }, [category])

    return state; // objeto con data y loading true

}