/* eslint-disable react/no-unescaped-entities */
'use client'

import { Button, Heading } from "@chakra-ui/react";
import { automaton } from "./NightModeRobot";
import { useMachine } from "react-robot";
import './NightModeStyles.css';

const Interactive = () => {

    const [current, send] = useMachine(automaton);

    return(
        <div className={current.name}>
            <Heading size="lg">Night Mode</Heading>
            <Heading size="md">The machine's state is <span className={current.name}>{current.name}</span></Heading>
            <pre>
            <code>
            {
            `const automaton = createMachine({
    {night: state(
        transition('toggle', 'day')
    ),
    day: state(
        transition('toggle', 'night')
    )
});`
            }
            </code>
            </pre>
            <Button onClick={() => send('toggle')}>{current.name === "night" ? "☀️" : "🌙"}</Button>
        </div>
    )
}

export default Interactive;