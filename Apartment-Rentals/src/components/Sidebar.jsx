import React from 'react'
import SavedFlat from './SavedFlats'
import AddFlats from './AddFlats'
import About from './About'

const Sidebar = () => {
  return (
    <section className='Sidebar'>
<SavedFlat />
<AddFlats />
<About />

    </section>
  )
}

export default Sidebar