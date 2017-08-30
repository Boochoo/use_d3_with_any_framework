import { run } from '@cycle/run';
import { makeDOMDriver } from '@cycle/dom';
import { makeHTTPDriver } from '@cycle/http';
import { timeDriver } from '@cycle/time';

import { Component, Sources, RootSinks } from './interfaces';
import { App } from './app';

const main: Component = App;

run(main as any, {
    DOM: makeDOMDriver('#app'),
    HTTP: makeHTTPDriver(),
    Time: timeDriver
});
