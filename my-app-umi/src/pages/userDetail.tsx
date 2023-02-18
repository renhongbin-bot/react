import {useClientLoaderData} from 'umi'

export default function userDetail () {
    const {data} = useClientLoaderData()
    console.log(data)
    return <div>123</div>
}
export async function clientLoader() {
    const data = await fetch('/data',{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    return data
}