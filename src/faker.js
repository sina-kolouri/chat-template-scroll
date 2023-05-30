import { faker } from '@faker-js/faker';

export function messageGenerator(count = 1) {
    const messages = [];

    do {
        const rand = Boolean(Math.round(Math.random()));
        messages.push({
            id: faker.datatype.uuid(),
            type: rand ? 'receive' : 'sent',
            message: faker.lorem.paragraph(1),
            time: faker.date.recent().toLocaleTimeString()
        })
        count--;
    } while (count)

    return messages;
}