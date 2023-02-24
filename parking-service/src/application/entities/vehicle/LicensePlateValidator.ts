import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsValidLicensePlate(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isValidLicensePlate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(licensePlate: string) {
          licensePlate = licensePlate.replace(/[\s-]+/g, '');
          const licensePlateRegex = new RegExp(
            '^([A-Z]{4}[0-9]{3})|([A-Z]{3}[0-9]{4})$',
          );
          return licensePlateRegex.test(licensePlate);
        },
      },
    });
  };
}
