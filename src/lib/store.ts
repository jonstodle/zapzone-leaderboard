import { writable } from 'svelte/store';
import type { Ranking } from '$lib/types';
import { browser } from '$app/env';

let startValue: Ranking[] = [];
if (browser) {
	const localValue = localStorage.getItem('rankings');
	if (localValue != null) {
		startValue = JSON.parse(localValue);
	}
}

export const rankings = writable<Ranking[]>(startValue);

if (browser) {
	rankings.subscribe((value) => localStorage.setItem('rankings', JSON.stringify(value)));
}
