import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsValidPhone(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isValidPhone',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(phone: string) {
          phone = phone.replace(/[^\d]+/g, '');
          const phoneRegex = new RegExp('^(55)?([0-9]{2})?(9)?([0-9]{8})$');
          return phoneRegex.test(phone);
        },
      },
    });
  };
}
