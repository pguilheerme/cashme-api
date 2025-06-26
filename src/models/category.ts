import { CreateCategoryType, UpdateCategoryType } from "@dtos/categoryDto";
import { db } from "@libs/prisma";

const getCategories = async (userId: string) => {
  try {
    const categories = await db.category.findMany();
    return categories;
  } catch (error) {
    throw new Error(`Error searching categories: ${error}`);
  }
};

const getCategoryById = async (id: string) => {
  try {
    const category = await db.category.findUnique({
      where: {
        id,
      },
    });
    return category;
  } catch (error) {
    throw new Error(`Error searching category by id: ${error}`);
  }
};

const getCategoryByUserId = async (userId: string) => {
  try {
    const category = await db.category.findMany({
      where: {
        userId,
      },
    });
    return category;
  } catch (error) {
    throw new Error(`Error searching category by id: ${error}`);
  }
};

const createCategory = async (data: CreateCategoryType) => {
  try {
    const category = await db.category.create({
      data,
    });
    return category;
  } catch (error) {
    throw new Error(`Error creating category: ${error}`);
  }
};

const updateCategory = async (id: string, data: UpdateCategoryType) => {
  try {
    const category = await db.category.update({
      where: {
        id,
      },
      data,
    });
    return category;
  } catch (error) {
    throw new Error(`Error updating category: ${error}`);
  }
};

const deleteCategory = async (id: string, data: UpdateCategoryType) => {
  try {
    const category = await db.category.update({
      where: {
        id,
      },
      data,
    });
    return category;
  } catch (error) {
    throw new Error(`Error updating category: ${error}`);
  }
};

export {
  getCategories,
  getCategoryById,
  getCategoryByUserId,
  createCategory,
  updateCategory,
  deleteCategory,
};
