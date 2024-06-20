import React from 'react';
import IconLabel from '../../molecules/IconLabel';
import UserLabel from '../../molecules/UserLabel';
import IconHeader from '../../molecules/IconHeader';
import { Card, CardContent} from "@mui/material";
import './index.css';  

const CardContainer: React.FC = () => {
  return (
    <div className="card-container">
      <Card className="card">
        <CardContent>
          <IconHeader />
          <UserLabel />
          <IconLabel />
        </CardContent>
      </Card>
    </div>
  );
}

export default CardContainer;
