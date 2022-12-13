export class PermissionError extends Error {
  constructor(message?: string) {
    super(message || 'Permission denied.')
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}

export class NotFoundError extends Error {
  constructor(message?: string) {
    super(message || 'Entity could not be found.')
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}

export class ServiceUnavailableError extends Error {
  constructor(message?: string) {
    super(message || 'Upstream Service Unavailable')
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}

export class ConfigurationError extends Error {
  param?: string
  constructor(message?: string, param?: string) {
    super(message || 'Configuration does not support this action.')
    this.name = this.constructor.name
    this.param = param
    Error.captureStackTrace(this, this.constructor)
  }
}

export class ConditionError extends Error {
  condition?: string
  constructor(message?: string, condition?: string) {
    super(message || 'Condition misconfiguration.')
    this.name = this.constructor.name
    this.condition = condition
    Error.captureStackTrace(this, this.constructor)
  }
}
