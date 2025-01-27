import React, { useState } from 'react'

const DeBounceFilter = () => {
    const [searchText, setSearchText] = useState(null)
    
    return (
        <div>
            <div className="form-group col-md-4" >
                <label>Search</label>
                <input className="form-control" onChange={((e) => setSearchText(e?.target?.value))} />
            </div>
        </div>
    )
}

export default DeBounceFilter
