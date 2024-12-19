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
            <Heading size="md">The machine's state is {current.name}</Heading>
            <div>
                <Heading size="sm">Machine</Heading>
                <Heading size="sm">States</Heading>
                <ul>
                    <li>night</li>
                    <li>day</li>
                </ul>
                <h4>transitions</h4>
                <ul>
                    <li>state: night ↔️ transition: toggle ↔️ state: day</li>
                </ul>
            </div>
            <Button onClick={() => send('toggle')}>{current.name === "night" ? "☀️" : "🌙"}</Button>
        </div>
    )
}

export default Interactive;