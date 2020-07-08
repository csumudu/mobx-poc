export class CategoriesApi {

    baseUrl = "https://quiz.cloudappfactory.com/";

    getCategories(id = "TOP") {
        return fetch(`/question/categories/${id}`, {
            method: "get"
        }).then(res => res.json())
    }
    addCategory(param) {
        return fetch(`/question/category`, {
            method: "post",
            body: JSON.stringify(param),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}