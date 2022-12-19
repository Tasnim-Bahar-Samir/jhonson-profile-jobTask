import { Accordion } from 'flowbite-react'
import React from 'react'

const Accordian = () => {
  return (
    <div className='mt-5'>
<Accordion alwaysOpen={true}>
  <Accordion.Panel>
    <Accordion.Title className='text-center mb-5 hover:bg-inherit'>
        <p className='text-center'>
            Workout Blog With Batman
        </p>
    </Accordion.Title>
    <Accordion.Content>
    <iframe className="w-full" height="315" src="https://www.youtube.com/embed/fJGDnvoLKFA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Accordion.Content>
  </Accordion.Panel>
  </Accordion>
    </div>
  )
}

export default Accordian