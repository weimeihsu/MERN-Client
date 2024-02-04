const toTitleCase = (str) => {
    if(!str){
        return ''
    }
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
}

const convertToBase64 = (file) =>{
    return new Promise((resolve, reject)=>{
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () =>{
            resolve(fileReader.result)
        }
        fileReader.onerror = (err) =>{
            reject(err)
        }
    })
}

export { toTitleCase, convertToBase64 }