import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { UserServices } from "./user.services";


const   createUsers = catchAsync( async (req ,res) => {

    const user = await UserServices.createUserIntoDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'User Created Successfully',
        data: user,
      });
});  

export const UserControllers = {
    createUsers 
  };