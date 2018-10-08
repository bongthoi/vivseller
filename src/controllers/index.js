import express from 'express';





/** */
let router=express.Router();


/**public */
router.get("/", function (req, res) {
	res.render("public/index",{title:"Home"});
});
router.get("/users/register", function (req, res) {
	res.render("public/register", { title: "Register" });
});

router.get("/users/login", function (req, res) {
	res.render("public/login", { title: "Login User" });
});

router.get("/private/dashboard",function (req, res) {
		res.render("dashboard/partials/dashboard");

});

router.get("/private/profile",function (req, res) {
    res.render("dashboard/seller/profile",{title:"Profile"});

});

/**export */
module.exports=router;