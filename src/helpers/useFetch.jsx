import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch(url) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)
        setError(false)

        axios({
            method: 'GET',
            url: `${url}`,
        })
        .then(response => {
            setData(response.data)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
            setError(true)
        })
    }, [url])
    return { loading, error, data }
}