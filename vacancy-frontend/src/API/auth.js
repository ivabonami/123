
function checkAdmin() {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token')) {
        return true
    } else {
        return false
    }


}

export const isAdmin = checkAdmin();