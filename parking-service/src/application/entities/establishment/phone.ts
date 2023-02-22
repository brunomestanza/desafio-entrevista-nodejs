export class Phone {
  private readonly phone: string;

  get value(): string {
    return this.phone;
  }

  private validatePhone(phone: string): boolean {
    const phoneRegex = new RegExp(
      '^(\\+55)?(\\(?[0-9]{2}\\)?)\\s*(9?)([0-9]{4})(-?)([0-9]{4})$',
    );

    return phoneRegex.test(phone);
  }

  constructor(phone: string) {
    const isValidPhone = this.validatePhone(phone);

    if (!isValidPhone) {
      throw new Error('Phone format error.');
    }

    this.phone = phone;
  }
}
