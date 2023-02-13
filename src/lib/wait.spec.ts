import wait from "./wait";

describe("wait", () => {
  it("should wait default ms (1500)", async () => {
    const before = jest.getRealSystemTime();
    await wait();
    const after = jest.getRealSystemTime();
    expect((after - before) / 1000).toBeCloseTo(1.5, 1);
  });

  it("should wait 1000 milliseconds", async () => {
    const seconds = 1;
    const before = jest.getRealSystemTime();
    await wait(seconds * 1000);
    const after = jest.getRealSystemTime();
    expect((after - before) / 1000).toBeCloseTo(seconds, 1);
  });
});
