import { TUser } from "./user.interface";
import userModel from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
  try {
    const newUser = await userModel.create(payload);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const getAllUsersFromDb = async () => {
  try {
    const users = await userModel.find();
    return users;
  } catch (error) {
    throw error;
  }
};

const getAUserFromDb = async (id: string) => {
  try {
    const user = await userModel.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};
 
const updpateUserInDb = async (id: string, payload: TUser) => {
  try {  
const user = await userModel.findByIdAndUpdate(id, payload, { new: true });
    if (!user) {
      throw new Error("User not found");
    } 

    return user;
  } catch (error) {
    throw error;



   } };


const deleteUserFromDb = async (id: string) => {
  try {    

   const deletedUser = await userModel.findByIdAndDelete(id);


   if (!deletedUser) {
    throw new Error("User not found");
  }

  return deletedUser;
   } catch (error) {} };



export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDb,
  getAUserFromDb, 
  updpateUserInDb, 

  deleteUserFromDb
};
