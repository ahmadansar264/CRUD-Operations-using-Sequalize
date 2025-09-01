import router from "express";
import { CreateUser } from "../../Controllers/userController/user.controller";

const userRouter = router();

userRouter.post('/create', CreateUser);

export default userRouter;