import React, { Component } from 'react'

const todoItems = [
    {
      id: 1,
      title: "Go to Market",
      description: "Buy ingredients to prepare dinner",
      completed: true
    },
    {
      id: 2,
      title: "Study",
      description: "Read Algebra and History textbook for upcoming test",
      completed: false
    },
    {
      id: 3,
      title: "Sally's books",
      description: "Go to library to rent sally's books",
      completed: true
    },
    {
      id: 4,
      title: "Article",
      description: "Write article on how to use django with react",
      completed: false
    }
  ];


export default class index extends Component {

    state = {

    }


    render() {
        return (
            <>
                <h1 className="text-white">Main Window</h1>
            </>
        )
    }
}
