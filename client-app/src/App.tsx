import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div className="App container mx-auto">
      <ul className="list-decimal">
        {activities.map((activity: any) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
