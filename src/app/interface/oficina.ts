import { LocationOficina } from './location-oficina';

export interface Oficina {
    name: string;
    online: boolean;
    location: LocationOficina;
    category: string;
    lines: LinesOficina;
    active: boolean;
}

interface MetadataLineOficina {
    waiting: number;
    elapsed: number;
    name: string;
}

interface LinesOficina {
    [key: string]: MetadataLineOficina;
}
