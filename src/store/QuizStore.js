import { observable, action } from "mobx"
import { CategoriesApi } from "../api/categoriesApi"

class QuizStore {
    constructor() {
        this.api = new CategoriesApi()
    }
    @observable categories = []
    @observable quiz = []
    @observable selectedCategory = null
    @observable isLoading = 0;

    @action
    getCategories = async () => {
        this.isLoading++;
        const res = await this.api.getCategories();
        this.categories = res.Items;
        this.isLoading--;
    }

    @action
    async getQuiz() {
        this.isLoading++;
        const res = await this.api.getCategories();
        this.quiz = res;
        this.isLoading--;
    }

    @action
    addCategory = async (param) => {
        this.isLoading++;
        const res = await this.api.addCategory(param);
        await this.getCategories()
        this.isLoading--;
    }
}

export default new QuizStore()