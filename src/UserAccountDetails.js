import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import{
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    Button,
    FormTextarea
} from "shards-react"

const UserAccountDetails=({title})=>(
    <Card small className="mb-4">
        <CardHeader className="border-bottom">
            <h2 className="m-0">{title}</h2>
        </CardHeader>
        
        <ListGroup>
            <ListGroupItem className="p-3">
                <Row>
                    <Col>
                        <Form>
                            <Row form>
                                <Col md="6" className="form-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <FormInput
                                        id="firstname"
                                        placeholder="First Name"
                                        value="Akash"
                                        onChange={()=>{}}
                                    />
                                </Col>

                                <Col md="6" className="form-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <FormInput
                                        id="lastname"
                                        placeholder="Last Name"
                                        value="Verma"
                                        onChange={()=>{}}
                                    />
                                </Col>
                            </Row>

                            <Row form>
                                <Col md="6" className="form-group">
                                    <label htmlFor="oldpassword">Old Password</label>
                                    <FormInput
                                        type="password"
                                        id="oldpassword"
                                        placeholder="Old Password"
                                        value=""
                                        onChange={()=>{}}
                                    />
                                </Col>

                                <Col md="6" className="form-group">
                                    <label htmlFor="newpassword">New Password</label>
                                    <FormInput
                                        type="password"
                                        id="newpassword"
                                        placeholder="New Password"
                                        value=""
                                        onChange={()=>{}}
                                    />
                                </Col>
                            </Row>

                            <Row form>
                                <Col md="12" className="form-group">
                                    <label htmlFor="description">Description</label> 
                                    <FormTextarea id="description" rows="5" />
                                </Col>
                            </Row>
                            <Button theme="accent">Update Password</Button>
                        </Form>
                    </Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
    </Card>
)

UserAccountDetails.defaultProps={
    title:"Change Password"
}

export default UserAccountDetails