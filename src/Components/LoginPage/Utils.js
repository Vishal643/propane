const setToken = ( token) => {
    localStorage.setItem("isRegistered",token)

}

const getToken = (key) => {
    return  localStorage.getItem(key)
    
}



export {setToken,getToken}

