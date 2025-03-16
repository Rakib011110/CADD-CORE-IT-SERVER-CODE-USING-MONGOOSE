import { TUser } from "./user.interface";
import userModel from "./user.model";

 

 const createUserIntoDB = async (payload: TUser) => {
    try {
      const newUser = await userModel.create(payload);
      return newUser;
    } catch (error) {
      throw error;
    }
  }  


  export const UserServices = {
    createUserIntoDB,       
  };