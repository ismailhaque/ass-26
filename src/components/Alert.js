

class Alert{

    static danger(msg){
        return `<p class="alert alert-danger">${msg}</p>`
    }

    static success(msg){
        return `<p class="alert alert-success">${msg}</p>`
    }
}

export default Alert;