const notFoundError = (req,res,next) =>{
const error = new Error(`not found ${req.originalUrl}`)
res.status(404)
next(error)
}

const MongoError = (error,req,res,next) =>{
const statusC = res.statusCode === 200 ? 500 : res.statusCode
res.status(statusC).json({
    message:error.message
})
console.log(error.stack);
console.log(error.message);
}

module.exports = {
    notFoundError,
    MongoError
}