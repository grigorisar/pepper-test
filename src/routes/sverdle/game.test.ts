import { describe, it, expect } from 'vitest';
import { Game } from './game';

describe('game test', () => {
	it('returns true when a valid word is entered', () => {
		const game = new Game();
		expect(game.enter('zorro'.split(''))).toBe(true);
	});

	it('returns false when an invalid word is entered (greg tests)', () => {
		const game = new Game();
		expect(game.enter('zorro'.split(''))).toBe(true);
	});

	it('greg tests 2', () => {
		const game = new Game();
		expect(game.enter('zorro'.split(''))).toBe(true);
	});

	it('greg tests 3', () => {
		const game = new Game();
		expect(game.enter('zorro'.split(''))).toBe(false);
	});
});
