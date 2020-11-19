function isAuthenticated (req , res, next) {
    if(req.isAuthenticated()){
        console.log("Estás logueado OK")
        next();
    } else{
        console.log("No tenés permisos para ingresar en esta sección")
        res.redirect("/login"); // ¿La redirección se trabaja desde el front o back?
    }
  }

module.exports = isAuthenticated;
