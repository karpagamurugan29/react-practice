import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


export const PersonalDetails = ({ register, errors, handleSubmit }) => {
    const OnSubmit = (data) => {
        console.log(data)
    }
    return (
        <form>
            <h3>Personal Details</h3>
            <div className="form-group">
                <label>Name</label>
                <input {...register("name", { required: "Name is required" })} type="text" className="form-control" placeholder="Enter Name" />
                {errors?.name?.message && <p className='error-message'>{errors?.name?.message}</p>}
            </div>
            <div className="form-group">
                <label>Email</label>
                <input {...register("mail", { required: "Email is required" })} type="email" className="form-control" placeholder="Enter email" />
                {errors?.mail?.message && <p className='error-message'>{errors?.mail?.message}</p>}
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input {...register("phone", { required: "Phone is required" })} type="number" className="form-control" placeholder="Enter Phone" />
                {errors?.phone?.message && <p className='error-message'>{errors?.phone?.message}</p>}
            </div>
            <button type="submit" onClick={handleSubmit(OnSubmit)} className="btn btn-primary">Submit</button>
        </form>
    )
}
export const IncomeDetails = ({ register, errors, handleSubmit }) => {
    const OnSubmit = (data) => {
        console.log(data)
    }
    return (
        <form>
            <h3>Income Details</h3>
            <div className="form-group">
                <label>Company</label>
                <input {...register("company", { required: "Company is required" })} type="text" className="form-control" placeholder="Enter Company" />
                {errors?.company?.message && <p className='error-message'>{errors?.company?.message}</p>}
            </div>
            <div className="form-group">
                <label>Profession</label>
                <input {...register("profession", { required: "Profession is required" })} type="text" className="form-control" placeholder="Enter Profession" />
                {errors?.profession?.message && <p className='error-message'>{errors?.profession?.message}</p>}
            </div>
            <div className="form-group">
                <label>Salary</label>
                <input {...register("salary", { required: "Salary is required" })} type="number" className="form-control" placeholder="Enter Profession" />
                {errors?.salary?.message && <p className='error-message'>{errors?.salary?.message}</p>}
            </div>
            <button type="submit" onClick={handleSubmit(OnSubmit)} className="btn btn-primary">Submit</button>
        </form>
    )
}
export const DocumentsUpload = ({ register, errors, handleSubmit }) => {
    const OnSubmit = (data) => {
        console.log(data)
    }
    return (
        <form>
            <h3>Documents Upload</h3>
            <div className="form-group">
                <label>Salary Slip</label>
                <input {...register("salarySlip", { required: "Salary Slip is required" })} type="file" className="form-control" />
                {errors?.salarySlip?.message && <p className='error-message'>{errors?.salarySlip?.message}</p>}
            </div>
            <div className="form-group">
                <label>Bank Statement</label>
                <input {...register("bankStatement", { required: "Bank Statementis required" })} type="file" className="form-control" />
                {errors?.bankStatement?.message && <p className='error-message'>{errors?.bankStatement?.message}</p>}
            </div>
            <button type="submit" onClick={handleSubmit(OnSubmit)} className="btn btn-primary">Submit</button>
        </form>
    )
}
export const FinalReview = () => {
    return (
        <form>
            <h3>Final Review</h3>
            <h1>Result</h1>
        </form>
    )
}
export const Wizard = () => {
    const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm({
        defaultValues: {}
    });
    const [activeStep, setActiveStep] = useState('personal_details')
    const step = [
        {
            code: 'personal_details',
            name: 'Personal Details'
        },
        {
            code: 'income_details',
            name: 'Income Details'
        },
        {
            code: 'documents_upload',
            name: 'Documents Upload'
        },
        {
            code: 'final_review',
            name: 'Final Review'
        },
    ]


    const OnPrevious = (code) => {
        setActiveStep(code)
    }

    const OnNext = (code) => {
        setActiveStep(code)
    }
    const getNextComp = (type) => {
        if (type === 'pre') {
            const index = step?.findIndex((el) => el.code === activeStep)
            return (index > 0) ? step[index - 1]?.code : step[index]?.code
        } else if (type === 'nxt') {
            const index = step?.findIndex((el) => el?.code === activeStep)
            console.log(index < step.length - 1)
            return index < step.length - 1 ? step[index + 1]?.code : step[index]?.code
        }
        return null
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <button onClick={(() => OnPrevious(getNextComp('pre')))}>Previous</button>
                {
                    step?.map((el, ind) => (
                        <button key={ind} onClick={(() => setActiveStep(el?.code))} style={{ margin: '10px', background: el?.code === activeStep && 'green', color: el?.code === activeStep && '#fff' }}>{el?.name}</button>
                    ))
                }
                <button onClick={(() => OnNext(getNextComp('nxt')))}>Next</button>
            </div>
            {activeStep === 'personal_details' && <PersonalDetails register={register} errors={errors} handleSubmit={handleSubmit} />}
            {activeStep === 'income_details' && <IncomeDetails register={register} errors={errors} handleSubmit={handleSubmit} />}
            {activeStep === 'documents_upload' && <DocumentsUpload register={register} errors={errors} handleSubmit={handleSubmit} />}
            {activeStep === 'final_review' && <FinalReview register={register} errors={errors} handleSubmit={handleSubmit} />}

        </div>
    )
}
