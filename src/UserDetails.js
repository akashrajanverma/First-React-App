import React from "react"
import ReactDOM from "react-dom"
import{
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem
} from "shards-react"

const UserDetails = ({userDetails}) => (
    <Card className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
            <div className="mb-3 mx-auto">
                <img
                    className="rounded-circle"
                    //src={userDetails.image}
                    alt={userDetails.name}
                    width="110"
                />
            </div>

            <h4 className="mb-0">{userDetails.name}</h4>
            <span className="text-muted d-block mb-2">{userDetails.job}</span>
        </CardHeader>

        <ListGroup>
            <ListGroupItem className="p-4">
                <strong className="text-muted d-block mb-2">
                    {userDetails.emailTitle}
                </strong>
                <span>{userDetails.emailValue}</span>
            </ListGroupItem>

            <ListGroupItem className="p-4">
                <strong className="text-muted d-block mb-2">
                    {userDetails.phoneTitle}
                </strong>
                <span>{userDetails.phoneValue}</span>
            </ListGroupItem>

            <ListGroupItem className="p-4">
                <strong className="text-muted d-block mb-2">
                    {userDetails.addressTitle}
                </strong>
                <span>{userDetails.addressValue}</span>
            </ListGroupItem>

            <ListGroupItem className="p-4">
                <strong className="text-muted d-block mb-2">
                    {userDetails.summaryTitle}
                </strong>
                <span>{userDetails.summaryValue}</span>
            </ListGroupItem>
        </ListGroup>
    </Card>
);

UserDetails.defaultProps={
    userDetails:{
        name:"Akash Rajan Verma",
        job:"Internship",
        emailTitle:"E-mail",
        emailValue:"aakashrajanverma@gmail.com",
        phoneTitle:"Mobile",
        phoneValue:"8604577005",
        addressTitle:"Address",
        addressValue:"AIT PUNE",
        summaryTitle:"Description",
        summaryValue:"He is a third year Computer Engineering student in Army Institute of Technology"

    }
};

export default UserDetails;

