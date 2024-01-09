import { Stack, Typography, Switch } from "@mui/material";
import { ThemeContext } from "../../context/themeprovider";
import { useContext } from "react";

const Toggle = () => {
    // const [checked, setChecked] = React.useState(true);

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setChecked(event.target.checked);
    // };
    const {isLightTime, handleTheme} = useContext(ThemeContext)

    return (
        <div>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Dark Mode</Typography>
                <Switch
            onClick={handleTheme}
            checked={isLightTime}
            // onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            />
                <Typography>Light Mode</Typography>
            </Stack>
        </div>
    );
}

export default Toggle;