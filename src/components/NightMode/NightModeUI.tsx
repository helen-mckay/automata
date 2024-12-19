/* eslint-disable react/no-unescaped-entities */
'use client'

import { Button } from "@chakra-ui/react";
import { automaton } from "./NightModeRobot";
import { useMachine } from "react-robot";

const Interactive = () => {

    const [current, send] = useMachine(automaton);

    return(
        <div>
            <h1>Interactive</h1>
            <h2>state is {current.name}</h2>
            <Button onClick={() => send('toggle')}>click me to change the machine's state</Button>
        </div>
    )
}

export default Interactive;