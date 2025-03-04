'use client'

import { useEffect, useState } from "react";
import NavMenu from './components/NavMenu';
import Eclipse from './components/Eclipse';


export default function Home() {
  const [nextWednesday, setNextWednesday] = useState<Date | null>(null);
  const [countdown, setCountdown] = useState<string | null>(null);
  //Change the date in this Date Object if you want to have an alternate date
  const setDate = new Date('June 5, 2024 21:00:00');
  useEffect(() => {
    const firstWednesdays = getFirstWednesdays(2024);
    const futureFirstWednesdays = removePastDates(firstWednesdays);

    //Use for generic Wednesday meeting 
    futureFirstWednesdays[0] = setDate;
    //setNextWednesday(futureFirstWednesdays[0]);

    //Use this for custom Wednesday (not first wednesday of the month)
    setNextWednesday(setDate);

    // Calculate countdown
    if (futureFirstWednesdays.length > 0) {
      const intervalId = setInterval(() => {
        const now = new Date().getTime();
        const distance = futureFirstWednesdays[0].getTime() - now;
        //const distance = setDate.getTime() - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        setCountdown(`${days}d ${hours}h ${minutes}m`);

        // If the count down is finished, clear the interval
        if (distance < 0) {
          clearInterval(intervalId);
          setCountdown("EXPIRED");
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, []); // Empty dependency array to run the effect only once

  return (
    <main>
      <head>
        <title>Drexel Observatory</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <div className="background-container"></div>
      <NavMenu></NavMenu>
      <div className="welcome center">
        <h1>Welcome to the</h1>
        <h1>Joseph R. Lynch Observatory </h1>
        <h1>at Drexel University</h1>
      </div>
      <div className="info-box center">
        <div className="open-house-header">
          <h1>Open House Information</h1>
        </div>
        <h1>The Drexel Physics Department hosts a Telescope Open House on the first Wednesday of each month <br></br> at 30 minutes past sunset (for 2 hours).</h1>
        <br />        
        <div>
          <h1>Our next Open House is scheduled for:</h1>
          <br/>
          <h2 id="date">
            Wed, March 5th, 6:30-8:30pm
{/*             {nextWednesday &&
              nextWednesday.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })} */}
          </h2>
{/*           {countdown !== null && <p id="countdown">{countdown}</p>} */}

          <h1>Status: TBD</h1>
          <h1>The forecast for March 5th looks like rain. We will postpone to early to mid next week if needed.</h1>
          <br />
          {/* Fix this with updated date function, pull first 3 dates from the list */}
          <h1>Tenative Upcoming Dates:</h1>
          <ul>
            <li>Wed, March 5th, 6:30-8:30pm</li>
            <li>Wed, April 2nd, 7:30-9:30pm</li>
            <li>Wed, May 7th, 8:30-10pm</li>
          </ul>
        </div>
        <br />
        <h1>{'Named in honor of our benefactor, Mr. Joseph Lynch, the Lynch Observatory at Drexel houses a 16" Meade Schmidt-Cassegrain, the largest in Philadelphia. '}<br/>
        {'It is the main facility for Drexel\'s Physics 232: Observational Astrophysics, and serves host to frequent public observing nights.'} <br/>
        {'Public open nights are scheduled (typically) for the first Wednesday of every month during the academic year. Open houses start roughly 30 minutes after sunset, and run for two hours after that.'}</h1>
      </div>
     
      <div className="info-box center">
        <h3><i>{'The Joseph R. Lynch Observatory has been made possible by the Generosity of Joseph R. Lynch \'58 and the GE Foundation.'}</i></h3>
      </div>
    </main>
  );
}

function getFirstWednesdays(year: number) {
  const firstWednesdays = [];

  for (let month = 0; month < 12; month++) {
    const firstDayOfMonth = new Date(year, month, 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    const daysUntilWednesday = (3 - dayOfWeek + 7) % 7;

    const firstWednesdayOfMonth = new Date(year, month, 1 + daysUntilWednesday);
    firstWednesdays.push(firstWednesdayOfMonth);
  }

  return firstWednesdays;
}

function removePastDates(dateArray: any[]) {
  const currentDate = new Date();
  const futureDates = dateArray.filter(
    (date: string | number | Date) => new Date(date) > currentDate
  );
  return futureDates;
}
