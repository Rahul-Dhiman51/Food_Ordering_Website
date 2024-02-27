import { sampe_tags, sample_foods } from "../data";

export const getAll = async () => sample_foods;

export const search = async (searchTerm) => {
    return sample_foods.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

export const getAllTags = async () => sampe_tags;

export const getAllByTag = async (tag) => {
    if (tag === 'All') return getAll()

    return sample_foods.filter((item) => item.tags.includes(tag));
}

export const getById = async (foodId) => {

    return sample_foods.find(item => item.id === foodId);
}