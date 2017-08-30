import xs, { Stream } from 'xstream';
import { VNode, DOMSource } from '@cycle/dom';
import { StateSource } from 'cycle-onionify';

import { Sources, Sinks } from './interfaces';
import { lineString } from './graph';

export function App(sources: Sources): Sinks {
    return {
        DOM: view()
    };
}

function view(): Stream<VNode> {
    return xs.of(
        <div>
            <h2>My awesome Cycle.js app</h2>
            <svg>
                <path d={ lineString } />
            </svg>
        </div>
    );
}
