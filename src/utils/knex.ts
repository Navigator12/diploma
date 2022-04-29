export const getOne = <T = any>(payload: T[]): T | null => payload[0] || null;
