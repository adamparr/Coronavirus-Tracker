import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

export default function InfoBox() {
  return (
    <Grid xs={12} md={8} lg={3} item>
      <Card className="card infoBox" >
      <h3 className="card-title">How You Can Help</h3>

      <p>
        You should:
      </p>
      <ul>
        <li><span className="blue-">Limit leaving the house</span> to essential groceries, medicine, or work.</li>
        <li><span className="red-">Practice social distancing</span> - staying at least 2 meters away from anyone else.</li>
        <li><span className="green-">Wash your hands</span> often & as soon as you get home.</li>
        <li><span className="yellow-">Cover your mouth</span> and nose with a tissue when you cough or sneeze.</li>
        <li><span className="blue-">Avoid touching your face</span> if your hands aren't clean.</li>
      </ul>

      <p className="nhs-summary">This is a summary taken from <a href="https://www.nhs.uk/conditions/coronavirus-covid-19/" target="_blank" rel="noopener noreferrer">nhs.uk</a></p>

      </Card>
    </Grid>
  );
}
