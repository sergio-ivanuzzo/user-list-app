import * as React from "react";
import {
    FormControl,
    Input,
    InputLabel,
    Checkbox,
    TextField,
    Button,
    FormControlLabel
} from "@material-ui/core";

import { IUserFormProps } from "components/UserUI/UserForm/UserFormProps";
import { IUserFormState } from "components/UserUI/UserForm/UserFormState";

class UserForm extends React.Component<IUserFormProps, IUserFormState> {
    constructor(props) {
        super(props);

        if (props.selectedUser) {
            this.state = {
                selectedUser: props.selectedUser
            };
        } else {
            this.state = {
                selectedUser: {
                    first_name: "",
                    last_name: "",
                    birth_date: "",
                    gender: "",
                    job: "",
                    biography: "",
                    is_active: false,
                    id: undefined
                }
            }
        }
    }
    public render(): React.ReactNode {
        return (
            <form autoComplete="off">
                <div>
                    <FormControl component="div">
                        <InputLabel htmlFor="first-name">First Name</InputLabel>
                        <Input
                            id="first-name"
                            autoComplete="off"
                            value={this.state.selectedUser.first_name}
                        />
                    </FormControl>
                </div>

                <div>
                    <FormControl component="div">
                        <InputLabel htmlFor="last-name">Last Name</InputLabel>
                        <Input id="last-name" autoComplete="off"  />
                    </FormControl>
                </div>

                <div>
                    <FormControl component="div">
                        <InputLabel htmlFor="birth-date">Birth Date</InputLabel>
                        <Input id="birth-date" autoComplete="off"  />
                    </FormControl>
                </div>

                <div>
                    <FormControl component="div">
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Input id="gender" autoComplete="off" />
                    </FormControl>
                </div>
                <div>
                    <FormControl component="div">
                        <InputLabel htmlFor="job">Job</InputLabel>
                        <Input id="job" autoComplete="off" />
                    </FormControl>
                </div>
                <div>
                    <FormControl component="div">
                        <TextField
                            rows={3}
                            multiline
                            label="Biography"
                            autoComplete="off"
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl component="div">
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Is Active"
                            labelPlacement="end"
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl component="div">
                        <Button onClick={this.handleClick}>
                            Save
                        </Button>
                    </FormControl>
                </div>
            </form>
        );
    }

    protected handleClick = (): void => {
        this.props.onClick();
    }
}

export default UserForm;
