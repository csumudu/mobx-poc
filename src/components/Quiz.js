import React from 'react'
import { observer, inject } from 'mobx-react'

@inject(({store}) => {
    debugger
    return { quiz: store.quiz }
})
@observer
class Quiz extends React.Component {
    render() {
        const { quiz = [] } = this.props;
        return (
            <div>
                QUIZ<br></br>
                {quiz.map(q => (<div>{q.name}</div>))}
            </div>
        )
    }
}

export default Quiz