export const result = (res) => {
    return  res.data.length === 3 ? res.data[0].length + res.data[1].length + res.data[2].length : res.data.length === 2 ? res.data[0].length + res.data[1].length : res.data[0].length
}