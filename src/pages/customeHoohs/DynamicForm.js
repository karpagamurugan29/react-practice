import React from 'react';
import { useForm } from 'react-hook-form';

const DynamicForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    return (
        <div>
            <form>
                <div class="form-group">
                    <label>Type</label>
                    <select class="form-control" {...register('type', { required: true })}>
                        <option value=''>select</option>
                        <option value='number'>Text</option>
                        <option value='email'>Email</option>
                        <option value='number'>Number</option>
                    </select>
                </div>
                <div class="form-group">
                    <label >label</label>
                    <input type="email" class="form-control"  {...register('label', { required: true })} placeholder="Enter label" />
                </div>
                <div class="form-group">
                    <label>required</label>
                    <select class="form-control" {...register('required')}>
                        <option value=''>select</option>
                        <option value='true'>true</option>
                        <option value='false'>false</option>
                    </select>
                </div>
                <div class="form-group">
                    <label >Min Value</label>
                    <input type="email" class="form-control"  {...register('minValue', { required: true })} placeholder="Enter Min Value" />
                </div>
                <div class="form-group">
                    <label >Max Value</label>
                    <input type="email" class="form-control"  {...register('maxValue', { required: true })} placeholder="Enter Max Value" />
                </div>
            </form>
        </div>
    )
}

export default DynamicForm
