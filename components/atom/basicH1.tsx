import { makeStyles, createStyles } from "@material-ui/core";
import { FC } from "react";
import { themeColor } from "./styles";
import MediaQuery from "react-responsive";

const containerStyles = makeStyles(() => createStyles({
    container: {
        color: themeColor.textBlack,
        fontSize: "42px",
        fontWeight: "bold",
    },
    spContainer: {
        color: themeColor.textBlack,
        fontSize: "32px",
        fontWeight: "bold",
    },
}));

type HeaderProps = {
    children?: React.ReactNode,
}

const BasicHeader1:FC<HeaderProps> = (props) => {
    const classes = containerStyles();
    return (
        <div>
            <div>
            <MediaQuery query="(min-width: 768px)">
                <div className={ classes.container }>
                    { props.children }
                </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 767px)">
                <div className={ classes.spContainer }>
                    { props.children }
                </div>
            </MediaQuery>
        </div>
        </div>
    );
}

export default BasicHeader1;