import { Router } from "express";
import { sample_foods, sample_tags } from "../data.js";

const router = Router();

router.get('/', (req, res) => {
    res.send(sample_foods);
})

router.get('/tags', (req, res) => {
    res.send(sample_tags);
})

router.get('/search/:searchTerm', (req, res) => {
    const { searchTerm } = req.params;
    const foods = sample_foods.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.send(foods);
})

router.get('/tag/:tag', (req, res) => {
    const { tag } = req.params;
    // console.log(tag);
    const foods = sample_foods.filter((item) => {
        // console.log(item.tags);
        return item.tags?.includes(tag)
    });
    // console.log(foods);
    res.send(foods);
})

//everything after /: is a parameter that we can access with req.params
// if we go to /food/123, req.params will be { foodId: '123' }
// if we declare this route at the top, it will match /food/search, /food/tag, etc
// so we need to declare it at the bottom

router.get('/:foodId', (req, res) => {
    const { foodId } = req.params;
    const food = sample_foods.find(item => item.id === foodId);
    res.send(food);
})
// router.get('/:id', (req, res) => { })

export default router;