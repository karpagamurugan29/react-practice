import React from 'react';
import JsProblemSolving from '../tasks/JsProblemSolving';
// import FormHandling from '../tasks/FormHandling';

const Nav = () => {

    return (
        <div className='task_list_sec'>
            <div className='container'>
                <div className='row'>
                    <JsProblemSolving />
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
