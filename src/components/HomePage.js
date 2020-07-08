import React, { Component } from 'react'
import { observer, inject } from "mobx-react"

@inject(({ store }) => ({ categories: store.categories, getCategories: store.getCategories }))
@observer
class HomePage extends Component {
    componentDidMount() {
        const { getCategories } = this.props;
        getCategories()
    }

    render() {
        const { categories } = this.props;
        return (
            <div className="card">
                <h2>Categories</h2>
                {categories.map(c => (<div>{c.name}</div>))}
            </div >
        )
    }
}

export default HomePage