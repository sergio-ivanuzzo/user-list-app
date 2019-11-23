import * as React from "react";
import {
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Checkbox
} from "@material-ui/core";

class UserForm extends React.Component {
    public render(): React.ReactNode {
        return (
            <form autoComplete="false">
                <FormControl>
                    <InputLabel htmlFor="first-name">First Name</InputLabel>
                    <Input id="first-name" />
                    <FormHelperText id="my-helper-text1">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="last-name">Last Name</InputLabel>
                    <Input id="last-name" />
                    <FormHelperText id="my-helper-text2">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="birth-date">Birth Date</InputLabel>
                    <Input id="birth-date" />
                    <FormHelperText id="my-helper-text3">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="gender">Gender</InputLabel>
                    <Input id="gender" />
                    <FormHelperText id="my-helper-text4">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="job">Job</InputLabel>
                    <Input id="job" />
                    <FormHelperText id="my-helper-text5">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="biography">Biography</InputLabel>
                    <Input id="biography" />
                    <FormHelperText id="my-helper-text6">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="is-active">Is Active</InputLabel>
                    <Checkbox id="is-active" />
                    <FormHelperText id="my-helper-text7">We'll never share your email.</FormHelperText>
                </FormControl>
            </form>
        );
    }
}

export default UserForm;
