import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ kar}) {
  console.log("......",kar);
  return (
    <Card
     
      className="infoBox--red"
     
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
         <h5>Belgavi</h5>
        </Typography>
        <h5 className="infoBox__cases--green">Active :{kar.active}</h5>
        

        <Typography className="infoBox__total" color="textSecondary">
        <h5>confirmed : {kar.confirmed}</h5>
        </Typography>

        <Typography className="infoBox--red" color="textSecondary">
        <h5>Recovered : {kar.recovered}</h5>
        </Typography>
      
      </CardContent>
    </Card>
  );
}

export default InfoBox;