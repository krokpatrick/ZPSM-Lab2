import type { Subject, User } from './data.ts';

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function toSubject(input: unknown, index: number): Subject {
    if (!isRecord(input)) {
        throw new Error(`Subject ${index + 1} must be an object.`);
    }

    if (typeof input.name !== 'string' || input.name.trim() === '') {
        throw new Error(`Subject ${index + 1} must have a non-empty name.`);
    }

    if (typeof input.grade !== 'number' || !Number.isFinite(input.grade)) {
        throw new Error(`Subject ${index + 1} field "grade" must be a number.`);
    }

    if (typeof input.weight !== 'number' || !Number.isFinite(input.weight)) {
        throw new Error(`Subject ${index + 1} field "weight" must be a number.`);
    }

    return {
        name: input.name,
        grade: input.grade,
        weight: input.weight,
    };
}

export function toUser(input: unknown): User {
    if (!isRecord(input)) {
        throw new Error('Data must be an object.');
    }

    if (typeof input.firstName !== 'string' || input.firstName.trim() === '') {
        throw new Error('First name must be a non-empty string.');
    }

    if (typeof input.lastName !== 'string' || input.lastName.trim() === '') {
        throw new Error('Last name must be a non-empty string.');
    }

    if (!Array.isArray(input.subjects)) {
        throw new Error('Field "subjects" must be an array.');
    }

    return {
        firstName: input.firstName,
        lastName: input.lastName,
        subjects: input.subjects.map(toSubject),
    };
}
