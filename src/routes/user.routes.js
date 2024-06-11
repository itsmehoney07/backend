import {Router} from "express"
import { registerUser} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js" 
//is tarah ka import me tabhi les sakta hu jab export default na ho


const router = Router();

router.route("/register").post(upload.fields([
    {
        name:"avatar",
        maxCount:1
    },
    {
        name:"coverImage",
        maxCount:1
    }
]),registerUser);

export default router;