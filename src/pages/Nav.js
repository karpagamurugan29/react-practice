import React, { useEffect, useState } from 'react';
import { JsProblems } from './JsProblemSolving/JsProblems';
import { ProblemSolving } from './ProblemSolving';
import { ReactProblems } from './ReactProblems';
import { JsMay23 } from './JsProblemSolving/JsMay23';
import SearchInput from './hooks/SearchInput';
import { TodoList } from './components/TodoList';
import { DynamicForm } from '../pages/codingChallenge/DynamicForm';
import { Wizard } from '../tasks/practice/Wizard';
import { TagInput } from '../tasks/practice/TagInput';
import { FilterableSortableUserList } from '../tasks/practice/FilterableSortableUserList';
import { ControlledLogin } from './reactCustomeHook/ControlledLogin';
import { UncontrolledLogin } from './reactCustomeHook/ UncontrolledLogin';
import { TodoListUseReducer } from './reactCustomeHook/TodoListUseReducer';
import { SearchableListComponent } from '../tasks/knowledgeTest/SearchableListComponent';
import DebouncedInput from './codingChallenge/DebouncedInput';
import { Zoho } from './MNC/Zoho';
import { CounterButton } from './codingChallenge/CounterButton';
import { Dashboard } from './codingChallenge/Dashboard';
import { UseFetchApi } from './codingChallenge/UseFetchApi';
import CodingTest from './CodingTest/CodingTest';
import SimpleFilter from './Assesment/SimpleFilter.tsx';
// import { UseFetch } from '../tasks/practice/UseFetch';

const Nav = () => {
    return (
        <div className='task_list_sec'>
            <div className='container'>
                <div className='row'>
                    <SimpleFilter />
                    {/* <DynamicForm /> */}
                    {/* <UseFetchApi /> */}
                    {/* <Dashboard /> */}
                    {/* <CounterButton /> */}
                    {/* <Zoho /> */}
                    {/* <DebouncedInput /> */}
                    {/* <SearchableListComponent /> */}
                    {/* <TodoListUseReducer /> */}
                    {/* <UncontrolledLogin /> */}
                    {/* <ControlledLogin /> */}
                    {/* <FilterableSortableUserList /> */}
                    {/* <TagInput/> */}
                    {/* <UseFetch /> */}
                    {/* <Wizard /> */}
                    {/* <TodoList /> */}
                    {/* <DynamicForm formConfig={formConfig} onSubmit={(data) => console.log(data)} /> */}
                    {/* <SearchInput onSearch={((el) => console.log('render', el))} /> */}
                    {/* <JsMay23 /> */}
                    {/* <ReactProblems /> */}
                    {/* <ProblemSolving /> */}
                    {/* <JsProblems /> */}
                    {/* <InfiniteScroll /> */}
                    {/* <LazyLoadedImage /> */}
                    {/* <DebouncedValue/> */}
                    {/* <FormContext /> */}
                    {/* <TaskDragAndDrop /> */}
                    {/* <DragAndDrop /> */}
                    {/* <DeBounceFilter /> */}
                    {/* <DynamicForm /> */}
                    {/* <ToDoList /> */}
                    {/* <SearchableList /> */}
                    {/* <PaginatedList /> */}
                    {/* <InfiniteScroll/> */}
                    {/* <DebouncedInput
                        delay={500}
                        onChange={(value) => console.log(value)}
                        placeholder="Type something..."
                    /> */}
                    {/* <Dashboard /> */}
                    {/* <Hoohs/> */}
                    {/* <ArrayMethods /> */}
                    {/* <CustomeHooks /> */}
                    {/* <StringAndArrayMethod /> */}
                    {/* <JavaScriptProblems /> */}
                    {/* <Content /> */}
                    {/* <ReactProblemSolving /> */}
                    {/* <TcsQa /> */}
                    {/* <JsProblemSolving /> */}
                    {/* <div className='col-md-4'>
                        <UseFetchApi />
                        <Card className="text-center task_card">
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </div> */}
                    {/* <UserList /> */}
                    {/* <FormHandling /> */}
                    {/* <FindMissingNumbers /> */}
                    {/* <MergeIntervals /> */}
                    {/* <RepeatingChar /> */}
                    {/* <ArrayManipulation /> */}
                    {/* <DynamicFormValidation /> */}
                </div>
            </div>
        </div>
    )
}

export default Nav
