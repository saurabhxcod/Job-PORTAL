import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const filterData = [
    { filterType: "Location", array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"] },
    { filterType: "Industry", array: ["Frontend Developer", "Backend Developer", "FullStack Developer"] },
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('')
    const dispatch = useDispatch()

    const changeHandler = (value) => setSelectedValue(value)

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue))
    }, [selectedValue])

    return (
        <div className='w-full bg-white p-4 rounded-xl shadow-md space-y-4'>
            <h1 className='font-bold text-xl text-gray-800'>Filter Jobs</h1>
            <hr className='border-gray-200' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler} className='space-y-4'>
                {filterData.map((data, index) => (
                    <div key={index} className='space-y-2'>
                        <h2 className='font-semibold text-gray-700'>{data.filterType}</h2>
                        {data.array.map((item, idx) => {
                            const itemId = `id${index}-${idx}`
                            return (
                                <div key={itemId} className='flex items-center space-x-2'>
                                    <RadioGroupItem value={item} id={itemId} />
                                    <Label htmlFor={itemId} className='text-gray-600'>{item}</Label>
                                </div>
                            )
                        })}
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default FilterCard
