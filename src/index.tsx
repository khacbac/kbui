export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export * from './KBText';
export * from './KBView';
export * from './KBFlatList';
