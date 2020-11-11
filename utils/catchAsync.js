module.exports = funct => {
    return (req, res, next) => {
        func(req, res, next).catch(next);  ///todo esto es para wrap async functions
    }
}