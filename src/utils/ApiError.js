class ApiError extends Error {

    constructor (
        statusCode , 
        message = "Something Went Wrong" ,
        error = [] ,
    ) {
        super(message)
        this.errors = error 
        this.statusCode = statusCode 
        this.success = false 
        this.message = message
        this.data = null
    }
}

export { ApiError }