import Ajv from 'ajv';

export function validateBody(req, res, next,schema) {

  const ajv = new Ajv();
  const validate = ajv.compile(schema);

        console.log('chrrtyck')
        console.log('chrrtyck')
        console.log('chrrtyck')
    const valid = validate(req.body);
    if (valid) {
    
      return next();
    } else {
      const error = validate.errors[0];
      return res.status(400).json({
        error: {
          message: `"${error.instancePath.substring(1)}" ${error.message}`,
        },
      });
    }
  };
