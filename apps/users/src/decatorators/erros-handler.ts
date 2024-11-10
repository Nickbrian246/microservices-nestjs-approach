import { CustomException } from '../utils/customException';
import { QueryFailedError } from 'typeorm';
export function errorHandler() {
  return (
    target: any,
    propertyKey: any,
    propertyDescriptor: PropertyDescriptor,
  ) => {
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
        // console.log({ capturar: error });
        if (error instanceof QueryFailedError) {
          // console.log('errores', {
          //   error: error.driverError.code,
          //   message: error.message,
          //   name: error.name,
          //   paramters: error.parameters,
          //   parameters: error.query,
          //   h: error.stack,
          // });

          throw new CustomException(
            `${error.driverError.code}, ${error.message}`,
          );
        }
        throw new CustomException('bad request');
      }
    };
  };
}
