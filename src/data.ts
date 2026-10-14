export type Subject = {
    name: string;
    grade: number;
    weight: number;
};

export type User = {
    firstName: string;
    lastName: string;
    subjects: Subject[];
};

export const user: User = {
    firstName: 'Anna',
    lastName: 'Kowalska',
    subjects: [
        { name: 'Advanced Mobile Programming', grade: 4.5, weight: 3},
        { name: 'Databases', grade: 4.0, weight: 2},
        { name: 'Physical Education', grade: 5.0, weight: 1}
    ]
}


function printSummary(user: User) {

    let total : number = 0;
    let weights : number = 0;
    for (let i = 0; i < user.subjects.length; i++)
    {
        total += (user.subjects[i]?.grade as number) * (user.subjects[i]?.weight as number);
        weights += user.subjects[i]?.weight as number;
    }

    let averageWeightedGrade : number = total / weights;
    
    console.log(`${user.firstName} ${user.lastName} - weighted average: ${averageWeightedGrade.toFixed(2)}`);
}

printSummary(user);