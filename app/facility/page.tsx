import React from 'react'
import NavMenu from '../components/NavMenu';

const FacilityPage = () => {
  return (
    <main>
    <head>
      <title>Drexel Observatory</title>
      <link rel="icon" href="/favicon.ico" /> {/* Replace with your actual favicon path */}
    </head>
      <div className="background-container"></div>
    <NavMenu/>

    <div className="directions-box center">
    <h1 className='open-house-header'>The Facility</h1>
      <div className="grid-container">
      <div className="grid-item">
      <div className=" center meade-img"></div>
      <br />
      <h1>Meade LX200GPS</h1>
      <ul className='details'>
        <li>- 16" (40.6 cm) Schmidt Cassegrain</li>
        <li>- 4064mm focal length; f/10</li>
        <li>- Permanent concrete mount in the dome</li>
      </ul></div>

      <div className="grid-item"><div className=" center dome-img"></div>
      <br />
      <ul className='details'>
        <li>- 15' ash dome</li>
        <li>- Motorized rotation and slit controls</li>
        <li>- Located at <a className="link-details" href='http://mapper.acme.com/?ll=39.95395,-75.18607&z=19&t=H&marker0=39.95395%2C-75.18607%2C1.9%20km%20W%20of%20Philadelphia%20PA'>39.95395 N, 75.18607 W</a></li>
      </ul></div>

     <div className="grid-item"> <h1 className='link-details'><a href="http://www.stellarvue.com/sv102ed.html">Stellarvue SV102ED</a></h1>
      <ul className='details'>
        <li>- 102mm ED doublet refractor</li>  
        <li>- 710mm focal length, f/6.95</li>
        <li>- Mounted to the Meade as an autoguider</li>
      </ul></div>
  
      <div className="grid-item">
        <h1 className='link-details'><a href="http://www.telescope.com/control/product/~category_id=dobsonians/~pcategory=telescopes/~product_id=09708">Orion XT10 Classic</a></h1>
      <ul className='details'>
        <li>- 10" (25.4cm) Dobsonian (Newtonian), non-computerized</li>  
        <li>- 1200mm focal length, f/4.7</li>
      </ul></div>

      <div className="grid-item"><h1 className='link-details'><a href="http://scientificsonline.com/product.asp?pn=3002001&bhcd2=1204648478">Edmund Scientific Astroscan</a></h1>
      <ul className='details'>
        <li>- 4" (10.5cm) Newtonian "red ball"</li>  
        <li>- 445 mm focal length, f/4.2</li>
        <li>- Standard camera tripod for portability</li>
      </ul></div>

     <div className="grid-item"> <h1>Meade LX200</h1>
      <ul className='details'>
        <li>- 8" (20.3 cm) Schmidt Cassegrain</li>  
        <li>- portable equitorial mount</li>
      </ul></div>

      <div className="grid-item">
      <h1>Other Equipment</h1>
      <ul className='details'>
        <li>- Full set of eyepieces (6mm - 40mm) </li>  
        <li>- Pentax XW 40mm, 14 and 10mm, ultra-wide field eyepieces.</li>
        <li>- Orion Skyglow Ultrablock filters </li>
        <li>- SBIG STL-1001E CCD camera </li>
        <li>- Video camera</li>
      </ul>
      </div>
      </div>
      <br />
      <h1>For those who will be using the facility, we have prepared <a className="link-details" href="https://www.physics.drexel.edu/observatory/checklist.pdf">setup and closing checklist</a> for you to familiarize yourself with. Copies are also posted in the dome.</h1>
    </div>
    </main>
  )
}

export default FacilityPage