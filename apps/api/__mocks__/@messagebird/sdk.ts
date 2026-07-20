export class BirdClient {
  email = {
    send: jest.fn().mockResolvedValue(undefined),
  };
}
