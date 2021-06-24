import React, { useState } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg, Button } from 'reactstrap';

const CardViewComponent = ({img, title, desc}) => {
    const [state, setState] = useState({
        tgl : "25 Juni 2021",
        uname : "helloworld"
    })

    return(
        <div className="col-sm-12 col-md-4 p-3">
            {state.tgl} {state.uname}
            <Card>
                <CardImg top src={img} style={{objectFit: 'cover', height: '30vh'}} />
                <CardBody>
                    <CardTitle tag="h5">
                        {title}
                    </CardTitle>
                    <CardText style={{overflow:'hidden', textOverflow:'ellipsis', minHeight:'5vh', maxHeight:'5vh'}}>
                        {desc}
                    </CardText>
                </CardBody>
            </Card>
            
            <Button onClick={()=>setState({...state, uname:"hithere"})}>Click</Button>
        </div>
    )

}

export default CardViewComponent;