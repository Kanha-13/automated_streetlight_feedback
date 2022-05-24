export const getMyCOmplains = async () => {
    const res = await fetch('http://192.168.29.59:8002/complains')
    const data = await res.json()
    return await data
}