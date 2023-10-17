import React, { useEffect } from 'react';
import GitHubCalendar from 'github-calendar';
import './HeatMap.modules.css'

const Heatmap = () => {
    useEffect(() => {
       
        GitHubCalendar('.calendar', 'DaroOps');
      }, []);
    
      return (
        <div className="calendar">
          Loading the data just for you.
        </div>
      );
};

export default Heatmap;