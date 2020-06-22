interface ISecondStore {
  test: string[];
}

export const createSecondStore = (): ISecondStore => ({
  test: [],
});

export type TSecondtStore = ReturnType<typeof createSecondStore>;
