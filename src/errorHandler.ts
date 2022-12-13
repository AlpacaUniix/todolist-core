import {
  ConditionError,
  ConfigurationError,
  NotFoundError,
  PermissionError,
  ServiceUnavailableError,
} from 'errors'
import { IS_DEV } from 'config'
import { NextFunction, Request, Response } from 'express'
import { EntityNotFoundError, EntityPropertyNotFoundError, QueryFailedError } from 'typeorm'


export default (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction // eslint-disable-line @typescript-eslint/no-unused-vars
) => {
  switch (err.name) {
    case NotFoundError.name:
    case EntityNotFoundError.name:
      return res.status(404).send({
        errors: [
          {
            msg: IS_DEV ? err.message : 'Entity could not be found.',
            code: 'enitityNotFound',
          },
        ],
      })
    case EntityPropertyNotFoundError.name:
    case QueryFailedError.name:
      return res.status(400).send({
        errors: [
          {
            msg: IS_DEV
              ? err.message
              : 'Malformed input data or constraint violation.',
            code: 'database',
          },
        ],
      })
    case ConditionError.name:
      return res.status(400).send({
        errors: [
          {
            msg: IS_DEV ? err.message : 'Invalid condition',
            code: 'invalid',
            condition: (err as ConditionError).condition,
          },
        ],
      })
    case PermissionError.name:
      return res.status(403).send({
        errors: [
          {
            msg: IS_DEV ? err.message : 'Permission denied.',
            code: 'permissionDenied',
          },
        ],
      })
    case ConfigurationError.name:
      return res.status(405).send({
        errors: [
          {
            msg: IS_DEV
              ? err.message
              : 'Method not allowed within current configuration.',
            code: 'configuration',
            param: (err as ConfigurationError).param,
          },
        ],
      })
    case ServiceUnavailableError.name:
      return res.status(503).send({
        errors: [
          {
            msg: IS_DEV ? err.message : 'Upstream Service Unavailable',
            code: 'unreachable',
          },
        ],
      })
    default:
      logger.error(err.stack)
      return res.status(500).send({
        errors: [
          {
            msg: IS_DEV ? err.message : 'An unexpected error has occured.',
            code: 'unknown',
          },
        ],
      })
  }
}
