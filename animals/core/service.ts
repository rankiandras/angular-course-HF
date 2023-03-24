let i = 0;
export class Service {
  private serviceId: number;
  constructor() {
    this.serviceId = i++;
  }
  public getServiceId(): number {
    return this.serviceId;
  }
}