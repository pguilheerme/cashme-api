import { db } from "@libs/prisma";
import { CreateUserType, UpdateUserType } from "@dtos/userDto";

const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    throw new Error(`Error searching user by email: ${error}`);
  }
};

const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      omit: {
        password: true,
      },
    });
    return user;
  } catch (error) {
    throw new Error(`Error searching user by email: ${error}`);
  }
};

const createUser = async (data: CreateUserType, id: string) => {
  try {
    const user = await db.user.create({
      data: {
        id,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
      },
      omit: {
        password: true,
      },
    });
    return user;
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
};

const updateUser = async (id: string, updatedData: Partial<UpdateUserType>) => {
  try {
    const user = await db.user.update({
      where: {
        id,
      },
      data: updatedData,
      omit: {
        password: true,
      },
    });
    return user;
  } catch (error) {
    throw new Error(`Error updating user: ${error}`);
  }
};

const deleteUser = async (id: string) => {
  try {
    const user = await db.user.delete({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    throw new Error(`Error deleting user: ${error}`);
  }
};

export { getUserByEmail, getUserById, createUser, updateUser, deleteUser };
