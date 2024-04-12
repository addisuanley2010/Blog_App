const { Router } = require("express");
const router = Router();

const {
  userRegister,
  changePassword,
  getAuthorData,
  userLogin,
  getAuthors,
  editUserProfile,
  changeProfileImg,
  getProfile,
} = require("../controllers/userControllers");
const authMiddleware = require("../middleware/authMiddleware");



router.post("/register", userRegister);
router.get("/getAuthor/:id", getAuthorData);

router.post('/login',userLogin)
// router.post('/edit-image',changeProfileImg)
router.get('/',getAuthors)
router.get('/:id',authMiddleware,getProfile)

router.put('/edit-profile',authMiddleware,editUserProfile)
router.put('/edit-password',authMiddleware,changePassword)


module.exports = router;
