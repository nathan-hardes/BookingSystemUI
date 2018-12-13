import { Space } from './space';

export class Booking {
    id: number;
    name: string;
    start: Date;
    end: Date;
    space: Space;
}