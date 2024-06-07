import {Router} from "express"
import { registerUser,loginUser} from "../controllers/user.controller.js";
//is tarah ka import me tabhi les sakta hu jab export default na ho


const router = Router();

router.route("/register").post(registerUser);
router.route("/login").get(loginUser);
export default router;