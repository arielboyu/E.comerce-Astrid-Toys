function isAuthenticated (req , res, next) {
    if(req.isAuthenticated()){
        console.log("Estás logueado OK")
        next();
    } else{
        console.log("No hay ningún usuario logueado")
        res.status(401).send( req.session );
    }   
  }

module.exports = isAuthenticated;
