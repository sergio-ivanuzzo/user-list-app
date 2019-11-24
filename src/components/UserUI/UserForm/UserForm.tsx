import * as React from "react";
import { Moment } from "moment";
import {
    FormControl,
    Input,
    InputLabel,
    Checkbox,
    TextField,
    Button,
    FormControlLabel,
    Select,
    MenuItem
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

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
                    birth_date: null,
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
                            onChange={this.handleChange("first_name")}
                        />
                    </FormControl>
                </div>

                <div>
                    <FormControl component="div">
                        <InputLabel htmlFor="last-name">Last Name</InputLabel>
                        <Input
                            id="last-name"
                            autoComplete="off"
                            value={this.state.selectedUser.last_name}
                            onChange={this.handleChange("last_name")}
                        />
                    </FormControl>
                </div>

                <div>
                    <FormControl component="div">
                        <DatePicker
                            value={this.state.selectedUser.birth_date}
                            onChange={this.handleDateChange}
                            label="Birth Date"
                            format="YYYY-MM-DD"
                        />
                    </FormControl>
                </div>

                <div>
                    <FormControl component="div">
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select
                            labelId="gender"
                            id="gender"
                            value={this.state.selectedUser.gender}
                            onChange={this.handleSelectChange("gender")}
                            autoComplete="off"
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl component="div">
                        <InputLabel htmlFor="job">Job</InputLabel>
                        <Input
                            id="job"
                            autoComplete="off"
                            value={this.state.selectedUser.job}
                            onChange={this.handleChange("job")}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl component="div">
                        <TextField
                            rows={3}
                            multiline
                            label="Biography"
                            autoComplete="off"
                            onChange={this.handleChange("biography")}
                            value={this.state.selectedUser.biography}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl component="div">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={!!this.state.selectedUser.is_active}
                                    onChange={this.handleChange("is_active")}
                                    value={this.state.selectedUser.is_active}
                                />
                            }
                            label="Is Active"
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl component="div">
                        <Button href="#" onClick={this.handleSubmit}>
                            Save
                        </Button>
                    </FormControl>
                </div>
            </form>
        );
    }

    protected handleSubmit = async (): Promise<void> => {
        const selectedUser = this.state.selectedUser;
        if (selectedUser.id) {
            await this.props.updateUser(selectedUser);
        } else {
            await this.props.addUser(selectedUser);
        }
    };

    protected handleChange = (
        fieldName: string
    ): (event: React.ChangeEvent) => void => (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        let value: string | boolean = event.currentTarget.value;
        if (event.currentTarget.matches("[type='checkbox']")) {
            value = event.currentTarget.checked;
        }

        this.setState({
            selectedUser: {
                ...this.state.selectedUser,
                [fieldName]: value
            }
        });
    };

    protected handleDateChange = (moment: Moment): void => {
        this.setState({
            selectedUser: {
                ...this.state.selectedUser,
                birth_date: moment.toDate()
            }
        });
    }

    protected handleSelectChange = (
        fieldName: string
    ): (event: React.ChangeEvent<{name?: string, value: string}>, child: React.ReactNode) => void => (
        event: React.ChangeEvent<{name?: string, value: string}>,
        child: React.ReactNode
    ) => {
        this.setState({
            selectedUser: {
                ...this.state.selectedUser,
                [fieldName]: event.target.value as string
            }
        })
    }
}

export default UserForm;
