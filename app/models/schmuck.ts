export class Schmuck {
  constructor(
    public id: number,
    public name: string,
    public kategorie: string,
    public ep: number,
    public vp: number) {
  }

  public get pictureUrl(): string {
        return `http://placekitten.com/200/200`;

  }
}
