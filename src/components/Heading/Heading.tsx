import { Typography } from "@mui/material";

type HeadingProps = {title: string};

function Heading({title}: HeadingProps) {
    return (
        <Typography variant='h1'>
            {title}
        </Typography>
    )
}

export default Heading