import React from 'react'
import { Accordion } from 'react-bootstrap'
import DebouncingSearchInput from './tasks/DebouncingSearchInput'
import PaginationList from './tasks/PaginationList'

const Content = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Debouncing Search Input</Accordion.Header>
                    <Accordion.Body>
                        <DebouncingSearchInput />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Pagination in a List</Accordion.Header>
                    <Accordion.Body>
                        <PaginationList />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Content
