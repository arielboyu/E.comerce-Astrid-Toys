const isAuthenticated = (req , res, next) => {
    if(req.isAuthenticated()){
        console.log("Estás logueado OK")
        next();
    } else{
        console.log("No hay ningún usuario logueado")
        res.status(400).send(req.session);
    }   
  }

module.exports = isAuthenticated;