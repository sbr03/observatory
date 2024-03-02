import React from 'react'
import NavMenu from '../components/NavMenu';

const NightsPage = () => {
  return (
    <main>
    <head>
      <title>Drexel Observatory</title>
      <link rel="icon" href="/favicon.ico" /> {/* Replace with your actual favicon path */}
    </head>
    <div className="background-container"></div>
  
    <NavMenu/>
    <div className="directions-box">
      <h1 className='open-house-header'>Directions to the Observatory: </h1>
      <h1 className='center'>Joseph R. Lynch Observatory <br />
        Drexel University <br />
        32nd and Chestnut Streets <br />
        Philadelphia, PA 19104</h1>
      <br />  
      <ul className='border-bottom'>
        <li>1. Enter the Main Building. Go up the main staircase to the 3rd floor.</li> 
        <li>2. Walk around to the south-east corner of the floor (directly above the coffee shop on the 1st floor).</li>
        <li>3. Walk through the Picture Gallery hallway.</li>
        <li>4. Take the stairs at the end of the hall (up a small landing) to the 4th floor.</li>
        <li>5. Follow that hallway all the way to the end. </li>
        <li>6. Take the stairs to the roof of the building</li>
        <br />
      </ul>
      <br />
        <h1 className='open-house-header'>Night Observing</h1>
        <h1>Monthly Schedule <br /> 
          We typically open on the first Wednesday of each month, at the time specified below.</h1>
          <ul className='open-house-dates'>
            <li> January  - 5:30-7:30 (but normally we skip Jan due to Winter Break)</li>
            <li> February - 6:00-8:00</li>
            <li> March    - 6:30-8:30 EST</li>
            <li> May      - 8:30-10:00</li>
            <li> June     - 9:00-10:00</li>
            <li> July, August, September - Open for Special Events Only</li>
            <li> October  - 7:00-9:00 EDT</li>
            <li> November - 5:30-7:30 EST or 6:30-8:30 EDT, depending on date!</li>
            <li> December - 5:00-7:00</li>
          </ul>
      <br/>
      <div className="border-bottom"><p>{'On the first Wednesday of every month, roughly 30 minutes after sunset, the Drexel University Physics Dept. invites the public to attend an observing session atop the Main Building at Drexel University. The program is directed by Professor Gordon Richards with the support of graduate and undergraduate assistants. We view a variety of celestial objects, from planets, nebulae, star clusters, to comets. These objects are seen atop the Main Building via a Meade LX200GPS Telescope with Schmidt-Cassegrain 16" Optics. This makes the Joseph R. Lynch Observatory the largest in the city of Philadelphia.'}</p>
      <br /></div>
      <br />
      <h1 className="open-house-header">Solar Observing</h1><br />
      <p>We have a <a className="link-details" href='https://www.meade.com/coronado-solarmax-ii-60-double-stack-solar-telescope-w-bf10.pdp'>Hα telescope</a> with an easily portable mount and <a className="link-details" href='https://www.teachersource.com/product/sunspotter-solar-telescope'>two sun spotters</a>. Watch the quad between Disque and Korman halls or the area between Disque and the Main Building on clear days. We will usually have the solar telescope set up in the quad in the afternoon, on open house days.
      <br />
      <br />
      {'For an approximation of what you will see through our telescope, see the Solar and Heliospheric Observatory\'s Latest EIT 304 Image website. The more activity you see in that image (ultraviolet light at 30.4 nm), the more activity you will see in our telescope. Keep in mind: the sun changes on an hourly basis, so tomorrow\'s sun might look quite different from today\'s!'}</p>
      </div>
    </main>
  )
}

export default NightsPage