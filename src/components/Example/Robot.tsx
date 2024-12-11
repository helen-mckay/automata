import { createMachine, interpret, state, transition } from 'robot3';

// going to create and interpret the machine here
// its values will be sent to:
    // interactive -> which is also where the machine will be changed
    // machine

const automata = createMachine({
    night: state(
        transition('toggle', 'day')
    ),
    day: state(
        transition('toggle', 'night')
    )
});

const service = interpret(automata, () => {
    if (service.machine.current === 'day')
    {
        console.log('good morning!');
    }
    else
    {
        console.log('good night!');
    }
})

export {automata, service};



