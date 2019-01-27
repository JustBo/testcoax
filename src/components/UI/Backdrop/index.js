import React from 'react';

import classes from './Backdrop.module.css';

const index = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}>{props.children}</div> : null
);

export default index;
