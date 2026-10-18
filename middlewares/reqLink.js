const reqLink = ((req,res,next) =>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
})

module.exports = reqLink