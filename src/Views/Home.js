import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import Reddit from './Reddit'

function Home() { 
    const [search, setSearch] = useState()
  return (
        <div className = "container">
        {/* search bar */}
            <form>
                <InputGroup className=" mt-20 mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">r/</InputGroup.Text>
                            </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Search for Subreddits keywords"
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                    value={search || ''} 
                                    onChange={e => setSearch(e.target.value)}
                                />
                </InputGroup>
            </form>
            
        {/* Search Result */}
        <Reddit search = {search} />
            
        </div>
    )
}

export default Home