import { writeFileSync, readFileSync } from 'node:fs';
import type { User } from './data.ts';
import { toUser } from './validate.ts';

export function save(data: User, file: string): void {
    writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
}

export function load(file: string): User {
    return toUser(JSON.parse(readFileSync(file, 'utf8')));
}