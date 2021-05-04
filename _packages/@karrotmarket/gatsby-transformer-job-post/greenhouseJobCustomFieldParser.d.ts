import type { NodePluginArgs } from 'gatsby';
import type { GreenhouseJobNode } from './types';
interface FieldParser<FieldType> {
    (node: GreenhouseJobNode, context: NodePluginArgs): FieldType | undefined;
}
export declare const employmentType: FieldParser<('FULL_TIME' | 'CONTRACTOR' | 'INTERN')>;
export declare const alternativeCivilianService: FieldParser<boolean>;
export declare const priorExperience: FieldParser<('YES' | 'NO' | 'WHATEVER')>;
export declare const keywords: FieldParser<string[]>;
export declare const chapter: FieldParser<string>;
export {};
