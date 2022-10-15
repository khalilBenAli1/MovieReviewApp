import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";

export default function Cards(props) {
  const [value, setValue] = React.useState(0);
  
  return (
    <div className="cards">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={props.ele.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
           {props.ele.titleText}
          </Typography>
          {/* <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          ></Rating> */}
          <Rating name="read-only" value={props.ele.rate} readOnly></Rating>
          <Typography gutterBottom variant="h7" component="div">
            Release Date : {props.ele.release}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Rate
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
