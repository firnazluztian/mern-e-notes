import React from 'react'
import faker from 'faker'

const dummyAPI = { id: 0, title: 'Biology class', content: faker.lorem.paragraphs() + faker.lorem.paragraphs(), dateCreated: '10.00pm 05/03/2020'}


const NoteDisplayPanel = () => {
    return <div className="card card-notes">
        <header className="card-header">
            <h5 className="card-header-title text-white">{dummyAPI.title}</h5>
        </header>
        <div className="card-content">
            <div className="content">
                <p className='text-justify'>{dummyAPI.content}</p>
                <p>Date created: {dummyAPI.dateCreated}</p>
            </div>
        </div>
    </div>
}

export default NoteDisplayPanel