'use client'

import 'robot3/debug';
import { createMachine, interpret, state, transition } from 'robot3';

// going to create and interpret the machine here
// Interactive receives the state and sends the command to change state

const automaton = createMachine({
    night: state(
        transition('toggle', 'day')
    ),
    day: state(
        transition('toggle', 'night')
    )
});

const service = interpret(automaton, () => {});

export {automaton, service};



