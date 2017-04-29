export class PaymentMethod {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public account: string,
    public expiration: string,
    public cvv: string
  ) {  }
}