import React from 'react'
import { inject, observer } from 'mobx-react'
import { } from 'mobx'

@inject(({ store }) => ({
    addCategory: store.addCategory,
    categories: store.categories
}))
@observer
class AddCategory extends React.Component {

    state = {
        parentCategoryId: "",
        name: ""
    }

    render() {
        const { addCategory, categories } = this.props;

        return (
            <div className="card">
                <form onSubmit={e => { e.preventDefault(); addCategory(this.state) }}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Parent</label>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={e => this.setState({ parentCategoryId: e.target.value })}>
                            <option value="" >Parent</option>
                            {categories.map(c => (<option value={c.categoryId}>{c.name}</option>))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" value={this.state.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => this.setState({ name: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddCategory