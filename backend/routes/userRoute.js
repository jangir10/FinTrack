import express from 'express'
import { registerUser ,loginUser, getProfile, updateProfile,bookAppointment, listAppointments, cancelAppointment, paymentRazorpay, verifyRazorpay } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js';
import upload from '../middlewares/multer.js';

// Instance of the router
const userRouter = express.Router()

// End point to register the user
userRouter.post('/register', registerUser);
userRouter.post('/login',loginUser)
userRouter.get('/get-profile',authUser,getProfile);
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile);
userRouter.post('/book-appointment',authUser,bookAppointment);
userRouter.get('/appointments',authUser,listAppointments);
userRouter.post('/cancel-appointment',authUser,cancelAppointment);
userRouter.post('/payment-razorpay',authUser,paymentRazorpay);
userRouter.post('/verify-razorpay',authUser,verifyRazorpay);
export default userRouter;