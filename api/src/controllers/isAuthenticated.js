function isAuthenticated (req , res, next) {
    console.log("isAuthentcated: req.user es: ")
    console.log(req.user)
    if(req.isAuthenticated()){
        console.log("Estás logueado OK")
        next();
    } else{
        console.log("No hay ningún usuario logueado")
        res.status(401).send( req.session );
    }   
  }

module.exports = isAuthenticated;
